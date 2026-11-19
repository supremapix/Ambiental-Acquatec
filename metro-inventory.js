import {METRO_ROOF_GUIDES} from './metro-roof-guides.js';
import {CITIES,ALL_NEIGHBORHOODS} from './site-data.js';
import {CITY_RESEARCH,POPULAR,OFFICIAL_CURITIBA,slugify} from './local-data.js';
import {METRO_UPDATES,EXTRA_LOCALITIES} from './metro-expansion.js';
export const METRO_SOURCE='https://www.amep.pr.gov.br/FAQ/Municipios-da-Regiao-Metropolitana-de-Curitiba';
export const METRO_RESEARCH={...CITY_RESEARCH};
for(const update of METRO_UPDATES){const old=METRO_RESEARCH[update.citySlug];METRO_RESEARCH[update.citySlug]={...old,...update,entries:[...(update.entries||[]),...(old?.names||[]).map(name=>({name,classification:old.category,context:'',source:old.source}))],names:[...new Set([...(old?.names||[]),...update.names])]};}
export const LOCALITIES=CITIES.flatMap(city=>{
 const research=METRO_RESEARCH[city.slug];if(!research)return [];
 const names=research.names.map((name,index)=>{const detail=research.entries?.find(e=>e.name===name);let classification=detail?.classification||research.category;
 if(city.slug==='curitiba')classification='Bairro oficial';
 if(city.slug==='colombo')classification=index<20?'Bairro rural relacionado pela Prefeitura':'Bairro urbano relacionado pela Prefeitura';
 return {name,citySlug:city.slug,cityName:city.name,classification,context:detail?.context||'',source:detail?.source||research.source,anchor:'localidade-'+slugify(name)};});
 const additions=city.slug==='curitiba'?POPULAR.map(p=>({name:p.name,citySlug:city.slug,cityName:city.name,classification:'Vila ou nome popular',context:p.note+' Referência: '+p.parent+'.',source:p.source,anchor:'localidade-'+slugify(p.name)})):[];
 for(const extra of EXTRA_LOCALITIES.filter(x=>x.citySlug===city.slug))additions.push({...extra,cityName:city.name,anchor:'localidade-'+slugify(extra.name)});
 return [...names,...additions.filter(x=>!names.some(n=>n.name===x.name))];
});
export function localityHref(item){const guide=METRO_ROOF_GUIDES.find(g=>g.citySlug===item.citySlug&&g.name===item.name);if(guide)return guide.path;if(item.citySlug==='curitiba'){const n=ALL_NEIGHBORHOODS.find(n=>n.name===item.name);if(n)return '/bairros/'+n.slug;}if(item.citySlug==='colombo'&&item.name==='Vila Zumbi')return '/bairros/vila-zumbi';return '/cidades/'+item.citySlug+'#'+item.anchor;}
export const normalizeLocal=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
