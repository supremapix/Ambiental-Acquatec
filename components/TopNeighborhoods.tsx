import React from 'react';
import { Link } from 'react-router-dom';
import { TOP_NEIGHBORHOODS } from '../constants';
import { ArrowRight, MapPin } from 'lucide-react';

const TopNeighborhoods: React.FC = () => {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-brand-orange font-bold uppercase tracking-wider text-sm mb-2 block">Atendimento Local</span>
          <h2 className="text-3xl font-heading font-bold text-brand-blue">
            Serviços em Bairros Específicos
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Estamos presentes nos principais bairros de Curitiba com equipes prontas para atendimento rápido. Selecione seu bairro para ver serviços exclusivos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {TOP_NEIGHBORHOODS.map((neighborhood) => (
            <Link 
              key={neighborhood.slug} 
              to={`/bairros/${neighborhood.slug}`}
              className="group bg-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-brand-blue transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="bg-white p-3 rounded-full mb-4 shadow-sm group-hover:scale-110 transition-transform">
                <MapPin className="w-6 h-6 text-brand-orange" />
              </div>
              <h3 className="font-bold text-gray-800 text-lg mb-2 group-hover:text-brand-blue">{neighborhood.name}</h3>
              <div className="mt-auto pt-4 flex items-center gap-1 text-sm font-semibold text-brand-blue opacity-0 group-hover:opacity-100 transition-opacity">
                Ver Serviços <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopNeighborhoods;