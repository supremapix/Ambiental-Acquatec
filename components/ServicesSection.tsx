import React, { useState } from 'react';
import { SERVICES } from '../constants';
import { Check, Wand2, X, Loader2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const ServicesSection: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeService, setActiveService] = useState<{title: string} | null>(null);
  const [prompt, setPrompt] = useState('');
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const openGenerator = (serviceTitle: string) => {
    setActiveService({ title: serviceTitle });
    setPrompt(`Uma foto profissional e realista de ${serviceTitle} em uma casa moderna, alta qualidade, iluminação natural.`);
    setGeneratedImage(null);
    setModalOpen(true);
  };

  const handleGenerate = async () => {
    if (!prompt) return;
    setLoading(true);
    setGeneratedImage(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: { parts: [{ text: prompt }] }
      });

      // Find image part
      if (response.candidates && response.candidates[0].content.parts) {
        for (const part of response.candidates[0].content.parts) {
            if (part.inlineData) {
                setGeneratedImage(`data:image/png;base64,${part.inlineData.data}`);
                break;
            }
        }
      }
    } catch (error) {
      console.error("Error generating image:", error);
      alert("Erro ao gerar imagem. Tente novamente.");
    } finally {
      setLoading(false);
    }
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
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                {/* AI Button Overlay */}
                <button 
                  onClick={() => openGenerator(service.title)}
                  className="absolute top-2 right-2 bg-white/90 backdrop-blur text-brand-blue hover:text-brand-orange p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
                  title="Gerar inspiração com IA"
                >
                  <Wand2 className="w-5 h-5" />
                </button>
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
                    <a 
                      href="#orcamento"
                      className="flex-grow text-center bg-brand-orange text-white font-bold py-3 rounded hover:bg-orange-600 transition-colors"
                    >
                      {service.cta}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI Generator Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg overflow-hidden animate-fade-in">
            <div className="bg-brand-blue p-4 flex justify-between items-center text-white">
              <h3 className="font-bold text-lg flex items-center gap-2">
                <Wand2 className="w-5 h-5" /> Gerar Inspiração AI
              </h3>
              <button onClick={() => setModalOpen(false)} className="hover:bg-white/20 p-1 rounded">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6">
              <p className="text-sm text-gray-600 mb-4">
                Descreva como você imagina este serviço ({activeService?.title}) e nossa Inteligência Artificial criará uma imagem exclusiva para você visualizar.
              </p>
              
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-brand-blue outline-none mb-4 h-24 resize-none"
                placeholder="Ex: Telhado moderno cinza escuro em casa de campo com céu azul..."
              />

              {generatedImage ? (
                <div className="mb-4 rounded-lg overflow-hidden border border-gray-200">
                  <img src={generatedImage} alt="Gerado por IA" className="w-full h-64 object-cover" />
                </div>
              ) : (
                <div className="mb-4 h-64 bg-gray-100 rounded-lg flex items-center justify-center border border-dashed border-gray-300">
                    {loading ? (
                        <div className="flex flex-col items-center text-brand-blue">
                             <Loader2 className="w-8 h-8 animate-spin mb-2" />
                             <span className="text-sm font-medium">Criando sua imagem...</span>
                        </div>
                    ) : (
                        <span className="text-gray-400 text-sm">A imagem aparecerá aqui</span>
                    )}
                </div>
              )}

              <button
                onClick={handleGenerate}
                disabled={loading || !prompt}
                className="w-full bg-brand-blue hover:bg-brand-dark text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {loading ? 'Gerando...' : '✨ Gerar Imagem'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServicesSection;