import React from 'react';
import { ShieldAlert, Video, Heart, HelpCircle } from 'lucide-react';

const Safety: React.FC = () => {
  const safetyFeatures = [
    {
      icon: <Video className="w-5 h-5 text-brand-forest" />,
      title: "24/7 CCTV Monitoring",
      description: "Continuous real-time surveillance across all play spaces, classrooms, and corridors."
    },
    {
      icon: <ShieldAlert className="w-5 h-5 text-brand-forest" />,
      title: "Child-Safe Interiors",
      description: "Soft rounded furniture corners, wall cushioning, anti-slip flooring, and organic non-toxic toys."
    },
    {
      icon: <Heart className="w-5 h-5 text-brand-forest" />,
      title: "Trained First-Aid Staff",
      description: "Every teacher and assistant is certified in pediatric first-aid, CPR, and emergency protocols."
    },
    {
      icon: <HelpCircle className="w-5 h-5 text-brand-forest" />,
      title: "Access Control Gate",
      description: "Gated entry point requiring ID check matching parent records for student pickups."
    }
  ];

  return (
    <section id="safety" className="py-24 bg-brand-sand relative border-b border-brand-sage/30 z-10">
      
      {/* Wave top divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none -translate-y-[98%] pointer-events-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16 fill-brand-sand">
          <path d="M0,0 C300,90 600,10 900,80 C1050,110 1150,100 1200,120 L1200,120 L0,120 Z" />
        </svg>
      </div>

      {/* Wave bottom divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none translate-y-[98%] pointer-events-none z-20">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16 fill-brand-sand rotate-180">
          <path d="M0,0 C300,90 600,10 900,80 C1050,110 1150,100 1200,120 L1200,120 L0,120 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Safety Details */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4 text-left">
              <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white text-brand-forest border border-brand-sage shadow-sm">
                <span className="text-[10px] font-bold uppercase tracking-widest">Safety First</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-forest tracking-tight leading-tight">
                Our Non-Negotiable <br />Standard of Care
              </h2>
              <p className="text-sm sm:text-base text-brand-forest/80 leading-relaxed font-semibold">
                We believe learning happens best when children feel completely secure. Every corner, protocol, and design element at our Sopore campus is crafted to protect and nurture your little one.
              </p>
            </div>

            {/* Feature Cards Grid (Soft shadow style, borderless) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {safetyFeatures.map((feat, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-3xl border-0 shadow-lg hover:translate-y-[-2px] transition-transform duration-300 flex flex-col items-start space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-sage/40 flex items-center justify-center text-brand-forest shadow-sm">
                    {feat.icon}
                  </div>
                  <h4 className="font-display font-bold text-base text-brand-forest">
                    {feat.title}
                  </h4>
                  <p className="text-xs text-brand-forest/70 leading-normal font-semibold">
                    {feat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Campus Video Embed (Instagram Reel) */}
          <div className="lg:col-span-6 flex flex-col justify-center items-center">
            
            {/* ATTACH CAMPUS VIDEO ASSET: Insert 29-second overview video element here */}
            <div className="relative w-full max-w-[340px] h-[490px] rounded-[36px] overflow-hidden shadow-xl bg-white p-2.5 border border-brand-sage/20">
              <div className="w-full h-full rounded-[26px] overflow-hidden bg-brand-forest relative">
                <iframe
                  src="https://www.instagram.com/reel/DZUxpHLJCi_/embed"
                  className="w-full h-full border-0"
                  allowFullScreen={true}
                  scrolling="no"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  title="Nova Kids Playschool Instagram Reel Overview"
                />
              </div>
            </div>
            
            {/* Caption */}
            <span className="text-xs text-brand-forest/60 font-bold mt-5 text-center block max-w-xs leading-relaxed">
              * Watch the 29-second campus tour and classroom environment overview on Instagram
            </span>

          </div>

        </div>

        {/* Campus Facilities Sub-Gallery (Soft Polaroids) */}
        <div className="mt-24 pt-16 border-t border-brand-sage/30 text-center">
          <div className="max-w-2xl mx-auto mb-12 space-y-3">
            <h3 className="text-2.5xl font-display font-bold text-brand-forest">
              Our Secure Outdoor Campus
            </h3>
            <p className="text-sm text-brand-forest/70 font-semibold">
              Designed with spacious green lawns, secure child play areas, and child-safe boundary parameters.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Polaroid Photo 1 */}
            <div className="group relative bg-white p-4 border-0 rounded-[32px] shadow-lg -rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-brand-sand relative shadow-sm">
                <img 
                  src="/images/campus-lawn.png" 
                  alt="Outdoor Grass Playing Lawn" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" 
                />
              </div>
              <div className="mt-4 text-left px-2">
                <span className="block text-base font-display font-bold text-brand-forest">Outdoor Grass Play Lawn</span>
                <span className="block text-xs text-brand-forest/60 mt-1.5 font-semibold">Spacious gated field with child-sized furniture</span>
              </div>
            </div>
            
            {/* Polaroid Photo 2 */}
            <div className="group relative bg-white p-4 border-0 rounded-[32px] shadow-lg rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-brand-sand relative shadow-sm">
                <img 
                  src="/images/campus-courtyard.png" 
                  alt="Courtyard Playground Equipment" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" 
                />
              </div>
              <div className="mt-4 text-left px-2">
                <span className="block text-base font-display font-bold text-brand-forest">Courtyard Play Facilities</span>
                <span className="block text-xs text-brand-forest/60 mt-1.5 font-semibold">Safe swings, slides, and secure perimeter boundaries</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Safety;
