import React from 'react';
import { 
  Target, 
  Compass, 
  Award, 
  Lightbulb, 
  Heart, 
  Globe 
} from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';

export const About: React.FC = () => {
  const coreValues = [
    {
      icon: <Award className="w-7 h-7 text-[#f0ad00]" />,
      title: 'Excellence',
      description: 'We strive for exceptional standards in academic and co-curricular pursuits, encouraging every child to reach their highest potential.'
    },
    {
      icon: <Compass className="w-7 h-7 text-[#f0ad00]" />,
      title: 'Discipline',
      description: 'We believe structure and self-regulation are key to growth. Our pupils learn the value of respect, punctuality, and responsibility.'
    },
    {
      icon: <Lightbulb className="w-7 h-7 text-[#f0ad00]" />,
      title: 'Innovation',
      description: 'Embracing modern smart classrooms and computer education, we prepare students for a rapidly advancing digital future.'
    },
    {
      icon: <Heart className="w-7 h-7 text-[#f0ad00]" />,
      title: 'Moral Values',
      description: 'Nurturing integrity, empathy, and social ethics is central to our teaching, molding compassionate citizens for tomorrow.'
    }
  ];

  const differentiators = [
    {
      title: 'Dedicated Teachers',
      description: 'Our qualified staff is deeply committed to student development, giving personal attention to every child.'
    },
    {
      title: 'English-Medium Focus',
      description: 'Strong emphasis on spoken English, written grammar, and reading literacy to prepare kids for global opportunities.'
    },
    {
      title: 'Practical Laboratory Work',
      description: 'Hands-on practice in science and computer labs rather than just reading concepts from textbook pages.'
    },
    {
      title: 'Holistic Assessments',
      description: 'Regular and multi-dimensional evaluations testing logical thinking, academic skills, and creative abilities.'
    },
    {
      title: 'Values-Led Environment',
      description: 'Strict adherence to morals, clean school environment, and zero tolerance for bullying or modern distractions.'
    },
    {
      title: 'Secure Smart Campus',
      description: 'Fully enclosed campus with automated surveillance systems, securing child well-being at all times.'
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
              About Genius Public School
            </h1>
            <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto mt-3 font-light leading-relaxed">
              Nurturing young minds, instilling strong values, and fostering scholastic excellence in Pandesara, Surat.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. School Story */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal className="space-y-6">
            <div className="text-[#004d61] text-xs font-bold uppercase tracking-widest flex items-center gap-2">
              <span className="w-6 h-0.5 bg-[#f0ad00]"></span> Established With A Vision
            </div>
            <h2 className="font-sans font-extrabold text-[#004d61] text-3xl sm:text-4xl leading-tight">
              Our Journey of Shaping Bright Minds
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Genius Public School was established in Pandesara, Surat, with a singular mission: to make premium English-medium education accessible to the children of our community. What started as a modest vision has grown into a leading local institution characterized by academic dedication, state-of-the-art facilities, and stellar outcomes.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm">
              We recognized the demand for a school that blends standard curricula with rich values and modern practical skills. By integrating digital learning aids, hands-on science laboratories, and intensive computer courses into standard classes, we provide our students with a massive head start.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm">
              Today, Genius Public School is home to over 500 enthusiastic learners and a highly qualified teaching faculty. We take pride in our 100% board exam outcomes and, more importantly, the positive social impact our alumni make.
            </p>
          </ScrollReveal>

          <ScrollReveal delayClass="delay-200" className="h-full">
            <div className="bg-[#004d61] text-white p-8 sm:p-10 rounded-3xl shadow-xl border border-white/5 relative h-full flex flex-col justify-center">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full pointer-events-none"></div>
              <h3 className="font-sans font-extrabold text-2xl text-[#f0ad00] mb-6">Our Educational Philosophy</h3>
              <p className="text-gray-200 text-sm sm:text-base leading-relaxed mb-6 font-light">
                "We do not teach children what to think; we train them how to analyze. Every student possesses unique potentials, and our role is to trigger that curiosity and structure it with proper discipline and knowledge."
              </p>
              <div className="border-t border-white/10 pt-6">
                <span className="text-sm font-semibold text-[#f0ad00] block">Guiding Standard:</span>
                <span className="text-xs text-gray-400 block mt-0.5">Holistic education aligned with modern developmental milestones.</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. Vision & Mission Cards */}
      <section className="bg-slate-100 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision Card */}
            <ScrollReveal className="h-full">
              <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-md border border-gray-100 h-full flex flex-col hover-lift">
                <div className="bg-[#004d61] text-white p-4 rounded-2xl w-fit mb-6 shadow-md">
                  <Globe className="w-8 h-8 text-[#f0ad00]" />
                </div>
                <h3 className="font-sans font-extrabold text-2xl text-[#004d61] mb-4">Our Vision</h3>
                <p className="text-gray-500 text-sm sm:text-base leading-relaxed flex-grow">
                  To be an internationally minded center of academic excellence, preparing future-ready leaders who combine analytical mastery, critical thinking, global competence, and profound Indian values to serve society.
                </p>
              </div>
            </ScrollReveal>

            {/* Mission Card */}
            <ScrollReveal delayClass="delay-200" className="h-full">
              <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-md border border-gray-100 h-full flex flex-col hover-lift">
                <div className="bg-[#004d61] text-white p-4 rounded-2xl w-fit mb-6 shadow-md">
                  <Target className="w-8 h-8 text-[#f0ad00]" />
                </div>
                <h3 className="font-sans font-extrabold text-2xl text-[#004d61] mb-4">Our Mission</h3>
                <p className="text-gray-500 text-sm sm:text-base leading-relaxed flex-grow">
                  To deliver premium, accessible, and structured English-medium education through collaborative teacher-student methodologies, ensuring optimal cognitive, emotional, physical, and ethical growth for every single child under our care.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 4. Core Values Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <div className="text-[#004d61] text-xs font-bold uppercase tracking-widest inline-flex items-center gap-2">
              <span className="w-4 h-0.5 bg-[#f0ad00]"></span> Pillars of GPS <span className="w-4 h-0.5 bg-[#f0ad00]"></span>
            </div>
            <h2 className="font-sans font-extrabold text-[#004d61] text-3xl sm:text-4xl mt-2">
              Our Pillars of Excellence
            </h2>
            <p className="text-gray-500 text-sm sm:text-base mt-3">
              We anchor our academic environment on four foundational virtues, molding children into successful, moral, and capable individuals.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreValues.map((val, idx) => (
            <ScrollReveal key={idx} delayClass={`delay-${idx * 100}`}>
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-150 text-center hover:border-[#f0ad00] transition-all duration-300 h-full flex flex-col items-center">
                <div className="p-3 bg-[#004d61]/5 rounded-full mb-4">
                  {val.icon}
                </div>
                <h3 className="font-sans font-extrabold text-lg text-[#004d61] mb-2">{val.title}</h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed flex-grow">
                  {val.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 5. Why Choose Us Section */}
      <section className="bg-[#264653] text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(240,173,0,0.03)_0%,transparent_50%)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <ScrollReveal>
              <div className="text-[#f0ad00] text-xs font-bold uppercase tracking-widest inline-flex items-center gap-2">
                <span className="w-4 h-0.5 bg-[#f0ad00]"></span> School Differentiators <span className="w-4 h-0.5 bg-[#f0ad00]"></span>
              </div>
              <h2 className="font-sans font-extrabold text-white text-3xl sm:text-4xl mt-2">
                Why Parents Choose Genius Public School
              </h2>
              <p className="text-gray-450 text-sm sm:text-base mt-3">
                Deciding on your child's schooling determines their future. Here are our structural highlights supporting that choice.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentiators.map((diff, idx) => (
              <ScrollReveal key={idx} delayClass={`delay-${(idx % 3) * 100}`}>
                <div className="bg-[#004d61]/40 border border-white/5 hover:border-[#f0ad00]/30 p-8 rounded-3xl transition-all duration-300 h-full flex flex-col">
                  <div className="text-[#f0ad00] font-sans font-extrabold text-3xl mb-4 opacity-50">
                    0{idx + 1}
                  </div>
                  <h3 className="font-sans font-extrabold text-lg text-white mb-2">
                    {diff.title}
                  </h3>
                  <p className="text-gray-350 text-xs sm:text-sm leading-relaxed flex-grow">
                    {diff.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
