import type { Metadata } from 'next';
import { SitePage } from '@/app/site';
import { locales } from '@/lib/content';
import { indexable, pageMeta, url, ogLocale } from '@/lib/seo';

// La racine `/` sert la version française et déclare `/fr/` comme adresse canonique,
// pour que les moteurs ne voient pas deux pages identiques. Le choix de la langue
// de la racine reste une décision d'Audry, voir le cadrage.
const m = pageMeta('fr', '');
export const metadata: Metadata = {
  title: { absolute: m.title },
  description: m.description,
  robots: { index: indexable, follow: indexable },
  alternates: { canonical: url('fr'), languages: Object.fromEntries([...locales.map((x) => [x, url(x)]), ['x-default', url('fr')]]) },
  openGraph: { title: m.title, description: m.description, type: 'website', locale: ogLocale.fr, url: url('fr'), siteName: 'Hilarious', images: [{ url: m.image, width: 1200, height: 630, alt: m.title }] },
  twitter: { card: 'summary_large_image', title: m.title, description: m.description, images: [m.image] },
};

export default function Page() {
  return <SitePage l="fr" />;
}
