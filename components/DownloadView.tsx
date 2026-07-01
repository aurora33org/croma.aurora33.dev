'use client';

import { useTranslations, useLocale } from '@/lib/i18n-context';

const AURORA_CONTACT_URL = 'https://aurora33.org/contacto';

interface FileStats {
  originalSize: number;
  compressedSize: number;
  reduction: number;
}

interface ProcessedFileInfo {
  filename: string;
  originalSize: number;
  compressedSize: number;
  reduction: number;
}

interface DownloadViewProps {
  stats?: FileStats;
  processedFiles?: ProcessedFileInfo[];
  jobId?: string | null;
  onDownload: () => void;
  onDownloadFile: (filename: string) => void;
  onReset: () => void;
}

function formatFileSize(bytes: number, locale: string) {
  if (bytes <= 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  const value = Math.round((bytes / Math.pow(k, i)) * 100) / 100;
  return new Intl.NumberFormat(locale, { minimumFractionDigits: 0, maximumFractionDigits: 2 }).format(value) + ' ' + sizes[i];
}

export function DownloadView({ stats, processedFiles, jobId, onDownload, onDownloadFile, onReset }: DownloadViewProps) {
  const t = useTranslations('download');
  const tHero = useTranslations('hero');
  const locale = useLocale();

  const originalSize = stats?.originalSize || 0;
  const compressedSize = stats?.compressedSize || 0;
  const savedSize = Math.max(0, originalSize - compressedSize);
  const savingsPercent = stats?.reduction || 0;

  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference - (savingsPercent / 100) * circumference;

  return (
    <>
      <div className="px-4 sm:px-8 md:px-16 lg:px-20 xl:px-[120px] max-w-[1720px] mx-auto mb-4 sm:mb-6 md:mb-8 mt-8 sm:mt-12 md:mt-16">
        <div className="w-full mb-6 sm:mb-8 md:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary" style={{ lineHeight: '120%' }}>
            {tHero('title')}<br />{tHero('subtitle')}
          </h1>
        </div>
      </div>

      <div className="py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-16 lg:px-20 xl:px-[120px] max-w-[1720px] mx-auto mb-4 sm:mb-6 md:mb-8">
        {/* Success header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full mb-4">
            <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-text dark:text-text-dark mb-2">{t('success.heading')}</h2>
          <p className="text-text-muted dark:text-text-muted-dark">{t('success.message')}</p>
        </div>

        {/* Two main containers: stats chart (30%) + images/download (70%) */}
        <div className="grid grid-cols-1 lg:grid-cols-[30%_1fr] gap-6 mb-6">
          {/* Container 1: Stats as a chart */}
          <div className="bg-white dark:bg-container-dark rounded-none shadow-sm border border-gray-200 dark:border-gray-700 p-6 flex flex-col items-center">
            <div className="relative w-40 h-40 mb-6">
              <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                <circle cx="50" cy="50" r={radius} fill="none" strokeWidth="8" className="stroke-gray-200 dark:stroke-gray-700" />
                <circle
                  cx="50"
                  cy="50"
                  r={radius}
                  fill="none"
                  strokeWidth="8"
                  strokeLinecap="round"
                  className="stroke-primary transition-all duration-1000"
                  strokeDasharray={circumference}
                  strokeDashoffset={dashOffset}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-primary">{savingsPercent}%</span>
                <span className="text-xs text-text-muted dark:text-text-muted-dark uppercase text-center px-2">{t('stats.reduction')}</span>
              </div>
            </div>

            <div className="w-full space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-text-muted dark:text-text-muted-dark">{t('stats.original')}</span>
                <span className="font-semibold text-text dark:text-text-dark">{formatFileSize(originalSize, locale)}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-text-muted dark:text-text-muted-dark">{t('stats.compressed')}</span>
                <span className="font-semibold text-text dark:text-text-dark">{formatFileSize(compressedSize, locale)}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-text-muted dark:text-text-muted-dark">{t('stats.saved')}</span>
                <span className="font-semibold text-primary">{formatFileSize(savedSize, locale)}</span>
              </div>
            </div>

            <p className="text-text-muted dark:text-text-muted-dark mt-4 text-xs text-center">
              {t('savingsMessage')}
            </p>
          </div>

          {/* Container 2: Compressed images + download actions */}
          <div className="bg-white dark:bg-container-dark rounded-none shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            {processedFiles && processedFiles.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-bold text-text dark:text-text-dark mb-2">{t('fileList.heading')}</h3>
                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                  {processedFiles.map((file) => (
                    <div key={file.filename} className="py-3 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3 flex-1 min-w-0">
                        {jobId && (
                          <img
                            src={`/api/jobs/${jobId}/download/${encodeURIComponent(file.filename)}`}
                            alt={file.filename}
                            className="w-12 h-12 object-cover rounded shrink-0 bg-gray-100 dark:bg-gray-800"
                          />
                        )}
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-text dark:text-text-dark truncate">{file.filename}</p>
                          <p className="text-sm text-text-muted dark:text-text-muted-dark">
                            {formatFileSize(file.originalSize, locale)} → {formatFileSize(file.compressedSize, locale)} (-{file.reduction}%)
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => onDownloadFile(file.filename)}
                        aria-label={t('fileList.downloadAria', { name: file.filename })}
                        className="shrink-0 p-2 border border-gray-300 dark:border-gray-700 rounded-none hover:bg-gray-50 dark:hover:bg-gray-800 text-primary transition-colors"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <button
              onClick={onDownload}
              className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-4 px-8 rounded-none transition-all transform hover:scale-[1.02] active:scale-[0.98] mb-4"
            >
              {t('downloadAllButton')}
            </button>

            <button
              onClick={onReset}
              className="w-full border-2 border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600 text-text dark:text-text-dark font-semibold py-3 px-8 rounded-none transition-colors"
            >
              {t('resetButton')}
            </button>
          </div>
        </div>

        {/* Container 3: Aurora33 Contact CTA (no border) */}
        <div className="bg-gradient-to-br from-primary/5 dark:from-primary/10 to-primary/10 dark:to-primary/20 rounded-none p-4 sm:p-6 md:p-8 text-center">
          <h4 className="text-xl font-normal text-text dark:text-text-dark mb-2">{t('leadCapture.heading')}</h4>
          <p className="text-text-muted dark:text-text-muted-dark mb-4">{t('leadCapture.description')}</p>

          <a
            href={AURORA_CONTACT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3 rounded-none transition-all whitespace-nowrap"
          >
            {t('leadCapture.subscribeButton')}
          </a>
        </div>
      </div>
    </>
  );
}
