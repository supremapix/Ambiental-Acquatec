import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Company Info */}
          <div>
            <div className="mb-4">
                 <span className="text-2xl font-heading font-extrabold text-white">ACQUATEC</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
                Especialistas em calhas e telhados com mais de 25 anos de tradição em Curitiba. Soluções definitivas com garantia e tecnologia.
            </p>
            <div className="flex gap-4">
                <a href="https://facebook.com" className="bg-white/10 p-2 rounded hover:bg-brand-orange transition-colors"><Facebook className="w-5 h-5" /></a>
                <a href="https://instagram.com" className="bg-white/10 p-2 rounded hover:bg-brand-orange transition-colors"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Links Rápidos</h3>
            <ul className="space-y-3 text-sm">
                <li><Link to="/" className="hover:text-brand-orange transition-colors">Home</Link></li>
                <li><Link to="/#servicos" className="hover:text-brand-orange transition-colors">Serviços</Link></li>
                <li><Link to="/#orcamento" className="hover:text-brand-orange transition-colors">Solicitar Orçamento</Link></li>
                <li><Link to="/#sobre" className="hover:text-brand-orange transition-colors">Sobre Nós</Link></li>
                <li><Link to="/cidades/curitiba" className="hover:text-brand-orange transition-colors">Atendimento em Curitiba</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Serviços</h3>
            <ul className="space-y-3 text-sm">
                <li><Link to="/#servicos" className="hover:text-brand-orange">Instalação de Calhas</Link></li>
                <li><Link to="/#servicos" className="hover:text-brand-orange">Manutenção de Telhados</Link></li>
                <li><Link to="/#servicos" className="hover:text-brand-orange">Rufos e Pingadeiras</Link></li>
                <li><Link to="/#servicos" className="hover:text-brand-orange">Limpeza de Calhas</Link></li>
                <li><Link to="/#servicos" className="hover:text-brand-orange">Telhados Metálicos</Link></li>
                <li><Link to="/#servicos" className="hover:text-brand-orange">Exaustores Eólicos</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contato</h3>
            <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-brand-orange shrink-0" />
                    <span>Sede: Bairro Fanny<br/>Curitiba - PR</span>
                </li>
                <li className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-brand-orange shrink-0" />
                    <span>(41) 3053-5740</span>
                </li>
                <li className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-brand-orange shrink-0" />
                    <span>contato@acquatec.com.br</span>
                </li>
                <li className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-brand-orange shrink-0" />
                    <span>Seg-Sex: 8h às 18h<br/>Plantão 24h para emergências</span>
                </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} Acquatec Calhas e Telhados. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;