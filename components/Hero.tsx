import React, { useState, useEffect } from 'react';
import { ArrowRight, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/acquatec-telhados-manutencao-condominios-insdustriais-residencias-curitiba-1-2000x900 copy.jpeg',
      alt: 'Telhado Industrial Acquatec'
    },
    {
      image: '/acquatec-telhados-manutencao-condominios-insdustriais-residencias-curitiba-4-1889x850 copy.jpeg',
      alt: 'Reforma de Telhado Profissional'
    },
    {
      image: '/acquatec-telhados-condominios-reformas-preco-barato-manutencao-517x357 copy.jpg',
      alt: 'Manutenção de Telhados em Condomínios'
    },
    {
      image: '/aplicacao_de_manta_em_calha copy.webp',
      alt: 'Aplicação de Manta em Calhas'
    },
    {
      image: '/acquatec-calhas-e-telhados-em-curitiba-reformas-condominios-517x357.jpg',
      alt: 'Calhas e Telhados Curitiba'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen min-h-[700px] flex items-center pt-16 overflow-hidden bg-gray-900">
      <div className="container mx-auto px-4 lg:px-8 h-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 h-full items-center">

          {/* Left Content */}
          <div className="relative z-20 text-white order-2 lg:order-1 pb-8 lg:pb-0">
            <div className="max-w-2xl">
              <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6 leading-tight">
                Calhas e Telhados <br/>
                <span className="text-brand-orange">Profissionais</span>
                <br className="hidden sm:block"/>
                <span className="text-3xl md:text-4xl lg:text-5xl">em Curitiba</span>
              </h1>

              <p className="font-heading font-semibold text-xl md:text-2xl lg:text-3xl mb-4 text-gray-200">
                Mais de 25 Anos Protegendo Seu Patrimônio
              </p>

              <p className="text-base md:text-lg lg:text-xl mb-8 text-gray-300 leading-relaxed">
                Instalação • Manutenção • Reforma • Garantia de até 5 Anos<br/>
                Atendemos toda Curitiba, Região Metropolitana e Litoral
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#orcamento"
                  className="px-8 py-4 bg-brand-orange hover:bg-orange-600 text-white font-bold rounded-lg text-lg transition-all shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  Solicitar Orçamento Grátis <ArrowRight className="w-5 h-5"/>
                </a>

                <a
                  href="https://wa.me/5541991337070?text=Olá! Gostaria de solicitar um orçamento"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-brand-green hover:bg-green-700 text-white font-bold rounded-lg text-lg transition-all shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  WhatsApp Agora <MessageCircle className="w-5 h-5"/>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-brand-orange">25+</div>
                  <div className="text-gray-400">Anos de Experiência</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-brand-orange">30+</div>
                  <div className="text-gray-400">Cidades Atendidas</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-brand-orange">5</div>
                  <div className="text-gray-400">Anos de Garantia</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-brand-orange">24h</div>
                  <div className="text-gray-400">Emergências</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Slider */}
          <div className="relative order-1 lg:order-2 h-[400px] lg:h-[600px]">
            <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
              ))}

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-brand-dark p-2 rounded-full shadow-lg transition-all z-10"
                aria-label="Slide anterior"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-brand-dark p-2 rounded-full shadow-lg transition-all z-10"
                aria-label="Próximo slide"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      index === currentSlide
                        ? 'bg-brand-orange w-8'
                        : 'bg-white/60 hover:bg-white/80'
                    }`}
                    aria-label={`Ir para slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-blue/10 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/3 bg-gradient-to-tr from-brand-dark/50 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Hero;
