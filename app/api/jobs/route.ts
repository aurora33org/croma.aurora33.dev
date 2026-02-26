import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { jobManager, storageService } from '@/lib/services';
import { logger } from '@/lib/utils/logger';

/**
 * POST /api/jobs
 * Create a new compression job
 * Anonymous users are allowed (FREE tier limits enforced at upload)
 */
export async function POST() {
  try {
    const session = await getServerSession(authOptions);
    // Anonymous users get userId 'anon'; authenticated users use their real id
    const userId = (session?.user as any)?.id || 'anon';

    const job = jobManager.createJob(userId);
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
