import { prisma } from '@/lib/prisma';
import { logger } from '@/lib/utils/logger';
import type { Tier } from '@/lib/config';

/**
 * Get UTC midnight date for today
 */
function getUtcMidnight(): Date {
  const now = new Date();
  const utcDate = new Date(now.toISOString());
  utcDate.setUTCHours(0, 0, 0, 0);
  return utcDate;
}

/**
 * Check if user has remaining daily usage for their tier
 * Returns true if user can still compress, false if exceeded daily limit
 *
 * @param userId - User ID to check
 * @param tier - User's tier (FREE or PRO)
 * @returns true if user can compress, false if limit exceeded
 */
export async function checkDailyUsage(userId: string, tier: Tier): Promise<boolean> {
  try {
    const today = getUtcMidnight();

    // Get or create daily usage record for today
    const dailyUsage = await prisma.dailyUsage.findFirst({
      where: {
        userId,
        date: {
          gte: today,
          lt: new Date(today.getTime() + 24 * 60 * 60 * 1000),
        },
      },
    });

    // Determine limit based on tier
    const dailyLimit = tier === 'PRO' ? 20 : 6;

    // If no record exists, user hasn't compressed today
    if (!dailyUsage) {
      logger.debug(`No daily usage record for user ${userId}, returning true`);
      return true;
    }

    // Check if user is under limit
    const canCompress = dailyUsage.usageCount < dailyLimit;

    logger.debug(
      `User ${userId} daily usage check: ${dailyUsage.usageCount}/${dailyLimit} (${canCompress ? 'allowed' : 'blocked'})`
    );

    return canCompress;
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    logger.error('Critical: Database error checking daily usage, denying request:', errorMessage);
    // Fail secure: deny on error
    return false;
  }
}

/**
 * Increment daily usage for user after successful compression
 * Increments usageCount and totalSize in database
 * Creates new DailyUsage record if one doesn't exist for today
 *
 * @param userId - User ID
 * @param totalSize - Total size of original files (in bytes)
 */
export async function incrementDailyUsage(userId: string, totalSize: number): Promise<void> {
  try {
    const today = getUtcMidnight();

    // Use upsert to create or update the daily usage record
    await prisma.dailyUsage.upsert({
      where: {
        userId_date: {
          userId,
          date: today,
        },
      },
      update: {
        usageCount: {
          increment: 1,
        },
        totalSize: {
          increment: BigInt(totalSize),
        },
      },
      create: {
        userId,
        date: today,
        usageCount: 1,
        totalSize: BigInt(totalSize),
      },
    });

    logger.debug(`Incremented daily usage for user ${userId}: +${totalSize} bytes`);
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    logger.error('Error incrementing daily usage:', errorMessage);
    throw error;
  }
}

/**
 * Reset daily usage for all users (for testing/manual reset)
 * WARNING: This will reset all DailyUsage records for today
 */
export async function resetDailyUsage(): Promise<void> {
  try {
    const today = getUtcMidnight();

    const result = await prisma.dailyUsage.deleteMany({
      where: {
        date: {
          gte: today,
          lt: new Date(today.getTime() + 24 * 60 * 60 * 1000),
        },
      },
    });

    logger.warn(`Reset daily usage records: ${result.count} records deleted`);
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    logger.error('Error resetting daily usage:', errorMessage);
    throw error;
  }
}

/**
 * Get daily usage record for a specific user and date
 * (Helper function for admin/debugging)
 */
export async function getDailyUsageRecord(userId: string, date?: Date) {
  try {
    const targetDate = date || getUtcMidnight();

    const dailyUsage = await prisma.dailyUsage.findFirst({
      where: {
        userId,
        date: {
          gte: targetDate,
          lt: new Date(targetDate.getTime() + 24 * 60 * 60 * 1000),
        },
      },
    });

    return dailyUsage;
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    logger.error('Error getting daily usage record:', errorMessage);
    return null;
  }
}
