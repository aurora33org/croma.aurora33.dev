'use client';

import { useState, useEffect, useRef } from 'react';
import { Sun, Moon } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { LanguageToggle } from './LanguageToggle';
import { UserProfile } from './UserProfile';
import { useTranslations } from '@/lib/i18n-context';

export function Navigation() {
  const [isDark, setIsDark] = useState(false);
  const themeRef = useRef<string | null>(null);
  const initialized = useRef(false);
  const { data: session } = useSession();
  const pathname = usePathname();
  const t = useTranslations('common');

  const isActive = (path: string) => pathname === path || pathname.startsWith(path + '/');

  const navLinkClass = (active: boolean) =>
    `text-sm font-medium transition-colors ${
      active
        ? 'text-primary dark:text-primary'
        : 'text-text-muted dark:text-text-muted-dark hover:text-text dark:hover:text-text-dark'
    }`;

  useEffect(() => {
    // Only initialize once on client mount
    if (initialized.current) return;
    initialized.current = true;

    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isCurrentlyDark = savedTheme ? savedTheme === 'dark' : prefersDark;

    // Store initial theme
    themeRef.current = isCurrentlyDark ? 'dark' : 'light';

    // Apply theme class to HTML element
    if (isCurrentlyDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    setIsDark(isCurrentlyDark);
  }, []);

  const handleThemeToggle = () => {
    // Read current state from DOM (source of truth), not JS state
    const isCurrentlyDark = document.documentElement.classList.contains('dark');
    const newIsDark = !isCurrentlyDark;
    setIsDark(newIsDark);
    themeRef.current = newIsDark ? 'dark' : 'light';

    if (newIsDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className="py-4 sm:py-6 md:py-8 px-4 sm:px-8 md:px-16 lg:px-20 xl:px-[120px] max-w-[1720px] mx-auto mb-4 sm:mb-6 md:mb-8 border-b border-gray-200 dark:border-gray-700 bg-background dark:bg-bg-dark">
      <div className="flex items-center justify-between">
        {/* Logo and Brand */}
        <a href="https://croma.aurora33.dev" target="_blank" rel="noopener noreferrer">
          <h2 className="font-bold hover:opacity-80 transition-opacity" style={{ fontFamily: '"Kangge", sans-serif', fontSize: 'calc(2.25rem * 0.8)', marginBottom: '-0.5rem' }}>
            <span className="text-primary">croma.</span><span className="text-text dark:text-text-dark">aurora<sup>33</sup></span>
          </h2>
        </a>

        {/* Navigation links (Center) */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/tool" className={navLinkClass(isActive('/tool'))} aria-current={isActive('/tool') ? 'page' : undefined}>
            {t('navigation.tool')}
          </Link>
          <Link href="/pricing" className={navLinkClass(isActive('/pricing'))} aria-current={isActive('/pricing') ? 'page' : undefined}>
            {t('navigation.pricing') || 'Pricing'}
          </Link>
        </nav>

        {/* Toggles Container */}
        <div className="flex items-center gap-4">
          {/* User Profile */}
          {session?.user && <UserProfile />}

          {/* Language Toggle */}
          <LanguageToggle />

          {/* Theme Toggle */}
          <button
            onClick={handleThemeToggle}
            className="relative inline-flex items-center justify-between h-8 w-16 px-1 rounded-full transition-all duration-500 bg-gray-300 dark:bg-contrast"
            aria-label="Toggle dark mode"
          >
            <Sun size={16} className="flex-shrink-0 transition-colors text-black relative z-10 ml-1" />
            <span
              className="absolute inline-block h-6 w-6 transform rounded-full transition-all duration-500 bg-white translate-x-0 dark:bg-black dark:translate-x-8"
            />
            <Moon size={16} className="flex-shrink-0 transition-colors text-white relative z-10 mr-1" />
          </button>
        </div>
      </div>
    </div>
  );
}
