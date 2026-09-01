import React from 'react';
import { Phone, ShieldCheck, MapPin, Clock, BadgeCheck, MessageCircle } from 'lucide-react';
import { CONTACT } from '../site-config.js';

/**
 * Seção de contato direto: um único número para ligação e WhatsApp.
 */
const DirectLineSection: React.FC = () => {
  return (
    <section
      aria-labelledby="fale-conosco-titulo"
      className="py-16 md:py-20 bg-brand-blue text-white"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Texto persuasivo */}
          <div>
            <span className="inline-flex items-center gap-2 bg-brand-orange/20 text-brand-orange font-semibold text-sm px-4 py-1.5 rounded-full mb-5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-orange opacity-75"></span>
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand-orange"></span>
              </span>
              Atendimento ativo agora
            </span>

            <h2
              id="fale-conosco-titulo"
              className="text-3xl md:text-4xl font-heading font-bold mb-5 text-balance"
            >
              Um número só, no telefone e no WhatsApp: fale com um especialista.
            </h2>

            <p className="text-blue-100 leading-relaxed mb-6 text-pretty">
              A Acquatec Calhas atende <strong className="text-white">Curitiba e Região Metropolitana</strong> por
              um único canal. Você fala com um especialista de verdade, tira dúvidas sobre instalação, manutenção e
              conserto de calhas, rufos e condutores, e agenda sua visita técnica sem complicação.
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3">
                <BadgeCheck className="w-5 h-5 text-brand-orange shrink-0" />
                <span className="text-blue-50">Atendimento humano, sem robôs e sem espera</span>
              </li>
              <li className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-brand-orange shrink-0" />
                <span className="text-blue-50">Empresa estabelecida há mais de 25 anos na região</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-brand-orange shrink-0" />
                <span className="text-blue-50">Seg. a Sex. das 8h às 18h e plantão para emergências</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-brand-orange shrink-0" />
                <span className="text-blue-50">Atendemos Curitiba e toda a Região Metropolitana</span>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={CONTACT.phoneHref}
                aria-label={`Ligar agora para ${CONTACT.phoneDisplay}`}
                className="inline-flex items-center justify-center gap-3 bg-brand-orange hover:bg-orange-600 text-white font-bold text-lg px-8 py-4 rounded-lg shadow-xl transition-all transform hover:-translate-y-1"
              >
                <Phone className="w-6 h-6" /> Ligar: {CONTACT.phoneDisplay}
              </a>
              <a
                href={CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Conversar no WhatsApp ${CONTACT.phoneDisplay}`}
                className="inline-flex items-center justify-center gap-3 bg-brand-green hover:bg-green-700 text-white font-bold text-lg px-8 py-4 rounded-lg shadow-xl transition-all transform hover:-translate-y-1"
              >
                <MessageCircle className="w-6 h-6" /> WhatsApp
              </a>
            </div>
          </div>

          {/* Card de destaque do número */}
          <div className="flex justify-center lg:justify-end">
            <a
              href={CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Conversar no WhatsApp ${CONTACT.phoneDisplay}`}
              className="group w-full max-w-md bg-white text-brand-blue rounded-2xl shadow-2xl p-8 md:p-10 text-center transition-transform hover:-translate-y-1"
            >
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-brand-blue/10 transition-colors group-hover:bg-brand-blue">
                <Phone className="h-10 w-10 text-brand-blue transition-colors group-hover:text-white" />
              </div>
              <p className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-2">
                Telefone e WhatsApp
              </p>
              <p className="text-4xl md:text-5xl font-heading font-extrabold text-brand-blue mb-4">
                {CONTACT.phoneDisplay}
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-green">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-green opacity-75"></span>
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand-green"></span>
                </span>
                Disponível para atendimento
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DirectLineSection;
