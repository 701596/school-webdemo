import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Metrics from './components/Metrics';
import Programs from './components/Programs';
import Safety from './components/Safety';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import AdmissionModal from './components/AdmissionModal';

const App: React.FC = () => {
  const [isAdmissionModalOpen, setIsAdmissionModalOpen] = useState(false);

  const handleOpenAdmission = () => {
    setIsAdmissionModalOpen(true);
  };

  const handleCloseAdmission = () => {
    setIsAdmissionModalOpen(false);
  };

  return (
    <div className="min-h-screen text-brand-forest font-sans antialiased selection:bg-brand-coral/20 selection:text-brand-forest">
      {/* Navigation Bar */}
      <Navbar onOpenAdmission={handleOpenAdmission} />

      {/* Main Content Area */}
      <main>
        <Hero onOpenAdmission={handleOpenAdmission} />
        <Metrics />
        <Programs />
        <Safety />
      </main>

      {/* Footer & Contact info */}
      <Footer />

      {/* Floating CTA Button */}
      <WhatsAppButton />

      {/* Admission Enquiry Modal */}
      <AdmissionModal isOpen={isAdmissionModalOpen} onClose={handleCloseAdmission} />
    </div>
  );
};

export default App;
