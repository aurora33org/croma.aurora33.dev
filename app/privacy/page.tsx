import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy — Croma by Aurora33',
  description: 'Privacy Policy for Croma image compression tool by Aurora33.',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background dark:bg-bg-dark">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10">
          <Link href="/tool" className="text-primary hover:opacity-80 transition-opacity text-sm">
            ← Back to Croma
          </Link>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-text dark:text-text-dark mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-text-muted dark:text-text-muted-dark mb-12">
          Last updated: February 26, 2026
        </p>

        <div className="space-y-10 text-text dark:text-text-dark">

          <section>
            <h2 className="text-xl font-bold text-text dark:text-text-dark mb-3">1. Who We Are</h2>
            <p className="text-text-muted dark:text-text-muted-dark leading-relaxed">
              Croma is a product by Aurora33 ("we", "us", "our"). We operate the image compression tool available at croma.aurora33.dev. This Privacy Policy explains how we collect, use, and protect your personal data when you use our Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-text dark:text-text-dark mb-3">2. Data We Collect</h2>
            <p className="text-text-muted dark:text-text-muted-dark leading-relaxed mb-3">
              We collect the following categories of personal data:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-muted dark:text-text-muted-dark">
              <li><strong className="text-text dark:text-text-dark">Account data:</strong> email address and encrypted password when you register</li>
              <li><strong className="text-text dark:text-text-dark">Usage data:</strong> number of compression jobs, file counts, and usage metrics tied to your account</li>
              <li><strong className="text-text dark:text-text-dark">Technical data:</strong> IP address, browser type, and session data collected automatically via logs</li>
              <li><strong className="text-text dark:text-text-dark">Uploaded files:</strong> images are processed in-memory and deleted automatically after one hour — we do not store or inspect their contents</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-text dark:text-text-dark mb-3">3. How We Use Your Data</h2>
            <p className="text-text-muted dark:text-text-muted-dark leading-relaxed mb-3">
              We use your personal data for the following purposes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-muted dark:text-text-muted-dark">
              <li><strong className="text-text dark:text-text-dark">Service delivery:</strong> to operate your account, apply usage limits, and provide compression features</li>
              <li><strong className="text-text dark:text-text-dark">Product communications:</strong> to send you updates, new features, and improvements related to Croma</li>
              <li><strong className="text-text dark:text-text-dark">Marketing by Aurora33:</strong> to inform you about other products, tools, and services developed or offered by Aurora33</li>
              <li><strong className="text-text dark:text-text-dark">Promotional offers:</strong> to send promotional campaigns, discounts, and special offers for Aurora33 products and selected third-party partnerships</li>
              <li><strong className="text-text dark:text-text-dark">Newsletter:</strong> if you opted in at registration, to send you our periodic newsletter covering product news, tips, and updates</li>
              <li><strong className="text-text dark:text-text-dark">Analytics:</strong> to understand how the Service is used and improve it</li>
              <li><strong className="text-text dark:text-text-dark">Legal compliance:</strong> to meet applicable legal obligations</li>
            </ul>
            <p className="text-text-muted dark:text-text-muted-dark leading-relaxed mt-3">
              Marketing and newsletter emails are only sent to users who explicitly consented at the time of registration. You may withdraw this consent at any time (see Section 7).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-text dark:text-text-dark mb-3">4. Legal Basis for Processing</h2>
            <p className="text-text-muted dark:text-text-muted-dark leading-relaxed mb-3">
              We process your personal data under the following legal bases:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-muted dark:text-text-muted-dark">
              <li><strong className="text-text dark:text-text-dark">Contract performance:</strong> to provide the Service you signed up for</li>
              <li><strong className="text-text dark:text-text-dark">Consent:</strong> for marketing emails, newsletters, and promotional communications — you gave explicit consent at registration</li>
              <li><strong className="text-text dark:text-text-dark">Legitimate interest:</strong> for product analytics and service improvements</li>
              <li><strong className="text-text dark:text-text-dark">Legal obligation:</strong> where required by applicable law</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-text dark:text-text-dark mb-3">5. Data Sharing</h2>
            <p className="text-text-muted dark:text-text-muted-dark leading-relaxed mb-3">
              We do not sell your personal data. We may share your data with:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-muted dark:text-text-muted-dark">
              <li><strong className="text-text dark:text-text-dark">Service providers:</strong> trusted third-party vendors (hosting, database, email delivery) who process data on our behalf under data processing agreements</li>
              <li><strong className="text-text dark:text-text-dark">Aurora33 group:</strong> other products or projects operated under the Aurora33 umbrella, solely for the purposes described in Section 3</li>
              <li><strong className="text-text dark:text-text-dark">Legal authorities:</strong> when required by law or to protect the rights and safety of Aurora33 or its users</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-text dark:text-text-dark mb-3">6. Data Retention</h2>
            <p className="text-text-muted dark:text-text-muted-dark leading-relaxed">
              We retain your account data for as long as your account is active. Uploaded image files are automatically deleted after one hour of inactivity. If you delete your account, we will erase your personal data within 30 days, except where retention is required by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-text dark:text-text-dark mb-3">7. Your Rights</h2>
            <p className="text-text-muted dark:text-text-muted-dark leading-relaxed mb-3">
              Depending on your jurisdiction, you may have the following rights regarding your personal data:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-muted dark:text-text-muted-dark">
              <li><strong className="text-text dark:text-text-dark">Access:</strong> request a copy of the data we hold about you</li>
              <li><strong className="text-text dark:text-text-dark">Rectification:</strong> correct inaccurate or incomplete data</li>
              <li><strong className="text-text dark:text-text-dark">Erasure:</strong> request deletion of your data ("right to be forgotten")</li>
              <li><strong className="text-text dark:text-text-dark">Objection:</strong> object to data processing based on legitimate interest</li>
              <li><strong className="text-text dark:text-text-dark">Withdraw consent:</strong> unsubscribe from marketing or newsletter emails at any time by clicking the unsubscribe link in any email or contacting us directly</li>
              <li><strong className="text-text dark:text-text-dark">Portability:</strong> request your data in a structured, machine-readable format</li>
            </ul>
            <p className="text-text-muted dark:text-text-muted-dark leading-relaxed mt-3">
              To exercise any of these rights, contact us at{' '}
              <a href="mailto:hello@aurora33.dev" className="text-primary hover:opacity-80 transition-opacity">
                hello@aurora33.dev
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-text dark:text-text-dark mb-3">8. Cookies</h2>
            <p className="text-text-muted dark:text-text-muted-dark leading-relaxed">
              We use essential cookies to maintain your session and language preferences (e.g., <code className="text-primary text-sm">NEXT_LOCALE</code>, authentication tokens). We do not use third-party advertising cookies. You can disable cookies in your browser settings, though this may affect Service functionality.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-text dark:text-text-dark mb-3">9. Security</h2>
            <p className="text-text-muted dark:text-text-muted-dark leading-relaxed">
              We implement industry-standard security measures including encrypted passwords (bcrypt), HTTPS transport, and restricted server access. However, no system is completely secure. We encourage you to use a strong, unique password for your account.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-text dark:text-text-dark mb-3">10. Children's Privacy</h2>
            <p className="text-text-muted dark:text-text-muted-dark leading-relaxed">
              The Service is not directed to children under the age of 16. We do not knowingly collect personal data from minors. If you believe a minor has provided us with personal data, please contact us and we will delete it promptly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-text dark:text-text-dark mb-3">11. Changes to This Policy</h2>
            <p className="text-text-muted dark:text-text-muted-dark leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify registered users of significant changes by email and update the "Last updated" date at the top. Continued use of the Service after changes constitutes your acceptance of the revised Policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-text dark:text-text-dark mb-3">12. Contact</h2>
            <p className="text-text-muted dark:text-text-muted-dark leading-relaxed">
              For privacy-related questions or to exercise your rights, contact Aurora33 at{' '}
              <a href="mailto:hello@aurora33.dev" className="text-primary hover:opacity-80 transition-opacity">
                hello@aurora33.dev
              </a>.
            </p>
          </section>

        </div>

        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700 text-sm text-text-muted dark:text-text-muted-dark text-center">
          <Link href="/terms" className="text-primary hover:opacity-80 transition-opacity">Terms of Service</Link>
          <span className="mx-3">·</span>
          <Link href="/tool" className="hover:text-text dark:hover:text-text-dark transition-colors">Back to Croma</Link>
        </div>
      </div>
    </main>
  );
}
