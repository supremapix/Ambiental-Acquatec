/**
 * Configuracao unica de marca, contato e SEO do site Acquatec.
 * Importado pelo app React (via constants.ts) e pelos scripts de build
 * (sitemap, meta tags, llms.txt) para nao existir informacao duplicada.
 */

export const SITE_URL = 'https://www.acquateccalhas.com.br';

const WA_TEXT = 'Ol%C3%A1%2C%20achei%20seu%20site%20no%20*Google%20e%20gostaria%20de%20saber%20sobre%3A*';

/** Canal de contato unico da empresa. */
export const CONTACT = {
  phoneDisplay: '(41) 99163-5740',
  phoneE164: '+5541991635740',
  phoneDigits: '5541991635740',
  phoneHref: 'tel:+5541991635740',
  whatsappText: WA_TEXT,
  whatsappUrl: `https://wa.me/5541991635740?text=${WA_TEXT}`,
  email: 'contato@acquateccalhas.com.br'
};

/** Monta um link de WhatsApp com mensagem personalizada. */
export const waLink = (message) =>
  message
    ? `https://wa.me/${CONTACT.phoneDigits}?text=${encodeURIComponent(message)}`
    : CONTACT.whatsappUrl;

export const BUSINESS = {
  name: 'Acquatec Calhas e Telhados',
  alternateName: 'Acquatec',
  slogan: 'Calhas e telhados com garantia de 5 anos em Curitiba e Região Metropolitana',
  description:
    'Empresa especializada em instalação, manutenção e limpeza de calhas, telhados e rufos em Curitiba e Região Metropolitana, com 25 anos de experiência e garantia de 5 anos.',
  foundingDate: '2000',
  logo: `${SITE_URL}/logo-header-rodape-calhas-e-telhados-m2-ctba-pr-brasil.png`,
  defaultImage: '/logo-header-rodape-calhas-e-telhados-m2-ctba-pr-brasil.png',
  images: [
    `${SITE_URL}/acquatec-telhados-manutencao-condominios-insdustriais-residencias-curitiba-1-2000x900.jpeg`,
    `${SITE_URL}/acquatec-calhas-e-telhados-em-curitiba-reformas-condominios-517x357.jpg`,
    `${SITE_URL}/calhas-preco-400x402.jpg`
  ],
  address: {
    streetAddress: 'Bairro Fanny',
    addressLocality: 'Curitiba',
    addressRegion: 'PR',
    addressCountry: 'BR'
  },
  geo: { latitude: -25.4284, longitude: -49.2733 },
  openingHours: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '18:00' },
    { days: ['Saturday'], opens: '08:00', closes: '13:00' }
  ],
  priceRange: 'R$$',
  paymentAccepted: 'Dinheiro, Pix, Cartão de Crédito, Cartão de Débito, Transferência Bancária',
  currenciesAccepted: 'BRL',
  sameAs: [
    'https://www.facebook.com/acquateccalhas',
    'https://www.instagram.com/_acquatec_'
  ],
  knowsAbout: [
    'Instalação de calhas',
    'Manutenção de telhados',
    'Limpeza de calhas',
    'Rufos e pingadeiras',
    'Telhados metálicos',
    'Captação de água da chuva',
    'Impermeabilização de telhados',
    'Exaustores eólicos'
  ],
  videoId: 'V_91hDOAggc',
  warrantyYears: 5,
  experienceYears: 25
};

export default { SITE_URL, CONTACT, BUSINESS, waLink };
