/**
 * Utilitaire pour gérer le menu mobile avec accessibilité complète
 */

import { createFocusTrap, type FocusTrap } from './focus-trap';

/**
 * Désactive le scroll du body
 */
function disableBodyScroll(): void {
  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
  document.body.style.overflow = 'hidden';
  document.body.style.paddingRight = `${scrollbarWidth}px`;
}

/**
 * Réactive le scroll du body
 */
function enableBodyScroll(): void {
  document.body.style.overflow = '';
  document.body.style.paddingRight = '';
}

export interface MobileMenuConfig {
  menuButtonId: string;
  closeButtonId: string;
  menuId: string;
  overlayId: string;
  navLinkSelectors?: string[];
}

/**
 * Classe pour gérer le menu mobile
 */
export class MobileMenu {
  private menuButton: HTMLButtonElement | null;
  private closeButton: HTMLButtonElement | null;
  private mobileMenu: HTMLElement | null;
  private overlay: HTMLElement | null;
  private isOpen: boolean = false;
  private focusTrap: FocusTrap | null = null;
  private navLinkSelectors: string[];

  constructor(config: MobileMenuConfig) {
    const {
      menuButtonId,
      closeButtonId,
      menuId,
      overlayId,
      navLinkSelectors = ['.mobile-nav-link', '.cta-button-mobile']
    } = config;

    this.menuButton = document.getElementById(menuButtonId) as HTMLButtonElement;
    this.closeButton = document.getElementById(closeButtonId) as HTMLButtonElement;
    this.mobileMenu = document.getElementById(menuId);
    this.overlay = document.getElementById(overlayId);
    this.navLinkSelectors = navLinkSelectors;

    this.init();
  }

  private init(): void {
    if (!this.menuButton || !this.mobileMenu || !this.overlay || !this.closeButton) {
      console.warn('MobileMenu: Required elements not found');
      return;
    }

    // Initialiser le focus trap
    this.focusTrap = createFocusTrap(this.mobileMenu);

    // Event listeners
    this.menuButton.addEventListener('click', () => this.open());
    this.closeButton.addEventListener('click', () => this.close());
    this.overlay.addEventListener('click', () => this.close());

    // Fermer avec la touche Escape
    document.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.key === 'Escape' && this.isOpen) {
        this.close();
      }
    });

    // Fermer le menu au clic sur les liens
    if (this.mobileMenu) {
      const mobileNavLinks = this.mobileMenu.querySelectorAll(
        this.navLinkSelectors.join(', ')
      );
      mobileNavLinks.forEach((link) => {
        link.addEventListener('click', () => {
          this.close();
        });
      });
    }
  }

  public open(): void {
    if (!this.mobileMenu || !this.overlay || !this.menuButton) return;

    this.isOpen = true;

    // Mettre à jour ARIA
    this.menuButton.setAttribute('aria-expanded', 'true');
    this.menuButton.setAttribute('aria-label', 'Fermer le menu de navigation');
    this.mobileMenu.setAttribute('aria-hidden', 'false');
    this.overlay.setAttribute('aria-hidden', 'false');

    // Changements visuels
    this.mobileMenu.classList.remove('translate-x-full');
    this.overlay.classList.remove('opacity-0', 'invisible');

    // Désactiver le scroll
    disableBodyScroll();

    // Activer le focus trap
    if (this.focusTrap) {
      this.focusTrap.activate();
    }
  }

  public close(): void {
    if (!this.mobileMenu || !this.overlay || !this.menuButton) return;

    this.isOpen = false;

    // Mettre à jour ARIA
    this.menuButton.setAttribute('aria-expanded', 'false');
    this.menuButton.setAttribute('aria-label', 'Ouvrir le menu de navigation');
    this.mobileMenu.setAttribute('aria-hidden', 'true');
    this.overlay.setAttribute('aria-hidden', 'true');

    // Changements visuels
    this.mobileMenu.classList.add('translate-x-full');
    this.overlay.classList.add('opacity-0', 'invisible');

    // Réactiver le scroll
    enableBodyScroll();

    // Désactiver le focus trap et retourner le focus
    if (this.focusTrap) {
      this.focusTrap.deactivate();
    }
    this.menuButton.focus();
  }

  public toggle(): void {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }
}

