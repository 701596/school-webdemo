import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '../components/ScrollReveal';

export const Home: React.FC = () => {
  // State for Hero Slide
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [
    {
      img: '/building.png',
      fallback: 'https://images.unsplash.com/photo-1541829019-25f206153e4a?auto=format&fit=crop&w=1920&q=80'
    },
    {
      img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1920&q=80',
      fallback: ''
    }
  ];

  // Auto-rotate hero slides
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setActiveSlide(prev => (prev === 0 ? 1 : 0));
    }, 6000);
    return () => clearInterval(slideTimer);
  }, []);

  // State for Virtual Tour Video Player
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  // State for Curriculum Tabs
  const [activeTab, setActiveTab] = useState<'academics' | 'arts' | 'sports'>('academics');

  // State for Infrastructure Image Selector
  const [activeInfra, setActiveInfra] = useState(0);
  const infraImages = [
    '/building.png',
    'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80'
  ];

  return (
    <div className="w-full bg-[#F8FAFC]">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[80vh] md:h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950 text-white font-sans">
        {/* Slideshow background */}
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              activeSlide === idx ? 'opacity-40' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url('${slide.img}')` }}
          />
        ))}

        {/* Gradient dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-slate-950/20" />

        {/* Content Box */}
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center md:text-left w-full mt-10">
          <ScrollReveal>
            <span className="bg-white/15 border border-white/30 text-white px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase mb-5 inline-block backdrop-blur-md">
              Admissions Open 2025-26
            </span>
            <h1 className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6.5xl leading-tight max-w-4xl tracking-tight font-sans">
              Shaping Tomorrow's Visionaries Today
            </h1>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mt-4 leading-relaxed font-light">
              A future-forward English medium school in Pandesara, Surat integrating technology, ethics, and global citizenship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8 items-center justify-center md:justify-start">
              <Link
                to="/admissions"
                className="w-full sm:w-auto bg-[#f0ad00] hover:bg-[#d49a00] text-white font-extrabold px-8 py-3.5 rounded-full shadow-lg shadow-[#f0ad00]/25 transition-all text-center"
              >
                Enroll Now
              </Link>
              <button
                onClick={() => {
                  setIsPlayingVideo(true);
                  const tourSection = document.getElementById('tourSection');
                  if (tourSection) {
                    tourSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="w-full sm:w-auto bg-white text-[#004d61] hover:bg-[#f0f0f0] font-extrabold px-8 py-3.5 rounded-full transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
              >
                <i className="fas fa-play text-xs"></i> Watch Tour
              </button>
            </div>
          </ScrollReveal>
        </div>

        {/* Wave Divider SVG */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="relative block w-full h-[60px] md:h-[80px]">
            <path
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
              className="fill-[#F8FAFC]"
            ></path>
          </svg>
        </div>
      </section>

      {/* 2. INTRO FLOATING CARDS */}
      <div className="float-wrap">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <ScrollReveal delayClass="delay-50">
              <div className="bg-white p-8 rounded-3xl shadow-custom border border-gray-100 flex flex-col items-center text-center hover-lift h-full">
                <div className="w-14 h-14 bg-[#004d61]/5 text-[#004d61] rounded-2xl flex items-center justify-center text-2xl mb-5 shadow-sm">
                  <i className="fas fa-brain"></i>
                </div>
                <h4 className="font-sans font-extrabold text-[#004d61] text-lg mb-2">Cognitive Growth</h4>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-0">
                  Focus on critical thinking, mathematical patterns, logical deductions, and curiosity.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delayClass="delay-100">
              <div className="bg-white p-8 rounded-3xl shadow-custom border border-gray-100 flex flex-col items-center text-center hover-lift h-full">
                <div className="w-14 h-14 bg-[#004d61]/5 text-[#004d61] rounded-2xl flex items-center justify-center text-2xl mb-5 shadow-sm">
                  <i className="fas fa-heart"></i>
                </div>
                <h4 className="font-sans font-extrabold text-[#004d61] text-lg mb-2">Emotional Intelligence</h4>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-0">
                  Nurturing social empathy, personal resilience, confidence, and respect in daily life.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delayClass="delay-150">
              <div className="bg-white p-8 rounded-3xl shadow-custom border border-gray-100 flex flex-col items-center text-center hover-lift h-full">
                <div className="w-14 h-14 bg-[#004d61]/5 text-[#004d61] rounded-2xl flex items-center justify-center text-2xl mb-5 shadow-sm">
                  <i className="fas fa-rocket"></i>
                </div>
                <h4 className="font-sans font-extrabold text-[#004d61] text-lg mb-2">Future Tech</h4>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-0">
                  Introducing smart computing systems, early coding, and robotics labs from primary grades.
                </p>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </div>

      {/* 3. WHO WE ARE */}
      <section className="section-padding py-20 px-4 sm:px-6 lg:px-8" id="about">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Images Group */}
          <ScrollReveal className="relative flex items-center justify-center min-h-[380px] sm:min-h-[480px]">
            <div className="w-2/3 h-[280px] sm:h-[350px] shadow-2xl rounded-[var(--radius)] overflow-hidden border-4 border-white absolute left-4 top-4 z-10 transition-transform duration-300 hover:scale-102">
              <img src="/building.png" alt="School Frontage" className="w-full h-full object-cover" />
            </div>
            <div className="w-2/3 h-[280px] sm:h-[350px] shadow-2xl rounded-[var(--radius)] overflow-hidden border-4 border-white absolute right-4 bottom-4 z-0 transition-transform duration-300 hover:scale-102">
              <img 
                src="https://images.unsplash.com/photo-1541829019-25f206153e4a?auto=format&fit=crop&w=800&q=80" 
                alt="Interactive classrooms" 
                className="w-full h-full object-cover" 
              />
            </div>
          </ScrollReveal>

          {/* Texts Column */}
          <ScrollReveal delayClass="delay-200" className="space-y-6">
            <span className="sub-tag">Who We Are</span>
            <h2 className="font-sans font-extrabold text-[#004d61] text-3xl sm:text-4xl leading-tight">
              Genius Public School
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Genius Public School is a leading and well-known English medium educational institution situated at Piyush Point, Pandesara, Surat, Gujarat. Dedicated to offering high-standard developmental support for children, our campus is a co-educational, CBSE-aligned setup providing education from Nursery to Class X.
            </p>
            <p className="text-gray-650 text-sm leading-relaxed">
              Managed with academic discipline, safety structures, and visual classrooms, our curriculum aligns with modern milestones while anchoring pupils on strong moral foundations.
            </p>
            <div className="flex gap-10 pt-4">
              <div>
                <h3 className="text-[#f0ad00] font-extrabold text-3.5xl sm:text-4xl block leading-none">10+</h3>
                <p className="text-gray-500 text-xs sm:text-sm mt-1">Years History</p>
              </div>
              <div>
                <h3 className="text-[#f0ad00] font-extrabold text-3.5xl sm:text-4xl block leading-none">15:1</h3>
                <p className="text-gray-500 text-xs sm:text-sm mt-1">Student Ratio</p>
              </div>
              <div>
                <h3 className="text-[#f0ad00] font-extrabold text-3.5xl sm:text-4xl block leading-none">500+</h3>
                <p className="text-gray-500 text-xs sm:text-sm mt-1">Happy Pupils</p>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* 4. UNIQUE FEATURES */}
      <section className="section-padding py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="sub-tag">The Difference</span>
            <h2 className="font-sans font-extrabold text-[#004d61] text-3xl sm:text-4xl">Why Are We Unique?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <ScrollReveal className="h-full">
              <div className="bg-[#F8FAFC] p-8 rounded-3xl hover:bg-[#004d61]/5 transition-colors border border-gray-100 flex flex-col h-full group">
                <div className="text-[#f0ad00] text-3xl mb-5 group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-book-reader"></i>
                </div>
                <h4 className="font-sans font-extrabold text-[#004d61] text-base sm:text-lg mb-2">Quality Education</h4>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed flex-grow">
                  Experienced, dedicated, and qualified faculties for all subjects, guiding children to absolute success.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delayClass="delay-50" className="h-full">
              <div className="bg-[#F8FAFC] p-8 rounded-3xl hover:bg-[#004d61]/5 transition-colors border border-gray-100 flex flex-col h-full group">
                <div className="text-[#f0ad00] text-3xl mb-5 group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-laptop-code"></i>
                </div>
                <h4 className="font-sans font-extrabold text-[#004d61] text-base sm:text-lg mb-2">Tech in Education</h4>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed flex-grow">
                  Equipped with smart computer labs, visual smart classrooms, and automated notification alerts.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delayClass="delay-100" className="h-full">
              <div className="bg-[#F8FAFC] p-8 rounded-3xl hover:bg-[#004d61]/5 transition-colors border border-gray-100 flex flex-col h-full group">
                <div className="text-[#f0ad00] text-3xl mb-5 group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-calendar-alt"></i>
                </div>
                <h4 className="font-sans font-extrabold text-[#004d61] text-base sm:text-lg mb-2">Advance Planning</h4>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed flex-grow">
                  Micro-level testing schedules, routine developmental exams, and parental feedback reports.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delayClass="delay-150" className="h-full">
              <div className="bg-[#F8FAFC] p-8 rounded-3xl hover:bg-[#004d61]/5 transition-colors border border-gray-100 flex flex-col h-full group">
                <div className="text-[#f0ad00] text-3xl mb-5 group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-building"></i>
                </div>
                <h4 className="font-sans font-extrabold text-[#004d61] text-base sm:text-lg mb-2">School Facilities</h4>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed flex-grow">
                  Clean structured environments, safe transit routes, 24/7 CCTV, and ventilated play rooms.
                </p>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* 5. PRINCIPAL'S MESSAGE */}
      <section className="section-padding py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="bg-white rounded-3xl shadow-custom border border-gray-100 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Left Image */}
            <div className="lg:col-span-5 h-[350px] lg:h-full min-h-[380px] bg-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80" 
                alt="Principal Sunita Patel" 
                className="w-full h-full object-cover rounded-none" 
              />
            </div>
            {/* Right Message */}
            <div className="lg:col-span-7 p-8 sm:p-12 md:p-16 flex flex-col justify-center relative">
              <i className="fas fa-quote-left text-gray-100 text-[6rem] sm:text-[8rem] absolute right-8 top-6 pointer-events-none z-0"></i>
              <div className="relative z-10 space-y-4">
                <span className="sub-tag">Director / Principal Message</span>
                <h3 className="font-sans font-extrabold text-[#004d61] text-2xl sm:text-3xl leading-snug">
                  “Education is not the learning of facts but the training of the mind to think.”
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  At Genius Public School, we continuously upgrade our educational programs, digital teaching facilities, and co-curricular programs to perfectly serve the needs of Surat’s parents and students. We prepare youngsters to be creative thinkers and disciplined, moral citizens of our country.
                </p>
                <div className="pt-4">
                  <div className="font-sans font-extrabold text-[#004d61] text-lg tracking-wide">Mrs. Sunita Patel</div>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mt-0.5">Principal, Genius Public School</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 6. SAFETY SECTION */}
      <section className="section-padding py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="safety-wrapper shadow-2xl">
            <i className="fas fa-shield-alt safety-bg-icon"></i>
            <div className="relative z-10 max-w-2xl mb-12">
              <span className="text-[#f0ad00] font-extrabold uppercase tracking-widest text-xs sm:text-sm block">Safe & Secure</span>
              <h2 className="text-white font-extrabold text-2xl sm:text-3xl lg:text-4xl leading-tight mt-2.5">
                We take your child's safety as seriously as you do.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
              
              <div className="bg-white/5 border border-white/10 hover:bg-white/10 p-8 rounded-3xl transition-colors backdrop-blur-sm">
                <div className="text-[#f0ad00] text-3xl mb-4"><i className="fas fa-bus-alt"></i></div>
                <h4 className="text-white font-extrabold text-base sm:text-lg mb-2">Transportation</h4>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-0">
                  Secure transit systems and verified drivers transport students safely to and from school.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 hover:bg-white/10 p-8 rounded-3xl transition-colors backdrop-blur-sm">
                <div className="text-[#f0ad00] text-3xl mb-4"><i className="fas fa-video"></i></div>
                <h4 className="text-white font-extrabold text-base sm:text-lg mb-2">24/7 Surveillance</h4>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-0">
                  Every corridor, classroom gate, playground, and corner is covered by CCTV.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 hover:bg-white/10 p-8 rounded-3xl transition-colors backdrop-blur-sm">
                <div className="text-[#f0ad00] text-3xl mb-4"><i className="fas fa-id-card-clip"></i></div>
                <h4 className="text-white font-extrabold text-base sm:text-lg mb-2">Identity Proof</h4>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-0">
                  Visitors require strict registration. Unauthorized access is completely restricted.
                </p>
              </div>

            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 7. VIRTUAL TOUR SECTION */}
      <section className="section-padding py-20 px-4 sm:px-6 lg:px-8" id="tourSection">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="relative w-full rounded-3xl overflow-hidden shadow-2xl aspect-video md:aspect-[21/9] bg-slate-950 flex items-center justify-center border-4 border-white">
            
            {/* If video is not playing, show thumbnail */}
            {!isPlayingVideo ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10">
                <div className="absolute inset-0 bg-cover bg-center opacity-60" style={{ backgroundImage: `url('/building.png')` }} />
                <div className="absolute inset-0 bg-black/40 z-0" />

                <button
                  onClick={() => setIsPlayingVideo(true)}
                  className="w-16 h-16 sm:w-20 sm:h-20 bg-[#f0ad00] hover:bg-[#d49a00] hover:scale-105 active:scale-95 text-white rounded-full flex items-center justify-center text-xl sm:text-2xl shadow-xl transition-all cursor-pointer z-10 relative border-4 border-white"
                  aria-label="Play Virtual Tour Video"
                >
                  <i className="fas fa-play ml-1"></i>
                </button>
                <h2 className="text-white font-extrabold text-3xl sm:text-4xl mt-6 relative z-10 leading-tight">
                  Top School In Pandesara
                </h2>
                <p className="text-gray-200 text-sm sm:text-base mt-2 relative z-10 font-medium tracking-wide">
                  Watch Virtual Campus Video Tour
                </p>
              </div>
            ) : (
              <div className="absolute inset-0 bg-black z-20">
                <video 
                  src="https://www.w3schools.com/html/mov_bbb.mp4" 
                  controls 
                  autoPlay 
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setIsPlayingVideo(false)}
                  className="absolute top-4 right-4 bg-black/60 hover:bg-black/90 text-white px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors border border-white/20 cursor-pointer flex items-center gap-1.5 z-30"
                >
                  <i className="fas fa-times"></i> Close Video
                </button>
              </div>
            )}

          </ScrollReveal>
        </div>
      </section>

      {/* 8. UPCOMING EVENTS */}
      <section className="section-padding py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Title block */}
          <ScrollReveal className="lg:col-span-5 space-y-4">
            <span className="sub-tag">Calendar</span>
            <h2 className="font-sans font-extrabold text-[#004d61] text-3xl sm:text-4xl leading-tight">
              Upcoming Events
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Stay updated with academic meetings, extra-curricular programs, and celebrations scheduled at Genius Public School.
            </p>
            <div className="pt-2">
              <Link
                to="/academics"
                className="inline-flex bg-[#004d61] hover:bg-[#003847] text-white font-extrabold text-sm px-6 py-3 rounded-full transition-all"
              >
                View Full Calendar
              </Link>
            </div>
          </ScrollReveal>

          {/* Right Events Row Block */}
          <div className="lg:col-span-7 space-y-4 w-full">
            
            <ScrollReveal delayClass="delay-50">
              <div className="bg-white p-5 rounded-2xl border border-gray-150 flex items-center justify-between gap-4 hover:border-[#f0ad00] transition-colors">
                <div className="flex items-center gap-5">
                  <div className="bg-[#004d61] text-white w-14 h-14 rounded-xl flex flex-col items-center justify-center font-bold shrink-0">
                    <span className="text-lg leading-none">05</span>
                    <span className="text-[10px] uppercase leading-none mt-1 text-[#f0ad00]">SEP</span>
                  </div>
                  <div>
                    <h4 className="font-sans font-extrabold text-[#004d61] text-sm sm:text-base">Teachers Day Festival</h4>
                    <p className="text-gray-500 text-xs sm:text-sm mt-0.5">Genius School Auditorium • 9:00 AM</p>
                  </div>
                </div>
                <Link to="/contact" className="bg-[#F8FAFC] text-slate-700 hover:bg-[#004d61] hover:text-white text-xs font-bold px-4 py-2.5 rounded-full transition-colors shrink-0">
                  Details
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delayClass="delay-100">
              <div className="bg-white p-5 rounded-2xl border border-gray-150 flex items-center justify-between gap-4 hover:border-[#f0ad00] transition-colors">
                <div className="flex items-center gap-5">
                  <div className="bg-[#004d61] text-white w-14 h-14 rounded-xl flex flex-col items-center justify-center font-bold shrink-0">
                    <span className="text-lg leading-none">24</span>
                    <span className="text-[10px] uppercase leading-none mt-1 text-[#f0ad00]">JAN</span>
                  </div>
                  <div>
                    <h4 className="font-sans font-extrabold text-[#004d61] text-sm sm:text-base">Annual Day & Cultural Fest</h4>
                    <p className="text-gray-500 text-xs sm:text-sm mt-0.5">Surat Community Hall • 4:00 PM</p>
                  </div>
                </div>
                <Link to="/contact" className="bg-[#F8FAFC] text-slate-700 hover:bg-[#004d61] hover:text-white text-xs font-bold px-4 py-2.5 rounded-full transition-colors shrink-0">
                  Details
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delayClass="delay-150">
              <div className="bg-white p-5 rounded-2xl border border-gray-150 flex items-center justify-between gap-4 hover:border-[#f0ad00] transition-colors">
                <div className="flex items-center gap-5">
                  <div className="bg-[#004d61] text-white w-14 h-14 rounded-xl flex flex-col items-center justify-center font-bold shrink-0">
                    <span className="text-lg leading-none">10</span>
                    <span className="text-[10px] uppercase leading-none mt-1 text-[#f0ad00]">OCT</span>
                  </div>
                  <div>
                    <h4 className="font-sans font-extrabold text-[#004d61] text-sm sm:text-base">Parent-Teacher Meet (PTM)</h4>
                    <p className="text-gray-500 text-xs sm:text-sm mt-0.5">Respective Classrooms • 8:30 AM</p>
                  </div>
                </div>
                <Link to="/contact" className="bg-[#F8FAFC] text-slate-700 hover:bg-[#004d61] hover:text-white text-xs font-bold px-4 py-2.5 rounded-full transition-colors shrink-0">
                  Details
                </Link>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* 9. ACADEMIC JOURNEY TIMELINE */}
      <section className="section-padding py-20 px-4 sm:px-6 lg:px-8" id="pathway">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="sub-tag">Academic Journey</span>
            <h2 className="font-sans font-extrabold text-[#004d61] text-3xl sm:text-4xl">The Learning Curve</h2>
          </div>

          <div className="timeline-wrap">
            <div className="timeline-line"></div>
            
            {/* Item 1 */}
            <ScrollReveal className="relative pl-16 sm:pl-24 mb-12 group">
              <div className="absolute left-[23px] top-1.5 w-5 h-5 rounded-full bg-[#f0ad00] border-4 border-white shadow-md z-10 transition-transform group-hover:scale-120"></div>
              <div className="bg-white p-6 rounded-3xl border border-gray-150 shadow-sm hover:border-[#f0ad00] transition-colors">
                <h4 className="font-sans font-extrabold text-[#004d61] text-lg mb-1">Explorers (Pre-Primary)</h4>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-0">
                  Foundation of literacy, basic numeracy, and motor skills. Sensory activity rooms meet phonetic spelling games.
                </p>
              </div>
            </ScrollReveal>

            {/* Item 2 */}
            <ScrollReveal className="relative pl-16 sm:pl-24 mb-12 group">
              <div className="absolute left-[23px] top-1.5 w-5 h-5 rounded-full bg-[#f0ad00] border-4 border-white shadow-md z-10 transition-transform group-hover:scale-120"></div>
              <div className="bg-white p-6 rounded-3xl border border-gray-150 shadow-sm hover:border-[#f0ad00] transition-colors">
                <h4 className="font-sans font-extrabold text-[#004d61] text-lg mb-1">Thinkers (Primary)</h4>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-0">
                  Introduction to environmental studies, creative English composition, logical calculations, and digital computer basics.
                </p>
              </div>
            </ScrollReveal>

            {/* Item 3 */}
            <ScrollReveal className="relative pl-16 sm:pl-24 group">
              <div className="absolute left-[23px] top-1.5 w-5 h-5 rounded-full bg-[#f0ad00] border-4 border-white shadow-md z-10 transition-transform group-hover:scale-120"></div>
              <div className="bg-white p-6 rounded-3xl border border-gray-150 shadow-sm hover:border-[#f0ad00] transition-colors">
                <h4 className="font-sans font-extrabold text-[#004d61] text-lg mb-1">Leaders (Secondary)</h4>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-0">
                  Advanced Science labs, coding, algebra, geography, speech debates, and CBSE-focused training for Class X boards.
                </p>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* 10. CURRICULUM TABS */}
      <section className="section-padding py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="sub-tag">Holistic Development</span>
            <h2 className="font-sans font-extrabold text-[#004d61] text-3xl sm:text-4xl">Curriculum & Co-curricular</h2>
          </div>

          {/* Tab Headers */}
          <div className="flex justify-center items-center gap-4 mb-12 border-b border-gray-100 pb-4">
            <button
              onClick={() => setActiveTab('academics')}
              className={`px-6 py-3 rounded-full text-sm font-extrabold cursor-pointer transition-all ${
                activeTab === 'academics'
                  ? 'bg-[#004d61] text-white shadow-md'
                  : 'text-[#264653] hover:text-[#004d61]'
              }`}
            >
              Academics
            </button>
            <button
              onClick={() => setActiveTab('arts')}
              className={`px-6 py-3 rounded-full text-sm font-extrabold cursor-pointer transition-all ${
                activeTab === 'arts'
                  ? 'bg-[#004d61] text-white shadow-md'
                  : 'text-[#264653] hover:text-[#004d61]'
              }`}
            >
              Arts & Culture
            </button>
            <button
              onClick={() => setActiveTab('sports')}
              className={`px-6 py-3 rounded-full text-sm font-extrabold cursor-pointer transition-all ${
                activeTab === 'sports'
                  ? 'bg-[#004d61] text-white shadow-md'
                  : 'text-[#264653] hover:text-[#004d61]'
              }`}
            >
              Sports
            </button>
          </div>

          {/* Tab Contents */}
          <ScrollReveal className="bg-[#F8FAFC] rounded-3xl border border-gray-150 p-6 sm:p-10">
            {activeTab === 'academics' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 h-[280px] rounded-2xl overflow-hidden shadow-lg">
                  <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80" alt="Core subjects" className="w-full h-full object-cover" />
                </div>
                <div className="lg:col-span-7 space-y-4 text-left">
                  <h3 className="font-sans font-extrabold text-[#004d61] text-xl sm:text-2xl">Core Subjects</h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                    We follow an integrated curriculum ensuring a balanced academic foundation.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-100">
                      <div className="text-[#f0ad00] text-lg"><i className="fas fa-square-root-alt"></i></div>
                      <div>
                        <h5 className="font-sans font-extrabold text-[#004d61] text-sm">Mathematics</h5>
                        <p className="text-[11px] text-gray-400">Logic & Problem Solving</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-100">
                      <div className="text-[#f0ad00] text-lg"><i className="fas fa-flask"></i></div>
                      <div>
                        <h5 className="font-sans font-extrabold text-[#004d61] text-sm">General Science</h5>
                        <p className="text-[11px] text-gray-400">Inquiry & Experiments</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-100">
                      <div className="text-[#f0ad00] text-lg"><i className="fas fa-book-open"></i></div>
                      <div>
                        <h5 className="font-sans font-extrabold text-[#004d61] text-sm">English Literature</h5>
                        <p className="text-[11px] text-gray-400">Fluency & Vocabulary</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-100">
                      <div className="text-[#f0ad00] text-lg"><i className="fas fa-laptop-code"></i></div>
                      <div>
                        <h5 className="font-sans font-extrabold text-[#004d61] text-sm">Computer Science</h5>
                        <p className="text-[11px] text-gray-400">Scratch & Python basics</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'arts' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 h-[280px] rounded-2xl overflow-hidden shadow-lg">
                  <img src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&w=800&q=80" alt="Arts program" className="w-full h-full object-cover" />
                </div>
                <div className="lg:col-span-7 space-y-4 text-left">
                  <h3 className="font-sans font-extrabold text-[#004d61] text-xl sm:text-2xl">Expressive Arts</h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                    Every child is encouraged to find their unique voice and expression through our creative arts programs.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-100">
                      <div className="text-[#f0ad00] text-lg"><i className="fas fa-music"></i></div>
                      <div>
                        <h5 className="font-sans font-extrabold text-[#004d61] text-sm">Music & Vocal</h5>
                        <p className="text-[11px] text-gray-400">Classical & Traditional songs</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-100">
                      <div className="text-[#f0ad00] text-lg"><i className="fas fa-paint-brush"></i></div>
                      <div>
                        <h5 className="font-sans font-extrabold text-[#004d61] text-sm">Fine Arts</h5>
                        <p className="text-[11px] text-gray-400">Pottery, Origami & Canvas Painting</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'sports' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 h-[280px] rounded-2xl overflow-hidden shadow-lg">
                  <img src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80" alt="Physical training" className="w-full h-full object-cover" />
                </div>
                <div className="lg:col-span-7 space-y-4 text-left">
                  <h3 className="font-sans font-extrabold text-[#004d61] text-xl sm:text-2xl">Physical Education</h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                    Building teamwork, physical resilience, cardiovascular health, and focus through structured coach training.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-100">
                      <div className="text-[#f0ad00] text-lg"><i className="fas fa-running"></i></div>
                      <div>
                        <h5 className="font-sans font-extrabold text-[#004d61] text-sm">Athletics</h5>
                        <p className="text-[11px] text-gray-400">Track & Field training</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-100">
                      <div className="text-[#f0ad00] text-lg"><i className="fas fa-futbol"></i></div>
                      <div>
                        <h5 className="font-sans font-extrabold text-[#004d61] text-sm">Football & Cricket</h5>
                        <p className="text-[11px] text-gray-400">Professional Coaching</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </ScrollReveal>
        </div>
      </section>

      {/* 11. LIFE AT SCHOOL */}
      <section className="section-padding py-20 px-4 sm:px-6 lg:px-8" id="life">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="font-sans font-extrabold text-[#004d61] text-3xl sm:text-4xl mb-10 text-center lg:text-left">
              Life at School
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <ScrollReveal>
              <div className="h-[280px] rounded-3xl overflow-hidden relative shadow-md group">
                <img src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=600&q=80" alt="Robotics" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-[#004d61]/70 flex flex-col justify-end p-6 text-white translate-y-12 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-sans font-extrabold text-white text-lg mb-1 leading-none">Robotics Lab</h3>
                  <p className="text-gray-200 text-xs sm:text-sm mt-1 leading-normal opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Building the future, one bot at a time with sensor circuits.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delayClass="delay-50">
              <div className="h-[280px] rounded-3xl overflow-hidden relative shadow-md group">
                <img src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=600&q=80" alt="Library" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-[#004d61]/70 flex flex-col justify-end p-6 text-white translate-y-12 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-sans font-extrabold text-white text-lg mb-1 leading-none">The Library</h3>
                  <p className="text-gray-200 text-xs sm:text-sm mt-1 leading-normal opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    A quiet haven loaded with thousands of story books and resources.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delayClass="delay-100">
              <div className="h-[280px] rounded-3xl overflow-hidden relative shadow-md group">
                <img src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=600&q=80" alt="Adventure Park" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-[#004d61]/70 flex flex-col justify-end p-6 text-white translate-y-12 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-sans font-extrabold text-white text-lg mb-1 leading-none">Adventure Park</h3>
                  <p className="text-gray-200 text-xs sm:text-sm mt-1 leading-normal opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Kinesthetic activity and play zone for physical coordinates.
                  </p>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* 12. INFRASTRUCTURE */}
      <section className="section-padding py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <span className="sub-tag">Facilities</span>
            <h2 className="font-sans font-extrabold text-[#004d61] text-3xl sm:text-4xl mb-12">
              Infrastructural Excellence
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* List selectors on Left */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-4">
              {[
                { title: 'Smart Classes', sub: 'Learn on Touches and Screens' },
                { title: 'Sports Complex', sub: 'Indoor & Outdoor Fields' },
                { title: 'Science Laboratories', sub: 'Physics, Chemistry, and Biology' }
              ].map((item, idx) => (
                <div
                  key={idx}
                  onMouseEnter={() => setActiveInfra(idx)}
                  onClick={() => setActiveInfra(idx)}
                  className={`p-6 rounded-2xl border transition-all duration-300 flex items-center justify-between cursor-pointer ${
                    activeInfra === idx
                      ? 'bg-[#004d61]/5 border-[#f0ad00] shadow-sm'
                      : 'bg-[#F8FAFC] border-gray-150'
                  }`}
                >
                  <div className="text-left">
                    <h4 className="font-sans font-extrabold text-[#004d61] text-base sm:text-lg leading-tight">{item.title}</h4>
                    <p className="text-xs text-gray-500 mt-1">{item.sub}</p>
                  </div>
                  <i className="fas fa-chevron-right text-gray-400 text-sm"></i>
                </div>
              ))}
            </div>

            {/* Preview Image on Right */}
            <div className="lg:col-span-7 h-[300px] sm:h-[400px] rounded-3xl overflow-hidden shadow-2xl relative border-4 border-gray-100 shrink-0">
              {infraImages.map((imgSrc, idx) => (
                <img
                  key={idx}
                  src={imgSrc}
                  alt="Infrastructure preview"
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 rounded-none ${
                    activeInfra === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                />
              ))}
              <div className="absolute bottom-4 right-4 bg-white/90 text-[#004d61] backdrop-blur-md px-4 py-2.5 rounded-full text-xs font-extrabold shadow-md z-20 flex items-center gap-2 border border-white">
                <span>Explore Campus</span>
                <div className="w-5 h-5 bg-[#f0ad00] text-white rounded-full flex items-center justify-center text-[10px]"><i className="fas fa-arrow-right"></i></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 13. CAMPUS VIBES (GALLERY COLLAGE) */}
      <section className="section-padding py-20 px-4 sm:px-6 lg:px-8" id="gallery">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="font-sans font-extrabold text-[#004d61] text-3xl sm:text-4xl mb-12 text-center">
              Campus Vibes
            </h2>
          </ScrollReveal>

          <div className="collage-grid">
            
            {/* Item 1 - Wide */}
            <ScrollReveal className="c-item c-wide h-[220px] rounded-3xl overflow-hidden relative shadow-sm group">
              <img src="/building.png" alt="Classroom" className="w-full h-full object-cover rounded-none" />
              <div className="absolute inset-0 bg-[#004d61]/70 flex flex-col justify-end p-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h4 className="font-sans font-extrabold text-white text-base">GPS Building</h4>
                <p className="text-gray-200 text-xs mt-0.5">Surat Campus</p>
              </div>
            </ScrollReveal>

            {/* Item 2 */}
            <ScrollReveal delayClass="delay-50" className="c-item h-[220px] rounded-3xl overflow-hidden relative shadow-sm group">
              <img src="https://images.unsplash.com/photo-1544698310-74ea9d1c8258?auto=format&fit=crop&w=600&q=80" alt="Play ground" className="w-full h-full object-cover rounded-none" />
              <div className="absolute inset-0 bg-[#004d61]/70 flex flex-col justify-end p-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h4 className="font-sans font-extrabold text-white text-base">Playground</h4>
                <p className="text-gray-200 text-xs mt-0.5">Physical sports</p>
              </div>
            </ScrollReveal>

            {/* Item 3 - Tall */}
            <ScrollReveal delayClass="delay-100" className="c-item c-tall h-[460px] rounded-3xl overflow-hidden relative shadow-sm group">
              <img src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=600&q=80" alt="Science Lab" className="w-full h-full object-cover rounded-none" />
              <div className="absolute inset-0 bg-[#004d61]/70 flex flex-col justify-end p-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h4 className="font-sans font-extrabold text-white text-base">Science Lab</h4>
                <p className="text-gray-200 text-xs mt-0.5">Biology & Chemistry</p>
              </div>
            </ScrollReveal>

            {/* Item 4 */}
            <ScrollReveal delayClass="delay-150" className="c-item h-[220px] rounded-3xl overflow-hidden relative shadow-sm group">
              <img src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=600&q=80" alt="Corridor" className="w-full h-full object-cover rounded-none" />
              <div className="absolute inset-0 bg-[#004d61]/70 flex flex-col justify-end p-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h4 className="font-sans font-extrabold text-white text-base">Main Corridor</h4>
                <p className="text-gray-200 text-xs mt-0.5">Secure corridors</p>
              </div>
            </ScrollReveal>

            {/* Item 5 - Big */}
            <ScrollReveal delayClass="delay-200" className="c-item c-big h-[460px] rounded-3xl overflow-hidden relative shadow-sm group">
              <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80" alt="Prayer assembly" className="w-full h-full object-cover rounded-none" />
              <div className="absolute inset-0 bg-[#004d61]/70 flex flex-col justify-end p-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h4 className="font-sans font-extrabold text-white text-base">Morning Prayer</h4>
                <p className="text-gray-200 text-xs mt-0.5">Assembly courtyard</p>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* 14. EXPERT MENTORS (FACULTY) */}
      <section className="section-padding py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-sans font-extrabold text-[#004d61] text-3xl sm:text-4xl">Expert Mentors</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            
            <ScrollReveal className="text-center space-y-3">
              <div className="aspect-[4/5] bg-slate-100 rounded-3xl overflow-hidden shadow-sm border border-gray-100 group">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80" 
                  alt="Sunita Patel" 
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                />
              </div>
              <div>
                <h4 className="font-sans font-extrabold text-[#004d61] text-base leading-snug">Sunita Patel</h4>
                <p className="text-xs text-gray-400 font-bold uppercase mt-0.5">Principal</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delayClass="delay-50" className="text-center space-y-3">
              <div className="aspect-[4/5] bg-slate-100 rounded-3xl overflow-hidden shadow-sm border border-gray-100 group">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80" 
                  alt="Rajesh Patel" 
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                />
              </div>
              <div>
                <h4 className="font-sans font-extrabold text-[#004d61] text-base leading-snug">Rajesh Patel</h4>
                <p className="text-xs text-gray-400 font-bold uppercase mt-0.5">Managing Director</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delayClass="delay-100" className="text-center space-y-3">
              <div className="aspect-[4/5] bg-slate-100 rounded-3xl overflow-hidden shadow-sm border border-gray-100 group">
                <img 
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80" 
                  alt="Diya Mehta" 
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                />
              </div>
              <div>
                <h4 className="font-sans font-extrabold text-[#004d61] text-base leading-snug">Diya Mehta</h4>
                <p className="text-xs text-gray-400 font-bold uppercase mt-0.5">Academic Coordinator</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delayClass="delay-150" className="text-center space-y-3">
              <div className="aspect-[4/5] bg-slate-100 rounded-3xl overflow-hidden shadow-sm border border-gray-100 group">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80" 
                  alt="Murji Patel" 
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                />
              </div>
              <div>
                <h4 className="font-sans font-extrabold text-[#004d61] text-base leading-snug">Murji Patel</h4>
                <p className="text-xs text-gray-400 font-bold uppercase mt-0.5">Administrative Trustee</p>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* 15. ADMISSION STEPS */}
      <section className="section-padding py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-150" id="admissions">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="font-sans font-extrabold text-[#004d61] text-3xl sm:text-4xl mb-12 text-center lg:text-left">
              Admission Steps
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <ScrollReveal className="h-full">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-150 flex items-start gap-5 hover:border-[#f0ad00] transition-colors h-full">
                <div className="bg-[#004d61] text-white w-12 h-12 rounded-full flex items-center justify-center font-extrabold text-lg shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-sans font-extrabold text-[#004d61] text-base sm:text-lg mb-1 leading-tight">Inquire</h4>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-0">
                    Submit our online enquiry form, or visit the school office to get a prospectus brochure.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delayClass="delay-50" className="h-full">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-150 flex items-start gap-5 hover:border-[#f0ad00] transition-colors h-full">
                <div className="bg-[#004d61] text-white w-12 h-12 rounded-full flex items-center justify-center font-extrabold text-lg shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-sans font-extrabold text-[#004d61] text-base sm:text-lg mb-1 leading-tight">Interact</h4>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-0">
                    Friendly coordination check with teachers and scheduled meeting with parents.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delayClass="delay-100" className="h-full">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-150 flex items-start gap-5 hover:border-[#f0ad00] transition-colors h-full">
                <div className="bg-[#004d61] text-white w-12 h-12 rounded-full flex items-center justify-center font-extrabold text-lg shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-sans font-extrabold text-[#004d61] text-base sm:text-lg mb-1 leading-tight">Enroll</h4>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-0">
                    Verification of student certificates, tuition fee payment, and final class confirmation.
                  </p>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

    </div>
  );
};
