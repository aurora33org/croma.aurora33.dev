import Link from 'next/link';
import { useTranslations } from '@/lib/i18n-context';

export function Footer() {
  const t = useTranslations('common');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-16 lg:px-20 xl:px-[120px] max-w-[1720px] mx-auto border-t border-gray-200 dark:border-gray-700">
      <div className="text-center">
        <p className="text-text dark:text-text-dark mb-2">
          {t('footer.madeWith')}{' '}
          <a href="https://aurora33.dev" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">
            aurora33
          </a>
        </p>

        <p className="text-base text-text-muted dark:text-text-muted-dark mb-3">© {currentYear} Aurora33 · {t('footer.copyrightText')}</p>

        <div className="flex items-center justify-center gap-4 text-sm text-text-muted dark:text-text-muted-dark">
          <Link href="/terms" className="hover:text-primary transition-colors">{t('footer.terms')}</Link>
          <span>·</span>
          <Link href="/privacy" className="hover:text-primary transition-colors">{t('footer.privacy')}</Link>
        </div>
      </div>
    </footer>
  );
}
