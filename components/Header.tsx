'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from '@/lib/i18n-context';
import { LanguageToggle } from './LanguageToggle';
import { useSession } from 'next-auth/react';

export function Header() {
  const pathname = usePathname();
  const t = useTranslations('common');
  const { data: session } = useSession();

  // Check if current route matches a nav item
  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(path + '/');
  };

  const navLinkClass = (isActivePath: boolean) =>
    `text-sm font-medium transition-colors ${
      isActivePath
        ? 'text-primary dark:text-primary'
        : 'text-text-muted dark:text-text-muted-dark hover:text-text dark:hover:text-text-dark'
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo (Left) */}
          <div className="flex-shrink-0">
            <Link
              href="/tool"
              className="text-lg font-bold text-primary dark:text-primary hover:opacity-80 transition-opacity"
              aria-label="Croma - Go to tool"
            >
              Croma
            </Link>
          </div>

          {/* Navigation (Center) */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/tool"
              className={navLinkClass(isActive('/tool'))}
              aria-current={isActive('/tool') ? 'page' : undefined}
            >
              {t('navigation.tool')}
            </Link>
            <Link
              href="/pricing"
              className={navLinkClass(isActive('/pricing'))}
              aria-current={isActive('/pricing') ? 'page' : undefined}
            >
              Pricing
            </Link>
          </nav>

          {/* Right side: Language toggle + User email */}
          <div className="flex items-center gap-4">
            {session?.user?.email && (
              <div className="hidden sm:block text-sm text-text-muted dark:text-text-muted-dark">
                {session.user.email}
              </div>
            )}
            <LanguageToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
