import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1632759368593-e40623a9d700?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="Telhado Profissional" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-dark/70"></div>
        
        {/* Animated Parallax Clouds/Fog Effect */}
        <div className="absolute inset-0 z-10 opacity-30 pointer-events-none overflow-hidden">
           <div 
             className="absolute top-0 left-0 w-[200%] h-full animate-drift"
             style={{
               backgroundImage: 'url("https://images.unsplash.com/photo-1536514498073-50e69d39c6cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=40")',
               backgroundSize: 'cover',
               backgroundRepeat: 'repeat-x',
               filter: 'grayscale(100%) blur(2px) contrast(1.2)'
             }}
           ></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center text-white">
        <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight drop-shadow-lg">
          Calhas e Telhados <br className="hidden md:block"/>
          <span className="text-brand-orange">Profissionais</span> em Curitiba
        </h1>
        
        <p className="font-heading font-semibold text-xl md:text-2xl mb-4 text-gray-200">
          Mais de 25 Anos Protegendo Seu Patrimônio
        </p>
        
        <p className="text-base md:text-lg mb-10 text-gray-300 max-w-3xl mx-auto">
          Instalação • Manutenção • Reforma • Garantia de até 5 Anos<br/>
          Atendemos toda Curitiba, Região Metropolitana e Litoral
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <a 
            href="#orcamento"
            className="w-full md:w-auto px-8 py-4 bg-brand-orange hover:bg-orange-600 text-white font-bold rounded-lg text-lg transition-all shadow-lg transform hover:-translate-y-1 flex items-center justify-center gap-2"
          >
            Solicitar Orçamento Grátis <ArrowRight className="w-5 h-5"/>
          </a>
          
          <a 
            href="https://wa.me/5541991337070?text=Olá! Gostaria de solicitar um orçamento"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto px-8 py-4 bg-brand-green hover:bg-green-700 text-white font-bold rounded-lg text-lg transition-all shadow-lg transform hover:-translate-y-1 flex items-center justify-center gap-2"
          >
            WhatsApp Agora <MessageCircle className="w-5 h-5"/>
          </a>

          <a 
            href="#servicos"
            className="w-full md:w-auto px-8 py-4 border-2 border-brand-blue bg-transparent hover:bg-brand-blue text-white font-bold rounded-lg text-lg transition-all shadow-lg flex items-center justify-center gap-2 backdrop-blur-sm"
          >
            Ver Nossos Serviços
          </a>
        </div>
      </div>

      {/* Trust Bar Bottom */}
      <div className="absolute bottom-0 w-full bg-brand-blue/90 backdrop-blur text-white py-4 border-t border-white/10 hidden md:block z-30">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm font-medium tracking-wide opacity-90">
            <span>📍 Atendemos 30+ Cidades</span>
            <span>📞 24h Emergências</span>
            <span>✅ Orçamento Grátis</span>
            <span>🛡️ Garantia 5 Anos</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;