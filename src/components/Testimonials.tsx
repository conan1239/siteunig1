import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Ana Silva',
      role: 'CEO, TechStart',
      content: 'A equipe da InovaDigital superou todas as nossas expectativas. O novo site aumentou significativamente nossa presença online.',
      rating: 5
    },
    {
      name: 'Carlos Santos',
      role: 'Diretor de Marketing, InovaTech',
      content: 'Profissionalismo e qualidade excepcionais. O aplicativo que desenvolveram revolucionou nossa operação.',
      rating: 5
    },
    {
      name: 'Marina Costa',
      role: 'Fundadora, EcoVerde',
      content: 'Excelente experiência! A equipe é muito competente e entregou o projeto antes do prazo previsto.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A satisfação dos nossos clientes é nossa maior recompensa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "{testimonial.content}"
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;