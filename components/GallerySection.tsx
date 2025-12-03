import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const GallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      src: '/acquatec-telhados-manutencao-condominios-insdustriais-residencias-curitiba-4-1889x850.jpeg',
      title: 'Telhado Metálico Residencial',
      description: 'Instalação completa em condomínio'
    },
    {
      src: '/calhas-preco-400x402.jpg',
      title: 'Sistema de Calhas em Alumínio',
      description: 'Proteção eficiente contra infiltrações'
    },
    {
      src: '/acquatec-telhados-condominios-reformas-preco-barato-manutencao-517x357.jpg',
      title: 'Reforma de Telhado',
      description: 'Modernização completa de cobertura'
    },
    {
      src: '/acquatec-telhados-calhas-400x401.jpg',
      title: 'Calha com Instalação Profissional',
      description: 'Acabamento impecável'
    },
    {
      src: '/aplicacao_de_manta_em_calha.webp',
      title: 'Aplicação de Manta Impermeabilizante',
      description: 'Proteção extra contra vazamentos'
    },
    {
      src: '/limpeza-personalizada-em-telhados-retrteis-400x395.jpg',
      title: 'Manutenção de Telhado',
      description: 'Limpeza e conservação preventiva'
    }
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-blue mb-4">
            Nossos Trabalhos
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Veja alguns dos projetos executados pela Acquatec em Curitiba e Região Metropolitana
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-bold text-lg mb-1">{image.title}</h3>
                  <p className="text-sm text-gray-200">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4" onClick={closeLightbox}>
            <button
              onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
              className="absolute top-4 right-4 text-white hover:text-brand-orange transition-colors z-50"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 text-white hover:text-brand-orange transition-colors z-50"
            >
              <ChevronLeft className="w-12 h-12" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 text-white hover:text-brand-orange transition-colors z-50"
            >
              <ChevronRight className="w-12 h-12" />
            </button>

            <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
              <img
                src={images[selectedImage].src}
                alt={images[selectedImage].title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              <div className="text-white text-center mt-4">
                <h3 className="font-bold text-xl mb-2">{images[selectedImage].title}</h3>
                <p className="text-gray-300">{images[selectedImage].description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
