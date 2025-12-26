'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export function LanguageToggle() {
  const router = useRouter();
  const [language, setLanguage] = useState<'es' | 'en'>('es');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check localStorage and default to Spanish
    const savedLanguage = localStorage.getItem('preferred-language') as 'es' | 'en' | null;
    const cookieLanguage = document.cookie
      .split('; ')
      .find(row => row.startsWith('NEXT_LOCALE='))
      ?.split('=')[1] as 'es' | 'en' | undefined;

    const currentLanguage = savedLanguage || cookieLanguage || 'es';
    setLanguage(currentLanguage);
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === 'es' ? 'en' : 'es';

    // Update localStorage
    localStorage.setItem('preferred-language', newLanguage);

    // Update cookie for server-side (expires in 1 year)
    const expiresAt = new Date();
    expiresAt.setFullYear(expiresAt.getFullYear() + 1);
    document.cookie = `NEXT_LOCALE=${newLanguage}; path=/; expires=${expiresAt.toUTCString()}`;

    // Update state
    setLanguage(newLanguage);

    // Refresh the page to apply new language (using router.refresh instead of reload)
    router.refresh();
  };

  if (!mounted) {
    return (
      <div className="inline-flex items-center justify-between h-8 w-16 px-1 rounded-full bg-gray-300 dark:bg-contrast" />
    );
  }

  return (
    <button
      onClick={toggleLanguage}
      className={`relative inline-flex items-center justify-between h-8 w-14 px-1 rounded-full transition-all duration-500 ${
        language === 'en' ? 'bg-contrast' : 'bg-gray-300'
      }`}
      aria-label="Toggle language"
      title={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
    >
      <span className="text-xs font-bold text-text dark:text-text-dark z-10 transition-opacity duration-500">
        ES
      </span>
      <span
        className={`absolute inline-block h-6 w-6 transform rounded-full transition-all duration-500 ${
          language === 'en' ? 'bg-white translate-x-7' : 'bg-white translate-x-0'
        }`}
      />
      <span className="text-xs font-bold text-text-dark dark:text-text z-10 transition-opacity duration-500">
        EN
      </span>
    </button>
  );
}
