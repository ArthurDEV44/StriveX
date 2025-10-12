# Utilitaires TypeScript

Ce dossier contient tous les utilitaires TypeScript réutilisables pour l'application StriveX. Ces modules permettent d'éviter la duplication de code et de maintenir une logique cohérente à travers l'application.

## 📦 Modules disponibles

### 1. `intersection-observer.ts`

Gère l'Intersection Observer pour animer les éléments au scroll avec respect des préférences d'accessibilité.

**Utilisation :**
```typescript
import { initIntersectionObserver } from '@/utils';

initIntersectionObserver('.my-elements', {
  rootMargin: '0px 0px -100px 0px',
  threshold: 0.1,
  unobserveOnIntersect: true
});
```

**Options :**
- `rootMargin` : Marge autour de la zone d'observation (défaut : `'0px 0px -100px 0px'`)
- `threshold` : Pourcentage de visibilité nécessaire (défaut : `0.1`)
- `onIntersect` : Callback personnalisé lors de l'intersection
- `unobserveOnIntersect` : Arrêter d'observer après l'intersection (défaut : `true`)

**Fonctionnalités :**
- ✅ Respecte `prefers-reduced-motion`
- ✅ Fallback pour navigateurs sans support
- ✅ Auto-cleanup après intersection

---

### 2. `form-validation.ts`

Utilitaires pour la validation de formulaires avec accessibilité complète.

**Utilisation :**
```typescript
import { initFormValidation, validateAllFields, showSuccessMessage } from '@/utils';
import type { FormFieldConfig } from '@/utils';

const formFields: FormFieldConfig[] = [
  { id: 'name', required: true, type: 'text' },
  { id: 'email', required: true, type: 'email' }
];

// Initialiser la validation en temps réel
initFormValidation('my-form', formFields);

// Valider tous les champs
const { isValid, firstInvalidField } = validateAllFields(formFields);

// Afficher un message de succès
showSuccessMessage('success-message-id', 5000);
```

**Fonctions disponibles :**
- `showError(fieldId, show)` : Affiche/masque un message d'erreur
- `validateField(field)` : Valide un champ individuel
- `initFormValidation(formId, fields)` : Initialise la validation en temps réel
- `validateAllFields(fields)` : Valide tous les champs d'un coup
- `showSuccessMessage(messageId, duration)` : Affiche un message de succès accessible

**Fonctionnalités :**
- ✅ Validation en temps réel (blur + input)
- ✅ Validation email avec regex
- ✅ Gestion ARIA (aria-invalid)
- ✅ Annonces pour lecteurs d'écran
- ✅ Focus automatique sur premier champ invalide

---

### 3. `smooth-scroll.ts`

Gère le scroll fluide avec offset pour la navbar.

**Utilisation :**
```typescript
import { initSmoothScroll, scrollToElement } from '@/utils';

// Initialiser pour tous les liens
initSmoothScroll('a[href^="#"]', { offset: 100 });

// Scroll vers un élément spécifique
scrollToElement('my-section', { offset: 100, behavior: 'smooth' });
```

**Options :**
- `offset` : Hauteur à soustraire (pour navbar fixe) (défaut : `100`)
- `behavior` : Type de scroll : `'smooth'` ou `'auto'` (défaut : `'smooth'`)

---

### 4. `focus-trap.ts`

Crée un focus trap accessible pour modales et menus mobiles.

**Utilisation :**
```typescript
import { createFocusTrap } from '@/utils';

const element = document.getElementById('my-modal');
const focusTrap = createFocusTrap(element);

// Activer le trap
focusTrap.activate();

// Désactiver le trap
focusTrap.deactivate();
```

**Fonctionnalités :**
- ✅ Gestion automatique des touches Tab et Shift+Tab
- ✅ Focus sur le premier élément focusable à l'activation
- ✅ Boucle du focus (premier ↔ dernier élément)

---

### 5. `mobile-menu.ts`

Classe complète pour gérer un menu mobile avec accessibilité.

**Utilisation :**
```typescript
import { MobileMenu } from '@/utils';

const menu = new MobileMenu({
  menuButtonId: 'menu-button',
  closeButtonId: 'close-button',
  menuId: 'mobile-menu',
  overlayId: 'overlay',
  navLinkSelectors: ['.nav-link', '.cta-button']
});

// Méthodes disponibles
menu.open();
menu.close();
menu.toggle();
```

**Configuration :**
- `menuButtonId` : ID du bouton d'ouverture
- `closeButtonId` : ID du bouton de fermeture
- `menuId` : ID du menu
- `overlayId` : ID de l'overlay
- `navLinkSelectors` : Sélecteurs des liens (fermeture auto au clic)

**Fonctionnalités :**
- ✅ Focus trap automatique
- ✅ Gestion du scroll du body
- ✅ Fermeture avec Escape
- ✅ Gestion complète ARIA
- ✅ Compensation de la scrollbar

---

### 6. `navbar-scroll.ts`

Gère l'effet de scroll sur la navbar (ajout d'ombre).

**Utilisation :**
```typescript
import { initNavbarScrollEffect } from '@/utils';

initNavbarScrollEffect('nav[role="navigation"]', {
  scrollThreshold: 50,
  shadowClass: 'shadow-md'
});
```

**Options :**
- `scrollThreshold` : Seuil de scroll en pixels (défaut : `50`)
- `shadowClass` : Classe CSS à ajouter (défaut : `'shadow-md'`)

---

### 7. `faq-accordion.ts`

Gère l'accessibilité des accordéons FAQ (gestion `aria-expanded`).

**Utilisation :**
```typescript
import { initFaqAccessibility } from '@/utils';

initFaqAccessibility('.faq-item');
```

**Fonctionnalités :**
- ✅ Synchronisation automatique de `aria-expanded` avec l'état `open`
- ✅ Écoute de l'événement `toggle` natif

---

## 🚀 Import centralisé

Tous les utilitaires sont exportés depuis `src/utils/index.ts` :

```typescript
import { 
  initIntersectionObserver,
  initFormValidation,
  validateAllFields,
  showSuccessMessage,
  initSmoothScroll,
  scrollToElement,
  createFocusTrap,
  MobileMenu,
  initNavbarScrollEffect,
  initFaqAccessibility
} from '@/utils';

import type { 
  FormFieldConfig, 
  IntersectionObserverOptions,
  SmoothScrollOptions,
  MobileMenuConfig 
} from '@/utils';
```

---

## 📁 Structure

```
src/utils/
├── README.md                    # Cette documentation
├── index.ts                     # Export centralisé
├── intersection-observer.ts     # Animations au scroll
├── form-validation.ts           # Validation de formulaires
├── smooth-scroll.ts             # Scroll fluide
├── focus-trap.ts                # Piège de focus
├── mobile-menu.ts               # Menu mobile
├── navbar-scroll.ts             # Effet de scroll navbar
└── faq-accordion.ts             # Accessibilité FAQ
```

---

## ✨ Bonnes pratiques

1. **Toujours importer depuis `@/utils`** pour bénéficier de l'auto-complétion
2. **Utiliser les types TypeScript** fournis pour éviter les erreurs
3. **Respecter l'accessibilité** : tous ces utilitaires sont conçus pour être accessibles
4. **Documenter les modifications** : si vous modifiez un utilitaire, mettez à jour cette doc

---

## 🔧 Configuration requise

L'alias `@` est configuré dans :
- `tsconfig.json` → paths
- `astro.config.mjs` → vite.resolve.alias

Pour utiliser l'alias dans d'autres contextes (Tailwind, etc.), ajoutez la configuration appropriée.

---

## 🐛 Debugging

Si vous rencontrez des problèmes d'import :

1. Vérifiez que l'alias `@` est bien configuré dans `tsconfig.json`
2. Redémarrez le serveur de développement
3. Vérifiez que le chemin d'import commence par `@/utils`
4. Assurez-vous que le fichier existe dans `src/utils/`

---

## 📝 Contribution

Pour ajouter un nouvel utilitaire :

1. Créez le fichier dans `src/utils/`
2. Exportez-le depuis `src/utils/index.ts`
3. Ajoutez la documentation ici
4. Mettez à jour les types si nécessaire
5. Testez l'accessibilité

---

**Dernière mise à jour :** Octobre 2025

