# Recette et priorités de reprise

## État des vérifications à la livraison

| Contrôle | Résultat / limite |
| --- | --- |
| Build du commit livré | Réussi : compilation, TypeScript et génération de 69 pages |
| 45 fiches FR/EN/NL | Présence des pages, des ressources et des liens locaux contrôlée sur l'export |
| 7 scènes clients + contact | Inspection visuelle locale desktop/mobile ; corrections de géométrie V16 |
| 15 fiches FR | En-têtes inspectés en desktop/mobile ; contenu inférieur contrôlé ponctuellement, pas capture exhaustive de chaque page entière |
| Traductions EN/NL | Contrôle structurel ; recette linguistique et visuelle exhaustive non effectuée |
| Navigation de galerie | Passage au cas suivant vérifié ; pas de mesure de fréquence d'images |
| Appareils | Émulation par fenêtres de navigateur/iframes ; pas de recette sur iPhone physique |
| Publication | V16 confirmée publiée ; dernière ouverture dans le navigateur public restée incomplète |
| Réception de leads | Non implémentée côté serveur ; mailto seulement |
| Galleries/vidéos historiques | Migration complète non réalisée ; textes et premières images repris |
| Domaine hilarious.be / DNS | Pas de bascule effectuée |

Ces vérifications ne valent pas une validation artistique finale du client. Ne pas annoncer « tout est corrigé » sans repasser les scènes sur les appareils cibles.

## Ordre de reprise proposé

### P0 — avant partage commercial définitif

- [ ] Ouvrir le ZIP, installer avec npm ci, lancer le build ; conserver le lockfile.
- [ ] Faire valider HE2B (meuble entier à deux rangées), la taille des montages Proximus et les proportions mobiles.
- [ ] Repasser les 8 scènes à 360, 390, 430, 768, 1024 et 1440 px, en portrait et paysage.
- [ ] Vérifier cadres au mur, base du mobilier au sol, absence d'objets coupés ou dédoublés par une fenêtre source.
- [ ] Vérifier la lisibilité des titres longs en FR/EN/NL, sans collision avec une porte ou les commandes.
- [ ] Vérifier Safari iOS réel et Chrome desktop : sprites, filtre du jaune, glissement, transitions, retour arrière.
- [ ] Raccorder et tester réellement la réception des demandes si le site doit collecter automatiquement des leads.
- [ ] Valider contenus, preuves chiffrées, traductions, coordonnées et droits des visuels/polices.

### P1 — avant bascule SEO

- [ ] Compléter l'inventaire avec Search Console, sitemap ancien et URLs de campagnes.
- [ ] Décider de la langue de `/`, vérifier canonical/hreflang/x-default et les images Open Graph.
- [ ] Installer les redirections sur l'hôte, puis tester chaque source vers sa cible, sans boucle.
- [ ] Organiser sauvegarde et bascule web, en préservant la messagerie.
- [ ] Compiler avec SITE_INDEXABLE=true uniquement pour le domaine final, puis vérifier robots, sitemap et métadonnées réellement servis.
- [ ] Tester 404 et absence de fichiers internes publiés. Ne servir que l'export.
- [ ] Contrôler une demande réelle depuis un smartphone sans client mail configuré si une intégration automatique est ajoutée.

### P2 — maintenance et qualité

- [ ] Consolider les overrides CSS à partir de captures validées, sans modification globale des décors.
- [ ] Centraliser la correspondance scène/slug utilisée aussi par les liens retour.
- [ ] Améliorer le retour des fiches sans scène dédiée et la sélection des projets liés (actuellement premiers cas disponibles).
- [ ] Compléter les galeries et vidéos des cas prioritaires si l'agence le souhaite.
- [ ] Mesurer chargement, poids des sprites, performances et stabilité visuelle sur réseau mobile réel.
- [ ] Tester clavier, focus, mouvement réduit, zoom texte 200 % et lecture sans JavaScript.
- [ ] Mettre en place les événements de conversion uniquement après choix et validation de la solution de collecte.

## Jeu de recette minimum

1. Depuis l'accueil, entrer dans la galerie, passer tous les cas puis revenir avec les flèches et le clavier.
2. Ouvrir chaque lien #door-N directement ; comparer scène affichée, compteur et URL cible.
3. Entrer dans un projet puis revenir : retrouver le bon cas, sans animation bloquée.
4. Cliquer rapidement plusieurs fois, glisser dans les deux sens et tester les limites de la galerie.
5. Refaire en mouvement réduit, puis sans JavaScript pour les liens de navigation.
6. Ouvrir chaque fiche via son URL directe et depuis la grille ; descendre jusqu'au brief et au footer.
7. Contrôler le formulaire vide, les champs invalides, la copie du brief et les messages d'erreur. Ne pas confondre préparation d'e-mail et réception.
8. Après déploiement : recommencer sur l'URL finale, consulter les logs du nouveau build, contrôler les redirections et les pages 404.
