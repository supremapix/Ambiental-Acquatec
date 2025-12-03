import React from 'react';

const ComparisonTable: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-heading font-bold text-center text-brand-blue mb-10">
          Compare e Escolha o Modelo Ideal
        </h2>

        <div className="overflow-x-auto shadow-xl rounded-lg border border-gray-200">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-brand-blue text-white">
                <th className="p-4 font-bold text-sm uppercase tracking-wider">Característica</th>
                <th className="p-4 font-bold text-sm uppercase tracking-wider">Calha Beiral</th>
                <th className="p-4 font-bold text-sm uppercase tracking-wider bg-brand-orange/90">Calha Platibanda</th>
                <th className="p-4 font-bold text-sm uppercase tracking-wider">Calha Colonial</th>
                <th className="p-4 font-bold text-sm uppercase tracking-wider">Calha Quadrada</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 text-sm">
              <tr className="border-b border-gray-100 hover:bg-gray-50">
                <td className="p-4 font-semibold text-brand-dark bg-gray-50">Material</td>
                <td className="p-4">Alumínio/Galv.</td>
                <td className="p-4 bg-orange-50 font-medium">Alumínio/Galv.</td>
                <td className="p-4">Alumínio</td>
                <td className="p-4">Aço Galvanizado</td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50">
                <td className="p-4 font-semibold text-brand-dark bg-gray-50">Aplicação</td>
                <td className="p-4">Residencial</td>
                <td className="p-4 bg-orange-50 font-medium">Coml./Industrial</td>
                <td className="p-4">Clássico</td>
                <td className="p-4">Moderno</td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50">
                <td className="p-4 font-semibold text-brand-dark bg-gray-50">Durabilidade</td>
                <td className="p-4">15-20 anos</td>
                <td className="p-4 bg-orange-50 font-medium">20-25 anos</td>
                <td className="p-4">15-18 anos</td>
                <td className="p-4">18-22 anos</td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50">
                <td className="p-4 font-semibold text-brand-dark bg-gray-50">Estética</td>
                <td className="p-4 text-yellow-500">★★★★☆</td>
                <td className="p-4 bg-orange-50 text-yellow-500">★★★★★</td>
                <td className="p-4 text-yellow-500">★★★★★</td>
                <td className="p-4 text-yellow-500">★★★★☆</td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50">
                <td className="p-4 font-semibold text-brand-dark bg-gray-50">Garantia</td>
                <td className="p-4 font-bold text-green-600">5 anos</td>
                <td className="p-4 bg-orange-50 font-bold text-green-600">5 anos</td>
                <td className="p-4 font-bold text-green-600">5 anos</td>
                <td className="p-4 font-bold text-green-600">5 anos</td>
              </tr>
              <tr>
                <td className="p-4 bg-gray-50"></td>
                <td className="p-4"><a href="#orcamento" className="text-brand-blue font-bold underline hover:text-brand-orange">Orçar</a></td>
                <td className="p-4 bg-orange-50"><a href="#orcamento" className="text-brand-blue font-bold underline hover:text-brand-orange">Orçar</a></td>
                <td className="p-4"><a href="#orcamento" className="text-brand-blue font-bold underline hover:text-brand-orange">Orçar</a></td>
                <td className="p-4"><a href="#orcamento" className="text-brand-blue font-bold underline hover:text-brand-orange">Orçar</a></td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p className="text-center text-gray-500 mt-6 italic bg-blue-50 p-4 rounded-lg inline-block w-full">
          💡 Não sabe qual escolher? Nossa equipe técnica faz avaliação <strong>GRATUITA</strong> e recomenda o melhor modelo para seu projeto!
        </p>
      </div>
    </section>
  );
};

export default ComparisonTable;
