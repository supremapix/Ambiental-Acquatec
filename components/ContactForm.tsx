import React, { useState } from 'react';
import { Send, Phone } from 'lucide-react';
import { CITIES } from '../constants';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    neighborhood: '',
    type: 'Residencial',
    services: [] as string[],
    urgency: 'Normal',
    description: '',
    privacy: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, checked } = e.target;
      if (value === 'privacy') {
          setFormData(prev => ({ ...prev, privacy: checked }));
      } else {
          // Handle Services array
          setFormData(prev => ({
              ...prev,
              services: checked 
                  ? [...prev.services, value] 
                  : prev.services.filter(s => s !== value)
          }));
      }
  };

  const handleSubmit = (e: React.FormEvent, method: 'whatsapp' | 'phone') => {
    e.preventDefault();
    if (!formData.privacy) {
        alert("Por favor, aceite a política de privacidade.");
        return;
    }

    if (method === 'whatsapp') {
        const message = `Olá! Vim pelo site e gostaria de orçamento:
Nome: ${formData.name}
Cidade: ${formData.city}
Serviço: ${formData.services.join(', ')}
Tipo: ${formData.type}
Urgência: ${formData.urgency}
Descrição: ${formData.description}`;
        
        const url = `https://wa.me/5541991337070?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    } else {
        window.location.href = "tel:+554130535740";
    }
  };

  return (
    <section id="orcamento" className="py-20 bg-brand-blue text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Left Info */}
            <div className="lg:w-1/3">
                <span className="text-brand-orange font-bold uppercase tracking-wider">Contato Rápido</span>
                <h2 className="text-3xl md:text-4xl font-heading font-extrabold mb-6 mt-2">
                    Receba Seu Orçamento em Até 2 Horas
                </h2>
                <p className="text-gray-300 mb-8">
                    Preencha o formulário e nossa equipe técnica entrará em contato com uma estimativa inicial ou para agendar uma visita gratuita.
                </p>
                
                <div className="space-y-4">
                    <div className="flex items-center gap-4 bg-white/10 p-4 rounded-lg">
                        <div className="w-10 h-10 rounded-full bg-brand-orange flex items-center justify-center font-bold text-white">1</div>
                        <div>
                            <p className="font-bold">Preencha os dados</p>
                            <p className="text-sm text-gray-300">É rápido e seguro</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 bg-white/10 p-4 rounded-lg">
                        <div className="w-10 h-10 rounded-full bg-brand-orange flex items-center justify-center font-bold text-white">2</div>
                        <div>
                            <p className="font-bold">Receba o contato</p>
                            <p className="text-sm text-gray-300">Via WhatsApp ou Telefone</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 bg-white/10 p-4 rounded-lg">
                        <div className="w-10 h-10 rounded-full bg-brand-orange flex items-center justify-center font-bold text-white">3</div>
                        <div>
                            <p className="font-bold">Agende a visita</p>
                            <p className="text-sm text-gray-300">Se necessário, sem custo</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Form */}
            <div className="lg:w-2/3 bg-white text-gray-800 p-8 rounded-xl shadow-2xl">
                <form>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label className="block text-sm font-semibold mb-2">Nome Completo*</label>
                            <input type="text" name="name" onChange={handleChange} className="w-full p-3 border border-gray-300 rounded focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none" required />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-2">Telefone/WhatsApp*</label>
                            <input type="tel" name="phone" onChange={handleChange} className="w-full p-3 border border-gray-300 rounded focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none" required />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-2">Cidade*</label>
                            <select name="city" onChange={handleChange} className="w-full p-3 border border-gray-300 rounded focus:border-brand-blue outline-none" required>
                                <option value="">Selecione...</option>
                                {CITIES.map(c => <option key={c.slug} value={c.name}>{c.name}</option>)}
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-2">Tipo de Imóvel</label>
                            <select name="type" onChange={handleChange} className="w-full p-3 border border-gray-300 rounded focus:border-brand-blue outline-none">
                                <option value="Residencial">Residencial</option>
                                <option value="Comercial">Comercial</option>
                                <option value="Industrial">Industrial</option>
                                <option value="Condominio">Condomínio</option>
                            </select>
                        </div>
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-semibold mb-2">Serviços de Interesse*</label>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            {['Calhas', 'Telhados', 'Rufos', 'Manutenção', 'Limpeza', 'Reforma'].map(opt => (
                                <label key={opt} className="flex items-center gap-2 text-sm cursor-pointer">
                                    <input type="checkbox" value={opt} onChange={handleCheckboxChange} className="rounded text-brand-blue focus:ring-brand-blue" />
                                    {opt}
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-semibold mb-2">Descreva sua necessidade</label>
                        <textarea name="description" onChange={handleChange} rows={3} className="w-full p-3 border border-gray-300 rounded focus:border-brand-blue outline-none" placeholder="Ex: Preciso trocar as calhas da frente da casa..."></textarea>
                    </div>

                    <div className="mb-6">
                        <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                            <input type="checkbox" name="privacy" value="privacy" onChange={handleCheckboxChange} className="rounded text-brand-blue" />
                            Li e aceito a Política de Privacidade e concordo em receber contato.
                        </label>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <button 
                            onClick={(e) => handleSubmit(e, 'whatsapp')}
                            className="flex items-center justify-center gap-2 bg-brand-green hover:bg-green-700 text-white font-bold py-4 rounded-lg transition-colors"
                        >
                            <Send className="w-5 h-5" /> Enviar p/ WhatsApp
                        </button>
                        <button 
                            onClick={(e) => handleSubmit(e, 'phone')}
                            className="flex items-center justify-center gap-2 bg-brand-blue hover:bg-blue-800 text-white font-bold py-4 rounded-lg transition-colors"
                        >
                            <Phone className="w-5 h-5" /> Solicitar Ligação
                        </button>
                    </div>
                </form>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
