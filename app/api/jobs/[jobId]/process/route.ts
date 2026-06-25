import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import { jobManager, storageService } from '@/lib/services';
import { imageProcessor } from '@/lib/services/image-processor';
import { zipService } from '@/lib/services/zip-service';
import { config } from '@/lib/config';
import { NotFoundError, BadRequestError } from '@/lib/utils/errors';
import { logger } from '@/lib/utils/logger';

interface ProcessRequest {
  format: string;
  quality?: number;
  resize?: {
    width?: number;
    height?: number;
    fit?: string;
  };
}

/**
 * POST /api/jobs/:jobId/process
 * Start compression processing for uploaded images (no auth)
 */
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ jobId: string }> }
) {
  try {
    const { jobId } = await params;
    const job = jobManager.getJob(jobId);

    if (!job) {
      throw new NotFoundError('Job');
    }

    if (job.status !== 'uploaded') {
      throw new BadRequestError(`Cannot process job in status: ${job.status}`);
    }

    const body: ProcessRequest = await request.json();

    // Validate format
    if (!config.outputFormats.includes(body.format)) {
      throw new BadRequestError(
        `Invalid format. Allowed: ${config.outputFormats.join(', ')}`
      );
    }

    // Set job settings and status
    jobManager.setJobSettings(jobId, { format: body.format, quality: body.quality, resize: body.resize });
    jobManager.setJobStatus(jobId, 'processing');

    logger.info(`Starting processing for job: ${jobId}`);

    // Get input and output directories
    const uploadDir = storageService.getUploadDir(jobId);
    const processedDir = storageService.getProcessedDir(jobId);

    // Get list of uploaded files
    const files = await storageService.listFiles(uploadDir);
    const inputPaths = files.map(f => path.join(uploadDir, f));

    // Process images asynchronously (non-blocking)
    setImmediate(async () => {
      try {
        const result = await imageProcessor.processImages(
          inputPaths,
          processedDir,
          {
            format: body.format,
            quality: body.quality,
            resize: body.resize
          },
          (processed, total) => {
            jobManager.updateProgress(jobId, processed, total);
          }
        );

        // Update job with results
        let successCount = 0;

        for (const fileResult of result.results) {
          if (fileResult.success) {
            jobManager.addProcessedFile(
              jobId,
              fileResult.outputFilename,
              fileResult.originalSize,
              fileResult.compressedSize
            );
            successCount++;
          }
        }

        // Create ZIP file
        const zipPath = path.join(storageService.getJobDir(jobId), 'processed.zip');
        await zipService.createZip(processedDir, zipPath);

        jobManager.setJobStatus(jobId, 'completed');
        logger.success(
          `Job ${jobId} completed: ${successCount}/${result.results.length} files processed`
        );
      } catch (error: unknown) {
        const err = error instanceof Error ? error : new Error(String(error));
        logger.error(`Job ${jobId} processing failed:`, err.message);
        jobManager.setJobStatus(jobId, 'failed', err.message);
      }
    });

    return NextResponse.json({
      success: true,
      message: 'Processing started',
      jobId
    });
  } catch (error: unknown) {
    const err = error instanceof Error ? error : new Error(String(error));
    const statusCode = 'statusCode' in err ? (err.statusCode as number) : 500;
    logger.error('Process error:', err.message);
    return NextResponse.json(
      { success: false, error: err.message },
      { status: statusCode }
    );
  }
}
