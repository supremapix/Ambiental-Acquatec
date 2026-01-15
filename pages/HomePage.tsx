import React from 'react';
import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import VideoSection from '../components/VideoSection';
import ComparisonTable from '../components/ComparisonTable';
import AboutSection from '../components/AboutSection';
import EcoFriendlySection from '../components/EcoFriendlySection';
import DengueAlert from '../components/DengueAlert';
import ContactForm from '../components/ContactForm';
import FAQSection from '../components/FAQSection';
import CompactCoverage from '../components/CompactCoverage';
import TopNeighborhoods from '../components/TopNeighborhoods';
import { TESTIMONIALS } from '../constants';
import { Star } from 'lucide-react';

const HomePage: React.FC = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "RoofingContractor",
        "@id": "https://acquateccalhas.com.br/#organization",
        "name": "Acquatec Calhas e Telhados",
        "url": "https://acquateccalhas.com.br",
        "logo": "https://acquateccalhas.com.br/logo.png",
        "image": "https://images.unsplash.com/photo-1632759368593-e40623a9d700",
        "description": "Instalação e manutenção de calhas, rufos e telhados em Curitiba e Região Metropolitana. Garantia de 5 anos e atendimento 24h.",
        "telephone": "+554130535740",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Rua Bairro Fanny",
          "addressLocality": "Curitiba",
          "addressRegion": "PR",
          "postalCode": "80000-000",
          "addressCountry": "BR"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -25.4284,
          "longitude": -49.2733
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
          ],
          "opens": "08:00",
          "closes": "18:00"
        },
        "priceRange": "$$"
      },
      {
        "@type": "Service",
        "name": "Instalação de Calhas",
        "provider": {
          "@id": "https://acquateccalhas.com.br/#organization"
        },
        "areaServed": {
          "@type": "City",
          "name": "Curitiba"
        }
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      
      <Hero />
      <ServicesSection />
      <VideoSection />
      <ComparisonTable />
      
      {/* Social Feeds */}
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
      
      {/* Testimonials */}
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

      {/* Compact Coverage near Footer */}
      <CompactCoverage />
    </>
  );
};

export default HomePage;