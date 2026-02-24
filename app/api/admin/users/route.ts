import { getServerSession } from 'next-auth';
import { prisma } from '@/lib/prisma';
import { logger } from '@/lib/utils/logger';

const ADMIN_EMAIL = 'admin@example.com';

/**
 * Check if user is admin
 */
function isAdmin(email?: string): boolean {
  return email === ADMIN_EMAIL;
}

/**
 * GET /api/admin/users
 * Returns list of all users
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

    return new Response(JSON.stringify(users), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    logger.error('Error fetching users', { error });
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
