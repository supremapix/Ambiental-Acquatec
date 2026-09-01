/**
 * Titulos, descriptions e keywords de CADA pagina do site.
 * Fonte unica: usada pelo React (EnhancedSEO) e pelos scripts de build.
 */
import { SITE_URL, CONTACT, BUSINESS } from './site-config.js';
import { CITIES, ALL_NEIGHBORHOODS, SERVICES } from './site-data.js';

const PHONE = CONTACT.phoneDisplay;
const DEFAULT_IMAGE = BUSINESS.defaultImage;

/** Corta o texto no limite sem quebrar palavra (descriptions <= 160 caracteres). */
export function clamp(text, max = 158) {
  const clean = String(text).replace(/\s+/g, ' ').trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max);
  return cut.slice(0, cut.lastIndexOf(' ')).replace(/[,.;:]$/, '') + '…';
}

/** Garante que o telefone nunca seja cortado: corta o corpo e depois anexa o contato. */
export function withPhone(body, prefix = 'WhatsApp') {
  const suffix = ` ${prefix} ${PHONE}.`;
  return clamp(body, 158 - suffix.length) + suffix;
}

/** Hash estavel para variar os textos entre paginas semelhantes. */
function pick(list, seed) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  return list[h % list.length];
}

/* ---------------------------------------------------------------- HOME */

export function getHomeSeo() {
  return {
    path: '/',
    type: 'home',
    title: 'Calhas e Telhados em Curitiba | Acquatec 25 Anos',
    h1: 'Calhas e Telhados em Curitiba',
    description: withPhone(
      'Instalação e manutenção de calhas, telhados e rufos em Curitiba há 25 anos. Vistoria grátis, garantia de 5 anos e plantão 24h.'
    ),
    keywords:
      'calhas curitiba, instalação de calhas, manutenção de calhas, limpeza de calhas, telhados curitiba, rufos e pingadeiras, conserto de telhado, calhas pluviais',
    canonical: `${SITE_URL}/`,
    ogImage: DEFAULT_IMAGE,
    priority: '1.0',
    changefreq: 'weekly'
  };
}

/* ------------------------------------------------------------ SERVIÇOS */

const SERVICE_KEYWORDS = {
  calhas: 'instalação de calhas curitiba, calha de alumínio, calha galvanizada, calha de pvc, preço de calha',
  manutencao: 'manutenção de telhados curitiba, conserto de telhado, troca de telhas, telhado com goteira',
  rufos: 'rufos curitiba, pingadeira, rufo de alumínio, acabamento de telhado, infiltração em parede',
  metalicos: 'telhado metálico curitiba, telha termoacústica, telha sanduíche, cobertura metálica',
  captacao: 'captação de água da chuva curitiba, cisterna, reuso de água pluvial, água pluvial',
  reformas: 'reforma de telhado curitiba, troca de telhado, reforma de cobertura, troca de madeiramento',
  solar: 'telha translúcida curitiba, iluminação natural no telhado, domus, claraboia',
  eolicos: 'exaustor eólico curitiba, ventilação de telhado, exaustor para galpão'
};

/** Description propria de cada servico (evita texto cortado e repetido). */
const SERVICE_DESCRIPTIONS = {
  calhas: 'Instalação de calhas de alumínio, galvanizadas e PVC em Curitiba, com dimensionamento técnico e garantia de 5 anos.',
  manutencao: 'Manutenção e conserto de telhados em Curitiba: troca de telhas, limpeza técnica e fim das goteiras, com garantia de 5 anos.',
  rufos: 'Rufos e pingadeiras em Curitiba para bloquear infiltrações na junção do telhado com a parede. Vistoria grátis e garantia de 5 anos.',
  metalicos: 'Telhados metálicos e telha termoacústica em Curitiba para galpões, comércios e residências, com garantia de 5 anos.',
  captacao: 'Captação de água da chuva em Curitiba: cisternas, filtros e reuso que reduzem a conta de água em até 50%.',
  reformas: 'Reforma completa de telhados em Curitiba: troca de madeiramento, telhas e impermeabilização com equipe própria.',
  solar: 'Telhas translúcidas em Curitiba para iluminação natural e economia de energia, instaladas sem risco de infiltração.',
  eolicos: 'Exaustores eólicos em Curitiba para reduzir calor e umidade em galpões, indústrias e residências. Instalação com garantia.'
};

export function getServiceSeo(service) {
  const body = SERVICE_DESCRIPTIONS[service.id] ||
    `${String(service.description[0] || '').replace(/^[^:]+:\s*/, '')} Garantia de 5 anos.`;
  return {
    path: `/servicos/${service.id}`,
    type: 'service',
    title: `${service.title} em Curitiba | Acquatec`,
    h1: `${service.title} em Curitiba`,
    description: withPhone(body),
    keywords: `${service.title.toLowerCase()} curitiba, ${SERVICE_KEYWORDS[service.id] || 'calhas e telhados curitiba'}`,
    canonical: `${SITE_URL}/servicos/${service.id}`,
    ogImage: service.image || BUSINESS.defaultImage,
    priority: '0.9',
    changefreq: 'monthly'
  };
}

/* ------------------------------------------------------------- CIDADES */

const CITY_DESCRIPTIONS = [
  (n) => `Calhas, telhados e rufos em ${n}: instalação, limpeza e conserto com garantia de 5 anos.`,
  (n) => `Calhas e telhados em ${n} há 25 anos: instalação, manutenção e emergência 24h.`,
  (n) => `Calhas e reparo de telhado em ${n} com equipe própria e garantia de 5 anos.`,
  (n) => `Calhas e telhados em ${n}: vistoria grátis, garantia de 5 anos e até 12x.`
];

export function getCitySeo(city) {
  return {
    path: `/cidades/${city.slug}`,
    type: 'city',
    title: `Calhas e Telhados em ${city.name} - Orçamento Grátis`,
    h1: `Calhas e Telhados em ${city.name}`,
    description: withPhone(pick(CITY_DESCRIPTIONS, city.slug)(city.name), 'Orçamento no WhatsApp'),
    keywords: `calhas ${city.name}, telhados ${city.name}, instalação de calhas ${city.name}, limpeza de calhas ${city.name}, conserto de telhado ${city.name}, calheiro ${city.name}`,
    canonical: `${SITE_URL}/cidades/${city.slug}`,
    ogImage: DEFAULT_IMAGE,
    priority: city.slug === 'curitiba' ? '0.9' : '0.8',
    changefreq: 'monthly'
  };
}

/* ------------------------------------------------------------- BAIRROS */

const NEIGHBORHOOD_DESCRIPTIONS = [
  (n) => `Calhas e telhados em ${n}, Curitiba: limpeza, instalação e conserto de goteiras.`,
  (n) => `Calhas, rufos e telhados em ${n} (Curitiba) com vistoria grátis e garantia de 5 anos.`,
  (n) => `Calhas e telhados em ${n}, Curitiba: limpeza a partir de R$ 150 e plantão 24h.`,
  (n) => `Goteira ou calha entupida em ${n}? Equipe própria no bairro e garantia de 5 anos.`
];

export function getNeighborhoodSeo(neighborhood) {
  const n = neighborhood.name;
  return {
    path: `/bairros/${neighborhood.slug}`,
    type: 'neighborhood',
    title: clamp(`Calhas e Telhados em ${n}, Curitiba | Acquatec`, 65),
    h1: `Calhas e Telhados em ${n}`,
    description: withPhone(pick(NEIGHBORHOOD_DESCRIPTIONS, neighborhood.slug)(n), 'Chame no WhatsApp'),
    keywords: `calhas ${n}, telhados ${n}, limpeza de calhas ${n}, calheiro ${n} curitiba, conserto de goteira ${n}`,
    canonical: `${SITE_URL}/bairros/${neighborhood.slug}`,
    ogImage: DEFAULT_IMAGE,
    priority: '0.7',
    changefreq: 'monthly'
  };
}

/* --------------------------------------------------------------- INDEX */

/** Todas as paginas do site, na ordem do sitemap. */
export function getAllPages() {
  return [
    getHomeSeo(),
    ...SERVICES.map(getServiceSeo),
    ...CITIES.map(getCitySeo),
    ...ALL_NEIGHBORHOODS.map(getNeighborhoodSeo)
  ];
}

/** SEO de uma pagina a partir do caminho (usado no pos-build). */
export function getPageSeo(pathname) {
  const path = ('/' + String(pathname || '').replace(/^\/+|\/+$/g, '')).replace(/^\/$/, '/');
  if (path === '/') return getHomeSeo();

  const service = path.match(/^\/servicos\/([^/]+)$/);
  if (service) {
    const found = SERVICES.find((s) => s.id === service[1]);
    return found ? getServiceSeo(found) : null;
  }

  const city = path.match(/^\/cidades\/([^/]+)$/);
  if (city) {
    const found = CITIES.find((c) => c.slug === city[1]);
    return found ? getCitySeo(found) : null;
  }

  const neighborhood = path.match(/^\/bairros\/([^/]+)$/);
  if (neighborhood) {
    const found = ALL_NEIGHBORHOODS.find((n) => n.slug === neighborhood[1]);
    return found ? getNeighborhoodSeo(found) : null;
  }

  return null;
}
