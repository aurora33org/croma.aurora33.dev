/**
 * Renders an inline script that runs before hydration (e.g. to apply the theme
 * and avoid a flash), without the React 19 "script tag while rendering" warning.
 *
 * On the server the script type is executable JS; on the client it's inert
 * (text/plain) so React doesn't try to re-run it or warn. Per Next.js docs:
 * https://nextjs.org/docs/app/guides/preventing-flash-before-hydration
 */
export function InlineScript({ html }: { html: string }) {
  return (
    <script
      type={typeof window === 'undefined' ? 'text/javascript' : 'text/plain'}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
