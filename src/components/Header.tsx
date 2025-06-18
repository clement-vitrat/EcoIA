import React, { useState } from 'react';
import { Leaf, Menu, X, Sparkles } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b border-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-2 rounded-xl">
              <Leaf className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                EcoIA
              </h1>
              <p className="text-xs text-gray-600 -mt-1">Powered by AI</p>
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
            <a href="#education" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
              Apprendre
            </a>
            <button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-2 rounded-full hover:from-emerald-600 hover:to-teal-700 transition-all duration-200 flex items-center space-x-2 shadow-lg hover:shadow-xl">
              <Sparkles className="h-4 w-4" />
              <span>Assistant IA</span>
            </button>
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
              <a href="#education" className="text-gray-700 hover:text-emerald-600 transition-colors">
                Apprendre
              </a>
              <button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-2 rounded-full hover:from-emerald-600 hover:to-teal-700 transition-all duration-200 flex items-center space-x-2 w-fit">
                <Sparkles className="h-4 w-4" />
                <span>Assistant IA</span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;