"use client";

import Link from "next/link";

export function LoginPrompt() {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-20 xl:px-[120px] max-w-[1720px] mx-auto mb-12 sm:mb-16 md:mb-20">
      <div className="bg-container dark:bg-primary/10 border border-primary/30 rounded-2xl p-6 sm:p-8 md:p-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-text dark:text-text-dark mb-2">
              Unlock More Features
            </h2>
            <p className="text-text-muted dark:text-text-muted-dark max-w-md">
              Create a free account to track your compression history, get higher limits, and enjoy priority support.
            </p>
          </div>

          <div className="flex gap-3 whitespace-nowrap">
            <Link
              href="/auth/login"
              className="px-6 py-3 bg-background dark:bg-bg-dark text-text dark:text-text-dark border border-primary/40 rounded-lg hover:border-primary transition-colors font-medium"
            >
              Login
            </Link>
            <Link
              href="/auth/register"
              className="px-6 py-3 bg-primary hover:opacity-90 text-white rounded-lg transition-opacity font-medium"
            >
              Sign Up Free
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
