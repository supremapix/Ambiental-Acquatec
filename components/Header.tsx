import React,{useState,useRef,useEffect} from 'react';
import {Link} from 'react-router-dom';
import {CONTACT} from '../site-config.js';
import {SERVICES} from '../constants';
export default function Header(){
 const [open,setOpen]=useState(false);const [ready,setReady]=useState(false);const toggle=useRef<HTMLButtonElement>(null);const nav=useRef<HTMLElement>(null);
 useEffect(()=>setReady(true),[]);
 function close(){setOpen(false);nav.current?.querySelectorAll('details').forEach(d=>d.open=false);}
 function navigate(e:React.MouseEvent<HTMLElement>){const a=(e.target as HTMLElement).closest('a');if(!a||!window.matchMedia('(max-width:800px)').matches)return;close();const hash=new URL(a.href).hash;window.setTimeout(()=>{const target=document.getElementById(hash?hash.slice(1):'conteudo');if(target){target.tabIndex=-1;target.focus({preventScroll:true});}},150);}
 return <><a className="skip" href="#conteudo">Pular para o conteúdo</a><div id="topo" tabIndex={-1} className="site-top"><div className="wrap"><span>Curitiba e região • Consulte disponibilidade no seu endereço</span><a href={CONTACT.phoneHref}>Telefone: {CONTACT.phoneDisplay}</a></div></div>
 <header className={'site-header'+(ready?' mobile-ready':'')}><div className="wrap bar"><Link className="brand-link" to="/" aria-label="Acquatec - início"><img className="site-logo" src="/logo-header-rodape-calhas-e-telhados-m2-ctba-pr-brasil.png" alt="Acquatec Calhas e Telhados" width="210" height="64"/></Link>
 <button ref={toggle} type="button" className="mobile-menu-toggle" aria-expanded={open} aria-controls="menu-principal" onClick={()=>open?close():setOpen(true)}><span>{open?'Fechar menu':'Abrir menu'}</span><span aria-hidden="true">{open?'−':'+'}</span></button>
 <nav id="menu-principal" ref={nav} className={'site-nav'+(open?' is-open':'')} aria-label="Menu principal" onClick={navigate} onKeyDown={e=>{if(e.key==='Escape'&&window.matchMedia('(max-width:800px)').matches){close();toggle.current?.focus();}}}>
 <Link to="/">Início</Link><details><summary>Serviços <span aria-hidden="true">▾</span></summary><div className="menu-panel">{SERVICES.map(s=><Link key={s.id} to={'/servicos/'+s.id}>{s.title}</Link>)}</div></details><Link to="/regioes">Bairros e cidades</Link><a href="/#sobre">A Acquatec</a><a href="/#orcamento">Orçamento</a></nav>
 <a className="btn btn-wa header-whatsapp" href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer">Conversar no WhatsApp</a></div></header></>;
}