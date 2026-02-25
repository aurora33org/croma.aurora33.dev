# Pro Tier Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Implement two-page navigation (Tool & Pricing) with registration modal, tier limits, and session tracking.

**Architecture:**
- Two separate routes: `/tool` (compressor) and `/pricing` (tier comparison)
- Header navigation component shared across pages
- RegisterModal triggered contextually (pricing, image limit, session limit)
- Anonymous session tracking via cookie + localStorage
- Authenticated user tracking via database (`user_usage` table)
- Auto-assign `tier='pro'` on registration

**Tech Stack:** Next.js 16, React 19, TypeScript, Prisma, NextAuth.js, Tailwind CSS

---

## Phase 1: Setup & Foundation

### Task 1: Add i18n translations for Pricing

**Files:**
- Modify: `i18n/locales/es/pricing.json` (create)
- Modify: `i18n/locales/en/pricing.json` (create)
- Modify: `i18n/locales/es/index.ts` (add import)
- Modify: `i18n/locales/en/index.ts` (add import)

**Step 1: Create Spanish pricing translations**

Create `/i18n/locales/es/pricing.json`:
```json
{
  "title": "Planes de Precios",
  "subtitle": "Elige el plan perfecto para ti",
  "free": {
    "name": "Gratuito",
    "description": "Para usuarios ocasionales",
    "batches_per_day": "5 lotes al día",
    "images_per_batch": "5 imágenes por lote",
    "max_batches": "6 lotes máximos al día",
    "max_file_size": "7 MB por imagen",
    "formats": "Formatos: WebP, JPEG, PNG",
    "compression_time": "~5-7 segundos por lote",
    "button": "Ya usándolo",
    "button_alt": "Usar Gratis"
  },
  "pro": {
    "name": "Pro",
    "description": "Para usuarios avanzados",
    "batches_per_day": "15 lotes al día",
    "images_per_batch": "15 imágenes por lote",
    "max_batches": "15 lotes máximos al día",
    "max_file_size": "12 MB por imagen",
    "formats": "Formatos: WebP, JPEG, PNG",
    "compression_time": "~5-7 segundos por lote",
    "button": "Registrarse Gratis"
  },
  "limit_reached": {
    "images_title": "Límite de imágenes alcanzado",
    "images_message": "Actualiza a Pro para comprimir hasta 15 imágenes por lote.",
    "sessions_title": "Límite diario alcanzado",
    "sessions_message": "Ya alcanzaste tu límite de 6 lotes hoy. Vuelve en 23 horas o actualiza a Pro."
  }
}
```

**Step 2: Create English pricing translations**

Create `/i18n/locales/en/pricing.json`:
```json
{
  "title": "Pricing Plans",
  "subtitle": "Choose the perfect plan for you",
  "free": {
    "name": "Free",
    "description": "For occasional users",
    "batches_per_day": "5 batches per day",
    "images_per_batch": "5 images per batch",
    "max_batches": "6 batches max per day",
    "max_file_size": "7 MB per image",
    "formats": "Formats: WebP, JPEG, PNG",
    "compression_time": "~5-7 seconds per batch",
    "button": "Using Now",
    "button_alt": "Use Free"
  },
  "pro": {
    "name": "Pro",
    "description": "For power users",
    "batches_per_day": "15 batches per day",
    "images_per_batch": "15 images per batch",
    "max_batches": "15 batches max per day",
    "max_file_size": "12 MB per image",
    "formats": "Formats: WebP, JPEG, PNG",
    "compression_time": "~5-7 seconds per batch",
    "button": "Register Free"
  },
  "limit_reached": {
    "images_title": "Image limit reached",
    "images_message": "Upgrade to Pro to compress up to 15 images per batch.",
    "sessions_title": "Daily limit reached",
    "sessions_message": "You've reached your 6 batches today. Come back in 23 hours or upgrade to Pro."
  }
}
```

**Step 3: Update Spanish locale index**

Modify `i18n/locales/es/index.ts`, add to imports:
```typescript
import pricing from './pricing.json';
```

And add to export object:
```typescript
pricing,
```

**Step 4: Update English locale index**

Modify `i18n/locales/en/index.ts`, add to imports:
```typescript
import pricing from './pricing.json';
```

And add to export object:
```typescript
pricing,
```

**Step 5: Verify translations load**

Run:
```bash
npm run build
```

Expected: Build succeeds, no TypeScript errors in i18n imports.

**Step 6: Commit**

```bash
git add i18n/locales/es/pricing.json i18n/locales/en/pricing.json i18n/locales/es/index.ts i18n/locales/en/index.ts
git commit -m "feat: add i18n translations for pricing page"
```

---

### Task 2: Update Prisma schema for user_usage tracking

**Files:**
- Modify: `prisma/schema.prisma` (add UserUsage model and relation)

**Step 1: Add UserUsage model to schema**

Open `prisma/schema.prisma`, find the `User` model and add this after it:

```prisma
model UserUsage {
  id           String   @id @default(cuid())
  userId       String
  date         DateTime @default(now()) @db.Date
  sessionCount Int      @default(0)
  imageCount   Int      @default(0)
  dailyReset   DateTime

  user         User     @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@unique([userId, date])
  @@index([userId])
}
```

And update the `User` model to add the relation:
```prisma
  usage        UserUsage[]
```

**Step 2: Create migration**

Run:
```bash
npx prisma migrate dev --name add_user_usage_tracking
```

Expected: Migration created, database updated, Prisma client regenerated.

**Step 3: Commit**

```bash
git add prisma/schema.prisma prisma/migrations/
git commit -m "feat: add UserUsage model for session tracking"
```

---

## Phase 2: Components

### Task 3: Create Header component with navigation

**Files:**
- Create: `components/Header.tsx`
- Modify: `app/layout.tsx` (import Header)

**Step 1: Create Header component**

Create `components/Header.tsx`:
```typescript
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useTranslations } from '@/lib/i18n-context';
import { LanguageToggle } from './LanguageToggle';

export function Header() {
  const pathname = usePathname();
  const { data: session } = useSession();
  const t = useTranslations();

  const isToolPage = pathname === '/tool';
  const isPricingPage = pathname === '/pricing';

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-dark">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link href="/tool" className="text-2xl font-bold text-primary">
          Aurora
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-8">
          <Link
            href="/tool"
            className={`font-medium transition-colors ${
              isToolPage
                ? 'text-primary'
                : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100'
            }`}
          >
            {t('common.tool') || 'Herramienta'}
          </Link>
          <Link
            href="/pricing"
            className={`font-medium transition-colors ${
              isPricingPage
                ? 'text-primary'
                : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100'
            }`}
          >
            {t('pricing.title') || 'Pricing'}
          </Link>
        </nav>

        {/* Right side: Language toggle + Auth */}
        <div className="flex items-center gap-4">
          <LanguageToggle />
          {session?.user ? (
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {session.user.email}
            </span>
          ) : null}
        </div>
      </div>
    </header>
  );
}
```

**Step 2: Update app/layout.tsx to use Header**

Modify `app/layout.tsx`, find the main component and replace the navigation section with:

```typescript
import { Header } from '@/components/Header';

// ... in the JSX:
<body className={`${syne.variable} ${kangge.variable} ${quicksand.variable} antialiased`}>
  <Header />
  {children}
  <Footer />
</body>
```

**Step 3: Add translation key for "Herramienta"**

Modify `i18n/locales/es/common.json`, add:
```json
"tool": "Herramienta"
```

Modify `i18n/locales/en/common.json`, add:
```json
"tool": "Tool"
```

**Step 4: Build and verify**

Run:
```bash
npm run build
```

Expected: Build succeeds.

**Step 5: Commit**

```bash
git add components/Header.tsx app/layout.tsx i18n/locales/es/common.json i18n/locales/en/common.json
git commit -m "feat: create Header component with navigation"
```

---

### Task 4: Create PricingCards component

**Files:**
- Create: `components/PricingCards.tsx`

**Step 1: Create PricingCards component**

Create `components/PricingCards.tsx`:
```typescript
'use client';

import { useSession } from 'next-auth/react';
import { useTranslations } from '@/lib/i18n-context';

interface PricingCardsProps {
  onSelectPro: () => void;
}

export function PricingCards({ onSelectPro }: PricingCardsProps) {
  const { data: session } = useSession();
  const t = useTranslations();

  const freePlan = t('pricing.free');
  const proPlan = t('pricing.pro');
  const isAuthenticated = !!session?.user;

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      {/* Free Card */}
      <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-900">
        <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
          {freePlan.name || 'Free'}
        </h3>
        <p className="mb-6 text-gray-600 dark:text-gray-400">
          {freePlan.description || 'For occasional users'}
        </p>

        <ul className="mb-8 space-y-3">
          <li className="flex items-start">
            <span className="mr-3 text-primary">✓</span>
            <span className="text-gray-700 dark:text-gray-300">
              {freePlan.batches_per_day || '5 batches per day'}
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-primary">✓</span>
            <span className="text-gray-700 dark:text-gray-300">
              {freePlan.images_per_batch || '5 images per batch'}
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-primary">✓</span>
            <span className="text-gray-700 dark:text-gray-300">
              {freePlan.max_batches || '6 batches max per day'}
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-primary">✓</span>
            <span className="text-gray-700 dark:text-gray-300">
              {freePlan.max_file_size || '7 MB per image'}
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-primary">✓</span>
            <span className="text-gray-700 dark:text-gray-300">
              {freePlan.formats || 'Formats: WebP, JPEG, PNG'}
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-primary">✓</span>
            <span className="text-gray-700 dark:text-gray-300">
              {freePlan.compression_time || '~5-7 seconds per batch'}
            </span>
          </li>
        </ul>

        <button
          disabled
          className="w-full rounded-lg bg-gray-200 py-3 font-semibold text-gray-600 cursor-not-allowed dark:bg-gray-700 dark:text-gray-400"
        >
          {freePlan.button || 'Using Now'}
        </button>
      </div>

      {/* Pro Card */}
      <div className="rounded-lg border-2 border-primary bg-gradient-to-br from-primary/5 to-transparent p-8 shadow-md dark:from-primary/10">
        <div className="mb-2 inline-block rounded-full bg-primary px-3 py-1 text-sm font-semibold text-white">
          Recomendado
        </div>
        <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
          {proPlan.name || 'Pro'}
        </h3>
        <p className="mb-6 text-gray-600 dark:text-gray-400">
          {proPlan.description || 'For power users'}
        </p>

        <ul className="mb-8 space-y-3">
          <li className="flex items-start">
            <span className="mr-3 text-primary">✓</span>
            <span className="text-gray-700 dark:text-gray-300">
              {proPlan.batches_per_day || '15 batches per day'}
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-primary">✓</span>
            <span className="text-gray-700 dark:text-gray-300">
              {proPlan.images_per_batch || '15 images per batch'}
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-primary">✓</span>
            <span className="text-gray-700 dark:text-gray-300">
              {proPlan.max_batches || '15 batches max per day'}
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-primary">✓</span>
            <span className="text-gray-700 dark:text-gray-300">
              {proPlan.max_file_size || '12 MB per image'}
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-primary">✓</span>
            <span className="text-gray-700 dark:text-gray-300">
              {proPlan.formats || 'Formats: WebP, JPEG, PNG'}
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-primary">✓</span>
            <span className="text-gray-700 dark:text-gray-300">
              {proPlan.compression_time || '~5-7 seconds per batch'}
            </span>
          </li>
        </ul>

        <button
          onClick={onSelectPro}
          className="w-full rounded-lg bg-primary py-3 font-semibold text-white transition-colors hover:bg-primary/90"
        >
          {proPlan.button || 'Register Free'}
        </button>
      </div>
    </div>
  );
}
```

**Step 2: Build and verify**

Run:
```bash
npm run build
```

Expected: Build succeeds.

**Step 3: Commit**

```bash
git add components/PricingCards.tsx
git commit -m "feat: create PricingCards component"
```

---

### Task 5: Create RegisterModal component

**Files:**
- Create: `components/RegisterModal.tsx`

**Step 1: Create RegisterModal**

Create `components/RegisterModal.tsx`:
```typescript
'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useTranslations } from '@/lib/i18n-context';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  context?: 'pricing' | 'image_limit' | 'session_limit';
}

export function RegisterModal({ isOpen, onClose, context }: RegisterModalProps) {
  const t = useTranslations();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [marketingConsent, setMarketingConsent] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Validation
    if (!email || !password || !confirmPassword) {
      setError('All fields are required');
      setIsLoading(false);
      return;
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters');
      setIsLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setIsLoading(false);
      return;
    }

    if (!marketingConsent) {
      setError('You must accept the terms and conditions');
      setIsLoading(false);
      return;
    }

    try {
      // Call registration API
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          password,
          marketingConsent
        })
      });

      if (!response.ok) {
        const data = await response.json();
        setError(data.message || 'Registration failed');
        setIsLoading(false);
        return;
      }

      // Sign in the user after registration
      await signIn('credentials', {
        email,
        password,
        redirect: true,
        callbackUrl: '/tool'
      });
    } catch (err) {
      setError('An error occurred during registration');
      setIsLoading(false);
    }
  };

  const getContextMessage = () => {
    if (context === 'image_limit') {
      return t('pricing.limit_reached.images_message') || 'Upgrade to Pro to compress up to 15 images per batch.';
    }
    if (context === 'session_limit') {
      return t('pricing.limit_reached.sessions_message') || "You've reached your 6 batches today.";
    }
    return '';
  };

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-40 bg-black bg-opacity-50"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-8 shadow-xl dark:bg-gray-900">
        <h2 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
          Regístrate para Pro
        </h2>

        {context && (
          <p className="mb-6 text-sm text-gray-600 dark:text-gray-400">
            {getContextMessage()}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="rounded-md bg-red-100 p-3 text-sm text-red-800 dark:bg-red-900 dark:text-red-200">
              {error}
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
              placeholder="your@email.com"
              disabled={isLoading}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Contraseña
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
              placeholder="••••••••"
              disabled={isLoading}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Confirmar Contraseña
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
              placeholder="••••••••"
              disabled={isLoading}
            />
          </div>

          <div className="flex items-start">
            <input
              type="checkbox"
              id="marketing"
              checked={marketingConsent}
              onChange={(e) => setMarketingConsent(e.target.checked)}
              className="mt-1 rounded"
              disabled={isLoading}
            />
            <label htmlFor="marketing" className="ml-2 text-sm text-gray-600 dark:text-gray-400">
              Acepto los términos y condiciones y deseo recibir emails de marketing
            </label>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              disabled={isLoading}
              className="flex-1 rounded-md bg-primary py-2 font-semibold text-white transition-colors hover:bg-primary/90 disabled:opacity-50"
            >
              {isLoading ? 'Registrando...' : 'Registrarse'}
            </button>
            <button
              type="button"
              onClick={onClose}
              disabled={isLoading}
              className="flex-1 rounded-md border border-gray-300 bg-white py-2 font-semibold text-gray-700 transition-colors hover:bg-gray-50 disabled:opacity-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
```

**Step 2: Build and verify**

Run:
```bash
npm run build
```

Expected: Build succeeds.

**Step 3: Commit**

```bash
git add components/RegisterModal.tsx
git commit -m "feat: create RegisterModal component with form"
```

---

## Phase 3: API Routes

### Task 6: Create registration API endpoint

**Files:**
- Create: `app/api/auth/register/route.ts`

**Step 1: Create register endpoint**

Create `app/api/auth/register/route.ts`:
```typescript
import { hash } from 'bcryptjs';
import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const { email, password, marketingConsent } = await request.json();

    // Validation
    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: 'Email and password are required' },
        { status: 400 }
      );
    }

    if (password.length < 8) {
      return NextResponse.json(
        { success: false, message: 'Password must be at least 8 characters' },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email }
    });

    if (existingUser) {
      return NextResponse.json(
        { success: false, message: 'Email already registered' },
        { status: 409 }
      );
    }

    // Hash password
    const hashedPassword = await hash(password, 12);

    // Create user with tier='pro'
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        tier: 'pro', // Auto-assign Pro tier
        emailConsent: marketingConsent || false
      }
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Registered successfully. You are now Pro.',
        user: {
          id: user.id,
          email: user.email,
          tier: user.tier
        }
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
```

**Step 2: Verify Prisma User model has tier and emailConsent**

Open `prisma/schema.prisma`, check User model includes:
```prisma
tier     String  @default("free")  // Should be "free", we set to "pro" on registration
emailConsent Boolean @default(false)
```

If missing, add them.

**Step 3: Install bcryptjs if needed**

Run:
```bash
npm install bcryptjs
npm install -D @types/bcryptjs
```

Expected: Packages installed.

**Step 4: Run build**

```bash
npm run build
```

Expected: Build succeeds.

**Step 5: Commit**

```bash
git add app/api/auth/register/route.ts
git commit -m "feat: add registration API endpoint"
```

---

### Task 7: Create user limits API endpoint

**Files:**
- Create: `app/api/user/limits/route.ts`

**Step 1: Create limits endpoint**

Create `app/api/user/limits/route.ts`:
```typescript
import { getServerSession } from 'next-auth';
import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession();

    if (!session?.user?.email) {
      return NextResponse.json(
        { success: false, message: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Get user
    const user = await prisma.user.findUnique({
      where: { email: session.user.email }
    });

    if (!user) {
      return NextResponse.json(
        { success: false, message: 'User not found' },
        { status: 404 }
      );
    }

    // Get today's usage
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const usage = await prisma.userUsage.findUnique({
      where: {
        userId_date: {
          userId: user.id,
          date: today
        }
      }
    });

    // Determine limits based on tier
    const limits = user.tier === 'pro'
      ? { batchesLimit: 15, imagesLimit: 15, maxFileSize: 12_000_000 }
      : { batchesLimit: 6, imagesLimit: 5, maxFileSize: 7_000_000 };

    const nextResetTime = new Date(today);
    nextResetTime.setDate(nextResetTime.getDate() + 1);

    return NextResponse.json(
      {
        success: true,
        data: {
          tier: user.tier,
          batchesUsedToday: usage?.sessionCount || 0,
          batchesLimit: limits.batchesLimit,
          imagesThisBatch: 0, // Will be tracked in frontend
          imagesPerBatchLimit: limits.imagesLimit,
          maxFileSize: limits.maxFileSize,
          nextResetTime: nextResetTime.toISOString()
        }
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Limits error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
```

**Step 2: Build and verify**

```bash
npm run build
```

Expected: Build succeeds.

**Step 3: Commit**

```bash
git add app/api/user/limits/route.ts
git commit -m "feat: add user limits API endpoint"
```

---

## Phase 4: Pages

### Task 8: Create /pricing page

**Files:**
- Create: `app/pricing/page.tsx`

**Step 1: Create pricing page**

Create `app/pricing/page.tsx`:
```typescript
'use client';

import { useState } from 'react';
import { useTranslations } from '@/lib/i18n-context';
import { PricingCards } from '@/components/PricingCards';
import { RegisterModal } from '@/components/RegisterModal';

export default function PricingPage() {
  const t = useTranslations();
  const [showModal, setShowModal] = useState(false);

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            {t('pricing.title') || 'Pricing Plans'}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
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
```

**Step 2: Build and verify**

```bash
npm run build
```

Expected: Build succeeds.

**Step 3: Test navigation**

Run:
```bash
npm run dev
```

Navigate to `http://localhost:3000/pricing` and verify:
- Header shows navigation
- Pricing cards render
- Click "Registrarse" opens modal

Press Ctrl+C to stop dev server.

**Step 4: Commit**

```bash
git add app/pricing/page.tsx
git commit -m "feat: create /pricing page with PricingCards"
```

---

### Task 9: Refactor /tool page (move from / to /tool)

**Files:**
- Create: `app/tool/page.tsx` (copy from `app/page.tsx`)
- Modify: `app/page.tsx` (redirect to /tool)

**Step 1: Create /tool/page.tsx**

Copy `app/page.tsx` to `app/tool/page.tsx` with minimal changes:

```bash
cp app/page.tsx app/tool/page.tsx
```

**Step 2: Update app/page.tsx to redirect**

Modify `app/page.tsx` to be a redirect:
```typescript
import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/tool');
}
```

**Step 3: Build and verify**

```bash
npm run build
```

Expected: Build succeeds.

**Step 4: Test navigation**

```bash
npm run dev
```

Visit `http://localhost:3000` and verify it redirects to `/tool`.
Visit `http://localhost:3000/tool` directly.

Press Ctrl+C.

**Step 5: Commit**

```bash
git add app/tool/page.tsx app/page.tsx
git commit -m "feat: move compressor to /tool, redirect / to /tool"
```

---

## Phase 5: Limit Tracking

### Task 10: Add session limit tracking utilities

**Files:**
- Create: `lib/utils/session-tracker.ts`

**Step 1: Create session tracker utility**

Create `lib/utils/session-tracker.ts`:
```typescript
// Utility for tracking anonymous user sessions (batches) using cookies and localStorage

const SESSION_COUNT_COOKIE = '_aurora_session_count';
const SESSION_RESET_KEY = '_aurora_session_reset';
const IMAGE_COUNT_KEY = '_aurora_image_count';

export interface SessionLimits {
  batchesUsed: number;
  batchesLimit: number;
  imagesInBatch: number;
  imagesPerBatchLimit: number;
  maxFileSize: number;
  nextResetTime: Date;
}

// FREE TIER LIMITS
const FREE_BATCHES_LIMIT = 6;
const FREE_IMAGES_LIMIT = 5;
const FREE_MAX_FILE_SIZE = 7_000_000; // 7MB
const RESET_INTERVAL_HOURS = 23;

export function getSessionLimits(): SessionLimits {
  // Get reset timestamp from localStorage
  const resetTimestamp = localStorage.getItem(SESSION_RESET_KEY);
  const now = Date.now();

  let batchesUsed = 0;
  let nextResetTime = new Date(now + RESET_INTERVAL_HOURS * 60 * 60 * 1000);

  if (resetTimestamp) {
    const resetTime = parseInt(resetTimestamp, 10);
    if (now > resetTime) {
      // Reset period passed, clear counters
      localStorage.removeItem(SESSION_RESET_KEY);
      localStorage.removeItem(SESSION_COUNT_COOKIE);
    } else {
      // Still within reset period
      const batchCountStr = localStorage.getItem(SESSION_COUNT_COOKIE);
      batchesUsed = batchCountStr ? parseInt(batchCountStr, 10) : 0;
      nextResetTime = new Date(resetTime);
    }
  }

  const imagesInBatch = localStorage.getItem(IMAGE_COUNT_KEY)
    ? parseInt(localStorage.getItem(IMAGE_COUNT_KEY)!, 10)
    : 0;

  return {
    batchesUsed,
    batchesLimit: FREE_BATCHES_LIMIT,
    imagesInBatch,
    imagesPerBatchLimit: FREE_IMAGES_LIMIT,
    maxFileSize: FREE_MAX_FILE_SIZE,
    nextResetTime
  };
}

export function incrementSessionCount(): void {
  const limits = getSessionLimits();
  const newCount = limits.batchesUsed + 1;

  localStorage.setItem(SESSION_COUNT_COOKIE, newCount.toString());

  // Set reset time if not set
  if (!localStorage.getItem(SESSION_RESET_KEY)) {
    const resetTime = Date.now() + RESET_INTERVAL_HOURS * 60 * 60 * 1000;
    localStorage.setItem(SESSION_RESET_KEY, resetTime.toString());
  }

  // Clear image count for new batch
  localStorage.removeItem(IMAGE_COUNT_KEY);
}

export function incrementImageCount(): void {
  const current = localStorage.getItem(IMAGE_COUNT_KEY) || '0';
  const newCount = parseInt(current, 10) + 1;
  localStorage.setItem(IMAGE_COUNT_KEY, newCount.toString());
}

export function clearSessionData(): void {
  localStorage.removeItem(SESSION_COUNT_COOKIE);
  localStorage.removeItem(SESSION_RESET_KEY);
  localStorage.removeItem(IMAGE_COUNT_KEY);
}
```

**Step 2: Build and verify**

```bash
npm run build
```

Expected: Build succeeds.

**Step 3: Commit**

```bash
git add lib/utils/session-tracker.ts
git commit -m "feat: add anonymous session tracking utilities"
```

---

### Task 11: Add limit validation in /tool/page.tsx

**Files:**
- Modify: `app/tool/page.tsx` (add limit checks)
- Modify: `components/ImageUploader.tsx` (pass limit info)

**Step 1: Import tracking utilities and add state**

In `app/tool/page.tsx`, add imports at the top:
```typescript
import { getSessionLimits, incrementSessionCount, incrementImageCount, clearSessionData } from '@/lib/utils/session-tracker';
```

Add state for modal:
```typescript
const [showRegisterModal, setShowRegisterModal] = useState(false);
const [registerModalContext, setRegisterModalContext] = useState<'image_limit' | 'session_limit' | undefined>();
const [sessionLimits, setSessionLimits] = useState<ReturnType<typeof getSessionLimits> | null>(null);
```

Add useEffect to check limits on mount:
```typescript
useEffect(() => {
  if (!session?.user?.id) {
    // Anonymous user - check localStorage limits
    const limits = getSessionLimits();
    setSessionLimits(limits);
  }
}, [session?.user?.id]);
```

**Step 2: Add check before upload**

In `handleFilesSelected`, add validation:
```typescript
const handleFilesSelected = (newFiles: File[]) => {
  // Check if user is authenticated
  if (!session?.user?.id) {
    // Anonymous user - check limits
    const limits = getSessionLimits();
    const totalImages = (files.length || 0) + newFiles.length;

    if (totalImages > limits.imagesPerBatchLimit) {
      setRegisterModalContext('image_limit');
      setShowRegisterModal(true);
      return;
    }

    if (limits.batchesUsed >= limits.batchesLimit) {
      setRegisterModalContext('session_limit');
      setShowRegisterModal(true);
      return;
    }
  }

  // If already have files, add to them; if not, move to settings
  if (files.length > 0) {
    setFiles([...files, ...newFiles]);
  } else {
    setFiles(newFiles);
    setCurrentView('settings');
  }
};
```

**Step 3: Track compression and clear on completion**

In the compression handler (when user clicks process), add:
```typescript
// After successful compression start:
if (!session?.user?.id) {
  incrementSessionCount();
}
```

And when download/complete, clear if needed:
```typescript
// On download complete:
if (!session?.user?.id) {
  // Session data can be cleared if user logs in
  // But keep it for now to track usage
}
```

**Step 4: Add RegisterModal to JSX**

Add at the end of the return statement before closing:
```typescript
<RegisterModal
  isOpen={showRegisterModal}
  onClose={() => {
    setShowRegisterModal(false);
    setRegisterModalContext(undefined);
  }}
  context={registerModalContext}
/>
```

**Step 5: Import RegisterModal**

Add import at top:
```typescript
import { RegisterModal } from '@/components/RegisterModal';
```

**Step 6: Build and verify**

```bash
npm run build
```

Expected: Build succeeds.

**Step 7: Commit**

```bash
git add app/tool/page.tsx
git commit -m "feat: add limit validation and RegisterModal triggers"
```

---

## Phase 6: Session Management

### Task 12: Clear anonymous session on successful registration

**Files:**
- Modify: `components/RegisterModal.tsx` (add cleanup on success)

**Step 1: Update RegisterModal to clear session**

In `components/RegisterModal.tsx`, update the signIn call:
```typescript
// After successful registration, clear anonymous session
clearSessionData();

// Sign in the user
await signIn('credentials', {
  email,
  password,
  redirect: true,
  callbackUrl: '/tool'
});
```

Add import:
```typescript
import { clearSessionData } from '@/lib/utils/session-tracker';
```

**Step 2: Build and verify**

```bash
npm run build
```

Expected: Build succeeds.

**Step 3: Commit**

```bash
git add components/RegisterModal.tsx
git commit -m "feat: clear anonymous session data on successful registration"
```

---

## Phase 7: Testing & Polish

### Task 13: Manual test workflow

**Files:** None

**Step 1: Start dev server**

```bash
npm run dev
```

**Step 2: Test anonymous user flow**

1. Visit `http://localhost:3000` (redirects to `/tool`)
2. Try to upload 6 images → should show RegisterModal with "image limit" context
3. Close modal
4. Visit `/pricing`
5. Click "Registrarse" on Pro card → RegisterModal with "pricing" context
6. Register with `test@example.com` / `password123`
7. Verify redirects to `/tool`
8. Verify header shows navigation

**Step 3: Test authenticated user flow**

1. Upload 15 images (should allow it)
2. Create multiple batches
3. Verify no limit warnings

**Step 4: Test responsive design**

1. Open DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Test on mobile, tablet
4. Verify layout responds

**Step 5: Test dark mode**

1. Open browser DevTools
2. In Console: `document.documentElement.classList.add('dark')`
3. Verify dark mode colors applied

**Step 6: Commit**

```bash
git add -A
git commit -m "test: verify all flows working (anonymous, authenticated, responsive)"
```

---

## Phase 8: Final Build & Verification

### Task 14: Full build validation

**Files:** None

**Step 1: Stop dev server**

Press Ctrl+C

**Step 2: Run full build**

```bash
npm run build
```

Expected: Build succeeds with no TypeScript errors.

**Step 3: Run linter**

```bash
npm run lint
```

Expected: No errors (warnings acceptable).

**Step 4: Start production server to test**

```bash
npm start
```

Visit `http://localhost:3000` and `http://localhost:3000/pricing` and verify they work.

Press Ctrl+C.

**Step 5: Commit**

```bash
git add -A
git commit -m "feat: complete Pro tier implementation with pricing page and registration"
```

---

## Summary

This plan implements:
- ✅ Navigation header with "Herramienta" / "Pricing" links
- ✅ `/pricing` page with Free vs Pro comparison cards
- ✅ RegisterModal triggered from pricing or limit violations
- ✅ Registration API (`/api/auth/register`)
- ✅ Limits API (`/api/user/limits`)
- ✅ Session tracking for anonymous users (localStorage + cookie)
- ✅ User tier assignment (Pro on registration)
- ✅ Limit enforcement (5 images free, 6 batches/day free)
- ✅ Responsive design with dark mode

**Total Tasks:** 14
**Estimated Time:** 3-4 hours
**Architecture:** Client-side limit tracking for anon users, server-side for authenticated

