import React, { useState } from 'react';
import { Leaf, Menu, X, Sparkles } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b border-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="rounded-xl">
              <img src="/src/public/img/favicon.ico" alt="Logo" className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                EcoIA
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
              Accueil
            </a>
            <a href="#calculator" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
              Calculateur
            </a>
            <a href="#challenges" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
              Défis
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-emerald-100">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-emerald-600 transition-colors">
                Accueil
              </a>
              <a href="#calculator" className="text-gray-700 hover:text-emerald-600 transition-colors">
                Calculateur
              </a>
              <a href="#challenges" className="text-gray-700 hover:text-emerald-600 transition-colors">
                Défis
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;