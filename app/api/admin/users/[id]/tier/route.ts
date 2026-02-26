import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { prisma } from '@/lib/prisma';
import { logger } from '@/lib/utils/logger';
import { isUserAdmin } from '@/lib/utils/admin-check';

/**
 * PATCH /api/admin/users/[id]/tier
 * Update user tier (FREE or PRO)
 * Admin only
 */
export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
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

    const { id } = await params;
    const body = await request.json();
    const { tier } = body;

    // Validate tier
    if (!tier || !['FREE', 'PRO'].includes(tier)) {
      return new Response(
        JSON.stringify({ error: 'Invalid tier. Must be FREE or PRO' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Update user tier
    const user = await prisma.user.update({
      where: { id },
      data: { tier },
      select: {
        id: true,
        email: true,
        tier: true,
      },
    });

    logger.success(`Admin updated user tier: ${user.email} -> ${tier}`);

    return new Response(JSON.stringify({ success: true, user }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    const prismaError = error as { code?: string };
    if (prismaError.code === 'P2025') {
      return new Response(JSON.stringify({ error: 'User not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    logger.error('Error updating user tier', { error });
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
