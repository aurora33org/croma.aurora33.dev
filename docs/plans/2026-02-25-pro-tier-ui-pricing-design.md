# Design: Pro Tier UI & Pricing Page

**Date**: 2026-02-25
**Status**: Approved
**Approach**: Enfoque 1 - Two separate pages with navigation in header

---

## Overview

Implement a two-page navigation system:
- `/tool` - Image compressor (refactored from current `/`)
- `/pricing` - Pricing tiers comparison (new)

Add discrete registration modal triggered contextually (pricing selection, image limit, session limit). Implement tier-based limits and automatic Pro assignment for registered users.

---

## Architecture

### File Structure

```
app/
├── tool/
│   └── page.tsx              # Image compressor (from app/page.tsx)
├── pricing/
│   └── page.tsx              # Pricing comparison page
├── layout.tsx                # Root layout (Header + Footer)
└── api/
    ├── jobs/                 # Existing (no changes)
    ├── user/
    │   └── limits/route.ts   # GET user's current limits
    └── auth/
        └── register/route.ts # POST register new user

components/
├── Header.tsx                # NEW: Navigation "Herramienta" / "Pricing"
├── PricingCards.tsx          # NEW: Free vs Pro tarjetas lado-a-lado
├── RegisterModal.tsx         # NEW: Registration modal
└── [existing components]     # No changes
```

---

## Features

### 1. Pricing Page (`/pricing`)

**Layout**: Header + 2-column pricing cards + Footer

**Each card displays**:
- Tier name (FREE / PRO)
- Batches per day (lotes al día): Free=5, Pro=15
- Images per batch (imágenes por lote): Free=5, Pro=15
- Max batches daily (lotes máx/día): Free=6, Pro=15
- Max file size (tamaño máximo): Free=7MB, Pro=12MB
- Output formats: WebP, JPEG, PNG
- Compression time estimate (~5-7 sec/batch)
- Action button:
  - Free: "Ya usándolo" (disabled) or "Usar gratis"
  - Pro: "Registrarse" (opens RegisterModal)

### 2. Registration Modal

**Trigger contexts**:
1. User clicks "Registrarse" on Pro card in pricing page
2. User attempts to upload image #6+ (exceeds Free limit of 5)
3. User exhausts 6 sessions in 23h period (Free daily limit)

**Form fields**:
- Email (required, validated)
- Password (required, 8+ chars)
- Confirm Password (required, must match)
- Checkbox: "Acepto términos y condiciones y emails de marketing"
- Buttons: [REGISTRARSE] [CANCELAR]

**On successful registration**:
- User created in DB with `tier: 'pro'` (automatic)
- NextAuth session established
- Modal closes
- User redirected to `/tool` with Pro limits active
- Anonymous session data cleared

### 3. Tier Limits

**Free Tier**:
- 5 images per batch
- 6 batches max per 23h period
- 7MB max per image
- Rastreado: Cookie + localStorage (anonymous users)

**Pro Tier**:
- 15 images per batch
- 15 batches max per 23h period
- 12MB max per image
- Rastreado: Database (authenticated users)

### 4. Session & Limit Tracking

**Anonymous users (Free)**:
- Cookie: `_aurora_session_count` → batch count in 23h window
- localStorage: `_aurora_session_reset` → timestamp of next reset (23h after first batch)
- localStorage: `_aurora_image_count` → images in current batch

**Authenticated users (Pro)**:
- Database table: `user_usage`
  - Columns: `userId`, `date`, `sessionCount`, `imageCount`, `dailyReset`
  - Indexed on `userId` + `date` for fast queries

**Validation flow**:
1. Before upload → check current limits
2. If image #6 and user is anonymous → show RegisterModal
3. If batch #7 and user is anonymous → show RegisterModal with contextual message
4. If Pro → allow

### 5. Bug Fixes

- ✅ Registered users are automatically `tier: 'pro'` (not 'free')
- ✅ Tier assignment happens on registration, not later
- ✅ Session data cleared after registration to prevent mix-up

---

## Data Model

### `user_usage` table (Prisma)

```prisma
model UserUsage {
  id            String   @id @default(cuid())
  userId        String
  date          DateTime @default(now())
  sessionCount  Int      @default(0)
  imageCount    Int      @default(0)
  dailyReset    DateTime

  user          User     @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@unique([userId, date])
  @@index([userId])
}
```

---

## API Endpoints

### `POST /api/auth/register`

**Request**:
```json
{
  "email": "user@example.com",
  "password": "securepass123",
  "marketingConsent": true
}
```

**Response** (201):
```json
{
  "success": true,
  "message": "Registered successfully. You are now Pro.",
  "user": { "id": "...", "email": "...", "tier": "pro" }
}
```

**Error cases**:
- 400: Invalid email or weak password
- 409: Email already exists
- 500: Database error

### `GET /api/user/limits`

**Query params**: `userId` (optional, from session)

**Response**:
```json
{
  "tier": "pro",
  "batchesUsedToday": 3,
  "batchesLimit": 15,
  "imagesThisBatch": 2,
  "imagesPerBatchLimit": 15,
  "maxFileSize": 12_000_000,
  "nextResetTime": "2026-02-26T14:30:00Z"
}
```

---

## Frontend Components

### Header.tsx

- Logo (left)
- Navigation links (center): "Herramienta" → `/tool`, "Pricing" → `/pricing`
- Auth status (right): Session avatar or login link
- Responsive: Mobile menu for small screens

### PricingCards.tsx

- Two-column grid (responsive to 1-column on mobile)
- Each card: tier name, 6 features, action button
- Styling: Tailwind (dark mode support)

### RegisterModal.tsx

- Overlay with centered modal
- Form with validation
- Error messages
- Loading state during submission
- Close on cancel or outside click (except during submission)

### Tool Page (`/tool/page.tsx`)

- Refactored from current `/app/page.tsx`
- Added: Limit indicator in UI
- Added: Check before upload for image count
- Added: Check after each batch for session count
- Triggers RegisterModal contextually

---

## User Flow

### Anonymous → Pricing Page
```
Visit /pricing
  ↓
See Free (5 img/batch, 6 batches/day) vs Pro (15 img/batch, 15 batches/day)
  ↓
Click "Registrarse" on Pro
  ↓
RegisterModal opens
  ↓
Fill form, accept terms
  ↓
POST /api/auth/register
  ↓
User created with tier='pro', session established
  ↓
Redirected to /tool with Pro limits
```

### Anonymous → Tool Page (exceeds limit)
```
On /tool, try to upload 6th image
  ↓
Frontend checks: imageCount=6, limit=5 (Free)
  ↓
RegisterModal opens with message:
  "Upgrade to Pro to upload up to 15 images per batch"
  ↓
User registers OR cancels
```

### Authenticated User
```
Visit /tool or /pricing
  ↓
Auth session exists, tier='pro'
  ↓
No limit warnings
  ↓
Can upload 15 images, 15 batches per day
```

---

## Testing Checklist

- [ ] Navigation works between /tool and /pricing
- [ ] Pricing cards display correct info
- [ ] RegisterModal opens from pricing page
- [ ] RegisterModal opens when exceeding image limit
- [ ] RegisterModal opens when exceeding session limit
- [ ] Form validation (email, password, confirmation)
- [ ] Registration creates user with tier='pro'
- [ ] Session established after registration
- [ ] Anonymous session data cleared
- [ ] Limits enforced correctly for Free tier
- [ ] Limits enforced correctly for Pro tier
- [ ] 23h timer resets correctly
- [ ] Responsive design on mobile/tablet
- [ ] Dark mode styling applied

---

## Notes

- i18n: All strings in `i18n/locales/{en,es}/pricing.json` (new file)
- Auth: Existing NextAuth setup reused
- Database: Prisma migrations handled automatically on startup (existing)
- No external dependencies added
