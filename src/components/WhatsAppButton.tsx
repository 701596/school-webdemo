import React, { useEffect, useState } from 'react';

const WhatsAppButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setShowTooltip(true);
      }, 1500);
      return () => clearTimeout(timer);
    } else {
      setShowTooltip(false);
    }
  }, [isVisible]);

  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-all duration-500 transform flex items-center ${
      isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-75 pointer-events-none'
    }`}>
      {/* Premium Tooltip Speech Bubble */}
      <a
        href="https://wa.me/916005080014"
        target="_blank"
        rel="noopener noreferrer"
        className={`absolute right-16 mr-3 bg-[#1E352F] text-white text-[11px] font-bold px-3.5 py-2 rounded-xl shadow-xl flex items-center gap-2 whitespace-nowrap transition-all duration-500 border border-white/5 select-none hover:scale-105 active:scale-95 cursor-pointer ${
          showTooltip ? 'opacity-100 translate-x-0 pointer-events-auto' : 'opacity-0 translate-x-4 pointer-events-none'
        } after:content-[''] after:absolute after:top-1/2 after:right-[-6px] after:-translate-y-1/2 after:border-l-[6px] after:border-l-[#1E352F] after:border-y-[6px] after:border-y-transparent`}
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25D366]"></span>
        </span>
        <span>Questions? Chat with us!</span>
      </a>

      {/* Branded Floating Action Circle with Sonar Waves & Periodic Wiggle */}
      <a
        href="https://wa.me/916005080014"
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 bg-gradient-to-tr from-[#128C7E] to-[#25D366] text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-115 active:scale-90 group border border-white/10 animate-wiggle-periodic cursor-pointer"
        aria-label="Chat with Nova Kids Playschool on WhatsApp"
      >
        {/* Sonar Rings */}
        <div className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none z-[-1] [animation-duration:2.5s]" />
        <div className="absolute inset-0 rounded-full bg-[#25D366]/20 animate-ping pointer-events-none z-[-1] [animation-duration:4s]" />

        {/* Official FontAwesome WhatsApp SVG Icon */}
        <svg 
          viewBox="0 0 448 512" 
          className="w-7 h-7 fill-white transition-transform duration-300 group-hover:rotate-6 drop-shadow-md"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L3 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
        </svg>
      </a>
    </div>
  );
};

export default WhatsAppButton;
