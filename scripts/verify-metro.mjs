import assert from 'node:assert/strict';import fs from 'node:fs';
import {CITIES} from '../site-data.js';import {LOCALITIES,METRO_RESEARCH,localityHref} from '../metro-inventory.js';
assert.equal(CITIES.length,29);assert.equal(Object.keys(METRO_RESEARCH).length,29);
for(const city of CITIES){const r=METRO_RESEARCH[city.slug];assert(r&&r.names.length&&r.source&&r.gap,city.slug);const html=fs.readFileSync('dist/cidades/'+city.slug+'/index.html','utf8');for(const n of LOCALITIES.filter(x=>x.citySlug===city.slug)){assert(html.includes('id="'+n.anchor+'"'),city.slug+': '+n.name);assert(n.source.startsWith('https://'));}}
const seen=new Set();for(const p of LOCALITIES){const key=p.citySlug+'/'+p.anchor;assert(!seen.has(key),'Duplicate '+key);seen.add(key);const href=localityHref(p);assert(href.startsWith('/bairros/')||href.includes('#localidade-'));}
assert(LOCALITIES.some(p=>p.citySlug==='colombo'&&p.name==='Vila Zumbi'));
console.log(JSON.stringify({municipalities:CITIES.length,localReferences:LOCALITIES.length,distinctAnchors:seen.size,allMunicipalInventoriesSourced:true}));
