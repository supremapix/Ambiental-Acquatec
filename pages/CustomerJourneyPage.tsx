import React from 'react';
import { Camera, ClipboardCheck, FileText, HardHat, MessageSquare, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import EnhancedSEO from '../components/EnhancedSEO';
import { CONTACT, SITE_URL } from '../site-config.js';
import { JOURNEY_DESCRIPTION, JOURNEY_IMAGE, JOURNEY_PATH, JOURNEY_STEPS, JOURNEY_TITLE } from '../customer-journey.js';
import { getPageSeo } from '../seo-meta.js';
import { buildGraph, createBreadcrumbSchema, createWebPageSchema } from '../utils/seo-schemas';
import './CustomerJourneyPage.css';

const icons = [MessageSquare, Camera, Search, FileText, HardHat, ClipboardCheck];

export default function CustomerJourneyPage() {
  const seo = getPageSeo(JOURNEY_PATH)!;
  return <>
    <EnhancedSEO {...seo} graph={buildGraph([
      createWebPageSchema(seo),
      createBreadcrumbSchema(seo.canonical, [{name: 'Início', url: SITE_URL + '/'}, {name: 'Como funciona', url: seo.canonical}])
    ])} />
    <nav className="wrap breadcrumb" aria-label="Você está aqui"><Link to="/">Início</Link> / <span aria-current="page">Como funciona</span></nav>
    <article className="section journey-page">
      <div className="wrap">
        <header className="reading journey-intro">
          <span className="eyebrow">Do primeiro contato à entrega</span>
          <h1>{JOURNEY_TITLE}</h1>
          <p className="knowledge-lead">{JOURNEY_DESCRIPTION}</p>
          <div className="action-row">
            <a className="btn btn-light" href="/#orcamento">Preparar meu pedido</a>
            <a className="btn btn-wa" href={CONTACT.whatsappUrl}>Falar no WhatsApp</a>
          </div>
        </header>
        <figure className="journey-figure">
          <img src={JOURNEY_IMAGE} alt="História em quadrinhos mostra a conversa com o cliente, a avaliação do imóvel, a proposta e o serviço no telhado." width={1200} height={800} decoding="async" />
          <figcaption>Ilustração gerada por IA para explicar o atendimento. Não representa clientes nem obras reais.</figcaption>
        </figure>
        <section aria-labelledby="passos-atendimento">
          <h2 id="passos-atendimento">O que acontece em cada etapa</h2>
          <ol className="journey-steps">
            {JOURNEY_STEPS.map(({title,text},i) => {
              const Icon=icons[i];
              return <li key={title}>
                <div className="journey-badge" aria-hidden="true"><Icon size={25} strokeWidth={1.8}/><span>{String(i+1).padStart(2,'0')}</span></div>
                <div><h3>{title}</h3><p>{text}</p></div>
              </li>;
            })}
          </ol>
        </section>
        <aside className="journey-next note" aria-labelledby="antes-de-pedir">
          <h2 id="antes-de-pedir">Quer agilizar o primeiro contato?</h2>
          <p>Tenha o bairro, o tipo de imóvel e uma descrição curta do problema. Se a calha transborda, por exemplo, indique onde a água cai e em que tipo de chuva isso acontece. Não precisa investigar a cobertura por conta própria.</p>
          <Link to="/servicos">Conhecer os serviços da Acquatec</Link>
        </aside>
      </div>
    </article>
  </>;
}
