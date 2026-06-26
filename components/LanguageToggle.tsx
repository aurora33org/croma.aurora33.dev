'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useLocale } from '@/lib/i18n-context';
import { locales } from '@/i18n/config';

// Persist the language preference (module scope so it's a plain side effect).
function persistLocale(loc: string) {
  try {
    localStorage.setItem('preferred-language', loc);
    document.cookie = `NEXT_LOCALE=${loc}; path=/; max-age=${60 * 60 * 24 * 365}`;
  } catch {
    // ignore (e.g. storage disabled)
  }
}

export function LanguageToggle() {
  const router = useRouter();
  const pathname = usePathname();
  const language = useLocale();

  const setLanguage = (newLanguage: typeof locales[number]) => {
    if (newLanguage === language) return;

    // Swap the first path segment for the new locale
    const segments = pathname.split('/');
    if (locales.includes(segments[1] as typeof locales[number])) {
      segments[1] = newLanguage;
    } else {
      segments.splice(1, 0, newLanguage);
    }
    const target = segments.join('/') || `/${newLanguage}`;

    persistLocale(newLanguage); // cookie read by middleware on next root visit
    router.push(target);
  };

  return (
    <div
      className="flex items-stretch self-center"
      style={{ border: '1px solid var(--border)' }}
      role="group"
      aria-label="Language"
    >
      {locales.map((loc, i) => {
        const active = loc === language;
        return (
          <button
            key={loc}
            onClick={() => setLanguage(loc)}
            aria-pressed={active}
            className="px-2.5 py-1.5 font-[family-name:var(--font-geist-mono)] text-[11px] tracking-[0.16em] uppercase transition-none"
            style={{
              background: active ? 'var(--primary)' : 'transparent',
              color: active ? 'var(--primary-foreground)' : 'var(--muted-foreground)',
              borderLeft: i > 0 ? '1px solid var(--border)' : undefined,
            }}
            onMouseEnter={(e) => { if (!active) e.currentTarget.style.color = 'var(--foreground)'; }}
            onMouseLeave={(e) => { if (!active) e.currentTarget.style.color = 'var(--muted-foreground)'; }}
          >
            {loc}
          </button>
        );
      })}
    </div>
  );
}
