import React, { useState } from 'react';
import { Trophy, Calendar, Zap, Users, CheckCircle, Star, Target } from 'lucide-react';

interface Challenge {
  id: number;
  title: string;
  description: string;
  duration: string;
  difficulty: 'Facile' | 'Moyen' | 'Difficile';
  points: number;
  participants: number;
  category: string;
  icon: React.ElementType;
  color: string;
  completed?: boolean;
}

const Challenges: React.FC = () => {
  const [challenges] = useState<Challenge[]>([
    {
      id: 1,
      title: "7 jours sans voiture",
      description: "Utilisez uniquement les transports en commun, vélo ou marche pendant une semaine",
      duration: "7 jours",
      difficulty: "Moyen",
      points: 500,
      participants: 1247,
      category: "Transport",
      icon: Target,
      color: "emerald"
    },
    {
      id: 2,
      title: "Zéro déchet plastique",
      description: "Éliminez tous les plastiques à usage unique de votre quotidien",
      duration: "14 jours",
      difficulty: "Difficile",
      points: 750,
      participants: 892,
      category: "Consommation",
      icon: Trophy,
      color: "teal"
    },
    {
      id: 3,
      title: "Énergie verte",
      description: "Réduisez votre consommation électrique de 30%",
      duration: "30 jours",
      difficulty: "Moyen",
      points: 600,
      participants: 2156,
      category: "Énergie",
      icon: Zap,
      color: "yellow"
    },
    {
      id: 4,
      title: "Menu végétarien",
      description: "Adoptez une alimentation 100% végétarienne",
      duration: "21 jours",
      difficulty: "Facile",
      points: 400,
      participants: 3421,
      category: "Alimentation",
      icon: Star,
      color: "green"
    },
    {
      id: 5,
      title: "Jardin urbain",
      description: "Créez votre propre potager et consommez vos légumes",
      duration: "90 jours",
      difficulty: "Difficile",
      points: 1000,
      participants: 567,
      category: "Autonomie",
      icon: Users,
      color: "orange"
    },
    {
      id: 6,
      title: "Réparation créative",
      description: "Réparez au lieu de jeter : 10 objets sauvés",
      duration: "30 jours",
      difficulty: "Facile",
      points: 350,
      participants: 1834,
      category: "Réparation",
      icon: CheckCircle,
      color: "blue"
    }
  ]);

  const [completedChallenges, setCompletedChallenges] = useState<number[]>([]);

  const joinChallenge = (challengeId: number) => {
    setCompletedChallenges(prev => [...prev, challengeId]);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Facile': return 'bg-green-100 text-green-800';
      case 'Moyen': return 'bg-yellow-100 text-yellow-800';
      case 'Difficile': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      emerald: 'from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700',
      teal: 'from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700',
      yellow: 'from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700',
      green: 'from-green-500 to-green-600 hover:from-green-600 hover:to-green-700',
      orange: 'from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700',
      blue: 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700'
    };
    return colorMap[color] || colorMap.emerald;
  };

  return (
    <section id="challenges" className="py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-sky-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full mb-6">
            <Trophy className="h-4 w-4 mr-2" />
            <span className="font-medium">Défis Écologiques</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Relevez le <span className="text-emerald-600">défi</span> écologique
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Rejoignez des milliers de personnes qui transforment leurs habitudes. 
            Chaque défi complété vous rapporte des points et contribue à un impact collectif.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl text-center border border-emerald-100">
            <div className="text-3xl font-bold text-emerald-600 mb-2">12.4K</div>
            <div className="text-gray-600">Participants actifs</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl text-center border border-teal-100">
            <div className="text-3xl font-bold text-teal-600 mb-2">847</div>
            <div className="text-gray-600">Défis complétés aujourd'hui</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl text-center border border-sky-100">
            <div className="text-3xl font-bold text-sky-600 mb-2">2.1T</div>
            <div className="text-gray-600">CO₂ économisé cette semaine</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl text-center border border-orange-100">
            <div className="text-3xl font-bold text-orange-600 mb-2">156</div>
            <div className="text-gray-600">Nouveaux défis ce mois</div>
          </div>
        </div>

        {/* Challenges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {challenges.map((challenge) => {
            const isCompleted = completedChallenges.includes(challenge.id);
            const Icon = challenge.icon;
            
            return (
              <div
                key={challenge.id}
                className={`bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                  isCompleted ? 'ring-2 ring-emerald-500 bg-emerald-50' : ''
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${getColorClasses(challenge.color)}`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  {isCompleted && (
                    <CheckCircle className="h-6 w-6 text-emerald-500" />
                  )}
                </div>

                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
                      {challenge.category}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(challenge.difficulty)}`}>
                      {challenge.difficulty}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {challenge.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {challenge.description}
                  </p>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{challenge.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    <span>{challenge.participants.toLocaleString()}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 mr-1" />
                    <span className="font-semibold text-gray-900">{challenge.points} pts</span>
                  </div>
                  <button
                    onClick={() => joinChallenge(challenge.id)}
                    disabled={isCompleted}
                    className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                      isCompleted
                        ? 'bg-emerald-100 text-emerald-800 cursor-not-allowed'
                        : `bg-gradient-to-r ${getColorClasses(challenge.color)} text-white hover:shadow-lg`
                    }`}
                  >
                    {isCompleted ? 'Relevé !' : 'Relever'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 border border-emerald-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Créez votre propre défi
            </h3>
            <p className="text-gray-600 mb-6">
              Vous avez une idée innovante pour protéger l'environnement ? 
              Proposez votre défi à la communauté et inspirez des milliers de personnes.
            </p>
            <button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-3 rounded-full font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all duration-200 shadow-lg hover:shadow-xl">
              Proposer un défi
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Challenges;