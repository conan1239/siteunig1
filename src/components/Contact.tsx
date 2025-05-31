import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Estamos prontos para transformar sua visão em realidade
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Phone className="text-blue-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Telefone</h3>
                <p className="text-gray-600">(21) 99999-9999</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <Mail className="text-green-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-gray-600">contato@inovadigital.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <MapPin className="text-purple-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Endereço</h3>
                <p className="text-gray-600">Av. Principal, 1000 - Rio de Janeiro, RJ</p>
              </div>
            </div>
          </div>

          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Nome</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Seu nome completo"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="seu@email.com"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Mensagem</label>
              <textarea
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent h-32"
                placeholder="Como podemos ajudar?"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;