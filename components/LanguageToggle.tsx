'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useLocale } from '@/lib/i18n-context';
import { locales } from '@/i18n/config';

export function LanguageToggle() {
  const router = useRouter();
  const pathname = usePathname();
  const language = useLocale();

  const toggleLanguage = () => {
    const newLanguage = language === 'es' ? 'en' : 'es';

    // Swap the first path segment for the new locale
    const segments = pathname.split('/');
    if (locales.includes(segments[1] as typeof locales[number])) {
      segments[1] = newLanguage;
    } else {
      segments.splice(1, 0, newLanguage);
    }
    const target = segments.join('/') || `/${newLanguage}`;

    // Remember preference (cookie read by middleware on next root visit)
    localStorage.setItem('preferred-language', newLanguage);
    document.cookie = `NEXT_LOCALE=${newLanguage}; path=/; max-age=${60 * 60 * 24 * 365}`;

    router.push(target);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="relative inline-flex items-center justify-between h-8 w-14 px-1 rounded-full transition-all duration-500 bg-gray-300 dark:bg-gray-700"
      aria-label="Toggle language"
      title={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
    >
      <span className="flex items-center justify-center flex-1 text-xs font-bold text-gray-800 dark:text-gray-100 z-10 transition-opacity duration-500">
        ES
      </span>
      <span
        className={`absolute left-0.3 inline-flex items-center justify-center h-6 w-6 transform rounded-full transition-all duration-500 bg-white dark:bg-gray-900 ${
          language === 'en' ? 'translate-x-6' : 'translate-x-0'
        }`}
      />
      <span className="flex items-center justify-center flex-1 text-xs font-bold text-gray-800 dark:text-gray-100 z-10 transition-opacity duration-500">
        EN
      </span>
    </button>
  );
}
