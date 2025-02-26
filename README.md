# Kasa - Application de location immobilière  

Kasa est une application web développée en **React** et **SASS**, dans le cadre d'un projet de formation chez OpenClassrooms. Il s'agit d'une refonte complète du site de Kasa, leader en location immobilière pour particuliers en France.  

🚀 **Déployé sur Vercel** : [Accéder à l'application](https://kasa-blue.vercel.app/)  

## 🛠️ Technologies utilisées  

- **React** (avec React Router)  
- **SASS** pour le stylisme  
- **Méthodologie Mobile First** pour un design entièrement responsive  
- **Données stockées en local** (pas de backend ni d'API externe)  

## 🎨 Fonctionnalités  

- **Page d’accueil** : Affiche la liste des logements disponibles avec leur nom et leur photographie.  
- **Page logement** :  
  - Nom du logement et localisation précise  
  - Tags informatifs  
  - Nom et image de profil du ou de la locataire  
  - Qualité du logement en notation sur 5 étoiles  
  - Description détaillée et liste des équipements (via menus déroulants)  
  - Carrousel d'images pour visualiser les photos du logement  
- **Page "À propos"** : Présente les valeurs de Kasa sous forme de menus déroulants.  
- **Navigation** : Barre de navigation pour explorer le site.  
- **Footer** : Contient quelques informations sur l'entreprise Kasa.  
- **Page 404** : Gère les erreurs d'URL incorrectes avec un affichage dédié.  
- **Design Responsive** : Adapté aux écrans mobiles, tablettes et ordinateurs.  

## 🚀 Installation et exécution  

### 📋 Prérequis  
- **Node.js** v20.11.0  
- **npm** installé  

### 🔧 Étapes d’installation  
```bash
# 1. Cloner le dépôt
git clone https://github.com/ton-repo/kasa.git

# 2. Se rendre dans le dossier du projet
cd kasa

# 3. Installer les dépendances
npm install

# 4. Lancer l’application en local
npm start
```

L'application sera disponible à l'adresse **http://localhost:3000/**.  

## ✅ Tests et validation  

Aucun test Jest ou Cypress n'a été mis en place. Cependant, le projet a été soumis à une batterie de tests unitaires manuels lors de la soutenance devant un jury pour vérifier le bon fonctionnement des composants et des fonctionnalités principales.  

## 🌍 Déploiement  

L’application est déployée sur **Vercel** et accessible ici : [https://kasa-blue.vercel.app/](https://kasa-blue.vercel.app/)  

## 📜 Licence  

Ce projet a été réalisé dans le cadre d’une mise en situation fictive pour OpenClassrooms et n’a pas vocation à être utilisé commercialement.  
