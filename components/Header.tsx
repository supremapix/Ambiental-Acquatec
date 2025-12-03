import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Menu, X, ChevronDown, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CITIES } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  return (
    <header className={`fixed top-0 w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' : 'bg-white py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-brand-blue p-2 rounded-lg group-hover:bg-brand-orange transition-colors duration-300">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
               </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-heading font-extrabold text-brand-blue leading-none tracking-tight">ACQUATEC</span>
              <span className="text-xs font-medium text-gray-500 uppercase tracking-widest">Calhas e Telhados</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link to="/" className="font-medium text-gray-700 hover:text-brand-orange transition-colors">Home</Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 font-medium text-gray-700 hover:text-brand-orange transition-colors">
                Serviços <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-lg mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top border-t-4 border-brand-orange">
                <div className="py-2">
                  <Link to="/#servicos" className="block px-4 py-2 hover:bg-gray-50 text-gray-700">Instalação de Calhas</Link>
                  <Link to="/#servicos" className="block px-4 py-2 hover:bg-gray-50 text-gray-700">Manutenção de Telhados</Link>
                  <Link to="/#servicos" className="block px-4 py-2 hover:bg-gray-50 text-gray-700">Rufos e Acabamentos</Link>
                  <Link to="/#servicos" className="block px-4 py-2 hover:bg-gray-50 text-gray-700">Reformas Completas</Link>
                </div>
              </div>
            </div>

            {/* Cities Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 font-medium text-gray-700 hover:text-brand-orange transition-colors">
                Cidades Atendidas <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full -left-20 w-[600px] bg-white shadow-xl rounded-lg mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top border-t-4 border-brand-orange p-6 grid grid-cols-3 gap-2">
                 {CITIES.map((city) => (
                   <Link key={city.slug} to={`/cidades/${city.slug}`} className="flex items-center gap-2 text-sm text-gray-600 hover:text-brand-blue hover:font-medium">
                     <MapPin className="w-3 h-3 text-brand-orange" /> {city.name}
                   </Link>
                 ))}
              </div>
            </div>

            <Link to="/#sobre" className="font-medium text-gray-700 hover:text-brand-orange transition-colors">Sobre</Link>
            <Link to="/#contato" className="font-medium text-gray-700 hover:text-brand-orange transition-colors">Contato</Link>
          </nav>

          {/* Desktop Contacts */}
          <div className="hidden lg:flex flex-col items-end">
             <div className="flex items-center gap-2 text-brand-blue font-bold text-lg">
                <Phone className="w-5 h-5" /> (41) 3053-5740
             </div>
             <div className="flex items-center gap-2 text-brand-green font-medium text-sm">
                <MessageCircle className="w-4 h-4" /> (41) 99133-7070
             </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-brand-blue" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 h-[calc(100vh-80px)] overflow-y-auto">
          <div className="flex flex-col p-6 gap-4">
             <Link to="/" className="text-lg font-medium border-b pb-2" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
             
             <button onClick={() => toggleDropdown('services')} className="flex justify-between items-center text-lg font-medium border-b pb-2">
                Serviços <ChevronDown className={`w-5 h-5 transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
             </button>
             {activeDropdown === 'services' && (
               <div className="pl-4 flex flex-col gap-3 bg-gray-50 py-3 rounded">
                  <Link to="/#servicos" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600">Todos os Serviços</Link>
               </div>
             )}

             <button onClick={() => toggleDropdown('cities')} className="flex justify-between items-center text-lg font-medium border-b pb-2">
                Cidades <ChevronDown className={`w-5 h-5 transition-transform ${activeDropdown === 'cities' ? 'rotate-180' : ''}`} />
             </button>
             {activeDropdown === 'cities' && (
               <div className="pl-4 grid grid-cols-1 gap-2 bg-gray-50 py-3 rounded max-h-60 overflow-y-auto">
                  {CITIES.map((city) => (
                    <Link key={city.slug} to={`/cidades/${city.slug}`} onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 text-sm">
                      {city.name}
                    </Link>
                  ))}
               </div>
             )}
             
             <Link to="/#contato" className="text-lg font-medium border-b pb-2" onClick={() => setIsMobileMenuOpen(false)}>Contato</Link>
             <Link to="/#sobre" className="text-lg font-medium border-b pb-2" onClick={() => setIsMobileMenuOpen(false)}>Sobre Nós</Link>
             
             <div className="mt-4 flex flex-col gap-3">
                <a href="tel:+554130535740" className="flex justify-center items-center gap-2 bg-brand-blue text-white py-3 rounded-lg font-bold">
                  <Phone className="w-5 h-5" /> Ligar Agora
                </a>
                <a href="https://wa.me/5541991337070" className="flex justify-center items-center gap-2 bg-brand-green text-white py-3 rounded-lg font-bold">
                  <MessageCircle className="w-5 h-5" /> WhatsApp
                </a>
             </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;