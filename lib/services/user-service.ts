import { prisma } from '@/lib/prisma';
import { logger } from '@/lib/utils/logger';
import { NotFoundError } from '@/lib/utils/errors';
import { getDailyUsageRecord } from './rate-limiter';
import { TIER_LIMITS, type Tier } from '@/lib/config';

/**
 * Get user's current tier from database
 *
 * @param userId - User ID
 * @returns User's tier (FREE or PRO)
 */
export async function getUserTier(userId: string): Promise<Tier> {
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { tier: true },
    });

    if (!user) {
      throw new NotFoundError('User');
    }

    const tier = user.tier as string;
    if (!['FREE', 'PRO'].includes(tier)) {
      logger.warn(`Invalid tier in database for user ${userId}: ${tier}, defaulting to FREE`);
      return 'FREE' as Tier;
    }
    return tier as Tier;
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    logger.error('Error getting user tier:', errorMessage);
    // Default to FREE tier if there's an error
    return 'FREE';
  }
}

/**
 * Get current day's usage and remaining compressions for a user
 *
 * @param userId - User ID
 * @returns { usageCount: number, remaining: number }
 */
export async function getUserDailyUsage(
  userId: string
): Promise<{ usageCount: number; remaining: number }> {
  try {
    // Get user tier
    const userTier = await getUserTier(userId);
    const dailyLimit = TIER_LIMITS[userTier].MAX_DAILY_USAGE;

    // Get today's usage
    const dailyUsage = await getDailyUsageRecord(userId);

    const usageCount = dailyUsage?.usageCount || 0;
    const remaining = Math.max(0, dailyLimit - usageCount);

    logger.debug(`User ${userId} daily usage: ${usageCount}/${dailyLimit} (${remaining} remaining)`);

    return {
      usageCount,
      remaining,
    };
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    logger.error('Error getting user daily usage:', errorMessage);
    // Return safe defaults if there's an error
    return {
      usageCount: 0,
      remaining: 6, // Assume FREE tier
    };
  }
}

/**
 * Update user's tier (admin only)
 * WARNING: This should only be called after verifying admin permissions
 *
 * @param userId - User ID to update
 * @param tier - New tier (FREE or PRO)
 */
export async function updateUserTier(userId: string, tier: Tier): Promise<void> {
  try {
    // Validate tier
    if (!['FREE', 'PRO'].includes(tier)) {
      throw new Error(`Invalid tier: ${tier}`);
    }

    await prisma.user.update({
      where: { id: userId },
      data: { tier },
      select: { id: true, email: true, tier: true },
    });

    logger.success(`Updated user ${userId} tier to ${tier}`);
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    logger.error('Error updating user tier:', errorMessage);
    throw error;
  }
}

/**
 * Get user information (public fields)
 *
 * @param userId - User ID
 * @returns User object with id, email, tier
 */
export async function getUser(userId: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        tier: true,
        createdAt: true,
      },
    });

    if (!user) {
      throw new NotFoundError('User');
    }

    return user;
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    logger.error('Error getting user:', errorMessage);
    throw error;
  }
}
