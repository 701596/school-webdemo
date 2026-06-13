import React from 'react';
import { Palette, BookOpen, GraduationCap, CheckCircle } from 'lucide-react';

interface ProgramCardProps {
  icon: React.ReactNode;
  level: string;
  age: string;
  description: string;
  highlights: string[];
  imageUrl: string;
  accentColor: string;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ 
  icon, level, age, description, highlights, imageUrl, accentColor
}) => {
  return (
    <div className="program-card overflow-hidden flex flex-col justify-between h-full relative">
      <div className="w-full h-1 shrink-0" style={{ backgroundColor: accentColor }} />
      <div>
        {/* Playful Arched Vault Image Frame */}
        <div className="p-5 pb-0">
          <div className="w-full h-52 overflow-hidden bg-brand-sand relative vault-arch shadow-sm group">
            <img 
              src={imageUrl} 
              alt={`${level} Activity`} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" 
            />
            {/* Soft overlay tint */}
            <div className="absolute inset-0 bg-brand-forest/5 pointer-events-none" />
          </div>
        </div>

        {/* Card Details */}
        <div className="p-6 sm:p-8 pt-5">
          {/* Card Header */}
          <div className="flex items-center justify-between mb-5">
            <div 
              className="w-11 h-11 rounded-xl flex items-center justify-center shadow-sm"
              style={{ backgroundColor: `${accentColor}1A`, color: accentColor }}
            >
              {icon}
            </div>
            <span 
              className="px-3.5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider"
              style={{ backgroundColor: `${accentColor}26`, color: accentColor }}
            >
              {age}
            </span>
          </div>

          {/* Level Name & Description */}
          <h3 className="text-2xl font-display font-bold text-brand-forest mb-3">
            {level}
          </h3>
          
          <p className="text-sm text-brand-forest/80 mb-6 leading-relaxed font-semibold">
            {description}
          </p>

          {/* Highlight List */}
          <div className="space-y-3">
            <span className="block text-[10px] font-bold text-brand-forest/40 uppercase tracking-widest mb-1.5">
              Focus Areas
            </span>
            {highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: accentColor }} />
                <span className="text-sm text-brand-forest/90 font-semibold leading-tight">
                  {highlight}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Card Footer CTA */}
      <div className="px-6 sm:px-8 pb-8">
        <div className="pt-5 border-t border-brand-sage/30">
          <a 
            href="#contact"
            className="inline-flex items-center gap-1.5 text-white font-bold text-xs px-6 py-3 rounded-full transition-all duration-300 hover:scale-[1.02] shadow-sm w-fit hover:opacity-90"
            style={{ backgroundColor: accentColor }}
          >
            <span>Request Syllabus</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

const Programs: React.FC = () => {
  const programData = [
    {
      icon: <Palette className="w-5 h-5" />,
      level: "Playgroup",
      age: "2 - 3 Years",
      description: "A warm, sensory-rich environment where toddlers begin socializing and learning independence through organic, play-based activities.",
      highlights: [
        "Sensory Development Activities",
        "Socialization & Sharing Skills",
        "Music, Rhyme & Puppet Play",
        "Basic Coordination Exercises"
      ],
      imageUrl: "/images/outdoor-reading.png",
      accentColor: "#F4845F"
    },
    {
      icon: <BookOpen className="w-5 h-5" />,
      level: "Nursery",
      age: "3 - 4 Years",
      description: "Structured exploration designed to build foundational language, numbers, and emotional confidence through storytelling and creative arts.",
      highlights: [
        "Pre-Reading & Alphabet Sounds",
        "Shape & Number Recognition",
        "Fine Motor Craft & Painting",
        "Collaborative Group Learning"
      ],
      imageUrl: "/images/classroom-math.png",
      accentColor: "#4CAF7D"
    },
    {
      icon: <GraduationCap className="w-5 h-5" />,
      level: "LKG / UKG",
      age: "4 - 5 Years",
      description: "Comprehensive kindergarten curriculum aimed at absolute school readiness, advanced phonics, basic arithmetic, and analytical thinking.",
      highlights: [
        "Phonics & Reading Writing",
        "Basic Math & Logic Concepts",
        "Primary Science & Nature Labs",
        "Structured School Readiness"
      ],
      imageUrl: "/images/child-learning.png",
      accentColor: "#5B8DEF"
    }
  ];

  return (
    <section id="programs" className="py-20 bg-brand-sage/20 relative border-b border-brand-sage/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-brand-bg text-brand-forest border border-brand-sage shadow-sm">
            <span className="text-[10px] font-bold uppercase tracking-widest">Ages 2 to 5</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-forest tracking-tight">
            Our Nurturing Programs
          </h2>
          <p className="text-sm sm:text-base text-brand-forest/80 font-semibold">
            Carefully curated stages designed to grow with your child's developmental milestones and build learning confidence.
          </p>
        </div>

        {/* Three-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programData.map((prog, index) => (
            <ProgramCard 
              key={index}
              icon={prog.icon}
              level={prog.level}
              age={prog.age}
              description={prog.description}
              highlights={prog.highlights}
              imageUrl={prog.imageUrl}
              accentColor={prog.accentColor}
            />
          ))}
        </div>

        {/* Mock Slider controls matching mockup */}
        <div className="flex items-center justify-center gap-3 mt-12">
          <button className="w-10 h-10 rounded-full bg-brand-bg text-brand-forest hover:bg-brand-sand border border-brand-sage/40 flex items-center justify-center transition-all shadow-sm active:scale-95 cursor-pointer">
            <span>&larr;</span>
          </button>
          <button className="w-10 h-10 rounded-full bg-brand-bg text-brand-forest hover:bg-brand-sand border border-brand-sage/40 flex items-center justify-center transition-all shadow-sm active:scale-95 cursor-pointer">
            <span>&rarr;</span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default Programs;
