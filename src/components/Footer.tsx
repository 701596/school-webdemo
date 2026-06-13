import React, { useState } from 'react';
import { MapPin, Phone, Clock, Send, Sparkles, Smartphone } from 'lucide-react';

const Footer: React.FC = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    childAge: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.parentName && formData.phone) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ parentName: '', childName: '', childAge: '', phone: '', message: '' });
      }, 5000);
    }
  };

  return (
    <footer id="contact" className="pt-24 pb-12 relative border-t border-brand-sage/30">
      {/* Contact & Admissions Form Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column 1: Admissions Interest Form (lg:col-span-5) */}
          <div id="admissions" className="lg:col-span-5 bg-white p-8 rounded-[32px] border-0 shadow-lg soft-card-shadow">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-brand-coral animate-pulse" />
              <h3 className="text-xl font-display font-bold text-brand-forest">
                Admissions Enquiry
              </h3>
            </div>

            {submitted ? (
              <div className="bg-brand-sage/20 border border-brand-sage/40 p-6 rounded-2xl text-center space-y-3">
                <span className="block text-xl font-bold text-brand-forest font-display">Enquiry Submitted!</span>
                <p className="text-sm text-brand-forest/80">
                  Thank you for registering your interest. Our Sopore campus team will contact you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <div>
                  <label className="block text-[10px] font-bold text-brand-forest/50 uppercase tracking-wider mb-1.5">Parent's Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-brand-sage/40 bg-brand-sand/30 text-brand-forest text-sm font-semibold focus:outline-none focus:bg-white focus:ring-2 focus:ring-brand-coral/20 transition-all"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold text-brand-forest/50 uppercase tracking-wider mb-1.5">Child's Name</label>
                    <input
                      type="text"
                      value={formData.childName}
                      onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-brand-sage/40 bg-brand-sand/30 text-brand-forest text-sm font-semibold focus:outline-none focus:bg-white focus:ring-2 focus:ring-brand-coral/20 transition-all"
                      placeholder="Name"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-brand-forest/50 uppercase tracking-wider mb-1.5">Child's Age</label>
                    <select
                      value={formData.childAge}
                      onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-brand-sage/40 bg-brand-sand/30 text-brand-forest text-sm font-semibold focus:outline-none focus:bg-white focus:ring-2 focus:ring-brand-coral/20 transition-all"
                    >
                      <option value="">Select Age</option>
                      <option value="2-3">2 - 3 Years</option>
                      <option value="3-4">3 - 4 Years</option>
                      <option value="4-5">4 - 5 Years</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-brand-forest/50 uppercase tracking-wider mb-1.5">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-brand-sage/40 bg-brand-sand/30 text-brand-forest text-sm font-semibold focus:outline-none focus:bg-white focus:ring-2 focus:ring-brand-coral/20 transition-all"
                    placeholder="Mobile number"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-brand-forest/50 uppercase tracking-wider mb-1.5">Message / Notes</label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-brand-sage/40 bg-brand-sand/30 text-brand-forest text-sm font-semibold focus:outline-none focus:bg-white focus:ring-2 focus:ring-brand-coral/20 transition-all resize-none"
                    placeholder="Any specific queries..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-brand-forest hover:bg-brand-forest/90 text-white font-bold py-3.5 rounded-xl transition-all duration-300 shadow-md shadow-brand-forest/10 hover:scale-[1.01]"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry</span>
                </button>
              </form>
            )}
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
