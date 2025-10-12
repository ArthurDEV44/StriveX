export const siteConfig = {
  name: "StriveX",
  title: "StriveX - Sites & MVPs sur-mesure pour startups",
  description: "Lancez votre startup en 7 jours, pas 7 mois. Sites et MVPs sur-mesure pour startups ambitieuses. Design premium, livraison express.",
  url: "https://strivex.fr",
  ogImage: "/og-image.jpg",
  links: {
    email: "contact@strivex.fr",
    calendly: "https://calendly.com/arthur-jean-strivex/30min",
    linkedin: "https://www.linkedin.com/in/arthur-jean-401b56239/"
  }
}

export const features = [
  {
    icon: "Zap",
    title: "Lancez avant vos concurrents",
    description: "Livraison en 7-21j pendant qu'eux attendent 3 mois"
  },
  {
    icon: "Gem",
    title: "Convertissez vos visiteurs en clients",
    description: "Design optimisé pour la conversion, pas juste \"joli\""
  },
  {
    icon: "Target",
    title: "Levez des fonds plus facilement",
    description: "Un site pro rassure les investisseurs"
  },
  {
    icon: "Users",
    title: "Économisez 70% vs une agence",
    description: "Qualité agence, tarif freelance"
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
    deliveryTime: "7 jours",
    deliveryIcon: "⚡",
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
    deliveryTime: "14 jours",
    deliveryIcon: "🚀",
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
    deliveryTime: "21 jours",
    deliveryIcon: "🔥",
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
    name: "Intégration IA/OpenAI",
    price: "500€"
  },
  {
    name: "E-commerce Stripe",
    price: "800€"
  },
  {
    name: "Espace membre avancé",
    price: "1 000€"
  },
  {
    name: "Blog avec CMS headless",
    price: "400€"
  }
]

export const processSteps = [
  {
    step: "01",
    title: "Call découverte (30 min)",
    description: "On définit tes besoins et objectifs précis",
    duration: "30 min"
  },
  {
    step: "02",
    title: "Maquette en 48h",
    description: "Tu valides le design avant qu'on code",
    duration: "48h"
  },
  {
    step: "03",
    title: "Développement (7-21 jours)",
    description: "Updates quotidiennes sur l'avancement",
    duration: "7-21 jours"
  },
  {
    step: "04",
    title: "Lancement & formation",
    description: "Site en ligne + tu sais comment l'éditer",
    duration: "1 jour"
  }
]

export const faqs = [
  {
    question: "Quels sont les délais de livraison ?",
    answer: "Selon le pack choisi : 7 jours pour Launch, 14 jours pour Scale et 21 jours pour MVP. Ces délais commencent après validation des maquettes et réception de tous les contenus."
  },
  {
    question: "Puis-je modifier mon site après livraison ?",
    answer: "Absolument ! Nous vous formons et vous transmettons tous les accès. Vous pouvez aussi souscrire à notre forfait maintenance (à partir de 200€/mois) pour déléguer les modifications."
  },
  {
    question: "Quelles technologies utilisez-vous ?",
    answer: "Nous utilisons des technologies modernes et éprouvées : Astro, Next.js, React, Tailwind CSS, Vercel/Netlify pour l'hébergement. Le choix dépend de vos besoins spécifiques."
  },
  {
    question: "L'hébergement est-il vraiment inclus ?",
    answer: "Oui, 1 an d'hébergement est inclus sur Vercel ou Netlify (jusqu'à 100k visiteurs/mois). Au-delà, nous vous accompagnons pour upgrader selon vos besoins."
  },
  {
    question: "Proposez-vous de la maintenance ?",
    answer: "Oui, nous proposons des forfaits de maintenance à partir de 200€/mois incluant : mises à jour, corrections de bugs, ajouts de contenu et support prioritaire."
  },
  {
    question: "Puis-je voir des exemples de réalisations ?",
    answer: "Bien sûr ! Contactez-nous et nous vous partagerons des projets similaires au vôtre, avec l'accord de nos clients."
  },
  {
    question: "Travaillez-vous avec des clients internationaux ?",
    answer: "Oui, nous travaillons avec des clients en France et à l'international. Tous nos sites peuvent être multilingues."
  },
  {
    question: "Que se passe-t-il si je ne suis pas satisfait ?",
    answer: "Nous itérons jusqu'à votre satisfaction complète. Si vraiment ça ne va pas, nous offrons une garantie satisfait ou remboursé sous 7 jours après la première version."
  }
]

export const testimonials = [
  {
    name: "Clément D.",
    role: "Founder",
    company: "Azuna",
    avatar: "/images/clients/azuna.png",
    content: "Un grand merci pour le travail et le professionnalisme de StriveX, je recommande grandement 🔥",
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
    content: "Encore merci pour le travail qu'à réalisé StriveX en refondant mon site à partir d'un wordpress, c'est vraiment un plaisir de travailler avec vous.",
    rating: 5,
    project: "Site Vitrine - Reprise d'un Wordpress",
    website: "https://ausommetdechezvous.bzh",
    domain: "ausommetdechezvous.bzh"
  }
]

