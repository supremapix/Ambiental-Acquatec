import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '../constants';
import { GALLERY } from '../gallery-data.js';

export default function ServicesSection() {
  return <section id="servicos" className="section soft classic-services">
    <div className="wrap">
      <div className="classic-services-heading">
        <span className="eyebrow">O catálogo completo</span>
        <h2>Da calha ao telhado. Cada detalhe importa.</h2>
        <p>Conheça todo o catálogo. Materiais e solução são definidos após avaliar o imóvel.</p>
      </div>
      <div className="cards service-cards classic-service-grid">
        {SERVICES.map((s, index) => <article className="card" key={s.id}>
          <figure>
            <img src={s.image} alt={s.id === 'manta-termica' ? 'Cobertura do acervo Acquatec, sem demonstração de manta térmica' : s.title + ' — imagem do acervo do site'} loading="lazy" width="600" height="450" />
            <figcaption>{GALLERY.find(i => i.src === s.image)?.caption || 'Imagem preservada do acervo do site.'}</figcaption>
          </figure>
          <div className="card-body">
            <span className="service-number">{String(index + 1).padStart(2, '0')} / SERVIÇO</span>
            <h3>{s.title}</h3><p>{s.description[0]}</p>
            <div className="classic-card-actions">
              <Link className="btn" to={'/servicos/' + s.id}>Saiba mais <ArrowRight size={15} aria-hidden="true" /><span className="sr-only"> sobre {s.title.toLowerCase()}</span></Link>
              <a className="btn classic-primary" href="#orcamento">Orçamento<span className="sr-only"> para {s.title.toLowerCase()}</span></a>
            </div>
          </div>
        </article>)}
      </div>
    </div>
  </section>;
}
