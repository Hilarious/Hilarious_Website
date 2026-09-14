import cases from '@/lib/cases.json';
import { copy, locales, offerProof } from '@/lib/content';
import { loyalty } from '@/lib/loyalty';
import { origin, url, contact } from '@/lib/seo';
export const dynamic = 'force-static';

// llms.txt : ce que l'agence est, pour les assistants IA qui lisent le site.
// Généré à chaque compilation depuis les mêmes textes que les pages.
export function GET() {
  const t = copy.fr;
  const fr = cases.fr;
  const lines: string[] = [
    '# Hilarious',
    '',
    `> ${t.meta.home[1]}`,
    '',
    'Hilarious est une agence de communication indépendante fondée en 2012 à Bruxelles (rue Jules Cockx 10, 1160 Auderghem, Belgique), dirigée par son cofondateur Audry Van Essche. Elle travaille en français, en néerlandais et en anglais, pour des clients belges et européens. Site : https://hilarious.be (FR), https://hilarious.be/en/ (EN), https://hilarious.be/nl/ (NL).',
    '',
    '## Mission',
    '',
    t.mission,
    '',
    `Positionnement : ${t.promise.title.replace(/\n/g, ' ').toLowerCase()}`,
    '',
    '## Valeurs',
    '',
    ...t.values.map(([a, b]) => `- **${a}** : ${b}`),
    '',
    '## Positionnement',
    '',
    `${t.attention.title.replace('\n', ' ')} ${t.attention.bars.map(([v, k]) => `${k} : ${v}`).join(', ')}. ${t.attention.note}`,
    '',
    t.promise.text,
    '',
    t.promise.more,
    '',
    t.promise.results,
    '',
    `Conviction : ${t.manifesto.text.charAt(0) + t.manifesto.text.slice(1).toLowerCase()} ${t.closing.text.replace('\n', ' ')}`,
    '',
    '## Ce que fait Hilarious',
    '',
    ...t.offers.map((o) => `- **${o.title}** (${url('fr', 'services')}#${o.id}) : ${o.short} ${o.text} Pour qui : ${o.who} Livrables : ${o.deliver}. Exemples : ${offerProof[o.id].map((s) => fr[s as keyof typeof fr]?.client).filter(Boolean).join(', ')}.`),
    '',
    '## Méthode',
    '',
    `${t.method.title.replace('\n', ' ')} ${t.method.steps.map(([w, a, b]) => `${w} : ${a} ${b}`).join(' ')} ${t.method.quote}`,
    '',
    ...t.method.principles.map(([a, b]) => `- ${a} : ${b}`),
    '',
    `Engagements : ${t.commitments.items.map(([a, b]) => `${a} (${b.toLowerCase()})`).join(' ; ')}.`,
    '',
    '## Plateformes de fidélité',
    '',
    `${loyalty.fr.intro} ${loyalty.fr.proof.map(([a, b]) => `${a} : ${b}`).join(' ')} Page : ${url('fr', 'loyalty')}`,
    '',
    '## Réalisations',
    '',
    ...Object.entries(fr).map(([s, p]) => `- [${p.client} : ${p.title}](${url('fr', 'case/' + s)}) · ${p.sector} · ${p.summary}`),
    '',
    '## Questions fréquentes',
    '',
    ...[...t.faqServices, ...t.faqAbout].map(([q, a]) => `- **${q}** ${a}`),
    '',
    '## Pages',
    '',
    ...locales.flatMap((l) => ['', 'services', 'case', 'about', 'loyalty', 'contact'].map((p) => `- ${l.toUpperCase()} · ${url(l, p)}`)),
    '',
    '## Contact',
    '',
    `${contact.email} · ${contact.phoneDisplay} · ${contact.street}, ${contact.postalCode} ${contact.city.fr}, Belgique · LinkedIn : https://www.linkedin.com/company/hilarious/ · Instagram : https://www.instagram.com/hilariousagency/ · Behance : https://www.behance.net/hilarious-agency`,
    '',
    `Origine : ${origin}`,
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
