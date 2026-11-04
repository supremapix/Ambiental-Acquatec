import React from 'react';
import {Link} from 'react-router-dom';
import {SERVICES} from '../constants';
import {ARTICLES} from '../knowledge-data.js';
import {getPageSeo} from '../seo-meta.js';
import {SITE_URL} from '../site-config.js';
import EnhancedSEO from '../components/EnhancedSEO';
import {buildGraph,createWebPageSchema,createBreadcrumbSchema,createItemListSchema} from '../utils/seo-schemas';
export default function DirectoryPage({kind}:{kind:'services'|'articles'}) {
 const service=kind==='services';const seo=getPageSeo(service?'/servicos':'/guias');
 const items=service?SERVICES.map(s=>({name:s.title,url:'/servicos/'+s.id,description:s.description[0]})):ARTICLES.map(a=>({name:a.title,url:'/guias/'+a.slug,description:a.description}));
 return <><EnhancedSEO {...seo} graph={buildGraph([createWebPageSchema(seo),createBreadcrumbSchema(seo.canonical,[{name:'Início',url:SITE_URL+'/'},{name:service?'Serviços':'Guias',url:seo.canonical}]),createItemListSchema(seo.canonical+'#lista',seo.title,items.map(i=>({...i,url:SITE_URL+i.url})))])}/><div className="wrap breadcrumb"><Link to="/">Início</Link> / {service?'Serviços':'Guias'}</div><section className="section"><div className="wrap"><span className="eyebrow">Acquatec • Curitiba e região</span><h1>{service?'Serviços para cuidar da sua cobertura':'Guias sobre telhados e calhas'}</h1><p className="reading">{service?'Escolha o serviço para entender aplicações, o que deve ser avaliado e quais informações levar ao orçamento. Atendimento e escopo dependem da avaliação do imóvel.':'Respostas práticas para entender a cobertura, comparar soluções e preparar sua conversa com a Acquatec. Conteúdo informativo com referências: não substitui inspeção ou projeto do imóvel.'}</p><div className="knowledge-grid">{items.map(i=><article className="knowledge-card" key={i.url}><h2><Link to={i.url}>{i.name}</Link></h2><p>{i.description}</p><Link to={i.url}>Ler {service?'sobre o serviço':'o guia'} ↗</Link></article>)}</div><p><Link to={service?'/guias':'/servicos'}>{service?'Consultar guias técnicos':'Conhecer todos os serviços'}</Link></p></div></section></>;
}
