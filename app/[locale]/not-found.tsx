'use client';

import Link from 'next/link';
import { useContext } from 'react';
import { LocaleContext } from '@/lib/i18n-context';

const fallback = {
  heading: '¡Píxel perdido!',
  description: 'En la escala de compresión, esta página llegó al 0%. Vuelve al inicio y comprime tus imágenes.',
  button: 'Volver al inicio',
};

export default function NotFound() {
  const ctx = useContext(LocaleContext);
  const errors = ctx?.messages?.errors?.notFound;
  const locale = ctx?.locale ?? 'es';

  const heading = errors?.heading ?? fallback.heading;
  const description = errors?.description ?? fallback.description;
  const button = errors?.button ?? fallback.button;

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

      {/* Heading — sr-only span announces error code to screen readers */}
      <h1 className="font-syne font-bold text-2xl sm:text-3xl md:text-4xl text-text dark:text-text-dark mb-4">
        <span className="sr-only">404 — </span>
        {heading}
      </h1>

      {/* Description */}
      <p className="text-text-muted dark:text-text-muted-dark text-base max-w-sm leading-relaxed mb-10">
        {description}
      </p>

      {/* Home button */}
      <Link
        href={`/${locale}`}
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
        {button}
      </Link>
    </main>
  );
}
