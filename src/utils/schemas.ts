import { z } from 'zod';

// Schéma de validation pour les données du formulaire de contact
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Le nom doit contenir au moins 2 caractères')
    .max(100, 'Le nom ne peut pas dépasser 100 caractères')
    .regex(/^[a-zA-ZÀ-ÿ\s\-']+$/, 'Le nom ne peut contenir que des lettres, espaces, tirets et apostrophes'),
  
  email: z
    .string()
    .email('Veuillez entrer une adresse email valide')
    .max(255, 'L\'email ne peut pas dépasser 255 caractères')
    .toLowerCase(),
  
  pack: z
    .string()
    .optional()
    .refine((val) => {
      if (!val || val === '') return true; // Champ optionnel
      const validPacks = ['Launch', 'Scale', 'Enterprise'];
      return validPacks.includes(val);
    }, 'Pack non valide'),
  
  message: z
    .string()
    .min(10, 'Le message doit contenir au moins 10 caractères')
    .max(5000, 'Le message ne peut pas dépasser 5000 caractères')
    .refine((val) => {
      // Filtrer les tentatives d'injection de code
      const dangerousPatterns = [
        /<script/i,
        /javascript:/i,
        /on\w+\s*=/i,
        /data:/i,
        /vbscript:/i
      ];
      return !dangerousPatterns.some(pattern => pattern.test(val));
    }, 'Le message contient du contenu non autorisé')
});

// Type TypeScript dérivé du schéma
export type ContactFormData = z.infer<typeof contactFormSchema>;

// Schéma pour les réponses de l'API
export const apiResponseSchema = z.object({
  success: z.boolean(),
  error: z.string().optional(),
  messageId: z.string().optional()
});

export type ApiResponse = z.infer<typeof apiResponseSchema>;

// Fonction utilitaire pour valider les données
export function validateContactForm(data: unknown): {
  success: boolean;
  data?: ContactFormData;
  errors?: string[];
} {
  try {
    const validatedData = contactFormSchema.parse(data);
    return {
      success: true,
      data: validatedData
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        errors: error.issues.map(err => err.message)
      };
    }
    return {
      success: false,
      errors: ['Erreur de validation inattendue']
    };
  }
}
