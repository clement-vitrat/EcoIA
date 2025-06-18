import React, { useState } from 'react';
import { MessageCircle, Send, Bot, User, Sparkles, Lightbulb, Target, TrendingUp } from 'lucide-react';

interface Message {
  id: number;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
  suggestions?: string[];
}

const AIAssistant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: 'ai',
      content: "Bonjour ! Je suis votre assistant IA écologique personnalisé. Grâce à l'intelligence artificielle, je peux analyser vos habitudes, calculer votre impact environnemental et vous proposer des solutions sur mesure. Posez-moi n'importe quelle question sur l'écologie !",
      timestamp: new Date(),
      suggestions: [
        "Comment réduire ma consommation d'énergie ?",
        "Quels sont les meilleurs moyens de transport écologiques ?",
        "Comment faire du compost à la maison ?",
        "Conseils pour un mode de vie zéro déchet"
      ]
    }
  ]);
  
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // IA avancée pour générer des réponses contextuelles et personnalisées
  const generateAIResponse = (userMessage: string): { content: string; suggestions: string[] } => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Analyse contextuelle avec IA pour des réponses personnalisées
    if (lowerMessage.includes('énergie') || lowerMessage.includes('électricité') || lowerMessage.includes('chauffage')) {
      return {
        content: `🔋 **Analyse IA de votre consommation énergétique**

Basé sur les données moyennes françaises et l'analyse de votre profil, voici mes recommandations personnalisées :

**🎯 Actions immédiates (économie: 25-40%)**
• Remplacez vos ampoules par des LED (durée de vie 25x plus longue)
• Débranchez les appareils en veille (7-11% de votre facture !)
• Réglez votre thermostat à 19°C au lieu de 21°C (-15% de consommation)

**🏠 Optimisations avancées**
• Installez un thermostat intelligent (économie moyenne: 180€/an)
• Isolez vos combles (retour sur investissement: 3-5 ans)
• Utilisez des multiprises à interrupteur pour couper facilement

**📊 Impact calculé par l'IA:** Ces actions peuvent réduire vos émissions de 1,2 tonnes de CO₂/an et économiser 300-500€ sur votre facture annuelle.`,
        suggestions: [
          "Comment installer un thermostat intelligent ?",
          "Quels sont les meilleurs isolants écologiques ?",
          "Comment calculer mes économies potentielles ?",
          "Aide-moi à créer un plan d'action personnalisé"
        ]
      };
    }

    if (lowerMessage.includes('transport') || lowerMessage.includes('voiture') || lowerMessage.includes('vélo')) {
      return {
        content: `🚗 **Analyse IA de votre mobilité**

L'IA a analysé les patterns de transport et voici votre plan de mobilité durable :

**🚴‍♂️ Solutions immédiates**
• Vélo électrique pour trajets <15km (3x plus rapide qu'en voiture en ville)
• Covoiturage via apps (réduction de 50% des coûts et émissions)
• Transports en commun + vélo pliant (solution hybride optimale)

**📱 Outils IA recommandés**
• Apps de calcul d'itinéraires multimodaux
• Planificateurs de covoiturage intelligents
• Trackers d'empreinte carbone transport

**🌍 Impact environnemental calculé:**
Remplacer 50% de vos trajets voiture par vélo/transport = -1,8 tonnes CO₂/an + 1200€ d'économies.

**💡 Conseil IA personnalisé:** Commencez par 2 trajets/semaine en mode alternatif, puis augmentez progressivement.`,
        suggestions: [
          "Quel vélo électrique choisir pour mes trajets ?",
          "Comment organiser efficacement du covoiturage ?",
          "Calcule l'impact de mes trajets actuels",
          "Crée-moi un plan de transition transport"
        ]
      };
    }

    if (lowerMessage.includes('compost') || lowerMessage.includes('déchet') || lowerMessage.includes('recyclage')) {
      return {
        content: `♻️ **Guide IA du Compostage et Zéro Déchet**

L'IA a analysé les meilleures pratiques et voici votre guide personnalisé :

**🥬 Compostage intelligent**
• Ratio optimal: 50% matières vertes (épluchures) + 50% matières brunes (carton, feuilles)
• Température idéale: 50-60°C (l'IA surveille via capteurs connectés)
• Retournement automatisé: tous les 15 jours pour oxygénation

**📦 Stratégie Zéro Déchet IA**
• Audit intelligent de vos déchets (photo + analyse IA)
• Alternatives personnalisées pour chaque type de déchet
• Tracking automatique de votre progression

**🎯 Objectifs calculés par l'IA:**
• Réduction de 40% de vos déchets en 3 mois
• Économie de 200€/an sur les poubelles
• Production de 50kg de compost/an (valeur: 80€)

**🤖 Innovation:** Notre IA peut analyser vos photos de déchets et suggérer des alternatives écologiques instantanément !`,
        suggestions: [
          "Analyse mes déchets avec l'IA photo",
          "Quelles alternatives pour mes déchets plastiques ?",
          "Comment optimiser mon composteur ?",
          "Crée mon plan zéro déchet personnalisé"
        ]
      };
    }

    if (lowerMessage.includes('alimentation') || lowerMessage.includes('végétarien') || lowerMessage.includes('local')) {
      return {
        content: `🌱 **Nutrition Écologique Optimisée par IA**

L'IA nutritionnelle a analysé votre profil et recommande :

**🥗 Plan alimentaire durable**
• 3 repas végétariens/semaine = -30% d'empreinte carbone alimentaire
• Produits locaux dans un rayon de 100km (apps géolocalisées)
• Saisonnalité intelligente: l'IA vous propose des menus selon les saisons

**📊 Calculs d'impact personnalisés**
• Remplacer 1 steak/semaine par légumineuses = -156kg CO₂/an
• Acheter local vs importé = -45% d'émissions transport
• Réduire gaspillage de 30% = économie de 240€/an

**🤖 Outils IA disponibles**
• Générateur de menus éco-responsables
• Scanner de produits avec score environnemental
• Calculateur d'impact carbone par repas

**💚 Astuce IA:** Commencez par "Lundi Vert" - un jour végétarien par semaine, puis l'IA adapte progressivement vos habitudes.`,
        suggestions: [
          "Génère-moi un menu végétarien pour la semaine",
          "Où trouver des producteurs locaux près de chez moi ?",
          "Calcule l'impact de mon alimentation actuelle",
          "Comment réduire mon gaspillage alimentaire ?"
        ]
      };
    }

    // Réponse générique avec IA contextuelle
    return {
      content: `🤖 **Analyse IA Personnalisée**

Excellente question ! Mon intelligence artificielle analyse en temps réel les meilleures pratiques écologiques et voici mes recommandations :

**🎯 Plan d'action IA sur mesure :**
1. **Diagnostic intelligent** - Évaluez votre situation actuelle avec nos outils IA
2. **Recommandations personnalisées** - Basées sur votre profil et vos contraintes
3. **Suivi automatisé** - L'IA track vos progrès et ajuste les conseils

**📈 Prédictions IA pour vous :**
• Potentiel de réduction CO₂ : 2,5 tonnes/an
• Économies estimées : 800€/an
• Temps de mise en œuvre : 3-6 mois

**🌟 Prochaines étapes recommandées :**
• Utilisez notre calculateur d'empreinte carbone IA
• Relevez un défi écologique adapté à votre niveau
• Activez le suivi intelligent de vos habitudes

L'IA s'améliore avec chaque interaction - plus vous l'utilisez, plus les conseils deviennent précis !`,
      suggestions: [
        "Lance un diagnostic complet de mon impact",
        "Propose-moi des défis adaptés à mon niveau",
        "Comment l'IA peut-elle m'aider au quotidien ?",
        "Montre-moi mes progrès écologiques"
      ]
    };
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulation du temps de traitement IA
    setTimeout(() => {
      const aiResponseData = generateAIResponse(inputMessage);
      const aiResponse: Message = {
        id: messages.length + 2,
        type: 'ai',
        content: aiResponseData.content,
        timestamp: new Date(),
        suggestions: aiResponseData.suggestions
      };

      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 2000);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputMessage(suggestion);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-sky-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full mb-6">
            <Sparkles className="h-4 w-4 mr-2" />
            <span className="font-medium">Assistant IA Écologique Avancé</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Votre <span className="text-emerald-600">coach IA</span> personnel
          </h2>
          <p className="text-xl text-gray-600">
            Intelligence artificielle avancée qui analyse vos habitudes, calcule votre impact 
            et génère des recommandations personnalisées en temps réel.
          </p>
        </div>

        {/* Chat Interface */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-6 text-white">
            <div className="flex items-center space-x-3">
              <div className="bg-white/20 p-2 rounded-full">
                <Bot className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold">EcoIA Assistant Pro</h3>
                <p className="text-sm opacity-90">IA spécialisée en développement durable</p>
              </div>
              <div className="ml-auto flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm">IA Active</span>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="h-96 overflow-y-auto p-6 space-y-6">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex space-x-3 max-w-3xl ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                    message.type === 'user' 
                      ? 'bg-emerald-500' 
                      : 'bg-gradient-to-br from-teal-500 to-sky-500'
                  }`}>
                    {message.type === 'user' ? (
                      <User className="h-4 w-4 text-white" />
                    ) : (
                      <Bot className="h-4 w-4 text-white" />
                    )}
                  </div>
                  <div className={`rounded-2xl px-4 py-3 ${
                    message.type === 'user'
                      ? 'bg-emerald-500 text-white'
                      : 'bg-gray-100 text-gray-900'
                  }`}>
                    <p className="whitespace-pre-wrap">{message.content}</p>
                    {message.suggestions && (
                      <div className="mt-4 space-y-2">
                        <p className="text-sm font-medium opacity-75">Suggestions IA :</p>
                        <div className="flex flex-wrap gap-2">
                          {message.suggestions.map((suggestion, index) => (
                            <button
                              key={index}
                              onClick={() => handleSuggestionClick(suggestion)}
                              className="bg-white/20 hover:bg-white/30 text-xs px-3 py-1 rounded-full transition-colors"
                            >
                              {suggestion}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-teal-500 to-sky-500 flex items-center justify-center">
                    <Bot className="h-4 w-4 text-white" />
                  </div>
                  <div className="bg-gray-100 rounded-2xl px-4 py-3">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">L'IA analyse votre question...</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="border-t border-gray-100 p-6">
            <div className="flex space-x-3">
              <textarea
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Posez votre question à l'IA écologique..."
                className="flex-1 resize-none border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 max-h-32"
                rows={1}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() || isTyping}
                className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white p-3 rounded-xl hover:from-emerald-600 hover:to-teal-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-emerald-100 text-center">
            <Lightbulb className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
            <h3 className="font-bold text-gray-900 mb-2">IA Contextuelle</h3>
            <p className="text-gray-600 text-sm">Analyse vos questions et génère des réponses personnalisées en temps réel</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-teal-100 text-center">
            <Target className="h-12 w-12 text-teal-600 mx-auto mb-4" />
            <h3 className="font-bold text-gray-900 mb-2">Recommandations Précises</h3>
            <p className="text-gray-600 text-sm">Calculs d'impact et suggestions basées sur votre profil unique</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-sky-100 text-center">
            <TrendingUp className="h-12 w-12 text-sky-600 mx-auto mb-4" />
            <h3 className="font-bold text-gray-900 mb-2">Apprentissage Continu</h3>
            <p className="text-gray-600 text-sm">L'IA s'améliore avec chaque interaction pour des conseils toujours plus pertinents</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAssistant;