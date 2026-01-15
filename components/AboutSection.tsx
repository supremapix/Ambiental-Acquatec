import React from 'react';
import { ShieldCheck, HardHat, Clock, CheckCircle, Leaf, Search } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 bg-white" id="sobre">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:w-1/2">
            <span className="text-brand-orange font-bold uppercase tracking-wider text-sm mb-2 block">Sobre a Acquatec</span>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-brand-blue mb-6">
              Especialistas em Calhas e Telhados em Curitiba há 25 Anos
            </h2>
            
            <div className="prose text-gray-600 space-y-4">
              <p>
                Desde 1996, a <strong>Acquatec Calhas e Telhados</strong> é sinônimo de qualidade e confiança no mercado paranaense. Nossa história começou com a visão de um empreendedor apaixonado por construção civil, que identificou a necessidade de serviços especializados e profissionais na região.
              </p>
              <p>
                Hoje, estamos na terceira geração familiar administrando a empresa. Essa continuidade trouxe solidez, experiência acumulada e valores que transcendem o mercado: comprometimento, honestidade e excelência no atendimento.
              </p>
              <p>
                Ao longo de mais de 25 anos, evoluímos constantemente. Fomos pioneiros na região em sistemas de captação de água da chuva e telhas translúcidas.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-8">
               <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-brand-blue">
                  <span className="block text-3xl font-bold text-brand-blue">25+</span>
                  <span className="text-sm text-gray-600">Anos de Mercado</span>
               </div>
               <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-brand-green">
                  <span className="block text-3xl font-bold text-brand-green">10k+</span>
                  <span className="text-sm text-gray-600">Clientes Atendidos</span>
               </div>
            </div>
          </div>

          {/* Image Grid */}
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <img
              src="/acquatec-telhados-condominios-reformas-preco-barato-manutencao-517x357.jpg"
              alt="Telhados Acquatec"
              className="rounded-lg shadow-lg w-full h-64 object-cover transform translate-y-8"
            />
            <img
              src="/calhas-preco-400x402.jpg"
              alt="Calhas Acquatec"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
          </div>
        </div>

        {/* Differentiators */}
        <div className="mt-20">
            <h3 className="text-center text-2xl font-bold text-brand-dark mb-10">Por Que Escolher a Acquatec?</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {[
                    { icon: ShieldCheck, title: "Garantia 5 Anos", text: "Confiança total no serviço" },
                    { icon: HardHat, title: "Equipe NR-35", text: "Profissionais certificados" },
                    { icon: Search, title: "Vistoria Grátis", text: "Diagnóstico preciso" },
                    { icon: Clock, title: "Plantão 24h", text: "Para emergências" },
                    { icon: Leaf, title: "Sustentável", text: "Práticas eco-friendly" },
                    { icon: CheckCircle, title: "Materiais Premium", text: "Marcas líderes" }
                ].map((item, i) => (
                    <div key={i} className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow border border-gray-100">
                        <item.icon className="w-10 h-10 text-brand-blue mb-3" />
                        <h4 className="font-bold text-gray-800">{item.title}</h4>
                        <p className="text-sm text-gray-500">{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
