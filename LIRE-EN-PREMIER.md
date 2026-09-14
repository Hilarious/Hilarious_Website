# Hilarious — package de reprise V16

Livraison du 14 septembre 2026. Source : `fa8c45fae72a14f372285c7c4bb60a4c86a13927`.

- `source/` : code source complet versionné, assets, polices, dépendances verrouillées et fichiers de migration.
- `export-statique/` : build de préversion, non indexable, consultable sans compiler.
- `docs/REPRISE-DEVELOPPEUR.md` : documentation technique et décisions de conception.
- `docs/RECETTE-ET-PRIORITES.md` : état des vérifications et travail restant.
- `SHA256SUMS.txt` : empreintes de tous les fichiers livrés, hors ce manifeste lui-même.

**Commencer par les deux documents dans `docs/`.** Le README dans `source/` conserve l'historique des itérations ; ses descriptions ne sont pas toutes à jour.

## Lancer le code

Prérequis : Node.js et npm. L'environnement de préparation utilise Node 24.19.0 ; les versions des dépendances sont dans package-lock.json.

```sh
cd source
npm ci
npm run dev
```

Ouvrir http://localhost:3000/fr/.

```sh
npm run build
python3 -m http.server 8080 --directory out
```

Ouvrir http://localhost:8080/fr/. **Ne pas utiliser `npm start` pour cet export statique** : le script hérité lance `next start`, qui ne correspond pas à ce mode de livraison.

## Consulter le build fourni

Depuis le dossier Hilarious-V16, avec Python 3 installé :

```sh
python3 -m http.server 8080 --directory export-statique
```

Les chemins d'assets sont absolus : servir le dossier à la racine d'un serveur HTTP ; ne pas ouvrir index.html en file://, ni héberger sous un sous-dossier sans adaptation.

Préversion publiée : https://hilarious-refonte.ohhdry.chatgpt.site/fr/

Cette archive ne contient ni node_modules, ni historique Git, ni clés d'accès. L'accès au site publié ne donne pas accès à son administration. Le domaine historique hilarious.be n'a pas été migré.
