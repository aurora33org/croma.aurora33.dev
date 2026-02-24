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
 * GET /api/user/usage
 * Get daily usage for the authenticated user
 *
 * Query params:
 * - userId (optional): User ID to fetch usage for. If not provided, uses session user ID
 *
 * Response:
 * {
 *   success: boolean,
 *   data: {
 *     usageCount: number,
 *     limit: number,
 *     remaining: number,
 *     resetTime: string (ISO 8601)
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
    const limit = TIER_LIMITS[userTier].MAX_DAILY_USAGE;

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

    const usageCount = dailyUsage?.usageCount || 0;
    const remaining = Math.max(0, limit - usageCount);

    logger.debug(
      `User ${userId} usage: ${usageCount}/${limit} (remaining: ${remaining})`
    );

    return NextResponse.json(
      {
        success: true,
        data: {
          usageCount,
          limit,
          remaining,
          resetTime: tomorrow.toISOString(),
        },
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    logger.error("Error fetching user usage:", errorMessage);

    return NextResponse.json(
      { success: false, error: "Failed to fetch usage data" },
      { status: 500 }
    );
  }
}
