import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import { jobManager, storageService } from '@/lib/services';
import { NotFoundError, BadRequestError } from '@/lib/utils/errors';
import { logger } from '@/lib/utils/logger';

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

const MIME_BY_FORMAT: Record<string, string> = {
  webp: 'image/webp',
  jpeg: 'image/jpeg',
  png: 'image/png',
  avif: 'image/avif',
};

/**
 * GET /api/jobs/:jobId/download/:filename
 * Download a single processed image
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ jobId: string; filename: string }> }
) {
  try {
    const { jobId, filename } = await params;

    if (!UUID_RE.test(jobId)) {
      throw new BadRequestError('Invalid job id');
    }

    const job = jobManager.getJob(jobId);

    if (!job) {
      throw new NotFoundError('Job');
    }

    if (job.status !== 'completed') {
      throw new BadRequestError(
        `Cannot download job in status: ${job.status}. Job must be completed.`
      );
    }

    // Filename must match a file the job actually produced — this is the
    // real anti path-traversal gate, not the raw URL segment.
    const fileEntry = job.processedFiles.find(f => f.filename === filename);
    if (!fileEntry) {
      throw new NotFoundError('File');
    }

    const processedDir = path.resolve(storageService.getProcessedDir(jobId));
    const filePath = path.resolve(processedDir, fileEntry.filename);

    if (filePath !== processedDir && !filePath.startsWith(processedDir + path.sep)) {
      throw new BadRequestError('Invalid file path');
    }

    let fileBuffer: Buffer;
    try {
      fileBuffer = await fs.readFile(filePath);
    } catch {
      throw new NotFoundError('File');
    }

    const format = job.settings?.format as string | undefined;
    const contentType = (format && MIME_BY_FORMAT[format]) || 'application/octet-stream';

    logger.info(`Downloading single file ${fileEntry.filename} for job ${jobId}`);

    const response = new NextResponse(new Uint8Array(fileBuffer));
    response.headers.set('Content-Disposition', `attachment; filename="${fileEntry.filename}"`);
    response.headers.set('Content-Type', contentType);
    response.headers.set('Content-Length', fileBuffer.length.toString());
    return response;
  } catch (error: any) {
    const statusCode = error.statusCode || 500;
    logger.error('Single file download error:', error.message);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: statusCode }
    );
  }
}
