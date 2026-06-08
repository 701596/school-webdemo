import React, { useState } from 'react';

export const WhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  // Auto-hide tooltip after 10 seconds
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-55 flex items-center gap-3">
      {/* Tooltip */}
      {showTooltip && (
        <div className="bg-[#1a3a6e] border border-[#f6c90e]/30 text-white text-xs px-3.5 py-2 rounded-xl shadow-lg relative max-w-[200px] text-right font-medium animate-bounce hidden sm:block">
          <span className="block text-[#f6c90e] font-bold">Have Questions?</span>
          Chat with Admissions!
          <button 
            onClick={() => setShowTooltip(false)}
            className="absolute -top-1 -right-1 bg-white/10 hover:bg-white/25 text-white rounded-full w-4 h-4 flex items-center justify-center text-[9px] font-bold cursor-pointer"
          >
            ×
          </button>
        </div>
      )}

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/912612899533"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25d366] hover:bg-[#20ba5a] text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group relative flex items-center justify-center border-2 border-white/20 animate-pulse hover:animate-none"
        aria-label="Contact Genius Public School on WhatsApp"
        onClick={() => setShowTooltip(false)}
      >
        {/* WhatsApp Icon (using message icon or a SVG for authentic WhatsApp representation) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 sm:w-7 h-7"
        >
          <path d="M12.012 2c-5.506 0-9.988 4.482-9.988 9.988 0 1.76.46 3.41 1.26 4.852L2 22l5.348-1.401c1.396.762 2.986 1.196 4.673 1.196 5.505 0 9.987-4.482 9.987-9.988C22 6.482 17.518 2 12.012 2zm.006 16.326c-1.58 0-3.065-.427-4.354-1.173l-.312-.181-3.238.85.865-3.158-.2-.318c-.818-1.303-1.252-2.825-1.252-4.417 0-4.526 3.682-8.207 8.207-8.207 4.527 0 8.209 3.681 8.209 8.207 0 4.527-3.682 8.207-8.207 8.207-.021 0-.012 0-.021.001zm4.498-6.143c-.246-.123-1.458-.72-1.685-.802-.227-.082-.392-.123-.556.123-.165.247-.639.802-.783.967-.144.165-.289.186-.536.062-.247-.124-1.042-.384-1.984-1.225-.733-.654-1.228-1.462-1.372-1.71-.144-.247-.015-.38.109-.503.111-.11.247-.289.371-.433.123-.144.165-.247.247-.412.083-.165.042-.31-.02-.433-.062-.124-.556-1.339-.762-1.833-.2-.485-.402-.42-.556-.427-.144-.007-.31-.007-.474-.007-.165 0-.433.062-.659.31-.227.247-.866.845-.866 2.06 0 1.216.886 2.39 1.01 2.555.124.165 1.743 2.662 4.223 3.73.59.254 1.05.406 1.41.52.593.189 1.133.162 1.558.099.474-.072 1.458-.597 1.664-1.174.207-.577.207-1.071.144-1.174-.061-.103-.226-.165-.472-.288z" />
        </svg>
      </a>
    </div>
  );
};
