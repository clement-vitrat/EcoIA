import React, { useState } from 'react';
import { Calculator, Car, Home, Plane, ShoppingCart, Lightbulb, AlertCircle } from 'lucide-react';

interface CarbonData {
  transport: number;
  energy: number;
  food: number;
  consumption: number;
}

const CarbonCalculator: React.FC = () => {
  const [data, setData] = useState<CarbonData>({
    transport: 0,
    energy: 0,
    food: 0,
    consumption: 0
  });
  
  const [showResults, setShowResults] = useState(false);

  const totalCarbon = data.transport + data.energy + data.food + data.consumption;
  const averageCarbon = 11000; // kg CO2/an moyenne française

  const getRecommendations = () => {
    const recommendations = [];
    
    if (data.transport > 3000) {
      recommendations.push({
        category: "Transport",
        icon: Car,
        suggestion: "Privilégiez les transports en commun, le vélo ou la marche. Considérez le covoiturage.",
        impact: "Jusqu'à -40% d'émissions transport"
      });
    }
    
    if (data.energy > 2500) {
      recommendations.push({
        category: "Énergie",
        icon: Home,
        suggestion: "Améliorez l'isolation de votre logement et utilisez des appareils économes en énergie.",
        impact: "Jusqu'à -35% d'émissions énergie"
      });
    }
    
    if (data.food > 2000) {
      recommendations.push({
        category: "Alimentation",
        icon: ShoppingCart,
        suggestion: "Réduisez la consommation de viande rouge et privilégiez les produits locaux et de saison.",
        impact: "Jusqu'à -30% d'émissions alimentaires"
      });
    }

    return recommendations;
  };

  const handleCalculate = () => {
    setShowResults(true);
  };

  return (
    <section id="calculator" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full mb-6">
            <Calculator className="h-4 w-4 mr-2" />
            <span className="font-medium">Calculateur IA</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Calculez votre <span className="text-emerald-600">empreinte carbone</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Notre IA analyse vos habitudes et vous propose des recommandations personnalisées 
            pour réduire votre impact environnemental.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-50 to-emerald-50 rounded-3xl p-8 md:p-12 border border-emerald-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Transport */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <Car className="h-6 w-6 text-emerald-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Transport</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Kilomètres en voiture par an
                    </label>
                    <input
                      type="number"
                      value={data.transport / 0.2 || ''}
                      onChange={(e) => setData({...data, transport: Number(e.target.value) * 0.2})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="15000"
                    />
                  </div>
                </div>
              </div>

              {/* Énergie */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <Home className="h-6 w-6 text-teal-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Énergie du logement</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Consommation électrique annuelle (kWh)
                    </label>
                    <input
                      type="number"
                      value={data.energy / 0.5 || ''}
                      onChange={(e) => setData({...data, energy: Number(e.target.value) * 0.5})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                      placeholder="5000"
                    />
                  </div>
                </div>
              </div>

              {/* Alimentation */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <ShoppingCart className="h-6 w-6 text-orange-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Alimentation</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Repas avec viande par semaine
                    </label>
                    <input
                      type="number"
                      value={data.food / 150 || ''}
                      onChange={(e) => setData({...data, food: Number(e.target.value) * 150})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      placeholder="10"
                    />
                  </div>
                </div>
              </div>

              {/* Consommation */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <Plane className="h-6 w-6 text-sky-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Voyages</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Vols long-courriers par an
                    </label>
                    <input
                      type="number"
                      value={data.consumption / 2000 || ''}
                      onChange={(e) => setData({...data, consumption: Number(e.target.value) * 2000})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                      placeholder="2"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <button
                onClick={handleCalculate}
                className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 flex items-center space-x-2 mx-auto"
              >
                <Calculator className="h-5 w-5" />
                <span>Calculer mon empreinte</span>
              </button>
            </div>
          </div>

          {/* Results */}
          {showResults && (
            <div className="mt-12 bg-white rounded-3xl p-8 md:p-12 border border-gray-200 shadow-lg">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Votre empreinte carbone</h3>
                <div className="flex items-center justify-center space-x-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">
                      {totalCarbon.toLocaleString()} kg
                    </div>
                    <div className="text-gray-600">CO₂ par an</div>
                  </div>
                  <div className="text-center">
                    <div className={`text-4xl font-bold mb-2 ${totalCarbon < averageCarbon ? 'text-green-600' : 'text-red-600'}`}>
                      {totalCarbon < averageCarbon ? '-' : '+'}{Math.abs(((totalCarbon - averageCarbon) / averageCarbon * 100)).toFixed(0)}%
                    </div>
                    <div className="text-gray-600">vs moyenne française</div>
                  </div>
                </div>
              </div>

              {/* Recommendations */}
              <div className="space-y-6">
                <div className="flex items-center mb-6">
                  <Lightbulb className="h-6 w-6 text-yellow-500 mr-3" />
                  <h4 className="text-xl font-semibold text-gray-900">Recommandations personnalisées IA</h4>
                </div>
                
                {getRecommendations().length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {getRecommendations().map((rec, index) => (
                      <div key={index} className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-2xl border border-emerald-100">
                        <rec.icon className="h-8 w-8 text-emerald-600 mb-4" />
                        <h5 className="font-semibold text-gray-900 mb-2">{rec.category}</h5>
                        <p className="text-gray-700 text-sm mb-3">{rec.suggestion}</p>
                        <div className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-medium">
                          {rec.impact}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-green-50 p-6 rounded-2xl border border-green-200 flex items-center">
                    <AlertCircle className="h-6 w-6 text-green-600 mr-3" />
                    <div>
                      <h5 className="font-semibold text-green-900 mb-1">Excellent travail !</h5>
                      <p className="text-green-800 text-sm">Votre empreinte carbone est déjà optimisée. Continuez vos efforts pour la planète !</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CarbonCalculator;