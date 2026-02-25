import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";
import { TIER_LIMITS } from "@/lib/config";
import { logger } from "@/lib/utils/logger";

/**
 * UTC midnight for today
 */
function getUtcMidnight(): Date {
  const now = new Date();
  const utcDate = new Date(now.toISOString());
  utcDate.setUTCHours(0, 0, 0, 0);
  return utcDate;
}

/**
 * Get tomorrow's midnight (reset time)
 */
function getTomorrowMidnight(): Date {
  const midnight = getUtcMidnight();
  return new Date(midnight.getTime() + 24 * 60 * 60 * 1000);
}

/**
 * GET /api/user/limits
 * Get tier limits and current usage for the authenticated user
 *
 * Response:
 * {
 *   success: boolean,
 *   data: {
 *     tier: "FREE" | "PRO",
 *     batchesUsedToday: number,
 *     batchesLimit: number,
 *     imagesThisBatch: number,
 *     imagesPerBatchLimit: number,
 *     maxFileSize: number,
 *     nextResetTime: string (ISO 8601)
 *   },
 *   error?: string
 * }
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      );
    }

    const userId = session.user.id;
    const userTier = (session.user.tier as "FREE" | "PRO") || "FREE";

    // Get tier limits
    const tierLimits = TIER_LIMITS[userTier];
    const batchesLimit = tierLimits.MAX_DAILY_USAGE;
    const imagesPerBatchLimit = tierLimits.MAX_FILES;
    const maxFileSize = tierLimits.MAX_FILE_SIZE;

    // Get today's usage record
    const today = getUtcMidnight();
    const tomorrow = getTomorrowMidnight();

    const dailyUsage = await prisma.dailyUsage.findFirst({
      where: {
        userId,
        date: {
          gte: today,
          lt: tomorrow,
        },
      },
    });

    const batchesUsedToday = dailyUsage?.usageCount || 0;

    logger.debug(
      `User ${userId} (${userTier}) limits: ${batchesUsedToday}/${batchesLimit} batches, max ${imagesPerBatchLimit} images per batch, max file size ${maxFileSize}`
    );

    return NextResponse.json(
      {
        success: true,
        data: {
          tier: userTier,
          batchesUsedToday,
          batchesLimit,
          imagesThisBatch: 0,
          imagesPerBatchLimit,
          maxFileSize,
          nextResetTime: tomorrow.toISOString(),
        },
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    logger.error("Error fetching user limits:", errorMessage);

    return NextResponse.json(
      { success: false, error: "Failed to fetch limits data" },
      { status: 500 }
    );
  }
}
