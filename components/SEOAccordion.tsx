import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionItem {
  title: string;
  content: string;
}

interface SEOAccordionProps {
  items: AccordionItem[];
}

const SEOAccordion: React.FC<SEOAccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {items.map((item, index) => (
        <div key={index} className="border-b border-gray-200 last:border-0">
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
          >
            <h3 className="font-bold text-gray-800 pr-4">{item.title}</h3>
            <ChevronDown
              className={`w-5 h-5 text-brand-orange transition-transform flex-shrink-0 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="px-6 pb-4 text-gray-600 leading-relaxed">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SEOAccordion;
