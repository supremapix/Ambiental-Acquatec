import React, { useState } from 'react';
import { CloudRain, AlertTriangle, X } from 'lucide-react';

const WeatherAlert: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3 px-4 relative">
      <div className="container mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 flex-1">
          <CloudRain className="w-5 h-5 flex-shrink-0 animate-pulse" />
          <div className="flex items-center gap-2 flex-wrap text-sm md:text-base">
            <AlertTriangle className="w-4 h-4 text-yellow-300" />
            <span className="font-semibold">Alerta de Chuvas:</span>
            <span>Verifique suas calhas antes da temporada de chuvas! Limpeza preventiva evita entupimentos e goteiras.</span>
          </div>
        </div>
        <a
          href="https://wa.me/5541991337070?text=Gostaria%20de%20agendar%20uma%20inspe%C3%A7%C3%A3o%20preventiva"
          className="bg-white text-blue-800 px-4 py-2 rounded-lg font-bold text-sm hover:bg-gray-100 transition-colors whitespace-nowrap"
        >
          Agendar Inspeção
        </a>
        <button
          onClick={() => setIsVisible(false)}
          className="text-white hover:text-gray-200 transition-colors ml-2"
          aria-label="Fechar alerta"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default WeatherAlert;
