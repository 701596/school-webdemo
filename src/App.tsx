import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Metrics from './components/Metrics';
import Programs from './components/Programs';
import Safety from './components/Safety';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  return (
    <div className="min-h-screen text-brand-forest font-sans antialiased selection:bg-brand-coral/20 selection:text-brand-forest">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content Area */}
      <main>
        <Hero />
        <Metrics />
        <Programs />
        <Safety />
      </main>

      {/* Footer & Contact info */}
      <Footer />

      {/* Floating CTA Button */}
      <WhatsAppButton />
    </div>
  );
};

export default App;
