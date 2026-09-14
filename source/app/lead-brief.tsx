'use client';
import { useState, useEffect, type FormEvent } from 'react';
import { loyalty } from '@/lib/loyalty';
import type { Locale } from '@/lib/content';

type Props = { l: Locale; title?: string; heading?: string; intro?: string; audience?: string; goals?: string[] };

// Le formulaire prépare un e-mail dans la messagerie du visiteur et propose une copie
// du texte. Il n'envoie rien à un serveur : à raccorder avant la bascule commerciale.
export default function LeadBrief({ l, title, heading, intro, audience, goals }: Props) {
  const [enabled, setEnabled] = useState(false);
  useEffect(() => setEnabled(true), []);
  const t = loyalty[l];
  const subject = title || t.title;
  const options = goals || t.needs.map(([name]) => name);
  const [brief, setBrief] = useState('');
  const [notice, setNotice] = useState('');

  function prepare(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const fields = ['goal', 'company', 'email', 'time', 'details'] as const;
    const text = [subject, ...fields.map((key) => `${t[key]}: ${String(data.get(key) || '').trim()}`), `Page: ${window.location.origin}${window.location.pathname}`].join('\n\n');
    setBrief(text);
    setNotice('');
    window.location.href = `mailto:curious@hilarious.be?subject=${encodeURIComponent(subject + ' — ' + String(data.get('company')).trim())}&body=${encodeURIComponent(text)}`;
  }

  return (
    <section className="lead-section section" id="brief">
      <div>
        <p className="eyebrow">{audience || t.audience}</p>
        <h2>{heading || t.briefTitle}</h2>
        <p className="lead">{intro || t.briefIntro}</p>
        <p>{t.direct}<br /><a className="text-link" href="mailto:curious@hilarious.be">curious@hilarious.be</a></p>
      </div>
      <form method="post" onSubmit={prepare} className="lead-form">
        <p>{t.required}</p>
        <label htmlFor="lead-goal">{t.goal}</label>
        <select id="lead-goal" name="goal" required defaultValue="">
          <option value="" disabled>—</option>
          {options.map((name) => <option key={name} value={name}>{name}</option>)}
        </select>
        <label htmlFor="lead-company">{t.company}</label>
        <input id="lead-company" name="company" autoComplete="organization" required maxLength={160} pattern=".*\S.*" />
        <label htmlFor="lead-email">{t.email}</label>
        <input id="lead-email" name="email" type="email" autoComplete="email" required maxLength={254} />
        <label htmlFor="lead-time">{t.time}</label>
        <input id="lead-time" name="time" maxLength={160} placeholder={t.timeHint} />
        <label htmlFor="lead-details">{t.details}</label>
        <textarea id="lead-details" name="details" rows={3} maxLength={1500} />
        <p id="lead-delivery" className="lead-delivery">{t.delivery}</p>
        <button className="loyalty-link" type="submit" disabled={!enabled} aria-describedby="lead-delivery">{t.submit}<span aria-hidden="true">→</span></button>
        {brief && (
          <div className="brief-ready">
            <p role="status">{t.ready}</p>
            <textarea aria-label={t.copy} value={brief} readOnly rows={8} />
            <button type="button" className="text-link" onClick={async () => { try { await navigator.clipboard.writeText(brief); setNotice(t.copied); } catch { setNotice(t.copyFail); } }}>{t.copy}</button>
            <p role="status">{notice}</p>
          </div>
        )}
      </form>
    </section>
  );
}
