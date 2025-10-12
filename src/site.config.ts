export const siteConfig = {
  name: "StriveX",
  title: "StriveX - Sites & MVPs sur-mesure pour startups",
  description: "StriveX : landing pages, sites vitrine et MVPs SaaS. Design premium, livraison rapide, tarifs transparents. Pas d'agence, du sur-mesure. Dès 1 800€.",
  url: "https://strivex.fr",
  ogImage: "/og-image.jpg",
  keywords: [
    // Positionnement Core (QUI) - Sans "startup"
    "développeur freelance",
    "développeur freelance web",
    "développeur web indépendant",
    
    // Services (QUOI) - Mix large + niche
    "site web",
    "landing page",
    "création site web",
    "développeur MVP",
    "MVP SaaS",
    
    // Technologies (COMMENT)
    "développeur Next.js",
    "site web rapide",
    
    // Option : 1 keyword "startup" pour la niche
    "site web startup"
  ],
  links: {
    email: "contact@strivex.fr",
    calendly: "https://calendly.com/arthur-jean-strivex/30min",
    linkedin: "https://www.linkedin.com/in/arthur-jean-401b56239/"
  }
}

export const features = [
  {
    icon: "Zap",
    title: "Profitez de notre expertise",
    description: "On vous accompagne de A à Z, de la maquette à la livraison en suivant un process structuré"
  },
  {
    icon: "Gem",
    title: "Convertissez vos visiteurs en clients",
    description: "Design optimisé pour la conversion, pas simplement esthétique"
  },
  {
    icon: "Target",
    title: "Levez des fonds plus facilement",
    description: "Un site pro rassure les investisseurs"
  },
  {
    icon: "Users",
    title: "Nous ne sommes pas une agence",
    description: "Livraison rapide et tarif abordable"
  }
]

export const pricingPlans = [
  {
    name: "Launch",
    price: "1 800",
    currency: "€",
    period: "HT",
    badge: "Parfait pour valider votre idée",
    description: "Pour pre-seed, solo founders, side projects",
    deliveryTime: "14 jours",
    features: [
      "Landing page 1 page complète",
      "Design moderne et responsive",
      "SEO de base",
      "Formulaire contact/waitlist",
      "Hébergement 1 an inclus",
      "Support 30 jours"
    ],
    cta: "Choisir Launch",
    popular: false
  },
  {
    name: "Scale",
    price: "2 800",
    currency: "€",
    period: "HT",
    badge: "Recommandé",
    description: "Pour startups seed, SaaS en lancement",
    deliveryTime: "30 jours",
    features: [
      "Site 5-7 pages complet",
      "Espace connexion utilisateur (optionnel)",
      "Newsletter (Mailchimp/ConvertKit)",
      "Analytics (GA4)",
      "SEO avancé",
      "Blog intégré",
      "Hébergement 1 an inclus",
      "Support 60 jours"
    ],
    cta: "Choisir Scale",
    popular: true
  },
  {
    name: "MVP",
    price: "4 500",
    currency: "€",
    period: "HT",
    badge: "Solution complète",
    description: "Pour SaaS en growth, Series A, produits complexes",
    deliveryTime: "45 jours",
    features: [
      "Tout du Pack Scale +",
      "Dashboard utilisateur avec features de base",
      "Paiement Stripe intégré",
      "Gestion utilisateurs (auth + rôles)",
      "API documentation",
      "Tests & documentation complète",
      "Hébergement 1 an inclus",
      "Support 90 jours"
    ],
    cta: "Choisir MVP",
    popular: false
  }
]

export const addons = [
  {
    name: "Intégration IA : OpenAI / Anthropic / Mistral / Ollama / etc.",
    price: "Sur Devis"
  }
]

export const processSteps = [
  {
    step: "01",
    title: "Call découverte (30 min)",
    description: "On définit vos besoins",
    duration: "30 min"
  },
  {
    step: "02",
    title: "Maquette en 48h",
    description: "Vous validez le design",
    duration: "48h"
  },
  {
    step: "03",
    title: "Développement",
    description: "Vous restez au courant de l'avancement",
    duration: "Selon votre projet"
  },
  {
    step: "04",
    title: "Déploiement & formation",
    description: "Site en ligne & vous savez comment l'utiliser",
    duration: "1 jour"
  }
]

export const faqs = [
  {
    question: "Quels sont les délais de livraison ?",
    answer: "Selon le pack choisi : 14 jours pour Launch, 30 jours pour Scale et 45 jours pour MVP. Ces délais commencent après validation des maquettes et réception de tous les contenus. Les délais peuvent varier selon la complexité du projet."
  },
  {
    question: "Puis-je modifier mon site après livraison ?",
    answer: "Absolument ! Vous pouvez profiter de notre forfait maintenance pour modifier votre site. Certaines modifications peuvent susciter des frais supplémentaires."
  },
  {
    question: "Quelles technologies utilisez-vous ?",
    answer: "Nous utilisons des technologies modernes et éprouvées : Next.js, Astro, React, Tailwind CSS, Vercel pour l'hébergement, etc. Le choix dépend de vos besoins spécifiques."
  },
  {
    question: "Que ce passe-t-il après l'année d'hébergement inclus ?",
    answer: "Nous vous accompagnons pour upgrader selon vos besoins. Le prix varie selon la complexité du projet."
  },
  {
    question: "Combien coûte la maintenance après échéance du plan ?",
    answer: "Nous proposons des forfaits de maintenance à partir de 200€/mois incluant : mises à jour, corrections de bugs, ajouts de contenu et support prioritaire. Le prix varie selon la complexité du projet."
  },
  {
    question: "Travaillez-vous avec des clients internationaux ?",
    answer: "Oui, nous travaillons avec des clients en France et à l'international. Tous nos sites peuvent être multilingues."
  }
]

export const testimonials = [
  {
    name: "Clément D.",
    role: "Founder",
    company: "Azuna",
    avatar: "/images/clients/azuna.png",
    content: "Équipe professionnelle et compétente. Travail de qualité, excellente communication. Je recommande à 100% 🔥",
    rating: 5,
    project: "Site Vitrine & Blog",
    website: "https://azuna.pro",
    domain: "azuna.pro"
  },
  {
    name: "Guillaume Le D.",
    role: "Founder",
    company: "Au Sommet de Chez Vous",
    avatar: "/images/clients/ausommetdechezvous.png", 
    content: "Refonte site web impeccable. Passage WP vers du sur-mesure, respect de l'identité d'origine, équipe pro et réactive. Recommande à 100% !",
    rating: 5,
    project: "Site Vitrine - Reprise d'un Wordpress",
    website: "https://ausommetdechezvous.bzh",
    domain: "ausommetdechezvous.bzh"
  }
]

