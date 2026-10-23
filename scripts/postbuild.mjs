import fs from 'node:fs';import path from 'node:path';import {getAllPages} from '../seo-meta.js';import {SITE_URL,CONTACT,BUSINESS} from '../site-config.js';import {SERVICES} from '../site-data.js';
const pages=getAllPages();const today=new Date().toISOString().slice(0,10);
for(const page of pages){const file=path.join('dist',page.path,'index.html');if(!fs.existsSync(file))throw new Error('Missing generated route: '+page.path);const html=fs.readFileSync(file,'utf8');if(!html.includes(page.canonical))throw new Error('Missing canonical: '+page.path);}
const xml='<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'+pages.map(p=>'<url><loc>'+p.canonical+'</loc><lastmod>'+today+'</lastmod></url>').join('\n')+'\n</urlset>';
const robots='User-agent: *\nAllow: /\nSitemap: '+SITE_URL+'/sitemap.xml\n';
const llms='# '+BUSINESS.name+'\n\n'+BUSINESS.description+'\n\nTelefone e WhatsApp: '+CONTACT.phoneDisplay+'\nSite: '+SITE_URL+'\n\nAtendimento, visita, preços, prazos e garantia dependem de confirmação e proposta. As localidades do guia não representam filiais nem cobertura garantida.\n\n## Serviços\n'+SERVICES.map(s=>'- ['+s.title+']('+SITE_URL+'/servicos/'+s.id+'): '+s.description[0]).join('\n')+'\n\n## Regiões e fontes\n'+SITE_URL+'/regioes\n';
for(const dir of ['dist','public']){fs.writeFileSync(path.join(dir,'sitemap.xml'),xml);fs.writeFileSync(path.join(dir,'robots.txt'),robots);fs.writeFileSync(path.join(dir,'llms.txt'),llms);fs.writeFileSync(path.join(dir,'llms-full.txt'),llms+'\n## Páginas\n'+pages.map(p=>'- ['+p.title+']('+p.canonical+')').join('\n'));}
fs.copyFileSync('dist/404/index.html','dist/404.html');
let sw=fs.readFileSync('public/sw.js','utf8').replace("const VERSION = '__SW_VERSION__';","const VERSION = '"+Date.now()+"';");fs.writeFileSync('dist/sw.js',sw);
fs.writeFileSync('dist/release.json',JSON.stringify({builtAt:new Date().toISOString(),pages:pages.length,release:'acquatec-senior-mobile-2026-10'}));
console.log('Validated '+pages.length+' routes; sitemap, robots, llms and real 404 generated.');
