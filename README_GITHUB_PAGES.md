# OBY MultiSERVICES — Préparation GitHub Pages (APERÇU STATIQUE)

**Statut : non déployé / aucune publication réalisée.**

Ce projet est destiné à un **dépôt séparé consacré UNIQUEMENT aux pages statiques**. Il ne doit pas être mélangé avec le dépôt privé du moteur 07. Il ne contient aucune API, SQLite, clé, donnée client ni formulaire fonctionnel.

## Avertissement GitHub Pages
GitHub Pages est généralement public même si son dépôt est privé ; `noindex` et `robots.txt` n’assurent pas une protection d’accès.
Sur GitHub Free, Pages doit être associé à un dépôt public. Une préproduction réellement privée nécessite un autre mode de protection (p. ex. Cloudflare Access).
Ce paquet est un aperçu du projet et **n'autorise pas une ouverture commerciale** (`GLOBAL_COMMERCIAL_GO=false`).
Les rubriques juridiques non validées ont été remplacées par des pages neutres.

## Après création explicite d'un dépôt dédié (pas maintenant)
- Envoyer uniquement les fichiers `docs/` et ce README dans un dépôt distinct de BlueWave et du site académique.
- Paramétrer *Settings > Pages > Build and deployment > Deploy from a branch > main > /docs*, puis enregistrer.
- Ne jamais téléverser `moteur_07_v4/`, `local_only/`, `*.sqlite`, fichiers `.env` ou l'archive V7 originale dans un dépôt public.
- Cette procédure rendrait l'aperçu **public**, à n'effectuer que sur décision explicite après vérification des obligations du site publiquement accessible.

## Local
```bash
python3 -m http.server 8000 --directory docs --bind 127.0.0.1
```
Ouvrir http://127.0.0.1:8000/

## Domaine / indexation
Aucun domaine ni service de collecte. Les métadonnées `noindex` et `robots.txt` limitent l'indexation mais **ne protègent pas** les contenus.
