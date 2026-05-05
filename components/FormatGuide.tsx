import { useTranslations } from '@/lib/i18n-context';

export function FormatGuide() {
  const t = useTranslations('formats');
  const formats = t.raw('formats');
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-20 xl:px-[120px] max-w-[1720px] mx-auto mb-8 sm:mb-12 md:mb-16">
      <h3 className="text-2xl font-normal text-text dark:text-text-dark mb-6">{t('heading')}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {formats.map((format: { title: string; description: string }, index: number) => (
          <div key={index} className="bg-card p-6 text-center" style={{ border: '1px solid var(--border)' }}>
            <h4 className="text-xl font-normal text-text dark:text-text-dark mb-2">{format.title}</h4>
            <p className="text-base text-text-muted dark:text-text-muted-dark leading-relaxed">
              {format.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
