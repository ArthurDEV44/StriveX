/**
 * Utilitaire pour créer un focus trap accessible
 * Utile pour les modales et menus mobiles
 */

const focusableSelectors = 
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

/**
 * Récupère tous les éléments focusables dans un conteneur
 */
function getFocusableElements(element: HTMLElement): HTMLElement[] {
  return Array.from(element.querySelectorAll(focusableSelectors));
}

/**
 * Gère la touche Tab pour piéger le focus
 */
function handleTabKey(element: HTMLElement, e: KeyboardEvent): void {
  const focusableElements = getFocusableElements(element);
  if (focusableElements.length === 0) return;

  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  if (e.key === 'Tab') {
    if (e.shiftKey) {
      // Shift + Tab
      if (document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      }
    } else {
      // Tab
      if (document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    }
  }
}

export interface FocusTrap {
  activate: () => void;
  deactivate: () => void;
}

/**
 * Crée un focus trap pour un élément donné
 */
export function createFocusTrap(element: HTMLElement): FocusTrap {
  let isActive = false;
  
  const keydownHandler = (e: KeyboardEvent) => {
    if (isActive) {
      handleTabKey(element, e);
    }
  };

  return {
    activate: (): void => {
      isActive = true;
      const focusableElements = getFocusableElements(element);
      if (focusableElements.length > 0) {
        // Petit délai pour laisser l'élément s'afficher
        setTimeout(() => focusableElements[0].focus(), 50);
      }
      element.addEventListener('keydown', keydownHandler);
    },
    deactivate: (): void => {
      isActive = false;
      element.removeEventListener('keydown', keydownHandler);
    }
  };
}

