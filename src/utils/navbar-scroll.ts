/**
 * Utilitaire pour gérer l'effet de scroll sur la navbar
 */

export interface NavbarScrollOptions {
  scrollThreshold?: number;
  shadowClass?: string;
}

/**
 * Initialise l'effet de scroll sur la navbar
 */
export function initNavbarScrollEffect(
  navbarSelector: string = 'nav[role="navigation"]',
  options: NavbarScrollOptions = {}
): void {
  const { scrollThreshold = 50, shadowClass = 'shadow-md' } = options;
  
  const navbar = document.querySelector(navbarSelector);
  if (!navbar) return;

  const handleScroll = (): void => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > scrollThreshold) {
      navbar.classList.add(shadowClass);
    } else {
      navbar.classList.remove(shadowClass);
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
}

