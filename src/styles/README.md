# Architecture CSS - StriveX

Cette architecture CSS modulaire facilite la maintenance et le scaling de l'application. Tous les styles sont centralisés dans le dossier `src/styles/` et importés via `global.css`.

## 📁 Structure des fichiers

```
src/styles/
├── README.md              # Cette documentation
├── global.css             # Point d'entrée - Imports centralisés
├── accessibility.css      # Styles d'accessibilité (WCAG AA+)
├── animations.css         # Animations réutilisables
├── buttons.css            # Styles des boutons CTA
├── components.css         # Composants réutilisables
└── utilities.css          # Classes utilitaires
```

---

## 🎨 Fichiers CSS

### 1. **global.css**

Point d'entrée principal qui importe tous les modules CSS.

**Contient :**
- Imports de tous les modules CSS
- Déclarations `@font-face` pour PP Mori
- Overrides spéciaux pour les boutons CTA (effets visuels avancés)
- Styles de base du body

**Ordre d'import :**
1. Tailwind CSS
2. Accessibilité
3. Animations
4. Boutons
5. Composants
6. Utilitaires

---

### 2. **accessibility.css**

Styles pour l'accessibilité conformes WCAG AA et AAA.

**Contient :**
- `.sr-only` - Masque visuellement mais reste accessible aux lecteurs d'écran
- `:focus-visible` - Focus clavier amélioré
- `abbr[title]` - Styles pour abréviations avec tooltip
- `summary` - Styles accessibles pour accordéons
- Validation de formulaires
- Select custom accessible
- Touch targets (min 44x44px)
- Smooth scroll avec offset

**Usage :**
```html
<!-- Screen reader only -->
<span class="sr-only">Texte pour lecteurs d'écran uniquement</span>

<!-- Abréviation accessible -->
<abbr title="Règlement Général sur la Protection des Données">RGPD</abbr>
```

---

### 3. **animations.css**

Toutes les animations réutilisables avec respect automatique de `prefers-reduced-motion`.

**Contient :**
- `@keyframes fadeInUp` - Fade in avec translation vers le haut
- `@keyframes fadeInScale` - Fade in avec scale
- `@keyframes shimmer` - Effet de brillance
- Classes utilitaires : `.animate-fade-in-up`, `.animation-delay-*`
- Media query `prefers-reduced-motion` pour désactiver toutes les animations

**Usage :**
```html
<div class="animate-fade-in-up animation-delay-400">
  Contenu animé
</div>
```

**Performance :**
- Utilisation de `animation-fill-mode: forwards`
- Support automatique de `prefers-reduced-motion`
- Optimisations via `will-change`

---

### 4. **buttons.css**

Styles des boutons Call-To-Action (CTA).

**Variantes :**

1. **`.cta-button`** - Bouton principal (dark)
   - Gradient sombre (#2d2d2d → #1a1a1a)
   - Effet shimmer au hover
   - Transform scale au hover
   - Shadow progressive

2. **`.cta-button-light`** - Bouton secondaire (light)
   - Background blanc avec bordure
   - Effet shimmer subtil
   - Shadow au hover
   - Transform minimale

3. **`.cta-button-mobile`** - Bouton mobile
   - Background sombre
   - Touch feedback optimisé
   - Shadow adaptée mobile

**États :**
- `:hover` - Effets visuels au survol
- `:active` - Feedback tactile
- `:disabled` - État désactivé
- Touch feedback pour mobile

**Usage :**
```html
<!-- Bouton primaire -->
<button class="cta-button">
  Action principale
</button>

<!-- Bouton secondaire -->
<button class="cta-button-light">
  Action secondaire
</button>
```

---

### 5. **components.css**

Styles des composants réutilisables de l'application.

**Composants inclus :**

#### Feature Cards (`.feature-card`)
- Animation fadeInScale
- Hover effect (desktop uniquement)
- Touch feedback mobile
- Min-height sur mobile (200px)

#### Pricing Cards (`.pricing-card`)
- Animation fadeInScale
- Gestion spéciale carte populaire (`.lg:scale-105`)
- Optimisation performance avec `will-change`
- Responsive mobile

#### Process Steps (`.process-step`)
- Animation fadeInUp
- Touch feedback
- Focus within

#### FAQ Accordion (`.faq-item`)
- Animation fadeInUp
- Chevron rotation avec `details[open]`
- Border radius dynamique

#### Navbar
- `.nav-link` / `.mobile-nav-link`
- `#mobile-menu` - Menu mobile avec transform
- `#mobile-menu-overlay` - Overlay avec opacity

**Usage :**
```html
<div class="feature-card">
  Contenu de la feature
</div>

<div class="pricing-card">
  Contenu du pricing
</div>
```

---

### 6. **utilities.css**

Classes utilitaires réutilisables.

**Catégories :**

#### Scroll & Navigation
- `.scroll-mt-24` - Scroll margin pour ancres (6rem)

#### Focus & Interactions
- `.focus-within\:ring-2` - Focus visible pour cards

#### Typography
- `.antialiased` - Font smoothing

#### Layout
- `.container-padding` - Padding responsive

#### Shadows
- `.shadow-card` - Ombre de base
- `.shadow-card-hover` - Ombre au hover

#### Transitions
- `.transition-default` - 0.3s
- `.transition-fast` - 0.15s
- `.transition-slow` - 0.5s

#### États
- `.loading` - État de chargement
- `.disabled` - État désactivé

#### Responsive Helpers
- `.hide-mobile` - Masquer sur mobile (< 640px)
- `.hide-desktop` - Masquer sur desktop (> 640px)

#### Print
- Optimisations pour l'impression
- Masquage nav/footer
- Affichage URLs des liens

**Usage :**
```html
<div class="shadow-card transition-default">
  Carte avec ombre et transition
</div>
```

---

## 🚀 Bonnes pratiques

### 1. **Ajouter un nouveau style**

**Pour un style de composant :**
```css
/* components.css */
.my-component {
  /* styles */
}
```

**Pour une animation :**
```css
/* animations.css */
@keyframes myAnimation {
  /* keyframes */
}
```

**Pour un utilitaire :**
```css
/* utilities.css */
.my-utility {
  /* styles */
}
```

### 2. **Ordre de priorité CSS**

1. Tailwind utilities (plus haute priorité)
2. Classes globales (global.css overrides)
3. Classes de composants
4. Classes utilitaires
5. Animations
6. Accessibilité (toujours respectée)

### 3. **Accessibilité**

✅ **Toujours inclure :**
- Focus visible
- Screen reader text (`.sr-only`)
- Touch targets minimaux (44x44px)
- Respect de `prefers-reduced-motion`
- Contraste WCAG AA minimum

### 4. **Performance**

✅ **Optimisations :**
- Utiliser `will-change` judicieusement
- Préférer `transform` et `opacity` pour animations
- Limiter les animations simultanées
- Respecter `prefers-reduced-motion`

❌ **Éviter :**
- Animations de `width` ou `height`
- `will-change` permanent
- Trop de shadows complexes
- Animations sur mobile sans media query

### 5. **Responsive**

```css
/* Mobile first approach */
.my-class {
  /* Styles mobile */
}

/* Desktop */
@media (min-width: 768px) {
  .my-class {
    /* Styles desktop */
  }
}

/* Hover uniquement sur desktop */
@media (hover: hover) and (pointer: fine) {
  .my-class:hover {
    /* Hover effects */
  }
}

/* Touch feedback mobile */
@media (hover: none) and (pointer: coarse) {
  .my-class:active {
    /* Touch feedback */
  }
}
```

---

## 📝 Maintenance

### Ajouter un nouveau module

1. Créer le fichier dans `src/styles/`
2. Ajouter l'import dans `global.css`
3. Documenter dans ce README
4. Tester l'accessibilité
5. Vérifier les performances

### Modifier un style existant

1. Identifier le module concerné
2. Modifier le fichier approprié
3. Tester sur tous les breakpoints
4. Vérifier `prefers-reduced-motion`
5. Valider l'accessibilité

### Supprimer un style

1. Vérifier les dépendances (grep dans le projet)
2. Supprimer du module CSS
3. Tester que rien n'est cassé
4. Mettre à jour la documentation

---

## 🧪 Tests

### Checklist avant commit

- [ ] Pas d'erreurs de linting
- [ ] Test sur Chrome, Firefox, Safari
- [ ] Test mobile (iOS + Android)
- [ ] Test avec `prefers-reduced-motion`
- [ ] Test de contraste (WCAG AA)
- [ ] Test au clavier (navigation Tab)
- [ ] Test avec lecteur d'écran

### Outils recommandés

- **Chrome DevTools** - Lighthouse (accessibilité + performance)
- **axe DevTools** - Tests d'accessibilité automatisés
- **WAVE** - Extension pour vérifier WCAG
- **Contrast Checker** - Vérifier les contrastes

---

## 🔄 Migration depuis inline styles

Si vous trouvez des `<style>` inline dans un composant :

1. Identifier la catégorie du style
2. Extraire dans le module CSS approprié
3. Remplacer par des classes
4. Supprimer la balise `<style>`
5. Tester le composant

**Exemple :**
```astro
<!-- Avant -->
<div class="card">...</div>
<style>
  .card { padding: 1rem; }
</style>

<!-- Après -->
<div class="card">...</div>
<!-- Style dans components.css -->
```

---

## 📚 Ressources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [MDN Web Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)
- [CSS Tricks - Accessibility](https://css-tricks.com/tag/accessibility/)

---

**Dernière mise à jour :** Octobre 2025  
**Mainteneurs :** StriveX Team

