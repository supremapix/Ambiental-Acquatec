import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { TOP_NEIGHBORHOODS } from '../constants';
import ContactForm from '../components/ContactForm';
import VideoSection from '../components/VideoSection';
import { CheckCircle, Phone, ArrowRight, MapPin } from 'lucide-react';

const NeighborhoodPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Try to find in top neighborhoods, or fallback to formatted slug
  const neighborhoodData = TOP_NEIGHBORHOODS.find(n => n.slug === slug);
  const neighborhoodName = neighborhoodData ? neighborhoodData.name : slug?.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-3">
        <div className="container mx-auto px-4 text-sm text-gray-500">
            <Link to="/" className="hover:underline">Home</Link> &gt; Bairros &gt; <span className="font-bold text-brand-blue">{neighborhoodName}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-brand-dark text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-blue/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6">
                <MapPin className="w-4 h-4 text-brand-orange" />
                <span className="text-sm font-medium">Atendimento Exclusivo no Bairro</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4">
                Calhas e Telhados em {neighborhoodName}
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Equipe técnica pronta para atender residências e comércios na região do {neighborhoodName} em Curitiba.</p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
                <a href="#orcamento" className="bg-brand-orange hover:bg-orange-600 px-8 py-3 rounded-lg font-bold transition-colors shadow-lg">Orçamento Grátis</a>
                <a href="https://wa.me/5541991337070" className="bg-brand-green hover:bg-green-700 px-8 py-3 rounded-lg font-bold transition-colors shadow-lg flex items-center justify-center gap-2">
                    WhatsApp Agora
                </a>
            </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex items-center gap-4 mb-8">
                <div className="h-1 w-12 bg-brand-orange"></div>
                <h2 className="text-2xl font-bold text-brand-dark m-0">Soluções para {neighborhoodName}</h2>
            </div>
            
            <div className="prose max-w-none text-gray-600 mb-12">
                <p className="mb-4 text-lg">
                    Moradores e empresas do <strong>{neighborhoodName}</strong> contam com a qualidade e rapidez da Acquatec. Conhecemos as particularidades da região e oferecemos soluções personalizadas para cada tipo de imóvel.
                </p>
                <p className="mb-4">
                    Nossa equipe especializada realiza vistorias detalhadas para identificar problemas em calhas, rufos e telhados, prevenindo infiltrações que podem desvalorizar seu imóvel no bairro.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                        <h3 className="font-bold text-brand-blue text-lg mb-4">Para Residências</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-brand-green" /> Limpeza e manutenção de calhas</li>
                            <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-brand-green" /> Troca de telhas quebradas</li>
                            <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-brand-green" /> Instalação de rufos pingadeira</li>
                        </ul>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                        <h3 className="font-bold text-brand-blue text-lg mb-4">Para Comércios e Condomínios</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-brand-green" /> Manutenção preventiva mensal</li>
                            <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-brand-green" /> Impermeabilização de lajes</li>
                            <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-brand-green" /> Telhados metálicos industriais</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="bg-brand-blue/5 p-8 rounded-xl border border-brand-blue/10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                <div>
                    <h3 className="text-xl font-bold text-brand-blue mb-2">Emergência no {neighborhoodName}?</h3>
                    <p className="text-gray-600">Atendimento prioritário para vazamentos graves na sua região.</p>
                </div>
                <a href="tel:+554130535740" className="flex items-center gap-2 bg-brand-blue text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-800 transition-colors whitespace-nowrap shadow-md">
                    <Phone className="w-5 h-5" /> Ligue (41) 3053-5740
                </a>
            </div>
        </div>
      </section>

      <VideoSection />

      <ContactForm />
    </div>
  );
};

export default NeighborhoodPage;