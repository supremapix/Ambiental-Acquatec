import { City, FAQItem, Service, Testimonial } from './types';

export interface Neighborhood {
  name: string;
  slug: string;
}

export const CITIES: City[] = [
  { name: 'Curitiba', slug: 'curitiba' },
  { name: 'Adrianópolis', slug: 'adrianopolis' },
  { name: 'Agudos do Sul', slug: 'agudos-do-sul' },
  { name: 'Almirante Tamandaré', slug: 'almirante-tamandare' },
  { name: 'Araucária', slug: 'araucaria' },
  { name: 'Balsa Nova', slug: 'balsa-nova' },
  { name: 'Bocaiúva do Sul', slug: 'bocaiuva-do-sul' },
  { name: 'Campina Grande do Sul', slug: 'campina-grande-do-sul' },
  { name: 'Campo do Tenente', slug: 'campo-do-tenente' },
  { name: 'Campo Largo', slug: 'campo-largo' },
  { name: 'Campo Magro', slug: 'campo-magro' },
  { name: 'Cerro Azul', slug: 'cerro-azul' },
  { name: 'Colombo', slug: 'colombo' },
  { name: 'Contenda', slug: 'contenda' },
  { name: 'Doutor Ulysses', slug: 'doutor-ulysses' },
  { name: 'Fazenda Rio Grande', slug: 'fazenda-rio-grande' },
  { name: 'Itaperuçu', slug: 'itaperucu' },
  { name: 'Lapa', slug: 'lapa' },
  { name: 'Mandirituba', slug: 'mandirituba' },
  { name: 'Piên', slug: 'pien' },
  { name: 'Pinhais', slug: 'pinhais' },
  { name: 'Piraquara', slug: 'piraquara' },
  { name: 'Quatro Barras', slug: 'quatro-barras' },
  { name: 'Quitandinha', slug: 'quitandinha' },
  { name: 'Rio Branco do Sul', slug: 'rio-branco-do-sul' },
  { name: 'Rio Negro', slug: 'rio-negro' },
  { name: 'São José dos Pinhais', slug: 'sao-jose-dos-pinhais' },
  { name: 'Tijucas do Sul', slug: 'tijucas-do-sul' },
  { name: 'Tunas do Paraná', slug: 'tunas-do-parana' }
];

export const NEIGHBORHOODS = [
  "Vila Parolin", "Vila Torres", "Jardim Schaffer", "Vila Sabará", "Boqueirão de Baixo", 
  "Boqueirão de Cima", "Tanguá", "Vila Zumbi", "Abranches de Baixo", "Abranches de Cima", 
  "Vila Nossa Senhora da Luz", "Vila Tecnológica", "Vila Oficinas", "Vila Fanny", "Vila Hauer", 
  "Batel Soho", "Alto da Rua XV", "CIC Norte", "CIC Central", "CIC Sul", "Vila Guaíra", 
  "Centro Histórico", "Ecoville", "Carmo Abranches", "Água Verde", "Ahú", "Alto Boqueirão", 
  "Alto da Glória", "Alto da XV", "Atuba", "Augusta", "Bacacheri", "Bairro Alto", "Barreirinha", 
  "Batel", "Bigorrilho", "Boa Vista", "Bom Retiro", "Boqueirão", "Butiatuvinha", "Cabral", 
  "Cachoeira", "Cajuru", "Campina do Siqueira", "Campo Comprido", "Campo de Santana", 
  "Capão da Imbuia", "Capão Raso", "Cascatinha", "Caximba", "Centro", "Centro Cívico", 
  "Cidade Industrial de Curitiba", "Cristo Rei", "Fanny", "Fazendinha", "Ganchinho", 
  "Guabirotuba", "Guaíra", "Hauer", "Hugo Lange", "Jardim Botânico", "Jardim das Américas", 
  "Jardim Social", "Juvevê", "Lamenha Pequena", "Lindóia", "Mercês", "Mossunguê", 
  "Novo Mundo", "Orleans", "Parolin", "Pilarzinho", "Pinheirinho", "Portão", "Prado Velho", 
  "Rebouças", "Riviera", "Santa Cândida", "Santa Felicidade", "Santa Quitéria", "Santo Inácio", 
  "São Braz", "São Francisco", "São João", "São Lourenço", "São Miguel", "Vila Pantanal", 
  "Seminário", "Sítio Cercado", "Taboão", "Tarumã", "Tatuquara", "Tingui", "Uberaba", 
  "Umbará", "Vila Izabel", "Vista Alegre", "Xaxim"
];

export const TOP_NEIGHBORHOODS: Neighborhood[] = [
  { name: 'Água Verde', slug: 'agua-verde' },
  { name: 'Batel', slug: 'batel' },
  { name: 'Centro', slug: 'centro' },
  { name: 'Santa Felicidade', slug: 'santa-felicidade' },
  { name: 'Portão', slug: 'portao' },
  { name: 'Boqueirão', slug: 'boqueirao' },
  { name: 'Bigorrilho', slug: 'bigorrilho' },
  { name: 'Cajuru', slug: 'cajuru' },
  { name: 'Cidade Industrial (CIC)', slug: 'cic' },
  { name: 'Pinheirinho', slug: 'pinheirinho' }
];

export const SERVICES: Service[] = [
  {
    id: 'calhas',
    title: 'Instalação de Calhas',
    description: [
      'Proteção fundamental contra umidade: Desvia a água da chuva, evitando manchas na pintura e erosão no jardim.',
      'Materiais de alta durabilidade: Trabalhamos com Alumínio (não enferruja), Galvanizado (resistente) e PVC.',
      'Dimensionamento técnico: Nossos engenheiros calculam a vazão exata para evitar transbordamentos em tempestades.',
      'Acabamento estético: Opções de cores que combinam com a fachada do seu imóvel.'
    ],
    price: 'A partir de R$ 80/m²',
    image: '/calhas-acquatec-400x401.jpg',
    cta: 'Solicitar Orçamento'
  },
  {
    id: 'manutencao',
    title: 'Manutenção de Telhados',
    description: [
      'Aumente a vida útil do imóvel: A manutenção preventiva evita trocas prematuras de madeiramento.',
      'Prevenção de goteiras: Identificamos e trocamos telhas trincadas antes que causem danos ao forro.',
      'Limpeza técnica: Remoção de musgos e detritos que retêm umidade e pesam sobre a estrutura.',
      'Ideal para condomínios e residências antigas que precisam de revitalização.'
    ],
    price: 'A partir de R$ 100/m²',
    image: '/acquatec-telhados-manutencao-condominios-insdustriais-residencias-curitiba-1-2000x900.jpeg',
    cta: 'Agendar Vistoria Grátis'
  },
  {
    id: 'rufos',
    title: 'Rufos e Acabamentos',
    description: [
      'Vedação perfeita: Essenciais para cobrir a junção entre o telhado e a parede, impedindo infiltrações.',
      'Tipos variados: Rufos de encosto, capa, pingadeira e internos, moldados no local.',
      'Proteção de muros: Evita que a água da chuva escorra pela parede, prevenindo manchas pretas.',
      'Fabricação própria para garantir o encaixe milimétrico na sua obra.'
    ],
    price: 'Sob consulta',
    image: '/aplicacao_de_manta_em_calha.webp',
    cta: 'Falar com Especialista'
  },
  {
    id: 'metalicos',
    title: 'Telhados Metálicos',
    description: [
      'Solução moderna e leve: Ideal para grandes vãos em indústrias, comércios e casas contemporâneas.',
      'Alta durabilidade: Telhas galvalume ou termoacústicas (sanduíche) que duram décadas.',
      'Conforto térmico: Opções com EPS ou PU que reduzem o calor interno e o barulho da chuva.',
      'Instalação rápida que reduz o tempo total da obra.'
    ],
    price: 'R$ 150 a R$ 250/m²',
    image: '/limpeza-personalizada-em-telhados-retrteis-400x395.jpg',
    cta: 'Ver Projetos'
  },
  {
    id: 'captacao',
    title: 'Captação de Água',
    description: [
      'Sustentabilidade e Economia: Reduza sua conta de água em até 50% utilizando água da chuva.',
      'Usos diversos: Ideal para irrigação de jardins, lavagem de calçadas e descarga de vasos sanitários.',
      'Sistema completo: Inclui filtros separadores de folhas, cisternas e bombas de recalque.',
      'Projeto personalizado conforme a área de telhado disponível.'
    ],
    price: 'A partir de R$ 2.000',
    image: 'https://images.unsplash.com/photo-1544983059-e970a09a5628?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    cta: 'Simular Economia'
  },
  {
    id: 'reformas',
    title: 'Reformas Completas',
    description: [
      'Transformação total: Substituição de estruturas de madeira comprometidas por cupins ou umidade.',
      'Modernização: Troca de telhas de barro antigas por modelos modernos ou metálicos.',
      'Correção de inclinação: Resolve problemas de retorno de água em chuvas com vento.',
      'Gerenciamento completo: Da demolição à limpeza final, sem dor de cabeça.'
    ],
    price: 'Sob orçamento',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    cta: 'Enviar Fotos'
  },
  {
    id: 'solar',
    title: 'Iluminação Solar',
    description: [
      'Luz natural gratuita: Instalação de telhas translúcidas em pontos estratégicos.',
      'Economia de energia: Reduz a necessidade de lâmpadas acesas durante o dia em até 40%.',
      'Bem-estar: Ambientes naturalmente iluminados são mais saudáveis e produtivos.',
      'Materiais com proteção UV que iluminam sem aquecer excessivamente o ambiente.'
    ],
    price: 'Sob consulta',
    image: 'https://images.unsplash.com/photo-1592833159057-65a269755598?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    cta: 'Conhecer Solução'
  },
  {
    id: 'eolicos',
    title: 'Exaustores Eólicos',
    description: [
      'Ventilação sem custo: Utiliza a força do vento para retirar ar quente e odores do ambiente.',
      'Conforto térmico industrial: Reduz a sensação térmica em galpões e fábricas.',
      'Zero consumo: Não utiliza energia elétrica e possui manutenção baixíssima.',
      'Silencioso e eficiente, com rolamentos blindados para maior durabilidade.'
    ],
    price: 'A partir de R$ 800/un',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    cta: 'Solicitar Visita'
  }
];

export const FAQS: FAQItem[] = [
  { question: "Qual o tipo de calha ideal para minha casa?", answer: "Depende de vários fatores: tipo de telhado, inclinação, volume de chuvas na região e estética desejada. Calhas de beiral são ideais para residências com telhado aparente. Calhas de platibanda funcionam bem em telhados embutidos. Nossa equipe faz avaliação técnica gratuita para recomendar o modelo perfeito." },
  { question: "Com que frequência devo fazer manutenção nas calhas?", answer: "Recomendamos limpeza a cada 3-4 meses, especialmente antes e depois das estações chuvosas. Em áreas com muitas árvores, a manutenção deve ser mensal. Oferecemos planos de manutenção preventiva com descontos." },
  { question: "Rufos são realmente necessários?", answer: "Sim! Os rufos são essenciais para proteger as junções entre telhado e paredes, evitando infiltrações que podem causar danos estruturais graves e mofo. Investir em rufos de qualidade previne gastos maiores no futuro." },
  { question: "Quanto tempo dura a instalação de calhas?", answer: "Em uma residência padrão (120m²), a instalação completa leva de 1 a 2 dias. Projetos maiores ou comerciais podem levar mais tempo. Fornecemos cronograma detalhado no orçamento." },
  { question: "Vocês atendem em finais de semana?", answer: "Sim! Atendemos de segunda a sábado em horário comercial. Para emergências (vazamentos graves), temos plantão 24h incluindo domingos e feriados." },
  { question: "Qual a diferença entre calha de alumínio e galvanizada?", answer: "Alumínio é mais leve, não enferruja e tem acabamento mais bonito, porém é mais caro. Galvanizada é mais resistente a impactos e mais econômica. Ambas têm durabilidade similar (15-20 anos). Recomendamos alumínio para áreas visíveis e galvanizada para áreas industriais." },
  { question: "Como sei se meu telhado precisa de reparo?", answer: "Sinais de alerta: manchas de umidade no teto, telhas quebradas/desalinhadas, mofo, goteiras, aumento na conta de energia (perda de isolamento térmico). Oferecemos vistoria gratuita com laudo técnico." },
  { question: "A Acquatec trabalha com que marcas de materiais?", answer: "Trabalhamos apenas com materiais de primeira linha: Tigre, Precon, Brasilit, Eternit, entre outras marcas certificadas. Todos os materiais possuem certificação INMETRO e garantia do fabricante." },
  { question: "Vocês emitem nota fiscal?", answer: "Sim, emitimos nota fiscal para todos os serviços, essencial para garantia, prestação de contas em condomínios e eventuais benefícios fiscais." },
  { question: "Como funciona a garantia de 5 anos?", answer: "A garantia cobre mão de obra e instalação. Caso haja qualquer problema relacionado ao serviço executado, retornamos sem custo adicional. Materiais possuem garantia adicional do fabricante (varia por produto)." },
  { question: "Fazem projeto de captação de água de chuva?", answer: "Sim! Desenvolvemos projetos completos: dimensionamento de cisternas, filtros, bombas e conexões. Calculamos o potencial de economia e retorno do investimento. Inclui assessoria para certificação LEED se necessário." },
  { question: "Atendem condomínios e empresas?", answer: "Sim, somos especializados também em projetos comerciais e industriais. Oferecemos condições especiais para condomínios, incluindo parcelamento e planos de manutenção corporativos." },
  { question: "Quanto custa em média uma instalação completa de calhas?", answer: "Varia conforme tamanho e modelo. Uma casa de 120m² fica entre R$ 2.500 a R$ 4.500 (material + instalação). Fazemos orçamento detalhado sem compromisso após vistoria." },
  { question: "Telhado metálico é muito barulhento na chuva?", answer: "Não, quando instalado corretamente com manta de subcobertura e isolamento térmico adequado. Utilizamos técnicas que reduzem drasticamente o ruído, comparável a telhados convencionais." },
  { question: "Vocês removem telhados de amianto?", answer: "Sim, temos equipe certificada para remoção segura de coberturas com amianto, seguindo todas as normas da ABNT e NR-15. Fazemos o descarte ambientalmente correto e substituição por materiais modernos e seguros." }
];

export const TESTIMONIALS: Testimonial[] = [
  { name: "Maria Silva", role: "Síndica", location: "Condomínio Vila Verde, Curitiba", text: "Excelente trabalho! A equipe da Acquatec reformou todo o telhado do meu condomínio. Profissionais pontuais, educados e caprichosos.", stars: 5 },
  { name: "Roberto Campos", role: "Proprietário", location: "Santa Felicidade", text: "Resolveram um vazamento que 3 outras empresas não conseguiram achar. Recomendo muito.", stars: 5 },
  { name: "Ana Souza", role: "Arquiteta", location: "Batel", text: "Parceiros de longa data nos meus projetos. Acabamento impecável nos rufos e calhas.", stars: 5 },
  { name: "Carlos Mendes", role: "Gerente Industrial", location: "CIC", text: "Instalação rápida de exaustores eólicos no galpão. Preço justo e serviço limpo.", stars: 5 },
  { name: "Fernanda Lima", role: "Dona de Casa", location: "Pinhais", text: "Atendimento 24h me salvou num domingo de chuva forte. Muito obrigada!", stars: 5 },
];