import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service — Croma by Aurora33',
  description: 'Terms of Service for Croma image compression tool by Aurora33.',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background dark:bg-bg-dark">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10">
          <Link href="/tool" className="text-primary hover:opacity-80 transition-opacity text-sm">
            ← Back to Croma
          </Link>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-text dark:text-text-dark mb-2">
          Terms of Service
        </h1>
        <p className="text-sm text-text-muted dark:text-text-muted-dark mb-12">
          Last updated: February 26, 2026
        </p>

        <div className="prose-custom space-y-10 text-text dark:text-text-dark">

          <section>
            <h2 className="text-xl font-bold text-text dark:text-text-dark mb-3">1. Acceptance of Terms</h2>
            <p className="text-text-muted dark:text-text-muted-dark leading-relaxed">
              By accessing or using Croma ("the Service"), operated by Aurora33 ("we", "us", "our"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Service. These terms apply to all visitors, users, and registered accounts.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-text dark:text-text-dark mb-3">2. Description of Service</h2>
            <p className="text-text-muted dark:text-text-muted-dark leading-relaxed">
              Croma is a web-based image compression and format conversion tool. It allows users to compress, convert, and resize images in bulk. The Service is provided free of charge for the Free tier and under a paid or promotional plan for the Pro tier. Aurora33 reserves the right to modify, suspend, or discontinue any part of the Service at any time.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-text dark:text-text-dark mb-3">3. User Accounts</h2>
            <p className="text-text-muted dark:text-text-muted-dark leading-relaxed mb-3">
              To access Pro features, you must create an account by providing a valid email address and password. You are responsible for maintaining the confidentiality of your credentials and for all activity that occurs under your account.
            </p>
            <p className="text-text-muted dark:text-text-muted-dark leading-relaxed">
              You must be at least 16 years old to create an account. By registering, you confirm that the information you provide is accurate and up to date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-text dark:text-text-dark mb-3">4. Acceptable Use</h2>
            <p className="text-text-muted dark:text-text-muted-dark leading-relaxed mb-3">You agree not to:</p>
            <ul className="list-disc list-inside space-y-2 text-text-muted dark:text-text-muted-dark">
              <li>Upload content that is illegal, harmful, or infringes third-party rights</li>
              <li>Attempt to reverse-engineer, hack, or disrupt the Service</li>
              <li>Use automated scripts to abuse the Service beyond normal usage</li>
              <li>Resell or sublicense access to the Service without written permission</li>
              <li>Upload malware or any malicious files</li>
            </ul>
            <p className="text-text-muted dark:text-text-muted-dark leading-relaxed mt-3">
              Aurora33 reserves the right to suspend or terminate accounts that violate these rules.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-text dark:text-text-dark mb-3">5. Uploaded Content</h2>
            <p className="text-text-muted dark:text-text-muted-dark leading-relaxed">
              You retain full ownership of any images you upload. Uploaded files are processed temporarily and deleted automatically after one hour. Aurora33 does not access, review, or store your images beyond what is strictly necessary to perform the compression service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-text dark:text-text-dark mb-3">6. Intellectual Property</h2>
            <p className="text-text-muted dark:text-text-muted-dark leading-relaxed">
              All elements of the Service — including its design, source code, branding, and content — are the exclusive property of Aurora33 and are protected by applicable intellectual property laws. You may not copy, reproduce, or distribute any part of the Service without prior written consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-text dark:text-text-dark mb-3">7. Disclaimers and Limitation of Liability</h2>
            <p className="text-text-muted dark:text-text-muted-dark leading-relaxed mb-3">
              The Service is provided "as is" without warranties of any kind. Aurora33 does not guarantee uninterrupted or error-free operation.
            </p>
            <p className="text-text-muted dark:text-text-muted-dark leading-relaxed">
              To the maximum extent permitted by law, Aurora33 shall not be liable for any indirect, incidental, special, or consequential damages arising out of your use or inability to use the Service, including loss of data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-text dark:text-text-dark mb-3">8. Termination</h2>
            <p className="text-text-muted dark:text-text-muted-dark leading-relaxed">
              You may delete your account at any time by contacting us. Aurora33 may terminate or suspend your account at its discretion if you violate these Terms. Upon termination, your right to use the Service ceases immediately.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-text dark:text-text-dark mb-3">9. Changes to These Terms</h2>
            <p className="text-text-muted dark:text-text-muted-dark leading-relaxed">
              We may update these Terms at any time. When we do, we will revise the "Last updated" date at the top of this page. Continued use of the Service after changes constitutes your acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-text dark:text-text-dark mb-3">10. Governing Law</h2>
            <p className="text-text-muted dark:text-text-muted-dark leading-relaxed">
              These Terms are governed by the laws applicable to Aurora33's jurisdiction. Any disputes arising from these Terms shall be resolved through good-faith negotiation, and if necessary, through the competent courts of that jurisdiction.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-text dark:text-text-dark mb-3">11. Contact</h2>
            <p className="text-text-muted dark:text-text-muted-dark leading-relaxed">
              For any questions regarding these Terms, please contact us at{' '}
              <a href="mailto:hello@aurora33.dev" className="text-primary hover:opacity-80 transition-opacity">
                hello@aurora33.dev
              </a>.
            </p>
          </section>

        </div>

        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700 text-sm text-text-muted dark:text-text-muted-dark text-center">
          <Link href="/privacy" className="text-primary hover:opacity-80 transition-opacity">Privacy Policy</Link>
          <span className="mx-3">·</span>
          <Link href="/tool" className="hover:text-text dark:hover:text-text-dark transition-colors">Back to Croma</Link>
        </div>
      </div>
    </main>
  );
}
