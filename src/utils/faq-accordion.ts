/**
 * Utilitaire pour gérer l'accessibilité des accordéons FAQ
 */

/**
 * Initialise la gestion aria-expanded pour les accordéons
 */
export function initFaqAccessibility(itemSelector: string = '.faq-item'): void {
  const faqItems = document.querySelectorAll(itemSelector);

  faqItems.forEach((item) => {
    const summary = item.querySelector('summary');

    if (summary) {
      // Fonction pour mettre à jour aria-expanded
      const toggleAriaExpanded = () => {
        const isOpen = item.hasAttribute('open');
        summary.setAttribute('aria-expanded', isOpen.toString());
      };

      // Initialiser l'état
      toggleAriaExpanded();

      // Écouter les changements
      item.addEventListener('toggle', toggleAriaExpanded);
    }
  });
}

