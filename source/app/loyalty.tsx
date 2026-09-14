import { loyalty } from '@/lib/loyalty';
import { copy, route, type Locale } from '@/lib/content';
import { faqSchema } from '@/lib/seo';
import JsonLd from './json-ld';
import LeadBrief from './lead-brief';

export function LoyaltyLink({ l }: { l: Locale }) {
  return <a className="loyalty-link" href={route(l, 'loyalty')}>{loyalty[l].explore}<span aria-hidden="true">→</span></a>;
}

export function LoyaltyBridge({ l }: { l: Locale }) {
  const t = loyalty[l];
  return (
    <section className="loyalty-bridge section">
      <div><p className="eyebrow">{t.title}</p><h2>{t.headline}</h2></div>
      <div><p className="lead">{t.intro}</p><LoyaltyLink l={l} /></div>
    </section>
  );
}

export function LoyaltyProof({ l }: { l: Locale }) {
  const t = loyalty[l];
  return (
    <section className="loyalty-proof section">
      <div>
        <p className="eyebrow">{t.proofLabel}</p>
        <h2>{t.proofTitle}</h2>
        <a href={route(l, 'case/proximusforyou')}><img src="/images/proximusforyou.jpg" alt="Proximus for You" width="1200" height="750" loading="lazy" /></a>
      </div>
      <div className="proof-copy">
        {t.proof.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}
        <a className="text-link" href={route(l, 'case/proximusforyou')}>{t.caseLink}</a>
      </div>
    </section>
  );
}

export default function LoyaltyPage({ l }: { l: Locale }) {
  const t = loyalty[l];
  const c = copy[l];
  const tones = ['bg-mint', 'bg-cyan', 'bg-pink'];
  return (
    <>
      <section className="loyalty-hero section">
        <div className="micro"><span>{c.labels.offer}</span><span>{c.labels.context}</span></div>
        <p className="eyebrow">{t.audience}</p>
        <h1>{t.headline}</h1>
        <div className="loyalty-hero-bottom">
          <p className="lead">{t.intro}</p>
          <a href="#brief" className="loyalty-link">{t.cta}<span aria-hidden="true">→</span></a>
        </div>
      </section>
      <section className="loyalty-needs section">
        <p className="eyebrow">{t.title}</p>
        <h2>{t.needsTitle}</h2>
        <div className="loyalty-columns">
          {t.needs.map(([title, text], i) => (
            <article key={title} className={`block ${tones[i]}`}>
              <span className="eyebrow">0{i + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
              <a className="text-link" href="#brief">{t.cta}</a>
            </article>
          ))}
        </div>
      </section>
      <LoyaltyProof l={l} />
      <section className="loyalty-method section">
        <div className="micro"><span>{c.labels.method}</span><span>{c.labels.context}</span></div>
        <h2>{t.methodTitle}</h2>
        <div className="loyalty-columns">
          {t.steps.map(([title, text], i) => <article key={title}><span className="eyebrow">0{i + 1}</span><h3>{title}</h3><p>{text}</p></article>)}
        </div>
        <p className="measurement-note">{t.measurement}</p>
        <a className="text-link" href={route(l, 'services')}>{l === 'fr' ? 'Les expertises derrière l’expérience' : l === 'nl' ? 'De expertise achter de ervaring' : 'The expertise behind the experience'}</a>
      </section>
      <section className="loyalty-faq faq section">
        <div><div className="micro"><span>{c.labels.faq}</span><span>{c.labels.context}</span></div><h2>{t.faqTitle}</h2></div>
        <div>{t.faq.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div>
        <JsonLd data={faqSchema(t.faq)} />
      </section>
      <LeadBrief l={l} />
    </>
  );
}
