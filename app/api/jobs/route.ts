import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { jobManager, storageService } from '@/lib/services';
import { logger } from '@/lib/utils/logger';

/**
 * POST /api/jobs
 * Create a new compression job
 */
export async function POST() {
  try {
    // Get session and authenticate
    const session = await getServerSession();
    if (!session?.user?.id) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const job = jobManager.createJob(session.user.id);
    await storageService.createJobDirectories(job.id);

    logger.success(`Created job: ${job.id}`);

    return NextResponse.json({
      success: true,
      jobId: job.id,
      message: 'Job created successfully'
    }, { status: 201 });
  } catch (error: unknown) {
    const err = error instanceof Error ? error : new Error(String(error));
    logger.error('Failed to create job:', err.message);
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}

/**
 * GET /api/jobs
 * Get all jobs (debugging/monitoring only)
 */
export async function GET() {
  try {
    const jobs = jobManager.getAllJobs();
    return NextResponse.json({
      success: true,
      jobs
    });
  } catch (error: unknown) {
    const err = error instanceof Error ? error : new Error(String(error));
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}
