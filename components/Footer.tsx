'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from '@/lib/i18n-context';
import { showLegal } from '@/lib/config';

export function Footer() {
  const t = useTranslations('common');
  const locale = useLocale();
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ borderTop: '1px solid var(--border)' }}>
      <div className="max-w-[1480px] mx-auto px-5 md:px-10">
        {/* CTA: contacto Aurora33 */}
        <div
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 py-10 md:py-12"
          style={{ borderBottom: '1px solid var(--border)' }}
        >
          <p className="text-xl sm:text-2xl font-medium text-text dark:text-text-dark max-w-xl">
            {t('footer.needCustomSolutions' as any)}
          </p>
          <a
            href="https://aurora33.org/contacto"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center whitespace-nowrap bg-primary hover:bg-primary/90 text-white font-semibold px-7 py-3 rounded-none transition-all"
          >
            {t('footer.links.contact' as any)}
          </a>
        </div>

        {/* Logo grande Instrument Serif */}
        <a
          href="https://aurora33.org"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block py-16 md:py-24"
        >
          <span
            className="font-[family-name:var(--font-instrument)] italic font-normal"
            style={{
              fontSize: 'clamp(3rem, 6vw, 5.5rem)',
              color: 'var(--primary)',
              letterSpacing: '-0.03em',
              lineHeight: 0.9,
            }}
          >
            aurora<sup style={{ fontSize: '0.55em', verticalAlign: 'top', position: 'relative', top: '0.45em' }}>33</sup>
          </span>
        </a>

        {/* Strip inferior */}
        <div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-5"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          <span
            className="font-[family-name:var(--font-geist-mono)] text-[10px] tracking-[0.25em] uppercase"
            style={{ color: 'var(--muted-foreground)' }}
          >
            © {currentYear} Aurora33 · {t('footer.copyrightText' as any)}
          </span>

          {showLegal && (
            <div className="flex items-center gap-6">
              <Link
                href={`/${locale}/terms`}
                className="font-[family-name:var(--font-geist-mono)] text-[10px] tracking-[0.2em] uppercase"
                style={{ color: 'var(--muted-foreground)' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--primary)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--muted-foreground)'; }}
              >
                {t('footer.terms' as any)}
              </Link>
              <Link
                href={`/${locale}/privacy`}
                className="font-[family-name:var(--font-geist-mono)] text-[10px] tracking-[0.2em] uppercase"
                style={{ color: 'var(--muted-foreground)' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--primary)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--muted-foreground)'; }}
              >
                {t('footer.privacy' as any)}
              </Link>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
