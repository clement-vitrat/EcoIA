import React from 'react';
import { ArrowRight, Zap, Target, TrendingUp } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-emerald-50 via-teal-50 to-sky-50 py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-sky-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-sky-600 bg-clip-text text-transparent">
              Chaque geste compte
            </span>
            <br />
            <span className="text-gray-800">pour notre planète</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed">
            Transformez votre quotidien avec l'intelligence artificielle. 
            Calculez votre empreinte carbone, recevez des conseils personnalisés 
            et agissez concrètement pour un avenir durable.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a href="#calculator">
              <button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all duration-200 flex items-center space-x-2 shadow-lg hover:shadow-xl hover:scale-105">
                <span>Commencer maintenant</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </a>              
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-emerald-100 hover:bg-white/80 transition-all duration-200">
              <Target className="h-8 w-8 text-emerald-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-2">-42%</div>
              <div className="text-gray-600">Réduction moyenne d'empreinte carbone</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-teal-100 hover:bg-white/80 transition-all duration-200">
              <TrendingUp className="h-8 w-8 text-teal-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-2">+127%</div>
              <div className="text-gray-600">Augmentation des gestes éco-responsables</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-sky-100 hover:bg-white/80 transition-all duration-200">
              <Zap className="h-8 w-8 text-sky-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-2">2.3T</div>
              <div className="text-gray-600">CO₂ économisé par notre communauté</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;