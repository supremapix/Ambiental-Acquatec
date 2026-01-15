import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, MessageCircle } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-brand-dark to-gray-900 px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-extrabold text-brand-orange mb-4">404</h1>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Página Não Encontrada
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Desculpe, a página que você está procurando não existe ou foi movida.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-semibold text-white mb-4">
            O que você pode fazer?
          </h3>
          <ul className="text-left text-gray-200 space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-brand-orange text-xl">•</span>
              <span>Voltar para a página inicial</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-orange text-xl">•</span>
              <span>Entre em contato conosco pelo WhatsApp</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-orange text-xl">•</span>
              <span>Solicite um orçamento gratuito</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-orange hover:bg-orange-600 text-white font-bold rounded-lg text-lg transition-all shadow-xl transform hover:-translate-y-1"
          >
            <Home className="w-5 h-5" />
            Voltar ao Início
          </Link>

          <a
            href="https://wa.me/5541991337070?text=Olá! Vim através do site e gostaria de mais informações"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-green hover:bg-green-700 text-white font-bold rounded-lg text-lg transition-all shadow-xl transform hover:-translate-y-1"
          >
            <MessageCircle className="w-5 h-5" />
            Falar no WhatsApp
          </a>
        </div>

        <div className="mt-12">
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Voltar à página anterior
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
