// Référencement : métadonnées par page, données structurées (schema.org), inventaire d'URL.
// Indexation activée uniquement quand SITE_INDEXABLE=true est passé à la compilation,
// et seulement sur le domaine final.
import projects from './cases.json';
import { copy, locales, offerIds, type Locale, type OfferId } from './content';
import { loyalty } from './loyalty';

export const indexable = process.env.SITE_INDEXABLE === 'true';
export const origin = 'https://hilarious.be';

export const contact = {
  email: 'curious@hilarious.be',
  phone: '+32478281333',
  phoneDisplay: '+32 (0) 478 28 13 33',
  street: 'Rue Jules Cockx 10',
  postalCode: '1160',
  city: { fr: 'Bruxelles', en: 'Brussels', nl: 'Brussel' } as Record<Locale, string>,
  country: 'BE',
};

export const social = [
  ['LinkedIn', 'https://www.linkedin.com/company/hilarious/'],
  ['Instagram', 'https://www.instagram.com/hilariousagency/'],
  ['Facebook', 'https://www.facebook.com/hilarious.agency/'],
  ['Behance', 'https://www.behance.net/hilarious-agency'],
] as const;

type Project = { client: string; title: string; tags: string; paragraphs: string[]; image: string; source: string; summary?: string; sector?: string; services?: string[] };
const cases = projects as Record<Locale, Record<string, Project>>;

export const url = (l: Locale, p = '') => `${origin}/${l}/${p}${p ? '/' : ''}`;
export const pagePaths = (l: Locale) => ['', 'case', 'services', 'about', 'contact', 'loyalty', ...Object.keys(cases[l]).map((s) => 'case/' + s)];
export const paths = locales.flatMap((l) => pagePaths(l).map((p) => `/${l}/${p}${p ? '/' : ''}`));

const langTag: Record<Locale, string> = { fr: 'fr-BE', en: 'en-GB', nl: 'nl-BE' };
const ogLocale: Record<Locale, string> = { fr: 'fr_BE', en: 'en_GB', nl: 'nl_BE' };
export { langTag, ogLocale };

/** Titre, description et image de partage de chaque page. */
export function pageMeta(l: Locale, path: string): { title: string; description: string; image: string; absolute: boolean } {
  const t = copy[l];
  const image = `${origin}/og/default-${l}.jpg`;
  if (!path) return { title: t.meta.home[0], description: t.meta.home[1], image, absolute: true };
  if (path === 'services') return { title: t.meta.services[0], description: t.meta.services[1], image, absolute: false };
  if (path === 'case') return { title: t.meta.cases[0], description: t.meta.cases[1], image, absolute: false };
  if (path === 'about') return { title: t.meta.about[0], description: t.meta.about[1], image, absolute: false };
  if (path === 'contact') return { title: t.meta.contact[0], description: t.meta.contact[1], image, absolute: false };
  if (path === 'loyalty') return { title: loyalty[l].title, description: loyalty[l].intro, image, absolute: false };
  const slug = path.startsWith('case/') ? path.slice(5) : '';
  const p = cases[l][slug];
  if (p) return { title: `${p.client} : ${p.title}`, description: p.summary || p.paragraphs[0], image: `${origin}/og/case-${slug}.jpg`, absolute: false };
  return { title: 'Hilarious', description: t.intro, image, absolute: false };
}

/** L'agence, telle que les moteurs et les assistants IA doivent la comprendre. */
export function organization(l: Locale) {
  const t = copy[l];
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'ProfessionalService'],
    '@id': origin + '/#agency',
    name: 'Hilarious',
    alternateName: 'Hilarious Agency',
    url: origin,
    logo: origin + '/logo-transparent.png',
    image: `${origin}/og/default-${l}.jpg`,
    description: t.missionShort,
    slogan: t.promise.title.replace(/\n/g, ' '),
    email: contact.email,
    telephone: contact.phone,
    foundingDate: '2012',
    founder: { '@type': 'Person', name: 'Audry Van Essche', jobTitle: 'CEO' },
    address: { '@type': 'PostalAddress', streetAddress: contact.street, postalCode: contact.postalCode, addressLocality: contact.city[l], addressRegion: 'Brussels-Capital', addressCountry: contact.country },
    areaServed: ['Belgium', 'Benelux', 'Europe'],
    knowsLanguage: ['fr', 'nl', 'en'],
    sameAs: social.map(([, u]) => u),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: t.nav[1],
      itemListElement: t.offers.map((o) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: o.title, description: o.short + ' ' + o.text, url: url(l, 'services') + '#' + o.id, provider: { '@id': origin + '/#agency' } } })),
    },
  };
}

export function website(l: Locale) {
  return { '@context': 'https://schema.org', '@type': 'WebSite', '@id': origin + '/#website', name: 'Hilarious', url: url(l), inLanguage: langTag[l], publisher: { '@id': origin + '/#agency' } };
}

export function breadcrumb(items: { name: string; url: string }[]) {
  return { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: it.url })) };
}

export function faqSchema(items: readonly (readonly string[])[]) {
  return { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: items.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) };
}

export function caseSchema(l: Locale, slug: string, p: Project) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    '@id': url(l, 'case/' + slug) + '#work',
    name: `${p.client} : ${p.title}`,
    headline: p.title,
    description: p.summary || p.paragraphs[0],
    image: origin + p.image,
    url: url(l, 'case/' + slug),
    inLanguage: langTag[l],
    keywords: p.tags.split(' · ').join(', '),
    genre: p.sector,
    about: { '@type': 'Organization', name: p.client },
    creator: { '@id': origin + '/#agency' },
    publisher: { '@id': origin + '/#agency' },
  };
}

export function contactPage(l: Locale) {
  return { '@context': 'https://schema.org', '@type': 'ContactPage', name: copy[l].meta.contact[0], url: url(l, 'contact'), mainEntity: { '@id': origin + '/#agency' } };
}

/** Les offres qu'un cas mobilise, dans l'ordre du catalogue. */
export const offersOf = (p: Project): OfferId[] => offerIds.filter((id) => p.services?.includes(id));
