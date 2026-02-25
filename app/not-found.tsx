'use client';

import Link from 'next/link';
import { useTranslations } from '@/lib/i18n-context';

export default function NotFound() {
  const t = useTranslations('errors');

  return (
    <main className="min-h-screen bg-background dark:bg-bg-dark flex flex-col items-center justify-center px-4 text-center">
      {/* Pixel 404 */}
      <p
        className="font-pixel text-primary mb-10 leading-tight"
        style={{ fontSize: 'clamp(3rem, 12vw, 7rem)' }}
        aria-hidden="true"
      >
        404
      </p>

      {/* Heading */}
      <h1 className="font-syne font-bold text-2xl sm:text-3xl md:text-4xl text-text dark:text-text-dark mb-4">
        {t('notFound.heading')}
      </h1>

      {/* Description */}
      <p className="text-text-muted dark:text-text-muted-dark text-base max-w-sm leading-relaxed mb-10">
        {t('notFound.description')}
      </p>

      {/* Home button */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </svg>
        {t('notFound.button')}
      </Link>
    </main>
  );
}
