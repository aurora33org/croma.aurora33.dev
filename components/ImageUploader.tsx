'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from '@/lib/i18n-context';
import { DEFAULT_LIMITS } from '@/lib/config';

interface ImageUploaderProps {
  onFilesSelected: (files: File[]) => void;
  onShowSettings: () => void;
}

export function ImageUploader({ onFilesSelected, onShowSettings }: ImageUploaderProps) {
  const t = useTranslations('uploader');
  const locale = useLocale();
  const [dragOver, setDragOver] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const maxFileSize = DEFAULT_LIMITS.MAX_FILE_SIZE;
  const maxFiles = DEFAULT_LIMITS.MAX_FILES;

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ? Array.from(e.target.files) : [];
    handleFiles(files);
  };

  const handleFiles = (files: File[]) => {
    setError(null);

    // Validate file types
    const validFiles = files.filter(file =>
      ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif'].includes(file.type)
    );

    if (validFiles.length === 0) {
      setError(t('errors.no_valid_files'));
      return;
    }

    // Check file count
    if (validFiles.length > maxFiles) {
      setError(t('errors.max_files', { maxFiles }));
      return;
    }

    // Check file sizes
    const oversizedFiles = validFiles.filter(file => file.size > maxFileSize);
    if (oversizedFiles.length > 0) {
      const maxSizeMB = (maxFileSize / (1024 * 1024)).toFixed(0);
      setError(t('errors.file_size', { maxSizeMB }));
      return;
    }

    if (validFiles.length > 0) {
      onFilesSelected(validFiles);
      onShowSettings();
    }
  };

  return (
    <div className="flex flex-col h-full space-y-8">
      {/* Error Alert */}
      {error && (
        <div className="p-3 bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-700 rounded-none text-red-700 dark:text-red-300 text-sm">
          {error}
        </div>
      )}

      {/* Drop Zone */}
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => document.getElementById('file-input')?.click()}
        className={`bg-contrast-v2 dark:bg-container-dark border-2 border-primary rounded-none p-4 sm:p-6 md:p-8 lg:p-12 text-center cursor-pointer transition-colors min-h-[300px] sm:min-h-[350px] lg:min-h-[400px] flex flex-col items-center justify-center ${
          dragOver ? 'bg-primary/5 dark:bg-primary/10' : ''
        }`}
        style={{
          boxShadow: '0 16px 24px -8px rgba(0, 0, 0, 0.08)'
        }}
      >
        <input
          id="file-input"
          type="file"
          multiple
          accept="image/*"
          onChange={handleFileSelect}
          className="hidden"
        />

        <div className="mb-6">
          <svg className="w-16 h-16 text-primary mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>

        <h3 className="text-3xl font-normal text-text dark:text-text-dark mb-2">{t('dropzone.title')}</h3>
        <p className="text-text-muted dark:text-text-muted-dark text-base mb-6">{t('dropzone.subtitle')}</p>

        <p className="font-[family-name:var(--font-geist-mono)] text-[11px] tracking-[0.18em] uppercase text-text-muted dark:text-text-muted-dark">
          Max {maxFiles} files · {(maxFileSize / (1024 * 1024)).toFixed(0)}MB / file
        </p>
      </div>

      {/* Need more? -> self-host */}
      <div className="text-center mt-4">
        <Link
          href={`/${locale}/self-host`}
          className="font-[family-name:var(--font-geist-mono)] text-[11px] tracking-[0.16em] uppercase text-primary hover:opacity-80 transition-opacity"
        >
          {t('dropzone.needMore')}
        </Link>
      </div>

      {/* Trust strip (HUD status bar) */}
      <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-1 mt-8 font-[family-name:var(--font-geist-mono)] text-[11px] tracking-[0.18em] uppercase text-text-muted dark:text-text-muted-dark">
        <span>{t('badges.free')}</span>
        <span className="text-primary">·</span>
        <span>{t('badges.secure')}</span>
        <span className="text-primary">·</span>
        <span>{t('badges.fast')}</span>
        <span className="text-primary">·</span>
        <span>{t('badges.noSignup')}</span>
      </div>
    </div>
  );
}
