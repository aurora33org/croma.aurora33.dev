'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Github, Check, Copy } from 'lucide-react';
import { useTranslations, useLocale } from '@/lib/i18n-context';
import { Footer } from '@/components/Footer';
import { DEFAULT_LIMITS } from '@/lib/config';
import { GITHUB_REPO_URL, RAILWAY_TEMPLATE_URL } from '@/lib/links';

const LOCAL_COMMANDS = `git clone https://github.com/aurora33labs/tool-croma-oss.git
cd tool-croma-oss
npm install
npm run dev`;

/** Terminal-style command block with per-line prompt and a copy button. */
function Terminal({ commands, copyLabel, copiedLabel }: { commands: string; copyLabel: string; copiedLabel: string }) {
  const [copied, setCopied] = useState(false);
  const lines = commands.split('\n');

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(commands);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <div className="border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
      {/* chrome */}
      <div
        className="flex items-center justify-between px-4 py-2 border-b border-gray-200 dark:border-gray-700"
        style={{ background: 'color-mix(in srgb, var(--foreground) 4%, transparent)' }}
      >
        <span className="font-[family-name:var(--font-geist-mono)] text-[11px] tracking-[0.2em] uppercase text-text-muted dark:text-text-muted-dark">
          bash
        </span>
        <button
          onClick={copy}
          className="inline-flex items-center gap-1.5 font-[family-name:var(--font-geist-mono)] text-[11px] tracking-[0.16em] uppercase"
          style={{ color: copied ? 'var(--primary)' : 'var(--muted-foreground)' }}
        >
          {copied ? <Check size={13} /> : <Copy size={13} />}
          {copied ? copiedLabel : copyLabel}
        </button>
      </div>
      {/* body */}
      <pre className="overflow-x-auto p-4 text-sm leading-relaxed">
        <code className="font-[family-name:var(--font-geist-mono)] whitespace-pre">
          {lines.map((line, i) => (
            <span key={i} className="block">
              <span style={{ color: 'var(--primary)' }} className="select-none">$ </span>
              <span className="text-text dark:text-text-dark">{line}</span>
            </span>
          ))}
        </code>
      </pre>
    </div>
  );
}

function LimitCell({ label, files, per, highlight }: { label: string; files: string; per: string; highlight?: boolean }) {
  return (
    <div
      className="flex-1 border p-4"
      style={{
        borderColor: highlight ? 'var(--primary)' : 'var(--border)',
        background: highlight ? 'color-mix(in srgb, var(--primary) 8%, transparent)' : 'transparent',
      }}
    >
      <p className="font-[family-name:var(--font-geist-mono)] text-[10px] tracking-[0.2em] uppercase text-text-muted dark:text-text-muted-dark mb-2">
        {label}
      </p>
      <p
        className="font-[family-name:var(--font-geist-mono)] text-2xl sm:text-3xl font-bold tabular-nums"
        style={{ color: highlight ? 'var(--primary)' : 'var(--foreground)' }}
      >
        {files}
      </p>
      <p className="font-[family-name:var(--font-geist-mono)] text-xs text-text-muted dark:text-text-muted-dark mt-1">{per}</p>
    </div>
  );
}

export default function SelfHostPage() {
  const t = useTranslations('selfHost');
  const locale = useLocale();
  const maxMb = Math.round(DEFAULT_LIMITS.MAX_FILE_SIZE / (1024 * 1024));

  // Serif-italic emphasis on the last word of the heading (brand accent).
  const headingWords = t('heading').split(' ');
  const headLast = headingWords.pop();
  const headHead = headingWords.join(' ');

  return (
    <>
      <main className="min-h-screen bg-background dark:bg-bg-dark">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-10">
            <Link href={`/${locale}`} className="font-[family-name:var(--font-geist-mono)] text-[11px] tracking-[0.16em] uppercase text-primary hover:opacity-80 transition-opacity">
              {t('backToTool')}
            </Link>
          </div>

          {/* Hero */}
          <p className="font-[family-name:var(--font-geist-mono)] text-[11px] tracking-[0.25em] uppercase text-text-muted dark:text-text-muted-dark mb-4">
            {t('eyebrow')}
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4" style={{ lineHeight: 1.05 }}>
            {headHead}{' '}
            <span className="font-[family-name:var(--font-instrument)] italic font-normal">{headLast}</span>
          </h1>
          <p className="text-text-muted dark:text-text-muted-dark leading-relaxed max-w-2xl mb-10">{t('intro')}</p>

          {/* Limits readout */}
          <p className="font-[family-name:var(--font-geist-mono)] text-[10px] tracking-[0.2em] uppercase text-text-muted dark:text-text-muted-dark mb-3">
            {t('limits.title')}
          </p>
          <div className="flex flex-col sm:flex-row gap-px mb-14" style={{ background: 'var(--border)' }}>
            <LimitCell label={t('limits.hosted')} files={`${DEFAULT_LIMITS.MAX_FILES} / ${maxMb}`} per={t('limits.perFile')} />
            <LimitCell label={t('limits.local')} files="30 / 50" per={t('limits.perFile')} />
            <LimitCell label={t('limits.custom')} files="∞" per={t('limits.customValue')} highlight />
          </div>

          <div className="space-y-10">
            {/* Section A — Local */}
            <section className="bg-white dark:bg-container-dark border border-gray-200 dark:border-gray-700 p-6 sm:p-8">
              <h2 className="text-xl font-bold text-text dark:text-text-dark mb-2">{t('local.title')}</h2>
              <p className="text-text-muted dark:text-text-muted-dark leading-relaxed mb-4">{t('local.intro')}</p>
              <Terminal commands={LOCAL_COMMANDS} copyLabel={t('copy')} copiedLabel={t('copied')} />
              <p className="text-sm text-text-muted dark:text-text-muted-dark leading-relaxed mt-4">{t('local.note')}</p>
            </section>

            {/* Section B — Railway */}
            <section className="bg-white dark:bg-container-dark border border-gray-200 dark:border-gray-700 p-6 sm:p-8">
              <h2 className="text-xl font-bold text-text dark:text-text-dark mb-2">{t('railway.title')}</h2>
              <p className="text-text-muted dark:text-text-muted-dark leading-relaxed mb-4">{t('railway.intro')}</p>
              <a href={RAILWAY_TEMPLATE_URL} target="_blank" rel="noopener noreferrer" className="inline-block mb-4">
                <img src="https://railway.com/button.svg" alt={t('railway.deployAlt')} height={36} />
              </a>
              <p className="text-sm text-text-muted dark:text-text-muted-dark leading-relaxed">{t('railway.note')}</p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 flex flex-wrap items-center gap-4 text-sm">
            <a
              href={GITHUB_REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:opacity-80 transition-opacity"
            >
              <Github size={16} /> {t('viewRepo')}
            </a>
            <span className="text-text-muted dark:text-text-muted-dark">·</span>
            <Link href={`/${locale}`} className="text-text-muted dark:text-text-muted-dark hover:text-text dark:hover:text-text-dark transition-colors">
              {t('backToTool')}
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
