import React from 'react';
import {Link} from 'react-router-dom';
import EnhancedSEO from '../components/EnhancedSEO';
import {METRO_ROOF_GUIDES} from '../metro-roof-guides.js';
import {getMetroRoofSeo} from '../seo-meta.js';
import {SITE_URL,CONTACT,waLink} from '../site-config.js';
import {buildGraph,createWebPageSchema,createBreadcrumbSchema,createFAQSchema} from '../utils/seo-schemas';

type Guide = (typeof METRO_ROOF_GUIDES)[number];

export default function MetroRoofPage({guide}:{guide:Guide}){
  const {citySlug,cityName,name,title,summary,tips,faqs,source,path}=guide;
  const seo=getMetroRoofSeo(guide);
  const cityPath='/cidades/'+citySlug;
  const related=METRO_ROOF_GUIDES.filter(item=>item.citySlug===citySlug&&item.path!==path);
  const contact=waLink('Olá! Gostaria de consultar a Acquatec para uma cobertura em '+name+', '+cityName+'. Meu endereço, tipo de imóvel e necessidade são: ');
  const graph=buildGraph([
    createWebPageSchema(seo),
    createBreadcrumbSchema(seo.canonical,[{name:'Início',url:SITE_URL+'/'},{name:'Regiões',url:SITE_URL+'/regioes'},{name:cityName,url:SITE_URL+cityPath},{name,url:seo.canonical}]),
    createFAQSchema(seo.canonical,faqs),
  ]);
  return <>
    <EnhancedSEO {...seo} graph={graph}/>
    <nav className="wrap breadcrumb" aria-label="Caminho da página"><Link to="/">Início</Link> / <Link to="/regioes">Regiões</Link> / <Link to={cityPath}>{cityName}</Link> / <span aria-current="page">{name}</span></nav>
    <section className="local-hero"><div className="wrap">
      <span className="eyebrow">{cityName} • Região Metropolitana de Curitiba</span>
      <h1>Calhas e telhados em {name}, {cityName}</h1>
      <p>{title}. Saiba o que reunir para conversar com a Acquatec e comparar o escopo antes de contratar.</p>
      <a className="btn btn-wa" href={contact}>Consultar pelo WhatsApp</a>{' '}<a className="btn" href={CONTACT.phoneHref}>Ligar para a Acquatec</a>
    </div></section>
    <section className="section" aria-labelledby="planejamento-local"><div className="wrap reading">
      <h2 id="planejamento-local">{title}</h2><p>{summary}</p>
      <h3>Dicas antes de pedir orçamento</h3><ul>{tips.map(tip=><li key={tip}>{tip}</li>)}</ul>
      <p><Link to={'/guias/'+guide.guide}>{guide.guideLabel}</Link></p>
    </div></section>
    <section className="section soft" aria-labelledby="duvidas-locais"><div className="wrap reading">
      <h2 id="duvidas-locais">Dúvidas sobre esta cobertura</h2>
      {faqs.map(f=><details key={f.question}><summary>{f.question}</summary><p>{f.answer}</p></details>)}
    </div></section>
    <section className="section" aria-labelledby="referencia-local"><div className="wrap reading">
      <h2 id="referencia-local">Consulte o atendimento para seu endereço</h2>
      <p>{name} aparece nas referências da Prefeitura de {cityName}. A localização ajuda a identificar seu pedido, mas não indica filial, visita garantida nem prazo de chegada. Informe CEP, tipo de imóvel e escopo para confirmar condições.</p>
      <p className="sources"><a href={source}>Conferir a fonte municipal de {cityName}</a></p>
      <nav className="link-grid" aria-label="Guias locais relacionados"><Link to={cityPath}>Bairros e localidades de {cityName}</Link>{related.map(item=><Link key={item.path} to={item.path}>Telhados em {item.name}</Link>)}</nav>
    </div></section>
  </>;
}
