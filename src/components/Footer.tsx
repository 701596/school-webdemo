import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#004d61] text-[#cbd5e1] pt-16 pb-8 border-t border-[#f0ad00]/20 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          
          {/* Column 1: Logo & Info */}
          <div className="space-y-6">
            <div className="foot-logo">
              <Link to="/" onClick={handleScrollToTop} className="flex items-center gap-2">
                <img 
                  src="/logo.png" 
                  alt="Genius Public School" 
                  className="h-16 w-auto max-h-[64px] object-contain invert brightness-0"
                />
                <div className="flex flex-col text-left">
                  <span className="font-sans font-extrabold text-white leading-none text-base tracking-tight sm:text-lg">
                    GENIUS
                  </span>
                  <span className="font-sans text-[10px] text-[#f0ad00] font-bold uppercase tracking-wider mt-0.5">
                    PUBLIC SCHOOL
                  </span>
                </div>
              </Link>
            </div>
            <p className="text-sm leading-relaxed text-gray-300">
              Nurturing future leaders with innovation and care. A safe, secure, and modern place for your child to grow and excel.
            </p>
            <div className="flex items-center gap-4 text-white text-lg">
              <a 
                href="https://www.instagram.com/genius_public_school___?igsh=MXM0Y2hsaXV0anppaw==" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-[#f0ad00] transition-colors"
                aria-label="Instagram Link"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a 
                href="https://wa.me/912612899533" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-[#f0ad00] transition-colors"
                aria-label="WhatsApp Link"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-2 text-xs text-gray-300 bg-white/10 px-3 py-1.5 rounded-lg border border-white/5">
                <i className="ri-shield-check-fill text-[#f0ad00]"></i> <span>SSL Secured</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-300 bg-white/10 px-3 py-1.5 rounded-lg border border-white/5">
                <i className="ri-lock-2-fill text-[#f0ad00]"></i> <span>Safe Campus</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-6">
            <h4 className="text-white font-extrabold text-lg tracking-wide relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-[3px] after:bg-[#f0ad00]">
              Quick Links
            </h4>
            <div className="flex flex-col space-y-3.5 text-sm">
              <Link to="/about" onClick={handleScrollToTop} className="hover:text-white hover:translate-x-1 transition-all duration-200 block">
                About Us
              </Link>
              <Link to="/admissions" onClick={handleScrollToTop} className="hover:text-white hover:translate-x-1 transition-all duration-200 block">
                Admissions
              </Link>
              <Link to="/academics" onClick={handleScrollToTop} className="hover:text-white hover:translate-x-1 transition-all duration-200 block">
                Academics & Faculty
              </Link>
              <Link to="/gallery" onClick={handleScrollToTop} className="hover:text-white hover:translate-x-1 transition-all duration-200 block">
                School Gallery
              </Link>
            </div>
          </div>

          {/* Column 3: Support */}
          <div className="space-y-6">
            <h4 className="text-white font-extrabold text-lg tracking-wide relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-[3px] after:bg-[#f0ad00]">
              Support Portals
            </h4>
            <div className="flex flex-col space-y-3.5 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-gray-400">Parent Portal</span>
                <span className="bg-[#f39c12] text-white text-[8px] px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                  Soon
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-400">Student Login</span>
                <span className="bg-[#f39c12] text-white text-[8px] px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                  Soon
                </span>
              </div>
              <Link to="/contact" onClick={handleScrollToTop} className="hover:text-white hover:translate-x-1 transition-all duration-200 block">
                Contact Us
              </Link>
              <Link to="/about" onClick={handleScrollToTop} className="hover:text-white hover:translate-x-1 transition-all duration-200 block">
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* Column 4: Contact */}
          <div className="space-y-6">
            <h4 className="text-white font-extrabold text-lg tracking-wide relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-[3px] after:bg-[#f0ad00]">
              Contact Details
            </h4>
            <div className="space-y-4 text-sm leading-relaxed">
              <div className="flex items-start gap-2.5">
                <i className="ri-map-pin-line text-[#f0ad00] text-lg shrink-0 mt-0.5"></i>
                <p>
                  141/142, Karmayogi Society 1, <br />
                  Opposite Kavita Hospital, Piyush Point, <br />
                  Pandesara, Surat, Gujarat - 394221
                </p>
              </div>
              <div className="flex items-center gap-2.5">
                <i className="ri-phone-line text-[#f0ad00] text-lg shrink-0"></i>
                <a href="tel:+912612899533" className="hover:text-white transition-colors">
                  +91 261 289 9533
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <i className="ri-mail-line text-[#f0ad00] text-lg shrink-0"></i>
                <a href="mailto:geniuspublicschool15@gmail.com" className="hover:text-white transition-colors truncate">
                  geniuspublicschool15@gmail.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p className="text-center sm:text-left">
            © {currentYear} Genius Public School, Pandesara, Surat. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link to="/contact" onClick={handleScrollToTop} className="hover:text-white">Visit Campus</Link>
            <Link to="/admissions" onClick={handleScrollToTop} className="hover:text-white">Apply Now</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
