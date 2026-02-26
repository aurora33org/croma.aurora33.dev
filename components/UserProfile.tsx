"use client";

import { useSession, signOut } from "next-auth/react";
import { useState } from "react";

export function UserProfile() {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  if (!session?.user) return null;

  const getTierColor = (tier: string) => {
    return tier === "PRO" ? "text-purple-600 dark:text-purple-400" : "text-gray-600 dark:text-gray-400";
  };

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
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50">
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <p className="text-sm font-medium text-text dark:text-text-dark">{session.user.email}</p>
            <p className={`text-xs mt-1 ${getTierColor(session.user.tier || "FREE")}`}>
              {session.user.tier === "PRO" ? "Professional" : "Free"} Tier
            </p>
          </div>

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
