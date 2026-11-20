import assert from 'node:assert/strict';
import fs from 'node:fs';
import {SERVICES} from '../site-data.js';
import {ARTICLES,SERVICE_GUIDES} from '../knowledge-data.js';
import {SITE_URL} from '../site-config.js';
assert.equal(SERVICES.length,9);assert(ARTICLES.length>=6);assert.equal(new Set(ARTICLES.map(a=>a.slug)).size,ARTICLES.length);
for(const s of SERVICES){const g=SERVICE_GUIDES[s.id];assert(g);assert(g.sections.length>=3);assert(g.faqs.length>=3);assert(g.sources.length);const html=fs.readFileSync('dist/servicos/'+s.id+'/index.html','utf8');assert(html.includes(g.summary));assert(html.includes('FAQPage'));assert(html.includes('Service'));}
for(const a of ARTICLES){assert(a.sections.length>=3);assert(a.sources.length);assert(a.serviceIds.every(id=>SERVICES.some(s=>s.id===id)));const html=fs.readFileSync('dist/guias/'+a.slug+'/index.html','utf8');assert(html.includes(a.sections[0].text));assert(html.includes('property="og:type" content="article"'));assert(html.includes('"@type":"Article"'));assert(html.includes(SITE_URL+'/guias/'+a.slug));}
const llms=fs.readFileSync('dist/llms-full.txt','utf8');assert(llms.includes(SERVICE_GUIDES['manta-termica'].summary));assert(llms.includes(ARTICLES[0].sections[0].text));console.log(`Verified all ${SERVICES.length} service hubs, ${ARTICLES.length} original guides, schemas and machine-readable content.`);
