import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Expertise3D from './components/Expertise3D';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-200 selection:text-blue-900">
      <Header />
      <main>
        <Hero />
        <Services />
        <Expertise3D />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}

export default App;
