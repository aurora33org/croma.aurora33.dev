'use client';

import { useState } from 'react';
import { useTranslations } from '@/lib/i18n-context';
import { PricingCards } from '@/components/PricingCards';
import RegisterModal from '@/components/RegisterModal';

export default function PricingPage() {
  const t = useTranslations();
  const [showModal, setShowModal] = useState(false);

  return (
    <main className="min-h-screen bg-background dark:bg-dark">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-text dark:text-text-dark">
            {t('pricing.title') || 'Pricing Plans'}
          </h1>
          <p className="text-lg text-text-muted dark:text-text-muted-dark">
            {t('pricing.subtitle') || 'Choose the perfect plan for you'}
          </p>
        </div>

        {/* Pricing Cards */}
        <PricingCards onSelectPro={() => setShowModal(true)} />

        {/* Register Modal */}
        <RegisterModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          context="pricing"
        />
      </div>
    </main>
  );
}
