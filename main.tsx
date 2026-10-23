import React from 'react'
import './styles.css'
import { ViteReactSSG } from 'vite-react-ssg'
import Header from './components/Header'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'
import WeatherAlert from './components/WeatherAlert'
import HomePage from './pages/HomePage'
import CityPage from './pages/CityPage'
import NeighborhoodPage from './pages/NeighborhoodPage'
import ServicePage from './pages/ServicePage'
import NotFoundPage from './pages/NotFoundPage'
import RegionsPage from './pages/RegionsPage'
import InfoPage from './pages/InfoPage'
import { ALL_NEIGHBORHOODS, CITIES, SERVICES } from './constants'

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="font-sans antialiased text-gray-800 bg-white min-h-screen flex flex-col">

    <Header />
    <main id="conteudo" className="flex-grow" tabIndex={-1}>
      {children}
    </main>
    <Footer />
    <FloatingButtons />
  </div>
)

const routes = [
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
    element: <Layout><CityPage citySlug={city.slug} cityName={city.name} /></Layout>,
  })),
  ...ALL_NEIGHBORHOODS.map(neighborhood => ({
    path: `/bairros/${neighborhood.slug}`,
    element: <Layout><NeighborhoodPage neighborhoodSlug={neighborhood.slug} neighborhoodName={neighborhood.name} /></Layout>,
  })),
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
