import {METRO_ROOF_GUIDES} from './metro-roof-guides.js';
import {ARTICLES} from './knowledge-data.js';
import {JOURNEY_PATH,JOURNEY_TITLE,JOURNEY_DESCRIPTION,JOURNEY_IMAGE} from './customer-journey.js';
import {localPresentation} from './local-presentation.js';
import {SITE_URL,BUSINESS,CONTACT} from './site-config.js';
import {CITIES,ALL_NEIGHBORHOODS,SERVICES} from './site-data.js';
export const clamp=(text,max=158)=>text.length>max?text.slice(0,max-1)+'…':text;
const entry=(path,title,description,type='website',ogImage=BUSINESS.defaultImage)=>({path,title,h1:title.split(' | ')[0],description,canonical:SITE_URL+path,type,ogImage,keywords:'',priority:path==='/'?'1.0':'0.7',changefreq:'monthly'});
export const getHomeSeo=()=>entry('/','Calhas e Telhados em Curitiba | Acquatec','Manta térmica, calhas, rufos e manutenção de telhados em Curitiba. Consulte avaliação com a Acquatec: '+CONTACT.phoneDisplay+'.');
export const getServiceSeo=s=>entry('/servicos/'+s.id,s.title+' em Curitiba | Acquatec',clamp(s.description[0]+' Consulte avaliação e orçamento.'),'service',s.image);
export const getCitySeo=c=>entry('/cidades/'+c.slug,'Calhas, Telhados e Manta Térmica em '+c.name+' | Acquatec',clamp(c.name+': '+localPresentation('cidades',c).description),'city');
export const getNeighborhoodSeo=n=>entry('/bairros/'+n.slug,'Calhas e Telhados em '+n.name+' | Acquatec',clamp(n.name+': '+localPresentation('bairros',n).description),'neighborhood');
export const getMetroRoofSeo=g=>entry(g.path,'Calhas e Telhados em '+g.name+', '+g.cityName+' | Acquatec',clamp(g.title+' em '+g.name+', '+g.cityName+'. Veja dicas e consulte atendimento.'),'neighborhood');
export const getArticleSeo=a=>entry('/guias/'+a.slug,a.title+' | Acquatec',clamp(a.description),'article',a.slug==='historia-calhas-telhados'?'/imagens/historia-calhas-telhados/hero.webp':undefined);
export const STATIC_PAGES=[entry(JOURNEY_PATH,JOURNEY_TITLE,clamp(JOURNEY_DESCRIPTION),'website',JOURNEY_IMAGE),entry('/servicos','Serviços de calhas e telhados em Curitiba | Acquatec','Conheça os serviços de manta térmica, calhas, rufos, manutenção, reformas e conforto na cobertura.'),entry('/guias','Guias sobre telhados, calhas e manta térmica | Acquatec','Informação para entender calor, infiltrações, condensação, calhas, iluminação e conservação do telhado.'),entry('/regioes','Bairros e localidades dos 29 municípios da RMC | Acquatec','Bairros oficiais, vilas e localidades com fontes públicas e atendimento sob consulta.'),entry('/politica','Privacidade | Acquatec','Como o formulário prepara seu contato com a Acquatec.'),entry('/termos','Condições de uso | Acquatec','Informações sobre conteúdo, avaliação e orçamento dos serviços.')];
export const getAllPages=()=>[getHomeSeo(),...SERVICES.map(getServiceSeo),...ARTICLES.map(getArticleSeo),...CITIES.map(getCitySeo),...ALL_NEIGHBORHOODS.map(getNeighborhoodSeo),...METRO_ROOF_GUIDES.map(getMetroRoofSeo),...STATIC_PAGES];
export const getPageSeo=pathname=>getAllPages().find(p=>p.path===(pathname.replace(/\\/g,'/').replace(/\/$/,'')||'/'));

