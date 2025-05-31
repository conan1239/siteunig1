import React from 'react';
import { Menu, X, Heart, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen flex flex-col">
      <header 
        className={`fixed w-full z-10 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold flex items-center gap-2">
            <Sparkles className="text-blue-600" />
            <span className="text-blue-600">Inova</span>
            <span className="text-teal-600">Digital</span>
          </a>
          
          <nav className="hidden md:flex space-x-8">
            {['Início', 'Serviços', 'Sobre', 'Contato'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`font-medium transition-colors duration-300 ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-blue-600' 
                    : 'text-gray-800 hover:text-blue-500'
                }`}
              >
                {item}
              </a>
            ))}
          </nav>
          
          <button 
            className="md:hidden text-gray-700 focus:outline-none" 
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden bg-white">
            <div className="container mx-auto px-4 py-3">
              <div className="flex flex-col space-y-3">
                {['Início', 'Serviços', 'Sobre', 'Contato'].map((item) => (
                  <a 
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-700 hover:text-blue-600 font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>
      
      <main className="flex-grow">
        {children}
      </main>
      
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Sparkles className="text-blue-400" />
                InovaDigital
              </h3>
              <p className="text-gray-300">
                Soluções digitais elegantes e inovadoras para o seu negócio.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                {['Início', 'Serviços', 'Sobre', 'Contato'].map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>
              <div className="flex space-x-4">
                {['LinkedIn', 'Instagram', 'Twitter', 'GitHub'].map((platform) => (
                  <a 
                    key={platform}
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    {platform}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p className="flex items-center justify-center text-gray-400">
              Desenvolvido com <Heart size={16} className="mx-1 text-red-500" /> por Davi de Moura Seares
            </p>
            <p className="text-gray-400 mt-2">
              Estudante da Universidade Unig
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;