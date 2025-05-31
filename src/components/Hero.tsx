import React from 'react';
import { Sparkles, ArrowRight, Star } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen">
      {/* Seção Principal */}
      <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-teal-50">
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transformando Ideias em Experiências Digitais
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Criamos soluções digitais únicas e inovadoras para impulsionar o seu negócio ao próximo nível.
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 flex items-center transform hover:scale-105">
                Comece Agora
                <ArrowRight className="ml-2" size={20} />
              </button>
              <button className="border-2 border-gray-800 text-gray-800 px-8 py-4 rounded-lg font-medium hover:bg-gray-800 hover:text-white transition-all duration-300 transform hover:scale-105">
                Saiba Mais
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Seção de Serviços */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Nossos Serviços
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Design Moderno',
                description: 'Interfaces elegantes e intuitivas que encantam seus usuários',
                icon: <Sparkles className="text-blue-500\" size={24} />
              },
              {
                title: 'Desenvolvimento Web',
                description: 'Códigos limpos e otimizados para melhor performance',
                icon: <Star className="text-purple-500" size={24} />
              },
              {
                title: 'Experiência do Usuário',
                description: 'Foco total na satisfação e engajamento dos usuários',
                icon: <ArrowRight className="text-teal-500\" size={24} />
              }
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center justify-center w-12 h-12 bg-white rounded-lg mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default Hero;