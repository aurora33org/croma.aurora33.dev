import Link from "next/link";
import "./globals.css";

// Global 404 — rendered for paths outside any [locale] segment.
// There is no root layout, so this must provide its own <html>/<body>.
export default function NotFound() {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="antialiased">
        <main className="min-h-screen flex flex-col items-center justify-center gap-6 px-6 text-center">
          <h1 className="text-5xl font-bold">404</h1>
          <p className="text-lg opacity-70">
            Página no encontrada · Page not found
          </p>
          <Link
            href="/es"
            className="px-6 py-3 rounded-lg bg-black text-white dark:bg-white dark:text-black font-medium"
          >
            Ir a Croma
          </Link>
        </main>
      </body>
    </html>
  );
}
