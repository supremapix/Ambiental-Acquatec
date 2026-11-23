import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import EnhancedSEO from '../components/EnhancedSEO';
import { getHomeSeo } from '../seo-meta.js';
import { buildGraph, createWebPageSchema, createFAQSchema } from '../utils/seo-schemas';
import { CONTACT } from '../site-config.js';
import { FAQS, SERVICES } from '../constants';
import ServicesSection from '../components/ServicesSection';
import RainDiagram from '../components/RainDiagram';
import ContactForm from '../components/ContactForm';
import GallerySection from '../components/GallerySection';

const archivePhotos = [
  ['/acquatec-telhados-manutencao-condominios-insdustriais-residencias-curitiba-1-2000x900.jpeg', 'Fachada com cobertura e elementos de acabamento.'],
  ['/acquatec-telhados-manutencao-condominios-insdustriais-residencias-curitiba-4-1889x850.jpeg', 'Detalhe de acabamento junto à borda da cobertura.'],
  ['/acquatec-telhados-condominios-reformas-preco-barato-manutencao-517x357.jpg', 'Vista superior de cobertura com telhas claras.'],
  ['/aplicacao_de_manta_em_calha.webp', 'Encontro entre telhas, calha e parede lateral.'],
  ['/acquatec-calhas-e-telhados-em-curitiba-reformas-condominios-517x357.jpg', 'Vista de cobertura com telhas e encontros junto às paredes.'],
] as const;

export default function HomePage() {
  const seo = getHomeSeo();
  const [photo, setPhoto] = useState(0);
  const [photoSrc, photoDescription] = archivePhotos[photo];
  const movePhoto = (offset: number) => setPhoto(active => (active + offset + archivePhotos.length) % archivePhotos.length);
  return <div className="home-classic">
    <EnhancedSEO {...seo} graph={buildGraph([createWebPageSchema(seo), createFAQSchema(seo.canonical, FAQS)])} />
    <section className="classic-hero section" aria-labelledby="inicio-acquatec">
      <div className="wrap classic-hero-grid">
        <div className="classic-hero-copy">
          <span className="eyebrow">Acquatec / Curitiba e região</span>
          <h1 id="inicio-acquatec">Calhas e telhados.<br /><span>Cuidado com o que protege seu imóvel.</span></h1>
          <p>Instalação, manutenção e reforma de coberturas para residências, condomínios e empresas. Conte o que seu imóvel precisa e consulte as opções de atendimento.</p>
          <div className="action-row">
            <a className="btn classic-primary" href="#orcamento">Solicitar orçamento <span aria-hidden="true">↗</span></a>
            <a className="btn btn-wa" href={CONTACT.whatsappUrl}>Conversar sobre meu imóvel <span aria-hidden="true">↗</span></a>
          </div>
          <a className="classic-hero-link" href="#servicos">Explorar os {SERVICES.length} serviços <span aria-hidden="true">↓</span></a>
          <p className="classic-availability">Atendimento e avaliação no endereço sob consulta.</p>
        </div>
        <figure className="classic-slideshow" aria-label="Fotografias do acervo original do site Acquatec">
          <div className="classic-photo-frame">
            <img src={photoSrc} alt={photoDescription} width="1000" height="900" />
            <button type="button" className="classic-photo-prev" aria-label="Foto anterior" onClick={() => movePhoto(-1)}><ChevronLeft aria-hidden="true" /></button>
            <button type="button" className="classic-photo-next" aria-label="Próxima foto" onClick={() => movePhoto(1)}><ChevronRight aria-hidden="true" /></button>
            <div className="classic-photo-steps" role="group" aria-label="Selecionar foto">
              {archivePhotos.map((item, index) => <button key={item[0]} type="button" aria-label={`Foto ${index + 1} de ${archivePhotos.length}`} aria-pressed={index === photo} onClick={() => setPhoto(index)}><span aria-hidden="true" /></button>)}
            </div>
          </div>
          <figcaption aria-live="polite" aria-atomic="true">{photo + 1} de {archivePhotos.length} · {photoDescription} Fotografia do acervo original do site Acquatec.</figcaption>
        </figure>
      </div>
      <div className="wrap classic-steps">
        <div><span>01 / ENTENDER</span><h2>Conte o que acontece.</h2><p>Localização, tipo de imóvel e sinais do problema.</p></div>
        <div><span>02 / AVALIAR</span><h2>Consulte a avaliação.</h2><p>Necessidade de visita e acesso seguro à cobertura.</p></div>
        <div><span>03 / DEFINIR</span><h2>Combine os próximos passos.</h2><p>Escopo e condições descritos na proposta.</p></div>
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
      <figure><div className="classic-about-photos"><img src="/acquatec-calhas-e-telhados-em-curitiba-reformas-condominios-517x357.jpg" alt="Cobertura com telhas e encontros junto às paredes, do acervo Acquatec" width="517" height="357" loading="lazy" /><img src="/calhas-preco-400x402.jpg" alt="Vista interna de uma calha junto ao telhado" width="400" height="402" loading="lazy" /></div><figcaption>Detalhes de cobertura no acervo original. Local da obra não confirmado.</figcaption></figure>
    </div></section>
    <RainDiagram />
    <section className="section soft"><div className="wrap reading"><span className="eyebrow">Guias para decidir</span><h2>Entenda antes de reformar.</h2><p>Manta térmica, condensação, drenagem e manutenção: consulte explicações, perguntas frequentes e critérios para conversar sobre seu imóvel.</p><Link className="btn btn-light" to="/guias">Explorar guias de telhados</Link></div></section>
    <GallerySection />
    <section className="section classic-video"><div className="wrap reading"><div><span className="eyebrow">Veja o acervo</span><h2>Vídeo do acervo Acquatec</h2><p>Conheça o material publicado pela empresa.</p></div><iframe style={{width:'100%',aspectRatio:'16/9',border:0}} loading="lazy" src="https://www.youtube-nocookie.com/embed/V_91hDOAggc" title="Vídeo Acquatec Calhas e Telhados" allowFullScreen /></div></section>
    <section className="section classic-faq soft"><div className="wrap reading"><div><span className="eyebrow">Antes de contratar</span><h2>Informação para decidir com clareza.</h2><p>Perguntas antes do orçamento.</p><a className="classic-phone" href={CONTACT.phoneHref}>Ligar {CONTACT.phoneDisplay}</a></div><div className="faq">{FAQS.map(f=><details key={f.question}><summary>{f.question}</summary><p>{f.answer}</p></details>)}</div></div></section>
    <ContactForm />
  </div>;
}
