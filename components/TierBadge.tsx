"use client";

interface TierBadgeProps {
  tier: string;
  size?: "sm" | "md" | "lg";
}

export function TierBadge({ tier, size = "md" }: TierBadgeProps) {
  const isPro = tier === "PRO";

  const sizeClasses = {
    sm: "px-2 py-1 text-xs",
    md: "px-3 py-1.5 text-sm",
    lg: "px-4 py-2 text-base",
  };

  const bgColor = isPro
    ? "bg-purple-100 dark:bg-purple-900/30"
    : "bg-gray-100 dark:bg-gray-800";

  const textColor = isPro
    ? "text-purple-700 dark:text-purple-300"
    : "text-gray-700 dark:text-gray-300";

  const borderColor = isPro
    ? "border-purple-200 dark:border-purple-800"
    : "border-gray-200 dark:border-gray-700";

  return (
    <div
      className={`inline-flex items-center gap-2 ${sizeClasses[size]} rounded-full border ${bgColor} ${textColor} ${borderColor} font-medium`}
    >
      {isPro && (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      )}
      <span>{isPro ? "Pro" : "Free"}</span>
    </div>
  );
}
