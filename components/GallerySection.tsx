import React from 'react';
import { GALLERY } from '../gallery-data.js';
import { HOME_ARCHIVE_FEATURED } from '../home-photos.js';

export default function GallerySection() {
  return <section id="trabalhos" className="section">
    <div className="wrap">
      <span className="eyebrow">Acervo preservado</span>
      <h2>Coberturas, detalhes e materiais.</h2>
      <p>Veja dois detalhes do acervo. As fotos não identificam o local das obras. A lista abaixo mantém acesso a todos os arquivos originais sem repetir as imagens da página.</p>
      <div className="cards gallery-cards home-archive-grid">
        {HOME_ARCHIVE_FEATURED.map(p => <figure className="card" key={p.src}>
          <a className="home-archive-image" href={p.src} target="_blank" rel="noopener noreferrer" aria-label={'Abrir foto original: ' + p.caption}>
            <img src={p.src} width="600" height="450" style={{ objectPosition: p.focus, transform: `scale(${p.scale})` }} loading="lazy" decoding="async" alt={p.caption} />
          </a>
          <figcaption className="card-body">{p.caption}</figcaption>
        </figure>)}
      </div>
      <details className="home-archive-index">
        <summary>Ver todos os {GALLERY.length} arquivos do acervo</summary>
        <ul>{GALLERY.map(p => <li key={p.src}><a href={p.src} target="_blank" rel="noopener noreferrer">{p.caption}</a></li>)}</ul>
      </details>
    </div>
  </section>;
}
