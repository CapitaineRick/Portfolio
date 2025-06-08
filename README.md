# 🎓 Portfolio BTS SIO SISR - Sébastien Fernandes

**Portfolio professionnel d'un étudiant en BTS Services Informatiques aux Organisations, spécialité Solutions d'Infrastructure, Systèmes et Réseaux.**

![Portfolio Preview](https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&fit=crop)

[![Netlify Status](https://api.netlify.com/api/v1/badges/your-badge-id/deploy-status)](https://app.netlify.com/sites/your-site/deploys)
![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=flat&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-3178C6?style=flat&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF?style=flat&logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.1-06B6D4?style=flat&logo=tailwindcss)

---

## 🌟 Aperçu

Ce portfolio présente mon parcours académique et professionnel en tant qu'étudiant en BTS SIO SISR. Il met en valeur mes compétences techniques en administration système, réseau, cybersécurité et mes projets réalisés en entreprise et à l'école.

### 🔗 **[Voir le portfolio en ligne](https://portfolio-bts-sio-sisr.netlify.app/)**

---

## 📋 Table des matières

- [🎯 Objectifs](#-objectifs)
- [✨ Fonctionnalités](#-fonctionnalités)
- [🛠️ Technologies utilisées](#️-technologies-utilisées)
- [🚀 Installation et démarrage](#-installation-et-démarrage)
- [📁 Structure du projet](#-structure-du-projet)
- [🎨 Design et UX](#-design-et-ux)
- [📱 Responsive Design](#-responsive-design)
- [⚡ Optimisations](#-optimisations)
- [🔧 Configuration](#-configuration)
- [📊 Fonctionnalités avancées](#-fonctionnalités-avancées)
- [🤝 Contribution](#-contribution)
- [📄 Licence](#-licence)
- [📞 Contact](#-contact)

---

## 🎯 Objectifs

### **Objectifs pédagogiques**
- Présenter mes compétences techniques acquises en BTS SIO SISR
- Documenter mes projets d'entreprise et scolaires
- Démontrer ma maîtrise des technologies web modernes
- Créer une vitrine professionnelle pour mes candidatures

### **Objectifs techniques**
- Développer une application React moderne et performante
- Implémenter un design responsive et accessible
- Optimiser les performances et l'expérience utilisateur
- Intégrer des fonctionnalités avancées (PDF viewer, animations)

---

## ✨ Fonctionnalités

### 🏠 **Section Hero**
- Animation de particules interactives avec évitement de souris
- Présentation dynamique avec effets visuels
- Navigation fluide vers les autres sections

### 👤 **À propos**
- Profil personnel détaillé avec photo
- Parcours académique complet avec timeline
- Points forts et centres d'intérêt
- Téléchargement de CV

### 🎓 **Formation**
- Présentation détaillée du BTS SIO
- Comparaison des options SISR vs SLAM
- Compétences et débouchés professionnels

### 💼 **Compétences**
- Catégorisation par domaines techniques
- Descriptions détaillées avec logos
- Interface optimisée pour les performances
- Niveaux de maîtrise visuels

### 🚀 **Projets**
- Portfolio de projets entreprise et scolaires
- Filtrage par tags et catégories
- Visualiseur PDF intégré
- Pagination intelligente
- Documents multiples par projet

### 📡 **Veille technologique**
- Articles de cybersécurité et infrastructure
- Filtrage par domaines
- Interface en colonnes (Masonry layout)
- Liens vers sources externes

### 📬 **Contact**
- Formulaire de contact avec EmailJS
- Informations de contact complètes
- Liens vers réseaux sociaux
- Téléchargement de CV

---

## 🛠️ Technologies utilisées

### **Frontend Core**
```json
{
  "React": "^18.2.0",
  "TypeScript": "^5.2.2",
  "Vite": "^6.3.5"
}
```

### **Styling & UI**
```json
{
  "TailwindCSS": "^3.4.1",
  "Lucide React": "^0.323.0",
  "PostCSS": "^8.4.33",
  "Autoprefixer": "^10.4.17"
}
```

### **Fonctionnalités avancées**
```json
{
  "React PDF": "^7.7.0",
  "EmailJS Browser": "^4.4.1",
  "React Helmet Async": "^2.0.4",
  "PDF.js": "^3.11.174"
}
```

### **Développement**
```json
{
  "ESLint": "^8.55.0",
  "TypeScript ESLint": "^6.14.0",
  "Vite Plugin React": "^4.2.1"
}
```

---

## 🚀 Installation et démarrage

### **Prérequis**
- Node.js 18+ 
- npm ou yarn
- Git

### **Installation**

```bash
# Cloner le repository
git clone https://github.com/CapitaineRick/Portfolio.git
cd Portfolio

# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev
```

### **Scripts disponibles**

```bash
# Développement
npm run dev          # Serveur de développement (http://localhost:5173)

# Production
npm run build        # Build de production
npm run preview      # Aperçu du build

# Qualité de code
npm run lint         # Vérification ESLint
```

---

## 📁 Structure du projet

```
Portfolio/
├── 📁 public/                    # Assets statiques
│   ├── 📁 docs/                  # Documents PDF
│   │   ├── 📁 AP1/              # Projet AP1 - Revive
│   │   ├── 📄 AP2.pdf           # Projet AP2 - M2L
│   │   └── 📄 *.pdf             # Autres documentations
│   ├── 📁 images/               # Images et logos
│   └── 📄 pdf.worker.min.js     # Worker PDF.js
│
├── 📁 src/
│   ├── 📁 components/           # Composants React
│   │   ├── 📁 sections/         # Sections principales
│   │   │   ├── 📄 Hero.tsx      # Section d'accueil
│   │   │   ├── 📄 About.tsx     # À propos
│   │   │   ├── 📄 Skills.tsx    # Compétences
│   │   │   ├── 📄 Projects.tsx  # Projets
│   │   │   └── 📄 Contact.tsx   # Contact
│   │   ├── 📁 ui/               # Composants UI
│   │   │   ├── 📄 ProjectCard.tsx
│   │   │   └── 📄 SkillBadge.tsx
│   │   ├── 📄 Layout.tsx        # Layout principal
│   │   ├── 📄 Navbar.tsx        # Navigation
│   │   ├── 📄 Footer.tsx        # Pied de page
│   │   └── 📄 PdfViewer.jsx     # Visualiseur PDF
│   │
│   ├── 📁 contexts/             # Contextes React
│   │   ├── 📄 ThemeContext.tsx  # Gestion du thème
│   │   └── 📄 ProjectContext.tsx
│   │
│   ├── 📁 data/                 # Données statiques
│   │   ├── 📄 skillsData.ts     # Données compétences
│   │   ├── 📄 projectsData.ts   # Données projets
│   │   ├── 📄 educationData.ts  # Données formation
│   │   └── 📄 techWatchData.ts  # Données veille
│   │
│   ├── 📄 App.tsx               # Composant principal
│   ├── 📄 main.tsx              # Point d'entrée
│   └── 📄 index.css             # Styles globaux
│
├── 📄 package.json              # Dépendances
├── 📄 vite.config.ts            # Configuration Vite
├── 📄 tailwind.config.js        # Configuration Tailwind
├── 📄 tsconfig.json             # Configuration TypeScript
└── 📄 README.md                 # Documentation
```

---

## 🎨 Design et UX

### **Système de couleurs**
```css
/* Palette principale */
--orange-500: #f97316;    /* Accent principal */
--purple-500: #a855f7;    /* Accent secondaire */
--gray-900: #0f172a;      /* Fond principal */
--gray-800: #1e293b;      /* Cartes */
--gray-300: #cbd5e1;      /* Texte secondaire */
```

### **Typographie**
- **Police principale** : Inter, system fonts
- **Hiérarchie** : 6 niveaux de titres
- **Lisibilité** : Contraste optimisé, line-height 1.6+

### **Animations**
- Particules interactives dans le Hero
- Animations d'apparition au scroll
- Transitions fluides (200ms)
- Hover effects subtils

---

## 📱 Responsive Design

### **Breakpoints**
```css
/* Mobile First */
sm: 640px    /* Tablettes */
md: 768px    /* Tablettes large */
lg: 1024px   /* Desktop */
xl: 1280px   /* Large desktop */
```

### **Adaptations**
- **Mobile** : Navigation hamburger, grilles 1 colonne
- **Tablette** : Grilles 2 colonnes, espacement réduit
- **Desktop** : Grilles 3+ colonnes, animations complètes

---

## ⚡ Optimisations

### **Performance**
- ✅ Lazy loading des images
- ✅ Code splitting automatique (Vite)
- ✅ Compression des assets
- ✅ Animations optimisées GPU
- ✅ Bundle size optimisé

### **SEO**
- ✅ Meta tags complets
- ✅ Open Graph / Twitter Cards
- ✅ Structured data
- ✅ Sitemap automatique
- ✅ URLs canoniques

### **Accessibilité**
- ✅ Contraste WCAG AA
- ✅ Navigation clavier
- ✅ Screen readers
- ✅ Focus indicators
- ✅ Alt texts

---

## 🔧 Configuration

### **Variables d'environnement**
```env
# EmailJS (Contact form)
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

# Analytics (optionnel)
VITE_GA_TRACKING_ID=your_ga_id
```

### **Configuration EmailJS**
1. Créer un compte sur [EmailJS](https://www.emailjs.com/)
2. Configurer un service email
3. Créer un template de message
4. Ajouter les clés dans le code

---

## 📊 Fonctionnalités avancées

### **Visualiseur PDF intégré**
- Rendu avec PDF.js
- Navigation par pages
- Zoom dynamique
- Téléchargement direct
- Support multi-documents

### **Système de filtrage**
- Filtres par tags
- Pagination intelligente
- Recherche en temps réel
- État persistant

### **Animations interactives**
- Particules avec évitement souris
- Intersection Observer
- Transitions CSS optimisées
- Effets de parallaxe

---

## 🤝 Contribution

### **Pour contribuer**
1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

### **Standards de code**
- TypeScript strict mode
- ESLint + Prettier
- Commits conventionnels
- Tests unitaires (à venir)

---

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

---

## 📞 Contact

### **Sébastien Fernandes**
- 📧 **Email** : [sebastien.78.fernandes@outlook.fr](mailto:sebastien.78.fernandes@outlook.fr)
- 💼 **LinkedIn** : [Sébastien Fernandes](https://www.linkedin.com/in/s%C3%A9bastien-fernandes-566008232/)
- 🐙 **GitHub** : [@CapitaineRick](https://github.com/CapitaineRick)
- 🌐 **Portfolio** : [portfolio-bts-sio-sisr.netlify.app](https://portfolio-bts-sio-sisr.netlify.app/)

---

### 🎯 **Objectif professionnel**
> *Recherche d'opportunités en administration système, cybersécurité et infrastructure IT. Ouvert aux stages, alternances et collaborations techniques.*

---

**⭐ Si ce projet vous plaît, n'hésitez pas à lui donner une étoile !**

---

*Dernière mise à jour : Janvier 2025*