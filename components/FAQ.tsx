import { useTranslations } from '@/lib/i18n-context';
import { DEFAULT_LIMITS } from '@/lib/config';

export function FAQ() {
  const t = useTranslations('faq');
  const questions = t.raw('questions');

  // Inject the configured upload limit into answers (e.g. "{maxFiles}")
  const fill = (text: string) =>
    text.replace(/\{maxFiles\}/g, String(DEFAULT_LIMITS.MAX_FILES));

  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-20 xl:px-[120px] max-w-[1720px] mx-auto mb-8 sm:mb-12 md:mb-16">
      <h3 className="text-2xl font-normal text-text dark:text-text-dark mb-6">{t('heading')}</h3>
      <div className="space-y-4">
        {questions.map((item: { question: string; answer: string }, index: number) => (
          <div key={index} className="bg-card p-6" style={{ border: '1px solid var(--border)' }}>
            <h4 className="font-normal text-text dark:text-text-dark mb-2">{item.question}</h4>
            <p className="text-base text-text-muted dark:text-text-muted-dark pl-4">
              {fill(item.answer)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
