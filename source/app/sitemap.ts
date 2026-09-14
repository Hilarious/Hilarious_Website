import type { MetadataRoute } from 'next';
import { indexable, origin, pagePaths, url } from '@/lib/seo';
import { locales } from '@/lib/content';
export const dynamic = 'force-static';

// Une entrée par page et par langue, avec ses équivalences (hreflang).
// Pas de date de modification inventée.
export default function sitemap(): MetadataRoute.Sitemap {
  if (!indexable) return [];
  return locales.flatMap((l) =>
    pagePaths(l).map((p) => ({
      url: url(l, p),
      alternates: { languages: Object.fromEntries([...locales.map((x) => [x, url(x, p)]), ['x-default', url('fr', p)]]) },
    })),
  );
}
