import React from 'react';
import {Link} from 'react-router-dom';
import {SERVICES} from '../constants';
import {GALLERY} from '../gallery-data.js';
export default function ServicesSection(){return <section id="servicos" className="section editorial-services"><div className="wrap">
  <div className="section-heading"><div><span className="eyebrow">O catálogo completo</span><h2>Da calha ao telhado.<br/>Cada detalhe importa.</h2></div><p>Conheça todo o catálogo. Materiais e solução são definidos após avaliar o imóvel.</p></div>
  <div className="service-directory">{SERVICES.map((s,index)=><article className="service-entry" key={s.id}>
    <figure><img src={s.image} alt={s.title+' — imagem do acervo do site'} loading="lazy" width="600" height="450"/><figcaption>{GALLERY.find(i=>i.src===s.image)?.caption || 'Imagem preservada do acervo do site.'}</figcaption></figure>
    <div className="service-copy"><span className="service-number">{String(index+1).padStart(2,'0')} / SERVIÇO</span><h3>{s.title}</h3><p>{s.description[0]}</p><Link to={'/servicos/'+s.id}>Conhecer {s.title.toLowerCase()} <span aria-hidden="true">↗</span></Link></div>
  </article>)}</div></div></section>}
