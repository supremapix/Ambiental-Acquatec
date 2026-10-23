import React from 'react';
import { Link } from 'react-router-dom';
import EnhancedSEO from '../components/EnhancedSEO';
import { getHomeSeo } from '../seo-meta.js';
import { buildGraph, createWebPageSchema, createFAQSchema } from '../utils/seo-schemas';
import { CONTACT } from '../site-config.js';
import { FAQS } from '../constants';
import ServicesSection from '../components/ServicesSection';
import RainDiagram from '../components/RainDiagram';
import ContactForm from '../components/ContactForm';
import GallerySection from '../components/GallerySection';

export default function HomePage() {
  const seo = getHomeSeo();
  return <div className="home-editorial">
    <EnhancedSEO {...seo} graph={buildGraph([createWebPageSchema(seo), createFAQSchema(seo.canonical, FAQS)])} />
    <section className="editorial-hero">
      <div className="wrap editorial-heading">
        <div><span className="eyebrow">Acquatec / Curitiba e região</span>
          <h1>Calhas e telhados.<br /><span>Cuidado com o que protege seu imóvel.</span></h1>
        </div>
        <div className="hero-summary">
          <p>Instalação, manutenção e reforma de coberturas para residências, condomínios e empresas. Conte o que seu imóvel precisa e consulte as opções de atendimento.</p>
          <a className="btn btn-wa" href={CONTACT.whatsappUrl}>Conversar sobre meu imóvel <span aria-hidden="true">↗</span></a>
          <a className="editorial-text-link" href="#servicos">Explorar os 8 serviços <span aria-hidden="true">↓</span></a>
          <p className="hero-consultation">Atendimento e avaliação no endereço sob consulta.</p>
        </div>
      </div>
      <figure className="wrap panorama">
        <img src="/acquatec-telhados-manutencao-condominios-insdustriais-residencias-curitiba-1-2000x900.jpeg" alt="Fachada com cobertura clara, fotografia do acervo original da Acquatec" width="1600" height="720" />
        <figcaption><span>COBERTURAS / DETALHES / CONSERVAÇÃO</span><span>Fotografia do acervo original do site Acquatec.</span></figcaption>
      </figure>
    </section>
    <section className="editorial-process"><div className="wrap process-columns">
      <div><span>01 / ENTENDER</span><h2>Conte o que acontece.</h2><p>Localização, tipo de imóvel e sinais do problema.</p></div>
      <div><span>02 / AVALIAR</span><h2>Consulte a avaliação.</h2><p>Necessidade de visita e acesso seguro à cobertura.</p></div>
      <div><span>03 / DEFINIR</span><h2>Combine os próximos passos.</h2><p>Escopo e condições descritos na proposta.</p></div>
    </div></section>
    <ServicesSection />
    <section id="sobre" className="section editorial-about"><div className="wrap editorial-about-grid">
      <figure><img src="/acquatec-calhas-e-telhados-em-curitiba-reformas-condominios-517x357.jpg" alt="Cobertura com telhas e encontros junto às paredes, do acervo Acquatec" width="600" height="450" loading="lazy" /><figcaption>Detalhes de cobertura no acervo original. Local da obra não confirmado.</figcaption></figure>
      <div><span className="eyebrow">A Acquatec</span><h2>Uma conversa clara antes de começar a obra.</h2>
        <p>A Acquatec Calhas e Telhados apresenta soluções para instalação, conservação e reforma de coberturas em Curitiba e região. O catálogo inclui calhas, rufos, telhados metálicos, captação de água, iluminação natural e exaustores eólicos.</p>
        <p>Descreva o problema, informe a localização e compartilhe fotos feitas de local seguro. A análise inicial ajuda a definir a necessidade de visita e os próximos passos. Escopo, materiais, prazo, preço e garantia devem constar na proposta.</p>
        <div className="note">Atendimento no endereço, agenda e condições de visita sob consulta. As páginas de bairros e cidades são guias de localização; não indicam filiais ou disponibilidade imediata.</div>
        <Link className="btn btn-light" to="/regioes">Consultar bairros e cidades <span aria-hidden="true">↗</span></Link>
      </div>
    </div></section>
    <RainDiagram />
    <GallerySection />
    <section className="section editorial-video"><div className="wrap video-layout"><div><span className="eyebrow">Veja o acervo</span><h2>Vídeo do acervo Acquatec</h2><p>Conheça o material publicado pela empresa.</p></div><iframe style={{width:'100%',aspectRatio:'16/9',border:0}} loading="lazy" src="https://www.youtube-nocookie.com/embed/V_91hDOAggc" title="Vídeo Acquatec Calhas e Telhados" allowFullScreen /></div></section>
    <section className="section editorial-faq"><div className="wrap faq-layout"><div><span className="eyebrow">Antes de contratar</span><h2>Informação para decidir com clareza.</h2><p>Perguntas antes do orçamento.</p><a className="editorial-text-link" href={CONTACT.phoneHref}>Ligar {CONTACT.phoneDisplay}</a></div><div className="faq">{FAQS.map(f=><details key={f.question}><summary>{f.question}</summary><p>{f.answer}</p></details>)}</div></div></section>
    <ContactForm />
  </div>;
}
