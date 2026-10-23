import React,{useState,useEffect,useRef} from 'react';import {CONTACT} from '../site-config.js';
export default function FloatingButtons(){const [showTop,setShowTop]=useState(false);const bar=useRef<HTMLElement>(null);
 useEffect(()=>{const update=()=>setShowTop(window.scrollY>300);update();window.addEventListener('scroll',update,{passive:true});return()=>window.removeEventListener('scroll',update);},[]);
 useEffect(()=>{const measure=()=>{document.documentElement.style.setProperty('--contact-dock-height',(bar.current?.getBoundingClientRect().height||0)+'px');};const observer=new ResizeObserver(measure);if(bar.current)observer.observe(bar.current);measure();return()=>observer.disconnect();},[]);
 return <nav ref={bar} className="floating-actions" aria-label="Ações rápidas">{showTop&&<a href="#topo" className="btn btn-light">↑ Voltar ao topo</a>}<a href={CONTACT.whatsappUrl} className="btn btn-wa" aria-label="Conversar com a Acquatec no WhatsApp">WhatsApp</a></nav>
}