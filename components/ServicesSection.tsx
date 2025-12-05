import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';
import { Check, ArrowRight } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const getServiceImage = (serviceId: string, originalImage: string) => {
    if (serviceId === 'eolicos') {
      return '/Exaustores Eólicos.jpg';
    }
    if (serviceId === 'solar') {
      return '/telhas-translucidas-iluminacao-solar.png';
    }
    return originalImage;
  };

  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-blue mb-4">
            Soluções Completas em Calhas e Telhados
          </h2>
          <div className="w-24 h-1 bg-brand-orange mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col h-full">
              <div className="h-48 overflow-hidden relative shrink-0">
                <img
                  src={getServiceImage(service.id, service.image)}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-heading font-bold text-brand-dark mb-4 group-hover:text-brand-blue">{service.title}</h3>
                
                <ul className="space-y-3 mb-6 flex-grow">
                  {service.description.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                      <Check className="w-4 h-4 text-brand-green mt-0.5 shrink-0" />
                      <span className="leading-tight">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col gap-3 mt-auto">
                  <span className="text-sm font-semibold text-brand-blue bg-blue-50 py-1 px-3 rounded-full w-fit">
                    {service.price}
                  </span>

                  <div className="flex gap-2">
                    <Link
                      to={`/servicos/${service.id}`}
                      className="flex items-center justify-center gap-2 flex-1 text-center bg-brand-blue text-white font-bold py-3 rounded hover:bg-blue-800 transition-colors"
                    >
                      Saiba Mais <ArrowRight className="w-4 h-4" />
                    </Link>
                    <a
                      href="#orcamento"
                      className="flex-1 text-center bg-brand-orange text-white font-bold py-3 rounded hover:bg-orange-600 transition-colors"
                    >
                      Orçamento
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;