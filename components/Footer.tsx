import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, MapPin, Phone, Mail, Clock, ArrowRight, ShieldCheck } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1a2530] text-gray-400 pt-16 border-t border-brand-orange/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand & Description */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <img
                src="/logo-header-rodape-calhas-e-telhados-m2-ctba-pr-brasil.png"
                alt="Acquatec Calhas e Telhados"
                className="h-12 w-auto brightness-200"
              />
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
                Líder em soluções de cobertura em Curitiba e Região. Comprometidos com a excelência técnica, durabilidade e atendimento humanizado há mais de 25 anos.
            </p>
            <div className="flex items-center gap-2 text-sm text-green-500 font-medium">
                <ShieldCheck className="w-4 h-4" /> Garantia de 5 Anos Certificada
            </div>
            <div className="flex gap-4 pt-2">
                <a href="https://www.facebook.com/acquateccalhas/" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2.5 rounded-full hover:bg-brand-blue hover:text-white transition-all duration-300"><Facebook className="w-5 h-5" /></a>
                <a href="https://www.instagram.com/acquatec.calhas/" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2.5 rounded-full hover:bg-pink-600 hover:text-white transition-all duration-300"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-10 after:h-1 after:bg-brand-orange after:rounded-full">
              Navegação
            </h3>
            <ul className="space-y-3 text-sm">
                <li><Link to="/" className="hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-2"><ArrowRight className="w-3 h-3 text-brand-orange" /> Home</Link></li>
                <li><Link to="/#servicos" className="hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-2"><ArrowRight className="w-3 h-3 text-brand-orange" /> Nossos Serviços</Link></li>
                <li><Link to="/#orcamento" className="hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-2"><ArrowRight className="w-3 h-3 text-brand-orange" /> Solicitar Orçamento</Link></li>
                <li><Link to="/#sobre" className="hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-2"><ArrowRight className="w-3 h-3 text-brand-orange" /> Sobre a Acquatec</Link></li>
                <li><Link to="/cidades/curitiba" className="hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-2"><ArrowRight className="w-3 h-3 text-brand-orange" /> Área de Atendimento</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-10 after:h-1 after:bg-brand-orange after:rounded-full">
              Serviços Principais
            </h3>
            <ul className="space-y-3 text-sm">
                <li><Link to="/servicos/calhas" className="hover:text-brand-orange transition-colors hover:translate-x-1 inline-block">Instalação de Calhas</Link></li>
                <li><Link to="/servicos/manutencao" className="hover:text-brand-orange transition-colors hover:translate-x-1 inline-block">Manutenção de Telhados</Link></li>
                <li><Link to="/servicos/rufos" className="hover:text-brand-orange transition-colors hover:translate-x-1 inline-block">Rufos e Acabamentos</Link></li>
                <li><Link to="/servicos/metalicos" className="hover:text-brand-orange transition-colors hover:translate-x-1 inline-block">Telhados Metálicos</Link></li>
                <li><Link to="/servicos/captacao" className="hover:text-brand-orange transition-colors hover:translate-x-1 inline-block">Captação de Água</Link></li>
                <li><Link to="/servicos/reformas" className="hover:text-brand-orange transition-colors hover:translate-x-1 inline-block">Reformas Completas</Link></li>
                <li><Link to="/servicos/eolicos" className="hover:text-brand-orange transition-colors hover:translate-x-1 inline-block">Exaustores Eólicos</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-10 after:h-1 after:bg-brand-orange after:rounded-full">
              Fale Conosco
            </h3>
            <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3 group">
                    <div className="bg-gray-800 p-2 rounded group-hover:bg-brand-orange transition-colors">
                        <MapPin className="w-4 h-4 text-white" />
                    </div>
                    <span>Sede: Bairro Fanny<br/>Curitiba - PR, 80000-000</span>
                </li>
                <li className="flex items-center gap-3 group">
                    <a href="tel:+554130535740" className="flex items-center gap-3 hover:text-brand-orange transition-colors">
                      <div className="bg-gray-800 p-2 rounded group-hover:bg-brand-orange transition-colors">
                          <Phone className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-bold text-white">(41) 3053-5740</span>
                    </a>
                </li>
                <li className="flex items-center gap-3 group">
                    <a href="mailto:contato@acquatec.com.br" className="flex items-center gap-3 hover:text-brand-orange transition-colors">
                      <div className="bg-gray-800 p-2 rounded group-hover:bg-brand-orange transition-colors">
                          <Mail className="w-4 h-4 text-white" />
                      </div>
                      <span>contato@acquatec.com.br</span>
                    </a>
                </li>
                <li className="flex items-start gap-3 group">
                    <div className="bg-gray-800 p-2 rounded group-hover:bg-brand-orange transition-colors">
                        <Clock className="w-4 h-4 text-white" />
                    </div>
                    <span>Seg-Sex: 8h às 18h<br/><span className="text-brand-orange font-semibold">Plantão 24h</span></span>
                </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar & Credits */}
        <div className="border-t border-gray-800 pt-8 pb-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
                <p>&copy; {new Date().getFullYear()} Acquatec Calhas e Telhados. Todos os direitos reservados.</p>
                <div className="flex gap-4">
                    <Link to="/politica" className="hover:text-white transition-colors">Política de Privacidade</Link>
                    <Link to="/termos" className="hover:text-white transition-colors">Termos de Uso</Link>
                </div>
            </div>
            
            {/* Developer Credit */}
            <div className="mt-8 pt-4 border-t border-gray-800 flex justify-center">
                <a 
                  href="https://www.supremasite.com.br/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-white transition-all duration-300"
                >
                    Desenvolvido com 
                    <span className="inline-block animate-heart-beat" role="img" aria-label="coração">❤️</span> 
                    pela <span className="text-brand-orange group-hover:text-brand-blue transition-colors">Suprema Sites Express</span>.
                </a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;