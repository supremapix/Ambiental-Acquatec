import React from 'react';
import { AlertTriangle } from 'lucide-react';

const DengueAlert: React.FC = () => {
  return (
    <section className="bg-red-50 border-y-4 border-red-500 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-8">
            <div className="bg-red-100 p-3 rounded-full mb-4">
                <AlertTriangle className="w-10 h-10 text-red-600 animate-pulse" />
            </div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-red-700">
                Proteja Sua Família: Previna Criadouros de Dengue
            </h2>
            <p className="max-w-3xl mt-2 text-red-800 font-medium">
                ⚠️ ALERTA: Segundo o Ministério da Saúde, os casos de dengue aumentaram significativamente. Sua calha pode ser um criadouro invisível!
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-400">
                <h3 className="text-xl font-bold text-gray-800 mb-2">🍂 Calhas Entupidas</h3>
                <p className="text-gray-600 mb-4">Folhas e detritos acumulados criam poças de água parada - ambiente perfeito para mosquitos.</p>
                <div className="text-sm font-bold text-brand-blue">Solução: Limpeza + Telas</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-400">
                <h3 className="text-xl font-bold text-gray-800 mb-2">📐 Telhas Desalinhadas</h3>
                <p className="text-gray-600 mb-4">Permitem entrada de água na laje, formando criadouros ocultos impossíveis de ver do chão.</p>
                <div className="text-sm font-bold text-brand-blue">Solução: Inspeção Semestral</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-400">
                <h3 className="text-xl font-bold text-gray-800 mb-2">⚡ Telhas Rachadas</h3>
                <p className="text-gray-600 mb-4">Danos invisíveis podem acumular água por meses sem você perceber.</p>
                <div className="text-sm font-bold text-brand-blue">Solução: Vistoria com Drone</div>
            </div>
        </div>

        <div className="text-center mt-10">
            <a href="#orcamento" className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-colors">
                Agendar Inspeção Preventiva Gratuita
            </a>
        </div>
      </div>
    </section>
  );
};

export default DengueAlert;
