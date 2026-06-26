'use client';

import { useState, useEffect, useRef } from 'react';
import { Sun, Moon, Menu, X, Github } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { LanguageToggle } from './LanguageToggle';
import { useTranslations, useLocale } from '@/lib/i18n-context';
import { GITHUB_REPO_URL } from '@/lib/links';

const AURORA_CONTACT_URL = 'https://aurora33.org/contacto';

// `to` is appended to the locale root (e.g. '' -> /es, '/terms' -> /es/terms)
const NAV_LINKS = [
  { to: '', labelKey: 'navigation.tool' },
] as const;

export function Navigation() {
  const [isDark, setIsDark] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const initialized = useRef(false);
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations('common');

  const localeHref = (to: string) => `/${locale}${to}`;

  const isActive = (href: string) =>
    href === pathname || pathname.startsWith(href + '/');

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const dark = saved ? saved === 'dark' : prefersDark;
    if (dark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
    setIsDark(dark);
  }, []);

  const handleThemeToggle = () => {
    const currentlyDark = document.documentElement.classList.contains('dark');
    const next = !currentlyDark;
    setIsDark(next);
    if (next) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const backdropStyle = {
    background: 'color-mix(in srgb, var(--background) 88%, transparent)',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
  } as const;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 flex items-stretch justify-between">
        {/* Left: logo + nav */}
        <div
          className="flex items-stretch"
          style={{ ...backdropStyle, borderBottom: '1px solid var(--border)', borderRight: '1px solid var(--border)' }}
        >
          {/* Logo */}
          <Link
            href={localeHref('')}
            className="flex items-center px-5 py-3"
            style={{ borderRight: '1px solid var(--border)' }}
          >
            <span
              className="font-[family-name:var(--font-geist-mono)] font-semibold text-[13px] tracking-[0.16em] uppercase select-none"
              style={{ color: 'var(--primary)' }}
            >
              croma.
            </span>
            <span
              className="font-[family-name:var(--font-geist-mono)] font-semibold text-[13px] tracking-[0.16em] uppercase select-none"
              style={{ color: 'var(--foreground)' }}
            >
              aurora33<span className="hud-cursor">_</span>
            </span>
          </Link>

          {/* Desktop nav links */}
          <nav className="hidden md:flex items-stretch">
            {NAV_LINKS.map(({ to, labelKey }) => {
              const href = localeHref(to);
              const active = isActive(href);
              return (
                <Link
                  key={href}
                  href={href}
                  className="flex items-center px-5 py-3 font-[family-name:var(--font-geist-mono)] text-[13px] tracking-[0.16em] uppercase transition-none"
                  style={{
                    color: active ? 'var(--foreground)' : 'var(--muted-foreground)',
                    borderRight: '1px solid var(--border)',
                  }}
                  onMouseEnter={(e) => {
                    if (!active) e.currentTarget.style.color = 'var(--foreground)';
                  }}
                  onMouseLeave={(e) => {
                    if (!active) e.currentTarget.style.color = 'var(--muted-foreground)';
                  }}
                  aria-current={active ? 'page' : undefined}
                >
                  {t(labelKey as any) || labelKey.split('.').pop()}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Right: toggles (desktop) */}
        <div
          className="hidden md:flex items-stretch"
          style={{ ...backdropStyle, borderBottom: '1px solid var(--border)', borderLeft: '1px solid var(--border)' }}
        >
          <Link
            href={localeHref('/self-host')}
            className="flex items-center px-5 py-3 font-[family-name:var(--font-geist-mono)] text-[13px] tracking-[0.16em] uppercase"
            style={{
              color: isActive(localeHref('/self-host')) ? 'var(--foreground)' : 'var(--muted-foreground)',
              borderLeft: '1px solid var(--border)',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--foreground)'; }}
            onMouseLeave={(e) => {
              if (!isActive(localeHref('/self-host'))) e.currentTarget.style.color = 'var(--muted-foreground)';
            }}
          >
            {t('navigation.selfHost' as any) || 'Sin límites'}
          </Link>

          <a
            href={GITHUB_REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 font-[family-name:var(--font-geist-mono)] text-[13px] tracking-[0.16em] uppercase"
            style={{ color: 'var(--muted-foreground)', borderLeft: '1px solid var(--border)' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--foreground)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--muted-foreground)'; }}
          >
            <Github size={15} /> GitHub
          </a>

          <a
            href={AURORA_CONTACT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-5 py-3 font-[family-name:var(--font-geist-mono)] text-[13px] tracking-[0.16em] uppercase"
            style={{ color: 'var(--primary)', borderLeft: '1px solid var(--border)' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--foreground)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--primary)'; }}
          >
            {t('navigation.contact' as any) || 'Contacto'}
          </a>

          <div className="flex items-center px-4" style={{ borderLeft: '1px solid var(--border)' }}>
            <LanguageToggle />
          </div>

          <button
            onClick={handleThemeToggle}
            className="flex items-center gap-2 px-4 py-3 font-[family-name:var(--font-geist-mono)] text-[11px] tracking-[0.2em] uppercase"
            style={{ color: 'var(--muted-foreground)', borderLeft: '1px solid var(--border)' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--foreground)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--muted-foreground)'; }}
            aria-label={t('navigation.themeToggleAriaLabel' as any) || 'Toggle dark mode'}
          >
            {isDark ? <Sun size={14} /> : <Moon size={14} />}
          </button>
        </div>

        {/* Mobile: hamburger */}
        <button
          className="md:hidden flex items-center px-5 py-3"
          style={{ ...backdropStyle, borderBottom: '1px solid var(--border)', color: 'var(--foreground)' }}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-30 flex flex-col pt-[48px] md:hidden"
          style={{ background: 'var(--background)' }}
        >
          <nav className="flex flex-col flex-1">
            {NAV_LINKS.map(({ to, labelKey }) => {
              const href = localeHref(to);
              return (
                <Link
                  key={href}
                  href={href}
                  className="flex items-center px-5 py-5 text-xl font-medium tracking-[-0.02em]"
                  style={{
                    color: isActive(href) ? 'var(--foreground)' : 'var(--muted-foreground)',
                    borderBottom: '1px solid var(--border)',
                  }}
                  onClick={() => setMobileOpen(false)}
                >
                  {t(labelKey as any) || labelKey.split('.').pop()}
                </Link>
              );
            })}
            <Link
              href={localeHref('/self-host')}
              className="flex items-center px-5 py-5 text-xl font-medium tracking-[-0.02em]"
              style={{
                color: isActive(localeHref('/self-host')) ? 'var(--foreground)' : 'var(--muted-foreground)',
                borderBottom: '1px solid var(--border)',
              }}
              onClick={() => setMobileOpen(false)}
            >
              {t('navigation.selfHost' as any) || 'Sin límites'}
            </Link>
            <a
              href={GITHUB_REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-5 py-5 text-xl font-medium tracking-[-0.02em]"
              style={{ color: 'var(--foreground)', borderBottom: '1px solid var(--border)' }}
              onClick={() => setMobileOpen(false)}
            >
              <Github size={20} /> GitHub
            </a>
            <a
              href={AURORA_CONTACT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-5 py-5 text-xl font-medium tracking-[-0.02em]"
              style={{ color: 'var(--primary)', borderBottom: '1px solid var(--border)' }}
              onClick={() => setMobileOpen(false)}
            >
              {t('navigation.contact' as any) || 'Contacto'}
            </a>
          </nav>

          <div
            className="flex items-center justify-between px-5 py-4"
            style={{ borderTop: '1px solid var(--border)' }}
          >
            <LanguageToggle />
            <button
              onClick={handleThemeToggle}
              className="flex items-center gap-2 font-[family-name:var(--font-geist-mono)] text-[11px] tracking-[0.2em] uppercase"
              style={{ color: 'var(--muted-foreground)' }}
            >
              {isDark ? <Sun size={14} /> : <Moon size={14} />}
              <span>{isDark ? 'Light' : 'Dark'}</span>
            </button>
          </div>
        </div>
      )}

      {/* Spacer para compensar el header fijo */}
      <div className="h-[48px]" />
    </>
  );
}
