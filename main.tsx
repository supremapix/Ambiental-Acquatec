import React from 'react'
import './styles.css'
import { ViteReactSSG } from 'vite-react-ssg'
import Header from './components/Header'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'
import WeatherAlert from './components/WeatherAlert'
import {ARTICLES} from './knowledge-data.js'
import KnowledgePage from './pages/KnowledgePage'
import DirectoryPage from './pages/DirectoryPage'
import HomePage from './pages/HomePage'
import CityPage from './pages/CityPage'
import NeighborhoodPage from './pages/NeighborhoodPage'
import ServicePage from './pages/ServicePage'
import NotFoundPage from './pages/NotFoundPage'
import RegionsPage from './pages/RegionsPage'
import InfoPage from './pages/InfoPage'
import MetroRoofPage from './pages/MetroRoofPage'
import {METRO_ROOF_GUIDES} from './metro-roof-guides.js'
import { ALL_NEIGHBORHOODS, CITIES, SERVICES } from './constants'

const roofCases: Record<string, { title: string; text: string; guide: string; label: string }> = {
  "cidades/colombo": {
    "title": "Cobertura nova em Colombo: o que incluir no pedido",
    "text": "Se o telhado vai proteger uma área nova, explique o uso previsto, as medidas aproximadas e se a cobertura se conecta a outra construção. Informe onde pretende direcionar a água e se há entrada de veículos ou circulação sob a beirada. Peça que a proposta separe telhas, apoios, calhas e arremates, sem presumir que os apoios atuais possam ser reaproveitados.",
    "guide": "planejar-construcao-telhado",
    "label": "Ver o guia de instalação de telhado"
  },
  "cidades/pinhais": {
    "title": "Troca de telhado em Pinhais: compare o escopo, não só a metragem",
    "text": "Se duas propostas cobrem a mesma área, confira se ambas incluem retirada das peças antigas, proteção provisória e revisão dos pontos de drenagem. Diga se o espaço continuará em uso durante o serviço e se há mercadorias ou equipamentos sob a cobertura. Informe bairro e CEP ao consultar condições para o endereço.",
    "guide": "troca-de-telhado-reparo-ou-substituicao",
    "label": "Saiba como comparar reparo e substituição"
  },
  "cidades/araucaria": {
    "title": "Telhado sobre área de trabalho em Araucária: organize a avaliação",
    "text": "Se a cobertura fica sobre uma área de produção, estoque ou doca, descreva os horários de circulação e onde é possível receber materiais sem bloquear a operação. No orçamento, peça que sejam distinguidos os trabalhos de cobertura e os pontos que exigem avaliação específica dos apoios. Não presuma que o local pode continuar em funcionamento em todas as etapas.",
    "guide": "planejar-construcao-telhado",
    "label": "Veja o que conferir antes de instalar"
  },
  "cidades/sao-jose-dos-pinhais": {
    "title": "Obra em condomínio em São José dos Pinhais: organize chamados por bloco",
    "text": "Separe os relatos por bloco, data e ponto em que a umidade apareceu. Na consulta, informe a portaria responsável, se a pista interna é compartilhada e quais horários exigem menor interferência. Peça que a proposta explique como a execução será organizada para cada área, sem tratar todos os blocos como um único diagnóstico.",
    "guide": "telhados-para-condominios",
    "label": "Abra o guia de telhados para síndicos"
  },
  "bairros/batel": {
    "title": "Cobertura de condomínio no Batel: alinhe acessos com a administração",
    "text": "Se o pedido envolve um prédio ocupado, informe como a equipe pode chegar às áreas comuns e quem autoriza chaves, elevadores e entrada de materiais. Separe a circulação de moradores da prevista para a obra e combine quem comunica mudanças de rotina. Não é necessário que o síndico suba à cobertura para iniciar a conversa.",
    "guide": "telhados-para-condominios",
    "label": "Confira o checklist do condomínio"
  },
  "bairros/cic": {
    "title": "Troca de cobertura na Cidade Industrial: proteja a operação",
    "text": "Para avaliar substituição em galpão ou oficina, indique as áreas com goteira, onde há estoque ou máquinas e os horários em que a circulação pode ser reorganizada. Peça que o orçamento diferencie a vedação de pontos isolados da substituição de trechos completos e detalhe a proteção durante a abertura.",
    "guide": "troca-de-telhado-reparo-ou-substituicao",
    "label": "Compare reparo e troca de cobertura"
  },
  "cidades/campo-largo": {"title":"Cobertura nova em Campo Largo: organize a entrega de materiais","text":"Se a obra fica em terreno com acesso estreito, em rampa ou nos fundos de outro imóvel, informe por onde as peças podem chegar e onde podem ser guardadas sem bloquear a circulação. Envie medidas aproximadas da área a cobrir e descreva o uso previsto. Peça que a proposta separe estrutura, telhas, arremates e drenagem, além do que precisa ser conferido no endereço.","guide":"planejar-construcao-telhado","label":"Planeje a cobertura e o acesso da obra"},
  "cidades/piraquara": {"title":"Troca de telhado em Piraquara: registre quando a umidade aparece","text":"Antes de decidir pela troca, anote se a mancha aparece durante chuva com vento, depois de chuva prolongada ou também em dias secos. Envie fotos feitas de um local seguro e mostre se o sinal fica perto de parede, janela ou passagem de tubulação. Essas informações ajudam a orientar a vistoria, mas não confirmam de onde a água entra.","guide":"troca-de-telhado-reparo-ou-substituicao","label":"Veja quando avaliar reparo ou substituição"},
  "bairros/agua-verde": {"title":"Obra no telhado de condomínio no Água Verde: combine como receber a entrega","text":"Na comparação de propostas, peça que cada uma diga quais trechos serão revisados e como a conclusão será documentada. Registre os pontos que motivaram a obra e combine com a administração quem acompanha a entrega, recebe as orientações de manutenção e guarda fotos e documentos. Não é necessário que um morador suba ao telhado para verificar o serviço.","guide":"telhados-para-condominios","label":"Organize o escopo com o guia do síndico"},
  "cidades/campina-grande-do-sul": {
    "title": "Cobertura nova em Campina Grande do Sul: combine a saída da água",
    "text": "Ao planejar o telhado de uma garagem ou de um anexo, indique onde a água pode ser conduzida sem cair na entrada de pedestres ou no terreno vizinho. Se a cobertura nova encontra uma parede existente, mostre esse ponto nas fotos feitas do chão. Peça que a proposta identifique telhas, arremates, calhas e condutores, e que separe o que depende de vistoria no endereço.",
    "guide": "planejar-construcao-telhado",
    "label": "Veja o que definir antes de construir a cobertura"
  },
  "bairros/portao": {
    "title": "Troca de telhado no Portão: compare o que será reaproveitado",
    "text": "Se uma loja ou residência já teve reparos em pontos diferentes do telhado, reúna as datas e marque no croqui onde a água reapareceu. Para comparar orçamentos, peça que cada proposta diga o que será retirado, o que poderá ser reaproveitado após avaliação e como a área será protegida entre as etapas. Inclua a necessidade de manter entradas livres e informe onde há equipamentos ou mercadorias.",
    "guide": "troca-de-telhado-reparo-ou-substituicao",
    "label": "Confira o que pesar na escolha entre reparo e troca"
  },
  "bairros/santa-felicidade": {
    "title": "Telhados de condomínio em Santa Felicidade: delimite áreas comuns e privativas",
    "text": "Em um condomínio com casas ou blocos, faça uma lista dos pontos afetados e indique se cada um cobre uma área comum, uma unidade ou uma passagem compartilhada. Antes de pedir orçamento, confirme com a administração quem pode autorizar acesso e quem responde por cada trecho. Na proposta, peça que a equipe discrimine as áreas, as interferências de circulação e como orientará a manutenção após a entrega.",
    "guide": "telhados-para-condominios",
    "label": "Use o guia de coberturas para organizar a próxima vistoria"
  }
}

const Layout = ({ children, localKey }: { children: React.ReactNode; localKey?: string }) => {
  const roofCase = localKey ? roofCases[localKey] : undefined;
  return (
  <div className="font-sans antialiased text-gray-800 bg-white min-h-screen flex flex-col">

    <Header />
    <main id="conteudo" className="flex-grow" tabIndex={-1}>
      {children}
      <section className="section" aria-labelledby="acquatec-grandes-coberturas">
        <div className="wrap">
          <h2 id="acquatec-grandes-coberturas">Vai instalar ou trocar um telhado?</h2>
          <p>Guia da Acquatec para organizar sua obra em Curitiba e região metropolitana, da cobertura nova à renovação de condomínios.</p>
          <nav className="link-grid" aria-label="Guias de instalação, troca de telhados e condomínios">
            <a href="/guias/planejar-construcao-telhado">Planejar a instalação de um telhado</a>
            <a href="/guias/troca-de-telhado-reparo-ou-substituicao">Comparar reparo e troca de telhado</a>
            <a href="/guias/telhados-para-condominios">Organizar uma obra de telhado no condomínio</a>
          </nav>
        </div>
      </section>
      {roofCase && <section className="section soft" aria-labelledby="acquatec-avaliacao-local">
        <div className="wrap reading">
          <h2 id="acquatec-avaliacao-local">{roofCase.title}</h2>
          <p>{roofCase.text}</p>
          <p><a href={'/guias/' + roofCase.guide}>{roofCase.label}</a></p>
        </div>
      </section>}
    </main>
    <Footer />
    <FloatingButtons />
  </div>
  )
}

const routes = [
  {path:'/servicos',element:<Layout><DirectoryPage kind="services" /></Layout>},
  {path:'/guias',element:<Layout><DirectoryPage kind="articles" /></Layout>},
  ...ARTICLES.map(a=>({path:'/guias/'+a.slug,element:<Layout><KnowledgePage articleSlug={a.slug}/></Layout>})),
  { path: '/404', element: <Layout><NotFoundPage /></Layout> },
  { path: '/regioes', element: <Layout><RegionsPage /></Layout> },
  { path: '/politica', element: <Layout><InfoPage kind="politica" /></Layout> },
  { path: '/termos', element: <Layout><InfoPage kind="termos" /></Layout> },
  {
    path: '/',
    element: <Layout><HomePage /></Layout>,
  },
  ...CITIES.map(city => ({
    path: `/cidades/${city.slug}`,
    element: <Layout localKey={"cidades/" + city.slug}><CityPage citySlug={city.slug} cityName={city.name} /></Layout>,
  })),
  ...ALL_NEIGHBORHOODS.map(neighborhood => ({
    path: `/bairros/${neighborhood.slug}`,
    element: <Layout localKey={"bairros/" + neighborhood.slug}><NeighborhoodPage neighborhoodSlug={neighborhood.slug} neighborhoodName={neighborhood.name} /></Layout>,
  })),
  ...METRO_ROOF_GUIDES.map(guide => ({path: guide.path, element: <Layout><MetroRoofPage guide={guide} /></Layout>})),
  ...SERVICES.map(service => ({
    path: `/servicos/${service.id}`,
    element: <Layout><ServicePage serviceId={service.id} /></Layout>,
  })),
  {
    path: '*',
    element: <Layout><NotFoundPage /></Layout>,
  },
]

export const createRoot = ViteReactSSG(
  { routes, basename: '/' },
  ({ isClient }) => {
    if (isClient) {
      if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
          navigator.serviceWorker
            .register('/sw.js')
            .then((registration) => {
              // Busca uma versao nova do worker a cada carregamento da pagina.
              registration.update()
              registration.addEventListener('updatefound', () => {
                const installing = registration.installing
                if (!installing) return
                installing.addEventListener('statechange', () => {
                  if (installing.state === 'installed' && navigator.serviceWorker.controller) {
                    installing.postMessage('skipWaiting')
                  }
                })
              })
            })
            .catch(() => undefined)
        })
      }
    }
  }
)
