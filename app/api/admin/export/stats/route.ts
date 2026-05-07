import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { prisma } from '@/lib/prisma';
import { logger } from '@/lib/utils/logger';
import { exportStats } from '@/lib/csv-exporter';
import { isUserAdmin } from '@/lib/utils/admin-check';

/**
 * POST /api/admin/export/stats
 * Export statistics as CSV file
 * Admin only
 */
export async function POST() {
  try {
    const session = await getServerSession(authOptions);

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
      (sum: number, job: { originalSize: bigint | number | null }) => sum + Number(job.originalSize),
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

    const csv = exportStats(stats);

    logger.success('Admin exported statistics to CSV');

    return new Response(csv, {
      status: 200,
      headers: {
        'Content-Type': 'text/csv',
        'Content-Disposition': `attachment; filename="stats_${new Date().toISOString().split('T')[0]}.csv"`,
      },
    });
  } catch (error) {
    logger.error('Error exporting stats', { error });
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
