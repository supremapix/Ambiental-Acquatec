import { writeFileSync } from 'fs';
import { ALL_NEIGHBORHOODS, CITIES, SERVICES } from '../constants';

const BASE_URL = 'https://www.acquateccalhas.com.br';
const TODAY = new Date().toISOString().split('T')[0];

interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: string;
  priority: string;
}

const urls: SitemapUrl[] = [
  { loc: '/', lastmod: TODAY, changefreq: 'weekly', priority: '1.0' },
  ...SERVICES.map(s => ({
    loc: `/servicos/${s.id}`,
    lastmod: TODAY,
    changefreq: 'monthly',
    priority: '0.9'
  })),
  ...CITIES.map(c => ({
    loc: `/cidades/${c.slug}`,
    lastmod: TODAY,
    changefreq: 'monthly',
    priority: '0.8'
  })),
  ...ALL_NEIGHBORHOODS.map(n => ({
    loc: `/bairros/${n.slug}`,
    lastmod: TODAY,
    changefreq: 'monthly',
    priority: '0.7'
  }))
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${BASE_URL}${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

writeFileSync('public/sitemap.xml', sitemap);
console.log(`Sitemap generated with ${urls.length} URLs`);
