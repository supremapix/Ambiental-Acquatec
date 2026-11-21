import React,{useState,useEffect,useRef} from 'react';
import {CONTACT} from '../site-config.js';
export default function FloatingButtons(){
 const [showTop,setShowTop]=useState(false);const [atFooter,setAtFooter]=useState(false);const bar=useRef<HTMLElement>(null);
 useEffect(()=>{const update=()=>setShowTop(window.scrollY>300);update();window.addEventListener('scroll',update,{passive:true});return()=>window.removeEventListener('scroll',update);},[]);
 useEffect(()=>{const footer=document.querySelector('.site-footer');if(!footer)return;const observer=new IntersectionObserver(([entry])=>setAtFooter(entry.isIntersecting));observer.observe(footer);return()=>observer.disconnect();},[]);
 useEffect(()=>{const measure=()=>document.documentElement.style.setProperty('--contact-dock-height',(bar.current?.getBoundingClientRect().height||0)+'px');const observer=new ResizeObserver(measure);if(bar.current)observer.observe(bar.current);measure();return()=>observer.disconnect();},[]);
 return <nav ref={bar} className={'floating-actions'+(atFooter?' dock-at-footer':'')} aria-label="Contatos rápidos">{showTop&&<a href="#topo" className="btn btn-light dock-top" aria-label="Voltar ao topo">↑</a>}<a href={CONTACT.whatsappUrl} className="btn btn-wa" aria-label="WhatsApp: atendimento Acquatec">WhatsApp<span>Acquatec</span></a></nav>
}
