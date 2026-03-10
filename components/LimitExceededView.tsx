"use client";

import Link from "next/link";

interface LimitExceededViewProps {
  tier: string;
  limit: number;
  onClose: () => void;
}

export function LimitExceededView({
  tier,
  limit,
  onClose,
}: LimitExceededViewProps) {
  const isPro = tier === "PRO";
  const upgradePath = isPro ? "/dashboard/settings" : "/pricing";

  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-20 xl:px-[120px] max-w-[1720px] mx-auto">
      <div className="flex flex-col items-center justify-center min-h-[500px]">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-red-600 dark:text-red-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4v.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-text dark:text-text-dark mb-2">
              Daily Limit Reached
            </h2>
            <p className="text-text-muted dark:text-text-muted-dark mb-6">
              You&apos;ve used all {limit} compressions for today. Come back tomorrow or upgrade your plan for higher limits.
            </p>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6">
            <h3 className="font-medium text-text dark:text-text-dark mb-2">
              {isPro ? "Pro Plan Info" : "Upgrade to Pro"}
            </h3>
            <p className="text-sm text-text-muted dark:text-text-muted-dark">
              {isPro
                ? "You currently have the highest tier. Try again tomorrow or contact support for higher limits."
                : "Upgrade to Pro for up to 20 daily compressions, higher file limits, and priority support."}
            </p>
          </div>

          <div className="space-y-3">
            {!isPro && (
              <Link
                href={upgradePath}
                className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium text-center"
              >
                Upgrade to Pro
              </Link>
            )}

            <button
              onClick={onClose}
              className="w-full px-6 py-3 bg-white dark:bg-gray-800 text-text dark:text-text-dark border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-medium"
            >
              {isPro ? "Contact Support" : "Go Back"}
            </button>
          </div>

          <p className="text-center text-xs text-text-muted dark:text-text-muted-dark mt-6">
            Daily limit resets at 12:00 AM UTC
          </p>
        </div>
      </div>
    </div>
  );
}
