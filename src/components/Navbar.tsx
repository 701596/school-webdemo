import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { smoothScrollTo } from '../utils/scroll';

interface NavbarProps {
  onOpenAdmission: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenAdmission }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const leftLinks: { label: string; href: string; target?: string; rel?: string }[] = [
    { label: 'Programs', href: '#programs' },
    { label: 'Safety', href: '#safety' },
  ];

  const rightLinks: { label: string; href: string; target?: string; rel?: string }[] = [
    { label: 'Admissions', href: '#admissions' },
    { 
      label: 'Parent App', 
      href: 'https://play.google.com/store/apps/details?id=com.axoneura.eduopus.parent&pcampaignid=web_share',
      target: '_blank',
      rel: 'noopener noreferrer'
    },
    { label: 'Contact', href: '#contact' },
  ];

  // Helper logo component to avoid duplication
  const Logo = () => (
    <a href="#" className="flex items-center gap-2.5 px-1 group">
      <div className="w-10 h-10 rounded-full border border-white/50 flex items-center justify-center shadow-sm relative overflow-hidden group-hover:rotate-6 transition-transform duration-300 bg-[#FFE8D6]/85 backdrop-blur-sm">
        <img 
          src="/images/logo.png" 
          alt="Nova Kids Playschool Logo" 
          className="w-full h-full object-cover" 
        />
      </div>
      <span className="font-display font-bold text-lg tracking-tight text-brand-forest">
        nova<span className="text-brand-coral">kids</span>
      </span>
    </a>
  );

  return (
    <nav className="sticky top-0 left-0 w-full z-50 pointer-events-none">
      <div className={`w-full transition-all duration-300 pointer-events-auto border-b ${
        scrolled 
          ? 'bg-[#FFE8D6]/95 backdrop-blur-lg py-2 shadow-md border-[#FFE8D6]/40' 
          : 'bg-[#FFE8D6]/90 backdrop-blur-md py-3.5 shadow-sm border-[#FFE8D6]/20'
      }`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Logo on the Left */}
          <Logo />

          {/* Desktop Right Links + Button */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {[...leftLinks, ...rightLinks].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.target}
                rel={link.rel}
                onClick={(e) => {
                  if (link.href === '#admissions') {
                    e.preventDefault();
                    onOpenAdmission();
                  } else if (link.href.startsWith('#')) {
                    e.preventDefault();
                    smoothScrollTo(link.href);
                  }
                }}
                className="text-xs lg:text-sm font-semibold text-brand-forest/80 hover:text-brand-forest hover:underline underline-offset-4 decoration-2 decoration-brand-coral transition-all"
              >
                {link.label}
              </a>
            ))}
            
            {/* Call Campus Button */}
            <a
              href="tel:06005080014"
              className="inline-flex items-center gap-1.5 bg-brand-forest hover:bg-brand-forest/90 text-white font-bold text-xs px-5 py-2.5 rounded-full transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] shadow-sm"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Campus</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-forest focus:outline-none hover:bg-brand-sage/20 p-2 rounded-xl transition-all"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      <div className={`md:hidden absolute top-[calc(100%+8px)] left-4 right-4 bg-[#FFE8D6]/95 backdrop-blur-lg border border-[#FFE8D6]/40 rounded-[24px] overflow-hidden transition-all duration-300 ease-in-out pointer-events-auto ${
        isOpen ? 'opacity-100 translate-y-0 visible shadow-md' : 'opacity-0 -translate-y-4 invisible pointer-events-none'
      }`}>
        <div className="px-6 py-6 flex flex-col space-y-4 text-left">
          {[...leftLinks, ...rightLinks].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.target}
              rel={link.rel}
              onClick={(e) => {
                setIsOpen(false);
                if (link.href === '#admissions') {
                  e.preventDefault();
                  onOpenAdmission();
                } else if (link.href.startsWith('#')) {
                  e.preventDefault();
                  setTimeout(() => {
                    smoothScrollTo(link.href);
                  }, 250);
                }
              }}
              className="text-base font-bold text-brand-forest py-2 border-b border-brand-sage/20 last:border-0 hover:text-brand-coral transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:06005080014"
            onClick={() => setIsOpen(false)}
            className="inline-flex items-center justify-center gap-2 w-full bg-brand-forest hover:bg-brand-forest/90 text-white font-bold py-3 rounded-xl transition-all duration-300 shadow-sm"
          >
            <Phone className="w-4 h-4" />
            <span>Call Campus</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

