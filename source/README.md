# Hilarious — préversion de refonte

Next.js 16, React 19, Tailwind 4. Export statique, sans CMS ni base. Le contenu et les visuels sont versionnés. Toute modification nécessite un build et un redéploiement.

## Référence visuelle et périmètre

Figma : https://www.figma.com/design/Gl8aUvLu3gVABnWw5G8j24/Hilarious-Web-Design-System?node-id=0-1

Au 12 septembre 2026, le fichier accessible contient uniquement la page Cover et le frame 2:122. Éléments observés : jaune #FCF628, noir, Barlow Condensed Black (titres), Barlow Regular (texte), Caveat Regular (annotations). Les compositions de pages sont des propositions originales à valider, pas des maquettes présentes dans le fichier. Le mot-symbole typographique est une proposition ; le monogramme H! est issu de la couverture.

Accueil, expertises, agence, contact et 15 réalisations en FR/EN/NL. Les paragraphes et premiers visuels des réalisations proviennent du site actuel ; lib/cases.json garde les URL sources. La copie des pages principales et les regroupements d’expertises sont proposés pour cette refonte. Vérifier les dates, informations d’équipe et résultats historiques avant bascule. Le portfolio conserve le texte des études de cas ; les galeries et vidéos originales ne sont pas intégralement migrées dans cette préversion.

Les polices sont hébergées localement. Aucun pixel marketing, analytics, cookie de suivi ni backend ajouté. Le brief guidé prépare un e-mail dans la messagerie du visiteur et propose une copie du texte. Il ne transmet ni ne stocke automatiquement les demandes ; l’envoi reste à effectuer par le visiteur. Aucun succès de livraison n’est simulé.

## Parcours fidélisation

Page /fr/loyalty/ et équivalents EN/NL : promesse, besoins, preuve Proximus, approche, FAQ et brief. Liens depuis l’accueil, la navigation, les services, les projets et le contact. Titres, descriptions, canonical, hreflang et inventaire sitemap incluent ces pages. Préversion toujours non indexable.

Les éléments de preuve Proximus reprennent le contenu existant de lib/cases.json. Aucun chiffre de performance, témoignage ou résultat de rétention non documenté n’est ajouté. Faire valider une fiche de résultats datée avant d’enrichir le cas.

Réception automatique à raccorder avant la bascule commerciale : endpoint approuvé de formulaire ou CRM, validation serveur, antispam, notifications, règles de conservation et test de réception réel. Aucun service tiers ni clé d’envoi n’est configuré dans cette préversion. Pour la mesure, distinguer ouverture du brief, tentative d’envoi, réception confirmée et opportunité qualifiée ; ne pas compter un clic mailto comme un lead reçu.

## Commandes

`npm ci`, `npm run dev`, `npm run build`. L’export public est dans out/. Le serveur de développement accepte aussi les paramètres de prévisualisation supervisée via scripts/dev.mjs.

## SEO et publication

Par défaut, toutes les pages sont noindex/nofollow, robots.txt bloque les robots et le sitemap est vide. La préversion est privée. Après bascule et contrôles seulement, SITE_INDEXABLE=true active les pages indexables, le sitemap et robots.txt. Ne jamais activer cette variable sur le domaine de prévisualisation. Les canonical/hreflang ciblent le futur domaine hilarious.be.

Le sitemap est recalculé à chaque build depuis les données en code. Pas de lastModified inventé. llms.txt est généré depuis la même source. Son existence ne garantit pas une citation par les moteurs IA. Schema.org décrit l’agence ; il ne garantit ni classement ni visibilité dans les réponses IA. Aucun EducationalOrganization/Course n’est utilisé pour cette agence.

Les redirections sont dans migration/redirects.csv et migration/_redirects, à appliquer sur l’hébergement final. Les URL FR/NL existantes sont conservées (avec slash final), les URL anglaises sans préfixe passent sous /en/. La racine reste française dans cette proposition : valider ce choix avant migration. Une redirection de la racine vers /en/ serait requise pour préserver strictement son ancienne langue. L’inventaire est issu des liens publics explorés ; il n’est pas un audit exhaustif Search Console et doit être complété avec les exports du propriétaire.

## Bascule restant à réaliser

- Confirmer propriétaire/accès registrar, gestionnaire DNS, hébergement et calendrier.
- Sauvegarder les fichiers et la base de l’ancien site.
- Compléter l’inventaire avec sitemap et Search Console ; traiter les URL à trafic/backlinks.
- Valider contenus, traductions, identité, portfolio et éventuelle migration des galeries/vidéos.
- Appliquer les redirections sur l’hébergement final ; l’export Next.js n’exécute pas redirects().
- Modifier uniquement les enregistrements web nécessaires ; préserver la messagerie et ses enregistrements.
- Vérifier les pages sur le domaine final, redirections, erreurs 404, formulaires éventuels et suivi si ajouté.
- Activer l’indexation uniquement sur le domaine final et soumettre le sitemap.
- Vérifier que /.env, /package.json, /CLAUDE.md et autres fichiers de travail ne sont pas exposés.

Aucun accès DNS, registrar ou messagerie n’a été utilisé. hilarious.be n’a pas été modifié.

## V2 — refresh de l’expérience des portes

L’accueil conventionnel de la V1 est remplacé par une porte d’entrée et une galerie horizontale de neuf univers : agence, Proximus for You, HE2B, Bic, Lumos, Equal Brussels, Lyreco, emailing, contact. Les décors et sprites d’ouverture proviennent du site original et sont conservés localement dans public/doors. Les liens réels, le scroll natif et les fragments URL assurent l’accès avant hydratation et sans JavaScript ; les animations CSS/React enrichissent le parcours. Réduction des mouvements respectée. Le jaune pâle de la scène d’entrée est conservé dans l’image originale ; le nouveau jaune #FCF628 structure la navigation et la typographie.

Les pages de contenu restent directement accessibles et possèdent un retour aux portes. La V1 reste dans l’historique Git et la version de publication précédente.


### Ajustement après retour sur la V2

- Logo officiel transparent récupéré sur https://hilarious.be/Content/img/logo-transparent.png, réutilisé sans redessin dans les en-têtes, pieds de page et présentation agence.
- Accueil blanc, violet/rose/turquoise, jaune #FCF628 en accent unique. Le jaune intégré au JPEG de la porte est supprimé à l’affichage par un filtre SVG de chrominance ; le sprite source est inchangé. Cela remplace le maintien du jaune historique décrit pour la V2.
- Contrôleur de mouvement progressif indépendant de l’hydratation : déplacement interpolé, commandes fixes, préchargement mis en cache des univers voisins, légère parallaxe, ouverture des sprites par transformation, zoom et fondu vers la page projet. Les liens réels sont conservés en HTML.
- Le retour depuis un projet retrouve sa porte. Le mode mouvement réduit supprime les déplacements animés.
- Validation : génération statique complète et contrôle des références locales. Fluidité perceptive et rendu du détourage restent à apprécier sur les appareils réels ; aucune mesure de fréquence d’images n’a été effectuée.


### Finition du parcours

L’accueil retrouve une surface jaune #FCF628 continue avec typographie violette et un accent manuscrit rose. Les titres multicolores de l’itération précédente sont remplacés. Les aperçus des sept projets sont intégrés derrière les portes. L’ouverture reprend le frame courant du survol ; elle ne repasse plus par la position fermée. Suppression du rideau blanc avant navigation et ajout de transitions natives entre documents (amélioration progressive, navigation normale sur navigateurs non compatibles). Déplacement à la souris avec projection vers la porte voisine ; boutons et clavier conservés. Annulation des animations et opérations différées lors d’un retour.

Vérification du contrôleur dans un environnement DOM simulé : clics rapides, limites de galerie, mouvement réduit et annulation au retour. Build complet réussi. Les comportements visuels et la fréquence d’images ne sont pas mesurés sur navigateur réel dans cette itération.
