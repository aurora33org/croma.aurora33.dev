import { getServerSession } from 'next-auth';
import { prisma } from '@/lib/prisma';
import { logger } from '@/lib/utils/logger';
import { exportUsers } from '@/lib/csv-exporter';

const ADMIN_EMAIL = 'admin@example.com';

/**
 * Check if user is admin
 */
function isAdmin(email?: string): boolean {
  return email === ADMIN_EMAIL;
}

/**
 * POST /api/admin/export/users
 * Export users as CSV file
 * Admin only
 */
export async function POST() {
  try {
    const session = await getServerSession();

    if (!session?.user?.email) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (!isAdmin(session.user.email)) {
      return new Response(JSON.stringify({ error: 'Forbidden' }), {
        status: 403,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const users = await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        tier: true,
        createdAt: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    const csv = exportUsers(users);

    logger.success(`Admin exported ${users.length} users to CSV`);

    return new Response(csv, {
      status: 200,
      headers: {
        'Content-Type': 'text/csv',
        'Content-Disposition': `attachment; filename="users_${new Date().toISOString().split('T')[0]}.csv"`,
      },
    });
  } catch (error) {
    logger.error('Error exporting users', { error });
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
