import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden grid-paper border-b border-brand-sage/30">
      
      {/* Hand-drawn Vector Doodles in their exact positions */}

      {/* Red Star Doodle on the left grid background next to the text */}
      <div className="absolute left-10 md:left-24 top-24 text-[#F28482] pointer-events-none animate-pulse z-10">
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      </div>

      {/* Cloud outline at bottom-left */}
      <div className="absolute left-12 bottom-12 text-brand-forest/10 pointer-events-none hidden lg:block">
        <svg className="w-16 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M17.5 19A3.5 3.5 0 0 0 21 15.5c0-2.79-3.21-4.5-5.5-4.5-.42-1.79-2-3-4-3-2.3 0-4.22 1.66-4.5 4-2 .5-3.5 2.22-3.5 4.5A3.5 3.5 0 0 0 7 20h10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Headline, Badge, Text, CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-8">
            
            {/* Pulsed Badge with Yellow Avatar Icon */}
            <div className="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full bg-[#F28482]/15 text-[#1E352F] font-display font-bold text-[10px] sm:text-xs uppercase tracking-wider animate-pulse-subtle">
              <div className="w-4.5 h-4.5 rounded-full bg-[#E2B56A] flex items-center justify-center text-white overflow-hidden shadow-sm">
                <svg className="w-2.5 h-2.5 text-[#1E352F]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <span>Admissions Open for 2026 • Sopore, J&K</span>
            </div>

            {/* Main Headline in Chillax with exact spelling & wrapping */}
            <h1 className="text-5xl lg:text-[64px] font-black tracking-tight text-[#1E352F] leading-[1.08] max-w-2xl font-display">
              Where early curiosity <br />
              meets <span className="text-[#F28482]">safe, modern</span> <br />
              foundaton.
            </h1>

            {/* Supporting Paragraph - Restored to match image */}
            <p className="text-base sm:text-lg text-brand-forest/80 max-w-xl leading-relaxed font-semibold">
              At Nova Kids, early curiosity meets a secure and creative environment. We build a joyful playground where kids explore, play, and build life confidence in the heart of Sopore.
            </p>

            {/* Soft CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5 w-full sm:w-auto">
              <a
                href="#admissions"
                className="inline-flex items-center justify-center gap-3 bg-[#1E352F] hover:bg-[#1E352F]/90 text-white font-bold text-sm px-7 py-4 rounded-full transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-md shadow-[#1E352F]/10 group"
              >
                <span>Get Admission</span>
                <span className="w-5 h-5 rounded-full bg-white text-[#1E352F] flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                  <ArrowRight className="w-3 h-3" />
                </span>
              </a>
              <a
                href="#programs"
                className="inline-flex items-center justify-center gap-2 bg-transparent hover:text-brand-coral text-[#1E352F] font-bold text-sm px-6 py-4 transition-colors"
              >
                <span>Explore Programs</span>
              </a>
            </div>
          </div>

          {/* Right Column: Layered Organic Collage (Mockup Style) */}
          <div className="lg:col-span-5 flex justify-center items-center relative mt-10 lg:mt-0">
            <div className="relative w-full max-w-[480px] h-[450px] flex items-center justify-center">
              
              {/* Layer 1: Salmon/Coral Organic Wavy Background Shape */}
              <div className="absolute right-0 bottom-4 w-[360px] h-[300px] bg-[#F28482] rounded-[40%_60%_70%_30%_/_45%_40%_60%_55%] z-0" />

              {/* Layer 2: Left Circular Campus Lawn Image */}
              <div className="absolute left-0 bottom-12 w-[220px] h-[220px] rounded-full overflow-hidden border-4 border-white shadow-lg z-20 bg-white">
                <img 
                  src="/images/campus-lawn.png" 
                  alt="Outdoor Grass Playing Lawn" 
                  className="w-full h-full object-cover" 
                />
              </div>

              {/* Layer 3: Center Arched Active Learning Card */}
              <div className="absolute left-[165px] top-6 w-[170px] aspect-[3/4] overflow-hidden rounded-t-[100px] rounded-b-[20px] bg-white shadow-xl border border-white/60 -rotate-3 transition-transform duration-500 hover:-rotate-1 group z-10">
                <img 
                  src="/images/sensory-exploration.jpg" 
                  alt="Active classroom learning activity" 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex flex-col items-center justify-end h-20 text-white">
                  <span className="text-[9px] font-bold font-display uppercase tracking-wider">ACTIVE LEARNING</span>
                </div>
              </div>

              {/* Layer 4: Right Arched Sensory Exploration Card */}
              <div className="absolute right-0 bottom-6 w-[175px] aspect-[3/4] overflow-hidden rounded-t-[100px] rounded-b-[20px] bg-white shadow-xl border border-white/60 rotate-3 transition-transform duration-500 hover:rotate-1 group z-30">
                <img 
                  src="/images/classroom-math.png" 
                  alt="Sensory play exploration" 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex flex-col items-center justify-end h-20 text-white">
                  <span className="text-[9px] font-bold font-display uppercase tracking-wider text-[#F28482]">SENSORY EXPLORATION</span>
                </div>
              </div>

              {/* Doodle: Green Hand outline next to center card */}
              <div className="absolute left-[120px] top-[115px] text-[#5FA86E] z-30 pointer-events-none animate-wave">
                <svg className="w-9 h-9" viewBox="0 0 24 24" fill="rgba(95,168,110,0.15)" stroke="currentColor" strokeWidth="1.8">
                  <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5M14 10V5a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v6.5M6 12V9.5a1.5 1.5 0 0 0-1.5-1.5v0A1.5 1.5 0 0 0 3 9.5v6.5c0 4.5 3.5 8 8 8h2c4 0 7-3 7-7v-5.5a1.5 1.5 0 0 0-1.5-1.5v0a1.5 1.5 0 0 0-1.5 1.5v2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* Doodle: Black Sparkles outline right of center card */}
              <div className="absolute right-[20px] top-[15px] text-[#1E352F] z-30 pointer-events-none animate-pulse">
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2c0 3-1 5-5 5 4 0 5 2 5 5 0-3 1-5 5-5-4 0-5-2-5-5Z" />
                  <path d="M19 14c0 2-.5 3-3 3 2.5 0 3 1 3 3 0-2 .5-3 3-3-2.5 0-3-1-3-3Z" />
                </svg>
              </div>

              {/* Doodle: White Sun outline inside the coral blob */}
              <div className="absolute right-[100px] bottom-[115px] text-white/95 z-20 pointer-events-none">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                </svg>
              </div>

              {/* Cloud outline at bottom center */}
              <div className="absolute right-[140px] bottom-[-35px] text-brand-forest/10 pointer-events-none hidden lg:block">
                <svg className="w-16 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M17.5 19A3.5 3.5 0 0 0 21 15.5c0-2.79-3.21-4.5-5.5-4.5-.42-1.79-2-3-4-3-2.3 0-4.22 1.66-4.5 4-2 .5-3.5 2.22-3.5 4.5A3.5 3.5 0 0 0 7 20h10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
