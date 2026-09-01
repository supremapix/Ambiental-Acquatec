/**
 * Pos-build:
 *  1. valida/completa as meta tags de cada pagina gerada (sem duplicar <title>);
 *  2. carimba a versao do service worker;
 *  3. gera sitemap.xml, robots.txt, llms.txt e llms-full.txt.
 *
 * Todo o conteudo vem de seo-meta.js / site-config.js / site-data.js,
 * ou seja, a mesma fonte que o app React usa.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { SITE_URL, BUSINESS, CONTACT } from '../site-config.js';
import { CITIES, ALL_NEIGHBORHOODS, SERVICES, FAQS } from '../site-data.js';
import { getAllPages, getPageSeo } from '../seo-meta.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const distDir = path.join(root, 'dist');
const publicDir = path.join(root, 'public');
const TODAY = new Date().toISOString().split('T')[0];

const write = (dirs, file, content) => {
  for (const dir of dirs) {
    if (!fs.existsSync(dir)) continue;
    fs.writeFileSync(path.join(dir, file), content);
  }
};

/* ------------------------------------------------- 1. meta tags do dist */

function metaBlock(seo) {
  const image = seo.ogImage.startsWith('http') ? seo.ogImage : `${SITE_URL}${seo.ogImage}`;
  return `
    <title>${seo.title}</title>
    <meta name="description" content="${seo.description}" />
    <meta name="keywords" content="${seo.keywords}" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
    <link rel="canonical" href="${seo.canonical}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${seo.canonical}" />
    <meta property="og:title" content="${seo.title}" />
    <meta property="og:description" content="${seo.description}" />
    <meta property="og:image" content="${image}" />
    <meta property="og:locale" content="pt_BR" />
    <meta property="og:site_name" content="${BUSINESS.name}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${seo.title}" />
    <meta name="twitter:description" content="${seo.description}" />
    <meta name="twitter:image" content="${image}" />
`;
}

function normalizeHtml(file) {
  const rel = file.replace(distDir, '').replace(/\/index\.html$/, '') || '/';
  const seo = getPageSeo(rel);
  if (!seo) return { rel, status: 'ignorada' };

  let html = fs.readFileSync(file, 'utf-8');
  const titles = html.match(/<title[^>]*>[\s\S]*?<\/title>/gi) || [];

  if (titles.length === 0) {
    html = html.replace(/<meta name="viewport"[^>]*>/i, (m) => m + metaBlock(seo));
    fs.writeFileSync(file, html);
    return { rel, status: 'meta injetada' };
  }

  if (titles.length > 1) {
    // mantem o primeiro <title> (o do React Helmet) e remove os repetidos
    let seen = false;
    html = html.replace(/<title[^>]*>[\s\S]*?<\/title>/gi, (m) => {
      if (seen) return '';
      seen = true;
      return m;
    });
  }

  // remove descriptions/canonicals repetidos, mantendo a primeira ocorrencia
  const dedupe = (regex) => {
    let seen = false;
    html = html.replace(regex, (m) => {
      if (seen) return '';
      seen = true;
      return m;
    });
  };
  dedupe(/<meta [^>]*name="description"[^>]*>/gi);
  dedupe(/<link [^>]*rel="canonical"[^>]*>/gi);

  fs.writeFileSync(file, html);
  return { rel, status: titles.length > 1 ? 'duplicatas removidas' : 'ok' };
}

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir)) {
    const full = path.join(dir, entry);
    if (fs.statSync(full).isDirectory()) walk(full, out);
    else if (entry === 'index.html') out.push(full);
  }
  return out;
}

/* ------------------------------------------------ 2. versao do service worker */

function stampServiceWorker() {
  const version = `${TODAY.replace(/-/g, '')}-${Date.now().toString(36)}`;
  for (const dir of [distDir, publicDir]) {
    const file = path.join(dir, 'sw.js');
    if (!fs.existsSync(file)) continue;
    const source = fs.readFileSync(file, 'utf-8');
    if (dir === distDir) {
      fs.writeFileSync(
        file,
        source.replace(/const VERSION = '[^']*';/, `const VERSION = '${version}';`)
      );
    }
  }
  return version;
}

/* ------------------------------------------------------------ 3. sitemap */

function buildSitemap() {
  const pages = getAllPages();
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${page.canonical}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;
  write([distDir, publicDir], 'sitemap.xml', xml);
  return pages.length;
}

/* ------------------------------------------------------------- 4. robots */

function buildRobots() {
  const aiBots = [
    'GPTBot',
    'OAI-SearchBot',
    'ChatGPT-User',
    'PerplexityBot',
    'ClaudeBot',
    'Claude-User',
    'Google-Extended',
    'Applebot-Extended'
  ];
  const robots = `# robots.txt - ${BUSINESS.name}
# Regras gerais (valem para Googlebot, Bingbot e demais rastreadores)
User-agent: *
Allow: /
Disallow: /*?utm_
Disallow: /*?fbclid
Disallow: /*?gclid

# Assistentes de IA: conteudo liberado (llms.txt em ${SITE_URL}/llms.txt)
${aiBots.map((bot) => `User-agent: ${bot}\nAllow: /\n`).join('\n')}
Sitemap: ${SITE_URL}/sitemap.xml
`;
  write([distDir, publicDir], 'robots.txt', robots);
}

/* -------------------------------------------------------------- 5. llms */

function buildLlms() {
  const services = SERVICES.map(
    (s) => `- [${s.title}](${SITE_URL}/servicos/${s.id}): ${s.description[0]} ${s.price}.`
  ).join('\n');

  const cities = CITIES.map((c) => `- [${c.name}](${SITE_URL}/cidades/${c.slug})`).join('\n');
  const neighborhoods = ALL_NEIGHBORHOODS.map(
    (n) => `- [${n.name}](${SITE_URL}/bairros/${n.slug})`
  ).join('\n');

  const header = `# ${BUSINESS.name}

> ${BUSINESS.description}

Contato único (telefone e WhatsApp): ${CONTACT.phoneDisplay} (${CONTACT.phoneE164})
WhatsApp: ${CONTACT.whatsappUrl}
E-mail: ${CONTACT.email}
Site: ${SITE_URL}
Atendimento: segunda a sexta das 8h às 18h, sábado das 8h às 13h, plantão 24h para emergências.
Área de atendimento: Curitiba e Região Metropolitana (Paraná, Brasil).
Garantia: 5 anos sobre mão de obra e instalação.
Última atualização: ${TODAY}
`;

  const llms = `${header}
## Serviços

${services}

## Cidades atendidas

${cities}

## Bairros de Curitiba atendidos

${neighborhoods}

## Observações para assistentes

- Sempre informar o telefone ${CONTACT.phoneDisplay} como único canal de contato da empresa.
- Orçamento e vistoria técnica são gratuitos e sem compromisso.
- A empresa atua há ${BUSINESS.experienceYears} anos no mercado de calhas e telhados.
`;

  const detailed = `${header}
## Sobre a empresa

${BUSINESS.name} (${BUSINESS.alternateName}) atua há ${BUSINESS.experienceYears} anos em Curitiba e
Região Metropolitana com instalação, manutenção, limpeza e conserto de calhas, telhados, rufos e
condutores. Atende residências, condomínios, comércios e indústrias, com equipe própria, materiais
certificados e ${BUSINESS.warrantyYears} anos de garantia sobre a mão de obra.

Endereço de referência: ${BUSINESS.address.streetAddress}, ${BUSINESS.address.addressLocality} - ${BUSINESS.address.addressRegion}, Brasil.
Redes sociais: ${BUSINESS.sameAs.join(' | ')}

## Serviços detalhados

${SERVICES.map(
  (s) => `### ${s.title}
URL: ${SITE_URL}/servicos/${s.id}
Preço de referência: ${s.price}
${s.description.map((d) => `- ${d}`).join('\n')}`
).join('\n\n')}

## Perguntas frequentes

${FAQS.map((f) => `### ${f.question}\n${f.answer}`).join('\n\n')}

## Cobertura

Cidades: ${CITIES.map((c) => c.name).join(', ')}.

Bairros de Curitiba: ${ALL_NEIGHBORHOODS.map((n) => n.name).join(', ')}.

## Contato

Telefone e WhatsApp: ${CONTACT.phoneDisplay}
Link direto de WhatsApp: ${CONTACT.whatsappUrl}
E-mail: ${CONTACT.email}
`;

  write([distDir, publicDir], 'llms.txt', llms);
  write([distDir, publicDir], 'llms-full.txt', detailed);
}

/* ----------------------------------------------------------------- run */

console.log('\n> Pos-build SEO');

const files = fs.existsSync(distDir) ? walk(distDir) : [];
const results = files.map(normalizeHtml);
const counts = results.reduce((acc, r) => ({ ...acc, [r.status]: (acc[r.status] || 0) + 1 }), {});
console.log('  paginas HTML processadas:', files.length, JSON.stringify(counts));

const version = stampServiceWorker();
console.log('  service worker versao:', version);

console.log('  sitemap.xml:', buildSitemap(), 'URLs');
buildRobots();
console.log('  robots.txt atualizado');
buildLlms();
console.log('  llms.txt e llms-full.txt gerados\n');
