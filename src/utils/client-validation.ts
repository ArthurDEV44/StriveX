import { z } from 'zod';

// Schéma simplifié pour la validation côté client
export const clientContactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Le nom doit contenir au moins 2 caractères')
    .max(100, 'Le nom ne peut pas dépasser 100 caractères'),
  
  email: z
    .string()
    .email('Veuillez entrer une adresse email valide'),
  
  pack: z
    .string()
    .optional(),
  
  message: z
    .string()
    .min(10, 'Le message doit contenir au moins 10 caractères')
    .max(5000, 'Le message ne peut pas dépasser 5000 caractères')
});

// Fonction de validation côté client
export function validateFormData(formData: FormData): {
  success: boolean;
  data?: Record<string, string>;
  errors?: Record<string, string>;
} {
  try {
    const data = {
      name: formData.get('name') as string || '',
      email: formData.get('email') as string || '',
      pack: formData.get('pack') as string || '',
      message: formData.get('message') as string || ''
    };

    const validatedData = clientContactFormSchema.parse(data);
    
    return {
      success: true,
      data: validatedData as Record<string, string>
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors: Record<string, string> = {};
      error.issues.forEach((err) => {
        if (err.path[0]) {
          errors[err.path[0] as string] = err.message;
        }
      });
      
      return {
        success: false,
        errors
      };
    }
    
    return {
      success: false,
      errors: { general: 'Erreur de validation' }
    };
  }
}

// Fonction pour valider un champ individuel
export function validateField(name: string, value: string): {
  isValid: boolean;
  error?: string;
} {
  try {
    let fieldSchema: z.ZodString;
    
    switch (name) {
      case 'name':
        fieldSchema = z.string().min(2, 'Le nom doit contenir au moins 2 caractères').max(100, 'Le nom ne peut pas dépasser 100 caractères');
        break;
      case 'email':
        fieldSchema = z.string().email('Veuillez entrer une adresse email valide');
        break;
      case 'message':
        fieldSchema = z.string().min(10, 'Le message doit contenir au moins 10 caractères').max(5000, 'Le message ne peut pas dépasser 5000 caractères');
        break;
      default:
        fieldSchema = z.string();
    }
    
    fieldSchema.parse(value);
    return { isValid: true };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        isValid: false,
        error: error.issues[0]?.message || 'Valeur invalide'
      };
    }
    
    return {
      isValid: false,
      error: 'Erreur de validation'
    };
  }
}
