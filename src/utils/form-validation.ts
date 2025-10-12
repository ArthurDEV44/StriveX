/**
 * Utilitaire pour la validation de formulaires avec accessibilité
 */

export interface FormFieldConfig {
  id: string;
  required?: boolean;
  type?: 'text' | 'email' | 'textarea';
  customValidation?: (value: string) => boolean;
}

/**
 * Affiche ou masque un message d'erreur pour un champ
 */
export function showError(fieldId: string, show: boolean): void {
  const field = document.getElementById(fieldId) as HTMLInputElement | HTMLTextAreaElement;
  const error = document.getElementById(`${fieldId}-error`);

  if (!field || !error) return;

  if (show) {
    error.classList.remove('hidden');
    field.setAttribute('aria-invalid', 'true');
    field.classList.add('border-red-500');
  } else {
    error.classList.add('hidden');
    field.setAttribute('aria-invalid', 'false');
    field.classList.remove('border-red-500');
  }
}

/**
 * Valide un champ de formulaire
 */
export function validateField(field: HTMLInputElement | HTMLTextAreaElement): boolean {
  let isValid = true;

  if (field.hasAttribute('required') && !field.value.trim()) {
    isValid = false;
  } else if (field.type === 'email') {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    isValid = emailRegex.test(field.value);
  }

  showError(field.id, !isValid && field.value.length > 0);
  return isValid;
}

/**
 * Initialise la validation en temps réel sur un formulaire
 */
export function initFormValidation(formId: string, fields: FormFieldConfig[]): void {
  const form = document.getElementById(formId) as HTMLFormElement;
  if (!form) return;

  fields.forEach(({ id }) => {
    const field = document.getElementById(id) as HTMLInputElement | HTMLTextAreaElement;
    if (field) {
      // Validation au blur
      field.addEventListener('blur', () => validateField(field));

      // Validation à la saisie si le champ était invalide
      field.addEventListener('input', () => {
        if (field.classList.contains('border-red-500')) {
          validateField(field);
        }
      });
    }
  });
}

/**
 * Valide tous les champs d'un formulaire
 */
export function validateAllFields(fields: FormFieldConfig[]): {
  isValid: boolean;
  firstInvalidField: HTMLElement | null;
} {
  let firstInvalidField: HTMLElement | null = null;
  let allValid = true;

  fields.forEach(({ id }) => {
    const field = document.getElementById(id) as HTMLInputElement | HTMLTextAreaElement;
    if (field) {
      const isValid = validateField(field);
      if (!isValid) {
        allValid = false;
        if (!firstInvalidField) {
          firstInvalidField = field;
        }
      }
    }
  });

  return { isValid: allValid, firstInvalidField };
}

/**
 * Affiche un message de succès accessible
 */
export function showSuccessMessage(messageId: string, duration: number = 5000): void {
  const successMessage = document.getElementById(messageId);
  if (!successMessage) return;

  successMessage.classList.remove('hidden');
  successMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

  // Annoncer aux lecteurs d'écran
  const announcement = document.createElement('div');
  announcement.setAttribute('role', 'status');
  announcement.setAttribute('aria-live', 'polite');
  announcement.className = 'sr-only';
  announcement.textContent = 'Message envoyé avec succès. Nous vous répondrons sous 24 heures.';
  document.body.appendChild(announcement);

  setTimeout(() => document.body.removeChild(announcement), 3000);

  // Masquer après le délai
  setTimeout(() => {
    successMessage.classList.add('hidden');
  }, duration);
}

