'use client';

import Link from 'next/link';
import { Github } from 'lucide-react';
import { useTranslations, useLocale } from '@/lib/i18n-context';
import { Footer } from '@/components/Footer';
import { DEFAULT_LIMITS } from '@/lib/config';
import { GITHUB_REPO_URL, RAILWAY_TEMPLATE_URL } from '@/lib/links';

const LOCAL_COMMANDS = `git clone https://github.com/aurora33labs/tool-croma-oss.git
cd tool-croma-oss
npm install
npm run dev   # http://localhost:3000`;

function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="overflow-x-auto rounded-lg bg-gray-100 dark:bg-gray-800 p-4 text-sm leading-relaxed">
      <code className="font-[family-name:var(--font-geist-mono)] text-text dark:text-text-dark whitespace-pre">
        {children}
      </code>
    </pre>
  );
}

export default function SelfHostPage() {
  const t = useTranslations('selfHost');
  const locale = useLocale();
  const maxMb = Math.round(DEFAULT_LIMITS.MAX_FILE_SIZE / (1024 * 1024));

  return (
    <>
      <main className="min-h-screen bg-background dark:bg-bg-dark">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-10">
            <Link href={`/${locale}`} className="text-primary hover:opacity-80 transition-opacity text-sm">
              {t('backToTool')}
            </Link>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-4">{t('heading')}</h1>
          <p className="text-text-muted dark:text-text-muted-dark leading-relaxed mb-2">{t('intro')}</p>
          <p className="text-sm text-text-muted dark:text-text-muted-dark mb-12">
            {t('currentLimits', { files: DEFAULT_LIMITS.MAX_FILES, mb: maxMb })}
          </p>

          <div className="space-y-10">
            {/* Section A — Local */}
            <section className="bg-white dark:bg-container-dark rounded-2xl border border-gray-200 dark:border-gray-700 p-6 sm:p-8">
              <h2 className="text-xl font-bold text-text dark:text-text-dark mb-2">{t('local.title')}</h2>
              <p className="text-text-muted dark:text-text-muted-dark leading-relaxed mb-4">{t('local.intro')}</p>
              <CodeBlock>{LOCAL_COMMANDS}</CodeBlock>
              <p className="text-sm text-text-muted dark:text-text-muted-dark leading-relaxed mt-4">{t('local.note')}</p>
            </section>

            {/* Section B — Railway */}
            <section className="bg-white dark:bg-container-dark rounded-2xl border border-gray-200 dark:border-gray-700 p-6 sm:p-8">
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
