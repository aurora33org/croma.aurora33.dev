import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { prisma } from '@/lib/prisma';
import { logger } from '@/lib/utils/logger';
import { exportJobs } from '@/lib/csv-exporter';
import { isUserAdmin } from '@/lib/utils/admin-check';

/**
 * POST /api/admin/export/jobs
 * Export jobs as CSV file
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

    const jobs = await prisma.job.findMany({
      select: {
        id: true,
        userId: true,
        fileCount: true,
        originalSize: true,
        compressedSize: true,
        format: true,
        createdAt: true,
        user: {
          select: {
            email: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    // Transform to include userEmail at top level
    const transformedJobs = jobs.map((job) => ({
      id: job.id,
      userEmail: job.user.email,
      fileCount: job.fileCount,
      originalSize: job.originalSize,
      compressedSize: job.compressedSize,
      format: job.format,
      createdAt: job.createdAt,
    }));

    const csv = exportJobs(transformedJobs);

    logger.success(`Admin exported ${jobs.length} jobs to CSV`);

    return new Response(csv, {
      status: 200,
      headers: {
        'Content-Type': 'text/csv',
        'Content-Disposition': `attachment; filename="jobs_${new Date().toISOString().split('T')[0]}.csv"`,
      },
    });
  } catch (error) {
    logger.error('Error exporting jobs', { error });
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
