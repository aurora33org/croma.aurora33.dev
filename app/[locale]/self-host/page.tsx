'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Github, Check, Copy } from 'lucide-react';
import { useTranslations, useLocale } from '@/lib/i18n-context';
import { Footer } from '@/components/Footer';
import { DEFAULT_LIMITS } from '@/lib/config';
import { GITHUB_REPO_URL, GITHUB_ZIP_URL, NODEJS_URL, RAILWAY_TEMPLATE_URL } from '@/lib/links';

const RUN_COMMANDS = `npm install
npm run dev`;

const OS_KEYS = ['mac', 'windows', 'linux'] as const;
const OS_NAMES: Record<(typeof OS_KEYS)[number], string> = { mac: 'macOS', windows: 'Windows', linux: 'Linux' };

/** Terminal-style command block with a copy button. */
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
      <div
        className="flex items-center justify-between px-4 py-2 border-b border-gray-200 dark:border-gray-700"
        style={{ background: 'color-mix(in srgb, var(--foreground) 4%, transparent)' }}
      >
        <span className="font-[family-name:var(--font-geist-mono)] text-[11px] tracking-[0.2em] uppercase text-text-muted dark:text-text-muted-dark">
          terminal
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

function Badge({ children }: { children: string }) {
  return (
    <span
      className="inline-block font-[family-name:var(--font-geist-mono)] text-[10px] tracking-[0.2em] uppercase px-2.5 py-1 mb-3"
      style={{ color: 'var(--primary)', background: 'color-mix(in srgb, var(--primary) 10%, transparent)' }}
    >
      {children}
    </span>
  );
}

function Step({ n, title, children }: { n: number; title: string; children?: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <span
        className="flex-shrink-0 flex items-center justify-center w-7 h-7 font-[family-name:var(--font-geist-mono)] text-sm font-bold"
        style={{ border: '1px solid var(--primary)', color: 'var(--primary)' }}
      >
        {n}
      </span>
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-text dark:text-text-dark mb-1">{title}</h3>
        <div className="text-text-muted dark:text-text-muted-dark leading-relaxed text-[15px]">{children}</div>
      </div>
    </div>
  );
}

export default function SelfHostPage() {
  const t = useTranslations('selfHost');
  const locale = useLocale();
  const [os, setOs] = useState<(typeof OS_KEYS)[number]>('mac');
  const maxMb = Math.round(DEFAULT_LIMITS.MAX_FILE_SIZE / (1024 * 1024));

  // Serif-italic emphasis on the last word of the heading (brand accent).
  const words = t('heading').split(' ');
  const last = words.pop();
  const head = words.join(' ');

  const steps = t.raw('easy.steps') as string[];

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
            {head}{' '}
            <span className="font-[family-name:var(--font-instrument)] italic font-normal">{last}</span>
          </h1>
          <p className="text-text-muted dark:text-text-muted-dark leading-relaxed max-w-2xl mb-10 text-[17px]">{t('intro')}</p>

          {/* Limits readout */}
          <p className="font-[family-name:var(--font-geist-mono)] text-[10px] tracking-[0.2em] uppercase text-text-muted dark:text-text-muted-dark mb-3">
            {t('limits.title')}
          </p>
          <div className="flex flex-col sm:flex-row gap-px mb-14" style={{ background: 'var(--border)' }}>
            <LimitCell label={t('limits.hosted')} files={`${DEFAULT_LIMITS.MAX_FILES} / ${maxMb}`} per={t('limits.perFile')} />
            <LimitCell label={t('limits.local')} files="30 / 50" per={t('limits.perFile')} />
            <LimitCell label={t('limits.custom')} files="∞" per={t('limits.customValue')} highlight />
          </div>

          <div className="space-y-8">
            {/* EASY — Railway */}
            <section className="bg-white dark:bg-container-dark border border-gray-200 dark:border-gray-700 p-6 sm:p-8">
              <Badge>{t('easy.badge')}</Badge>
              <h2 className="text-2xl font-bold text-text dark:text-text-dark mb-2">{t('easy.title')}</h2>
              <p className="text-text-muted dark:text-text-muted-dark leading-relaxed mb-5 text-[15px]">{t('easy.intro')}</p>
              <ol className="space-y-2 mb-6">
                {steps.map((s, i) => (
                  <li key={i} className="flex gap-3 text-text-muted dark:text-text-muted-dark text-[15px]">
                    <span className="font-[family-name:var(--font-geist-mono)] text-primary">{i + 1}.</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ol>
              <a href={RAILWAY_TEMPLATE_URL} target="_blank" rel="noopener noreferrer" className="inline-block mb-4">
                <img src="https://railway.com/button.svg" alt={t('easy.deployAlt')} height={36} />
              </a>
              <p className="text-sm text-text-muted dark:text-text-muted-dark leading-relaxed">{t('easy.note')}</p>
            </section>

            {/* LOCAL — your computer */}
            <section className="bg-white dark:bg-container-dark border border-gray-200 dark:border-gray-700 p-6 sm:p-8">
              <Badge>{t('local.badge')}</Badge>
              <h2 className="text-2xl font-bold text-text dark:text-text-dark mb-2">{t('local.title')}</h2>
              <p className="text-text-muted dark:text-text-muted-dark leading-relaxed mb-6 text-[15px]">{t('local.intro')}</p>

              {/* OS tabs */}
              <div className="flex items-stretch mb-8 w-fit" style={{ border: '1px solid var(--border)' }}>
                {OS_KEYS.map((k, i) => {
                  const active = k === os;
                  return (
                    <button
                      key={k}
                      onClick={() => setOs(k)}
                      aria-pressed={active}
                      className="px-4 py-2 font-[family-name:var(--font-geist-mono)] text-[12px] tracking-[0.12em] uppercase"
                      style={{
                        background: active ? 'var(--primary)' : 'transparent',
                        color: active ? 'var(--primary-foreground)' : 'var(--muted-foreground)',
                        borderLeft: i > 0 ? '1px solid var(--border)' : undefined,
                      }}
                    >
                      {OS_NAMES[k]}
                    </button>
                  );
                })}
              </div>

              <div className="space-y-7">
                <Step n={1} title={t('local.node.title')}>
                  <p className="mb-2">{t('local.node.desc')}</p>
                  <a href={NODEJS_URL} target="_blank" rel="noopener noreferrer" className="text-primary hover:opacity-80 transition-opacity font-medium">
                    {t('local.node.cta')} ↗
                  </a>
                </Step>

                <Step n={2} title={t('local.download.title')}>
                  <p className="mb-2">{t('local.download.desc')}</p>
                  <a href={GITHUB_ZIP_URL} className="text-primary hover:opacity-80 transition-opacity font-medium">
                    {t('local.download.cta')} ↓
                  </a>
                </Step>

                <Step n={3} title={t('local.open.title')}>
                  <p>{t(`os.${os}`)}</p>
                </Step>

                <Step n={4} title={t('local.run.title')}>
                  <p className="mb-3">{t('local.run.desc')}</p>
                  <Terminal commands={RUN_COMMANDS} copyLabel={t('copy')} copiedLabel={t('copied')} />
                  <p className="mt-3">
                    {t('local.run.openAt')}{' '}
                    <span className="font-[family-name:var(--font-geist-mono)] text-text dark:text-text-dark">http://localhost:3000</span>
                  </p>
                </Step>
              </div>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 flex flex-wrap items-center gap-4 text-sm">
            <a href={GITHUB_REPO_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary hover:opacity-80 transition-opacity">
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
