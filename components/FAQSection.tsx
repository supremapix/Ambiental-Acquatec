import React, { useState } from 'react';
import { FAQS } from '../constants';
import { Plus, Minus } from 'lucide-react';
import { createFAQSchema } from '../utils/seo-schemas';

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqSchema = createFAQSchema(FAQS);

  return (
    <section className="py-20 bg-gray-50" itemScope itemType="https://schema.org/FAQPage">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-heading font-bold text-center text-brand-blue mb-12">
          Perguntas Frequentes sobre Calhas e Telhados
        </h2>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center p-5 text-left font-semibold text-gray-800 hover:bg-gray-50 transition-colors"
              >
                <span itemProp="name">{faq.question}</span>
                {openIndex === index ? <Minus className="w-5 h-5 text-brand-orange" /> : <Plus className="w-5 h-5 text-brand-blue" />}
              </button>

              <div
                className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"
              >
                <div className="p-5 pt-0 text-gray-600 border-t border-gray-100 mt-2" itemProp="text">
                    {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
