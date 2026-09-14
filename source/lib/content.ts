// Textes des pages, dans les trois langues. Modifier un texte ici, puis recompiler.
// Le message reprend le master de présentation 2026 (HIL_26032) : voir
// Website_2026/brief/cadrage-refonte-2026-09-14.md.
export type Locale = 'fr' | 'en' | 'nl';
export const locales: Locale[] = ['fr', 'en', 'nl'];

export type OfferId = 'loyalty' | 'play' | 'activation' | 'campaign' | 'digital' | 'brand';
export const offerIds: OfferId[] = ['loyalty', 'play', 'activation', 'campaign', 'digital', 'brand'];
// Les cas qui prouvent chaque offre, dans l'ordre d'affichage.
export const offerProof: Record<OfferId, string[]> = {
  loyalty: ['proximusforyou', 'swanlake'],
  play: ['fostplus', 'cofidis', 'tml', 'swanlake'],
  activation: ['toyota', 'withlove', 'reddevils', 'bic'],
  campaign: ['he2b', 'equalbrussels', 'cad', 'lumos'],
  digital: ['lyreco', 'crmservices', 'he2b', 'cad'],
  brand: ['proximusforyou', 'he2b', 'lyreco'],
};

export type Offer = { id: OfferId; title: string; short: string; who: string; when: string; text: string; deliver: string };
export type Pair = [string, string];

export type Copy = {
  nav: string[]; paths: string[]; location: string; hand: string; intro: string;
  discover: string; talk: string; selected: string; projects: string; all: string; view: string;
  expertise: string; expertiseIntro: string;
  labels: { act1: string; act2: string; act3: string; method: string; commitment: string; offer: string; agency: string; contact: string; faq: string; caseLabel: string; proof: string; context: string };
  attention: { title: string; bars: Pair[]; lead: string; note: string };
  manifesto: { text: string; note: string };
  promise: { title: string; text: string; more: string; results: string };
  offersTitle: string; offersLead: string; offers: Offer[];
  offerFields: { who: string; when: string; deliver: string; proof: string };
  method: { title: string; steps: [string, string, string][]; principlesTitle: string; principles: Pair[]; quote: string };
  commitments: { title: string; items: Pair[] };
  closing: { text: string; cta: string };
  agencyTitle: string; agencyText: string; agencyMore: string; agencyLink: string; mission: string; missionShort: string; missionLabel: string; valuesTitle: string;
  facts: Pair[]; clients: string; values: Pair[];
  faqServices: Pair[]; faqAbout: Pair[];
  caseFields: { brief: string; client: string; sector: string; challenge: string; answer: string; outcome: string; expertises: string; related: string };
  briefTitle: string; briefGoals: string[]; briefHeading: string; briefIntro: string;
  contactTitle: string; contactText: string; email: string; phone: string; find: string;
  back: string; related: string; projectLabel: string; overview: string; menu: string; close: string; skip: string;
  footer: string; home: string; since: string; archive: string; notfound: string; returnHome: string; follow: string;
  meta: { home: Pair; services: Pair; cases: Pair; about: Pair; contact: Pair; caseSuffix: string };
};

export const copy: Record<Locale, Copy> = {
  fr: {
    nav: ['Projets', 'Expertises', 'L’agence', 'Contact'], paths: ['case', 'services', 'about', 'contact'],
    location: 'Agence créative · Bruxelles', hand: 'Et on y prend plaisir.',
    intro: 'Des plateformes de fidélité, des jeux et des expériences de marque qui captent l’attention et la gardent.',
    discover: 'Découvrir nos projets', talk: 'Parlons de votre projet', selected: 'Quelques preuves.', projects: 'LES IDÉES,\nEN ACTION.', all: 'Tous les projets', view: 'Voir le projet',
    expertise: 'DE L’IDÉE\nÀ L’IMPACT.',
    expertiseIntro: 'Des plateformes de fidélité, des jeux et des expériences qui demandent à votre public de faire quelque chose plutôt que de regarder. Et les campagnes, les sites et les contenus qui les portent.',
    labels: { act1: 'Acte 1 · Problème', act2: 'Acte 2 · Déclic', act3: 'Acte 3 · Solution', method: 'Méthode', commitment: 'Engagement', offer: 'Ce qu’on fait', agency: 'L’agence', contact: 'Contact', faq: 'Questions', caseLabel: 'Cas client', proof: 'Preuves', context: 'Hilarious · 2026' },
    attention: {
      title: 'COMBIEN DE TEMPS UNE MARQUE\nRETIENT-ELLE VOTRE ATTENTION ?',
      bars: [['3’’', 'Affichage'], ['6’’', 'Réseaux sociaux'], ['30’’', 'Spot TV'], ['2’35’’', 'Jeu créatif']],
      lead: 'La solution : l’engagement actif. Invitons votre audience à jouer.',
      note: 'Ordres de grandeur. 2’35’’ : temps moyen passé sur nos expériences de marque.',
    },
    manifesto: { text: 'LES MARQUES LES PLUS FORTES SONT CELLES QUI CRÉENT DE VÉRITABLES CONNEXIONS AVEC LEUR AUDIENCE.', note: '*C’est ce que propose Hilarious.' },
    promise: {
      title: 'UNE MARQUE QUI AGIT,\nPAS SEULEMENT\nUNE MARQUE QUI PARLE.',
      text: 'Nous captons l’attention, stimulons l’engagement et créons des émotions, en prenant soin de nos partenaires et des relations qu’ils construisent avec leurs audiences.',
      more: 'Une affiche ouvre la porte. Nous nous occupons de ce qui se passe une fois qu’elle est ouverte : des plateformes de fidélité, des jeux, des dispositifs qui demandent aux gens de faire quelque chose plutôt que de regarder. Quand une marque demande un geste, l’attention change d’unité. Elle se compte en minutes. Elle revient le lendemain. Elle a un prénom.',
      results: 'Chaque participation devient un résultat marketing : notoriété, collecte de données, fidélisation, lancement de produit.',
    },
    offersTitle: 'CE QU’ON PEUT FAIRE\nPOUR VOTRE MARQUE.',
    offersLead: 'Six façons de transformer une audience en relation. Chacune est prouvée par un projet livré.',
    offers: [
      { id: 'loyalty', title: 'Plateformes de fidélité et programmes d’avantages', short: 'Donner à vos clients des raisons de revenir.', who: 'Les marques qui ont déjà des clients et veulent les garder.', when: 'Vos avantages existent mais restent méconnus, ou un programme s’essouffle.', text: 'Un univers, une identité et un calendrier de rendez-vous : concours, cadeaux, contenus, événements exclusifs, réunis sur une seule plateforme que vous animez avec nous.', deliver: 'Stratégie et concept · Identité de plateforme · Mécaniques de jeu et de récompense · Calendrier d’activations · Newsletter et social' },
      { id: 'play', title: 'Jeux, concours et gamification', short: 'Faire participer plutôt que faire regarder.', who: 'Une marque, une institution ou un média qui veut de la participation, pas seulement de la portée.', when: 'Un lancement, une campagne de sensibilisation, une collecte de données, une saison à animer.', text: 'Un jeu sur mesure, avec un storytelling qui vous ressemble et une mécanique qui sert un objectif précis : informer, qualifier, faire revenir. Conçu, dessiné et développé en interne, testé sur smartphone d’abord.', deliver: 'Concept et scénario · Direction artistique et 3D · Développement · Règlement et gestion des gains · Mesure de la participation' },
      { id: 'activation', title: 'Activations et expériences phygitales', short: 'Le terrain et le digital racontent la même histoire.', who: 'Les marques qui rencontrent leur public en vrai : magasin, festival, événement, roadshow.', when: 'Un lancement à faire vivre, un sponsoring à activer, une saison à habiter.', text: 'Une expérience qui commence sur place et continue en ligne, ou l’inverse : un quiz joué à quatre dans une voiture, une story box scannée sous le sapin, une chasse aux DJ en 3D. Le geste du public est le cœur du dispositif.', deliver: 'Concept · Parcours client · Dispositif physique et digital · Production vidéo et 3D · Activation sociale' },
      { id: 'campaign', title: 'Campagnes 360°, social et contenu', short: 'Une idée, déclinée partout où votre public se trouve.', who: 'Les équipes marketing et communication qui doivent faire connaître, recruter ou convaincre.', when: 'Une rentrée à remplir, un produit à lancer, une cause à porter, une communauté à animer dans la durée.', text: 'Vidéo, réseaux sociaux, affichage, print, landing page, avec une ligne éditoriale et un ton qui tiennent sur deux ans, pas seulement sur une vague.', deliver: 'Stratégie et insight · Concept créatif · Production vidéo et motion · Social media et paid · Print et affichage' },
      { id: 'digital', title: 'Sites, plateformes et e-mailing', short: 'Pensés pour convertir, livrés pour durer.', who: 'Les marques dont le site, l’application ou les e-mails font une partie du travail commercial.', when: 'Un site à refondre, un funnel d’e-mails à réécrire, une plateforme à construire, des newsletters à produire chaque mois dans plusieurs langues.', text: 'Du site vitrine à la plateforme sur mesure, du e-mail transactionnel à la newsletter mensuelle : testés sur les clients mail et les écrans qui comptent, livrés avec un design system que vos équipes font vivre seules.', deliver: 'UX/UI · Développement web · Design system · E-mailing et bannering · Maintenance' },
      { id: 'brand', title: 'Identité et design', short: 'Une marque qui se reconnaît. Et qui se retient.', who: 'Une marque, un programme ou une école qui doit être reconnu au premier coup d’œil.', when: 'Une identité à créer ou à rafraîchir, un univers graphique à poser avant une campagne, une mascotte à faire vivre.', text: 'Un positionnement, puis une identité : logo, charte, univers graphique, ton de voix, jusqu’à la mascotte qui devient community manager. Le fond avant la forme, toujours.', deliver: 'Positionnement · Identité visuelle · Charte et guidelines · Direction artistique · Illustration et 3D' },
    ],
    offerFields: { who: 'Pour qui', when: 'Quand', deliver: 'Ce qu’on livre', proof: 'La preuve' },
    method: {
      title: 'SUR-MESURE, COLLABORATIF,\nEN INTERNE.',
      steps: [
        ['CARE', 'Avant tout projet : la relation.', 'Avec nos clients, avec leur audience, et entre nous.'],
        ['FEEL', 'C’est l’émotion qui crée l’engagement.', 'Une marque qui ne crée pas d’émotion reste une option parmi d’autres, jamais un choix.'],
        ['ENGAGE', 'Connecter une audience à une marque, activement.', 'Un jeu, un geste, une participation : la relation commence quand le public fait quelque chose.'],
      ],
      principlesTitle: 'TROIS RÈGLES\nQUI NE CHANGENT PAS.',
      principles: [
        ['Chaque client est unique', 'On s’adapte à vos besoins, pas l’inverse. On écoute en challengeant vos process et vos objectifs.'],
        ['Co-construction', 'Une collaboration fluide, ajustée en continu pour optimiser les résultats.'],
        ['PM dédié, tout en interne', 'Un seul point de contact. Flux d’information transparent. Contrôle total de la chaîne, du brief à la livraison.'],
      ],
      quote: 'Aucun briefing n’est jamais exécuté littéralement.',
    },
    commitments: {
      title: 'CE QU’ON VOUS PROMET,\nET QU’ON TIENT.',
      items: [
        ['Challenger avec bienveillance', 'On questionne chaque briefing pour en maximiser l’impact. Jamais pour le plaisir de contredire.'],
        ['Penser écosystème global', 'Pas de jeu isolé. Chaque mécanique s’inscrit dans la construction d’un vrai customer journey.'],
        ['Transparence totale', 'Sur les résultats. Sur les échecs. Sur les réussites. Tout se dit.'],
      ],
    },
    closing: { text: 'UN LIEN NE SE PROCLAME PAS.\nIL S’ENGAGE.', cta: 'Alors jouons, ensemble.' },
    agencyTitle: 'SÉRIEUX\nDANS LE FOND.\nJOYEUX DANS\nLA FORME.',
    agencyText: 'Nous sommes Hilarious. Une agence de communication indépendante à Bruxelles, où la stratégie, la création et la technologie travaillent ensemble depuis 2012.',
    agencyMore: 'On pose des questions. On confronte les idées. On fait équipe avec vous pour créer des expériences qui génèrent des émotions et servent vos objectifs.',
    agencyLink: 'Rencontrer l’agence',
    mission: 'Hilarious aide les marques à agir. Elle clarifie leurs enjeux et les transforme en expériences qui font participer leur public, des jeux, des plateformes de fidélité, des activations et des campagnes, pour passer de l’attention à l’attachement. Avec soin, plaisir et exigence.',
    missionShort: 'Hilarious, agence bruxelloise, aide les marques à agir plutôt qu’à parler : des jeux, des plateformes de fidélité et des expériences qui font participer leur public.',
    missionLabel: 'Notre mission', valuesTitle: 'CE QU’ON DÉFEND,\nSANS LANGUE DE BOIS.',
    facts: [['2012', 'Année de création, à Bruxelles'], ['100 %', 'Indépendante, sans groupe ni réseau'], ['1', 'Un seul point de contact : un PM dédié par projet'], ['FR · NL · EN', 'Trois langues de travail, des e-mailings livrés dans onze pays']],
    clients: 'Ils nous ont confié un jeu, une plateforme ou une campagne : Proximus, L’Oréal Luxe, Toyota, Bic, Lyreco, Cofidis, Fost Plus, HE2B, CAD, Equal Brussels, Lumos.',
    values: [
      ['Humaines', 'On traite les gens comme des gens, pas comme des KPI : le client, son public, l’équipe. On rappelle avant qu’on nous rappelle, et on dit non quand ce qui est demandé ferait du tort.'],
      ['Professionnelles', 'Irréprochables sur l’exécution, c’est ce qui nous autorise à être libres sur le ton. Une date promise est tenue, un chiffre non vérifié ne sort pas.'],
      ['Éthiques', 'On dit non aux briefs qui nous mettent mal à l’aise, et on l’assume. La première réunion sert à poser des questions, pas à présenter.'],
      ['Drôles', 'L’humour est notre signature, pas un accessoire. Il vise une vérité, pas un like. Si l’équipe ne s’amuse pas en le faisant, le public ne s’amusera pas en le vivant.'],
      ['Tech-lucides', 'L’IA comme outil, jamais comme gadget ni comme menace. On essaie ce qu’on ne connaît pas encore, et c’est nous qui signons ce qui sort, pas l’outil.'],
    ],
    faqServices: [
      ['Quels projets confie-t-on à Hilarious ?', 'Des plateformes de fidélité et des programmes d’avantages, des jeux et des concours, des activations sur le terrain et en ligne, des campagnes 360°, des sites et des e-mailings, et le travail d’identité qui les précède. Le point commun : faire participer un public plutôt que le faire regarder.'],
      ['Quelle différence entre un concours et une plateforme de fidélité ?', 'Un concours crée un pic de participation autour d’un moment. Une plateforme de fidélité crée des rendez-vous : elle réunit avantages, jeux et contenus dans un univers durable, pour que les clients reviennent. Nous faisons les deux, et souvent le premier nourrit la seconde.'],
      ['Faites-vous le développement en interne ?', 'Oui. Stratégie, création, design, développement et motion sont dans l’équipe, avec un PM dédié comme seul point de contact. C’est ce qui permet de tester un jeu sur smartphone dès les premières semaines et de tenir les délais.'],
      ['Comment mesurez-vous le résultat ?', 'Par le comportement recherché, fixé au départ : participations, temps passé, données collectées, inscriptions, retours. La participation mesure l’engagement ; la fidélité se vérifie dans la durée, avec vos données de récurrence.'],
      ['Dans quelles langues et pour quels marchés ?', 'En français, en néerlandais et en anglais, pour des clients belges et européens. Nos e-mailings sont produits chaque mois dans une dizaine de pays, chacun dans sa langue.'],
    ],
    faqAbout: [
      ['Qui est Hilarious ?', 'Une agence de communication indépendante fondée en 2012 à Bruxelles et dirigée par son cofondateur Audry Van Essche. Elle conçoit des plateformes de fidélité, des jeux, des activations et des campagnes pour des marques comme Proximus, L’Oréal Luxe, Toyota ou Bic, avec une équipe interne qui couvre la stratégie, la création, le design et le développement.'],
      ['Où travaillez-vous ?', 'À Bruxelles, rue Jules Cockx 10, à Auderghem. Nos clients sont en Belgique et en Europe, et nous produisons en français, en néerlandais et en anglais.'],
      ['Comment se passe une première rencontre ?', 'On vous écoute, on pose des questions, et on repart avec un enjeu clair plutôt qu’un brief à exécuter. Un public, un objectif et une échéance suffisent pour commencer la conversation.'],
    ],
    caseFields: { brief: 'En bref', client: 'Client', sector: 'Secteur', challenge: 'L’enjeu', answer: 'Notre réponse', outcome: 'Ce qu’on retient', expertises: 'Expertises mobilisées', related: 'Dans la même veine' },
    briefTitle: 'Nouvelle demande',
    briefHeading: 'DITES-NOUS\nCE QUE VOUS VOULEZ\nFAIRE BOUGER.', briefIntro: 'Trois champs suffisent. On vous répond avec des questions, pas avec un devis.',
    briefGoals: ['Fidéliser mes clients', 'Faire jouer mon public', 'Activer ma marque sur le terrain', 'Lancer une campagne', 'Refondre un site ou des e-mails', 'Travailler mon identité', 'Autre chose'],
    contactTitle: 'ET SI ON\nFAISAIT\nQUELQUE CHOSE\nENSEMBLE ?', contactText: 'Un brief bien ficelé ou une idée encore floue ? On en parle.',
    email: 'Écrivez-nous', phone: 'Appelez-nous', find: 'Passez nous voir',
    back: 'Retour aux projets', related: 'ENCORE\nUNE BONNE IDÉE.', projectLabel: 'Le projet', overview: 'Notre approche', menu: 'Ouvrir le menu', close: 'Fermer le menu', skip: 'Aller au contenu',
    footer: 'Des expériences. Des émotions. Des résultats.', home: 'Accueil', since: 'Indépendants. Curieux. Depuis 2012.', archive: 'Toutes les réalisations', notfound: 'Cette page a pris un autre chemin.', returnHome: 'Retour à l’accueil', follow: 'Suivez-nous',
    meta: {
      home: ['Hilarious · Agence créative à Bruxelles : jeux, fidélisation, expériences de marque', 'Hilarious conçoit des plateformes de fidélité, des jeux et des expériences de marque qui captent l’attention et la gardent. Agence indépendante à Bruxelles depuis 2012.'],
      services: ['Expertises : gamification, fidélisation, activation, campagnes', 'Six façons de transformer une audience en relation : plateformes de fidélité, jeux et concours, activations phygitales, campagnes 360°, sites et e-mailing, identité. Chacune prouvée par un projet livré.'],
      cases: ['Réalisations : nos projets pour Proximus, L’Oréal, Toyota, Bic et d’autres', 'Quinze projets qui montrent ce qu’on fait : plateformes de fidélité, jeux, activations, campagnes et sites, pour des marques belges et internationales.'],
      about: ['L’agence : indépendante, à Bruxelles, depuis 2012', 'Hilarious est une agence de communication indépendante à Bruxelles. Stratégie, création, design et développement en interne, un PM dédié par projet, et une conviction : un lien ne se proclame pas, il s’engage.'],
      contact: ['Contact : parlons de votre projet', 'Un brief bien ficelé ou une idée encore floue ? Écrivez-nous ou décrivez ce que vous voulez faire évoluer avec votre marque. Hilarious, rue Jules Cockx 10, 1160 Bruxelles.'],
      caseSuffix: 'Cas client',
    },
  },
  en: {
    nav: ['Work', 'Expertise', 'The agency', 'Contact'], paths: ['case', 'services', 'about', 'contact'],
    location: 'Creative agency · Brussels', hand: 'And we enjoy the ride.',
    intro: 'Loyalty platforms, games and brand experiences that capture attention and hold it.',
    discover: 'Explore our work', talk: 'Let’s talk about your project', selected: 'A little proof.', projects: 'IDEAS\nIN ACTION.', all: 'All projects', view: 'View project',
    expertise: 'FROM IDEA\nTO IMPACT.',
    expertiseIntro: 'Loyalty platforms, games and experiences that ask your audience to do something rather than watch. And the campaigns, websites and content that carry them.',
    labels: { act1: 'Act 1 · Problem', act2: 'Act 2 · Trigger', act3: 'Act 3 · Solution', method: 'Method', commitment: 'Commitment', offer: 'What we do', agency: 'The agency', contact: 'Contact', faq: 'Questions', caseLabel: 'Case study', proof: 'Proof', context: 'Hilarious · 2026' },
    attention: {
      title: 'HOW LONG DOES A BRAND\nHOLD YOUR ATTENTION?',
      bars: [['3’’', 'Out-of-home'], ['6’’', 'Social media'], ['30’’', 'TV spot'], ['2’35’’', 'Creative game']],
      lead: 'The answer: active engagement. Let’s invite your audience to play.',
      note: 'Orders of magnitude. 2’35’’: average time spent on our brand experiences.',
    },
    manifesto: { text: 'THE STRONGEST BRANDS ARE THE ONES THAT BUILD REAL CONNECTIONS WITH THEIR AUDIENCE.', note: '*That is what Hilarious does.' },
    promise: {
      title: 'A BRAND THAT ACTS,\nNOT JUST\nA BRAND THAT TALKS.',
      text: 'We capture attention, spark engagement and create emotion, while taking care of our partners and the relationships they build with their audiences.',
      more: 'A billboard opens the door. We take care of what happens once it is open: loyalty platforms, games, devices that ask people to do something rather than watch. When a brand asks for a gesture, attention changes unit. It is counted in minutes. It comes back the next day. It has a first name.',
      results: 'Every participation becomes a marketing result: awareness, data collection, loyalty, product launch.',
    },
    offersTitle: 'WHAT WE CAN DO\nFOR YOUR BRAND.',
    offersLead: 'Six ways to turn an audience into a relationship. Each one is proven by a delivered project.',
    offers: [
      { id: 'loyalty', title: 'Loyalty platforms and benefit programmes', short: 'Give your customers reasons to come back.', who: 'Brands that already have customers and want to keep them.', when: 'Your benefits exist but go unnoticed, or a programme is running out of steam.', text: 'A universe, an identity and a calendar of moments: contests, gifts, content, exclusive events, gathered on one platform that you run with us.', deliver: 'Strategy and concept · Platform identity · Game and reward mechanics · Activation calendar · Newsletter and social' },
      { id: 'play', title: 'Games, contests and gamification', short: 'Get people to take part rather than watch.', who: 'A brand, an institution or a media outlet that wants participation, not just reach.', when: 'A launch, an awareness campaign, data collection, a season to animate.', text: 'A tailor-made game, with storytelling that sounds like you and a mechanic that serves one precise goal: inform, qualify, bring back. Designed, drawn and developed in-house, tested mobile-first.', deliver: 'Concept and script · Art direction and 3D · Development · Rules and prize management · Participation measurement' },
      { id: 'activation', title: 'Activations and phygital experiences', short: 'The field and digital tell the same story.', who: 'Brands that meet their audience in real life: store, festival, event, roadshow.', when: 'A launch to bring to life, a sponsorship to activate, a season to inhabit.', text: 'An experience that starts on site and continues online, or the other way round: a quiz played by four in a car, a story box scanned under the tree, a 3D DJ hunt. The audience’s gesture is the heart of the device.', deliver: 'Concept · Customer journey · Physical and digital device · Video and 3D production · Social activation' },
      { id: 'campaign', title: '360° campaigns, social and content', short: 'One idea, everywhere your audience is.', who: 'Marketing and communications teams that need to raise awareness, recruit or convince.', when: 'An intake to fill, a product to launch, a cause to carry, a community to animate over time.', text: 'Video, social media, out-of-home, print, landing page, with an editorial line and a tone that hold for two years, not just one wave.', deliver: 'Strategy and insight · Creative concept · Video and motion production · Social media and paid · Print and out-of-home' },
      { id: 'digital', title: 'Websites, platforms and emailing', short: 'Built to convert, delivered to last.', who: 'Brands whose website, app or emails do part of the commercial work.', when: 'A website to rebuild, an email funnel to rewrite, a platform to build, newsletters to produce every month in several languages.', text: 'From showcase site to bespoke platform, from transactional email to monthly newsletter: tested on the email clients and screens that matter, delivered with a design system your teams run on their own.', deliver: 'UX/UI · Web development · Design system · Emailing and banners · Maintenance' },
      { id: 'brand', title: 'Identity and design', short: 'A brand people recognise. And remember.', who: 'A brand, a programme or a school that must be recognised at first glance.', when: 'An identity to create or refresh, a graphic universe to set before a campaign, a mascot to bring to life.', text: 'A positioning, then an identity: logo, guidelines, graphic universe, tone of voice, all the way to the mascot that becomes community manager. Substance before style, always.', deliver: 'Positioning · Visual identity · Brand guidelines · Art direction · Illustration and 3D' },
    ],
    offerFields: { who: 'For whom', when: 'When', deliver: 'What we deliver', proof: 'The proof' },
    method: {
      title: 'TAILOR-MADE, COLLABORATIVE,\nIN-HOUSE.',
      steps: [
        ['CARE', 'Before any project: the relationship.', 'With our clients, with their audience, and among ourselves.'],
        ['FEEL', 'Emotion is what creates engagement.', 'A brand that creates no emotion stays one option among others, never a choice.'],
        ['ENGAGE', 'Connect an audience to a brand, actively.', 'A game, a gesture, a participation: the relationship starts when the audience does something.'],
      ],
      principlesTitle: 'THREE RULES\nTHAT NEVER CHANGE.',
      principles: [
        ['Every client is unique', 'We adapt to your needs, not the other way round. We listen while challenging your processes and goals.'],
        ['Co-construction', 'A fluid collaboration, adjusted continuously to optimise results.'],
        ['Dedicated PM, all in-house', 'One point of contact. Transparent information flow. Full control of the chain, from brief to delivery.'],
      ],
      quote: 'No brief is ever executed literally.',
    },
    commitments: {
      title: 'WHAT WE PROMISE,\nAND KEEP.',
      items: [
        ['Challenge with kindness', 'We question every brief to maximise its impact. Never for the pleasure of contradicting.'],
        ['Think whole ecosystem', 'No isolated game. Every mechanic is part of building a real customer journey.'],
        ['Total transparency', 'On results. On failures. On successes. Everything gets said.'],
      ],
    },
    closing: { text: 'A BOND IS NOT PROCLAIMED.\nIT IS EARNED.', cta: 'So let’s play, together.' },
    agencyTitle: 'SERIOUS\nABOUT WORK.\nHAPPY\nAT HEART.',
    agencyText: 'We are Hilarious. An independent communications agency in Brussels, bringing strategy, creativity and technology together since 2012.',
    agencyMore: 'We ask questions. We challenge ideas. We team up with you to create experiences that generate emotion and serve your objectives.',
    agencyLink: 'Meet the agency',
    mission: 'Hilarious helps brands act. We clarify their challenges and turn them into experiences that get their audience to take part, games, loyalty platforms, activations and campaigns, to move from attention to attachment. With care, pleasure and high standards.',
    missionShort: 'Hilarious, a Brussels agency, helps brands act rather than talk: games, loyalty platforms and experiences that get their audience to take part.',
    missionLabel: 'Our mission', valuesTitle: 'WHAT WE STAND FOR,\nNO CORPORATE SPEAK.',
    facts: [['2012', 'Founded in Brussels'], ['100%', 'Independent, no group, no network'], ['1', 'One point of contact: a dedicated PM per project'], ['FR · NL · EN', 'Three working languages, emailings delivered in eleven countries']],
    clients: 'They trusted us with a game, a platform or a campaign: Proximus, L’Oréal Luxe, Toyota, Bic, Lyreco, Cofidis, Fost Plus, HE2B, CAD, Equal Brussels, Lumos.',
    values: [
      ['Human', 'We treat people as people, not as KPIs: the client, their audience, the team. We call before we are called, and we say no when what is asked would do harm.'],
      ['Professional', 'Flawless on execution, which is what allows us to be free on tone. A promised date is kept, an unverified figure never goes out.'],
      ['Ethical', 'We say no to briefs that make us uncomfortable, and we own it. The first meeting is for asking questions, not for presenting.'],
      ['Funny', 'Humour is our signature, not an accessory. It aims at a truth, not a like. If the team does not enjoy making it, the audience will not enjoy living it.'],
      ['Tech-lucid', 'AI as a tool, never a gadget nor a threat. We try what we do not know yet, and we are the ones who sign what goes out, not the tool.'],
    ],
    faqServices: [
      ['What kind of projects does Hilarious take on?', 'Loyalty platforms and benefit programmes, games and contests, activations in the field and online, 360° campaigns, websites and emailings, and the identity work that comes before them. The common thread: getting an audience to take part rather than watch.'],
      ['What is the difference between a contest and a loyalty platform?', 'A contest creates a peak of participation around one moment. A loyalty platform creates recurring moments: it gathers benefits, games and content in a lasting universe, so customers come back. We do both, and the first often feeds the second.'],
      ['Do you develop in-house?', 'Yes. Strategy, creative, design, development and motion are all in the team, with a dedicated PM as your single point of contact. That is what lets us test a game on a smartphone within the first weeks and keep deadlines.'],
      ['How do you measure results?', 'By the behaviour we set out to encourage: participations, time spent, data collected, sign-ups, returns. Participation measures engagement; loyalty is verified over time, with your repeat-usage data.'],
      ['Which languages and markets?', 'French, Dutch and English, for Belgian and European clients. Our emailings are produced every month in around ten countries, each in its own language.'],
    ],
    faqAbout: [
      ['Who is Hilarious?', 'An independent communications agency founded in 2012 in Brussels and led by its co-founder Audry Van Essche. It designs loyalty platforms, games, activations and campaigns for brands such as Proximus, L’Oréal Luxe, Toyota and Bic, with an in-house team covering strategy, creative, design and development.'],
      ['Where are you based?', 'In Brussels, Rue Jules Cockx 10, in Auderghem. Our clients are in Belgium and across Europe, and we produce in French, Dutch and English.'],
      ['What does a first meeting look like?', 'We listen, we ask questions, and we leave with a clear challenge rather than a brief to execute. An audience, a goal and a deadline are enough to start the conversation.'],
    ],
    caseFields: { brief: 'In short', client: 'Client', sector: 'Sector', challenge: 'The challenge', answer: 'Our answer', outcome: 'What we keep', expertises: 'Expertise involved', related: 'In the same vein' },
    briefTitle: 'New request',
    briefHeading: 'TELL US\nWHAT YOU WANT\nTO MOVE.', briefIntro: 'Three fields are enough. We reply with questions, not with a quote.',
    briefGoals: ['Build customer loyalty', 'Get my audience to play', 'Activate my brand in the field', 'Launch a campaign', 'Rebuild a website or emails', 'Work on my identity', 'Something else'],
    contactTitle: 'WHAT IF\nWE MADE\nSOMETHING\nTOGETHER?', contactText: 'A detailed brief or the spark of an idea? Let’s talk.',
    email: 'Write to us', phone: 'Give us a call', find: 'Come say hello',
    back: 'Back to projects', related: 'ONE MORE\nGOOD IDEA.', projectLabel: 'The project', overview: 'Our approach', menu: 'Open menu', close: 'Close menu', skip: 'Skip to content',
    footer: 'Experiences. Emotions. Results.', home: 'Home', since: 'Independent. Curious. Since 2012.', archive: 'All our work', notfound: 'This page has taken another path.', returnHome: 'Back to home', follow: 'Follow us',
    meta: {
      home: ['Hilarious · Creative agency in Brussels: games, loyalty, brand experiences', 'Hilarious designs loyalty platforms, games and brand experiences that capture attention and hold it. Independent agency in Brussels since 2012.'],
      services: ['Expertise: gamification, loyalty, activation, campaigns', 'Six ways to turn an audience into a relationship: loyalty platforms, games and contests, phygital activations, 360° campaigns, websites and emailing, identity. Each proven by a delivered project.'],
      cases: ['Work: our projects for Proximus, L’Oréal, Toyota, Bic and more', 'Fifteen projects that show what we do: loyalty platforms, games, activations, campaigns and websites, for Belgian and international brands.'],
      about: ['The agency: independent, in Brussels, since 2012', 'Hilarious is an independent communications agency in Brussels. Strategy, creative, design and development in-house, a dedicated PM per project, and one conviction: a bond is not proclaimed, it is earned.'],
      contact: ['Contact: let’s talk about your project', 'A detailed brief or the spark of an idea? Write to us or tell us what you want to change through your brand. Hilarious, Rue Jules Cockx 10, 1160 Brussels.'],
      caseSuffix: 'Case study',
    },
  },
  nl: {
    nav: ['Projecten', 'Expertise', 'Het bureau', 'Contact'], paths: ['case', 'services', 'about', 'contact'],
    location: 'Creatief bureau · Brussel', hand: 'Met veel plezier.',
    intro: 'Loyaliteitsplatformen, games en merkervaringen die de aandacht trekken en vasthouden.',
    discover: 'Ontdek onze projecten', talk: 'Vertel ons over je project', selected: 'Een beetje bewijs.', projects: 'IDEEËN\nIN ACTIE.', all: 'Alle projecten', view: 'Bekijk het project',
    expertise: 'VAN IDEE\nNAAR IMPACT.',
    expertiseIntro: 'Loyaliteitsplatformen, games en ervaringen die je publiek vragen om iets te doen in plaats van te kijken. En de campagnes, websites en content die ze dragen.',
    labels: { act1: 'Akte 1 · Probleem', act2: 'Akte 2 · Klik', act3: 'Akte 3 · Oplossing', method: 'Methode', commitment: 'Engagement', offer: 'Wat we doen', agency: 'Het bureau', contact: 'Contact', faq: 'Vragen', caseLabel: 'Klantcase', proof: 'Bewijs', context: 'Hilarious · 2026' },
    attention: {
      title: 'HOE LANG HOUDT EEN MERK\nJOUW AANDACHT VAST?',
      bars: [['3’’', 'Affichage'], ['6’’', 'Sociale media'], ['30’’', 'Tv-spot'], ['2’35’’', 'Creatieve game']],
      lead: 'De oplossing: actieve betrokkenheid. Laten we je publiek uitnodigen om te spelen.',
      note: 'Grootteordes. 2’35’’: gemiddelde tijd op onze merkervaringen.',
    },
    manifesto: { text: 'DE STERKSTE MERKEN ZIJN DE MERKEN DIE EEN ECHTE BAND OPBOUWEN MET HUN PUBLIEK.', note: '*Dat is wat Hilarious doet.' },
    promise: {
      title: 'EEN MERK DAT HANDELT,\nNIET ALLEEN\nEEN MERK DAT PRAAT.',
      text: 'We trekken de aandacht, wekken betrokkenheid en creëren emoties, met zorg voor onze partners en de relaties die zij met hun publiek opbouwen.',
      more: 'Een affiche opent de deur. Wij zorgen voor wat er gebeurt zodra ze open is: loyaliteitsplatformen, games, mechanismen die mensen vragen om iets te doen in plaats van te kijken. Wanneer een merk om een gebaar vraagt, verandert de aandacht van eenheid. Ze wordt geteld in minuten. Ze komt de dag erna terug. Ze heeft een voornaam.',
      results: 'Elke deelname wordt een marketingresultaat: bekendheid, dataverzameling, loyaliteit, productlancering.',
    },
    offersTitle: 'WAT WE KUNNEN DOEN\nVOOR JOUW MERK.',
    offersLead: 'Zes manieren om een publiek in een relatie te veranderen. Elk bewezen door een opgeleverd project.',
    offers: [
      { id: 'loyalty', title: 'Loyaliteitsplatformen en voordeelprogramma’s', short: 'Geef je klanten redenen om terug te komen.', who: 'Merken die al klanten hebben en ze willen houden.', when: 'Je voordelen bestaan maar blijven onbekend, of een programma verliest zijn adem.', text: 'Een wereld, een identiteit en een kalender met vaste afspraken: wedstrijden, cadeaus, content, exclusieve evenementen, verzameld op één platform dat je samen met ons doet leven.', deliver: 'Strategie en concept · Platformidentiteit · Spel- en beloningsmechanismen · Activatiekalender · Nieuwsbrief en social' },
      { id: 'play', title: 'Games, wedstrijden en gamificatie', short: 'Laten meedoen in plaats van laten kijken.', who: 'Een merk, een instelling of een medium dat deelname wil, niet alleen bereik.', when: 'Een lancering, een sensibiliseringscampagne, dataverzameling, een seizoen om te animeren.', text: 'Een game op maat, met storytelling die bij je past en een mechanisme dat één precies doel dient: informeren, kwalificeren, doen terugkomen. In eigen huis bedacht, getekend en ontwikkeld, eerst getest op smartphone.', deliver: 'Concept en scenario · Art direction en 3D · Ontwikkeling · Reglement en prijzenbeheer · Meting van de deelname' },
      { id: 'activation', title: 'Activaties en phygital ervaringen', short: 'Het terrein en digitaal vertellen hetzelfde verhaal.', who: 'Merken die hun publiek in het echt ontmoeten: winkel, festival, evenement, roadshow.', when: 'Een lancering om te laten leven, een sponsoring om te activeren, een seizoen om te bewonen.', text: 'Een ervaring die ter plaatse begint en online verdergaat, of omgekeerd: een quiz met vier in een auto, een story box gescand onder de kerstboom, een 3D-jacht op dj’s. Het gebaar van het publiek is het hart van de opzet.', deliver: 'Concept · Customer journey · Fysieke en digitale opzet · Video- en 3D-productie · Sociale activatie' },
      { id: 'campaign', title: '360°-campagnes, social en content', short: 'Eén idee, overal waar je publiek is.', who: 'Marketing- en communicatieteams die bekendheid moeten creëren, rekruteren of overtuigen.', when: 'Een schooljaar om te vullen, een product om te lanceren, een zaak om te dragen, een community om langdurig te animeren.', text: 'Video, sociale media, affichage, print, landingspagina, met een redactionele lijn en een toon die twee jaar standhouden, niet alleen één golf.', deliver: 'Strategie en inzicht · Creatief concept · Video- en motionproductie · Social media en paid · Print en affichage' },
      { id: 'digital', title: 'Websites, platformen en e-mailing', short: 'Gemaakt om te converteren, opgeleverd om te blijven.', who: 'Merken waarvan de website, de app of de e-mails een deel van het commerciële werk doen.', when: 'Een website om te herbouwen, een e-mailfunnel om te herschrijven, een platform om te bouwen, nieuwsbrieven om elke maand in meerdere talen te produceren.', text: 'Van showcasewebsite tot platform op maat, van transactionele e-mail tot maandelijkse nieuwsbrief: getest op de e-mailclients en schermen die tellen, opgeleverd met een design system dat je teams zelf laten leven.', deliver: 'UX/UI · Webontwikkeling · Design system · E-mailing en banners · Onderhoud' },
      { id: 'brand', title: 'Identiteit en design', short: 'Een merk dat je herkent. En onthoudt.', who: 'Een merk, een programma of een school dat in één oogopslag herkend moet worden.', when: 'Een identiteit om te creëren of op te frissen, een grafische wereld om neer te zetten vóór een campagne, een mascotte om tot leven te brengen.', text: 'Een positionering, dan een identiteit: logo, huisstijl, grafische wereld, tone of voice, tot en met de mascotte die community manager wordt. Eerst de inhoud, dan de vorm, altijd.', deliver: 'Positionering · Visuele identiteit · Huisstijl en guidelines · Art direction · Illustratie en 3D' },
    ],
    offerFields: { who: 'Voor wie', when: 'Wanneer', deliver: 'Wat we opleveren', proof: 'Het bewijs' },
    method: {
      title: 'OP MAAT, SAMEN,\nIN EIGEN HUIS.',
      steps: [
        ['CARE', 'Vóór elk project: de relatie.', 'Met onze klanten, met hun publiek, en onder elkaar.'],
        ['FEEL', 'Emotie creëert betrokkenheid.', 'Een merk dat geen emotie oproept, blijft een optie tussen andere, nooit een keuze.'],
        ['ENGAGE', 'Een publiek actief met een merk verbinden.', 'Een spel, een gebaar, een deelname: de relatie begint wanneer het publiek iets doet.'],
      ],
      principlesTitle: 'DRIE REGELS\nDIE NIET VERANDEREN.',
      principles: [
        ['Elke klant is uniek', 'We passen ons aan jouw noden aan, niet omgekeerd. We luisteren en dagen je processen en doelen uit.'],
        ['Co-creatie', 'Een vlotte samenwerking, voortdurend bijgestuurd om de resultaten te optimaliseren.'],
        ['Vaste PM, alles in eigen huis', 'Eén aanspreekpunt. Transparante informatiestroom. Volledige controle over de keten, van briefing tot oplevering.'],
      ],
      quote: 'Geen enkele briefing wordt ooit letterlijk uitgevoerd.',
    },
    commitments: {
      title: 'WAT WE JE BELOVEN,\nEN WAARMAKEN.',
      items: [
        ['Uitdagen met welwillendheid', 'We stellen elke briefing in vraag om de impact te maximaliseren. Nooit om het plezier van tegenspreken.'],
        ['Denken in een volledig ecosysteem', 'Geen losstaand spel. Elk mechanisme past in de opbouw van een echte customer journey.'],
        ['Totale transparantie', 'Over de resultaten. Over de mislukkingen. Over de successen. Alles wordt gezegd.'],
      ],
    },
    closing: { text: 'EEN BAND VERKONDIG JE NIET.\nDIE GA JE AAN.', cta: 'Laten we spelen, samen.' },
    agencyTitle: 'SERIEUS\nOVER ONS WERK.\nMET PLEZIER\nIN ONS HART.',
    agencyText: 'Wij zijn Hilarious. Een onafhankelijk communicatiebureau in Brussel, waar strategie, creativiteit en technologie sinds 2012 samenwerken.',
    agencyMore: 'We stellen vragen. We dagen ideeën uit. Samen met jou creëren we ervaringen die emoties oproepen en jouw doelen dienen.',
    agencyLink: 'Ontmoet het bureau',
    mission: 'Hilarious helpt merken handelen. We verhelderen hun uitdagingen en vertalen ze in ervaringen die hun publiek laten meedoen, games, loyaliteitsplatformen, activaties en campagnes, om van aandacht naar verbondenheid te gaan. Met zorg, plezier en veeleisendheid.',
    missionShort: 'Hilarious, een Brussels bureau, helpt merken handelen in plaats van praten: games, loyaliteitsplatformen en ervaringen die hun publiek laten meedoen.',
    missionLabel: 'Onze missie', valuesTitle: 'WAAR WE VOOR STAAN,\nZONDER OMWEGEN.',
    facts: [['2012', 'Opgericht in Brussel'], ['100 %', 'Onafhankelijk, zonder groep of netwerk'], ['1', 'Eén aanspreekpunt: een vaste PM per project'], ['FR · NL · EN', 'Drie werktalen, e-mailings geleverd in elf landen']],
    clients: 'Ze vertrouwden ons een game, een platform of een campagne toe: Proximus, L’Oréal Luxe, Toyota, Bic, Lyreco, Cofidis, Fost Plus, HE2B, CAD, Equal Brussels, Lumos.',
    values: [
      ['Menselijk', 'We behandelen mensen als mensen, niet als KPI’s: de klant, zijn publiek, het team. We bellen voor men ons belt, en we zeggen nee wanneer wat gevraagd wordt schade zou doen.'],
      ['Professioneel', 'Onberispelijk in de uitvoering, dat is wat ons de vrijheid geeft in toon. Een beloofde datum wordt gehaald, een ongecontroleerd cijfer gaat niet buiten.'],
      ['Ethisch', 'We zeggen nee tegen briefings waar we ons niet goed bij voelen, en we staan erachter. De eerste vergadering dient om vragen te stellen, niet om te presenteren.'],
      ['Grappig', 'Humor is onze handtekening, geen accessoire. Hij mikt op een waarheid, niet op een like. Als het team er geen plezier aan beleeft, zal het publiek dat ook niet.'],
      ['Tech-nuchter', 'AI als werktuig, nooit als gadget of als bedreiging. We proberen wat we nog niet kennen, en wij tekenen wat naar buiten gaat, niet het werktuig.'],
    ],
    faqServices: [
      ['Welke projecten vertrouwt men aan Hilarious toe?', 'Loyaliteitsplatformen en voordeelprogramma’s, games en wedstrijden, activaties op het terrein en online, 360°-campagnes, websites en e-mailings, en het identiteitswerk dat eraan voorafgaat. De rode draad: een publiek laten meedoen in plaats van laten kijken.'],
      ['Wat is het verschil tussen een wedstrijd en een loyaliteitsplatform?', 'Een wedstrijd creëert een piek van deelname rond één moment. Een loyaliteitsplatform creëert vaste afspraken: het verzamelt voordelen, games en content in een duurzame wereld, zodat klanten terugkomen. We doen beide, en vaak voedt het eerste het tweede.'],
      ['Ontwikkelen jullie in eigen huis?', 'Ja. Strategie, creatie, design, ontwikkeling en motion zitten in het team, met een vaste PM als enig aanspreekpunt. Zo kunnen we een game al in de eerste weken op een smartphone testen en de deadlines halen.'],
      ['Hoe meten jullie het resultaat?', 'Aan het gedrag dat we vooraf bepalen: deelnames, bestede tijd, verzamelde data, inschrijvingen, terugkeer. Deelname meet betrokkenheid; loyaliteit toets je op langere termijn, met je gegevens over terugkerend gebruik.'],
      ['In welke talen en voor welke markten?', 'In het Frans, het Nederlands en het Engels, voor Belgische en Europese klanten. Onze e-mailings worden elke maand in een tiental landen geproduceerd, elk in zijn eigen taal.'],
    ],
    faqAbout: [
      ['Wie is Hilarious?', 'Een onafhankelijk communicatiebureau, opgericht in 2012 in Brussel en geleid door medeoprichter Audry Van Essche. Het ontwerpt loyaliteitsplatformen, games, activaties en campagnes voor merken als Proximus, L’Oréal Luxe, Toyota en Bic, met een intern team dat strategie, creatie, design en ontwikkeling dekt.'],
      ['Waar zijn jullie gevestigd?', 'In Brussel, Jules Cockxstraat 10, in Oudergem. Onze klanten zitten in België en Europa, en we produceren in het Frans, het Nederlands en het Engels.'],
      ['Hoe verloopt een eerste ontmoeting?', 'We luisteren, we stellen vragen, en we vertrekken met een duidelijke uitdaging in plaats van een briefing om uit te voeren. Een doelgroep, een doel en een timing volstaan om het gesprek te beginnen.'],
    ],
    caseFields: { brief: 'In het kort', client: 'Klant', sector: 'Sector', challenge: 'De uitdaging', answer: 'Ons antwoord', outcome: 'Wat we onthouden', expertises: 'Ingezette expertise', related: 'In dezelfde lijn' },
    briefTitle: 'Nieuwe aanvraag',
    briefHeading: 'VERTEL ONS\nWAT JE WILT\nLATEN BEWEGEN.', briefIntro: 'Drie velden volstaan. We antwoorden met vragen, niet met een offerte.',
    briefGoals: ['Mijn klanten binden', 'Mijn publiek laten spelen', 'Mijn merk activeren op het terrein', 'Een campagne lanceren', 'Een website of e-mails vernieuwen', 'Aan mijn identiteit werken', 'Iets anders'],
    contactTitle: 'MAKEN WE\nSAMEN IETS\nBIJZONDERS?', contactText: 'Een uitgewerkte briefing of een eerste idee? Laten we praten.',
    email: 'Schrijf ons', phone: 'Bel ons', find: 'Kom langs',
    back: 'Terug naar projecten', related: 'NOG EEN\nGOED IDEE.', projectLabel: 'Het project', overview: 'Onze aanpak', menu: 'Menu openen', close: 'Menu sluiten', skip: 'Naar de inhoud',
    footer: 'Ervaringen. Emoties. Resultaten.', home: 'Home', since: 'Onafhankelijk. Nieuwsgierig. Sinds 2012.', archive: 'Al onze projecten', notfound: 'Deze pagina koos een andere weg.', returnHome: 'Terug naar de homepage', follow: 'Volg ons',
    meta: {
      home: ['Hilarious · Creatief bureau in Brussel: games, loyaliteit, merkervaringen', 'Hilarious ontwerpt loyaliteitsplatformen, games en merkervaringen die de aandacht trekken en vasthouden. Onafhankelijk bureau in Brussel sinds 2012.'],
      services: ['Expertise: gamificatie, loyaliteit, activatie, campagnes', 'Zes manieren om een publiek in een relatie te veranderen: loyaliteitsplatformen, games en wedstrijden, phygital activaties, 360°-campagnes, websites en e-mailing, identiteit. Elk bewezen door een opgeleverd project.'],
      cases: ['Projecten: ons werk voor Proximus, L’Oréal, Toyota, Bic en anderen', 'Vijftien projecten die tonen wat we doen: loyaliteitsplatformen, games, activaties, campagnes en websites, voor Belgische en internationale merken.'],
      about: ['Het bureau: onafhankelijk, in Brussel, sinds 2012', 'Hilarious is een onafhankelijk communicatiebureau in Brussel. Strategie, creatie, design en ontwikkeling in eigen huis, een vaste PM per project, en één overtuiging: een band verkondig je niet, die ga je aan.'],
      contact: ['Contact: laten we over je project praten', 'Een uitgewerkte briefing of een eerste idee? Schrijf ons of vertel wat je met je merk wilt laten evolueren. Hilarious, Jules Cockxstraat 10, 1160 Brussel.'],
      caseSuffix: 'Klantcase',
    },
  },
};

export const route = (l: Locale, p = '') => `/${l}/${p}${p ? '/' : ''}`;
