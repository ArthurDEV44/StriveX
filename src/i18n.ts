export const languages = {
  fr: 'Français',
  en: 'English',
};

export const defaultLang = 'fr';

export type TranslationKey = keyof typeof translations.fr;

export const translations = {
  fr: {
    // Navigation
    'nav.features': 'FONCTIONNALITÉS',
    'nav.pricing': 'OFFRES',
    'nav.process': 'PROCESSUS',
    'nav.cta': 'Réserver un appel',
    'nav.aria.features': 'Aller à la section fonctionnalités',
    'nav.aria.pricing': 'Aller à la section offres',
    'nav.aria.process': 'Aller à la section processus',
    'nav.aria.cta': 'Réserver un appel de consultation',
    
    // Hero
    'hero.title': 'Déployez votre site plus rapidement avec notre Workflow',
    'hero.subtitle': 'Sites et MVPs sur-mesure pour startups ambitieuses. Design premium, livraison express.',
    'hero.cta.primary': 'Réserver un appel gratuit (30 min)',
    'hero.cta.secondary': 'Voir nos offres',
    'hero.trust.delivery': 'Livraison rapide',
    'hero.trust.guarantee': '100% satisfait ou remboursé',
    'hero.trust.hosting': 'Hébergement 1 an inclus',
    
    // Features
    'features.heading': 'Pourquoi choisir StriveX ?',
    'features.subheading': 'On combine rapidité, qualité et expertise pour transformer votre vision en produit',
    'features.1.title': 'Profitez de notre expertise',
    'features.1.description': 'On vous accompagne de A à Z, de la maquette à la livraison en suivant un process structuré',
    'features.2.title': 'Convertissez vos visiteurs en clients',
    'features.2.description': 'Design optimisé pour la conversion, pas simplement esthétique',
    'features.3.title': 'Levez des fonds plus facilement',
    'features.3.description': 'Un site pro rassure les investisseurs',
    'features.4.title': 'Nous ne sommes pas une agence',
    'features.4.description': 'Livraison rapide et tarif abordable',
    'features.cta': 'Commencer maintenant',
    'features.cta.intro': 'Prêt à lancer votre projet ?',
    
    // Pricing
    'pricing.heading': 'Des tarifs clairs et transparents',
    'pricing.subheading': 'Choisissez le pack adapté à votre stade de développement',
    'pricing.from': 'à partir de',
    'pricing.refresh.badge': 'Redonnez vie à votre site',
    'pricing.refresh.description': 'Pour sites existants nécessitant une modernisation',
    'pricing.launch.badge': 'Parfait pour valider votre idée',
    'pricing.launch.description': 'Pour pre-seed, solo founders, side projects',
    'pricing.scale.badge': 'Parfait pour faire grandir votre business',
    'pricing.scale.description': 'Pour startups seed, SaaS en lancement',
    'pricing.mvp.badge': 'Solution complète',
    'pricing.mvp.description': 'Pour SaaS en growth, Series A, produits complexes',
    'pricing.delivery': 'Livraison :',
    'pricing.delivery.note': '* Peut varier selon le projet',
    'pricing.addons.title': 'Options à la carte',
    'pricing.addons.description': 'Combinez plusieurs options selon vos besoins',
    'pricing.addon.ai': 'Intégration IA : OpenAI / Anthropic / Mistral / Ollama / etc.',
    'pricing.addon.price': 'Sur Devis',
    
    // Process
    'process.heading': 'Comment ça marche ?',
    'process.subheading': 'Un processus simple et transparent pour concrétiser votre projet',
    'process.step1.title': 'Call découverte (30 min)',
    'process.step1.description': 'On définit vos besoins',
    'process.step1.duration': '30 min',
    'process.step2.title': 'Maquette en 48h',
    'process.step2.description': 'Vous validez le design',
    'process.step2.duration': '48h',
    'process.step3.title': 'Développement',
    'process.step3.description': 'Vous restez au courant de l\'avancement',
    'process.step3.duration': 'Selon votre projet',
    'process.step4.title': 'Déploiement & formation',
    'process.step4.description': 'Site en ligne & vous savez comment l\'utiliser',
    'process.step4.duration': '1 jour',
    'process.cta.intro': 'Prêt à démarrer ? Réservez votre créneau dès maintenant',
    'process.cta': 'Lancer mon projet',
    
    // Testimonials
    'testimonials.heading': 'Ce que disent nos clients',
    'testimonials.subheading': 'Des retours authentiques de startups qui ont fait confiance à StriveX',
    
    // FAQ
    'faq.heading': 'Questions fréquentes',
    'faq.subheading': 'Tout ce que vous devez savoir avant de vous lancer',
    'faq.cta.intro': 'Vous avez d\'autres questions ?',
    'faq.cta': 'Contactez-nous directement',
    
    // Contact
    'contact.heading': 'Prêt à lancer votre projet ?',
    'contact.subheading': 'Décrivez-nous votre projet ou réservez directement un call de 15 minutes',
    'contact.form.title': 'Envoyez-nous un message',
    'contact.form.name': 'Nom complet',
    'contact.form.email': 'Email professionnel',
    'contact.form.pack': 'Pack intéressé',
    'contact.form.pack.none': 'Je ne sais pas encore',
    'contact.form.pack.hint': 'Nous vous aiderons à choisir le pack adapté',
    'contact.form.message': 'Parlez-nous de votre projet',
    'contact.form.message.placeholder': 'Je souhaite créer...',
    'contact.form.message.hint': 'Décrivez votre projet, vos objectifs et vos délais',
    'contact.form.submit': 'Envoyer ma demande',
    'contact.form.response': 'Réponse sous 24h maximum',
    'contact.form.success': 'Message envoyé ! Nous vous répondrons sous 24h.',
    'contact.calendly.title': 'Réservez un call gratuit',
    'contact.calendly.description': '15 minutes pour discuter de votre projet sans engagement',
    'contact.calendly.cta': 'Choisir un créneau',
    'contact.email.title': 'Ou écrivez-nous directement',
    'contact.guarantees.title': 'Nos engagements :',
    'contact.guarantees.response': 'Réponse rapide (24h max)',
    'contact.guarantees.quote': 'Devis détaillé et transparent',
    'contact.guarantees.commitment': 'Aucun engagement avant validation',
    
    // Footer
    'footer.description': 'Sites et MVPs sur-mesure pour startups ambitieuses. Lancez votre projet en 7 jours, pas 7 mois.',
    'footer.nav.title': 'NAVIGATION',
    'footer.nav.features': 'Pourquoi StriveX',
    'footer.nav.pricing': 'Nos offres',
    'footer.nav.process': 'Notre processus',
    'footer.nav.faq': 'FAQ',
    'footer.nav.contact': 'Contact',
    'footer.legal.title': 'LÉGAL',
    'footer.legal.mentions': 'Mentions légales',
    'footer.legal.cgv': 'CGV',
    'footer.legal.privacy': 'Politique de confidentialité',
    'footer.copyright': 'Tous droits réservés.',
    'footer.tagline': 'Fait avec ♥ pour les startups ambitieuses',
    
    // Pricing Features
    'feature.audit': 'Audit de votre site actuel',
    'feature.refonte': 'Refonte design moderne et responsive',
    'feature.migration': 'Migration contenu incluse (max 5 pages)',
    'feature.seo.optimization': 'Optimisation SEO existant',
    'feature.bugs': 'Correction bugs et performances',
    'feature.training': 'Formation 1h à la remise',
    'feature.landing': 'Landing page 1 page complète',
    'feature.design': 'Design moderne et responsive',
    'feature.seo.basic': 'SEO de base',
    'feature.form': 'Formulaire contact/waitlist',
    'feature.hosting': 'Hébergement 1 an inclus',
    'feature.support.30': 'Support 30 jours',
    'feature.site': 'Site 5-7 pages complet',
    'feature.login': 'Espace connexion utilisateur (optionnel)',
    'feature.newsletter': 'Newsletter (Mailchimp/ConvertKit)',
    'feature.analytics': 'Analytics (GA4)',
    'feature.seo.advanced': 'SEO avancé',
    'feature.blog': 'Blog intégré',
    'feature.support.60': 'Support 60 jours',
    'feature.scale.plus': 'Tout du Pack Scale +',
    'feature.dashboard': 'Dashboard utilisateur avec features de base',
    'feature.stripe': 'Paiement Stripe intégré',
    'feature.users': 'Gestion utilisateurs (auth + rôles)',
    'feature.api': 'API documentation',
    'feature.tests': 'Tests & documentation complète',
    'feature.support.90': 'Support 90 jours',
    
    // Meta
    'meta.home.title': 'StriveX - Sites & MVPs sur-mesure pour startups',
    'meta.home.description': 'StriveX : landing pages, sites vitrine et MVPs SaaS. Design premium, livraison rapide, tarifs transparents. Pas d\'agence, du sur-mesure. Dès 990€.',
    
    // FAQs
    'faq.1.question': 'Quels sont les délais de livraison ?',
    'faq.1.answer': 'Selon le pack choisi : 10 jours pour Refresh, 14 jours pour Launch, 30 jours pour Scale et 45 jours pour MVP. Ces délais commencent après validation des maquettes et réception de tous les contenus. Les délais peuvent varier selon la complexité du projet.',
    'faq.2.question': 'Puis-je modifier mon site après livraison ?',
    'faq.2.answer': 'Absolument ! Vous pouvez profiter de notre forfait maintenance pour modifier votre site. Certaines modifications peuvent susciter des frais supplémentaires.',
    'faq.3.question': 'Quelles technologies utilisez-vous ?',
    'faq.3.answer': 'Nous utilisons des technologies modernes et éprouvées : Next.js, Astro, React, Tailwind CSS, Vercel pour l\'hébergement, etc. Le choix dépend de vos besoins spécifiques.',
    'faq.4.question': 'Que ce passe-t-il après l\'année d\'hébergement inclus ?',
    'faq.4.answer': 'Nous vous accompagnons pour upgrader selon vos besoins. Le prix varie selon la complexité du projet.',
    'faq.5.question': 'Combien coûte la maintenance après échéance du plan ?',
    'faq.5.answer': 'Nous proposons des forfaits de maintenance à partir de 200€/mois incluant : mises à jour, corrections de bugs, ajouts de contenu et support prioritaire. Le prix varie selon la complexité du projet.',
    'faq.6.question': 'Travaillez-vous avec des clients internationaux ?',
    'faq.6.answer': 'Oui, nous travaillons avec des clients en France et à l\'international. Tous nos sites peuvent être multilingues.',
  },
  en: {
    // Navigation
    'nav.features': 'FEATURES',
    'nav.pricing': 'PRICING',
    'nav.process': 'PROCESS',
    'nav.cta': 'Book a call',
    'nav.aria.features': 'Go to features section',
    'nav.aria.pricing': 'Go to pricing section',
    'nav.aria.process': 'Go to process section',
    'nav.aria.cta': 'Book a consultation call',
    
    // Hero
    'hero.title': 'Deploy your website faster with our Workflow',
    'hero.subtitle': 'Custom websites and MVPs for ambitious startups. Premium design, express delivery.',
    'hero.cta.primary': 'Book a free call (30 min)',
    'hero.cta.secondary': 'See our packages',
    'hero.trust.delivery': 'Fast delivery',
    'hero.trust.guarantee': '100% satisfied or refunded',
    'hero.trust.hosting': '1 year hosting included',
    
    // Features
    'features.heading': 'Why choose StriveX?',
    'features.subheading': 'We combine speed, quality, and expertise to transform your vision into a product',
    'features.1.title': 'Benefit from our expertise',
    'features.1.description': 'We guide you from A to Z, from mockup to delivery following a structured process',
    'features.2.title': 'Convert your visitors into customers',
    'features.2.description': 'Design optimized for conversion, not just aesthetics',
    'features.3.title': 'Raise funds more easily',
    'features.3.description': 'A professional website reassures investors',
    'features.4.title': 'We are not an agency',
    'features.4.description': 'Fast delivery and affordable pricing',
    'features.cta': 'Get started now',
    'features.cta.intro': 'Ready to launch your project?',
    
    // Pricing
    'pricing.heading': 'Clear and transparent pricing',
    'pricing.subheading': 'Choose the package that fits your stage of development',
    'pricing.from': 'from',
    'pricing.refresh.badge': 'Breathe new life into your site',
    'pricing.refresh.description': 'For existing sites requiring modernization',
    'pricing.launch.badge': 'Perfect to validate your idea',
    'pricing.launch.description': 'For pre-seed, solo founders, side projects',
    'pricing.scale.badge': 'Perfect to grow your business',
    'pricing.scale.description': 'For seed startups, launching SaaS',
    'pricing.mvp.badge': 'Complete solution',
    'pricing.mvp.description': 'For growth SaaS, Series A, complex products',
    'pricing.delivery': 'Delivery:',
    'pricing.delivery.note': '* May vary depending on the project',
    'pricing.addons.title': 'Additional options',
    'pricing.addons.description': 'Combine multiple options according to your needs',
    'pricing.addon.ai': 'AI Integration: OpenAI / Anthropic / Mistral / Ollama / etc.',
    'pricing.addon.price': 'On Quote',
    
    // Process
    'process.heading': 'How does it work?',
    'process.subheading': 'A simple and transparent process to bring your project to life',
    'process.step1.title': 'Discovery call (30 min)',
    'process.step1.description': 'We define your needs',
    'process.step1.duration': '30 min',
    'process.step2.title': 'Mockup in 48h',
    'process.step2.description': 'You validate the design',
    'process.step2.duration': '48h',
    'process.step3.title': 'Development',
    'process.step3.description': 'You stay informed of progress',
    'process.step3.duration': 'Based on your project',
    'process.step4.title': 'Deployment & training',
    'process.step4.description': 'Website online & you know how to use it',
    'process.step4.duration': '1 day',
    'process.cta.intro': 'Ready to start? Book your slot now',
    'process.cta': 'Launch my project',
    
    // Testimonials
    'testimonials.heading': 'What our clients say',
    'testimonials.subheading': 'Authentic feedback from startups that trusted StriveX',
    
    // FAQ
    'faq.heading': 'Frequently asked questions',
    'faq.subheading': 'Everything you need to know before getting started',
    'faq.cta.intro': 'Have more questions?',
    'faq.cta': 'Contact us directly',
    
    // Contact
    'contact.heading': 'Ready to launch your project?',
    'contact.subheading': 'Describe your project or book a 15-minute call directly',
    'contact.form.title': 'Send us a message',
    'contact.form.name': 'Full name',
    'contact.form.email': 'Professional email',
    'contact.form.pack': 'Interested package',
    'contact.form.pack.none': 'I don\'t know yet',
    'contact.form.pack.hint': 'We will help you choose the right package',
    'contact.form.message': 'Tell us about your project',
    'contact.form.message.placeholder': 'I want to create...',
    'contact.form.message.hint': 'Describe your project, goals, and deadlines',
    'contact.form.submit': 'Send my request',
    'contact.form.response': 'Response within 24 hours maximum',
    'contact.form.success': 'Message sent! We will reply within 24 hours.',
    'contact.calendly.title': 'Book a free call',
    'contact.calendly.description': '15 minutes to discuss your project with no commitment',
    'contact.calendly.cta': 'Choose a time slot',
    'contact.email.title': 'Or write to us directly',
    'contact.guarantees.title': 'Our commitments:',
    'contact.guarantees.response': 'Quick response (24h max)',
    'contact.guarantees.quote': 'Detailed and transparent quote',
    'contact.guarantees.commitment': 'No commitment before approval',
    
    // Footer
    'footer.description': 'Custom websites and MVPs for ambitious startups. Launch your project in 7 days, not 7 months.',
    'footer.nav.title': 'NAVIGATION',
    'footer.nav.features': 'Why StriveX',
    'footer.nav.pricing': 'Our packages',
    'footer.nav.process': 'Our process',
    'footer.nav.faq': 'FAQ',
    'footer.nav.contact': 'Contact',
    'footer.legal.title': 'LEGAL',
    'footer.legal.mentions': 'Legal notice',
    'footer.legal.cgv': 'Terms of sale',
    'footer.legal.privacy': 'Privacy policy',
    'footer.copyright': 'All rights reserved.',
    'footer.tagline': 'Made with ♥ for ambitious startups',
    
    // Pricing Features
    'feature.audit': 'Audit of your current site',
    'feature.refonte': 'Modern and responsive design overhaul',
    'feature.migration': 'Content migration included (max 5 pages)',
    'feature.seo.optimization': 'Existing SEO optimization',
    'feature.bugs': 'Bug fixes and performance',
    'feature.training': '1h training session on delivery',
    'feature.landing': 'Complete 1-page landing page',
    'feature.design': 'Modern and responsive design',
    'feature.seo.basic': 'Basic SEO',
    'feature.form': 'Contact/waitlist form',
    'feature.hosting': '1 year hosting included',
    'feature.support.30': '30 days support',
    'feature.site': 'Complete 5-7 page website',
    'feature.login': 'User login area (optional)',
    'feature.newsletter': 'Newsletter (Mailchimp/ConvertKit)',
    'feature.analytics': 'Analytics (GA4)',
    'feature.seo.advanced': 'Advanced SEO',
    'feature.blog': 'Integrated blog',
    'feature.support.60': '60 days support',
    'feature.scale.plus': 'Everything in Scale Pack +',
    'feature.dashboard': 'User dashboard with basic features',
    'feature.stripe': 'Stripe payment integration',
    'feature.users': 'User management (auth + roles)',
    'feature.api': 'API documentation',
    'feature.tests': 'Tests & complete documentation',
    'feature.support.90': '90 days support',
    
    // Meta
    'meta.home.title': 'StriveX - Custom Websites & MVPs for Startups',
    'meta.home.description': 'StriveX: landing pages, showcase websites and SaaS MVPs. Premium design, fast delivery, transparent pricing. No agency, custom work. Starting at €990.',
    
    // FAQs
    'faq.1.question': 'What are the delivery times?',
    'faq.1.answer': 'Depending on the chosen package: 10 days for Refresh, 14 days for Launch, 30 days for Scale, and 45 days for MVP. These deadlines start after mockup validation and receipt of all content. Deadlines may vary depending on project complexity.',
    'faq.2.question': 'Can I modify my site after delivery?',
    'faq.2.answer': 'Absolutely! You can take advantage of our maintenance package to modify your site. Some modifications may incur additional fees.',
    'faq.3.question': 'What technologies do you use?',
    'faq.3.answer': 'We use modern and proven technologies: Next.js, Astro, React, Tailwind CSS, Vercel for hosting, etc. The choice depends on your specific needs.',
    'faq.4.question': 'What happens after the included year of hosting?',
    'faq.4.answer': 'We will support you in upgrading according to your needs. The price varies depending on the complexity of the project.',
    'faq.5.question': 'How much does maintenance cost after the plan expires?',
    'faq.5.answer': 'We offer maintenance packages starting at €200/month including: updates, bug fixes, content additions, and priority support. The price varies depending on the complexity of the project.',
    'faq.6.question': 'Do you work with international clients?',
    'faq.6.answer': 'Yes, we work with clients in France and internationally. All our sites can be multilingual.',
  }
} as const;

// Helper function to get translations
export function useTranslations(lang: keyof typeof translations) {
  return function t(key: TranslationKey): string {
    return translations[lang][key] || translations[defaultLang][key];
  }
}

// Get locale from URL
export function getLocaleFromUrl(url: URL): keyof typeof translations {
  const [, lang] = url.pathname.split('/');
  if (lang === 'en') return 'en';
  return 'fr';
}

// Get alternate language
export function getAlternateLanguage(currentLang: keyof typeof translations): keyof typeof translations {
  return currentLang === 'fr' ? 'en' : 'fr';
}

// Get FAQs in the correct language
export function getFAQs(lang: keyof typeof translations) {
  const t = useTranslations(lang);
  return [
    { question: t('faq.1.question'), answer: t('faq.1.answer') },
    { question: t('faq.2.question'), answer: t('faq.2.answer') },
    { question: t('faq.3.question'), answer: t('faq.3.answer') },
    { question: t('faq.4.question'), answer: t('faq.4.answer') },
    { question: t('faq.5.question'), answer: t('faq.5.answer') },
    { question: t('faq.6.question'), answer: t('faq.6.answer') },
  ];
}

// Get pricing plans in the correct language
export function getPricingPlans(lang: keyof typeof translations) {
  const t = useTranslations(lang);
  return [
    {
      name: 'Refresh',
      price: ' 990',
      currency: '€',
      period: lang === 'fr' ? 'HT' : 'Excl. VAT',
      badge: t('pricing.refresh.badge'),
      description: t('pricing.refresh.description'),
      deliveryTime: lang === 'fr' ? '10 jours' : '10 days',
      features: [
        t('feature.audit'),
        t('feature.refonte'),
        t('feature.migration'),
        t('feature.seo.optimization'),
        t('feature.bugs'),
        t('feature.training'),
        t('feature.support.30')
      ],
      cta: lang === 'fr' ? 'Choisir Refresh' : 'Choose Refresh',
      popular: false
    },
    {
      name: 'Launch',
      price: '1 800',
      currency: '€',
      period: lang === 'fr' ? 'HT' : 'Excl. VAT',
      badge: t('pricing.launch.badge'),
      description: t('pricing.launch.description'),
      deliveryTime: lang === 'fr' ? '14 jours' : '14 days',
      features: [
        t('feature.landing'),
        t('feature.design'),
        t('feature.seo.basic'),
        t('feature.form'),
        t('feature.hosting'),
        t('feature.support.30')
      ],
      cta: lang === 'fr' ? 'Choisir Launch' : 'Choose Launch',
      popular: false
    },
    {
      name: 'Scale',
      price: '2 800',
      currency: '€',
      period: lang === 'fr' ? 'HT' : 'Excl. VAT',
      badge: t('pricing.scale.badge'),
      description: t('pricing.scale.description'),
      deliveryTime: lang === 'fr' ? '30 jours' : '30 days',
      features: [
        t('feature.site'),
        t('feature.login'),
        t('feature.newsletter'),
        t('feature.analytics'),
        t('feature.seo.advanced'),
        t('feature.blog'),
        t('feature.hosting'),
        t('feature.support.60')
      ],
      cta: lang === 'fr' ? 'Choisir Scale' : 'Choose Scale',
      popular: false
    },
    {
      name: 'MVP',
      price: '4 500',
      currency: '€',
      period: lang === 'fr' ? 'HT' : 'Excl. VAT',
      badge: t('pricing.mvp.badge'),
      description: t('pricing.mvp.description'),
      deliveryTime: lang === 'fr' ? '45 jours' : '45 days',
      features: [
        t('feature.scale.plus'),
        t('feature.dashboard'),
        t('feature.stripe'),
        t('feature.users'),
        t('feature.api'),
        t('feature.tests'),
        t('feature.hosting'),
        t('feature.support.90')
      ],
      cta: lang === 'fr' ? 'Choisir MVP' : 'Choose MVP',
      popular: false
    }
  ];
}

// Get process steps in the correct language
export function getProcessSteps(lang: keyof typeof translations) {
  const t = useTranslations(lang);
  return [
    {
      step: '01',
      title: t('process.step1.title'),
      description: t('process.step1.description'),
      duration: t('process.step1.duration')
    },
    {
      step: '02',
      title: t('process.step2.title'),
      description: t('process.step2.description'),
      duration: t('process.step2.duration')
    },
    {
      step: '03',
      title: t('process.step3.title'),
      description: t('process.step3.description'),
      duration: t('process.step3.duration')
    },
    {
      step: '04',
      title: t('process.step4.title'),
      description: t('process.step4.description'),
      duration: t('process.step4.duration')
    }
  ];
}

// Get features in the correct language
export function getFeatures(lang: keyof typeof translations) {
  const t = useTranslations(lang);
  return [
    {
      icon: 'Zap',
      title: t('features.1.title'),
      description: t('features.1.description')
    },
    {
      icon: 'Gem',
      title: t('features.2.title'),
      description: t('features.2.description')
    },
    {
      icon: 'Target',
      title: t('features.3.title'),
      description: t('features.3.description')
    },
    {
      icon: 'Users',
      title: t('features.4.title'),
      description: t('features.4.description')
    }
  ];
}

