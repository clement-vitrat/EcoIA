import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CarbonCalculator from './components/CarbonCalculator';
import Challenges from './components/Challenges';
import EcoGame from './components/EcoGame';
import AIAssistant from './components/AIAssistant';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <CarbonCalculator />
      <Challenges />
      <EcoGame />
      <AIAssistant />
      <Footer />
    </div>
  );
}

export default App;