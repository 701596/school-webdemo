import React from 'react';
import { MapPin, Phone, Clock, Smartphone } from 'lucide-react';
import AdmissionForm from './AdmissionForm';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="pt-24 pb-12 relative border-t border-brand-sage/30">
      {/* Contact & Admissions Form Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column 1: Admissions Interest Form (lg:col-span-5) */}
          <div id="admissions" className="lg:col-span-5">
            <AdmissionForm />
          </div>

          {/* Column 2: Location, Address & Interactive Map (lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-8 flex flex-col justify-between h-full">
            
            {/* Location & Details Group */}
            <div className="space-y-6 text-left">
              <h3 className="text-2xl font-display font-bold text-brand-forest tracking-tight">
                Our Sopore Campus
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Address Info */}
                <a 
                  href="https://maps.app.goo.gl/KugpJd3YqSvkG5tR7" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-start gap-3.5 group cursor-pointer"
                >
                  <div className="w-9 h-9 rounded-lg bg-brand-sage/40 flex items-center justify-center text-brand-forest mt-0.5 border border-white/50 flex-shrink-0 shadow-sm group-hover:bg-[#F28482]/20 group-hover:text-[#F28482] transition-colors">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold text-brand-forest/40 uppercase tracking-wider mb-1 group-hover:text-[#F28482]/80 transition-colors">Campus Address</span>
                    <span className="text-sm font-semibold text-brand-forest/80 leading-relaxed block group-hover:text-brand-forest transition-colors">
                      Dangerpora Road, Sopore,<br />
                      Jammu and Kashmir 193201
                    </span>
                  </div>
                </a>

                {/* Timing hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-brand-sage/40 flex items-center justify-center text-brand-forest mt-0.5 border border-white/50 flex-shrink-0 shadow-sm">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold text-brand-forest/40 uppercase tracking-wider mb-1">Working Hours</span>
                    <span className="text-sm font-semibold text-brand-forest/80 leading-relaxed block">
                      Mon – Sat: 09:30 AM – 02:00 PM<br />
                      Sunday: Campus Closed
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded interactive Google Map with clean border */}
            <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden border border-brand-sage/30 shadow-md bg-brand-sand">
              <iframe
                title="Nova Kids Playschool Sopore Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3293.4182902344794!2d74.45524317631317!3d34.34110750247656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e10f411f0414e9%3A0xfd6aa4267ffeb7cd!2sNova+kids+playschool%2C+Dangerpora+Rd%2C+Sopore%2C+Jammu+and+Kashmir+193201!5e0!3m2!1sen!2sin!4v1718260000000!5m2!1sen!2sin"
                className="absolute inset-0 w-full h-full border-0 grayscale opacity-85 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Large Click-to-Call Dialer Block with Sand background */}
            <a 
              href="tel:06005080014"
              className="group flex flex-col md:flex-row items-center justify-between p-6 rounded-[24px] bg-brand-sand text-brand-forest hover:bg-brand-sand/90 transition-all border border-brand-sage/30 shadow-lg soft-hover-shadow hover:scale-[1.01]"
            >
              <div className="flex items-center gap-4 text-left">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-brand-forest border border-brand-sage/20 flex-shrink-0 shadow-sm">
                  <Phone className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <span className="block text-[9px] font-bold text-brand-forest/50 uppercase tracking-widest leading-none mb-1">Instant Registration Support</span>
                  <span className="block text-2xl font-display font-bold tracking-tight">+91 60050 80014</span>
                </div>
              </div>
              <div className="mt-4 md:mt-0 px-6 py-3 bg-brand-forest text-white rounded-full font-bold text-xs tracking-wider uppercase hover:bg-brand-forest/90 transition-colors border border-white/10 shadow-sm">
                Call Campus Now
              </div>
            </a>

            {/* Parent Portal App Download Block with Sage background */}
            <a 
              href="https://play.google.com/store/apps/details?id=com.axoneura.eduopus.parent&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col md:flex-row items-center justify-between p-6 rounded-[24px] bg-brand-sage/30 text-brand-forest hover:bg-brand-sage/50 transition-all border border-brand-sage/40 shadow-lg soft-hover-shadow hover:scale-[1.01]"
            >
              <div className="flex items-center gap-4 text-left">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-brand-forest border border-brand-sage/20 flex-shrink-0 shadow-sm">
                  <Smartphone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <span className="block text-[9px] font-bold text-brand-forest/50 uppercase tracking-widest leading-none mb-1">EduOpus Portal</span>
                  <span className="block text-xl font-display font-bold tracking-tight">Parent Portal App</span>
                  <p className="text-xs text-brand-forest/80 mt-0.5 max-w-sm">Track your child's attendance, activities, and daily announcements on Google Play.</p>
                </div>
              </div>
              <div className="mt-4 md:mt-0 px-6 py-3 bg-brand-forest text-white rounded-full font-bold text-xs tracking-wider uppercase hover:bg-brand-forest/90 transition-colors border border-white/10 shadow-sm flex items-center gap-1.5">
                <span>Download App</span>
                <span className="text-[10px]">→</span>
              </div>
            </a>

          </div>

        </div>
      </div>

      {/* Separator line */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="w-full h-[1px] bg-brand-sage/30" />
      </div>

      {/* Bottom Footer Credits */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Logo Text */}
        <div className="text-left flex items-center gap-3">
          <div className="w-10 h-10 rounded-full border border-brand-sage/60 flex items-center justify-center shadow-sm overflow-hidden bg-white">
            <img 
              src="/images/logo.png" 
              alt="Nova Kids Playschool Logo" 
              className="w-full h-full object-cover" 
            />
          </div>
          <div>
            <a href="#" className="font-display font-bold text-xl text-brand-forest">
              nova<span className="text-brand-coral">kids</span>
            </a>
            <span className="block text-xs text-brand-forest/50 mt-1 font-semibold">
              © {new Date().getFullYear()} Nova Kids Playschool. All rights reserved.
              <span className="mx-2">•</span>
              Powered by <a href="https://axoneura.in" target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-coral transition-colors">axoneura</a>
            </span>
          </div>
        </div>

        {/* Quick scroll links */}
        <div className="flex gap-8">
          <a href="#programs" className="text-xs font-bold text-brand-forest/60 hover:text-brand-forest transition-colors">Programs</a>
          <a href="#safety" className="text-xs font-bold text-brand-forest/60 hover:text-brand-forest transition-colors">Safety</a>
          <a href="#admissions" className="text-xs font-bold text-brand-forest/60 hover:text-brand-forest transition-colors">Admissions</a>
          <a href="#contact" className="text-xs font-bold text-brand-forest/60 hover:text-brand-forest transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
