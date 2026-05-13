# Passation complete - Projet Pose d'Aura

Ce fichier sert de recapitulatif complet pour reprendre le projet dans ChatGPT Codex Web.
Il resume le contexte, les choix faits, l'etat actuel du site, les validations deja realisees et les points restants.

## 1. Identite du projet

- Nom du site : Pose d'Aura.
- Activite : manucure / onglerie.
- Zone : alentours de Colmar.
- Prestation : chez elle et a domicile.
- Langue : francais uniquement.
- Style vise : chic, girly, luxe, raffine, feminin, premium.
- Ambiance : beige nude, noir, champagne, lumiere douce, effet showroom/projecteurs.
- Couleur principale : `#e1d8cf`.
- Couleur secondaire : noir.
- Typographie : fine, elegante, avec de l'italique pour les grands titres et accents.
- A eviter : rose bonbon, cartoon, rendu enfantin, site trop generique.

## 2. Contraintes strictes

- Site statique uniquement.
- HTML, CSS et JavaScript vanilla.
- Aucun backend.
- Aucun framework : pas de React, Next.js, Vue, etc.
- Aucun systeme de reservation maison.
- La reservation renvoie vers Instagram.
- Ne pas modifier les textes, tarifs ou lien Instagram sans demande explicite.
- Ne pas refaire le design : les futures interventions doivent rester ciblees.
- Ne pas ajouter de dependance lourde.
- Ne pas utiliser Three.js, WebGL ou vraie 3D.

## 3. Lien Instagram

Le lien Instagram centralise actuel est dans `script.js` :

```js
// À remplacer par le vrai lien Instagram si différent.
const INSTAGRAM_URL = "https://www.instagram.com/posed_auraa/";
```

Tous les liens ayant `data-instagram-link` sont mis a jour par cette constante.
Ne pas revenir au lien avec tiret `posed-auraa`.
Ne pas remettre l'ancien placeholder `POSEDAURAA_A_REMPLACER`.

## 4. Structure actuelle du projet

Racine du projet :

```text
Projet,posed/
  index.html
  styles.css
  script.js
  README.md
  DEPLOYMENT.md
  CHECKLIST.md
  PROGRESS.md
  HANDOFF_CODEX_WEB.md
  assets/
  Les_ongles/
```

Fichiers principaux :

- `index.html` : structure one-page du site.
- `styles.css` : design complet, responsive, animations, hero, galerie, tarifs, reservation.
- `script.js` : lien Instagram centralise, scroll fluide, interactions hero, fallback galerie, reveal au scroll.
- `README.md` : instructions simples d'ouverture et de maintenance.
- `DEPLOYMENT.md` : instructions Netlify/Vercel.
- `CHECKLIST.md` : validations techniques et visuelles documentees.
- `PROGRESS.md` : historique des checkpoints et corrections.

## 5. Structure assets

Production :

```text
assets/
  favicon.svg
  og-pose-aura.svg
  pose-1.svg
  pose-2.svg
  pose-3.svg
  pose-4.svg
  pose-5.svg
  pose-6.svg
  jpg/
    README.md
  media/
    hero/
      hero-gallery-nails.jpg
    photos/
      pose-01.jpg
      pose-02.jpg
      pose-03.jpg
      pose-04.jpg
      pose-05.jpg
      pose-06.jpg
      pose-07.jpeg
      pose-08.jpg
      pose-09.jpeg
      pose-10.jpeg
      pose-11.jpg
    videos/
      pose-video-01.mp4
      pose-video-02.mp4
```

Important :

- Le site utilise les medias dans `assets/media/`.
- Les SVG `assets/pose-1.svg` a `assets/pose-6.svg` restent disponibles comme fallback.
- `assets/jpg/README.md` vient de la premiere approche ou les photos futures devaient etre dans `assets/jpg/`.
- Le dossier source `Les_ongles/` contient les medias originaux fournis par l'utilisateur. Il n'est pas necessaire au runtime du site publie.

## 6. Dossier source `Les_ongles/`

Le dossier source contient 11 images et 2 videos :

- `Pose_1/696658236_18074319221392801_4951188297435618797_n.jpg`
- `Pose_1/AQN-PdcbOdb9lB7SHI85NSDTpuDgtZBVU1D19iomcQoW-ufjOq4ALZV0DMjBGAN4-Hnp2t8IzWAO7fW0wnPvbtf9svFdtzUIELpXOwU.mp4`
- `Pose_2/695096514_18074188496392801_1439079131898103265_n.jpg`
- `Pose_2/AQNZkdHgQ-e5gV0P6K2ddkyfDAjzszfs-UFcIDk2NPUtcflZFP5D2FHrjeFRAmuOY1FdKPOfX7rZU70vgbsP-euZ7eIrqwH2GqTZcYM.mp4`
- `Pose_3/694705155_18073981028392801_2583996147460398669_n.jpg`
- `Pose_4/684513335_18073510388392801_6638934363887871652_n.jpg`
- `pose_5/✨ gel sur ongles naturels avec nail art ✨.jpg`
- `Pose_6/✨ Nail art ✨.jpg`
- `Pose_7/655568323_18062432204392801_597075292642270336_n.jpeg`
- `Pose_8/✨Pop it✨.jpg`
- `Pose_9/654021688_18062431844392801_3194869338740502907_n.jpeg`
- `Pose_10/655067125_18062431559392801_6200930142466110198_n.jpeg`
- `Pose_11/✨Pose gel avec rallongement capsules ✨.jpg`

Ces fichiers ont ete copies et renommes proprement dans `assets/media/`.

## 7. Sections du site

Le site est une one-page avec :

1. Header sticky.
2. Hero premium interactif.
3. A propos.
4. Galerie.
5. Tarifs.
6. Reservation.
7. Footer.

Navigation header :

- Accueil.
- Galerie.
- Tarifs.
- Reserver.

La navigation interne utilise le scroll fluide, avec respect de `prefers-reduced-motion`.

## 8. Hero actuel

Le hero contient :

- Titre : `Pose d'Aura`.
- Sous-titre : `L'elegance jusqu'au bout des doigts.`
- Texte court sur les manucures autour de Colmar.
- Boutons : `Prendre rendez-vous` et `Voir la galerie`.

Scene interactive :

- Carte gauche : `Reserver`, objet calendrier CSS.
- Carte centre : `Galerie`, objet photo premium.
- Carte droite : `Tarifs`, objet flacon CSS.

Le visuel central actuel remplace l'ancienne illustration CSS de main/ongles.
Il utilise :

```text
assets/media/hero/hero-gallery-nails.jpg
```

Ce fichier a ete cree a partir de la photo demandee :

```text
Les_ongles/Pose_2/695096514_18074188496392801_1439079131898103265_n.jpg
```

Corrections recentes du hero :

- Agrandissement leger du visuel photo central.
- Ajout d'un halo/ombre plus premium.
- Le centre est plus dominant sans ecraser les cartes `Reserver` et `Tarifs`.

Classes CSS importantes :

- `.showcase-stage`
- `.showcase-card`
- `.showcase-card-gallery`
- `.hero-photo-object`
- `.hero-photo-frame`
- `.hero-photo-shine`

## 9. Galerie actuelle

La galerie contient 13 cartes :

- 11 photos.
- 2 videos.

Photos :

```text
assets/media/photos/pose-01.jpg
assets/media/photos/pose-02.jpg
assets/media/photos/pose-03.jpg
assets/media/photos/pose-04.jpg
assets/media/photos/pose-05.jpg
assets/media/photos/pose-06.jpg
assets/media/photos/pose-07.jpeg
assets/media/photos/pose-08.jpg
assets/media/photos/pose-09.jpeg
assets/media/photos/pose-10.jpeg
assets/media/photos/pose-11.jpg
```

Videos :

```text
assets/media/videos/pose-video-01.mp4
assets/media/videos/pose-video-02.mp4
```

Les videos doivent conserver :

```html
controls preload="metadata" playsinline muted
```

Sans autoplay.

Corrections recentes galerie :

- Grade CSS subtil nude/champagne sur les photos et videos :
  `saturate(0.9) contrast(0.98) brightness(0.98) sepia(0.035)`.
- Cadrages cibles sur :
  - `pose-03`
  - `pose-07`
  - `pose-08`
  - `pose-09`
- Classes ajoutees :
  - `.gallery-crop-03`
  - `.gallery-crop-07`
  - `.gallery-crop-08`
  - `.gallery-crop-09`
- Badge `Lecture` masque en CSS via `.video-badge { display: none; }` pour eviter la surcharge avec les controles natifs.

## 10. Tarifs actuels

Tarifs provisoires a conserver sauf demande explicite :

- Semi-permanent mains : 25 €
- Renforcement ongles naturels : 30 €
- Pose complete gel : 45 €
- Remplissage gel : 35 €
- Depose + soin : 15 €
- French / Baby boomer : +5 a +8 €
- Nail art : +5 a +15 €
- Deplacement autour de Colmar : a partir de 5 €

Texte sous tarifs :

```text
Les tarifs sont donnes a titre indicatif et peuvent varier selon la prestation souhaitee.
```

## 11. Reservation

La reservation ne doit pas devenir un systeme interne.
Elle doit rester un lien vers Instagram.

Bouton principal :

```text
Reserver sur Instagram
```

Il utilise `data-instagram-link` et la constante `INSTAGRAM_URL` dans `script.js`.

## 12. Poids du projet et medias

Mesures de la passe pre-publication :

- Projet complet : 4,823 Mo.
- Version a deployer sans `Les_ongles/` : 2,482 Mo.
- `assets/media/` : 2,412 Mo.

Poids des medias de production :

```text
assets/media/videos/pose-video-02.mp4      862,6 Ko
assets/media/videos/pose-video-01.mp4      623,6 Ko
assets/media/photos/pose-05.jpg            114,8 Ko
assets/media/photos/pose-02.jpg            111,1 Ko
assets/media/photos/pose-10.jpeg           103,0 Ko
assets/media/photos/pose-09.jpeg            93,1 Ko
assets/media/photos/pose-11.jpg             88,6 Ko
assets/media/photos/pose-06.jpg             81,0 Ko
assets/media/photos/pose-08.jpg             73,7 Ko
assets/media/hero/hero-gallery-nails.jpg    72,1 Ko
assets/media/photos/pose-03.jpg             68,7 Ko
assets/media/photos/pose-01.jpg             68,0 Ko
assets/media/photos/pose-07.jpeg            57,2 Ko
assets/media/photos/pose-04.jpg             52,4 Ko
```

Conclusion pre-publication :

- Aucun media de production n'est trop lourd pour un site vitrine.
- Aucune compression supplementaire n'a ete faite afin d'eviter une perte visible inutile.

## 13. Deploiement

Le fichier `DEPLOYMENT.md` a ete ajoute.

Le site peut etre publie tel quel sur :

- Netlify par glisser-deposer.
- Vercel comme site statique.

Pour un deploiement propre, il suffit de publier :

```text
index.html
styles.css
script.js
assets/
README.md
DEPLOYMENT.md
```

Le dossier `Les_ongles/` est source/archive et n'est pas necessaire en production.

Le site n'a pas de commande de build.
Sur Vercel :

- Framework : Other / Static.
- Build command : vide.
- Output directory : vide ou `.` si demande.
- Install command : vide.

## 14. Validations deja effectuees

Validations techniques et visuelles realisees a plusieurs reprises :

- Ouverture locale via serveur Python `http://127.0.0.1:8765/index.html`.
- Validation a 375 px.
- Validation a 768 px.
- Validation a 1440 px.
- Aucun debordement horizontal detecte aux trois tailles.
- `index.html` est bien a la racine.
- Tous les chemins locaux references existent.
- Pas de chemins Windows dans le site.
- Pas de `file://`.
- Pas d'ancien placeholder Instagram.
- Pas d'ancien lien Instagram avec tiret.
- 11 photos chargees.
- 2 videos chargees.
- Videos avec `controls`, `muted`, `playsinline`, `preload="metadata"` et sans autoplay.
- Visuel hero charge.
- Liens Instagram centralises et corrects.
- Console navigateur : aucune erreur/warning important detecte lors de la passe pre-publication.
- Clic sur la carte hero `Galerie` valide vers la section galerie.

Note validation :

- Le navigateur integre a refuse l'acces direct `file://`, donc le site a ete servi via `localhost`.
- Chrome local via DevTools Protocol a ete utilise pour les controles responsive precis.
- Les captures temporaires ont ete enregistrees hors projet dans le dossier temporaire Windows lors des validations.

## 15. Fichiers de documentation existants

- `README.md` : ouvrir le site, elements faciles a remplacer, note de deploiement.
- `DEPLOYMENT.md` : Netlify, Vercel, checklist avant publication, domaine.
- `CHECKLIST.md` : checklist de validation technique et visuelle.
- `PROGRESS.md` : historique complet des checkpoints, medias reels, UI prioritaire et validations.
- `HANDOFF_CODEX_WEB.md` : ce fichier de passation.

## 16. Points restants possibles

Rien de bloquant pour une publication simple.

Points a confirmer cote cliente :

- Tarifs definitifs.
- Verification finale du lien Instagram exact.
- Choix final et ordre final des photos.
- Eventuellement retirer `Les_ongles/` du dossier deploye pour alleger le depot.
- Connecter un nom de domaine plus tard via Netlify ou Vercel.

Corrections visuelles restantes envisageables, mais non indispensables :

- Ajuster encore plus finement les cadrages photos apres retour cliente.
- Harmoniser l'ordre editorial de la galerie si la cliente prefere mettre certaines poses en avant.
- Eventuellement remplacer ou completer l'image Open Graph par une vraie image de marque plus tard.

## 17. Recommandations pour Codex Web

Si Codex Web reprend le projet :

1. Lire d'abord ce fichier.
2. Lire ensuite `README.md`, `DEPLOYMENT.md`, `CHECKLIST.md`, `PROGRESS.md`.
3. Ne pas convertir le projet en framework.
4. Ne pas refaire la direction artistique sans demande.
5. Garder les changements cibles.
6. Ne pas changer le lien Instagram, les textes ou les tarifs sans instruction explicite.
7. Pour verifier localement, lancer un serveur statique depuis la racine :

```powershell
python -m http.server 8765 --bind 127.0.0.1
```

Puis ouvrir :

```text
http://127.0.0.1:8765/index.html
```

8. Tester au minimum 375 px, 768 px et 1440 px.
9. Verifier les medias dans `assets/media/`.
10. Pour deployer, suivre `DEPLOYMENT.md`.

## 18. Etat final resume

Le projet Pose d'Aura est actuellement une V1 premium statique, responsive, prete pour une mise en ligne simple.
Le design est en place, les vrais medias sont integres, le lien Instagram est corrige, la documentation de deploiement existe, et la passe pre-publication n'a trouve aucun blocage.
