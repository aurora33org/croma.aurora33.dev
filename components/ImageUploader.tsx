'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useTranslations } from '@/lib/i18n-context';
import { TIER_LIMITS } from '@/lib/config';

interface ImageUploaderProps {
  onFilesSelected: (files: File[]) => void;
  onShowSettings: () => void;
}

export function ImageUploader({ onFilesSelected, onShowSettings }: ImageUploaderProps) {
  const t = useTranslations('uploader');
  const { data: session } = useSession();
  const [dragOver, setDragOver] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const userTier = (session?.user?.tier as 'FREE' | 'PRO') || 'FREE';
  const limits = TIER_LIMITS[userTier];
  const maxFileSize = limits.MAX_FILE_SIZE;
  const maxFiles = limits.MAX_FILES;

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
      setError(t('errors.max_files', { maxFiles, tier: userTier }));
      return;
    }

    // Check file sizes
    const oversizedFiles = validFiles.filter(file => file.size > maxFileSize);
    if (oversizedFiles.length > 0) {
      const maxSizeMB = (maxFileSize / (1024 * 1024)).toFixed(0);
      setError(t('errors.file_size', { maxSizeMB, tier: userTier }));
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
        <div className="p-3 bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-700 rounded-lg text-red-700 dark:text-red-300 text-sm">
          {error}
        </div>
      )}

      {/* Drop Zone */}
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => document.getElementById('file-input')?.click()}
        className={`bg-contrast-v2 dark:bg-card border-2 border-primary rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 text-center cursor-pointer transition-colors min-h-[300px] sm:min-h-[350px] lg:min-h-[400px] flex flex-col items-center justify-center ${
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

        <div className="space-y-2 text-sm text-text-muted dark:text-text-muted-dark">
          <p className="font-medium text-text-muted dark:text-text-muted-dark">
            Max {maxFiles} files • {(maxFileSize / (1024 * 1024)).toFixed(0)}MB per file
          </p>
          <p>{t('dropzone.futureNote')}</p>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 gap-y-4 mt-8">
        <div className="flex items-center gap-3">
          <svg className="w-6 h-6 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
          </svg>
          <span className="text-base font-medium text-text-muted dark:text-text-muted-dark">{t('badges.free')}</span>
        </div>

        <div className="flex items-center gap-3">
          <svg className="w-6 h-6 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <span className="text-base font-medium text-text-muted dark:text-text-muted-dark">{t('badges.secure')}</span>
        </div>

        <div className="flex items-center gap-3">
          <svg className="w-6 h-6 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <span className="text-base font-medium text-text-muted dark:text-text-muted-dark">{t('badges.fast')}</span>
        </div>
      </div>
    </div>
  );
}
