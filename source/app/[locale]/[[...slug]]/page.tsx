import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SitePage } from '@/app/site';
import { locales, type Locale } from '@/lib/content';
import { indexable, pageMeta, pagePaths, url, ogLocale } from '@/lib/seo';

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((locale) => pagePaths(locale).map((p) => ({ locale, slug: p ? p.split('/') : [] })));
}

type Props = { params: Promise<{ locale: string; slug?: string[] }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug = [] } = await params;
  const l = locale as Locale;
  if (!locales.includes(l)) return {};
  const path = slug.join('/');
  const m = pageMeta(l, path);
  return {
    title: m.absolute ? { absolute: m.title } : m.title,
    description: m.description,
    robots: { index: indexable, follow: indexable },
    alternates: {
      canonical: url(l, path),
      languages: Object.fromEntries([...locales.map((x) => [x, url(x, path)]), ['x-default', url('fr', path)]]),
    },
    openGraph: { title: m.title, description: m.description, type: 'website', locale: ogLocale[l], url: url(l, path), siteName: 'Hilarious', images: [{ url: m.image, width: 1200, height: 630, alt: m.title }] },
    twitter: { card: 'summary_large_image', title: m.title, description: m.description, images: [m.image] },
  };
}

export default async function Page({ params }: Props) {
  const { locale, slug = [] } = await params;
  const l = locale as Locale;
  const path = slug.join('/');
  if (!locales.includes(l) || !pagePaths(l).includes(path)) notFound();
  return <SitePage l={l} path={path} />;
}
