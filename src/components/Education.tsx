import React, { useState } from 'react';
import { BookOpen, Play, Award, ChevronRight, Globe, Thermometer, Droplets, Leaf } from 'lucide-react';

interface Course {
  id: number;
  title: string;
  description: string;
  duration: string;
  level: string;
  progress: number;
  lessons: number;
  category: string;
  icon: React.ElementType;
  color: string;
}

const Education: React.FC = () => {
  const [courses] = useState<Course[]>([
    {
      id: 1,
      title: "Changement climatique : comprendre les enjeux",
      description: "Découvrez les mécanismes du réchauffement climatique et ses impacts sur notre planète",
      duration: "2h 30min",
      level: "Débutant",
      progress: 0,
      lessons: 8,
      category: "Climat",
      icon: Thermometer,
      color: "red"
    },
    {
      id: 2,
      title: "Économie circulaire et zéro déchet",
      description: "Apprenez à adopter un mode de vie zéro déchet et à comprendre l'économie circulaire",
      duration: "1h 45min",
      level: "Intermédiaire",
      progress: 60,
      lessons: 6,
      category: "Consommation",
      icon: Leaf,
      color: "green"
    },
    {
      id: 3,
      title: "Biodiversité et écosystèmes",
      description: "Explorez la richesse de la biodiversité et l'importance des écosystèmes",
      duration: "3h 15min",
      level: "Avancé",
      progress: 25,
      lessons: 12,
      category: "Nature",
      icon: Globe,
      color: "blue"
    },
    {
      id: 4,
      title: "Gestion durable de l'eau",
      description: "Comprenez les enjeux de l'eau et les solutions pour une gestion responsable",
      duration: "2h 10min",
      level: "Intermédiaire",
      progress: 0,
      lessons: 9,
      category: "Ressources",
      icon: Droplets,
      color: "cyan"
    }
  ]);

  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Débutant': return 'bg-green-100 text-green-800';
      case 'Intermédiaire': return 'bg-yellow-100 text-yellow-800';
      case 'Avancé': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      red: 'from-red-500 to-red-600',
      green: 'from-green-500 to-green-600',
      blue: 'from-blue-500 to-blue-600',
      cyan: 'from-cyan-500 to-cyan-600'
    };
    return colorMap[color] || colorMap.green;
  };

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full mb-6">
            <BookOpen className="h-4 w-4 mr-2" />
            <span className="font-medium">Éducation Interactive</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Apprenez pour <span className="text-emerald-600">agir</span> efficacement
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Maîtrisez les enjeux environnementaux avec nos cours interactifs conçus par des experts. 
            De la théorie à la pratique, transformez vos connaissances en actions concrètes.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-2xl text-center border border-emerald-100">
            <div className="text-3xl font-bold text-emerald-600 mb-2">45+</div>
            <div className="text-gray-600">Cours disponibles</div>
          </div>
          <div className="bg-gradient-to-br from-teal-50 to-sky-50 p-6 rounded-2xl text-center border border-teal-100">
            <div className="text-3xl font-bold text-teal-600 mb-2">15K+</div>
            <div className="text-gray-600">Étudiants inscrits</div>
          </div>
          <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-6 rounded-2xl text-center border border-sky-100">
            <div className="text-3xl font-bold text-sky-600 mb-2">98%</div>
            <div className="text-gray-600">Taux de satisfaction</div>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {courses.map((course) => {
            const Icon = course.icon;
            
            return (
              <div
                key={course.id}
                className="bg-gradient-to-br from-gray-50 to-emerald-50 rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
                onClick={() => setSelectedCourse(course)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${getColorClasses(course.color)}`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
                      {course.category}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(course.level)}`}>
                      {course.level}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {course.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6">
                  {course.description}
                </p>

                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Progression</span>
                    <span>{course.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full bg-gradient-to-r ${getColorClasses(course.color)}`}
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{course.lessons} leçons</span>
                  <span>{course.duration}</span>
                </div>

                <div className="flex items-center justify-between mt-6">
                  <button className={`bg-gradient-to-r ${getColorClasses(course.color)} text-white px-4 py-2 rounded-full font-medium hover:shadow-lg transition-all duration-200 flex items-center space-x-2`}>
                    <Play className="h-4 w-4" />
                    <span>{course.progress > 0 ? 'Continuer' : 'Commencer'}</span>
                  </button>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Quiz Section */}
        <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-8 md:p-12 text-white mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <Award className="h-16 w-16 mx-auto mb-6 opacity-90" />
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Testez vos connaissances écologiques
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Participez à notre quiz interactif et découvrez votre niveau de connaissance 
              sur les enjeux environnementaux. Obtenez votre certification EcoExpert !
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-emerald-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl">
                Quiz débutant (5 min)
              </button>
              <button className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-white/30 transition-all duration-200 border border-white/30">
                Quiz expert (15 min)
              </button>
            </div>
          </div>
        </div>

        {/* Learning Path */}
        <div className="bg-gradient-to-br from-gray-50 to-emerald-50 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Votre parcours d'apprentissage personnalisé
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Notre IA analyse vos connaissances et vous propose un parcours adapté à votre niveau 
              et à vos objectifs environnementaux.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-emerald-600">1</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Évaluation initiale</h4>
              <p className="text-gray-600 text-sm">
                Répondez à quelques questions pour que nous puissions personnaliser votre parcours
              </p>
            </div>
            <div className="text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-teal-600">2</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Apprentissage adaptatif</h4>
              <p className="text-gray-600 text-sm">
                Suivez des cours personnalisés qui s'adaptent à votre rythme et vos préférences
              </p>
            </div>
            <div className="text-center">
              <div className="bg-sky-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-sky-600">3</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Certification</h4>
              <p className="text-gray-600 text-sm">
                Obtenez votre certification et partagez vos compétences avec la communauté
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all duration-200 shadow-lg hover:shadow-xl">
              Commencer mon parcours
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;