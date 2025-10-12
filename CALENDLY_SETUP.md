# 📅 Guide de Configuration Calendly pour StriveX

Ce guide vous accompagne dans la configuration complète de Calendly pour permettre à vos prospects de réserver des appels directement depuis votre site.

---

## 🎯 Pourquoi Calendly ?

Calendly vous permet de :
- ✅ Automatiser la prise de rendez-vous
- ✅ Éviter les allers-retours par email
- ✅ Synchroniser avec votre calendrier (Google, Outlook, etc.)
- ✅ Envoyer des rappels automatiques
- ✅ Offrir une expérience professionnelle à vos prospects

---

## 📋 Table des matières

1. [Créer votre compte Calendly](#1-créer-votre-compte-calendly)
2. [Configurer votre premier type d'événement](#2-configurer-votre-premier-type-dévénement)
3. [Personnaliser votre page Calendly](#3-personnaliser-votre-page-calendly)
4. [Intégrer Calendly à votre site StriveX](#4-intégrer-calendly-à-votre-site-strivex)
5. [Paramètres recommandés](#5-paramètres-recommandés)
6. [Bonnes pratiques](#6-bonnes-pratiques)
7. [Troubleshooting](#7-troubleshooting)

---

## 1. Créer votre compte Calendly

### Étape 1.1 : Inscription

1. Rendez-vous sur [calendly.com](https://calendly.com)
2. Cliquez sur **"Sign Up"**
3. Inscrivez-vous avec :
   - Votre email professionnel (`contact@strivex.dev` ou votre email perso)
   - Ou connectez-vous directement avec Google

### Étape 1.2 : Configuration initiale

Calendly vous demandera :

1. **Votre nom** : Entrez votre prénom et nom
2. **Votre URL personnalisée** : 
   - Format : `calendly.com/votre-nom`
   - Exemple : `calendly.com/strivex` ou `calendly.com/jean-dupont`
   - ⚠️ Cette URL sera visible par vos clients

3. **Connexion de votre calendrier** :
   - Connectez votre calendrier Google, Outlook ou Apple
   - Cela permet à Calendly de vérifier vos disponibilités en temps réel
   - Autorisez les permissions nécessaires

---

## 2. Configurer votre premier type d'événement

### Étape 2.1 : Créer un événement "Call découverte 15 min"

1. Sur le dashboard Calendly, cliquez sur **"Create Event Type"**
2. Choisissez **"One-on-One"** (rendez-vous 1-à-1)

### Étape 2.2 : Paramètres de base

Configurez les informations suivantes :

**Nom de l'événement** :
```
Call découverte gratuit - 15 min
```

**Lieu** :
- Sélectionnez **"Zoom"** ou **"Google Meet"** ou **"Microsoft Teams"**
- Ou choisissez **"Phone call"** si vous préférez appeler

**Description** :
```
Parlons de votre projet ! 

Durant cet appel de 15 minutes, nous allons :
✅ Comprendre votre projet et vos objectifs
✅ Identifier le pack le plus adapté à vos besoins
✅ Répondre à toutes vos questions
✅ Vous donner des premiers conseils

Aucun engagement requis. C'est gratuit et sans pression commerciale.

À très bientôt ! 🚀
```

**Durée** :
- Choisissez **15 minutes**

**Lien de l'événement** :
- Personnalisez l'URL : `/call-decouverte-15min`
- Votre lien complet sera : `calendly.com/votre-nom/call-decouverte-15min`

### Étape 2.3 : Définir vos disponibilités

1. Cliquez sur **"Availability"** dans le menu de l'événement
2. Définissez vos horaires de disponibilité :

**Exemple recommandé** :
```
Lundi à Vendredi : 9h00 - 12h00 et 14h00 - 18h00
Samedi-Dimanche : Indisponible
```

3. Configurez les paramètres avancés :
   - **Date Range** : Jusqu'à 60 jours dans le futur
   - **Minimum Notice** : 2 heures (pour éviter les réservations de dernière minute)
   - **Time Slot Increment** : 15 minutes
   - **Buffer Time** : 5-10 min entre chaque rendez-vous (pour respirer)

### Étape 2.4 : Questions supplémentaires

Ajoutez des questions pour mieux préparer votre appel :

1. Cliquez sur **"Questions"** dans l'événement
2. Ajoutez les questions suivantes :

**Question 1** :
- Type : **Short text**
- Question : `Quel est le nom de votre startup/projet ?`
- Obligatoire : ✅

**Question 2** :
- Type : **Long text (textarea)**
- Question : `En quelques mots, quel est votre projet ? (objectifs, délais)`
- Obligatoire : ✅

**Question 3** :
- Type : **Multiple choice**
- Question : `Quel pack vous intéresse ?`
- Options :
  - Launch (1 800€)
  - Scale (2 800€)
  - MVP (4 500€)
  - Je ne sais pas encore
- Obligatoire : Non

### Étape 2.5 : Notifications et rappels

1. Cliquez sur **"Notifications & Cancellation"**

**Email de confirmation** :
- Activez l'email automatique après réservation
- Personnalisez le message si vous voulez

**Rappels automatiques** :
- ✅ 1 jour avant : Email + SMS (si SMS activé)
- ✅ 1 heure avant : Email

**Politique d'annulation** :
- Autorisez les annulations jusqu'à 2h avant
- Message personnalisé : `Pas de souci si vous devez annuler ! Vous pourrez replanifier un autre créneau facilement.`

---

## 3. Personnaliser votre page Calendly

### Étape 3.1 : Branding (Plan Payant uniquement)

Si vous avez le plan payant de Calendly :

1. Allez dans **"Settings"** → **"Branding"**
2. Téléchargez votre logo StriveX
3. Choisissez vos couleurs de marque :
   - Couleur principale : `#2d2d2d` (votre noir)
   - Couleur secondaire : `#ffffff` (blanc)

### Étape 3.2 : Page d'accueil Calendly

1. Allez dans **"Settings"** → **"My Link"**
2. Personnalisez votre page d'accueil Calendly :

**Bio** :
```
Agence web spécialisée en sites et MVPs pour startups 🚀

Lancez votre projet en 7 jours, pas 7 mois.
Design premium • Livraison express • Support dédié

Réservez un call gratuit de 15 minutes pour discuter de votre projet !
```

3. Ajoutez une photo professionnelle (votre photo ou logo StriveX)

---

## 4. Intégrer Calendly à votre site StriveX

### Étape 4.1 : Récupérer votre lien Calendly

1. Une fois votre événement créé, copiez l'URL complète
2. Format : `https://calendly.com/votre-nom/call-decouverte-15min`

### Étape 4.2 : Mettre à jour votre configuration

Ouvrez le fichier `src/site.config.ts` et mettez à jour la ligne 9 :

```typescript
links: {
  email: "contact@strivex.dev",
  calendly: "https://calendly.com/votre-nom/call-decouverte-15min", // ← Remplacez ici
  linkedin: "https://linkedin.com/company/strivex"
}
```

**Exemple concret** :
```typescript
links: {
  email: "contact@strivex.dev",
  calendly: "https://calendly.com/jean-dupont/call-decouverte-15min",
  linkedin: "https://linkedin.com/company/strivex"
}
```

### Étape 4.3 : Tester l'intégration

1. Sauvegardez le fichier `site.config.ts`
2. Si votre serveur de dev tourne, il se rechargera automatiquement
3. Allez sur votre site à la section Contact
4. Cliquez sur **"Choisir un créneau"**
5. Vérifiez que vous arrivez bien sur votre page Calendly

---

## 5. Paramètres recommandés

### ⚙️ Configuration optimale pour votre usage

#### Disponibilités
```
✅ Lundi - Vendredi : 9h-18h (avec pause déjeuner 12h-14h)
✅ Préavis minimum : 2 heures
✅ Durée de l'événement : 15 minutes
✅ Buffer entre rendez-vous : 10 minutes
✅ Date limite de réservation : 60 jours
```

#### Intégrations recommandées
- **Calendrier** : Google Calendar ou Outlook (obligatoire)
- **Visioconférence** : Zoom, Google Meet ou Microsoft Teams
- **Email** : Gmail (pour les notifications)

#### Options pratiques
- ✅ **Fuseau horaire** : Détection automatique du visiteur
- ✅ **Langue** : Français
- ✅ **Confirmation** : Email automatique immédiat
- ✅ **Rappels** : 24h et 1h avant
- ✅ **Annulation** : Possible jusqu'à 2h avant

---

## 6. Bonnes pratiques

### 🎯 Optimiser votre taux de conversion

1. **Durée courte** : 15 min est parfait - pas intimidant, facile à caser dans un agenda
2. **Questions préalables** : Préparez l'appel en récoltant des infos avant
3. **Description claire** : Expliquez précisément ce qui se passera durant l'appel
4. **Disponibilités généreuses** : Plus vous avez de créneaux, plus vous aurez de réservations
5. **Réponse rapide** : Envoyez un email de bienvenue après chaque réservation

### 📧 Email de suivi recommandé (manuel ou automatisé)

Après chaque réservation, envoyez un email :

```
Objet : Call confirmé - À très bientôt ! 🚀

Bonjour [Prénom],

Merci d'avoir réservé un call avec StriveX ! 

📅 Rendez-vous le [Date] à [Heure]
🔗 Lien de la visio : [Lien Zoom/Meet]

Pour préparer au mieux notre échange, pourriez-vous m'envoyer :
1. Un lien vers votre site actuel (si vous en avez un)
2. 2-3 sites que vous aimez au niveau du design
3. Votre deadline idéale de lancement

J'ai hâte de découvrir votre projet !

À très vite,
[Votre prénom]
StriveX
```

### 🚀 Conseils pour vos appels

1. **Soyez à l'heure** : Arrivez 2 min avant
2. **Préparez-vous** : Lisez les réponses aux questions avant l'appel
3. **Soyez à l'écoute** : Posez des questions, comprenez vraiment le besoin
4. **Pas de pression** : L'objectif est d'aider, pas de vendre à tout prix
5. **Follow-up rapide** : Envoyez un devis dans les 24h après l'appel

---

## 7. Troubleshooting

### ❌ Problème : Le lien Calendly ne fonctionne pas

**Solution** :
1. Vérifiez que vous avez bien copié l'URL complète depuis Calendly
2. Assurez-vous que l'événement est bien **"Active"** dans Calendly
3. Testez le lien en navigation privée

### ❌ Problème : Les créneaux n'apparaissent pas

**Solution** :
1. Vérifiez que vous avez bien connecté votre calendrier
2. Synchronisez manuellement votre calendrier dans Calendly
3. Vérifiez vos horaires de disponibilité
4. Assurez-vous que vous n'avez pas atteint la limite de réservations futures

### ❌ Problème : Les notifications ne partent pas

**Solution** :
1. Vérifiez vos paramètres d'email dans Calendly
2. Regardez dans vos spams
3. Vérifiez que les notifications sont activées pour cet événement

### ❌ Problème : Je veux annuler un rendez-vous

**Solution** :
1. Allez sur votre dashboard Calendly
2. Cliquez sur **"Scheduled Events"**
3. Trouvez le rendez-vous et cliquez sur **"Cancel"**
4. Le client recevra automatiquement un email d'annulation

---

## 🎉 Vous êtes prêt !

Votre Calendly est maintenant configuré et intégré à votre site StriveX !

### Checklist finale

- ✅ Compte Calendly créé
- ✅ Calendrier connecté (Google/Outlook)
- ✅ Événement "Call découverte 15 min" configuré
- ✅ Questions personnalisées ajoutées
- ✅ Disponibilités définies
- ✅ Notifications et rappels activés
- ✅ Lien mis à jour dans `site.config.ts`
- ✅ Lien testé depuis votre site

### 📊 Pour aller plus loin

**Calendly Free (0€)** :
- 1 type d'événement actif
- Intégrations calendrier basiques
- Suffisant pour débuter

**Calendly Essentials (10$/mois)** :
- Types d'événements illimités
- Suppression du branding Calendly
- Rappels SMS
- Workflows automatisés

**Calendly Professional (15$/mois)** :
- Tout ce qui précède +
- Paiements intégrés (si vous voulez faire payer les appels)
- Séquences d'emails automatiques
- Analytics avancés

---

## 💡 Besoin d'aide ?

- 📖 Documentation Calendly : [help.calendly.com](https://help.calendly.com)
- 🎥 Tutoriels vidéo : [YouTube - Calendly](https://www.youtube.com/c/Calendly)
- 💬 Support Calendly : Chat disponible sur leur site

---

**Dernière mise à jour** : Octobre 2025
**Version** : 1.0

