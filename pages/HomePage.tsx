import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import EnhancedSEO from '../components/EnhancedSEO';
import { getHomeSeo } from '../seo-meta.js';
import { buildGraph, createWebPageSchema, createFAQSchema } from '../utils/seo-schemas';
import { CONTACT } from '../site-config.js';
import { JOURNEY_PATH } from '../customer-journey.js';
import { FAQS, SERVICES } from '../constants';
import ServicesSection from '../components/ServicesSection';
import RainDiagram from '../components/RainDiagram';
import ContactForm from '../components/ContactForm';
import GallerySection from '../components/GallerySection';

import { HOME_HERO, HOME_ABOUT } from '../home-photos.js';

export default function HomePage() {
  const seo = getHomeSeo();
  const [photo, setPhoto] = useState(0);
  const { src: photoSrc, caption: photoDescription, focus } = HOME_HERO[photo];
  const movePhoto = (offset: number) => setPhoto(active => (active + offset + HOME_HERO.length) % HOME_HERO.length);
  return <div className="home-classic">
    <EnhancedSEO {...seo} graph={buildGraph([createWebPageSchema(seo), createFAQSchema(seo.canonical, FAQS)])} />
    <section className="classic-hero section" aria-labelledby="inicio-acquatec">
      <div className="wrap classic-hero-grid">
        <div className="classic-hero-copy">
          <span className="eyebrow">Acquatec / Curitiba e região</span>
          <h1 id="inicio-acquatec">Calhas e telhados.<br /><span>Cuidado com o que protege seu imóvel.</span></h1>
          <p>Instalação de calhas em Curitiba, avaliação de vazamentos e manutenção e reforma de coberturas para casas, condomínios e empresas.</p>
          <div className="action-row">
            <a className="btn classic-primary" href="#orcamento">Solicitar orçamento <span aria-hidden="true">↗</span></a>
            <a className="btn btn-wa" href={CONTACT.whatsappUrl}>Conversar sobre meu imóvel <span aria-hidden="true">↗</span></a>
          </div>
          <a className="classic-hero-link" href="#servicos">Explorar os {SERVICES.length} serviços <span aria-hidden="true">↓</span></a>
          <p className="classic-availability">Atendimento e avaliação no endereço sob consulta.</p>
        </div>
        <figure className="classic-slideshow" aria-label="Fotografias do acervo original do site Acquatec">
          <div className="classic-photo-frame">
            <img src={photoSrc} alt={photoDescription} style={{ objectPosition: focus }} width="1000" height="900" />
            <button type="button" className="classic-photo-prev" aria-label="Foto anterior" onClick={() => movePhoto(-1)}><ChevronLeft aria-hidden="true" /></button>
            <button type="button" className="classic-photo-next" aria-label="Próxima foto" onClick={() => movePhoto(1)}><ChevronRight aria-hidden="true" /></button>
            <div className="classic-photo-steps" role="group" aria-label="Selecionar foto">
              {HOME_HERO.map((item, index) => <button key={item.src} type="button" aria-label={`Foto ${index + 1} de ${HOME_HERO.length}`} aria-pressed={index === photo} onClick={() => setPhoto(index)}><span aria-hidden="true" /></button>)}
            </div>
          </div>
          <figcaption aria-live="polite" aria-atomic="true">{photo + 1} de {HOME_HERO.length} · {photoDescription} Fotografia do acervo original do site Acquatec.</figcaption>
        </figure>
      </div>
      <div className="wrap classic-steps">
        <div><span>01 / ENTENDER</span><h2>Conte o que acontece.</h2><p>Localização, tipo de imóvel e sinais do problema.</p></div>
        <div><span>02 / AVALIAR</span><h2>Consulte a avaliação.</h2><p>Necessidade de visita e acesso seguro à cobertura.</p></div>
        <div><span>03 / DEFINIR</span><h2>Combine os próximos passos.</h2><p>Escopo e condições descritos na proposta.</p><Link className="classic-hero-link" to={JOURNEY_PATH}>Veja como funciona o atendimento <span aria-hidden="true">→</span></Link></div>
      </div>
    </section>
    <ServicesSection />
    <section id="sobre" className="section classic-about"><div className="wrap classic-about-grid">
      <div><span className="eyebrow">A Acquatec</span><h2>Uma conversa clara antes de começar a obra.</h2>
        <p>A Acquatec Calhas e Telhados apresenta soluções para instalação, conservação e reforma de coberturas em Curitiba e região. O catálogo inclui calhas, rufos, telhados metálicos, captação de água, iluminação natural, exaustores eólicos e instalação de manta térmica.</p>
        <p>Descreva o problema, informe a localização e compartilhe fotos feitas de local seguro. A análise inicial ajuda a definir a necessidade de visita e os próximos passos. Escopo, materiais, prazo, preço e garantia devem constar na proposta.</p>
        <div className="note">Atendimento no endereço, agenda e condições de visita sob consulta. As páginas de bairros e cidades são guias de localização; não indicam filiais ou disponibilidade imediata.</div>
        <Link className="btn btn-light" to="/regioes">Consultar bairros e cidades <span aria-hidden="true">↗</span></Link>
      </div>
      <figure><div className="classic-about-photos">{HOME_ABOUT.map(item => <img key={item.src} src={item.src} alt={item.caption} width="517" height="646" style={{ objectPosition: item.focus }} loading="lazy" decoding="async" />)}</div><figcaption>Detalhes de cobertura no acervo original. Local da obra não confirmado.</figcaption></figure>
    </div></section>
    <RainDiagram />
    <section className="section soft"><div className="wrap reading"><span className="eyebrow">Guias para decidir</span><h2>Entenda antes de reformar.</h2><p>Manta térmica, condensação, drenagem e manutenção: consulte explicações, perguntas frequentes e critérios para conversar sobre seu imóvel.</p><Link className="btn btn-light" to="/guias">Explorar guias de telhados</Link></div></section>
    <GallerySection />
    <section className="section classic-video"><div className="wrap reading"><div><span className="eyebrow">Veja o acervo</span><h2>Vídeo do acervo Acquatec</h2><p>Conheça o material publicado pela empresa.</p></div><iframe style={{width:'100%',aspectRatio:'16/9',border:0}} loading="lazy" src="https://www.youtube-nocookie.com/embed/V_91hDOAggc" title="Vídeo Acquatec Calhas e Telhados" allowFullScreen /></div></section>
    <section className="section classic-faq soft"><div className="wrap reading"><div><span className="eyebrow">Antes de contratar</span><h2>Informação para decidir com clareza.</h2><p>Perguntas antes do orçamento.</p><a className="classic-phone" href={CONTACT.phoneHref}>Ligar {CONTACT.phoneDisplay}</a></div><div className="faq">{FAQS.map(f=><details key={f.question}><summary>{f.question}</summary><p>{f.answer}</p></details>)}</div></div></section>
    <ContactForm />
  </div>;
}

