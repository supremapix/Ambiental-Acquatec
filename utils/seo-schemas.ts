export const createLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  "@id": "https://www.acquateccalhas.com.br/#organization",
  "name": "Acquatec Calhas e Telhados",
  "alternateName": "Acquatec - Instalação de Calhas e Telhados",
  "url": "https://www.acquateccalhas.com.br",
  "logo": "https://www.acquateccalhas.com.br/logo-header-rodape-calhas-e-telhados-m2-ctba-pr-brasil.png",
  "image": [
    "https://www.acquateccalhas.com.br/acquatec-telhados-manutencao-condominios-insdustriais-residencias-curitiba-1-2000x900.jpeg",
    "https://www.acquateccalhas.com.br/acquatec-calhas-e-telhados-em-curitiba-reformas-condominios-517x357.jpg"
  ],
  "description": "Empresa especializada em instalação, manutenção e limpeza de calhas e telhados em Curitiba e Região Metropolitana com 25 anos de experiência no mercado.",

  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rua Bairro Fanny",
    "addressLocality": "Curitiba",
    "addressRegion": "PR",
    "postalCode": "80000-000",
    "addressCountry": "BR"
  },

  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -25.4284,
    "longitude": -49.2733
  },

  "telephone": "+554199133707 0",
  "email": "contato@acquateccalhas.com.br",

  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "08:00",
      "closes": "13:00"
    }
  ],

  "priceRange": "$$",

  "areaServed": [
    { "@type": "City", "name": "Curitiba" },
    { "@type": "City", "name": "Almirante Tamandaré" },
    { "@type": "City", "name": "Araucária" },
    { "@type": "City", "name": "Colombo" },
    { "@type": "City", "name": "Fazenda Rio Grande" },
    { "@type": "City", "name": "Pinhais" },
    { "@type": "City", "name": "Piraquara" },
    { "@type": "City", "name": "São José dos Pinhais" }
  ],

  "sameAs": [
    "https://www.facebook.com/acquateccalhas",
    "https://www.instagram.com/_acquatec_"
  ],

  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+554199133707 0",
      "contactType": "customer service",
      "availableLanguage": "Portuguese",
      "areaServed": "BR"
    },
    {
      "@type": "ContactPoint",
      "telephone": "+554199133707 0",
      "contactType": "sales",
      "availableLanguage": "Portuguese",
      "areaServed": "BR"
    }
  ],

  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "127",
    "bestRating": "5",
    "worstRating": "1"
  }
});

export const createServiceSchema = (serviceName: string, description: string, areaServed: string = "Curitiba") => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": serviceName,
  "provider": {
    "@type": "RoofingContractor",
    "name": "Acquatec Calhas e Telhados"
  },
  "description": description,
  "areaServed": {
    "@type": "City",
    "name": areaServed
  }
});

export const createFAQSchema = (faqs: Array<{question: string; answer: string}>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

export const createBreadcrumbSchema = (breadcrumbs: Array<{name: string; url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": breadcrumbs.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const createReviewSchema = (reviews: Array<{
  author: string;
  datePublished: string;
  reviewBody: string;
  ratingValue: number;
}>) => reviews.map(review => ({
  "@type": "Review",
  "author": {
    "@type": "Person",
    "name": review.author
  },
  "datePublished": review.datePublished,
  "reviewBody": review.reviewBody,
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": review.ratingValue.toString(),
    "bestRating": "5"
  }
}));

export const createOfferCatalogSchema = (services: Array<{name: string; description: string}>) => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Acquatec Calhas e Telhados",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Serviços de Calhas e Telhados",
    "itemListElement": services.map(service => ({
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": service.name,
        "description": service.description
      }
    }))
  }
});
