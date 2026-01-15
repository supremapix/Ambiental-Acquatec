import * as fs from 'fs';
import * as path from 'path';
import { ALL_NEIGHBORHOODS, CITIES, SERVICES } from '../constants';

const distDir = path.resolve(__dirname, '../dist');

interface MetaData {
  title: string;
  description: string;
  canonical: string;
  keywords: string;
  ogImage: string;
}

function generateMeta(meta: MetaData): string {
  const siteUrl = 'https://www.acquateccalhas.com.br';
  const fullOgImage = meta.ogImage.startsWith('http') ? meta.ogImage : `${siteUrl}${meta.ogImage}`;
  
  return `
    <title>${meta.title}</title>
    <meta name="title" content="${meta.title}" />
    <meta name="description" content="${meta.description}" />
    <meta name="keywords" content="${meta.keywords}" />
    <meta name="robots" content="index, follow" />
    <meta name="language" content="Portuguese" />
    <meta name="author" content="Acquatec Calhas e Telhados" />
    <link rel="canonical" href="${meta.canonical}" />
    
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${meta.canonical}" />
    <meta property="og:title" content="${meta.title}" />
    <meta property="og:description" content="${meta.description}" />
    <meta property="og:image" content="${fullOgImage}" />
    <meta property="og:locale" content="pt_BR" />
    <meta property="og:site_name" content="Acquatec Calhas e Telhados" />
    
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="${meta.canonical}" />
    <meta name="twitter:title" content="${meta.title}" />
    <meta name="twitter:description" content="${meta.description}" />
    <meta name="twitter:image" content="${fullOgImage}" />
    
    <meta name="geo.region" content="BR-PR" />
    <meta name="geo.placename" content="Curitiba" />
    <meta name="geo.position" content="-25.4284;-49.2733" />
    <meta name="ICBM" content="-25.4284, -49.2733" />
    <meta name="theme-color" content="#003D82" />
`;
}

function getMetaForPage(pagePath: string): MetaData | null {
  const siteUrl = 'https://www.acquateccalhas.com.br';
  const defaultImage = '/logo-header-rodape-calhas-e-telhados-m2-ctba-pr-brasil.png';
  
  if (pagePath === '/index.html' || pagePath === '/') {
    return {
      title: 'Acquatec Calhas e Telhados - Instalacao e Manutencao em Curitiba | 25 Anos',
      description: 'Especialistas em calhas e telhados ha 25 anos em Curitiba. Instalacao, manutencao, limpeza e conserto. Garantia de 5 anos. WhatsApp: (41) 99133-7070',
      canonical: siteUrl,
      keywords: 'calhas curitiba, instalacao de calhas, manutencao de calhas, telhados curitiba, rufos e pingadeiras',
      ogImage: defaultImage
    };
  }
  
  const neighborhoodMatch = pagePath.match(/\/bairros\/([^/]+)/);
  if (neighborhoodMatch) {
    const slug = neighborhoodMatch[1];
    const neighborhood = ALL_NEIGHBORHOODS.find(n => n.slug === slug);
    const name = neighborhood?.name || slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    return {
      title: `Calhas e Telhados no ${name} - Curitiba | Acquatec`,
      description: `Instalacao e manutencao de calhas no ${name}, Curitiba. Atendimento rapido, 25 anos de experiencia. WhatsApp: (41) 99133-7070`,
      canonical: `${siteUrl}/bairros/${slug}`,
      keywords: `calhas ${name}, telhados ${name}, instalacao calhas ${name} curitiba`,
      ogImage: defaultImage
    };
  }
  
  const cityMatch = pagePath.match(/\/cidades\/([^/]+)/);
  if (cityMatch) {
    const slug = cityMatch[1];
    const city = CITIES.find(c => c.slug === slug);
    const name = city?.name || slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    return {
      title: `Calhas e Telhados em ${name} - Acquatec | Orcamento Gratis`,
      description: `Instalacao e manutencao de calhas e telhados em ${name}. 25 anos de experiencia, garantia de 5 anos. WhatsApp: (41) 99133-7070`,
      canonical: `${siteUrl}/cidades/${slug}`,
      keywords: `calhas ${name}, telhados ${name}, instalacao de calhas ${name}, manutencao de calhas ${name}`,
      ogImage: defaultImage
    };
  }
  
  const serviceMatch = pagePath.match(/\/servicos\/([^/]+)/);
  if (serviceMatch) {
    const slug = serviceMatch[1];
    const service = SERVICES.find(s => s.id === slug);
    const name = service?.title || slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    return {
      title: `${name} em Curitiba - Acquatec | Orcamento Gratis`,
      description: `${service?.description[0] || `Servico profissional de ${name} em Curitiba`} Garantia de 5 anos. WhatsApp: (41) 99133-7070`,
      canonical: `${siteUrl}/servicos/${slug}`,
      keywords: `${name.toLowerCase()}, ${name.toLowerCase()} curitiba, calhas e telhados curitiba`,
      ogImage: service?.image || defaultImage
    };
  }
  
  return null;
}

function processHtmlFile(filePath: string): void {
  const relativePath = filePath.replace(distDir, '').replace('/index.html', '') || '/';
  const meta = getMetaForPage(relativePath);
  
  if (!meta) return;
  
  let html = fs.readFileSync(filePath, 'utf-8');
  const metaTags = generateMeta(meta);
  
  html = html.replace(
    /<meta name="viewport"[^>]*>/,
    `<meta name="viewport" content="width=device-width, initial-scale=1.0" />${metaTags}`
  );
  
  fs.writeFileSync(filePath, html);
  console.log(`Injected meta tags: ${relativePath}`);
}

function walkDir(dir: string): void {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      walkDir(filePath);
    } else if (file === 'index.html') {
      processHtmlFile(filePath);
    }
  }
}

console.log('Injecting meta tags into generated HTML files...');
walkDir(distDir);
console.log('Done!');
