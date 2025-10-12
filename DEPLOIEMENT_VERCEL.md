# 🚀 Guide de Déploiement sur Vercel - StriveX

Ce guide vous accompagne dans le déploiement de votre site StriveX sur Vercel.

---

## ✅ Prérequis

Avant de déployer, assurez-vous que :

- ✅ Votre projet build correctement localement (`pnpm build`)
- ✅ Vous avez un compte GitHub avec votre projet pushé
- ✅ Vous avez un compte Vercel (gratuit)

---

## 📋 Étapes de Déploiement

### 1️⃣ Créer un compte Vercel

1. Allez sur [vercel.com](https://vercel.com)
2. Cliquez sur **"Sign Up"**
3. Connectez-vous avec votre compte GitHub (recommandé)
4. Autorisez Vercel à accéder à vos repositories

### 2️⃣ Importer votre projet

1. Sur le dashboard Vercel, cliquez sur **"Add New..."** → **"Project"**
2. Sélectionnez votre repository **strivex**
3. Vercel détectera automatiquement Astro

### 3️⃣ Configuration du projet

Vercel va automatiquement détecter les bonnes configurations :

**Framework Preset** : Astro
**Build Command** : `pnpm build`
**Output Directory** : `dist`
**Install Command** : `pnpm install`

> ⚠️ **Important** : Ne modifiez pas ces valeurs, elles sont déjà optimales.

### 4️⃣ Variables d'environnement

Ajoutez vos variables d'environnement nécessaires :

1. Dans la section **"Environment Variables"**
2. Ajoutez les variables suivantes :

```
RESEND_API_KEY=your_resend_api_key_here
CONTACT_EMAIL=contact@strivex.fr
```

> 💡 **Conseil** : Récupérez votre clé API Resend depuis [resend.com/api-keys](https://resend.com/api-keys)

### 5️⃣ Déployer

1. Cliquez sur **"Deploy"**
2. Attendez 1-2 minutes (Vercel va installer les dépendances et builder votre site)
3. 🎉 Votre site est en ligne !

---

## 🌐 Configuration du Domaine

### Option 1 : Domaine Vercel (gratuit)

Votre site sera accessible sur : `strivex.vercel.app`

### Option 2 : Domaine personnalisé

1. Allez dans **Settings** → **Domains**
2. Cliquez sur **"Add Domain"**
3. Entrez votre domaine : `strivex.dev`
4. Suivez les instructions pour configurer vos DNS :

**Chez votre registrar (ex: OVH, Gandi, etc.)** :

Ajoutez les enregistrements DNS suivants :

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

5. Attendez la propagation DNS (jusqu'à 48h, souvent moins)

---

## 🔄 Déploiements Automatiques

**Bonne nouvelle** : Vercel déploie automatiquement votre site à chaque push sur GitHub !

- **Push sur `main`** → Déploiement en production sur `strivex.dev`
- **Push sur autre branche** → Déploiement preview sur `branch-name.strivex.vercel.app`

---

## 🔧 Configuration Avancée

### Redirection www vers domaine principal

Si vous voulez rediriger `www.strivex.dev` vers `strivex.dev` :

1. Allez dans **Settings** → **Domains**
2. Configurez `strivex.dev` comme domaine principal
3. Ajoutez `www.strivex.dev` comme alias avec redirection

### HTTPS

HTTPS est automatiquement activé par Vercel (gratuit) 🔒

---

## 📊 Analytics et Performance

### Activer Vercel Analytics (optionnel)

1. Allez dans **Analytics** dans le menu de votre projet
2. Cliquez sur **"Enable Analytics"**
3. Choisissez le plan gratuit (10 000 événements/mois)

### Activer Speed Insights

1. Allez dans **Speed Insights**
2. Cliquez sur **"Enable"**
3. Suivez les instructions

---

## 🔍 Vérifications Post-Déploiement

Après le déploiement, vérifiez que :

- [ ] Le site se charge correctement
- [ ] Les images s'affichent
- [ ] Les liens de navigation fonctionnent
- [ ] Le formulaire de contact envoie des emails
- [ ] Le lien Calendly fonctionne
- [ ] Les pages légales sont accessibles
- [ ] Le site est responsive (mobile/desktop)

---

## 🐛 Résolution de Problèmes

### Erreur : "Build failed"

**Solution** :
1. Vérifiez que `pnpm build` fonctionne localement
2. Consultez les logs dans l'onglet **"Deployments"** → cliquez sur le build failed
3. Vérifiez que toutes vos dépendances sont dans `package.json`

### Le formulaire de contact ne fonctionne pas

**Solution** :
1. Vérifiez que `RESEND_API_KEY` est bien configurée dans les variables d'environnement
2. Vérifiez que votre domaine est vérifié dans Resend
3. Consultez les logs de fonction dans Vercel → **"Functions"** → **"Logs"**

### Les images ne s'affichent pas

**Solution** :
1. Vérifiez que vos images sont dans le dossier `public/`
2. Vérifiez les chemins d'images (doivent commencer par `/`)

### Erreur 404 sur les routes

**Solution** :
- Vérifiez que l'adaptateur Vercel est bien configuré dans `astro.config.mjs`
- Le déploiement devrait fonctionner en mode SSR pour l'API

---

## 🔄 Redéploiement

### Via GitHub

```bash
git add .
git commit -m "Update site"
git push
```

Vercel redéploiera automatiquement !

### Via Vercel CLI

```bash
# Installer Vercel CLI
pnpm add -g vercel

# Se connecter
vercel login

# Déployer
vercel --prod
```

---

## 💡 Commandes Utiles

```bash
# Tester le build localement
pnpm build

# Prévisualiser le build
pnpm preview

# Développement local
pnpm dev

# Vérifier les types TypeScript
astro check
```

---

## 📞 Support

### Vercel

- **Documentation** : [vercel.com/docs](https://vercel.com/docs)
- **Support** : [vercel.com/support](https://vercel.com/support)
- **Community** : [github.com/vercel/vercel/discussions](https://github.com/vercel/vercel/discussions)

### Astro

- **Documentation** : [docs.astro.build](https://docs.astro.build)
- **Discord** : [astro.build/chat](https://astro.build/chat)

---

## ✅ Checklist de Déploiement

- [ ] Compte Vercel créé et connecté à GitHub
- [ ] Repository GitHub créé et code pushé
- [ ] Variables d'environnement configurées (RESEND_API_KEY, CONTACT_EMAIL)
- [ ] Build réussi sur Vercel
- [ ] Site accessible via l'URL Vercel
- [ ] Domaine personnalisé configuré (optionnel)
- [ ] DNS configurés (si domaine personnalisé)
- [ ] Formulaire de contact testé
- [ ] Site testé sur mobile et desktop
- [ ] Analytics activés (optionnel)

---

**Dernière mise à jour** : Octobre 2025
**Version** : 1.0

🎉 **Félicitations, votre site est en ligne !** 🎉

