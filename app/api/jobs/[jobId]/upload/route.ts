import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import { jobManager, storageService } from '@/lib/services';
import { parseMultipartForm } from '@/lib/middleware/multer-handler';
import { NotFoundError, BadRequestError } from '@/lib/utils/errors';
import { assertSameOrigin } from '@/lib/utils/origin-check';
import { logger } from '@/lib/utils/logger';
import { DEFAULT_LIMITS } from '@/lib/config';

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

// Extension is derived from the validated MIME type, never from the client name.
const EXT_BY_MIME: Record<string, string> = {
  'image/jpeg': '.jpg',
  'image/jpg': '.jpg',
  'image/png': '.png',
  'image/webp': '.webp',
  'image/avif': '.avif',
  'image/gif': '.gif',
};

/** Keep a friendly, path-safe base name from the (untrusted) client filename. */
function safeBaseName(name: string): string {
  const base = path.basename(name).replace(/\.[^/.]+$/, ''); // strip dirs + ext
  const cleaned = base.replace(/[^a-zA-Z0-9-_ ]/g, '_').trim().slice(0, 80);
  return cleaned || 'image';
}

/**
 * POST /api/jobs/:jobId/upload
 * Upload image files for a compression job (no auth, single limit set)
 */
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ jobId: string }> }
) {
  try {
    if (!assertSameOrigin(request)) {
      return NextResponse.json(
        { success: false, error: 'forbidden_origin' },
        { status: 403 }
      );
    }

    const { jobId } = await params;
    if (!UUID_RE.test(jobId)) {
      throw new BadRequestError('Invalid job id');
    }

    const job = jobManager.getJob(jobId);

    if (!job) {
      throw new NotFoundError('Job');
    }

    if (job.status !== 'created') {
      throw new BadRequestError(`Cannot upload to job in status: ${job.status}`);
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

    // Validate file count and sizes against the single default limit set
    if (files.length > DEFAULT_LIMITS.MAX_FILES) {
      throw new BadRequestError(
        `Too many files. Maximum ${DEFAULT_LIMITS.MAX_FILES} files per request`
      );
    }

    for (const file of files) {
      if (file.size > DEFAULT_LIMITS.MAX_FILE_SIZE) {
        throw new BadRequestError(
          `File "${file.name}" exceeds maximum size of ${Math.round(DEFAULT_LIMITS.MAX_FILE_SIZE / (1024 * 1024))}MB`
        );
      }
    }

    // Save uploaded files to disk
    let totalSize = 0;
    const uploadedFiles: Array<{ filename: string; size: number; mimetype: string }> = [];

    const resolvedUploadDir = path.resolve(uploadDir);

    for (const file of files) {
      const buffer = await file.arrayBuffer();

      // Extension from the validated MIME type (allowlist), not the client name.
      const ext = EXT_BY_MIME[file.type];
      if (!ext) {
        throw new BadRequestError(`Unsupported file type: ${file.type}`);
      }

      const rand = Math.floor(Math.random() * 90) + 10;
      const filename = `${safeBaseName(file.name)}-a33${rand}${ext}`;
      const filepath = path.resolve(resolvedUploadDir, filename);

      // Defense-in-depth: the resolved path must stay inside the upload dir.
      if (filepath !== resolvedUploadDir && !filepath.startsWith(resolvedUploadDir + path.sep)) {
        throw new BadRequestError('Invalid file path');
      }

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

    logger.success(`Uploaded ${files.length} files for job ${jobId}`);

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
