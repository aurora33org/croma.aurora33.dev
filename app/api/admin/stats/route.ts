import { getServerSession } from 'next-auth';
import { prisma } from '@/lib/prisma';
import { logger } from '@/lib/utils/logger';
import { isUserAdmin } from '@/lib/utils/admin-check';

/**
 * GET /api/admin/stats
 * Returns aggregate statistics
 * Admin only
 */
export async function GET() {
  try {
    const session = await getServerSession();

    if (!session?.user?.email) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (!isUserAdmin(session)) {
      return new Response(JSON.stringify({ error: 'Forbidden' }), {
        status: 403,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Count total users
    const totalUsers = await prisma.user.count();

    // Count total compressions (jobs)
    const totalCompressions = await prisma.job.count();

    // Calculate total GB processed
    const jobsResult = await prisma.job.findMany({
      select: {
        originalSize: true,
      },
    });

    const totalBytes = jobsResult.reduce(
      (sum, job) => sum + Number(job.originalSize),
      0
    );
    const totalGB = totalBytes / (1024 * 1024 * 1024);

    // Count free vs pro users
    const freeCount = await prisma.user.count({
      where: { tier: 'FREE' },
    });

    const proCount = await prisma.user.count({
      where: { tier: 'PRO' },
    });

    const stats = {
      totalUsers,
      totalCompressions,
      totalGB: parseFloat(totalGB.toFixed(2)),
      freeCount,
      proCount,
    };

    return new Response(JSON.stringify(stats), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    logger.error('Error fetching stats', { error });
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
