import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { CITIES } from '../constants';
import ContactForm from '../components/ContactForm';
import VideoSection from '../components/VideoSection';
import EcoFriendlySection from '../components/EcoFriendlySection';
import { CheckCircle, Phone, ArrowRight } from 'lucide-react';

const CityPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const city = CITIES.find(c => c.slug === slug);

  if (!city) {
    return <div className="pt-32 text-center text-2xl">Cidade não encontrada. <Link to="/" className="text-brand-blue underline">Voltar para Home</Link></div>;
  }

  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-3">
        <div className="container mx-auto px-4 text-sm text-gray-500">
            <Link to="/" className="hover:underline">Home</Link> &gt; Cidades &gt; <span className="font-bold text-brand-blue">{city.name}</span>
        </div>
      </div>

      {/* City Hero */}
      <section className="bg-brand-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4">
                Calhas e Telhados em {city.name}
            </h1>
            <p className="text-xl text-gray-200 mb-8">Atendimento Rápido e Garantia de 5 Anos na sua região</p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
                <a href="#orcamento" className="bg-brand-orange hover:bg-orange-600 px-8 py-3 rounded-lg font-bold transition-colors">Solicitar Orçamento Grátis</a>
                <div className="flex items-center justify-center gap-2 font-bold text-lg">
                    <Phone className="w-5 h-5" /> (41) 3053-5740
                </div>
            </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold text-brand-dark mb-6">Serviços Profissionais em {city.name}</h2>
            
            <div className="prose max-w-none text-gray-600 mb-12">
                <p className="mb-4">
                    A <strong>Acquatec Calhas e Telhados</strong> é referência em serviços especializados de calhas, telhados e rufos em {city.name} há mais de 25 anos. Nossa empresa atende toda a região com equipe técnica certificada, oferecendo desde instalações completas até manutenções preventivas e emergenciais.
                </p>
                <p className="mb-4">
                    <strong>Por Que {city.name} Precisa de Calhas Profissionais?</strong><br/>
                    A região possui características climáticas únicas que exigem atenção especial com sistemas de escoamento de água. As variações bruscas de temperatura, típicas da região Sul, causam expansão e contração dos materiais de cobertura, exigindo instalações profissionais que considerem esses fatores.
                </p>
                
                <h3 className="text-xl font-bold text-brand-dark mt-8 mb-4">Nossos Serviços em {city.name}</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {['Instalação de Calhas de Alumínio', 'Manutenção de Telhados', 'Limpeza de Calhas', 'Instalação de Rufos e Pingadeiras', 'Reforma de Telhados Antigos', 'Impermeabilização'].map((s, i) => (
                        <li key={i} className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-brand-green" /> {s}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="bg-blue-50 p-8 rounded-xl border border-blue-100 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                    <h3 className="text-xl font-bold text-brand-blue mb-2">Precisa de um técnico em {city.name}?</h3>
                    <p className="text-gray-600">Nossa equipe chega em seu endereço em média em 45 minutos para emergências.</p>
                </div>
                <a href="#orcamento" className="flex items-center gap-2 bg-brand-blue text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-800 transition-colors whitespace-nowrap">
                    Chamar Técnico <ArrowRight className="w-5 h-5" />
                </a>
            </div>
        </div>
      </section>

      <VideoSection />
      
      <EcoFriendlySection />

      <ContactForm />
    </div>
  );
};

export default CityPage;