/**
 * Export centralisé de tous les utilitaires
 */

// Intersection Observer
export { initIntersectionObserver, cleanupObserver } from './intersection-observer';
export type { IntersectionObserverOptions } from './intersection-observer';

// Form Validation
export {
  showError,
  validateField,
  initFormValidation,
  validateAllFields,
  showSuccessMessage
} from './form-validation';
export type { FormFieldConfig } from './form-validation';

// Smooth Scroll
export { scrollToElement, initSmoothScroll } from './smooth-scroll';
export type { SmoothScrollOptions } from './smooth-scroll';

// Focus Trap
export { createFocusTrap } from './focus-trap';
export type { FocusTrap } from './focus-trap';

// Mobile Menu
export { MobileMenu } from './mobile-menu';
export type { MobileMenuConfig } from './mobile-menu';

// Navbar Scroll
export { initNavbarScrollEffect } from './navbar-scroll';
export type { NavbarScrollOptions } from './navbar-scroll';

// FAQ Accordion
export { initFaqAccessibility } from './faq-accordion';

// Schemas de validation
export { 
  contactFormSchema, 
  apiResponseSchema, 
  validateContactForm 
} from './schemas';
export type { ContactFormData, ApiResponse } from './schemas';

// Validation côté client
export { 
  validateFormData, 
  validateField as validateFieldClient,
  clientContactFormSchema 
} from './client-validation';

