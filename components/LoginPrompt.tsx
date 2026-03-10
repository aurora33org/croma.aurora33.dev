"use client";

import Link from "next/link";
import { useTranslations } from '@/lib/i18n-context';

export function LoginPrompt() {
  const t = useTranslations('common');
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-20 xl:px-[120px] max-w-[1720px] mx-auto mb-12 sm:mb-16 md:mb-20">
      <div className="bg-container dark:bg-primary/10 border border-primary/30 rounded-2xl p-6 sm:p-8 md:p-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-text dark:text-text-dark mb-2">
              {t('loginPrompt.title')}
            </h2>
            <p className="text-text-muted dark:text-text-muted-dark max-w-md">
              {t('loginPrompt.description')}
            </p>
          </div>

          <div className="flex gap-3 whitespace-nowrap">
            <Link
              href="/auth/login"
              className="px-6 py-3 bg-background dark:bg-bg-dark text-text dark:text-text-dark border border-primary/40 rounded-lg hover:border-primary transition-colors font-medium"
            >
              {t('loginPrompt.login')}
            </Link>
            <Link
              href="/auth/register"
              className="px-6 py-3 bg-primary hover:opacity-90 text-white rounded-lg transition-opacity font-medium"
            >
              {t('loginPrompt.signUp')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
