# 🚀 Guide de Démarrage Rapide - StriveX

## Installation et Lancement

```bash
# 1. Installer les dépendances
pnpm install

# 2. Lancer le serveur de développement
pnpm dev
# Le site sera accessible sur http://localhost:4321

# 3. Build de production
pnpm build

# 4. Prévisualiser le build
pnpm preview
```

## 📝 Personnalisation du Contenu

### 1. Informations Générales
Modifiez `src/site.config.ts` :

```typescript
export const siteConfig = {
  name: "StriveX",
  title: "Votre titre",
  description: "Votre description",
  url: "https://votre-domaine.com",
  links: {
    email: "votre@email.com",
    calendly: "https://calendly.com/votrecompte",
    linkedin: "https://linkedin.com/company/votrecompte"
  }
}
```

### 2. Modifier les Tarifs
Dans `src/site.config.ts`, section `pricingPlans` :

```typescript
{
  name: "Launch",
  price: "1 800",  // Modifiez le prix ici
  features: [
    "Feature 1",   // Modifiez les features ici
    "Feature 2",
  ]
}
```

### 3. Modifier les Features
Dans `src/site.config.ts`, section `features` :

```typescript
{
  icon: "Zap",           // Nom de l'icône Lucide
  title: "Votre titre",
  description: "Votre description"
}
```

### 4. Modifier la FAQ
Dans `src/site.config.ts`, section `faqs`.

### 5. Modifier le Processus
Dans `src/site.config.ts`, section `processSteps`.

## 🎨 Personnalisation du Design

### Couleurs
Les couleurs principales sont définies dans Tailwind :
- **Primary** : `blue-600` (#3B82F6)
- **Secondary** : `purple-600` (#8B5CF6)
- **Accent** : `orange-500` (#F97316)

Pour modifier, éditez les classes Tailwind dans les composants.

### Typographie
Par défaut, Tailwind utilise les polices système. Pour ajouter Google Fonts :

1. Ajoutez dans `src/layouts/Layout.astro` :
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
```

2. Ajoutez dans `src/styles/global.css` :
```css
body {
  font-family: 'Inter', sans-serif;
}
```

## 📧 Configuration du Formulaire de Contact

Le formulaire dans `src/components/sections/Contact.astro` a besoin d'un backend.

### Option 1 : Formspree (Gratuit jusqu'à 50 envois/mois)

1. Créez un compte sur [Formspree.io](https://formspree.io)
2. Créez un nouveau formulaire
3. Récupérez l'ID du formulaire
4. Modifiez la balise `<form>` :

```html
<form 
  action="https://formspree.io/f/VOTRE_ID" 
  method="POST"
  class="space-y-6"
>
```

### Option 2 : Web3Forms

1. Allez sur [Web3Forms.com](https://web3forms.com)
2. Entrez votre email pour recevoir une clé
3. Ajoutez un champ caché dans le formulaire :

```html
<input type="hidden" name="access_key" value="VOTRE_CLE">
<form action="https://api.web3forms.com/submit" method="POST">
```

### Option 3 : Netlify Forms (si hébergé sur Netlify)

Ajoutez simplement `netlify` dans la balise form :
```html
<form name="contact" netlify>
```

## 🌐 Déploiement

### Vercel (Recommandé)

1. Créez un compte sur [Vercel.com](https://vercel.com)
2. Importez votre repo GitHub
3. Vercel détectera automatiquement Astro
4. Cliquez sur "Deploy"

Configuration automatique :
- **Framework Preset**: Astro
- **Build Command**: `pnpm build`
- **Output Directory**: `dist`

### Netlify

1. Créez un compte sur [Netlify.com](https://netlify.com)
2. Connectez votre repo GitHub
3. Configuration :
   - **Build command**: `pnpm build`
   - **Publish directory**: `dist`
4. Déployez

### Configuration du Domaine

Après déploiement, n'oubliez pas de mettre à jour :

1. Dans `astro.config.mjs` :
```js
site: 'https://votre-domaine.com'
```

2. Dans `src/site.config.ts` :
```js
url: "https://votre-domaine.com"
```

## 📊 Analytics

### Google Analytics 4

Ajoutez dans `src/layouts/Layout.astro` avant `</head>` :

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Plausible Analytics (Alternative respectueuse de la vie privée)

```html
<script defer data-domain="votredomaine.com" src="https://plausible.io/js/script.js"></script>
```

## 🔧 Maintenance

### Mettre à jour les dépendances

```bash
# Vérifier les updates disponibles
pnpm outdated

# Mettre à jour toutes les dépendances
pnpm update

# Ou mettre à jour une dépendance spécifique
pnpm update astro
```

### Ajouter une nouvelle page

1. Créez un fichier dans `src/pages/`, ex: `src/pages/blog.astro`
2. Utilisez le Layout :

```astro
---
import Layout from '../layouts/Layout.astro';
---

<Layout title="Mon Blog">
  <h1>Contenu</h1>
</Layout>
```

3. La page sera accessible sur `/blog`

## 🐛 Résolution de Problèmes

### Le site ne se lance pas
```bash
# Supprimez node_modules et réinstallez
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Erreurs de build
```bash
# Nettoyez le cache Astro
rm -rf .astro dist
pnpm build
```

### Les icônes ne s'affichent pas
Vérifiez que vous importez correctement depuis `lucide-astro` :
```astro
import { IconName } from 'lucide-astro';
```

## 📞 Support

Pour toute question :
- Email : contact@strivex.dev
- Documentation Astro : https://docs.astro.build
- Documentation Tailwind : https://tailwindcss.com

## ✅ Checklist Avant Mise en Production

- [ ] Modifiez toutes les informations dans `site.config.ts`
- [ ] Configurez le formulaire de contact
- [ ] Ajoutez vos vraies informations légales dans les pages légales
- [ ] Configurez Analytics
- [ ] Testez sur mobile et desktop
- [ ] Vérifiez tous les liens
- [ ] Remplacez le favicon par le vôtre
- [ ] Testez le formulaire de contact
- [ ] Configurez votre domaine custom
- [ ] Vérifiez le SEO avec Lighthouse

## 🎉 Prêt à Lancer !

Votre site est maintenant prêt à être déployé. Bon lancement ! 🚀

