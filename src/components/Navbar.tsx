import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Academics', path: '/academics' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="w-full z-50">
      {/* Top Bar (Desktop Only) */}
      <div className="hidden md:block bg-[#004d61] text-white text-xs py-2.5 font-medium border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="mailto:geniuspublicschool15@gmail.com" className="hover:text-[#f0ad00] transition-colors flex items-center gap-2">
              <i className="fas fa-envelope"></i> geniuspublicschool15@gmail.com
            </a>
            <a href="tel:+912612899533" className="hover:text-[#f0ad00] transition-colors flex items-center gap-2">
              <i className="fas fa-phone"></i> +91 261 289 9533
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="https://www.instagram.com/genius_public_school___?igsh=MXM0Y2hsaXV0anppaw==" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[#f0ad00] transition-colors text-sm"
              aria-label="Genius Public School Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a 
              href="https://wa.me/912612899533" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[#f0ad00] transition-colors text-sm"
              aria-label="Genius Public School WhatsApp"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <nav className="w-full sticky top-0 bg-white shadow-md z-[1000] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo (Left) */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center gap-2">
                <img 
                  src="/logo.png" 
                  alt="Genius Public School Logo" 
                  className="h-16 w-auto max-h-[64px] object-contain" 
                  onError={(e) => {
                    // Fallback in case png is missing or broken
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="flex flex-col text-left">
                  <span className="font-sans font-extrabold text-[#004d61] leading-none text-base tracking-tight sm:text-lg">
                    GENIUS
                  </span>
                  <span className="font-sans text-[10px] text-[#f0ad00] font-bold uppercase tracking-wider mt-0.5">
                    PUBLIC SCHOOL
                  </span>
                </div>
              </Link>
            </div>

            {/* Navigation Links (Center) */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-bold tracking-wide transition-colors duration-250 ${
                    isActive(link.path)
                      ? 'text-[#004d61] border-b-2 border-[#f0ad00] pb-1'
                      : 'text-[#264653] hover:text-[#004d61] pb-1'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Admissions Button (Right) */}
            <div className="hidden lg:flex items-center">
              <Link
                to="/admissions"
                className="bg-[#f0ad00] hover:bg-[#d49a00] text-white font-extrabold text-sm px-6 py-3 rounded-full shadow-lg shadow-[#f0ad00]/25 transition-all duration-300 hover:-translate-y-0.5"
              >
                Admissions Open
              </Link>
            </div>

            {/* Mobile menu toggle */}
            <div className="flex lg:hidden items-center gap-4">
              <Link
                to="/admissions"
                className="bg-[#f0ad00] text-white font-extrabold text-xs px-4 py-2.5 rounded-full shadow-md shadow-[#f0ad00]/15"
              >
                Apply
              </Link>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-[#004d61] hover:text-[#f0ad00] transition-colors focus:outline-none p-1"
                aria-label="Toggle menu"
              >
                <i className={`ri-${isOpen ? 'close-line' : 'menu-3-line'} text-2xl`}></i>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`lg:hidden fixed left-0 w-full bg-white transition-all duration-500 ease-in-out z-[900] shadow-xl border-t border-gray-150 overflow-hidden flex flex-col justify-between ${
            isOpen 
              ? 'opacity-100 visible translate-y-0 top-[72px] h-[calc(100vh-72px)]' 
              : 'opacity-0 invisible -translate-y-4 top-[72px] h-0'
          }`}
        >
          <div className="px-6 py-8 space-y-3.5 flex flex-col items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block text-center text-lg font-bold tracking-wide w-full py-2.5 rounded-xl transition-all ${
                  isActive(link.path)
                    ? 'bg-[#004d61]/5 text-[#004d61] border-l-4 border-[#f0ad00]'
                    : 'text-[#264653] hover:bg-slate-50 hover:text-[#004d61]'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="px-8 pb-24 text-center">
            <Link
              to="/admissions"
              className="block bg-[#f0ad00] hover:bg-[#d49a00] text-white font-extrabold py-4 rounded-full shadow-lg text-center"
            >
              Admissions Open 2025-26
            </Link>
            <div className="mt-4 text-xs text-gray-500 font-medium">
              Call us: +91 261 289 9533
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
