# 📧 Configuration de Resend pour le Formulaire de Contact

Ce guide vous explique comment configurer Resend API pour recevoir les emails du formulaire de contact de votre site StriveX.

## 📋 Prérequis

- Un compte Resend (gratuit) : [https://resend.com](https://resend.com)
- Node.js et pnpm installés
- Votre projet StriveX en local

## 🚀 Étapes de Configuration

### 1. Créer un compte Resend

1. Allez sur [https://resend.com](https://resend.com)
2. Créez un compte gratuit (limite : 100 emails/jour)
3. Confirmez votre email

### 2. Obtenir votre clé API

1. Connectez-vous à votre tableau de bord Resend
2. Allez dans **Settings** → **API Keys**
3. Cliquez sur **Create API Key**
4. Donnez-lui un nom (ex: "StriveX Contact Form")
5. Copiez la clé générée (vous ne pourrez plus la voir après)

### 3. Configurer les variables d'environnement

Créez un fichier `.env` à la racine du projet :

```env
# Resend API Configuration
RESEND_API_KEY=re_votre_clé_api_ici

# Email de destination pour les contacts
CONTACT_EMAIL=votre-email@votredomaine.com
```

⚠️ **Important** : Ne commitez JAMAIS le fichier `.env` sur Git ! Il est déjà dans `.gitignore`.

### 4. Configurer votre domaine (Optionnel mais recommandé)

#### Option A : Utiliser le domaine par défaut (développement)
Par défaut, Resend utilise `onboarding@resend.dev` comme expéditeur. C'est parfait pour tester.

#### Option B : Configurer votre propre domaine (production)
Pour une utilisation en production, configurez votre domaine :

1. Dans Resend, allez dans **Domains** → **Add Domain**
2. Entrez votre domaine (ex: `strivex.dev`)
3. Ajoutez les enregistrements DNS fournis par Resend :
   - **SPF** (TXT)
   - **DKIM** (TXT)
   - **DMARC** (TXT)

4. Une fois vérifié, modifiez `src/pages/api/contact.ts` :

```typescript
from: 'Contact StriveX <contact@votredomaine.com>',
```

### 5. Tester en local

```bash
# Démarrer le serveur de développement
pnpm dev

# Ouvrir votre navigateur
http://localhost:4321

# Tester le formulaire de contact
```

### 6. Vérifier l'envoi

1. Remplissez le formulaire de contact sur votre site
2. Soumettez le formulaire
3. Vérifiez votre boîte mail (l'email configuré dans `CONTACT_EMAIL`)
4. Vérifiez également le dashboard Resend pour voir l'activité

## 🔧 Personnalisation

### Modifier le template d'email

Le template HTML de l'email se trouve dans `src/pages/api/contact.ts`. Vous pouvez le personnaliser :

```typescript
html: `
  <!DOCTYPE html>
  <html>
    <!-- Votre template personnalisé ici -->
  </html>
`
```

### Ajouter des champs supplémentaires

Si vous ajoutez des champs au formulaire :

1. Ajoutez-les dans `src/components/sections/Contact.astro`
2. Récupérez-les dans `src/pages/api/contact.ts` :

```typescript
const { name, email, pack, message, nouveauChamp } = body;
```

3. Ajoutez-les au template HTML de l'email

## 🐛 Dépannage

### L'email n'arrive pas

1. **Vérifiez la console du navigateur** pour voir les erreurs
2. **Vérifiez les logs du serveur** pour voir les erreurs Resend
3. **Vérifiez votre spam** : les emails de test peuvent y atterrir
4. **Vérifiez votre clé API** : elle doit commencer par `re_`
5. **Vérifiez les limites** : compte gratuit = 100 emails/jour

### Erreur "Invalid API Key"

- Vérifiez que `RESEND_API_KEY` est bien défini dans `.env`
- Vérifiez qu'il n'y a pas d'espaces avant/après la clé
- Recréez une nouvelle clé API si nécessaire

### Erreur 401/403

- Votre clé API est invalide ou expirée
- Créez une nouvelle clé dans le dashboard Resend

### Email non formaté

- Vérifiez que le HTML de l'email est valide
- Testez avec un template plus simple d'abord

## 📊 Limites du Plan Gratuit

- **100 emails par jour**
- **3 000 emails par mois**
- **1 domaine personnalisé**

Pour plus d'emails, consultez les [plans Resend](https://resend.com/pricing).

## 🚀 Déploiement en Production

### Vercel / Netlify

1. Ajoutez les variables d'environnement dans les settings du projet :
   - `RESEND_API_KEY`
   - `CONTACT_EMAIL`

2. Redéployez votre site

### Autres plateformes

Consultez la documentation de votre hébergeur pour ajouter des variables d'environnement.

## 📚 Ressources

- [Documentation Resend](https://resend.com/docs)
- [API Reference](https://resend.com/docs/api-reference)
- [Dashboard Resend](https://resend.com/dashboard)

## ✅ Checklist Finale

Avant de passer en production :

- [ ] Compte Resend créé et vérifié
- [ ] Clé API générée et configurée
- [ ] Variables d'environnement définies
- [ ] Formulaire testé en local
- [ ] Email reçu avec succès
- [ ] Domaine personnalisé configuré (optionnel)
- [ ] Variables d'environnement ajoutées sur la plateforme de déploiement
- [ ] Site redéployé et testé en production

## 🎉 C'est terminé !

Votre formulaire de contact est maintenant opérationnel avec Resend API. Vous recevrez tous les messages directement dans votre boîte mail professionnelle.

Pour toute question : [support@resend.com](mailto:support@resend.com)

