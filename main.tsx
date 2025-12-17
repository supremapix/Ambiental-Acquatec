import React from 'react'
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
import { ALL_NEIGHBORHOODS, CITIES, SERVICES } from './constants'

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="font-sans antialiased text-gray-800 bg-white min-h-screen flex flex-col">
    <WeatherAlert />
    <Header />
    <main className="flex-grow">
      {children}
    </main>
    <Footer />
    <FloatingButtons />
  </div>
)

const routes = [
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
          navigator.serviceWorker.register('/sw.js')
            .then(() => console.log('SW registered'))
            .catch(() => console.log('SW registration failed'))
        })
      }
    }
  }
)
