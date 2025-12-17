import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ALL_NEIGHBORHOODS } from '../constants';
import { ChevronDown, ChevronUp } from 'lucide-react';

const NeighborhoodGrid: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const visibleNeighborhoods = isExpanded ? ALL_NEIGHBORHOODS : ALL_NEIGHBORHOODS.slice(0, 18);

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-center text-brand-dark mb-8">
          Atendemos Todos os Bairros de Curitiba
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {visibleNeighborhoods.map((neighborhood) => (
            <Link 
              key={neighborhood.slug}
              to={`/bairros/${neighborhood.slug}`}
              className="text-sm text-gray-600 hover:text-brand-blue hover:underline text-center p-2 bg-gray-50 rounded hover:bg-gray-100 transition-colors"
            >
              {neighborhood.name}
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:text-brand-orange transition-colors"
          >
            {isExpanded ? (
              <>Ver Menos <ChevronUp className="w-4 h-4" /></>
            ) : (
              <>Ver Todos os Bairros ({ALL_NEIGHBORHOODS.length}) <ChevronDown className="w-4 h-4" /></>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default NeighborhoodGrid;
