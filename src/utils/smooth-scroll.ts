/**
 * Utilitaire pour le smooth scroll avec offset pour la navbar
 */

export interface SmoothScrollOptions {
  offset?: number;
  behavior?: ScrollBehavior;
}

/**
 * Scrolle vers un élément avec un offset pour la navbar
 */
export function scrollToElement(
  targetId: string,
  options: SmoothScrollOptions = {}
): void {
  const { offset = 100, behavior = 'smooth' } = options;
  
  const targetElement = document.getElementById(targetId);
  if (!targetElement) return;

  const offsetTop = targetElement.offsetTop - offset;

  window.scrollTo({
    top: offsetTop,
    behavior
  });
}

/**
 * Initialise le smooth scroll pour tous les liens avec href="#..."
 */
export function initSmoothScroll(
  selector: string = 'a[href^="#"]',
  options: SmoothScrollOptions = {}
): void {
  const links = document.querySelectorAll(selector);

  links.forEach((link) => {
    link.addEventListener('click', (e: Event) => {
      const target = e.currentTarget as HTMLAnchorElement;
      const href = target.getAttribute('href');

      if (href && href.startsWith('#') && href.length > 1) {
        e.preventDefault();
        const targetId = href.substring(1);
        scrollToElement(targetId, options);
      }
    });
  });
}

