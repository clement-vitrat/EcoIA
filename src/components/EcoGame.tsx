import React, { useState, useEffect } from 'react';
import { Gamepad2, Zap, Leaf, Droplets, Recycle, Trophy, RotateCcw, Star } from 'lucide-react';

interface GameCard {
  id: number;
  type: 'action' | 'impact';
  title: string;
  description: string;
  points: number;
  icon: React.ElementType;
  color: string;
  matched?: boolean;
}

const EcoGame: React.FC = () => {
  const [gameCards] = useState<GameCard[]>([
    // Actions écologiques
    { id: 1, type: 'action', title: 'Vélo au travail', description: '5km en vélo vs voiture', points: 50, icon: Zap, color: 'emerald' },
    { id: 2, type: 'action', title: 'Douche 5min', description: 'Réduire le temps de douche', points: 30, icon: Droplets, color: 'blue' },
    { id: 3, type: 'action', title: 'Tri sélectif', description: 'Recycler correctement', points: 40, icon: Recycle, color: 'green' },
    { id: 4, type: 'action', title: 'Repas végétarien', description: 'Menu sans viande', points: 60, icon: Leaf, color: 'teal' },
    
    // Impacts correspondants
    { id: 5, type: 'impact', title: '-1.2kg CO₂', description: 'Économie carbone vélo', points: 50, icon: Zap, color: 'emerald' },
    { id: 6, type: 'impact', title: '-15L eau', description: 'Économie d\'eau douche', points: 30, icon: Droplets, color: 'blue' },
    { id: 7, type: 'impact', title: '-0.8kg déchets', description: 'Réduction déchets', points: 40, icon: Recycle, color: 'green' },
    { id: 8, type: 'impact', title: '-2.5kg CO₂', description: 'Impact repas végé', points: 60, icon: Leaf, color: 'teal' }
  ]);

  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchedPairs, setMatchedPairs] = useState<number[]>([]);
  const [score, setScore] = useState(0);
  const [moves, setMoves] = useState(0);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [shuffledCards, setShuffledCards] = useState<GameCard[]>([]);

  // Mélanger les cartes au début
  useEffect(() => {
    const shuffled = [...gameCards].sort(() => Math.random() - 0.5);
    setShuffledCards(shuffled);
  }, []);

  // Vérifier si le jeu est terminé
  useEffect(() => {
    if (matchedPairs.length === gameCards.length) {
      setGameCompleted(true);
    }
  }, [matchedPairs, gameCards.length]);

  const handleCardClick = (cardId: number) => {
    if (flippedCards.length === 2 || flippedCards.includes(cardId) || matchedPairs.includes(cardId)) {
      return;
    }

    const newFlippedCards = [...flippedCards, cardId];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      setMoves(moves + 1);
      
      // Vérifier si les cartes correspondent (même index mais types différents)
      const card1 = gameCards.find(c => c.id === newFlippedCards[0]);
      const card2 = gameCards.find(c => c.id === newFlippedCards[1]);
      
      const isMatch = card1 && card2 && 
        ((card1.id <= 4 && card2.id === card1.id + 4) || 
         (card2.id <= 4 && card1.id === card2.id + 4));

      if (isMatch) {
        // Match trouvé !
        setTimeout(() => {
          setMatchedPairs([...matchedPairs, ...newFlippedCards]);
          setScore(score + (card1?.points || 0));
          setFlippedCards([]);
        }, 1000);
      } else {
        // Pas de match, retourner les cartes
        setTimeout(() => {
          setFlippedCards([]);
        }, 1500);
      }
    }
  };

  const resetGame = () => {
    setFlippedCards([]);
    setMatchedPairs([]);
    setScore(0);
    setMoves(0);
    setGameCompleted(false);
    const shuffled = [...gameCards].sort(() => Math.random() - 0.5);
    setShuffledCards(shuffled);
  };

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      emerald: 'from-emerald-400 to-emerald-600',
      blue: 'from-blue-400 to-blue-600',
      green: 'from-green-400 to-green-600',
      teal: 'from-teal-400 to-teal-600'
    };
    return colorMap[color] || colorMap.emerald;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full mb-6">
            <Gamepad2 className="h-4 w-4 mr-2" />
            <span className="font-medium">Mini-Jeu Écologique</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-purple-600">EcoMemory</span> - Associez Actions & Impacts
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez l'impact réel de vos gestes écologiques en associant chaque action 
            à son bénéfice environnemental. Apprenez en vous amusant !
          </p>
        </div>

        {/* Game Stats */}
        <div className="flex justify-center space-x-8 mb-8">
          <div className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-2xl border border-purple-100 tl-game-stats">
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-yellow-500" />
              <span className="font-semibold text-gray-900">{score} points</span>
            </div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-2xl border border-pink-100 tl-game-stats">
            <div className="flex items-center space-x-2">
              <Trophy className="h-5 w-5 text-pink-500" />
              <span className="font-semibold text-gray-900">{moves} coups</span>
            </div>
          </div>
          <button
            onClick={resetGame}
            className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 rounded-2xl hover:from-purple-600 hover:to-pink-700 transition-all duration-200 flex items-center space-x-2 shadow-lg hover:shadow-xl tl-game-stats"
          >
            <RotateCcw className="h-4 w-4" />
            <span>Nouvelle partie</span>
          </button>
        </div>

        {/* Game Board */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {shuffledCards.map((card) => {
            const Icon = card.icon;
            const isFlipped = flippedCards.includes(card.id) || matchedPairs.includes(card.id);
            const isMatched = matchedPairs.includes(card.id);
            
            return (
              <div
                key={card.id}
                onClick={() => handleCardClick(card.id)}
                className={`relative h-32 cursor-pointer transition-all duration-500 transform hover:scale-105 ${
                  isMatched ? 'scale-105' : ''
                }`}
                style={{ perspective: '1000px' }}
              >
                <div
                  className={`relative w-full h-full transition-transform duration-500 transform-style-preserve-3d ${
                    isFlipped ? 'rotate-y-180' : ''
                  }`}
                >
                  {/* Face arrière (cachée) */}
                  <div className="absolute inset-0 w-full h-full backface-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-600 rounded-2xl flex items-center justify-center border-2 border-gray-300 shadow-lg">
                      <Leaf className="h-12 w-12 text-white opacity-50" />
                    </div>
                  </div>
                  
                  {/* Face avant (révélée) */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                    <div className={`w-full h-full bg-gradient-to-br ${getColorClasses(card.color)} rounded-2xl p-4 text-white shadow-lg border-2 ${
                      isMatched ? 'border-yellow-400 shadow-yellow-200' : 'border-white/20'
                    }`}>
                      <div className="flex flex-col items-center justify-center h-full text-center">
                        <Icon className="h-8 w-8 mb-2" />
                        <h3 className="font-bold text-sm mb-1">{card.title}</h3>
                        <p className="text-xs opacity-90">{card.description}</p>
                        <div className="mt-2 bg-white/20 px-2 py-1 rounded-full">
                          <span className="text-xs font-medium">{card.points} pts</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Game Completion */}
        {gameCompleted && (
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl p-8 text-center text-white shadow-2xl">
            <Trophy className="h-16 w-16 mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-4">Félicitations ! 🎉</h3>
            <p className="text-xl mb-6">
              Vous avez terminé EcoMemory en {moves} coups et gagné {score} points !
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
                <h4 className="font-semibold mb-2">Impact Total Appris</h4>
                <p className="text-sm">-7.5kg CO₂ + 15L eau économisés</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
                <h4 className="font-semibold mb-2">Niveau Éco</h4>
                <p className="text-sm">Expert en gestes verts !</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
                <h4 className="font-semibold mb-2">Prochaine Étape</h4>
                <p className="text-sm">Relevez nos défis écologiques</p>
              </div>
            </div>
            <button
              onClick={resetGame}
              className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Rejouer
            </button>
          </div>
        )}

        {/* Game Instructions */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-purple-100 mt-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Comment jouer ?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">1</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Retournez les cartes</h4>
              <p className="text-gray-600 text-sm">Cliquez sur les cartes pour découvrir les actions écologiques et leurs impacts</p>
            </div>
            <div className="text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-pink-600">2</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Trouvez les paires</h4>
              <p className="text-gray-600 text-sm">Associez chaque action écologique à son impact environnemental correspondant</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">3</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Apprenez l'impact</h4>
              <p className="text-gray-600 text-sm">Découvrez l'impact réel de vos gestes quotidiens sur l'environnement</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcoGame;