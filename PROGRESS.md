# Progression du projet Pose d'Aura

## v0.2 - Header mobile et mention de version

- Creation du backup `backups/v0.1/` avant modification des fichiers actifs, sans duplication des medias binaires deja presents dans `assets/media/` afin de garder la Pull Request exploitable sur GitHub.
- Correction ciblee du header sur smartphone pour mieux centrer le logo `Pose d’Aura` et les liens de navigation, notamment `Tarifs`.
- Ajout d'une mention discrete tout en bas du site : `Version du site : v0.2`.
- Aucun changement de texte commercial, de tarif, de lien Instagram, de design global ou de framework.

## Regle de versioning

- Avant chaque nouvelle modification importante, creer un backup de la version active actuelle.
- Nommer les backups progressivement : `backups/v0.1/`, `backups/v0.2/`, `backups/v0.3/`, etc.
- Modifier uniquement les fichiers actifs a la racine, jamais les fichiers dans `backups/`.
- Le site actif represente toujours la derniere version en cours.
