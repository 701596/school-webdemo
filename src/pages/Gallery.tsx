import React, { useState, useEffect } from 'react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ZoomIn, 
  Image as ImageIcon 
} from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';

interface GalleryImage {
  url: string;
  category: 'Classroom' | 'Sports' | 'Science Lab' | 'Cultural' | 'Assembly';
  title: string;
  description: string;
}

export const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const galleryImages: GalleryImage[] = [
    {
      url: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800&q=80',
      category: 'Classroom',
      title: 'Interactive Group Learning',
      description: 'Students working together on a collaborative group activity in our digital smart classroom.'
    },
    {
      url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80',
      category: 'Classroom',
      title: 'Phonics & Literacy Class',
      description: 'Primary section kids learning English spelling and vocabulary using visual blackboard displays.'
    },
    {
      url: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80',
      category: 'Classroom',
      title: 'Expert Faculty Lessons',
      description: 'Experienced teachers guiding students through complex concepts with care and attention.'
    },
    {
      url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
      category: 'Classroom',
      title: 'Mathematics Smart Class',
      description: 'Students resolving mathematical equations using graphical representation on interactive screens.'
    },
    {
      url: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80',
      category: 'Sports',
      title: 'Annual Athletics Meet',
      description: 'Students preparing at the starting blocks for the 100m sprint race on Annual Sports Day.'
    },
    {
      url: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=80',
      category: 'Sports',
      title: 'Inter-House Volleyball Tournament',
      description: 'Senior section students engaged in an intense match, learning coordination and teamwork.'
    },
    {
      url: 'https://images.unsplash.com/photo-1544698310-74ea9d1c8258?auto=format&fit=crop&w=800&q=80',
      category: 'Sports',
      title: 'Primary Football Training',
      description: 'Young primary students practicing basic dribbling skills with our physical education coach.'
    },
    {
      url: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=800&q=80',
      category: 'Science Lab',
      title: 'Microscopic Investigations',
      description: 'Upper primary kids examining plant cell structures during a practical Biology lab session.'
    },
    {
      url: 'https://images.unsplash.com/photo-1562774053-4ab90840bc20?auto=format&fit=crop&w=800&q=80',
      category: 'Science Lab',
      title: 'Chemistry Titration Experiment',
      description: 'Senior students handling chemical indicators under the strict supervision of laboratory experts.'
    },
    {
      url: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
      category: 'Cultural',
      title: 'Annual Day Stage Choir',
      description: 'Students singing patriotic and inspirational melodies during the cultural celebrations.'
    },
    {
      url: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80',
      category: 'Cultural',
      title: 'Traditional Folk Dance Performance',
      description: 'Primary kids dressed in vibrant Gujarati attire performing Garba on Stage during Navratri celebrations.'
    },
    {
      url: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80',
      category: 'Assembly',
      title: 'Morning Assembly & Prayer',
      description: 'Daily discipline routine where kids gather for prayers, news reading, and motivational talks.'
    }
  ];

  const categories = ['All', 'Classroom', 'Sports', 'Science Lab', 'Cultural', 'Assembly'];

  const filteredImages = filter === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(prev => (prev !== null && prev > 0 ? prev - 1 : filteredImages.length - 1));
  };

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(prev => (prev !== null && prev < filteredImages.length - 1 ? prev + 1 : 0));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'Escape') setLightboxIndex(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);

  return (
    <div className="w-full bg-[#F8FAFC]">
      {/* 1. Header Banner */}
      <section className="bg-[#004d61] py-16 px-4 md:px-8 border-b border-[#f0ad00]/10 relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(240,173,0,0.04)_0%,transparent_50%)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <h1 className="font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
              School Photo Gallery
            </h1>
            <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto mt-3 font-light leading-relaxed">
              Take a visual tour of Genius Public School. Glimpses of classrooms, sports meets, laboratory events, and festivals.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Gallery Filter & Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Category Filters */}
        <ScrollReveal>
          <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setFilter(cat);
                  setLightboxIndex(null);
                }}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  filter === cat
                    ? 'bg-[#004d61] text-white shadow-md border-b-2 border-[#f0ad00]'
                    : 'bg-white hover:bg-slate-100 text-slate-650 border border-gray-200 shadow-sm'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredImages.map((img, idx) => (
            <ScrollReveal key={idx} delayClass={`delay-${(idx % 3) * 100}`}>
              <div 
                onClick={() => setLightboxIndex(idx)}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-200/80 group cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative flex flex-col h-full"
              >
                {/* Image Wrap */}
                <div className="overflow-hidden relative aspect-video bg-slate-900 shrink-0">
                  <img
                    src={img.url}
                    alt={img.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  {/* Category Tag */}
                  <span className="absolute top-3 left-3 bg-[#004d61]/90 text-[#f0ad00] border border-[#f0ad00]/20 text-[10px] font-bold px-2.5 py-1 rounded-md backdrop-blur-sm">
                    {img.category}
                  </span>
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[#004d61]/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                    <div className="bg-white/90 p-3 rounded-full text-[#004d61] shadow-lg scale-90 group-hover:scale-100 transition-transform duration-300">
                      <ZoomIn className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Text Area */}
                <div className="p-5 flex-grow flex flex-col justify-between text-left">
                  <div>
                    <h3 className="font-sans font-extrabold text-slate-800 text-base sm:text-lg mb-1 group-hover:text-[#004d61] transition-colors leading-snug">
                      {img.title}
                    </h3>
                    <p className="text-gray-505 text-xs sm:text-sm leading-relaxed line-clamp-2 mb-0">
                      {img.description}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            <ImageIcon className="w-12 h-12 mx-auto mb-4 stroke-1 text-gray-300" />
            <p>No images found in this category.</p>
          </div>
        )}
      </section>

      {/* 3. Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 bg-slate-950/95 z-[9999] flex flex-col justify-between p-4 md:p-8">
          {/* Top Bar */}
          <div className="flex justify-between items-center text-white border-b border-white/10 pb-4">
            <div className="text-left">
              <span className="text-[#f0ad00] text-[10px] font-bold tracking-widest uppercase block">
                {filteredImages[lightboxIndex].category}
              </span>
              <h4 className="font-sans font-extrabold text-base sm:text-lg">
                {filteredImages[lightboxIndex].title}
              </h4>
            </div>
            <button
              onClick={() => setLightboxIndex(null)}
              className="text-gray-400 hover:text-white focus:outline-none p-2 rounded-full hover:bg-white/10 cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Central Image & Controls */}
          <div className="flex-grow flex items-center justify-between gap-4 py-8 relative">
            <button
              onClick={handlePrev}
              className="absolute left-0 sm:left-4 z-70 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full hover:scale-105 active:scale-95 transition-all cursor-pointer focus:outline-none"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 sm:w-8 h-8" />
            </button>

            <div className="max-w-4xl mx-auto max-h-[60vh] md:max-h-[70vh] flex items-center justify-center overflow-hidden">
              <img
                src={filteredImages[lightboxIndex].url}
                alt={filteredImages[lightboxIndex].title}
                className="max-w-full max-h-[60vh] md:max-h-[70vh] object-contain rounded-lg shadow-2xl border border-white/5"
              />
            </div>

            <button
              onClick={handleNext}
              className="absolute right-0 sm:right-4 z-70 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full hover:scale-105 active:scale-95 transition-all cursor-pointer focus:outline-none"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 sm:w-8 h-8" />
            </button>
          </div>

          {/* Bottom Bar Description */}
          <div className="max-w-3xl mx-auto text-center text-gray-300 text-xs sm:text-sm leading-relaxed border-t border-white/10 pt-4 w-full">
            <p className="mb-0">{filteredImages[lightboxIndex].description}</p>
            <span className="text-[10px] text-gray-500 block mt-2">
              Image {lightboxIndex + 1} of {filteredImages.length}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
