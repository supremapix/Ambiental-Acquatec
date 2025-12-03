import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import { CITIES } from '../constants';

const CityGrid: React.FC = () => {
  return (
    <section className="py-16 bg-brand-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-brand-blue mb-12">
          Atendemos Toda Região Metropolitana
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {CITIES.map((city) => (
            <Link 
              key={city.slug} 
              to={`/cidades/${city.slug}`}
              className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md hover:border-brand-orange transition-all duration-300 group flex flex-col items-center text-center"
            >
              <div className="bg-brand-light p-3 rounded-full mb-3 group-hover:bg-brand-orange/10 transition-colors">
                <MapPin className="w-6 h-6 text-brand-blue group-hover:text-brand-orange transition-colors" />
              </div>
              <h3 className="font-semibold text-gray-800 group-hover:text-brand-blue">{city.name}</h3>
              <span className="text-xs text-gray-500 mt-1">Ver página</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CityGrid;
