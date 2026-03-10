"use client";

import { useSession, signOut } from "next-auth/react";
import { useState } from "react";
import { useTranslations } from "@/lib/i18n-context";

export function UserProfile() {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations('common');

  if (!session?.user) return null;

  const getTierColor = (tier: string) => {
    return tier === "PRO" ? "text-primary" : "text-text-muted dark:text-text-muted-dark";
  };

  const proBenefitKeys = [
    'pro_benefits.images_per_batch',
    'pro_benefits.file_size',
    'pro_benefits.batches_per_day',
  ] as const;

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        aria-label="User menu"
      >
        <div className="text-right">
          <p className="text-sm font-medium text-text dark:text-text-dark truncate max-w-[120px]">
            {session.user.email?.split("@")[0]}
          </p>
          <p className={`text-xs ${getTierColor(session.user.tier || "FREE")}`}>
            {session.user.tier || "FREE"} tier
          </p>
        </div>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50">
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <p className="text-sm font-medium text-text dark:text-text-dark">{session.user.email}</p>
            <p className={`text-xs mt-1 ${getTierColor(session.user.tier || "FREE")}`}>
              {session.user.tier === "PRO" ? "Professional" : "Free"} Tier
            </p>
          </div>

          {session.user.tier === "PRO" && (
            <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
              <p className="text-xs font-semibold text-text-muted dark:text-text-muted-dark uppercase tracking-wide mb-2">
                {t('pro_benefits.title')}
              </p>
              {proBenefitKeys.map((key) => (
                <div key={key} className="flex items-center gap-2 mb-1">
                  <svg className="w-3 h-3 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs text-text dark:text-text-dark">{t(key)}</span>
                </div>
              ))}
            </div>
          )}

          <button
            onClick={() => {
              signOut({ redirect: true, callbackUrl: "/" });
              setIsOpen(false);
            }}
            className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 text-text dark:text-text-dark transition-colors text-sm"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
