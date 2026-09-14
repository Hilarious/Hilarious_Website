# Notes de reprise développeur — Hilarious V16

État documenté le 14 septembre 2026, à partir du code et de la dernière session de vérification. Commit livré : `fa8c45fae72a14f372285c7c4bb60a4c86a13927`. Les sources sont une copie exacte des fichiers versionnés de ce commit. Les présentes notes sont ajoutées au package, pas au site publié.

## 1. Intention à préserver

Il s'agit d'un refresh graphique de l'expérience Hilarious et d'une nouvelle stack pour le référencement, sans CMS. Le client a refusé une transformation en site d'agence générique.

- Conserver la découverte par les portes, les univers clients et la fluidité des transitions. Le concept doit être vécu, pas expliqué dans les textes.
- L'écran bleu « Bienvenue chez Hilarious » a été supprimé du parcours. Ne pas le réintroduire. Ses anciens assets restent présents dans les sources.
- Ne pas réintroduire « Une réalisation, un autre univers. ».
- Conserver le vrai logo `public/logo-transparent.png` et le ballon placé à droite sur smartphone.
- Accueil jaune continu, texte violet, accent manuscrit rose. Flèches dessinées fines ; aucun emoji flèche dans un carré gris.
- Le parcours doit montrer les réalisations et les preuves, puis conduire à une prise de contact pertinente pour des responsables marketing et communication.
- Positionnement retenu : plateformes de fidélité, expériences de marque et histoires singulières ; capacité à capter et garder l'attention.
- Formulations validées : « Découvrez ce que nous créons pour nos clients. » et « Que souhaitez-vous faire évoluer avec votre marque ? ».

Figma de référence : https://www.figma.com/design/Gl8aUvLu3gVABnWw5G8j24/Hilarious-Web-Design-System?node-id=0-1

Le fichier Figma n'est pas embarqué. Le README historique indique qu'une couverture seulement avait été accessible lors de l'implémentation ; ne pas considérer les pages comme une reproduction intégrale validée d'une maquette Figma. Demander les accès et faire valider la direction artistique finale.

## 2. Stack et exécution

| Élément | État livré |
| --- | --- |
| Application | Next.js 16.3.5, React / React DOM 19.2.0 |
| Langage | TypeScript, version résolue verrouillée par package-lock.json |
| Styles | CSS du projet, outillage Tailwind 4 / PostCSS installé |
| Rendu | `output: 'export'`, slash final, images non optimisées par Next |
| Contenu | Modules TypeScript et JSON, aucun CMS / DB |
| Langues | FR, EN, NL |
| Développement | `npm ci`, puis `npm run dev` |
| Production | `npm run build` produit `out/` |
| Variable métier | `SITE_INDEXABLE`, lue à la compilation |

`npm run dev` appelle `scripts/dev.mjs`, un wrapper local du CLI Next (webpack, traduction des paramètres de preview). Il n'a pas besoin d'un outil ChatGPT pour fonctionner. Il écoute par défaut sur 0.0.0.0 ; pour limiter à la machine, utiliser `npm run dev -- --hostname 127.0.0.1`.

Aucun secret n'est requis pour développer ou compiler. `SITE_INDEXABLE` doit rester absente ou false en recette. Toute modification de contenu ou de cette variable nécessite un nouveau build et redéploiement. Pas d'ISR, pas de rafraîchissement depuis une base.

Le script `start` existant lance `next start` : il n'est pas le serveur de l'export statique. Servir `out/` avec l'hébergement statique choisi ou un serveur HTTP local.

## 3. Carte du code

| Fichier / dossier sous source/ | Rôle et points d'entrée |
| --- | --- |
| `app/[locale]/[[...slug]]/page.tsx` | Routes générées, métadonnées par page, canonical et hreflang |
| `app/[locale]/layout.tsx`, `app/(home)/layout.tsx` | Layouts racines, langues, import des styles et polices |
| `app/site.tsx` | Navigation, pages éditoriales, grille projets, fiches clients et footer |
| `app/door-experience.tsx` | Scènes, ordre de galerie, lien vers chaque cas, découpes SVG des décors |
| `public/door-motion.js` | Contrôleur progressif : ouverture, déplacement, glissement, clavier, fragments, mouvement réduit |
| `app/doors.css` | Géométrie des scènes, sprites, transitions et adaptations mobiles |
| `app/globals.css` | Styles généraux et composants éditoriaux |
| `app/loyalty.tsx`, `app/loyalty.css` | Pages et blocs fidélisation, liens vers le brief |
| `app/layout-fixes.css` | Correctifs responsive ; importé après les autres styles |
| `app/lead-brief.tsx` | Formulaire client, préparation mailto, copie du brief |
| `lib/cases.json` | 15 réalisations par langue : client, titre, tags, paragraphes, image, URL source |
| `lib/content.ts` | Textes et navigation généraux FR/EN/NL |
| `lib/loyalty.ts` | Textes fidélité, preuves, FAQ et formulaire FR/EN/NL |
| `lib/seo.ts` | Origine, indexation, inventaire d'URLs et schéma ProfessionalService |
| `app/sitemap.ts`, `app/robots.ts`, `app/llms.txt/route.ts` | Fichiers générés au build |
| `public/doors/` | Murs, sols, décors transparents et sprites historiques |
| `public/images/`, `public/fonts/` | Visuels clients et polices locales |
| `migration/` | Base de redirections à compléter et adapter à l'hôte |

L'ordre d'import CSS est globals → doors → loyalty → layout-fixes. De nombreux ajustements successifs existent ; éviter d'ajouter encore des overrides aveugles. Une consolidation doit préserver des captures de référence avant/après.

## 4. Parcours et scènes

Les pages `/fr/`, `/en/`, `/nl/` donnent accès aux projets, services, agence, contact et fidélisation (`/loyalty/`). Quinze fiches sont accessibles par langue sous `/case/<slug>/`. La racine `/` est française dans cette proposition.

| Fragment | Scène | Destination relative à la langue |
| --- | --- | --- |
| `#door-1` | Proximus for You | `case/proximusforyou/` |
| `#door-2` | HE2B | `case/he2b/` |
| `#door-3` | Bic | `case/bic/` |
| `#door-4` | Lumos | `case/lumos/` |
| `#door-5` | Equal Brussels | `case/equalbrussels/` |
| `#door-6` | Lyreco | `case/lyreco/` |
| `#door-7` | CRM Services | `case/crmservices/` |
| `#door-8` | Contact | `contact/` |

Les 8 autres fiches sont CAD, Cofidis, Fost Plus, Swan Lake, Tomorrowland (`tml`), Red Devils, Toyota et With Love. Elles n'ont pas de scène dédiée. Leur retour actuel au parcours mène par défaut à la première scène : choix à améliorer si besoin, sans inventer de scènes.

Si l'ordre des scènes change, mettre à jour aussi le tableau de retour dans `app/site.tsx`. Le compteur est calculé depuis la liste. Vérifier deep links, retour navigateur et restauration de position après chaque changement.

### Géométrie des décors — attention particulière

V16 remplace le placement global de plusieurs PNG par des fenêtres SVG sur les assets existants (`decor` et `SceneDecor`). Chaque fenêtre possède des coordonnées source x/y/largeur/hauteur et un rôle `.wall-left`, `.wall-right`, `.floor-left`, `.floor-right` ou `.floor-box`.

- Les images sources sont en 1920 × 1426, avec beaucoup de transparence : leur boîte complète n'est pas la taille du sujet visible.
- Les SVG utilisent `preserveAspectRatio="xMidYMax meet"`. Le bas visible et le ratio doivent rester cohérents avec le mur, la porte et le sol.
- HE2B : les deux rangées de compartiments appartiennent au PNG original. V16 affiche le meuble entier au lieu de couper sa moitié inférieure. Ce n'est pas un nouvel objet dupliqué ; faire valider ce choix visuel au client, qui avait signalé des « armoires en double ».
- Lyreco : affiche, boîte aux lettres, colis et camion ont des fenêtres distinctes. Ne pas inclure un morceau de l'affiche dans celle du mobilier.
- Proximus : les deux ensembles de cadres sont placés au mur. Sur mobile, la densité du montage limite encore la taille de chaque vignette ; une direction artistique mobile dédiée reste envisageable.
- Le sprite générique historique reste utilisé sur plusieurs cas, avec un visuel projet derrière à l'ouverture ; CRM et contact utilisent leurs propres sprites.
- Ne pas redimensionner non proportionnellement les objets pour corriger leur placement. Tester chaque modification sur les autres scènes et les formats intermédiaires.

Les sprites, transitions natives entre documents et filtres SVG doivent être testés sur Safari/iOS réel. Le mouvement est une amélioration progressive ; les liens de navigation ne doivent jamais dépendre uniquement de l'animation.

## 5. Leads : état réel, intégration attendue

Le formulaire prépare un `mailto:curious@hilarious.be` avec le brief et propose une copie du texte. Il ne transmet rien à un serveur, n'enregistre rien dans un CRM et ne prouve pas la réception. Ne pas présenter l'ouverture du logiciel mail comme une conversion réussie.

Pour une réception automatique, le développeur devra choisir avec l'agence un endpoint/service approuvé, ajouter validation serveur, protection antispam, gestion des erreurs, notification, règles de conservation et confirmation de réception réelle. Un endpoint externe est compatible avec l'export statique. Un endpoint Next interne implique une évolution du mode d'hébergement ; il ne fonctionne pas comme route serveur dans l'export actuel.

Aucun analytics, pixel marketing ou consentement associé n'est intégré. Événements suggérés après choix de l'outil : consultation d'un cas, ouverture du brief, soumission, réception confirmée. Ne pas envoyer le texte libre ni l'e-mail à l'analytics.

## 6. SEO et bascule

La préversion est PUBLIQUE sur le domaine de partage, mais NON INDEXABLE. Public et indexable sont deux états différents. L'export fourni contient cette configuration de recette.

- Par défaut : noindex/nofollow, robots bloqués, sitemap vide.
- Au build final uniquement : `SITE_INDEXABLE=true npm run build` (shell POSIX ; utiliser la configuration d'environnement de la CI pour les autres systèmes).
- `origin` vaut `https://hilarious.be` dans `lib/seo.ts`. Des URLs sont aussi écrites directement dans le générateur de métadonnées : revoir les deux si le domaine change.
- Métadonnées, canonical et hreflang existent. Il reste à ajouter/vérifier les images Open Graph par projet ; elles ne sont pas renseignées dans le générateur livré.
- Sitemap et llms.txt sont générés depuis le code à chaque build ; ils ne se mettent pas à jour seuls en production.
- Le schéma décrit l'agence via ProfessionalService. Les schémas spécifiques aux cas et FAQ ne constituent pas un travail terminé.
- Les redirections de `migration/` ne sont pas appliquées automatiquement par Next en export statique. Les configurer sur l'hôte et tester les chaînes/boucles, notamment avec la normalisation des slashs.
- L'inventaire initial ne remplace pas un export Search Console. Valider le choix de langue de la racine, les anciennes URLs anglaises et les backlinks.
- Confirmer accès registrar/DNS, sauvegarde de l'ancien site et calendrier. Préserver les enregistrements de messagerie MX/SPF/DKIM/DMARC.

Ne déployer que le contenu de `out/` (ou `export-statique/` pour consulter cette préversion). Ne jamais publier la racine du ZIP ou `source/` comme dossier web.

## 7. Hébergement et provenance

Préversion : https://hilarious-refonte.ohhdry.chatgpt.site/fr/

Dernière publication confirmée : version 16, statut de déploiement succeeded. Le contrôle visuel public final n'a pas abouti dans le navigateur de vérification ; cela n'est pas une recette complète de production.

`source/.openai/hosting.json` garde l'identifiant du projet Sites et `static.directory: out`. Ce fichier n'est pas une clé d'accès. Le ZIP est autonome pour le développement et l'hébergement statique ailleurs, mais ne transfère pas les droits d'administration du projet Sites. Les transferts d'accès doivent être réalisés séparément par le propriétaire.

Les fichiers Git internes et dépendances installées sont exclus ; initialiser un dépôt chez l'agence à partir de `source/` si nécessaire. Le lockfile est conservé. Les assets proviennent du site historique et des éléments utilisés pendant la refonte ; leurs droits et licences de polices restent à confirmer pour la livraison finale. Aucun contrat/licence n'est ajouté ou supposé dans cette archive.

Le README historique mentionne encore « privé », « neuf univers », « accueil blanc » et « aucun chiffre ajouté ». Ces passages sont dépassés : retenir les présentes notes. `lib/loyalty.ts` affiche 14 millions de participations et 1 min 45 s, issus des informations communiquées par le client. Faire valider le périmètre et la période avant publication commerciale définitive.
