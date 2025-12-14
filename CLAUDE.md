# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## Project Overview

**Aurora Image Compressor** is a Next.js-based web application for bulk image compression and format conversion. Currently migrated from Express.js to Next.js 16 with TypeScript, featuring:

- Bulk image processing (up to 20 images)
- Format conversion (WebP, JPEG, PNG)
- Optional image resizing with aspect ratio preservation
- Real-time progress tracking
- Drag-and-drop upload interface
- Light mode as default with dark mode support

**Tech Stack**: Next.js 16, React 19, TypeScript, Sharp (image processing), Tailwind CSS v3, node-cron (cleanup scheduler)

---

## Development Commands

### Essential Commands

```bash
npm run dev          # Start development server (http://localhost:3000)
npm run build        # Build production bundle
npm start            # Start production server
npm run lint         # Run ESLint (no auto-fix)
```

### Build & Validation

```bash
npm run build        # Next.js build - validates TypeScript and builds app
npm run lint         # ESLint check
```

The build process performs TypeScript type checking. Always run `npm run build` before committing to catch type errors.

---

## Project Structure

```
redux/
├── app/                          # Next.js App Router
│   ├── api/                      # API routes
│   │   ├── jobs/
│   │   │   ├── route.ts          # Create job
│   │   │   ├── [jobId]/
│   │   │   │   ├── upload/route.ts
│   │   │   │   ├── process/route.ts
│   │   │   │   ├── status/route.ts
│   │   │   │   └── download/route.ts
│   │   └── health/route.ts       # Health check
│   ├── layout.tsx                # Root layout with HTML setup
│   ├── page.tsx                  # Main UI page (SSC with state)
│   └── globals.css               # Global styles
│
├── components/                   # React components
│   ├── Hero.tsx                  # Marketing section
│   ├── Navigation.tsx            # Top navigation bar
│   ├── ImageUploader.tsx         # Drag-drop upload zone
│   ├── CompressionSettings.tsx    # Format, quality, resize controls
│   ├── ProcessingView.tsx        # Progress bar & tips display
│   ├── DownloadView.tsx          # Results & stats display
│   ├── FormatGuide.tsx           # Format comparison cards
│   ├── FAQ.tsx                   # FAQ section
│   ├── ErrorView.tsx             # Error state display
│   └── Footer.tsx                # Footer
│
├── lib/                          # Utilities & services
│   ├── services/
│   │   ├── image-processor.ts    # Sharp compression logic
│   │   ├── job-manager.ts        # In-memory job state
│   │   ├── storage-service.ts    # File system operations
│   │   ├── zip-service.ts        # ZIP archive creation
│   │   └── cleanup-service.ts    # Scheduled cleanup (cron)
│   ├── middleware/
│   │   └── multer-handler.ts     # Multer file upload config
│   ├── utils/
│   │   ├── logger.ts             # Color-coded logging
│   │   └── errors.ts             # Custom error classes
│   └── config.ts                 # Environment config
│
├── public/                       # Static assets
│   ├── images/
│   └── fonts/
│
├── package.json
├── tailwind.config.js            # Tailwind config (light mode default, dark mode support)
├── tsconfig.json
├── ARCHITECTURE.md               # Detailed architecture documentation
├── README.md                     # User documentation
└── CLAUDE.md                     # This file
```

---

## Architecture & Key Systems

### Frontend State Management (app/page.tsx)

The main page uses React hooks for local state:

```typescript
state = {
  jobId: string | null
  files: File[]
  settings: {
    format: 'webp' | 'jpeg' | 'png'
    quality: number (1-100)
    resize: { width?: number, height?: number } | null
  }
  step: 'upload' | 'settings' | 'processing' | 'download' | 'error'
  errorMessage: string | null
}
```

The page coordinates the workflow and passes state/handlers down to components.

### API Workflow (Job Lifecycle)

```
1. POST /api/jobs
   ↓ Create in-memory job with UUID
2. POST /api/jobs/{jobId}/upload
   ↓ Multer stores files in /tmp/jobs/{jobId}/uploads/
3. POST /api/jobs/{jobId}/process
   ↓ setImmediate() starts async processing (immediate response)
   ↓ Files compressed to /tmp/jobs/{jobId}/processed/
4. GET /api/jobs/{jobId}/status
   ↓ Client polls every 1000ms for progress
5. GET /api/jobs/{jobId}/download
   ↓ Express streams ZIP file
6. Auto-cleanup after FILE_TTL (default 1 hour)
```

### Service Layer (lib/services/)

**JobManager** (job-manager.ts):
- In-memory state with Map<jobId, jobState>
- Tracks: files, settings, progress, status
- Lost on server restart (ephemeral)

**ImageProcessor** (image-processor.ts):
- Uses Sharp for compression (native, ultra-fast)
- Supports WebP, JPEG, PNG with different quality settings
- Optional resize with aspect ratio preservation

**StorageService** (storage-service.ts):
- Creates `/tmp/jobs/{jobId}/` directory structure
- Manages: uploads/, processed/, metadata.json
- Handles cleanup and file operations

**ZipService** (zip-service.ts):
- Uses Archiver for ZIP creation with max compression
- Flat structure (no parent folder in ZIP)

**CleanupService** (cleanup-service.ts):
- node-cron scheduler runs every CLEANUP_INTERVAL (default 15 minutes)
- Deletes jobs older than FILE_TTL (default 3600 seconds)
- Cleans both filesystem and in-memory state

### Configuration (lib/config.ts)

Environment variables:

```
SERVER:
  PORT (default: 3000)
  NODE_ENV (development/production)

UPLOAD LIMITS:
  MAX_FILE_SIZE (default: 10MB = 10485760)
  MAX_FILES (default: 20 per job)

CLEANUP:
  CLEANUP_INTERVAL (default: 15 minutes)
  FILE_TTL (default: 3600 seconds = 1 hour)
```

### Styling & Theming

**Tailwind CSS v3** with:
- Light mode as default (`darkMode: 'class'`)
- Dark mode enabled via `dark:` utility classes
- Custom colors for light & dark modes in `tailwind.config.js`
- Custom fonts: Syne, Kangge
- Primary color: #F84733 (orange/red)

---

## Important Development Notes

### File Organization

- **API Routes** should be in `app/api/` following Next.js conventions
- **Components** should be in `components/` and imported into `app/page.tsx`
- **Business logic** belongs in `lib/services/`
- **Configuration** centralized in `lib/config.ts`

### Common Tasks

**Adding a new API endpoint**:
1. Create route file in `app/api/path/to/route.ts`
2. Export handler functions (GET, POST, etc.)
3. Import services from `lib/services/`

**Adding a new feature to UI**:
1. Create component in `components/YourComponent.tsx`
2. Import in `app/page.tsx`
3. Add state handling in page component if needed
4. Style with Tailwind (respect dark mode with `dark:` prefix)

**Modifying image processing**:
1. Update Sharp options in `lib/services/image-processor.ts`
2. Remember: quality 1-100, effort for WebP affects speed

### TypeScript

- Strict mode enabled in `tsconfig.json`
- All files should have proper type annotations
- Use `// @ts-expect-error` sparingly and comment why

### Error Handling

Custom error classes in `lib/utils/errors.ts`:
- `AppError` (HTTP 500)
- `ValidationError` (HTTP 400)
- `NotFoundError` (HTTP 404)
- `ProcessingError` (HTTP 500)

Throw these in route handlers, caught by Next.js error handling.

### Logging

All logs use `logger` utility (lib/utils/logger.ts) with colors:
- `logger.info()` - Cyan
- `logger.success()` - Green
- `logger.warn()` - Yellow
- `logger.error()` - Red
- `logger.debug()` - Magenta (dev only)

### Git Workflow

Current branch: `Fix-RefactorPages`

Recent refactoring focused on:
- Downgrade to Tailwind CSS v3 (from v4)
- Light mode as default, proper dark mode support
- Color palette updates
- Side-by-side hero layout

---

## Limitations & Future Work

### Current Limitations

- In-memory job state (lost on restart, not horizontally scalable)
- `/tmp` storage is ephemeral (no persistence)
- Sequential image processing (no parallelization)
- No authentication/rate limiting
- No database integration

### Future Roadmap (See future-implementation.md)

- PostgreSQL integration with Prisma
- NextAuth.js authentication
- Stripe payment integration
- Tier-based rate limiting (Free/Pro/Enterprise)
- S3/Uploadthing storage backend
- API access for authenticated users

---

## Testing & Debugging

### Development Mode

```bash
npm run dev
# Opens http://localhost:3000
# Hot reload enabled
# Full TypeScript checking
```

### Build Testing

```bash
npm run build    # Tests TypeScript compilation
npm start        # Test production build locally
```

### Common Issues

**Port 3000 already in use**: Edit `PORT` env var
**Sharp installation fails**: Install build tools (libvips-dev on Linux)
**TypeScript errors**: Run `npm run build` to see full errors
**Jobs disappearing**: Check FILE_TTL in .env (cleanup interval deletes old jobs)

---

## Performance Notes

- Single image (12MB): ~5-7 seconds
- Batch of 20 images: ~30-60 seconds total
- Memory usage: ~512MB+ for large batches
- Storage: ~1.2GB for 600MB of input images (worst case)

Optimize by adjusting Sharp quality settings in `image-processor.ts` if needed.

---

## Useful References

- [Next.js 16 Docs](https://nextjs.org/docs)
- [Sharp Documentation](https://sharp.pixelplumbing.com/)
- [React 19 Docs](https://react.dev)
- [Tailwind CSS 3 Docs](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
