import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { prisma } from '@/lib/prisma';
import { logger } from '@/lib/utils/logger';
import { isUserAdmin } from '@/lib/utils/admin-check';

/**
 * GET /api/admin/jobs
 * Returns list of all jobs with user email
 * Query params: ?startDate=X&endDate=Y (optional, ISO format)
 * Admin only
 */
export async function GET(request: Request) {
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

    // Parse query parameters for date filtering
    const url = new URL(request.url);
    const startDate = url.searchParams.get('startDate');
    const endDate = url.searchParams.get('endDate');

    interface WhereClause {
      createdAt?: {
        gte?: Date;
        lte?: Date;
      };
    }

    const whereClause: WhereClause = {};

    if (startDate) {
      whereClause.createdAt = {
        ...whereClause.createdAt,
        gte: new Date(startDate),
      };
    }

    if (endDate) {
      whereClause.createdAt = {
        ...whereClause.createdAt,
        lte: new Date(endDate),
      };
    }

    const jobs = await prisma.job.findMany({
      where: whereClause,
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
      userId: job.userId,
      userEmail: job.user.email,
      fileCount: job.fileCount,
      originalSize: job.originalSize,
      compressedSize: job.compressedSize,
      format: job.format,
      createdAt: job.createdAt,
    }));

    return new Response(JSON.stringify(transformedJobs), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    logger.error('Error fetching jobs', { error });
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
