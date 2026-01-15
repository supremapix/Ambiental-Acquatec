import React from 'react';
import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import VideoSection from '../components/VideoSection';
import GallerySection from '../components/GallerySection';
import ComparisonTable from '../components/ComparisonTable';
import AboutSection from '../components/AboutSection';
import EcoFriendlySection from '../components/EcoFriendlySection';
import DengueAlert from '../components/DengueAlert';
import ContactForm from '../components/ContactForm';
import FAQSection from '../components/FAQSection';
import CompactCoverage from '../components/CompactCoverage';
import TopNeighborhoods from '../components/TopNeighborhoods';
import EnhancedSEO from '../components/EnhancedSEO';
import { TESTIMONIALS, SERVICES } from '../constants';
import { Star } from 'lucide-react';
import { createOfferCatalogSchema } from '../utils/seo-schemas';

const HomePage: React.FC = () => {
  const offerCatalogSchema = createOfferCatalogSchema(
    SERVICES.map(service => ({
      name: service.title,
      description: service.description[0]
    }))
  );

  const reviewsSchema = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "name": "Acquatec Calhas e Telhados",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": TESTIMONIALS.length.toString(),
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": TESTIMONIALS.map((testimonial) => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": testimonial.name
      },
      "datePublished": "2024-11-01",
      "reviewBody": testimonial.text,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": testimonial.stars.toString(),
        "bestRating": "5"
      }
    }))
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Qual o tipo de calha ideal para minha casa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Depende de vários fatores: tipo de telhado, inclinação, volume de chuvas na região e estética desejada."
        }
      },
      {
        "@type": "Question",
        "name": "Com que frequência devo fazer manutenção nas calhas?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Recomendamos limpeza a cada 3-4 meses, especialmente antes e depois das estações chuvosas."
        }
      }
    ]
  };

  return (
    <>
      <EnhancedSEO
        title="Acquatec Calhas e Telhados - Instalação e Manutenção em Curitiba | 25 Anos de Experiência"
        description="Especialistas em calhas e telhados há 25 anos em Curitiba. Instalação, manutenção, limpeza e conserto. Garantia de 5 anos. Atendimento 24h. WhatsApp: (41) 99133-7070"
        canonical="https://www.acquateccalhas.com.br/"
        keywords="calhas curitiba, instalação de calhas, manutenção de calhas, telhados curitiba, rufos e pingadeiras, calhas pluviais, limpeza de calhas, reforma de telhado curitiba"
        schemas={[offerCatalogSchema, reviewsSchema, faqSchema]}
      />

      <Hero />
      <ServicesSection />
      <GallerySection />
      <VideoSection />
      <ComparisonTable />
      
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-heading font-bold text-center text-brand-blue mb-8">Acompanhe Nossos Trabalhos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white h-96 rounded-lg flex items-center justify-center border shadow-sm overflow-hidden">
                    <iframe src="https://www.instagram.com/_acquatec_/embed" width="100%" height="100%" className="border-0"></iframe>
                </div>
                <div className="bg-white h-96 rounded-lg flex items-center justify-center border shadow-sm overflow-hidden">
                     <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Facquateccalhas&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="100%" height="100%" className="border-0"></iframe>
                </div>
            </div>
        </div>
      </section>

      <AboutSection />
      <EcoFriendlySection />
      <DengueAlert />
      
      <section className="py-20 bg-brand-blue text-white">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-heading font-bold text-center mb-12">O Que Nossos Clientes Dizem</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {TESTIMONIALS.map((t, i) => (
                    <div key={i} className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
                        <div className="flex mb-3">
                            {[...Array(t.stars)].map((_, i) => <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />)}
                        </div>
                        <p className="italic mb-4 text-gray-600">"{t.text}"</p>
                        <div className="font-bold">{t.name}</div>
                        <div className="text-sm text-gray-500">{t.role} - {t.location}</div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      <FAQSection />
      
      <ContactForm />

      <TopNeighborhoods />

      <CompactCoverage />
    </>
  );
};

export default HomePage;
