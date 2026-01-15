import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, '../dist');

const ALL_NEIGHBORHOODS = [
  { name: 'Vila Parolin', slug: 'vila-parolin' },
  { name: 'Vila Torres', slug: 'vila-torres' },
  { name: 'Jardim Schaffer', slug: 'jardim-schaffer' },
  { name: 'Vila Sabará', slug: 'vila-sabara' },
  { name: 'Boqueirão de Baixo', slug: 'boqueirao-de-baixo' },
  { name: 'Boqueirão de Cima', slug: 'boqueirao-de-cima' },
  { name: 'Tanguá', slug: 'tangua' },
  { name: 'Vila Zumbi', slug: 'vila-zumbi' },
  { name: 'Abranches de Baixo', slug: 'abranches-de-baixo' },
  { name: 'Abranches de Cima', slug: 'abranches-de-cima' },
  { name: 'Vila Nossa Senhora da Luz', slug: 'vila-nossa-senhora-da-luz' },
  { name: 'Água Verde', slug: 'agua-verde' },
  { name: 'Ahú', slug: 'ahu' },
  { name: 'Alto Boqueirão', slug: 'alto-boqueirao' },
  { name: 'Alto da Glória', slug: 'alto-da-gloria' },
  { name: 'Alto da XV', slug: 'alto-da-xv' },
  { name: 'Atuba', slug: 'atuba' },
  { name: 'Bacacheri', slug: 'bacacheri' },
  { name: 'Bairro Alto', slug: 'bairro-alto' },
  { name: 'Barreirinha', slug: 'barreirinha' },
  { name: 'Batel', slug: 'batel' },
  { name: 'Bigorrilho', slug: 'bigorrilho' },
  { name: 'Boa Vista', slug: 'boa-vista' },
  { name: 'Bom Retiro', slug: 'bom-retiro' },
  { name: 'Boqueirão', slug: 'boqueirao' },
  { name: 'Butiatuvinha', slug: 'butiatuvinha' },
  { name: 'Cabral', slug: 'cabral' },
  { name: 'Cachoeira', slug: 'cachoeira' },
  { name: 'Cajuru', slug: 'cajuru' },
  { name: 'Campina do Siqueira', slug: 'campina-do-siqueira' },
  { name: 'Campo Comprido', slug: 'campo-comprido' },
  { name: 'Campo de Santana', slug: 'campo-de-santana' },
  { name: 'Capão da Imbuia', slug: 'capao-da-imbuia' },
  { name: 'Capão Raso', slug: 'capao-raso' },
  { name: 'Cascatinha', slug: 'cascatinha' },
  { name: 'Caximba', slug: 'caximba' },
  { name: 'Centro', slug: 'centro' },
  { name: 'Centro Cívico', slug: 'centro-civico' },
  { name: 'CIC', slug: 'cic' },
  { name: 'Cristo Rei', slug: 'cristo-rei' },
  { name: 'Fanny', slug: 'fanny' },
  { name: 'Fazendinha', slug: 'fazendinha' },
  { name: 'Ganchinho', slug: 'ganchinho' },
  { name: 'Guabirotuba', slug: 'guabirotuba' },
  { name: 'Guaíra', slug: 'guaira' },
  { name: 'Hauer', slug: 'hauer' },
  { name: 'Hugo Lange', slug: 'hugo-lange' },
  { name: 'Jardim Botânico', slug: 'jardim-botanico' },
  { name: 'Jardim das Américas', slug: 'jardim-das-americas' },
  { name: 'Jardim Social', slug: 'jardim-social' },
  { name: 'Juvevê', slug: 'juveve' },
  { name: 'Lamenha Pequena', slug: 'lamenha-pequena' },
  { name: 'Lindóia', slug: 'lindoia' },
  { name: 'Mercês', slug: 'merces' },
  { name: 'Mossunguê', slug: 'mossungue' },
  { name: 'Novo Mundo', slug: 'novo-mundo' },
  { name: 'Orleans', slug: 'orleans' },
  { name: 'Parolin', slug: 'parolin' },
  { name: 'Pilarzinho', slug: 'pilarzinho' },
  { name: 'Pinheirinho', slug: 'pinheirinho' },
  { name: 'Portão', slug: 'portao' },
  { name: 'Prado Velho', slug: 'prado-velho' },
  { name: 'Rebouças', slug: 'reboucas' },
  { name: 'Riviera', slug: 'riviera' },
  { name: 'Santa Cândida', slug: 'santa-candida' },
  { name: 'Santa Felicidade', slug: 'santa-felicidade' },
  { name: 'Santa Quitéria', slug: 'santa-quiteria' },
  { name: 'Santo Inácio', slug: 'santo-inacio' },
  { name: 'São Braz', slug: 'sao-braz' },
  { name: 'São Francisco', slug: 'sao-francisco' },
  { name: 'São João', slug: 'sao-joao' },
  { name: 'São Lourenço', slug: 'sao-lourenco' },
  { name: 'São Miguel', slug: 'sao-miguel' },
  { name: 'Seminário', slug: 'seminario' },
  { name: 'Sítio Cercado', slug: 'sitio-cercado' },
  { name: 'Taboão', slug: 'taboao' },
  { name: 'Tarumã', slug: 'taruma' },
  { name: 'Tatuquara', slug: 'tatuquara' },
  { name: 'Tingui', slug: 'tingui' },
  { name: 'Uberaba', slug: 'uberaba' },
  { name: 'Umbará', slug: 'umbara' },
  { name: 'Vila Izabel', slug: 'vila-izabel' },
  { name: 'Vila Pantanal', slug: 'vila-pantanal' },
  { name: 'Vista Alegre', slug: 'vista-alegre' },
  { name: 'Xaxim', slug: 'xaxim' }
];

const CITIES = [
  { name: 'Curitiba', slug: 'curitiba' },
  { name: 'Almirante Tamandaré', slug: 'almirante-tamandare' },
  { name: 'Araucária', slug: 'araucaria' },
  { name: 'Colombo', slug: 'colombo' },
  { name: 'Fazenda Rio Grande', slug: 'fazenda-rio-grande' },
  { name: 'Pinhais', slug: 'pinhais' },
  { name: 'São José dos Pinhais', slug: 'sao-jose-dos-pinhais' }
];

const SERVICES = [
  { id: 'calhas', title: 'Instalação de Calhas' },
  { id: 'manutencao', title: 'Manutenção de Telhados' },
  { id: 'rufos', title: 'Instalação de Rufos' },
  { id: 'reformas', title: 'Reforma de Telhados' },
  { id: 'metalicos', title: 'Telhados Metálicos' },
  { id: 'captacao', title: 'Captação de Água Pluvial' },
  { id: 'solar', title: 'Aquecedor Solar' },
  { id: 'eolicos', title: 'Proteção contra Vendavais' }
];

function generateMeta(meta) {
  const siteUrl = 'https://www.acquateccalhas.com.br';
  const fullOgImage = meta.ogImage.startsWith('http') ? meta.ogImage : `${siteUrl}${meta.ogImage}`;
  
  return `
    <title>${meta.title}</title>
    <meta name="title" content="${meta.title}" />
    <meta name="description" content="${meta.description}" />
    <meta name="keywords" content="${meta.keywords}" />
    <meta name="robots" content="index, follow, max-image-preview:large" />
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

function getMetaForPage(pagePath) {
  const siteUrl = 'https://www.acquateccalhas.com.br';
  const defaultImage = '/logo-header-rodape-calhas-e-telhados-m2-ctba-pr-brasil.png';
  
  if (pagePath === '' || pagePath === '/') {
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
      description: `Servico profissional de ${name} em Curitiba. Garantia de 5 anos. WhatsApp: (41) 99133-7070`,
      canonical: `${siteUrl}/servicos/${slug}`,
      keywords: `${name.toLowerCase()}, ${name.toLowerCase()} curitiba, calhas e telhados curitiba`,
      ogImage: defaultImage
    };
  }
  
  return null;
}

function processHtmlFile(filePath) {
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
  console.log(`Injected meta tags: ${relativePath || '/'}`);
}

function walkDir(dir) {
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
