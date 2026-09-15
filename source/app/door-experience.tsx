import {loyalty} from '@/lib/loyalty';
import {copy,route,type Locale} from '@/lib/content';
import type {CSSProperties} from 'react';
const words={fr:{headline:['L’AGENCE','QUI PREND LE JEU','TRÈS AU SÉRIEUX.'],enter:'Découvrez nos projets.',discover:'Découvrez ce que nous créons pour nos clients.',hint:'Réalisations Hilarious',open:'Découvrir le projet',previous:'Réalisation précédente',next:'Réalisation suivante',all:'Toutes les réalisations',return:'Retour à l’accueil',contact:'On en parle ?',browse:'Explorez avec les flèches ou glissez',location:'Agence créative · Bruxelles',scroll:'Pourquoi le jeu ?'},en:{headline:['THE AGENCY','THAT TAKES PLAY','VERY SERIOUSLY.'],enter:'Explore our work.',discover:'See what we create for our clients.',hint:'Hilarious work',open:'Explore the project',previous:'Previous project',next:'Next project',all:'All our work',return:'Back to home',contact:'Let’s talk?',browse:'Explore with the arrows or swipe',location:'Creative agency · Brussels',scroll:'Why play?'},nl:{headline:['HET BUREAU','DAT SPELEN','HEEL SERIEUS NEEMT.'],enter:'Ontdek onze projecten.',discover:'Ontdek wat we voor onze klanten creëren.',hint:'Hilarious-projecten',open:'Ontdek het project',previous:'Vorig project',next:'Volgend project',all:'Alle projecten',return:'Terug naar home',contact:'Even praten?',browse:'Ontdek met de pijlen of veeg',location:'Creatief bureau · Brussel',scroll:'Waarom spelen?'}};
type Project={client:string;title:string;image?:string};
// Explicit source viewports keep wall art and floor props independent of screen ratio.
const decor:Record<string,Array<[string,number,number,number,number]>>={
 'contact':[['wall-left',376,598,332,453]],
 'case-he2b':[['wall-left',550,780,215,310],['floor-left',0,900,550,526],['floor-right',1215,667,550,740]],
 'case-proximusforyou':[['wall-left',0,785,810,400],['wall-right',1100,785,820,400]],
 'case-bic':[['wall-left',210,670,530,756],['wall-right',1180,670,530,756]],
 'case-lumos':[['wall-left',120,710,690,520],['wall-right',1090,710,830,350]],
 'case-equal':[['wall-left',0,550,810,420],['floor-right',1180,830,740,596]],
 'case-lyreco':[['wall-left',190,700,330,430],['floor-left',565,1025,220,401],['floor-box',395,1265,175,161],['floor-right',1130,880,790,546]]
};
function SceneDecor({scene}:{scene:string}){return <>{decor[scene]?.map(([place,x,y,w,h],i)=><svg key={i} className={`scene-art ${place}`} preserveAspectRatio="xMidYMax meet" viewBox={`${x} ${y} ${w} ${h}`} style={{aspectRatio:`${w}/${h}`}} aria-hidden="true"><image href={`/doors/bg-decoration-${scene}.png`} width="1920" height="1426"/></svg>)}</>}
export default function DoorExperience({l,projects}:{l:Locale;projects:Record<string,Project>}){
 const t=words[l],nav=copy[l];
 const rooms=[...['proximusforyou','he2b','bic','lumos','equalbrussels','lyreco','crmservices'].map(id=>({key:'case-'+({equalbrussels:'equal',crmservices:'crm'}[id]||id),name:projects[id].client,title:projects[id].title,image:projects[id].image,path:'case/'+id})),{key:'contact',name:nav.nav[3],title:t.contact,path:'contact'}];
 return <div className="door-experience" data-door-experience suppressHydrationWarning>
  <svg width="0" height="0" aria-hidden="true" className="filter-definitions"><defs><filter id="door-yellow-key" colorInterpolationFilters="sRGB"><feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  -3 -3 6 0 3.1" result="key"/><feComposite in="SourceGraphic" in2="key" operator="in"/></filter></defs></svg>
  <div className="door-masthead"><a className="brand" href={route(l)} aria-label="Hilarious — Home"><img src="/logo-transparent.png" width="114" height="118" alt="Hilarious"/></a><a className="masthead-caption" href={route(l,'loyalty')}>{loyalty[l].title}</a><nav className="languages" aria-label="Languages">{(['fr','en','nl'] as Locale[]).map(x=><a key={x} href={route(x)} aria-current={x===l?'page':undefined} hrefLang={x}>{x.toUpperCase()}</a>)}</nav></div>
  <main id="main" className="door-main">
   <section id="entry" className="entrance" aria-label={t.enter}>
    <div className="entrance-text"><p className="entrance-location">{t.location}</p><h1>{t.headline.map(x=><span key={x}>{x}</span>)}</h1><p className="entrance-note">{t.discover}</p><a className="entrance-scroll" href="#constat"><span>{t.scroll}</span><svg aria-hidden="true" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 4v13M6 12l6 6 6-6"/></svg></a></div>
    <a href="#doors" className="entrance-portal" aria-label={t.enter}><img className="entrance-balloon" src="/doors/balloon-home.png" alt="" width="230" height="600"/><span className="entrance-sprite" aria-hidden="true"><img className="sprite-strip" src="/doors/door-home.jpg" alt="" fetchPriority="high"/></span><span className="entrance-invitation">{t.enter}<span className="drawn-arrow" aria-hidden="true"/></span></a>
    <a className="entrance-edition entrance-loyalty" href={route(l,'loyalty')}>{loyalty[l].nav} · {loyalty[l].explore}</a>
   </section>
   <section id="doors" className="door-gallery" aria-label={t.hint}>
    <h2 className="visually-hidden">Hilarious — {t.hint}</h2>
    <div className="gallery-topline"><a href="#entry">← {t.return}</a><a href={route(l,'case')}>{t.all} ↗</a></div>
    <div className="rooms-track" tabIndex={0} aria-label={t.browse}>
     {rooms.map((room,i)=><article key={room.key} id={`door-${i+1}`} className={`door-room ${room.key}`} style={{'--wall':`url('/doors/bg-wall-${room.key}.jpg')`,'--floor':`url('/doors/bg-floor-${room.key}.jpg')`} as CSSProperties} aria-label={`${i+1} / ${rooms.length} · ${room.name}`}>
      <div className="room-wall"/><div className="room-floor"/>
      <div className="room-caption"><p>{room.name}</p><h2>{room.title}</h2></div>
      {decor[room.key]?<SceneDecor scene={room.key}/>:room.key!=='case-crm'&&<img className="room-decoration" src={`/doors/bg-decoration-${room.key}.png`} alt="" width="1920" height="1426" loading="eager" decoding="async"/>}
      <a className={'room-portal '+(room.key==='contact'?'phone-portal':'')+(room.key==='case-crm'?'crm-portal':'')} href={route(l,room.path)} aria-label={`${room.key==='contact'?t.contact:t.open} — ${room.name}`}>{'image' in room&&room.image&&<span className="room-window" aria-hidden="true"><img src={room.image} alt="" loading="lazy" decoding="async"/></span>}<span className="room-sprite" aria-hidden="true"><img className="sprite-strip" src={`/doors/door-${room.key==='contact'?'contact':room.key==='case-crm'?'case-crm':'about'}.png`} alt="" decoding="async"/></span><span className="room-enter">{room.key==='contact'?t.contact:t.open} <span className="drawn-arrow" aria-hidden="true"/></span></a>
     </article>)}
    </div>
    <div className="gallery-controls"><span className="door-count"><b data-door-count suppressHydrationWarning>01</b> <span>/ {String(rooms.length).padStart(2,'0')}</span></span><span className="gallery-hint">{t.browse}</span><nav className="door-dots" aria-label={t.hint}>{rooms.map((r,j)=><a key={r.key} href={`#door-${j+1}`} aria-label={r.name} aria-current={j===0?'true':undefined}/>)}</nav><div className="gallery-arrows"><a href="#door-1" data-prev aria-label={t.previous}>←</a><a href="#door-2" data-next aria-label={t.next}>→</a></div><span className="visually-hidden" aria-live="polite" data-door-status suppressHydrationWarning/></div>
   </section>
  </main>
  <nav className="door-navigation" aria-label={nav.menu}>{nav.nav.map((label,i)=><a key={label} href={route(l,nav.paths[i])}><span className="nav-count">0{i+1}</span><span>{label}</span><span className="nav-arrow" aria-hidden="true">↗</span></a>)}<a className="door-nav-contact" href="mailto:curious@hilarious.be">curious@hilarious.be</a></nav>
  <div className="door-curtain" aria-hidden="true"/>
  <script src="/door-motion.js" defer/>
 </div>
}
