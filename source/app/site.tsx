import LoyaltyPage, { LoyaltyBridge } from './loyalty';
import LeadBrief from './lead-brief';
import DoorExperience from './door-experience';
import JsonLd from './json-ld';
import { loyalty } from '@/lib/loyalty';
import { organization, website, breadcrumb, caseSchema, contactPage, faqSchema, offersOf, url, contact, social } from '@/lib/seo';
import casesJson from '@/lib/cases.json';
import { copy, locales, route, offerProof, type Locale, type OfferId } from '@/lib/content';

export type Project = {
  client: string; title: string; tags: string; paragraphs: string[]; image: string; source: string;
  summary: string; sector: string; challenge: string; answer: string; outcome: string; services: string[]; ogClient?: string;
};
export const cases = casesJson as unknown as Record<Locale, Record<string, Project>>;

const Arrow = () => (
  <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 19 19 5M5 5h14v14" /></svg>
);

// Couleur de bloc par offre : jamais deux voisins identiques dans la grille 3 x 2.
const offerTones: Record<OfferId, string> = { loyalty: 'bg-mint', play: 'bg-cyan', activation: 'bg-pink', campaign: 'bg-yellow', digital: 'bg-mint', brand: 'bg-cyan' };

/** Les deux micro-labels en Caveat de la charte : la rubrique à gauche, le contexte à droite. */
function Micro({ left, right }: { left: string; right: string }) {
  return <div className="micro"><span>{left}</span><span>{right}</span></div>;
}

export function Header({ l, path = '' }: { l: Locale; path?: string }) {
  const t = copy[l];
  const items = [...t.nav, loyalty[l].nav];
  const targets = [...t.paths, 'loyalty'];
  return (
    <>
      <a className="skip" href="#main">{t.skip}</a>
      <header className="header">
        <a href={route(l)} className="brand" aria-label="Hilarious — Home"><img src="/logo-transparent.png" width="114" height="118" alt="Hilarious" /></a>
        <nav className="desktop-nav" aria-label={t.menu}>
          {items.map((n, i) => <a key={n} className={path === targets[i] ? 'active' : ''} href={route(l, targets[i])}>{n}</a>)}
        </nav>
        <div className="header-right">
          <nav className="languages" aria-label="Languages">
            {locales.map((x) => <a key={x} href={route(x, path)} hrefLang={x} aria-current={x === l ? 'page' : undefined}>{x.toUpperCase()}</a>)}
          </nav>
          <a className="round header-cta" href={route(l, 'contact')} aria-label={t.talk}><Arrow /></a>
          <details className="mobile-menu">
            <summary aria-label={t.menu}>☰</summary>
            <nav>{items.map((n, i) => <a key={n} href={route(l, targets[i])}>{n}</a>)}</nav>
          </details>
        </div>
      </header>
    </>
  );
}

export function Footer({ l }: { l: Locale }) {
  const t = copy[l];
  const items = [...t.nav, loyalty[l].nav];
  const targets = [...t.paths, 'loyalty'];
  return (
    <footer>
      <div className="footer-top">
        <div>
          <a className="brand" href={route(l)}><img src="/logo-transparent.png" width="114" height="118" alt="Hilarious" /></a>
          <p>{t.footer}</p>
          <p className="footer-location">{t.location}</p>
        </div>
        <nav aria-label={t.menu}>{items.map((n, i) => <a key={n} href={route(l, targets[i])}>{n}</a>)}</nav>
        <div>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <a href={`tel:${contact.phone}`}>{contact.phoneDisplay}</a>
          <address>{contact.street}<br />{contact.postalCode} {contact.city[l]} · Belgium</address>
        </div>
        <div className="footer-social">
          <span>{t.follow}</span>
          {social.map(([name, href]) => <a key={name} href={href} target="_blank" rel="noreferrer">{name} <Arrow /></a>)}
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Hilarious</span>
        <span>{t.since}</span>
        <a href="/llms.txt">llms.txt</a>
      </div>
    </footer>
  );
}

function ProjectCard({ l, id, featured = false }: { l: Locale; id: string; featured?: boolean }) {
  const p = cases[l][id];
  if (!p) return null;
  return (
    <a className={'project-card ' + (featured ? 'featured' : '')} href={route(l, 'case/' + id)}>
      <div className="project-image">
        {p.image && <img src={p.image} alt={`${p.client} — ${p.title}`} loading="lazy" width="1200" height="750" />}
        <span className="project-open" aria-label={copy[l].view}><Arrow /></span>
      </div>
      <div className="project-caption">
        <div><h3>{p.client}</h3><p>{p.title}</p></div>
        <span className="project-tags">{p.sector}</span>
      </div>
    </a>
  );
}

function Work({ l, all = false }: { l: Locale; all?: boolean }) {
  const t = copy[l];
  const ids = all ? Object.keys(cases[l]) : ['proximusforyou', 'fostplus', 'toyota'];
  return (
    <section className="work section" id="work">
      <div className="section-heading">
        <div>
          <Micro left={t.labels.proof} right={t.labels.context} />
          <p className="eyebrow">{t.selected}</p>
          {all ? <h1>{t.projects}</h1> : <h2>{t.projects}</h2>}
        </div>
        {!all && <a className="text-link" href={route(l, 'case')}>{t.all} <Arrow /></a>}
      </div>
      <div className="projects-grid">{ids.map((id, i) => <ProjectCard key={id} l={l} id={id} featured={!all && i === 0} />)}</div>
    </section>
  );
}

/** Le seul argument de l'accueil : le constat, la reponse, deux sorties. Un bandeau, et
    non la dramaturgie du master transposee section par section, qui rendait l'accueil
    illisible et remontrait les projets et les expertises deja presents ailleurs. */
function Argument({ l }: { l: Locale }) {
  const t = copy[l];
  const heights = [150, 210, 280, 470];
  const tones = ['bg-mint', 'bg-cyan', 'bg-pink', 'bg-yellow'];
  return (
    <section className="argument section" aria-labelledby="argument-title">
      <Micro left={t.labels.act1} right={t.labels.context} />
      <h2 id="argument-title">{t.attention.title}</h2>
      <div className="stairs" role="list">
        {t.attention.bars.map(([value, label], i) => (
          <div key={label} role="listitem" className={`stair ${tones[i]}`} style={{ minHeight: heights[i] }}><b>{value}</b><span>{label}</span></div>
        ))}
        <p className="note">{t.attention.note}</p>
      </div>
      <p className="stairs-answer">{t.attention.lead}</p>
      <div className="argument-answer">
        <div>
          <span className="micro-inline">{t.labels.act3}</span>
          <h3 className="as-h2">{t.promise.title}</h3>
        </div>
        <div className="promise-copy">
          <p className="lead">{t.promise.text}</p>
          <p>{t.promise.more}</p>
          <p className="promise-results">{t.promise.results}</p>
          <div className="argument-links">
            <a className="text-link" href={route(l, 'services')}>{t.nav[1]} <Arrow /></a>
            <a className="text-link" href={route(l, 'about')}>{t.agencyLink} <Arrow /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Manifesto({ tone, text, note }: { tone: string; text: string; note?: string }) {
  return (
    <section className={`manifesto ${tone}`}>
      <h2>{text}</h2>
      {note && <p className="note">{note}</p>}
    </section>
  );
}

function OffersFull({ l }: { l: Locale }) {
  const t = copy[l];
  return (
    <section className="offers-full section" id="offers">
      {t.offers.map((o, i) => (
        <article key={o.id} id={o.id} className="offer-full">
          <div className="offer-copy">
            <span className="offer-number">0{i + 1}</span>
            <h2>{o.title}</h2>
            <p className="lead">{o.short}</p>
            <p>{o.text}</p>
          </div>
          <dl className={`offer-meta ${offerTones[o.id]}`}>
            <dt>{t.offerFields.who}</dt><dd>{o.who}</dd>
            <dt>{t.offerFields.when}</dt><dd>{o.when}</dd>
            <dt>{t.offerFields.deliver}</dt><dd>{o.deliver}</dd>
            <dt>{t.offerFields.proof}</dt>
            <dd className="chips">{offerProof[o.id].map((s) => cases[l][s] && <a key={s} className="chip" href={route(l, 'case/' + s)}>{cases[l][s].client}</a>)}</dd>
          </dl>
        </article>
      ))}
    </section>
  );
}

function Cascade({ items, tones }: { items: [string, string][]; tones: string[] }) {
  return (
    <div className="cascade">
      {items.map(([title, text], i) => <article key={title} className={tones[i]}><h3>{title}</h3><p>{text}</p></article>)}
    </div>
  );
}

function Method({ l }: { l: Locale }) {
  const t = copy[l];
  const tones = ['bg-yellow', 'bg-pink', 'bg-mint'];
  return (
    <section className="method section">
      <Micro left={t.labels.method} right={t.labels.context} />
      <h2>{t.method.title}</h2>
      <div className="bands">
        {t.method.steps.map(([word, line, more], i) => (
          <div key={word} className={`band ${tones[i]}`}><b>{word}</b><div><p>{line}</p><p>{more}</p></div></div>
        ))}
      </div>
      <div className="principles">
        <h3 className="as-h2">{t.method.principlesTitle}</h3>
        <Cascade items={t.method.principles} tones={['bg-cyan', 'bg-yellow', 'bg-pink']} />
        <p className="quote">« {t.method.quote} »</p>
      </div>
    </section>
  );
}

function Commitments({ l }: { l: Locale }) {
  const t = copy[l];
  return (
    <section className="commitments section">
      <Micro left={t.labels.commitment} right={t.labels.context} />
      <h2>{t.commitments.title}</h2>
      <Cascade items={t.commitments.items} tones={['bg-mint', 'bg-cyan', 'bg-pink']} />
    </section>
  );
}

function Faq({ l, items, title }: { l: Locale; items: [string, string][]; title: string }) {
  const t = copy[l];
  return (
    <section className="faq section">
      <div>
        <Micro left={t.labels.faq} right={t.labels.context} />
        <h2>{title}</h2>
      </div>
      <div>{items.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div>
      <JsonLd data={faqSchema(items)} />
    </section>
  );
}

function Closing({ l }: { l: Locale }) {
  const t = copy[l];
  return (
    <section className="closing bg-yellow">
      <h2>{t.closing.text}</h2>
      <a className="closing-cta" href={route(l, 'contact')}>{t.closing.cta} <Arrow /></a>
    </section>
  );
}

function Facts({ l }: { l: Locale }) {
  const t = copy[l];
  const tones = ['bg-yellow', 'bg-mint', 'bg-cyan', 'bg-pink'];
  return (
    <section className="facts-section section">
      <div className="facts">
        {t.facts.map(([value, label], i) => <div key={label} className={`fact ${tones[i]}`}><b>{value}</b><span>{label}</span></div>)}
      </div>
      <p className="clients lead">{t.clients}</p>
    </section>
  );
}

function Agency({ l, full = false }: { l: Locale; full?: boolean }) {
  const t = copy[l];
  const H: 'h1' | 'h2' = full ? 'h1' : 'h2';
  return (
    <>
      <section className="agency section">
        <div className="agency-title">
          <Micro left={t.labels.agency} right={t.labels.context} />
          <p className="eyebrow">{t.nav[2]} — Hilarious</p>
          <H>{t.agencyTitle}</H>
        </div>
        <div className="agency-copy">
          <img className="agency-logo" src="/logo-transparent.png" width="114" height="118" alt="Hilarious" />
          <p className="lead">{t.agencyText}</p>
          <p>{t.agencyMore}</p>
          {!full && <a className="text-link" href={route(l, 'about')}>{t.agencyLink} <Arrow /></a>}
        </div>
      </section>
      {full && (
        <>
          <section className="mission section">
            <Micro left={t.missionLabel} right={t.labels.context} />
            <p className="mission-text">{t.mission}</p>
          </section>
          <section className="values-section section">
            <h2>{t.valuesTitle}</h2>
            <div className="values">
              {t.values.map(([title, desc], i) => <article key={title}><span className="eyebrow">0{i + 1}</span><h3>{title}</h3><p>{desc}</p></article>)}
            </div>
          </section>
        </>
      )}
    </>
  );
}

function ContactHero({ l }: { l: Locale }) {
  const t = copy[l];
  return (
    <section className="contact contact-full section">
      <div>
        <Micro left={t.labels.contact} right={t.labels.context} />
        <p className="eyebrow">{t.contactText}</p>
        <h1>{t.contactTitle}</h1>
      </div>
      <div className="contact-side">
        <a className="contact-circle" href={`mailto:${contact.email}`} aria-label={t.email}><Arrow /></a>
        <a className="contact-email" href={`mailto:${contact.email}`}>{contact.email}</a>
        <div className="contact-details">
          <p>{t.phone}<br /><a href={`tel:${contact.phone}`}>{contact.phoneDisplay}</a></p>
          <p>{t.find}<br />{contact.street}<br />{contact.postalCode} {contact.city[l]}</p>
        </div>
      </div>
    </section>
  );
}

/** Les deux cas les plus proches, par expertises communes. */
function relatedCases(l: Locale, id: string) {
  const p = cases[l][id];
  const score = (x: string) => cases[l][x].services.filter((s) => p.services.includes(s)).length;
  return Object.keys(cases[l]).filter((x) => x !== id).sort((a, b) => score(b) - score(a)).slice(0, 2);
}

function CasePage({ l, id, p }: { l: Locale; id: string; p: Project }) {
  const t = copy[l];
  const offers = offersOf(p);
  return (
    <article>
      <section className="case-heading section">
        <a className="text-link" href={route(l, 'case')}>← {t.back}</a>
        <p className="eyebrow">{p.client}</p>
        <h1>{p.title}</h1>
        <p className="case-tags">{p.tags}</p>
      </section>
      {p.image && <div className="case-cover"><img src={p.image} alt={`${p.client} — ${p.title}`} width="1440" height="900" /></div>}
      <section className="case-brief section">
        <Micro left={t.labels.caseLabel} right={p.sector} />
        <div className="case-brief-card bg-yellow">
          <h2>{t.caseFields.brief}</h2>
          <dl>
            <div><dt>{t.caseFields.client}</dt><dd>{p.client}</dd></div>
            <div><dt>{t.caseFields.sector}</dt><dd>{p.sector}</dd></div>
            <div className="wide"><dt>{t.caseFields.challenge}</dt><dd>{p.challenge}</dd></div>
            <div className="wide"><dt>{t.caseFields.answer}</dt><dd>{p.answer}</dd></div>
            <div className="wide"><dt>{t.caseFields.outcome}</dt><dd>{p.outcome}</dd></div>
          </dl>
        </div>
      </section>
      <section id="project-story" className="case-story section">
        <div>
          <p className="eyebrow">{t.projectLabel}</p>
          <h2>{p.client}</h2>
          <p>{p.tags}</p>
          {offers.length > 0 && (
            <div className="case-expertises">
              <h3>{t.caseFields.expertises}</h3>
              <div className="chips">{offers.map((oid) => <a key={oid} className="chip" href={route(l, 'services') + '#' + oid}>{t.offers.find((o) => o.id === oid)?.title}</a>)}</div>
            </div>
          )}
        </div>
        <div>{p.paragraphs.map((v, i) => <p key={i} className={i === 0 ? 'lead' : ''}>{v}</p>)}</div>
      </section>
      <section className="section related">
        <div className="section-heading"><div><p className="eyebrow">{t.caseFields.related}</p><h2>{t.related}</h2></div></div>
        <div className="projects-grid">{relatedCases(l, id).map((x) => <ProjectCard key={x} l={l} id={x} />)}</div>
      </section>
      {offers.includes('loyalty') || offers.includes('play') ? <LoyaltyBridge l={l} /> : <Closing l={l} />}
    </article>
  );
}

const doorFor = (path: string) => Math.max(1, ['case/proximusforyou', 'case/he2b', 'case/bic', 'case/lumos', 'case/equalbrussels', 'case/lyreco', 'case/crmservices', 'contact'].indexOf(path) + 1);

export function SitePage({ l, path = '' }: { l: Locale; path?: string }) {
  const t = copy[l];
  const id = path.startsWith('case/') ? path.slice(5) : null;
  const p = id ? cases[l][id] : null;

  if (!path) {
    return (
      <>
        <a className="skip" href="#main">{t.skip}</a>
        <JsonLd data={organization(l)} />
        <JsonLd data={website(l)} />
        <DoorExperience l={l} projects={cases[l]} />
        <Argument l={l} />
        <LoyaltyBridge l={l} />
        <Closing l={l} />
        <Footer l={l} />
      </>
    );
  }

  const sectionName = path === 'loyalty' ? loyalty[l].nav : p ? t.nav[0] : t.nav[t.paths.indexOf(path)];
  const crumbs = [{ name: t.home, url: url(l) }, ...(p ? [{ name: t.nav[0], url: url(l, 'case') }, { name: `${p.client} : ${p.title}`, url: url(l, path) }] : [{ name: sectionName, url: url(l, path) }])];
  const backLabel = l === 'fr' ? 'Retour aux réalisations' : l === 'nl' ? 'Terug naar de projecten' : 'Back to the work';

  return (
    <>
      <Header l={l} path={path} />
      <main id="main">
        <div className="back-to-doors"><a href={route(l) + '#door-' + doorFor(path)}>← {backLabel}</a></div>
        <JsonLd data={organization(l)} />
        <JsonLd data={breadcrumb(crumbs)} />
        {path === 'loyalty' && <LoyaltyPage l={l} />}
        {path === 'case' && <><Work l={l} all /><LoyaltyBridge l={l} /><Closing l={l} /></>}
        {path === 'services' && (
          <>
            <div className="page-title section">
              <Micro left={t.labels.offer} right={t.labels.context} />
              <p className="eyebrow">{t.nav[1]}</p>
              <h1>{t.expertise}</h1>
              <p className="lead">{t.expertiseIntro}</p>
            </div>
            <OffersFull l={l} />
            <Faq l={l} items={t.faqServices} title={loyalty[l].faqTitle} />
            <LoyaltyBridge l={l} />
            <Closing l={l} />
          </>
        )}
        {path === 'about' && (
          <>
            <Agency l={l} full />
            <Manifesto tone="bg-pink" text={t.manifesto.text} note={t.manifesto.note} />
            <Method l={l} />
            <Commitments l={l} />
            <Facts l={l} />
            <Faq l={l} items={t.faqAbout} title={loyalty[l].faqTitle} />
            <Closing l={l} />
          </>
        )}
        {path === 'contact' && (
          <>
            <ContactHero l={l} />
            <LeadBrief l={l} title={t.briefTitle} heading={t.briefHeading} intro={t.briefIntro} audience={t.labels.contact} goals={t.briefGoals} />
            <JsonLd data={contactPage(l)} />
          </>
        )}
        {p && id && <><JsonLd data={caseSchema(l, id, p)} /><CasePage l={l} id={id} p={p} /></>}
      </main>
      <Footer l={l} />
    </>
  );
}
