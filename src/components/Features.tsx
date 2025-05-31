import React from 'react';
import { Code2, Palette, Rocket, Shield, Smartphone, Users } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Code2 className="text-blue-500" size={32} />,
      title: 'Desenvolvimento Web',
      description: 'Criamos sites responsivos e aplicações web modernas usando as últimas tecnologias.'
    },
    {
      icon: <Palette className="text-purple-500\" size={32} />,
      title: 'Design UI/UX',
      description: 'Interfaces intuitivas e atraentes que proporcionam a melhor experiência ao usuário.'
    },
    {
      icon: <Smartphone className="text-green-500" size={32} />,
      title: 'Aplicativos Mobile',
      description: 'Desenvolvimento de aplicativos nativos e híbridos para iOS e Android.'
    },
    {
      icon: <Shield className="text-red-500\" size={32} />,
      title: 'Segurança Digital',
      description: 'Proteção robusta para seus dados e sistemas com as melhores práticas de segurança.'
    },
    {
      icon: <Rocket className="text-yellow-500" size={32} />,
      title: 'Otimização de Performance',
      description: 'Melhoramos a velocidade e eficiência do seu site ou aplicação.'
    },
    {
      icon: <Users className="text-teal-500\" size={32} />,
      title: 'Consultoria Técnica',
      description: 'Orientação especializada para impulsionar seu projeto digital.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Soluções Completas para seu Negócio
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Oferecemos um conjunto abrangente de serviços para transformar sua presença digital
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-6 inline-block bg-gray-50 p-3 rounded-lg">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;