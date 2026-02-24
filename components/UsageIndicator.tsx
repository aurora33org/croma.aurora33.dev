"use client";

import { useEffect, useState } from "react";

interface UsageData {
  usageCount: number;
  limit: number;
  remaining: number;
  resetTime: string;
}

export function UsageIndicator({ userId }: { userId: string }) {
  const [usage, setUsage] = useState<UsageData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsage = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(`/api/user/usage?userId=${userId}`);
        const data = await response.json();

        if (data.success) {
          setUsage(data.data);
        } else {
          setError(data.error || "Failed to fetch usage data");
        }
      } catch (err) {
        setError("Failed to fetch usage data");
        console.error("Error fetching usage:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsage();
    // Refresh every 30 seconds
    const interval = setInterval(fetchUsage, 30000);
    return () => clearInterval(interval);
  }, [userId]);

  if (loading) {
    return (
      <div className="px-4 sm:px-8 md:px-16 lg:px-20 xl:px-[120px] max-w-[1720px] mx-auto mb-6 animate-pulse">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 h-24" />
      </div>
    );
  }

  if (error || !usage) {
    return null;
  }

  const percentage = (usage.usageCount / usage.limit) * 100;
  let barColor = "bg-green-500";
  let textColor = "text-green-600 dark:text-green-400";

  if (percentage >= 100) {
    barColor = "bg-red-500";
    textColor = "text-red-600 dark:text-red-400";
  } else if (percentage >= 75) {
    barColor = "bg-orange-500";
    textColor = "text-orange-600 dark:text-orange-400";
  }

  // Note: resetTime is used for display purposes in the future
  // const resetDate = new Date(usage.resetTime);

  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-20 xl:px-[120px] max-w-[1720px] mx-auto mb-6">
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 sm:p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-medium text-text dark:text-text-dark">
            Daily Compression Limit
          </h3>
          <p className={`text-sm font-medium ${textColor}`}>
            {usage.usageCount} of {usage.limit} used
          </p>
        </div>

        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2">
          <div
            className={`${barColor} h-2 rounded-full transition-all duration-300`}
            style={{ width: `${Math.min(percentage, 100)}%` }}
          />
        </div>

        <p className="text-xs text-text-muted dark:text-text-muted-dark">
          Resets tomorrow at 12:00 AM
        </p>
      </div>
    </div>
  );
}
