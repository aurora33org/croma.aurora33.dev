import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { promises as fs } from 'fs';
import path from 'path';
import { jobManager, storageService } from '@/lib/services';
import { parseMultipartForm } from '@/lib/middleware/multer-handler';
import { NotFoundError, BadRequestError } from '@/lib/utils/errors';
import { logger } from '@/lib/utils/logger';
import { TIER_LIMITS } from '@/lib/config';
import { getUserTier } from '@/lib/services/user-service';
import { checkDailyUsage } from '@/lib/services/rate-limiter';

/**
 * POST /api/jobs/:jobId/upload
 * Upload image files for a compression job
 * Anonymous users allowed with FREE tier limits; authenticated users use their tier
 */
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ jobId: string }> }
) {
  try {
    const session = await getServerSession(authOptions);
    const userId = (session?.user as any)?.id || null;
    const isAnonymous = !userId;

    const { jobId } = await params;
    const job = jobManager.getJob(jobId);

    if (!job) {
      throw new NotFoundError('Job');
    }

    // Verify ownership: authenticated users must own the job;
    // anonymous jobs (userId 'anon') are accessible by anyone with the jobId (UUID is secret enough)
    if (!isAnonymous && job.userId !== userId) {
      return NextResponse.json(
        { success: false, error: 'Forbidden: Job belongs to another user' },
        { status: 403 }
      );
    }

    if (job.status !== 'created') {
      throw new BadRequestError(`Cannot upload to job in status: ${job.status}`);
    }

    // Get tier limits: authenticated users get their DB tier, anonymous always FREE
    const userTier = isAnonymous ? 'FREE' : await getUserTier(userId);
    const tierLimits = TIER_LIMITS[userTier];

    // Daily usage check only applies to authenticated users (anonymous tracking is client-side)
    if (!isAnonymous) {
      const canUpload = await checkDailyUsage(userId, userTier);
      if (!canUpload) {
        return NextResponse.json(
          {
            success: false,
            error: `Daily compression limit exceeded for ${userTier} tier (${tierLimits.MAX_DAILY_USAGE} per day)`
          },
          { status: 429 }
        );
      }
    }

    const uploadDir = storageService.getUploadDir(jobId);

    // Update job status
    jobManager.setJobStatus(jobId, 'uploading');

    // Parse multipart form data
    const { files, error } = await parseMultipartForm(request, uploadDir);

    if (error) {
      jobManager.setJobStatus(jobId, 'failed', error);
      throw new BadRequestError(error);
    }

    if (!files || files.length === 0) {
      throw new BadRequestError('No files were uploaded');
    }

    // Validate file count and sizes against tier limits
    if (files.length > tierLimits.MAX_FILES) {
      throw new BadRequestError(
        `Too many files. Maximum ${tierLimits.MAX_FILES} files per request for ${userTier} tier`
      );
    }

    for (const file of files) {
      if (file.size > tierLimits.MAX_FILE_SIZE) {
        throw new BadRequestError(
          `File "${file.name}" exceeds maximum size of ${Math.round(tierLimits.MAX_FILE_SIZE / (1024 * 1024))}MB for ${userTier} tier`
        );
      }
    }

    // Save uploaded files to disk
    let totalSize = 0;
    const uploadedFiles: Array<{ filename: string; size: number; mimetype: string }> = [];

    for (const file of files) {
      const buffer = await file.arrayBuffer();
      const filename = `${Date.now()}-${file.name}`;
      const filepath = path.join(uploadDir, filename);

      await fs.writeFile(filepath, Buffer.from(buffer));

      jobManager.addUploadedFile(jobId, filename, file.size);
      uploadedFiles.push({
        filename,
        size: file.size,
        mimetype: file.type
      });
      totalSize += file.size;
    }

    // Update job status
    jobManager.setJobStatus(jobId, 'uploaded');

    // Save metadata
    await storageService.saveMetadata(jobId, {
      uploadedAt: Date.now(),
      fileCount: files.length,
      totalSize
    });

    logger.success(`Uploaded ${files.length} files for job ${jobId} (user: ${userId || 'anon'})`);

    return NextResponse.json({
      success: true,
      filesUploaded: files.length,
      totalSize,
      files: uploadedFiles
    });
  } catch (error: unknown) {
    const err = error instanceof Error ? error : new Error(String(error));
    const statusCode = 'statusCode' in err ? (err.statusCode as number) : 500;
    logger.error('Upload error:', err.message);
    return NextResponse.json(
      { success: false, error: err.message },
      { status: statusCode }
    );
  }
}
