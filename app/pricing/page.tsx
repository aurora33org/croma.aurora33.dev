'use client';

import { useState } from 'react';
import { useTranslations } from '@/lib/i18n-context';
import { PricingCards } from '@/components/PricingCards';
import RegisterModal from '@/components/RegisterModal';
import { Footer } from '@/components/Footer';

export default function PricingPage() {
  const t = useTranslations();
  const [showModal, setShowModal] = useState(false);

  return (
    <main className="min-h-screen bg-background dark:bg-bg-dark">
      {/* Pricing Cards */}
      <PricingCards onSelectPro={() => setShowModal(true)} />

      {/* Register Modal */}
      <RegisterModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        context="pricing"
      />

      <Footer />
    </main>
  );
}
