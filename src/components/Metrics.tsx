import React from 'react';
import { Users, Shield, Baby } from 'lucide-react';

const Metrics: React.FC = () => {
  const metrics = [
    {
      icon: <Users className="w-5 h-5 text-[#5FA86E]" />,
      iconBg: "bg-[#E3E9DC] border-[#D1DDD3]",
      value: "10:1",
      label: "Teacher Ratio",
      description: "Dedicated personal attention"
    },
    {
      icon: <Baby className="w-5 h-5 text-[#D06B6A]" />,
      iconBg: "bg-[#F28482]/20 border-[#F28482]/30",
      value: "2 - 5 Yrs",
      label: "Age Groups",
      description: "Development-focused levels"
    },
    {
      icon: <Shield className="w-5 h-5 text-[#2A3E9C]" />,
      iconBg: "bg-[#E0E5FF] border-[#C8CEFF]",
      value: "CCTV Secure",
      label: "Campus Security",
      description: "24/7 continuous monitoring"
    }
  ];

  return (
    <section className="relative py-10 border-b border-brand-sage/20 bg-brand-bg z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-brand-sage/30">
          {metrics.map((metric, index) => (
            <div 
              key={index}
              className="flex flex-row items-center gap-5 p-4 md:px-10 justify-center md:justify-start hover:bg-white/40 transition-colors duration-300 rounded-2xl"
            >
              {/* Icon Container with Soft Outline Style */}
              <div className={`flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center border shadow-sm ${metric.iconBg}`}>
                {metric.icon}
              </div>
              
              {/* Text Group */}
              <div className="text-left">
                <span className="block text-2xl font-display font-bold text-brand-forest tracking-tight leading-none">
                  {metric.value}
                </span>
                <span className="block text-sm font-bold text-brand-forest/90 mt-1.5">
                  {metric.label}
                </span>
                <span className="block text-xs text-brand-forest/60 font-semibold mt-0.5">
                  {metric.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;
