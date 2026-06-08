import React from 'react';
import { 
  BookOpen, 
  Binary, 
  FlaskConical, 
  Compass, 
  Languages, 
  Monitor, 
  FileText, 
  Lightbulb, 
  Presentation, 
  UserCheck, 
  GraduationCap 
} from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';

export const Academics: React.FC = () => {
  const classSections = [
    {
      title: 'Pre-Primary Section',
      subtitle: 'Nursery, LKG, UKG',
      focus: 'Play-way Method & Sensory Learning',
      description: 'Focus is placed on cognitive coordination, motor skills development, language acquaintance, and interactive games. We ensure kids feel excited to attend school daily.',
      features: ['Interactive Toy Rooms', 'Basic Phonics & Alphabets', 'Sensory Play-Doh & Crafts', 'Social Habits Training']
    },
    {
      title: 'Primary Section',
      subtitle: 'Classes I to V',
      focus: 'Foundational Knowledge & Logic Building',
      description: 'Students transition into structured writing, formal language grammar, mathematical arithmetic, environmental science, and early computing lessons.',
      features: ['Mental Math Exercises', 'English Reading Fluency', 'EVS Practical Projects', 'Art & Craft Integration']
    },
    {
      title: 'High School Section',
      subtitle: 'Classes VI to X',
      focus: 'CBSE-Aligned Academic Rigor & Analytics',
      description: 'Deeper focus on advanced Mathematics, physics, chemistry, biology labs, history, civics, computer coding (Scratch/Python basics), and comprehensive board exam training.',
      features: ['Weekly Laboratory Practical sessions', 'ICT Computer Literacy', 'Intensive Mock Examinations', 'Career Counseling sessions']
    }
  ];

  const subjects = [
    { name: 'English Literature & Grammar', icon: <Languages className="w-6 h-6 text-[#f0ad00]" />, desc: 'Focusing on phonetics, syntax, speech patterns, public debate, and literature appreciation.' },
    { name: 'Mathematics & Algebra', icon: <Binary className="w-6 h-6 text-[#f0ad00]" />, desc: 'Building numerical aptitude, spatial geometry, and algebraic logic using visual aids.' },
    { name: 'Science (PCB)', icon: <FlaskConical className="w-6 h-6 text-[#f0ad00]" />, desc: 'Exploring nature, physics, chemistry, and biological systems through hand-on lab experiments.' },
    { name: 'Social Studies', icon: <Compass className="w-6 h-6 text-[#f0ad00]" />, desc: 'Understanding geography, democratic civics, and global history to foster informed citizenship.' },
    { name: 'Hindi & Gujarati', icon: <BookOpen className="w-6 h-6 text-[#f0ad00]" />, desc: 'Strengthening regional language vocabulary, local literature, writing styles, and cultural roots.' },
    { name: 'Computer Education', icon: <Monitor className="w-6 h-6 text-[#f0ad00]" />, desc: 'Introducing basic coding, word processing, slides creation, and safe browsing habits in our lab.' }
  ];

  const methodologies = [
    {
      icon: <Lightbulb className="w-8 h-8 text-[#004d61]" />,
      title: 'Conceptual Over Rote Learning',
      desc: 'Our teachers avoid direct memorization techniques. We explain the "why" behind concepts, demonstrating laws of science and mathematics visually.'
    },
    {
      icon: <Presentation className="w-8 h-8 text-[#004d61]" />,
      title: 'Smart Tech Integration',
      desc: 'All classrooms are equipped with modern screen displays. Complex biological cycles, geographic motions, and historical timelines are shown in motion.'
    },
    {
      icon: <UserCheck className="w-8 h-8 text-[#004d61]" />,
      title: 'Individual Attention',
      desc: 'We maintain a strict maximum limit of 30 students per class. This allows educators to identify weak nodes in a student’s learning curve and address them.'
    },
    {
      icon: <FileText className="w-8 h-8 text-[#004d61]" />,
      title: 'Regular Formative Assessments',
      desc: 'Weekly diagnostic tests replace sudden massive exams. This eliminates children’s exam anxiety and gives parents realistic, progressive feedback.'
    }
  ];

  return (
    <div className="w-full bg-[#F8FAFC]">
      {/* 1. Header Banner */}
      <section className="bg-[#004d61] py-16 px-4 md:px-8 border-b border-[#f0ad00]/10 relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(240,173,0,0.04)_0%,transparent_50%)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <h1 className="font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
              Academic Programs & Curriculum
            </h1>
            <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto mt-3 font-light leading-relaxed">
              Standard-aligned pedagogical structures delivering comprehensive learning from Nursery to Class X.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Offered Classes Sections */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <div className="text-[#004d61] text-xs font-bold uppercase tracking-widest inline-flex items-center gap-2">
              <span className="w-4 h-0.5 bg-[#f0ad00]"></span> Grade Progression <span className="w-4 h-0.5 bg-[#f0ad00]"></span>
            </div>
            <h2 className="font-sans font-extrabold text-[#004d61] text-3xl sm:text-4xl mt-2">
              Our Academic Structure
            </h2>
            <p className="text-gray-500 text-sm sm:text-base mt-3">
              We structure our lessons carefully to sync with psychological and analytical development phases in children.
            </p>
          </ScrollReveal>
        </div>

        <div className="space-y-12">
          {classSections.map((section, idx) => (
            <ScrollReveal key={idx} delayClass={`delay-${idx * 100}`}>
              <div className="bg-white rounded-3xl shadow-md border border-gray-150 p-8 sm:p-10 hover:border-[#f0ad00]/30 transition-all duration-350 flex flex-col lg:flex-row gap-8 items-start lg:items-center">
                {/* Visual Label Area */}
                <div className="lg:w-1/3 bg-[#004d61] text-white p-8 rounded-2xl w-full flex flex-col justify-between shrink-0 relative overflow-hidden min-h-[200px]">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-bl-full pointer-events-none"></div>
                  <div>
                    <span className="text-[#f0ad00] text-xs font-bold uppercase tracking-widest block mb-1">GPS Program</span>
                    <h3 className="font-sans font-extrabold text-2xl text-white leading-tight">{section.title}</h3>
                    <span className="text-sm text-gray-300 block mt-1">{section.subtitle}</span>
                  </div>
                  <div className="mt-6 flex items-center gap-1.5 text-xs text-[#f0ad00] font-semibold uppercase tracking-wider">
                    <GraduationCap className="w-4 h-4" /> {section.focus}
                  </div>
                </div>

                {/* Description Area */}
                <div className="lg:w-2/3 space-y-6 text-left">
                  <p className="text-gray-650 text-sm sm:text-base leading-relaxed">
                    {section.description}
                  </p>
                  <div>
                    <h4 className="font-sans font-extrabold text-[#004d61] text-sm uppercase tracking-wide mb-3">Program Highlights:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {section.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 font-medium">
                          <div className="w-1.5 h-1.5 bg-[#f0ad00] rounded-full shrink-0"></div>
                          {feat}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 3. Curriculum Approach */}
      <section className="bg-[#004d61] text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(240,173,0,0.04)_0%,transparent_50%)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <ScrollReveal className="lg:col-span-6 space-y-6 text-left">
            <span className="text-[#f0ad00] text-xs font-bold uppercase tracking-widest block">Pedagogical Framework</span>
            <h2 className="font-sans font-extrabold text-white text-3xl sm:text-4xl leading-tight">
              A Curriculum Tailored For Future Achievements
            </h2>
            <p className="text-gray-350 text-sm sm:text-base leading-relaxed font-light">
              Our curriculum alignment borrows principles from CBSE education schemas to design a balanced, progressive knowledge flow. The framework emphasizes linguistic mastery, technological literacy, physical health, and logical reasoning.
            </p>
            <div className="space-y-4">
              {[
                { title: 'Interactive Practical Projects', desc: 'Encouraging application-based science experiments rather than theoretical memory.' },
                { title: 'Strong Language Foundations', desc: 'Strict English medium training backed by comprehensive regional Hindi and Gujarati study.' },
                { title: 'Digital Familiarity', desc: 'Compulsory digital classes to build computing dexterity early in academic cycles.' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3">
                  <div className="w-6 h-6 bg-[#f0ad00] text-[#004d61] rounded-full flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-[#f0ad00]">{item.title}</h5>
                    <p className="text-xs text-gray-300 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
          
          <ScrollReveal delayClass="delay-200" className="lg:col-span-6 bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md">
            <h3 className="font-sans font-extrabold text-xl text-[#f0ad00] mb-6">GPS Student Development Milestones</h3>
            <div className="space-y-6 text-left">
              {[
                { phase: 'Early Grades (Nursery - UKG)', focus: 'Social adaptation, fine motor coordination, phonetic listening skills, and sensory explorations.' },
                { phase: 'Lower Primary (Class 1 - 5)', focus: 'Mathematical arithmetic, text reading comprehension, scientific curiosity, and structured handwriting.' },
                { phase: 'Secondary Grades (Class 6 - 10)', focus: 'Analytical scientific deductions, computing systems, historical awareness, and board exam mock drills.' }
              ].map((mile, idx) => (
                <div key={idx} className="border-b border-white/5 pb-4 last:border-b-0 last:pb-0">
                  <h4 className="font-sans font-extrabold text-white text-sm">{mile.phase}</h4>
                  <p className="text-xs text-gray-400 mt-1 leading-relaxed">{mile.focus}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 4. Subject Highlights */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <div className="text-[#004d61] text-xs font-bold uppercase tracking-widest inline-flex items-center gap-2">
              <span className="w-4 h-0.5 bg-[#f0ad00]"></span> Subjects & Skills <span className="w-4 h-0.5 bg-[#f0ad00]"></span>
            </div>
            <h2 className="font-sans font-extrabold text-[#004d61] text-3xl sm:text-4xl mt-2">
              Core Subject Highlights
            </h2>
            <p className="text-gray-500 text-sm sm:text-base mt-3">
              We offer comprehensive training in core and regional languages, scientific branches, calculations, and modern digital literacy.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {subjects.map((sub, idx) => (
            <ScrollReveal key={idx} delayClass={`delay-${(idx % 3) * 100}`}>
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-150 hover:border-[#f0ad00] hover:shadow-md transition-all duration-300 h-full flex flex-col">
                <div className="p-3 bg-[#004d61]/5 text-[#004d61] rounded-xl w-fit mb-4 shadow-sm">
                  {sub.icon}
                </div>
                <h3 className="font-sans font-extrabold text-lg text-[#004d61] mb-2">{sub.name}</h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed flex-grow">
                  {sub.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 5. Teaching Methodology Cards */}
      <section className="bg-slate-100 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <ScrollReveal>
              <div className="text-[#004d61] text-xs font-bold uppercase tracking-widest inline-flex items-center gap-2">
                <span className="w-4 h-0.5 bg-[#f0ad00]"></span> Pedagogical Pillars <span className="w-4 h-0.5 bg-[#f0ad00]"></span>
              </div>
              <h2 className="font-sans font-extrabold text-[#004d61] text-3xl sm:text-4xl mt-2">
                Our Teaching Methodologies
              </h2>
              <p className="text-gray-650 text-sm sm:text-base mt-3">
                How we deliver knowledge matters. We employ modern, child-centric techniques that ensure high comprehension and low academic stress.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {methodologies.map((method, idx) => (
              <ScrollReveal key={idx} delayClass={`delay-${(idx % 2) * 100}`}>
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 h-full flex items-start gap-5 text-left">
                  <div className="p-3 bg-[#f0ad00]/10 rounded-xl text-[#004d61] shrink-0">
                    {method.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-sans font-extrabold text-lg text-[#004d61]">{method.title}</h3>
                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{method.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
