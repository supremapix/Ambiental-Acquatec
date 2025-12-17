import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CITIES } from '../constants';
import ContactForm from '../components/ContactForm';
import VideoSection from '../components/VideoSection';
import EcoFriendlySection from '../components/EcoFriendlySection';
import SEOAccordion from '../components/SEOAccordion';
import EnhancedSEO from '../components/EnhancedSEO';
import { CheckCircle, Phone, ArrowRight } from 'lucide-react';
import { createServiceSchema, createFAQSchema, createBreadcrumbSchema } from '../utils/seo-schemas';

interface CityPageProps {
  citySlug?: string;
  cityName?: string;
}

const CityPage: React.FC<CityPageProps> = ({ citySlug, cityName: propName }) => {
  const { slug: routeSlug } = useParams<{ slug: string }>();
  const slug = citySlug || routeSlug;
  const city = CITIES.find(c => c.slug === slug) || (propName && slug ? { name: propName, slug } : null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!city) {
    return <div className="pt-32 text-center text-2xl">Cidade não encontrada. <Link to="/" className="text-brand-blue underline">Voltar para Home</Link></div>;
  }

  const seoAccordionItems = [
    {
      title: `Por que contratar serviços de calhas e telhados em ${city.name}?`,
      content: `${city.name} possui características climáticas que exigem atenção especial com sistemas de drenagem. As chuvas intensas típicas da região podem causar entupimentos, transbordamentos e infiltrações se as calhas não estiverem corretamente instaladas e mantidas. A Acquatec oferece soluções profissionais com garantia de 5 anos, utilizando materiais de primeira linha e equipe técnica certificada.`
    },
    {
      title: `Quanto tempo leva para instalar calhas em ${city.name}?`,
      content: `O prazo de instalação varia conforme o tamanho do imóvel. Uma residência padrão de 120m² leva de 1 a 2 dias úteis. Projetos comerciais e industriais podem demandar mais tempo. Nossa equipe realiza vistoria prévia gratuita em ${city.name} e fornece cronograma detalhado no orçamento. Para emergências, oferecemos atendimento prioritário 24h.`
    },
    {
      title: `Quais materiais são recomendados para calhas em ${city.name}?`,
      content: `Para ${city.name}, recomendamos calhas de alumínio ou galvanizadas. O alumínio é mais leve, não enferruja e oferece acabamento estético superior, ideal para áreas visíveis. Calhas galvanizadas são mais resistentes a impactos e mais econômicas, perfeitas para áreas industriais. Ambas possuem durabilidade similar (15-20 anos) quando instaladas corretamente.`
    },
    {
      title: `A Acquatec atende emergências em ${city.name}?`,
      content: `Sim! Oferecemos plantão 24h para emergências em ${city.name}, incluindo fins de semana e feriados. Goteiras graves, calhas arrancadas por vendavais e vazamentos urgentes recebem atendimento prioritário. Nossa equipe chega ao local em média em 45 minutos para avaliar e solucionar o problema. Entre em contato pelo WhatsApp (41) 99133-7070 ou telefone (41) 3053-5740.`
    },
    {
      title: `Qual a frequência ideal de manutenção de calhas em ${city.name}?`,
      content: `Recomendamos limpeza de calhas a cada 3-4 meses em ${city.name}, especialmente antes e depois das estações chuvosas. Imóveis próximos a árvores exigem manutenção mensal para evitar entupimentos por folhas. Oferecemos planos de manutenção preventiva com descontos para condomínios e empresas na região.`
    }
  ];

  const serviceSchema = createServiceSchema(
    `Instalação e Manutenção de Calhas e Telhados`,
    `Serviços profissionais de calhas, telhados e rufos em ${city.name} com garantia de 5 anos`,
    city.name
  );

  const faqSchema = createFAQSchema(seoAccordionItems.map(item => ({
    question: item.title,
    answer: item.content
  })));

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: 'https://www.acquateccalhas.com.br/' },
    { name: 'Cidades', url: 'https://www.acquateccalhas.com.br/' },
    { name: city.name, url: `https://www.acquateccalhas.com.br/cidades/${slug}` }
  ]);

  return (
    <div className="pt-20">
      <EnhancedSEO
        title={`Calhas e Telhados em ${city.name} - Acquatec | Orçamento Grátis`}
        description={`Instalação e manutenção de calhas e telhados em ${city.name}. 25 anos de experiência, garantia de 5 anos. WhatsApp: (41) 99133-7070`}
        canonical={`https://www.acquateccalhas.com.br/cidades/${slug}`}
        keywords={`calhas ${city.name}, telhados ${city.name}, instalação de calhas ${city.name}, manutenção de calhas ${city.name}`}
        schemas={[serviceSchema, faqSchema, breadcrumbSchema]}
      />
      <div className="bg-gray-100 py-3">
        <div className="container mx-auto px-4 text-sm text-gray-500">
            <Link to="/" className="hover:underline">Home</Link> &gt; Cidades &gt; <span className="font-bold text-brand-blue">{city.name}</span>
        </div>
      </div>

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

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-brand-dark mb-8 text-center">
            Perguntas Frequentes sobre Calhas e Telhados em {city.name}
          </h2>
          <SEOAccordion items={seoAccordionItems} />
        </div>
      </section>

      <VideoSection />

      <EcoFriendlySection />

      <ContactForm />
    </div>
  );
};

export default CityPage;
