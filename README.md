# StriveX Landing Page

Landing page moderne et performante pour StriveX, agence de développement web spécialisée dans les sites et MVPs pour startups.

## 🚀 Stack Technique

- **Framework**: Astro 5.x
- **Styling**: Tailwind CSS 4.x
- **Icons**: Lucide Astro
- **Animations**: CSS + View Transitions API
- **Performance**: Score Lighthouse > 95

## 📦 Installation

```bash
# Installer les dépendances
pnpm install

# Lancer le serveur de développement
pnpm dev

# Build de production
pnpm build

# Preview du build
pnpm preview
```

## 🎨 Structure du Projet

```
strivex/
├── public/               # Fichiers statiques
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── components/
│   │   └── sections/    # Composants de sections
│   │       ├── Hero.astro
│   │       ├── Features.astro
│   │       ├── Pricing.astro
│   │       ├── Process.astro
│   │       ├── FAQ.astro
│   │       ├── Contact.astro
│   │       └── Footer.astro
│   ├── layouts/
│   │   └── Layout.astro # Layout principal avec SEO
│   ├── pages/
│   │   └── index.astro  # Page d'accueil
│   ├── styles/
│   │   └── global.css   # Styles globaux Tailwind
│   └── site.config.ts   # Configuration centralisée
├── astro.config.mjs     # Configuration Astro
├── package.json
└── tsconfig.json
```

## ⚙️ Configuration

### Site Config

Toutes les données du site (prix, features, FAQ, etc.) sont centralisées dans `src/site.config.ts` pour faciliter les modifications.

### Personnalisation

1. **Modifier les tarifs** : Éditer `pricingPlans` dans `site.config.ts`
2. **Modifier les features** : Éditer `features` dans `site.config.ts`
3. **Modifier le processus** : Éditer `processSteps` dans `site.config.ts`
4. **Modifier la FAQ** : Éditer `faqs` dans `site.config.ts`

### Couleurs

Le thème utilise les couleurs suivantes (configurées dans Tailwind) :
- Primary : Bleu (`blue-600`)
- Secondary : Violet (`purple-600`)
- Accent : Orange (`orange-500`)

## 📱 Formulaire de Contact

Le formulaire de contact dans `Contact.astro` est prêt à être connecté à un service backend. Options recommandées :
- [Formspree](https://formspree.io/)
- [Web3Forms](https://web3forms.com/)
- [Netlify Forms](https://www.netlify.com/products/forms/)
- API custom

## 🚢 Déploiement

### Vercel (Recommandé)

```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel
```

### Netlify

1. Connecter votre repo GitHub
2. Build command : `pnpm build`
3. Publish directory : `dist`

### Configuration Production

Avant de déployer, modifiez dans `astro.config.mjs` :
```js
site: 'https://votre-domaine.com'
```

Et dans `src/site.config.ts` :
```js
url: "https://votre-domaine.com"
```

## 🎯 Optimisations

### Performance
- ✅ Images optimisées
- ✅ CSS inliné automatiquement
- ✅ HTML compressé
- ✅ Prefetch au hover
- ✅ View Transitions pour navigation fluide

### SEO
- ✅ Meta tags complets
- ✅ Open Graph
- ✅ Twitter Cards
- ✅ Schema.org markup
- ✅ Sitemap automatique
- ✅ robots.txt

### Accessibilité
- ✅ Navigation au clavier
- ✅ Contrastes WCAG AA
- ✅ Labels sémantiques

## 📝 License

© 2025 StriveX. Tous droits réservés.

## 🤝 Support

Pour toute question : contact@strivex.fr
