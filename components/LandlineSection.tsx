import React from 'react';
import { Phone, ShieldCheck, MapPin, Clock, BadgeCheck } from 'lucide-react';

const LandlineSection: React.FC = () => {
  return (
    <section
      aria-labelledby="telefone-fixo-titulo"
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
              Linha fixa ativa e atendendo agora
            </span>

            <h2
              id="telefone-fixo-titulo"
              className="text-3xl md:text-4xl font-heading font-bold mb-5 text-balance"
            >
              Empresa de verdade tem telefone fixo. O nosso está ativo para você.
            </h2>

            <p className="text-blue-100 leading-relaxed mb-6 text-pretty">
              A Acquatec Calhas mantém uma <strong className="text-white">linha fixa em Curitiba</strong> porque
              acreditamos em proximidade e confiança. Diferente de empresas que só atendem por aplicativos,
              aqui você fala com um especialista de verdade, tira dúvidas sobre instalação, manutenção e
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

            <a
              href="tel:+554130535740"
              aria-label="Ligar agora para o telefone fixo (41) 3053-5740"
              className="inline-flex items-center justify-center gap-3 bg-brand-orange hover:bg-orange-600 text-white font-bold text-lg px-8 py-4 rounded-lg shadow-xl transition-all transform hover:-translate-y-1"
            >
              <Phone className="w-6 h-6" /> Ligar Agora: (41) 3053-5740
            </a>
          </div>

          {/* Card de destaque do número */}
          <div className="flex justify-center lg:justify-end">
            <a
              href="tel:+554130535740"
              aria-label="Ligar para o telefone fixo (41) 3053-5740"
              className="group w-full max-w-md bg-white text-brand-blue rounded-2xl shadow-2xl p-8 md:p-10 text-center transition-transform hover:-translate-y-1"
            >
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-brand-blue/10 transition-colors group-hover:bg-brand-blue">
                <Phone className="h-10 w-10 text-brand-blue transition-colors group-hover:text-white" />
              </div>
              <p className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-2">
                Telefone Fixo
              </p>
              <p className="text-4xl md:text-5xl font-heading font-extrabold text-brand-blue mb-4">
                (41) 3053-5740
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

export default LandlineSection;
