import React from 'react';
import { Leaf, Recycle } from 'lucide-react';

const EcoFriendlySection: React.FC = () => {
  return (
    <section className="py-16 bg-green-50/50 border-y border-green-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-10">
            <div className="order-2 lg:order-1">
              <div className="flex justify-center lg:justify-start mb-6">
                <div className="bg-brand-green/10 p-4 rounded-full">
                  <Leaf className="w-10 h-10 text-brand-green" />
                </div>
              </div>

              <h2 className="text-3xl font-heading font-bold text-brand-dark mb-8 text-center lg:text-left">
                Somos Eco-friendly! 🌿
              </h2>

              <div className="prose max-w-none text-gray-700 space-y-4 leading-relaxed text-center lg:text-left">
                <p>
                  Estamos emocionados em apresentar a vocês a <strong>Acquatec</strong>, uma empresa renovada que traz consigo uma nova identidade visual e um conceito inovador. Comprometidos com a preservação do meio ambiente e com a qualidade de vida dos nossos clientes, adotamos princípios eco-friendly como base de nossas operações.
                </p>
                <p>
                  A Acquatec se dedica a oferecer produtos e serviços sustentáveis, com embalagens ecologicamente corretas e matérias-primas conscientes. Nosso objetivo é proporcionar a vocês, nossos valiosos clientes, uma experiência diferenciada que contribua para uma vida mais saudável e equilibrada.
                </p>
              </div>
            </div>

            <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
              <img
                src="/acquatec-curitiba-pr-1-500x500 (1).jpeg"
                alt="Acquatec Eco-friendly"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
              <img
                src="/acquatec-curitiba-pr-4-560x560.jpeg"
                alt="Matéria-prima 100% Legal"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
            </div>
          </div>

          <div className="text-center">
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-brand-green max-w-4xl mx-auto">
              <h3 className="text-xl font-bold text-brand-blue mb-4">Por que escolher a Acquatec?</h3>
              <p className="text-gray-600 mb-6">
                Se você busca por uma opção exclusiva que ofereça o melhor preço e qualidade de serviço em manutenção e instalação de telhados industriais, condomínios, empresariais e residenciais em Curitiba e região, não hesite em escolher a Acquatec Manutenção.
              </p>
              <p className="text-gray-700 mb-6">
                Esta transformação é apenas o começo de uma nova era de mudanças. Estamos comprometidos em inovar constantemente, ouvindo atentamente suas necessidades e feedbacks, para melhorar continuamente nossa oferta e fortalecer nosso relacionamento.
              </p>
              <p className="font-medium text-brand-green mb-6">
                Agradecemos por sua confiança na Acquatec. Juntos, podemos fazer a diferença e construir um futuro melhor.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="#contato" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-green text-white font-bold rounded-lg hover:bg-green-700 transition-colors">
                  <Recycle className="w-5 h-5" /> Fale Conosco Agora
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcoFriendlySection;