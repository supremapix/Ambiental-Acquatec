import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import WeatherAlert from './components/WeatherAlert';
import HomePage from './pages/HomePage';
import CityPage from './pages/CityPage';
import NeighborhoodPage from './pages/NeighborhoodPage';
import ServicePage from './pages/ServicePage';
import NotFoundPage from './pages/NotFoundPage';

const ScrollToHashElement = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToHashElement />
      <div className="font-sans antialiased text-gray-800 bg-white min-h-screen flex flex-col">
        <WeatherAlert />
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cidades/:slug" element={<CityPage />} />
            <Route path="/bairros/:slug" element={<NeighborhoodPage />} />
            <Route path="/servicos/:slug" element={<ServicePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
        <FloatingButtons />
      </div>
    </Router>
  );
};

export default App;