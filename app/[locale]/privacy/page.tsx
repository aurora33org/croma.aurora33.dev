'use client';

import Link from 'next/link';
import { notFound } from 'next/navigation';
import { useTranslations, useLocale } from '@/lib/i18n-context';
import { showLegal } from '@/lib/config';

interface LabeledItem {
  label: string;
  text: string;
}

export default function PrivacyPage() {
  if (!showLegal) notFound();

  const t = useTranslations('privacy');
  const locale = useLocale();

  const s = (key: string) => t(`sections.${key}`);

  return (
    <main className="min-h-screen bg-background dark:bg-bg-dark">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10">
          <Link href={`/${locale}`} className="text-primary hover:opacity-80 transition-opacity text-sm">
            {t('back')}
          </Link>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-text dark:text-text-dark mb-2">
          {t('heading')}
        </h1>
        <p className="text-sm text-text-muted dark:text-text-muted-dark mb-12">
          {t('lastUpdated')}
        </p>

        <div className="space-y-10">

          <section>
            <h2 className="text-xl font-bold text-text dark:text-text-dark mb-3">{s('s1.title')}</h2>
            <p className="text-text-muted dark:text-text-muted-dark leading-relaxed">{s('s1.body')}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-text dark:text-text-dark mb-3">{s('s2.title')}</h2>
            <p className="text-text-muted dark:text-text-muted-dark leading-relaxed mb-3">{s('s2.intro')}</p>
            <ul className="list-disc list-inside space-y-2 text-text-muted dark:text-text-muted-dark">
              {(t.raw('sections.s2.items') as LabeledItem[]).map((item, i) => (
                <li key={i}><strong className="text-text dark:text-text-dark">{item.label}</strong> {item.text}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-text dark:text-text-dark mb-3">{s('s3.title')}</h2>
            <p className="text-text-muted dark:text-text-muted-dark leading-relaxed mb-3">{s('s3.intro')}</p>
            <ul className="list-disc list-inside space-y-2 text-text-muted dark:text-text-muted-dark mb-3">
              {(t.raw('sections.s3.items') as LabeledItem[]).map((item, i) => (
                <li key={i}><strong className="text-text dark:text-text-dark">{item.label}</strong> {item.text}</li>
              ))}
            </ul>
            <p className="text-text-muted dark:text-text-muted-dark leading-relaxed">{s('s3.outro')}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-text dark:text-text-dark mb-3">{s('s4.title')}</h2>
            <p className="text-text-muted dark:text-text-muted-dark leading-relaxed mb-3">{s('s4.intro')}</p>
            <ul className="list-disc list-inside space-y-2 text-text-muted dark:text-text-muted-dark">
              {(t.raw('sections.s4.items') as LabeledItem[]).map((item, i) => (
                <li key={i}><strong className="text-text dark:text-text-dark">{item.label}</strong> {item.text}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-text dark:text-text-dark mb-3">{s('s5.title')}</h2>
            <p className="text-text-muted dark:text-text-muted-dark leading-relaxed mb-3">{s('s5.intro')}</p>
            <ul className="list-disc list-inside space-y-2 text-text-muted dark:text-text-muted-dark">
              {(t.raw('sections.s5.items') as LabeledItem[]).map((item, i) => (
                <li key={i}><strong className="text-text dark:text-text-dark">{item.label}</strong> {item.text}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-text dark:text-text-dark mb-3">{s('s6.title')}</h2>
            <p className="text-text-muted dark:text-text-muted-dark leading-relaxed">{s('s6.body')}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-text dark:text-text-dark mb-3">{s('s8.title')}</h2>
            <p className="text-text-muted dark:text-text-muted-dark leading-relaxed">{s('s8.body')}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-text dark:text-text-dark mb-3">{s('s9.title')}</h2>
            <p className="text-text-muted dark:text-text-muted-dark leading-relaxed">{s('s9.body')}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-text dark:text-text-dark mb-3">{s('s10.title')}</h2>
            <p className="text-text-muted dark:text-text-muted-dark leading-relaxed">{s('s10.body')}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-text dark:text-text-dark mb-3">{s('s11.title')}</h2>
            <p className="text-text-muted dark:text-text-muted-dark leading-relaxed">
              {s('s11.body')}{' '}
              <a href="mailto:hola@aurora33.org" className="text-primary hover:opacity-80 transition-opacity">
                hola@aurora33.org
              </a>.
            </p>
          </section>

        </div>

        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700 text-sm text-text-muted dark:text-text-muted-dark text-center">
          <Link href={`/${locale}/terms`} className="text-primary hover:opacity-80 transition-opacity">{t('footer.terms')}</Link>
          <span className="mx-3">·</span>
          <Link href={`/${locale}`} className="hover:text-text dark:hover:text-text-dark transition-colors">{t('footer.backToApp')}</Link>
        </div>
      </div>
    </main>
  );
}
