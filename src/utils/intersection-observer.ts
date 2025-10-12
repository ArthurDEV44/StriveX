/**
 * Utilitaire pour gérer l'Intersection Observer et animer les éléments au scroll
 * Respecte la préférence utilisateur pour les animations réduites
 */

export interface IntersectionObserverOptions {
  rootMargin?: string;
  threshold?: number;
  onIntersect?: (entry: IntersectionObserverEntry) => void;
  unobserveOnIntersect?: boolean;
}

/**
 * Initialise l'Intersection Observer pour animer des éléments au scroll
 * @param selector - Sélecteur CSS des éléments à observer
 * @param options - Options de configuration
 */
export function initIntersectionObserver(
  selector: string,
  options: IntersectionObserverOptions = {}
): IntersectionObserver | null {
  const {
    rootMargin = '0px 0px -100px 0px',
    threshold = 0.1,
    onIntersect,
    unobserveOnIntersect = true
  } = options;

  const elements = document.querySelectorAll(selector);
  if (elements.length === 0) return null;

  // Vérifier la préférence d'animation de l'utilisateur
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    // Si préférence réduite ou pas de support, afficher directement
    elements.forEach((element) => {
      element.classList.add('in-view');
      if (onIntersect) {
        onIntersect({ target: element, isIntersecting: true } as IntersectionObserverEntry);
      }
    });
    return null;
  }

  const observerOptions: IntersectionObserverInit = {
    root: null,
    rootMargin,
    threshold
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        
        // Callback personnalisé
        if (onIntersect) {
          onIntersect(entry);
        }

        // Arrêter d'observer pour optimiser les performances
        if (unobserveOnIntersect) {
          observer.unobserve(entry.target);
        }
      }
    });
  }, observerOptions);

  // Observer tous les éléments
  elements.forEach((element) => {
    observer.observe(element);
  });

  return observer;
}

/**
 * Nettoie un observer et arrête toutes les observations
 * @param observer - L'observer à nettoyer
 */
export function cleanupObserver(observer: IntersectionObserver | null): void {
  if (observer) {
    observer.disconnect();
  }
}

