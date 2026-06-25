'use client';

import { useTranslations, useLocale } from '@/lib/i18n-context';
import { DEFAULT_LIMITS } from '@/lib/config';

const baseUrl = 'https://croma.aurora33.org';

/**
 * Structured data for SEO: SoftwareApplication + FAQPage.
 * Rendered into the initial HTML (client components are SSR'd), so crawlers see it.
 */
export function JsonLd() {
  const locale = useLocale();
  const tFaq = useTranslations('faq');
  const questions = (tFaq.raw('questions') as { question: string; answer: string }[]) || [];

  const softwareApplication = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Croma by Aurora33',
    applicationCategory: 'MultimediaApplication',
    operatingSystem: 'Web',
    url: `${baseUrl}/${locale}`,
    inLanguage: locale,
    description:
      locale === 'en'
        ? 'Free bulk image compressor. Compress, resize and convert images to WebP, JPEG, PNG or AVIF. No sign-up, images never stored.'
        : 'Compresor de imágenes gratis en lotes. Comprime, redimensiona y convierte a WebP, JPEG, PNG o AVIF. Sin registro y sin almacenar tus imágenes.',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    author: { '@type': 'Organization', name: 'Aurora33', url: 'https://aurora33.org' },
  };

  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer
          .replace(/^→\s*/, '')
          .replace(/\{maxFiles\}/g, String(DEFAULT_LIMITS.MAX_FILES)),
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplication) }}
      />
      {questions.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
        />
      )}
    </>
  );
}
