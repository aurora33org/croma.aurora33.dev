'use client';

import { useTranslations } from '@/lib/i18n-context';

interface PricingCardsProps {
  onSelectPro: () => void;
}

export function PricingCards({ onSelectPro }: PricingCardsProps) {
  const t = useTranslations('pricing');

  const features = [
    'batches_per_day',
    'images_per_batch',
    'max_batches',
    'max_file_size',
    'formats',
    'compression_time',
  ];

  return (
    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-20 xl:px-[120px] max-w-[1720px] mx-auto py-8 sm:py-12 md:py-16">
      {/* Header */}
      <div className="mb-12 sm:mb-16 md:mb-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text dark:text-text-dark mb-4">
          {t('title')}
        </h1>
        <p className="text-base sm:text-lg text-text-muted dark:text-text-muted-dark">
          {t('subtitle')}
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
        {/* Free Card */}
        <div className="relative rounded-lg border border-container dark:border-container-dark bg-background dark:bg-bg-dark p-6 sm:p-8 md:p-10 shadow-sm">
          <div className="mb-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-text dark:text-text-dark mb-2">
              {t('free.name')}
            </h3>
            <p className="text-sm sm:text-base text-text-muted dark:text-text-muted-dark">
              {t('free.description')}
            </p>
          </div>

          {/* Features */}
          <div className="space-y-3 sm:space-y-4 mb-8">
            {features.map((feature) => (
              <div key={feature} className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-sm sm:text-base text-text dark:text-text-dark">
                  {t(`free.${feature}`)}
                </p>
              </div>
            ))}
          </div>

          {/* Button */}
          <button
            disabled
            className="w-full py-3 px-4 rounded-lg bg-contrast-v2 dark:bg-container-dark text-text-muted dark:text-text-muted-dark font-medium cursor-not-allowed opacity-60"
          >
            {t('free.button')}
          </button>
        </div>

        {/* Pro Card */}
        <div className="relative rounded-lg border-2 border-primary bg-background dark:bg-bg-dark p-6 sm:p-8 md:p-10 shadow-md">
          {/* Badge */}
          <div className="absolute -top-4 left-6">
            <span className="inline-block bg-primary text-white px-4 py-1 rounded-full text-xs sm:text-sm font-bold">
              Recomendado
            </span>
          </div>

          <div className="mb-6 pt-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-text dark:text-text-dark mb-2">
              {t('pro.name')}
            </h3>
            <p className="text-4xl sm:text-5xl font-bold text-primary mb-2">$0</p>
            <p className="text-sm sm:text-base text-text-muted dark:text-text-muted-dark">
              {t('pro.description')}
            </p>
          </div>

          {/* Features */}
          <div className="space-y-3 sm:space-y-4 mb-8">
            {features.map((feature) => (
              <div key={feature} className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-sm sm:text-base text-text dark:text-text-dark">
                  {t(`pro.${feature}`)}
                </p>
              </div>
            ))}
          </div>

          {/* Button */}
          <button
            onClick={onSelectPro}
            className="w-full py-3 px-4 rounded-lg bg-primary text-white font-medium hover:opacity-90 transition-opacity"
          >
            {t('pro.button')}
          </button>
        </div>
      </div>
    </div>
  );
}
