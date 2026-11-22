import React from 'react';
import './RainHistoryVisual.css';

export const HISTORY_SLUG = 'historia-calhas-telhados';
export const HISTORY_DATE = '2026-11-22';
export const HISTORY_HERO = '/imagens/historia-calhas-telhados/hero.webp';

const steps = [
  { title: 'Telhado', detail: 'A inclinação conduz a chuva à borda.', d: 'M3 12 12 5l9 7M6 11v8h12v-8' },
  { title: 'Calha', detail: 'A borda coleta a água que desce.', d: 'M4 8v5a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8M7 5l-1 2m6-2-1 2m6-2-1 2' },
  { title: 'Condutor', detail: 'A descida leva a água à saída prevista.', d: 'M5 5h9v6h5v8h-5v-5H9V9H5z' },
];

export function RainHistoryHero(){
  return <figure className="rain-history-hero">
    <img src={HISTORY_HERO} alt="Telhado inclinado de condomínio contemporâneo com calha e descida de água visíveis, visto do chão" width={1600} height={900} fetchPriority="high" decoding="async"/>
    <figcaption>Ilustração editorial, não representa uma obra da Acquatec.</figcaption>
  </figure>;
}

export function RainHistoryFlow(){
  return <aside className="rain-history-flow" aria-label="O caminho da chuva na cobertura">
    <p><strong>Acquatec explica: o caminho da chuva</strong></p>
    <ol>{steps.map(({title,detail,d})=><li key={title}>
      <svg aria-hidden="true" viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d={d}/></svg>
      <span><strong>{title}</strong><br/>{detail}</span>
    </li>)}</ol>
  </aside>;
}

export function RainHistoryWarehouse(){
  return <figure className="rain-history-hero">
    <img src="/imagens/historia-calhas-telhados/drenagem-galpao.webp" alt="Beirada de cobertura metálica de galpão com calha e condutores, vista a partir do chão" width={1200} height={675} loading="lazy" decoding="async"/>
    <figcaption>Ilustração editorial: em coberturas grandes, as descidas fazem parte do projeto de drenagem.</figcaption>
  </figure>;
}
