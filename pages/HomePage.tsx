import React from 'react';
import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import VideoSection from '../components/VideoSection';
import DirectLineSection from '../components/DirectLineSection';
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
import { TESTIMONIALS, CITIES, TOP_NEIGHBORHOODS, FAQS } from '../constants';
import { Star } from 'lucide-react';
import { SITE_URL } from '../site-config.js';
import { getHomeSeo } from '../seo-meta.js';
import {
  buildGraph,
  createWebPageSchema,
  createFAQSchema,
  createItemListSchema,
  createVideoSchema,
  createAggregateRating,
  createReviewNodes
} from '../utils/seo-schemas';

const HomePage: React.FC = () => {
  const seo = getHomeSeo();

  const graph = buildGraph([
    createWebPageSchema({
      canonical: seo.canonical,
      title: seo.title,
      description: seo.description,
      image: seo.ogImage,
      hasFaq: true
    }),
    createFAQSchema(seo.canonical, FAQS),
    createItemListSchema(
      `${SITE_URL}/#cidades-atendidas`,
      'Cidades atendidas pela Acquatec',
      CITIES.map(city => ({ name: city.name, url: `${SITE_URL}/cidades/${city.slug}` }))
    ),
    createItemListSchema(
      `${SITE_URL}/#bairros-atendidos`,
      'Bairros de Curitiba atendidos pela Acquatec',
      TOP_NEIGHBORHOODS.map(n => ({ name: n.name, url: `${SITE_URL}/bairros/${n.slug}` }))
    ),
    createVideoSchema()
  ], {
    aggregateRating: createAggregateRating(),
    review: createReviewNodes()
  });

  return (
    <>
      <EnhancedSEO
        title={seo.title}
        description={seo.description}
        canonical={seo.canonical}
        keywords={seo.keywords}
        ogImage={seo.ogImage}
        graph={graph}
      />

      <Hero />
      <ServicesSection />
      <GallerySection />
      <VideoSection />
      <DirectLineSection />
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
