import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Share2, X, Copy } from 'lucide-react';
import { getPageSeo } from '../seo-meta.js';
import { makeShareData } from '../share-data.js';

type CopyStatus = 'none' | 'success' | 'manual';

export default function ShareControl({ atFooter }: { atFooter: boolean }) {
  const { pathname } = useLocation();
  const share = makeShareData(pathname, getPageSeo(pathname));
  const [open, setOpen] = useState(false);
  const [copyStatus, setCopyStatus] = useState<CopyStatus>('none');
  const wrapper = useRef<HTMLElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  const closeControl = useRef<HTMLButtonElement>(null);
  const manual = useRef<HTMLTextAreaElement>(null);

  useEffect(() => { setOpen(false); setCopyStatus('none'); }, [pathname]);
  useEffect(() => {
    if (!open) return;
    closeControl.current?.focus();
    const outside = (event: PointerEvent) => {
      if (event.target instanceof Node && !wrapper.current?.contains(event.target)) setOpen(false);
    };
    const escape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setOpen(false);
        toggle.current?.focus();
      }
    };
    document.addEventListener('pointerdown', outside);
    document.addEventListener('keydown', escape);
    return () => {
      document.removeEventListener('pointerdown', outside);
      document.removeEventListener('keydown', escape);
    };
  }, [open]);
  useEffect(() => {
    if (open && copyStatus === 'manual') { manual.current?.focus(); manual.current?.select(); }
  }, [open, copyStatus]);

  const close = () => { setOpen(false); toggle.current?.focus(); };
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(share.recommendation);
      setCopyStatus('success');
    } catch {
      setCopyStatus('manual');
    }
  };

  return <aside ref={wrapper} className={'acq-share' + (atFooter && !open ? ' acq-share-at-footer' : '')} aria-label="Compartilhamento rápido">
    <button ref={toggle} type="button" className="btn btn-light acq-share-toggle" aria-controls="acq-share-panel" aria-expanded={open} onClick={() => {
      if (open) close();
      else { setCopyStatus('none'); setOpen(true); }
    }}><Share2 size={18} aria-hidden="true" /> Compartilhar</button>
    <section id="acq-share-panel" className="acq-share-panel" aria-labelledby="acq-share-heading" hidden={!open}>
      <div className="acq-share-header">
        <h2 id="acq-share-heading">Compartilhar esta página</h2>
        <button ref={closeControl} type="button" className="acq-share-close" aria-label="Fechar compartilhamento" onClick={close}><X size={21} aria-hidden="true" /></button>
      </div>
      {open && <><figure className="acq-share-preview">
        <img src={share.previewImage} alt="" loading="lazy" decoding="async" />
        <figcaption>{share.title}</figcaption>
      </figure>
      <div className="acq-share-links" aria-label="Redes sociais">
        {share.links.map(([name, href]) => <a key={name} href={href} target="_blank" rel="noopener noreferrer">{name}</a>)}
      </div>
      <button className="acq-share-copy" type="button" onClick={copy}><Copy size={18} aria-hidden="true" /> Copiar recomendação</button>
      {copyStatus === 'success' && <p className="acq-share-status" role="status">Recomendação copiada.</p>}
      {copyStatus === 'manual' && <label className="acq-share-manual"><span role="status">Não foi possível copiar automaticamente. Selecione e copie o texto abaixo.</span><textarea ref={manual} readOnly value={share.recommendation} rows={4} /></label>}</>}
    </section>
  </aside>;
}
