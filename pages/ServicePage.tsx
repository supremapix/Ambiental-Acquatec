import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SERVICES } from '../constants';
import ContactForm from '../components/ContactForm';
import VideoSection from '../components/VideoSection';
import GallerySection from '../components/GallerySection';
import EnhancedSEO from '../components/EnhancedSEO';
import { CheckCircle, Phone, Clock, Shield, Award } from 'lucide-react';
import { createServiceSchema, createFAQSchema, createBreadcrumbSchema } from '../utils/seo-schemas';

interface ServicePageProps {
  serviceId?: string;
}

const ServicePage: React.FC<ServicePageProps> = ({ serviceId }) => {
  const { slug: routeSlug } = useParams<{ slug: string }>();
  const slug = serviceId || routeSlug;
  const service = SERVICES.find(s => s.id === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!service) {
    return (
      <div className="pt-32 text-center text-2xl">
        Serviço não encontrado. <Link to="/" className="text-brand-blue underline">Voltar para Home</Link>
      </div>
    );
  }

  const serviceFAQs = [
    {
      question: `Quanto custa ${service.title.toLowerCase()}?`,
      answer: `${service.price}. O valor final depende da metragem, tipo de material escolhido e complexidade do projeto. Realizamos vistoria técnica gratuita e fornecemos orçamento detalhado sem compromisso. Parcelamos em até 12x no cartão.`
    },
    {
      question: `Qual o prazo de execução para ${service.title.toLowerCase()}?`,
      answer: `O prazo varia conforme o tamanho do projeto. Para residências padrão de 120m², o serviço leva de 1 a 3 dias úteis. Projetos maiores ou comerciais podem demandar mais tempo. Fornecemos cronograma detalhado no orçamento.`
    },
    {
      question: `Qual a garantia do serviço?`,
      answer: `Oferecemos garantia de 5 anos para a mão de obra e instalação. Os materiais possuem garantia adicional do fabricante que varia de 5 a 15 anos dependendo do produto. Tudo documentado em contrato.`
    },
    {
      question: `Vocês atendem em qual região?`,
      answer: `Atendemos Curitiba e toda a Região Metropolitana, incluindo São José dos Pinhais, Colombo, Pinhais, Araucária, Piraquara, Almirante Tamandaré e Fazenda Rio Grande. Para regiões mais distantes, consulte disponibilidade.`
    },
    {
      question: `É necessário algum preparo antes do serviço?`,
      answer: `Não é necessário nenhum preparo especial. Nossa equipe chega com todos os equipamentos e materiais necessários. Apenas solicitamos acesso livre à área de trabalho e, se possível, um ponto de energia elétrica.`
    }
  ];

  const serviceSchema = createServiceSchema(
    service.title,
    service.description[0],
    'Curitiba'
  );

  const faqSchema = createFAQSchema(serviceFAQs);

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: 'https://www.acquateccalhas.com.br/' },
    { name: 'Serviços', url: 'https://www.acquateccalhas.com.br/' },
    { name: service.title, url: `https://www.acquateccalhas.com.br/servicos/${slug}` }
  ]);

  return (
    <div className="pt-20">
      <EnhancedSEO
        title={`${service.title} em Curitiba - Acquatec | Orçamento Grátis`}
        description={`${service.description[0]} Garantia de 5 anos. 25 anos de experiência. WhatsApp: (41) 99133-7070`}
        canonical={`https://www.acquateccalhas.com.br/servicos/${slug}`}
        keywords={`${service.title.toLowerCase()}, ${service.title.toLowerCase()} curitiba, calhas e telhados curitiba`}
        schemas={[serviceSchema, faqSchema, breadcrumbSchema]}
        ogImage={service.image}
      />

      <div className="bg-gray-100 py-3">
        <div className="container mx-auto px-4 text-sm text-gray-500">
          <Link to="/" className="hover:underline">Home</Link> &gt; <Link to="/#servicos" className="hover:underline">Serviços</Link> &gt; <span className="font-bold text-brand-blue">{service.title}</span>
        </div>
      </div>

      <section className="bg-gradient-to-br from-brand-blue to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                {service.title} em Curitiba
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Serviço profissional com garantia de 5 anos e atendimento em até 48h
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center">
                  <Shield className="w-8 h-8 mx-auto mb-2 text-brand-orange" />
                  <div className="font-bold">5 Anos</div>
                  <div className="text-sm text-gray-300">Garantia</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center">
                  <Clock className="w-8 h-8 mx-auto mb-2 text-brand-orange" />
                  <div className="font-bold">48h</div>
                  <div className="text-sm text-gray-300">Atendimento</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center">
                  <Award className="w-8 h-8 mx-auto mb-2 text-brand-orange" />
                  <div className="font-bold">25 Anos</div>
                  <div className="text-sm text-gray-300">Experiência</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#orcamento"
                  className="bg-brand-orange hover:bg-orange-600 px-8 py-4 rounded-lg font-bold text-center transition-colors shadow-lg"
                >
                  {service.cta}
                </a>
                <a
                  href={`https://wa.me/5541991337070?text=Olá! Gostaria de um orçamento para: ${service.title}`}
                  className="bg-brand-green hover:bg-green-700 px-8 py-4 rounded-lg font-bold text-center transition-colors shadow-lg"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="relative">
              <img
                src={service.image}
                alt={`${service.title} - Acquatec`}
                className="rounded-xl shadow-2xl w-full h-auto"
                loading="eager"
              />
              <div className="absolute -bottom-6 -right-6 bg-brand-orange text-white p-6 rounded-lg shadow-xl hidden md:block">
                <div className="text-3xl font-bold">{service.price}</div>
                <div className="text-sm">Preço inicial</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-heading font-bold text-brand-dark mb-6">
                Por Que Escolher Este Serviço?
              </h2>

              <div className="space-y-4 mb-10">
                {service.description.map((desc, index) => (
                  <div key={index} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                    <p className="text-gray-700">{desc}</p>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 border-l-4 border-brand-blue p-6 rounded-r-lg">
                <h3 className="font-bold text-lg text-brand-blue mb-3">
                  Materiais de Primeira Qualidade
                </h3>
                <p className="text-gray-700">
                  Trabalhamos apenas com marcas certificadas: Tigre, Precon, Brasilit, Eternit e outras referências do mercado. Todos os materiais possuem certificação INMETRO e garantia do fabricante.
                </p>
              </div>
            </div>

            <div>
              <div className="bg-brand-dark text-white p-6 rounded-xl sticky top-24">
                <h3 className="text-xl font-bold mb-4">Solicite um Orçamento</h3>
                <p className="text-gray-300 mb-6 text-sm">
                  Preencha seus dados e entraremos em contato em até 2 horas
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-brand-orange" />
                    <div>
                      <div className="text-sm text-gray-400">Telefone</div>
                      <a href="tel:+554130535740" className="font-bold hover:text-brand-orange">(41) 3053-5740</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-brand-green" />
                    <div>
                      <div className="text-sm text-gray-400">WhatsApp</div>
                      <a href="https://wa.me/5541991337070" className="font-bold hover:text-brand-green">(41) 99133-7070</a>
                    </div>
                  </div>
                </div>

                <a
                  href="#orcamento"
                  className="block w-full bg-brand-orange hover:bg-orange-600 text-center py-3 rounded-lg font-bold transition-colors"
                >
                  Preencher Formulário
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-brand-blue to-blue-800 text-white p-8 rounded-xl mb-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold text-brand-orange mb-2">5.000+</div>
                <div className="text-gray-200">Projetos Concluídos</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-brand-orange mb-2">25</div>
                <div className="text-gray-200">Anos de Experiência</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-brand-orange mb-2">4.9</div>
                <div className="text-gray-200">Avaliação Média</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-brand-orange mb-2">98%</div>
                <div className="text-gray-200">Clientes Satisfeitos</div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-heading font-bold text-brand-dark mb-8 text-center">
              Perguntas Frequentes - {service.title}
            </h2>

            <div className="space-y-4 max-w-3xl mx-auto">
              {serviceFAQs.map((faq, index) => (
                <details key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden group">
                  <summary className="p-5 cursor-pointer font-semibold text-gray-800 hover:bg-gray-50 transition-colors flex justify-between items-center">
                    {faq.question}
                    <span className="text-brand-blue text-2xl group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <div className="p-5 pt-0 text-gray-600 border-t border-gray-100">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <GallerySection />

      <VideoSection />

      <ContactForm />
    </div>
  );
};

export default ServicePage;
