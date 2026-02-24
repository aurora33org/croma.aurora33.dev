"use client";

import Link from "next/link";

export function LoginPrompt() {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-20 xl:px-[120px] max-w-[1720px] mx-auto mb-12 sm:mb-16 md:mb-20">
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800 rounded-2xl p-6 sm:p-8 md:p-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-text dark:text-text-dark mb-2">
              Unlock More Features
            </h2>
            <p className="text-text-muted dark:text-text-muted-dark max-w-md">
              Create a free account to track your compression history, get higher limits, and enjoy priority support.
            </p>
          </div>

          <div className="flex gap-3 whitespace-nowrap">
            <Link
              href="/auth/login"
              className="px-6 py-3 bg-white dark:bg-gray-800 text-text dark:text-text-dark border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-medium"
            >
              Login
            </Link>
            <Link
              href="/auth/register"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium"
            >
              Sign Up Free
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
