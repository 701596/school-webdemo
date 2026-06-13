import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Branded Floating Action Circle */}
      <a
        href="https://wa.me/916005080014"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-[#1E352F] hover:bg-[#F28482] text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 group border border-white/10"
        aria-label="Chat with Nova Kids Playschool on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </a>
    </div>
  );
};

export default WhatsAppButton;
