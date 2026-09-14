import type { Metadata } from 'next';
import '@/app/globals.css';
import '@/app/doors.css';
import '@/app/loyalty.css';
import '@/app/layout-fixes.css';
import '@/app/charte.css';
import { indexable, origin } from '@/lib/seo';
import { copy } from '@/lib/content';

export const metadata: Metadata = {
  metadataBase: new URL(origin),
  icons: { icon: '/favicon.svg' },
  title: { default: copy.fr.meta.home[0], template: '%s | Hilarious' },
  description: copy.fr.meta.home[1],
  robots: { index: indexable, follow: indexable },
};

export default async function RootLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale?: string }> }) {
  const { locale } = await params;
  return (
    <html lang={locale || 'fr'}>
      <head>
        <link rel="stylesheet" href="/fonts/fonts.css" />
        <link rel="preload" href="/fonts/font-4.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/font-0.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/font-5.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
