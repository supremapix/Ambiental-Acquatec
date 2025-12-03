import React from 'react';
import { Link } from 'react-router-dom';
import { CITIES, NEIGHBORHOODS } from '../constants';
import { MapPin } from 'lucide-react';

const CompactCoverage: React.FC = () => {
  return (
    <section className="py-12 bg-gray-100 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-heading font-bold text-center text-gray-700 mb-8">
          Área de Atendimento Completa
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          {/* Cities Column */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="bg-brand-blue text-white py-3 px-4 font-bold text-center">
              Cidades da Região Metropolitana
            </div>
            <div className="h-64 overflow-y-auto p-4 custom-scrollbar">
              <div className="grid grid-cols-2 gap-2">
                {CITIES.map((city) => (
                  <Link 
                    key={city.slug} 
                    to={`/cidades/${city.slug}`}
                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-brand-orange hover:bg-gray-50 p-2 rounded transition-colors"
                  >
                    <MapPin className="w-3 h-3 text-gray-400" />
                    {city.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Neighborhoods Column */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
             <div className="bg-brand-dark text-white py-3 px-4 font-bold text-center">
              Bairros de Curitiba
            </div>
            <div className="h-64 overflow-y-auto p-4 custom-scrollbar">
               <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                 {NEIGHBORHOODS.map((neighborhood, index) => (
                    <Link
                        key={index}
                        to="/cidades/curitiba"
                        className="text-xs text-gray-500 hover:text-brand-blue hover:underline block p-1 truncate"
                        title={neighborhood}
                    >
                        • {neighborhood}
                    </Link>
                 ))}
               </div>
            </div>
          </div>

        </div>
        
        <p className="text-center text-xs text-gray-400 mt-4">
          * Atendemos num raio de 80km da capital. Consulte disponibilidade para litoral.
        </p>
      </div>
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #ccc;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #999;
        }
      `}</style>
    </section>
  );
};

export default CompactCoverage;