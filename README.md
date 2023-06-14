# Kasa
## _Création d'une application web de location immobilière avec React_

![Build Status](https://badge.buildkite.com/sample.svg?status=passing)

7ème projet de la formation de développeur web d'OpenClassroom.

![Screenshot-Kasa](https://github.com/No0910/Kasa/assets/98163578/752330d8-2810-4445-831a-6d8abad9f1cc)

## Enjeux
---
- Participer à la refonte du site Kasa, en codant la partie front-end en React et en suivant les maquettes Figma (responsives).
- Permettre au site d'avoir des pages dynamiques.

## Livrables attendus
---
Un fichier au format TXT ou PDF comprenant le lien vers votre code sur GitHub contenant l’ensemble du projet, à savoir :
- le code React de l’application ;
- le code React Router pour les routes dans un fichier dédié.

## Intégration de contenu d'après maquette Figma (En desktop, Tablette et Mobile)
---
Maquette Figma [ici](https://www.figma.com/file/bAnXDNqRKCRRP8mY2gcb5p/ARCHIVE-UI-Design-Kasa-FR?type=design&node-id=3-0)
- Une page d'Accueil
- Une page "A propos"
- Une page d'erreur
- Une page logement avec un carrousel pour les images

### Contraintes techniques

### React :
---
- Découpage en composants modulaires et réutilisables 
- Un composant par fichier
- Structure logique des différents fichiers 
- Utilisation des props entre les composants 
- Utilisation du state dans les composants quand c'est nécessaire 
- Gestion des événements 
- Listes : React permet de faire des choses vraiment intéressantes avec
les listes, en itérant dessus, par exemple avec map. Il faut les utiliser
autant que possible.

### React Router :
---
- Les paramètres des routes sont gérés par React Router dans l'URL
pour récupérer les informations de chaque logement.
- Il existe une page par route.
- La page 404 est renvoyée pour chaque route inexistante, ou si une
valeur présente dans l’URL ne fait pas partie des données
renseignées.
- La logique du routeur est réunie dans un seul fichier.

### Général :
---
- Le code ne doit pas produire d'erreur ou de warning dans la console.


## Technologies utilisées
---
- [HTML] - Version 5
- [CSS] - Version 3
- [Javascript] - ECMA version 2022
- [React] - Framework javascript
- [VScode] - Editeur de code
- [FontAwesome] - Bibliothèque d'icônes
- [GoogleFonts] - Bibliothèque de polices

## Identité graphique
---
### Polices de caractères : 
---
- Logo et titres: Montserrat
- Texte: Montserrat

### Couleurs utilisées : 
---
- Background-color : #FF6060
- color : #FFFFFF

### Compatibilité : 
---
- Développement en mobile-first à partir des maquettes fournies
- Adapatation tablette et desktop libre (supports non prioritaires)
- Responsive design intégré sur tout supports
- Validation HTML et CSS du W3C
- Dernières versions de Chrome, Firefox, Edge

## Installation
---
Une version en ligne est directement accessible à l'adresse : [Kasa](https://nd-kasa.netlify.app/)

Sinon, vous pouvez cloner le projet
```terminal
git clone https://github.com/No0910/Kasa.git
```
