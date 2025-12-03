import React from 'react';
import { Play } from 'lucide-react';

const VideoSection: React.FC = () => {
  return (
    <section className="py-16 bg-brand-dark text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold text-white mb-4">
            Conheça Nossa Estrutura
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Veja como trabalhamos e conheça a qualidade que oferecemos para sua obra.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative pb-[56.25%] h-0 rounded-xl overflow-hidden shadow-2xl border-4 border-gray-700">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/kp8DOdD9UTc?si=HL9SF_yx7B4sXFGw"
              title="Vídeo Institucional Acquatec"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        
        <div className="text-center mt-8">
            <p className="flex items-center justify-center gap-2 text-brand-orange font-semibold">
                <Play className="w-5 h-5 fill-current" />
                Assista ao vídeo e veja nossa equipe em ação
            </p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;