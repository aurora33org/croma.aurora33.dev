import { NextRequest, NextResponse } from 'next/server';
import { jobManager, storageService } from '@/lib/services';
import { rateLimiter, getClientIp } from '@/lib/services/rate-limiter';
import { assertSameOrigin } from '@/lib/utils/origin-check';
import { logger } from '@/lib/utils/logger';

/**
 * POST /api/jobs
 * Create a new compression job (no auth). Throttled per IP + same-origin only.
 */
export async function POST(request: NextRequest) {
  try {
    if (!assertSameOrigin(request)) {
      return NextResponse.json(
        { success: false, error: 'forbidden_origin' },
        { status: 403 }
      );
    }

    const { ok, retryAfterSec } = rateLimiter.check(getClientIp(request));
    if (!ok) {
      return NextResponse.json(
        { success: false, error: 'rate_limited' },
        { status: 429, headers: { 'Retry-After': String(retryAfterSec) } }
      );
    }

    const job = jobManager.createJob('anon');
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

// NOTE: No GET handler here on purpose. Listing all jobs would expose every
// active job id to anyone, and since downloads are authorized only by the
// (secret) job id, that would let anyone fetch other users' results.
