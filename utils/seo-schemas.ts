/**
 * Schema.org (JSON-LD) do site Acquatec.
 *
 * Tudo é montado como um único @graph por página, com @id estáveis, para que
 * o Google entenda que Organização, Site, Página, Serviço, FAQ e Breadcrumb
 * são a mesma entidade em todo o site (sem blocos duplicados).
 */
import { SITE_URL, BUSINESS, CONTACT } from '../site-config.js';
import { CITIES, SERVICES, TESTIMONIALS } from '../site-data.js';

export const ORG_ID = `${SITE_URL}/#organization`;
export const SITE_ID = `${SITE_URL}/#website`;
const LOGO_ID = `${SITE_URL}/#logo`;

const orgRef = { '@id': ORG_ID };

/* ------------------------------------------------------------ EMPRESA */

export const createOrganizationSchema = (extra: Record<string, any> = {}) => ({
  '@type': ['RoofingContractor', 'LocalBusiness', 'HomeAndConstructionBusiness'],
  '@id': ORG_ID,
  name: BUSINESS.name,
  alternateName: BUSINESS.alternateName,
  legalName: BUSINESS.name,
  slogan: BUSINESS.slogan,
  description: BUSINESS.description,
  url: `${SITE_URL}/`,
  foundingDate: BUSINESS.foundingDate,
  logo: {
    '@type': 'ImageObject',
    '@id': LOGO_ID,
    url: BUSINESS.logo,
    contentUrl: BUSINESS.logo,
    caption: BUSINESS.name
  },
  image: BUSINESS.images,
  telephone: CONTACT.phoneE164,
  email: CONTACT.email,
  address: {
    '@type': 'PostalAddress',
    ...BUSINESS.address
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: BUSINESS.geo.latitude,
    longitude: BUSINESS.geo.longitude
  },
  hasMap: `https://www.google.com/maps/search/?api=1&query=${BUSINESS.geo.latitude},${BUSINESS.geo.longitude}`,
  openingHoursSpecification: BUSINESS.openingHours.map((h: any) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: h.days,
    opens: h.opens,
    closes: h.closes
  })),
  priceRange: BUSINESS.priceRange,
  paymentAccepted: BUSINESS.paymentAccepted,
  currenciesAccepted: BUSINESS.currenciesAccepted,
  areaServed: [
    {
      '@type': 'AdministrativeArea',
      name: 'Região Metropolitana de Curitiba',
      containedInPlace: { '@type': 'State', name: 'Paraná' }
    },
    ...CITIES.map((city: any) => ({
      '@type': 'City',
      name: city.name,
      address: { '@type': 'PostalAddress', addressRegion: 'PR', addressCountry: 'BR' }
    }))
  ],
  knowsAbout: BUSINESS.knowsAbout,
  sameAs: BUSINESS.sameAs,
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: CONTACT.phoneE164,
      contactType: 'customer service',
      areaServed: 'BR',
      availableLanguage: ['Portuguese'],
      contactOption: 'TollFree'
    },
    {
      '@type': 'ContactPoint',
      telephone: CONTACT.phoneE164,
      contactType: 'emergency',
      areaServed: 'BR',
      availableLanguage: ['Portuguese'],
      hoursAvailable: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59'
      }
    }
  ],
  potentialAction: {
    '@type': 'CommunicateAction',
    name: 'Falar no WhatsApp',
    target: CONTACT.whatsappUrl
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    '@id': `${SITE_URL}/#catalogo`,
    name: 'Serviços de calhas e telhados',
    itemListElement: SERVICES.map((service: any) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        '@id': `${SITE_URL}/servicos/${service.id}#servico`,
        name: service.title,
        url: `${SITE_URL}/servicos/${service.id}`
      },
      priceCurrency: 'BRL',
      availability: 'https://schema.org/InStock'
    }))
  },
  ...extra
});

/* --------------------------------------------------------------- SITE */

export const createWebSiteSchema = () => ({
  '@type': 'WebSite',
  '@id': SITE_ID,
  url: `${SITE_URL}/`,
  name: BUSINESS.name,
  description: BUSINESS.description,
  inLanguage: 'pt-BR',
  publisher: orgRef,
  copyrightHolder: orgRef
});

/* -------------------------------------------------------------- PÁGINA */

interface WebPageInput {
  canonical: string;
  title: string;
  description: string;
  image?: string;
  dateModified?: string;
  hasBreadcrumb?: boolean;
  hasFaq?: boolean;
  about?: string;
}

export const createWebPageSchema = ({
  canonical,
  title,
  description,
  image,
  dateModified,
  hasBreadcrumb,
  hasFaq,
  about
}: WebPageInput) => {
  const page: any = {
    '@type': 'WebPage',
    '@id': `${canonical}#webpage`,
    url: canonical,
    name: title,
    description,
    inLanguage: 'pt-BR',
    isPartOf: { '@id': SITE_ID },
    about: orgRef,
    provider: orgRef,
    datePublished: '2024-01-01',
    dateModified: dateModified || new Date().toISOString().split('T')[0],
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: image && image.startsWith('http') ? image : `${SITE_URL}${image || BUSINESS.defaultImage}`
    },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', 'h2']
    }
  };
  if (about) page.keywords = about;
  if (hasBreadcrumb) page.breadcrumb = { '@id': `${canonical}#breadcrumb` };
  if (hasFaq) page.mainEntity = { '@id': `${canonical}#faq` };
  return page;
};

/* --------------------------------------------------------- BREADCRUMB */

export const createBreadcrumbSchema = (
  canonical: string,
  items: Array<{ name: string; url: string }>
) => ({
  '@type': 'BreadcrumbList',
  '@id': `${canonical}#breadcrumb`,
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url
  }))
});

/* ------------------------------------------------------------ SERVIÇO */

interface ServiceInput {
  canonical: string;
  name: string;
  description: string;
  areaServed?: string;
  price?: string;
  image?: string;
  serviceType?: string;
}

export const createServiceSchema = ({
  canonical,
  name,
  description,
  areaServed = 'Curitiba',
  price,
  image,
  serviceType
}: ServiceInput) => {
  const schema: any = {
    '@type': 'Service',
    '@id': `${canonical}#servico`,
    name,
    description,
    serviceType: serviceType || name,
    category: 'Calhas e Telhados',
    url: canonical,
    provider: orgRef,
    areaServed: { '@type': 'City', name: areaServed },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: canonical,
      servicePhone: CONTACT.phoneE164,
      availableLanguage: 'pt-BR'
    },
    termsOfService: 'Garantia de 5 anos sobre mão de obra e instalação.'
  };
  if (image) {
    schema.image = image.startsWith('http') ? image : `${SITE_URL}${image}`;
  }
  if (price) {
    schema.offers = {
      '@type': 'Offer',
      priceCurrency: 'BRL',
      description: price,
      availability: 'https://schema.org/InStock',
      areaServed: { '@type': 'City', name: areaServed },
      seller: orgRef,
      warranty: {
        '@type': 'WarrantyPromise',
        durationOfWarranty: { '@type': 'QuantitativeValue', value: 5, unitCode: 'ANN' }
      }
    };
  }
  return schema;
};

/* ----------------------------------------------------------------- FAQ */

export const createFAQSchema = (
  canonical: string,
  faqs: Array<{ question: string; answer: string }>
) => ({
  '@type': 'FAQPage',
  '@id': `${canonical}#faq`,
  inLanguage: 'pt-BR',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer }
  }))
});

/* ------------------------------------------------------- LISTA / VÍDEO */

export const createItemListSchema = (
  id: string,
  name: string,
  items: Array<{ name: string; url: string }>
) => ({
  '@type': 'ItemList',
  '@id': id,
  name,
  numberOfItems: items.length,
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    url: item.url
  }))
});

export const createVideoSchema = () => ({
  '@type': 'VideoObject',
  '@id': `${SITE_URL}/#video`,
  name: 'Acquatec Calhas e Telhados - trabalhos em Curitiba',
  description:
    'Bastidores dos serviços de instalação de calhas, rufos e manutenção de telhados executados pela Acquatec em Curitiba e Região Metropolitana.',
  thumbnailUrl: `https://i.ytimg.com/vi/${BUSINESS.videoId}/hqdefault.jpg`,
  uploadDate: '2024-01-15',
  embedUrl: `https://www.youtube.com/embed/${BUSINESS.videoId}`,
  contentUrl: `https://www.youtube.com/watch?v=${BUSINESS.videoId}`,
  publisher: orgRef
});

/**
 * Avaliações exibidas na home. reviewCount reflete exatamente os depoimentos
 * publicados na página — troque por dados do Google Meu Negócio se quiser
 * usar o total real de avaliações.
 */
export const createAggregateRating = () => ({
  '@type': 'AggregateRating',
  ratingValue: (
    TESTIMONIALS.reduce((total: number, t: any) => total + t.stars, 0) / TESTIMONIALS.length
  ).toFixed(1),
  reviewCount: TESTIMONIALS.length,
  bestRating: '5',
  worstRating: '1'
});

export const createReviewNodes = () =>
  TESTIMONIALS.map((t: any, index: number) => ({
    '@type': 'Review',
    '@id': `${SITE_URL}/#avaliacao-${index + 1}`,
    author: { '@type': 'Person', name: t.name },
    reviewBody: t.text,
    reviewRating: { '@type': 'Rating', ratingValue: String(t.stars), bestRating: '5', worstRating: '1' }
  }));

/* --------------------------------------------------------------- GRAFO */

/**
 * Monta o @graph final da página (organização + site sempre presentes).
 * `orgExtra` permite embutir dados extras na empresa — por exemplo
 * aggregateRating e review na home, onde os depoimentos são exibidos.
 */
export const buildGraph = (nodes: any[] = [], orgExtra: Record<string, any> = {}) => ({
  '@context': 'https://schema.org',
  '@graph': [createOrganizationSchema(orgExtra), createWebSiteSchema(), ...nodes.filter(Boolean)]
});
