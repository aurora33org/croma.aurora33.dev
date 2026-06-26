'use client';

import { useState } from 'react';
import { useTranslations } from '@/lib/i18n-context';
import { ImageUploader } from '@/components/ImageUploader';
import { CompressionSettings } from '@/components/CompressionSettings';
import { ProcessingView } from '@/components/ProcessingView';
import { DownloadView } from '@/components/DownloadView';
import { ErrorView } from '@/components/ErrorView';
import { FormatGuide } from '@/components/FormatGuide';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { logger } from '@/lib/utils/logger';

type ViewType = 'upload' | 'settings' | 'processing' | 'download' | 'error';

interface FileStats {
  originalSize: number;
  compressedSize: number;
  reduction: number;
}

export default function Home() {
  const t = useTranslations();
  const [currentView, setCurrentView] = useState<ViewType>('upload');
  const [files, setFiles] = useState<File[]>([]);
  const [jobId, setJobId] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const [processedCount, setProcessedCount] = useState(0);
  const [totalFiles, setTotalFiles] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');
  const [stats, setStats] = useState<FileStats | undefined>();
  const [isQueued, setIsQueued] = useState(false);

  const [settings, setSettings] = useState({
    format: 'webp',
    quality: 80,
    resizeWidth: undefined as number | undefined,
    resizeHeight: undefined as number | undefined
  });

  const [isCompressing, setIsCompressing] = useState(false);
  const [showFormatWarning, setShowFormatWarning] = useState(false);
  const [showAvifWarning, setShowAvifWarning] = useState(false);

  const handleFilesSelected = (newFiles: File[]) => {
    // Si ya hay archivos, agregar los nuevos; si no, reemplazar
    if (files.length > 0) {
      setFiles([...files, ...newFiles]);
    } else {
      setFiles(newFiles);
      setCurrentView('settings');
    }
  };

  const handleShowSettings = () => {
    setCurrentView('settings');
  };

  const handleQualityChange = (quality: number) => {
    setSettings({ ...settings, quality });
  };

  const handleFormatChange = (format: string) => {
    setSettings({ ...settings, format });
  };

  const handleResizeChange = (width?: number, height?: number) => {
    setSettings({ ...settings, resizeWidth: width, resizeHeight: height });
  };

  const hasInefficientConversion = (): boolean => {
    const inefficientMap: Record<string, string[]> = {
      'image/webp': ['jpeg', 'png'],
      'image/avif': ['jpeg', 'png'],
      'image/png': ['jpeg'],
      'image/jpeg': ['png'],
    };
    return files.some(file => {
      const inefficientTargets = inefficientMap[file.type];
      return inefficientTargets?.includes(settings.format) ?? false;
    });
  };

  const handleCompress = async (skipInefficiencyWarning = false, skipAvifWarning = false) => {
    if (!skipInefficiencyWarning && hasInefficientConversion()) {
      setShowFormatWarning(true);
      return;
    }
    if (!skipAvifWarning && settings.format === 'avif') {
      setShowAvifWarning(true);
      return;
    }
    try {
      setIsCompressing(true);
      setCurrentView('processing');
      setProgress(0);

      // Step 1: Create job
      const jobResponse = await fetch('/api/jobs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      });

      const jobData = await jobResponse.json();
      if (!jobData.success) throw new Error(jobData.error);

      const newJobId = jobData.jobId;
      setJobId(newJobId);

      // Step 2: Upload files
      const formData = new FormData();
      files.forEach(file => formData.append('images', file));

      const uploadResponse = await fetch(`/api/jobs/${newJobId}/upload`, {
        method: 'POST',
        body: formData
      });

      const uploadData = await uploadResponse.json();
      if (!uploadData.success) throw new Error(uploadData.error);

      setTotalFiles(uploadData.filesUploaded);
      setProgress(30);

      // Step 3: Process images
      const processResponse = await fetch(`/api/jobs/${newJobId}/process`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          format: settings.format,
          quality: settings.quality,
          resize: settings.resizeWidth || settings.resizeHeight ? {
            width: settings.resizeWidth,
            height: settings.resizeHeight
          } : undefined
        })
      });

      const processData = await processResponse.json();
      if (!processData.success) throw new Error(processData.error);

      // Step 4: Poll for completion.
      // Queue waiting time uses a separate budget so jobs don't time out while
      // waiting for a free slot; the processing budget only counts once running.
      let isComplete = false;
      let pollCount = 0;
      let queuedPolls = 0;
      const maxPolls = settings.format === 'avif' ? 180 : 120;
      const maxQueuedPolls = 600; // up to ~10 min waiting in queue

      while (!isComplete && pollCount < maxPolls && queuedPolls < maxQueuedPolls) {
        await new Promise(resolve => setTimeout(resolve, 1000));

        const statusResponse = await fetch(`/api/jobs/${newJobId}/status`);
        const statusData = await statusResponse.json();

        if (statusData.status === 'completed') {
          isComplete = true;
          setIsQueued(false);
          setProgress(100);
          setStats({
            originalSize: statusData.originalSize,
            compressedSize: statusData.compressedSize,
            reduction: statusData.reduction
          });
          setCurrentView('download');
        } else if (statusData.status === 'failed') {
          throw new Error(statusData.error || 'Processing failed');
        } else if (statusData.status === 'queued') {
          setIsQueued(true);
          queuedPolls++;
        } else {
          setIsQueued(false);
          setProcessedCount(statusData.processedCount);
          const estimatedProgress = 30 + (statusData.progress * 0.7);
          setProgress(Math.min(estimatedProgress, 99));
          pollCount++;
        }
      }

      if (!isComplete) {
        throw new Error('Processing timeout');
      }
    } catch (error: unknown) {
      const err = error instanceof Error ? error : new Error(String(error));
      const code = err instanceof Error ? err.message : String(err);
      logger.error('Compression error', { error: code });
      // Map known server error codes to friendly localized messages.
      const known = ['server_busy', 'rate_limited', 'forbidden_origin'];
      const friendly = known.includes(code)
        ? t(`errors.${code}` as any)
        : t('errors.defaultMessage', { defaultValue: 'An error occurred during compression' });
      setErrorMessage(friendly);
      setIsQueued(false);
      setCurrentView('error');
    } finally {
      setIsCompressing(false);
    }
  };

  const handleDownload = async () => {
    if (!jobId) return;

    try {
      const response = await fetch(`/api/jobs/${jobId}/download`);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `aurora-croma-${jobId.slice(0, 8)}.zip`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      logger.error('Download error', { error: errorMessage });
      setErrorMessage(t('errors.downloadFailed', { defaultValue: 'Failed to download files' }));
      setCurrentView('error');
    }
  };

  const handleReset = () => {
    setFiles([]);
    setJobId(null);
    setProgress(0);
    setProcessedCount(0);
    setTotalFiles(0);
    setIsQueued(false);
    setSettings({
      format: 'webp',
      quality: 80,
      resizeWidth: undefined,
      resizeHeight: undefined
    });
    setCurrentView('upload');
  };

  const handleRetry = () => {
    setErrorMessage('');
    setCurrentView('settings');
  };

  return (
    <main className="min-h-screen bg-background dark:bg-bg-dark text-text dark:text-text-dark">
      <JsonLd />
      {currentView === 'upload' && (
        <>
          <div className="px-4 sm:px-8 md:px-16 lg:px-20 xl:px-[120px] max-w-[1720px] mx-auto">
            <div className="flex flex-col mb-8 sm:mb-12 md:mb-16 mt-8 sm:mt-12 md:mt-16">
              {/* Hero Title */}
              <div className="w-full mb-6 sm:mb-8 md:mb-12">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary" style={{ lineHeight: '120%' }}>
                  {t('hero.title')}<br />{t('hero.subtitle')}
                </h1>
              </div>

              {/* Main Grid - Side by Side */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-20 items-start animate-fade-in">
                {/* Left Column: Text Content */}
                <div className="space-y-8">
                  <div>
                    <p className="text-base text-text-muted dark:text-text-muted-dark mb-8 leading-relaxed">
                      {t('hero.description')}
                    </p>
                  </div>

                  <div className="space-y-4">
                    {t.raw('hero.features').map((feature: string, index: number) => (
                      <div key={index} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <p className="text-text dark:text-text-dark font-medium">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Column: Image Uploader */}
                <ImageUploader
                  onFilesSelected={handleFilesSelected}
                  onShowSettings={handleShowSettings}
                />
              </div>
            </div>
          </div>
        </>
      )}

      {currentView === 'settings' && files.length > 0 && (
        <>
          <div className="px-4 sm:px-8 md:px-16 lg:px-20 xl:px-[120px] max-w-[1720px] mx-auto mb-4 sm:mb-6 md:mb-8 mt-8 sm:mt-12 md:mt-16">
            <div className="flex flex-col">
              {/* Hero Title */}
              <div className="w-full">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary" style={{ lineHeight: '120%' }}>
                  {t('hero.title')}<br />{t('hero.subtitle')}
                </h1>
              </div>
            </div>
          </div>

          <CompressionSettings
            quality={settings.quality}
            format={settings.format}
            resizeWidth={settings.resizeWidth}
            resizeHeight={settings.resizeHeight}
            onQualityChange={handleQualityChange}
            onFormatChange={handleFormatChange}
            onResizeChange={handleResizeChange}
            onCompress={() => handleCompress()}
            isLoading={isCompressing}
          />

          <div className="px-4 sm:px-8 md:px-16 lg:px-20 xl:px-[120px] max-w-[1720px] mx-auto mb-4 sm:mb-6 md:mb-8">
            <div className="flex flex-col mb-8 sm:mb-12 md:mb-16">
              {/* Main Grid - Side by Side */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-20 items-start animate-fade-in">
              {/* Left Column: Selected Images List */}
              <div>
                <h2 className="text-2xl font-bold text-text dark:text-text-dark mb-6">{t('uploader.selectedImages')}</h2>
                <div className="space-y-3">
                  {files.map((file, index) => (
                    <div key={index} className="bg-white dark:bg-container-dark border border-gray-200 dark:border-gray-700 rounded-lg p-4 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3 flex-1">
                        <img
                          src={URL.createObjectURL(file)}
                          alt={file.name}
                          className="w-12 h-12 object-cover rounded"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-text dark:text-text-dark truncate">{file.name}</p>
                          <p className="text-sm text-text-muted dark:text-text-muted-dark">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          const newFiles = files.filter((_, i) => i !== index);
                          if (newFiles.length === 0) {
                            handleReset();
                          } else {
                            setFiles(newFiles);
                          }
                        }}
                        className="px-4 py-2 text-sm border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 text-text dark:text-text-dark transition-colors whitespace-nowrap"
                      >
                        {t('uploader.removeButton')}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Image Uploader */}
              <div>
                <h2 className="text-2xl font-bold text-text dark:text-text-dark mb-6">{t('uploader.addMoreImages')}</h2>
                <ImageUploader
                  onFilesSelected={handleFilesSelected}
                  onShowSettings={handleShowSettings}
                />
              </div>
            </div>
            </div>
          </div>
        </>
      )}

      {currentView === 'processing' && (
        <ProcessingView progress={progress} processedCount={processedCount} totalFiles={totalFiles} queued={isQueued} />
      )}

      {currentView === 'download' && (
        <DownloadView
          stats={stats}
          onDownload={handleDownload}
          onReset={handleReset}
        />
      )}

      {currentView === 'error' && (
        <ErrorView
          message={errorMessage}
          onRetry={handleRetry}
        />
      )}

      {currentView === 'upload' && (
        <>
          <FormatGuide />
          <FAQ />
        </>
      )}

      {showFormatWarning && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          onClick={() => setShowFormatWarning(false)}
        >
          <div
            className="bg-black bg-opacity-50 absolute inset-0"
            aria-hidden="true"
          />
          <div
            className="bg-white dark:bg-container-dark rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-6 sm:p-8 max-w-md w-full relative"
            role="dialog"
            aria-modal="true"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center">
                <svg className="w-5 h-5 text-yellow-600 dark:text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-text dark:text-text-dark mb-1">
                  {t('settings.formatWarning.title')}
                </h3>
                <p className="text-sm text-text-muted dark:text-text-muted-dark">
                  {t('settings.formatWarning.description')}
                </p>
              </div>
            </div>
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setShowFormatWarning(false)}
                className="px-4 py-2 text-sm font-medium border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 text-text dark:text-text-dark transition-colors"
              >
                {t('settings.formatWarning.cancel')}
              </button>
              <button
                onClick={() => {
                  setShowFormatWarning(false);
                  handleCompress(true, false);
                }}
                className="px-4 py-2 text-sm font-medium bg-primary hover:bg-primary/90 text-white rounded-lg transition-colors"
              >
                {t('settings.formatWarning.continue')}
              </button>
            </div>
          </div>
        </div>
      )}

      {showAvifWarning && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          onClick={() => setShowAvifWarning(false)}
        >
          <div
            className="bg-black bg-opacity-50 absolute inset-0"
            aria-hidden="true"
          />
          <div
            className="bg-white dark:bg-container-dark rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-6 sm:p-8 max-w-md w-full relative"
            role="dialog"
            aria-modal="true"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-text dark:text-text-dark mb-1">
                  {t('settings.avifWarning.title')}
                </h3>
                <p className="text-sm text-text-muted dark:text-text-muted-dark">
                  {t('settings.avifWarning.descriptionFree')}
                </p>
              </div>
            </div>
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setShowAvifWarning(false)}
                className="px-4 py-2 text-sm font-medium border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 text-text dark:text-text-dark transition-colors"
              >
                {t('settings.avifWarning.cancel')}
              </button>
              <button
                onClick={() => {
                  setShowAvifWarning(false);
                  handleCompress(true, true);
                }}
                className="px-4 py-2 text-sm font-medium bg-primary hover:bg-primary/90 text-white rounded-lg transition-colors"
              >
                {t('settings.avifWarning.continue')}
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
