"use client"

import React, { useState, useEffect } from 'react';

export default function NimioraSections() {
  const [activeScent, setActiveScent] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id^="section-"]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scents = [
    {
      name: 'Lavender Bliss',
      mood: 'Calm & Relaxing',
      notes: 'Lavender, Chamomile, Vanilla',
      description: 'Drift into tranquility with soothing florals',
      color: 'from-[#D4C4E0] to-[#E8E0F0]'
    },
    {
      name: 'Vanilla Dream',
      mood: 'Warm & Cozy',
      notes: 'Madagascar Vanilla, Tonka Bean, Amber',
      description: 'Embrace comfort in every flicker',
      color: 'from-[#E8DFD0] to-[#F5F1E8]'
    },
    {
      name: 'Midnight Oud',
      mood: 'Rich & Mysterious',
      notes: 'Oud Wood, Leather, Dark Musk',
      description: 'Indulge in depth and sophistication',
      color: 'from-[#6B5644] to-[#8B6F47]'
    },
    {
      name: 'Rose Petal Mist',
      mood: 'Soft & Romantic',
      notes: 'Rose Petals, Peony, White Tea',
      description: 'Celebrate love in delicate whispers',
      color: 'from-[#E8C4C4] to-[#D4A5A5]'
    }
  ];

  const features = [
    {
      icon: '🔥',
      title: 'Clean Burn',
      description: 'Natural soy wax + cotton wicks for a toxin-free burn.'
    },
    {
      icon: '🌺',
      title: 'Hand-Poured With Love',
      description: 'Every candle is individually crafted in small batches.'
    },
    {
      icon: '🌙',
      title: 'Long-Lasting Aroma',
      description: 'Designed to fill your home gently and consistently.'
    },
    {
      icon: '🌿',
      title: 'Eco-Friendly Jars',
      description: 'Reusable, recyclable, and sustainable.'
    },
    {
      icon: '✨',
      title: 'Mood-Based Scents',
      description: 'Whether calm, cozy, fresh, or romantic — we have a scent for every moment.'
    }
  ];

  return (
    <div className="w-full bg-gradient-to-b from-white via-[#F9F6F0] to-[#F5F1E8]">
      
      {/* SECTION 1 - STORY */}
      <section id="section-story" className="relative py-16 sm:py-20 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-20 right-0 w-64 h-64 bg-gradient-to-br from-[#E8C4C4]/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-gradient-to-tr from-[#D4C4E0]/20 to-transparent rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            
            {/* Text Content */}
            <div className={`space-y-6 sm:space-y-8 transition-all duration-1000 ${isVisible['section-story'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              {/* Title */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-px bg-gradient-to-r from-[#D4A574] to-transparent"></div>
                  <span className="text-sm sm:text-base text-[#D4A574] font-light tracking-widest uppercase">Our Journey</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif text-[#4A3F35] leading-tight">
                  Where Every Scent <span className="bg-gradient-to-r from-[#8B4513] to-[#D4A574] bg-clip-text text-transparent">Begins…</span>
                </h2>
              </div>

              {/* Description */}
              <div className="space-y-4 text-base sm:text-lg text-[#6B5644] leading-relaxed font-light">
                <p>
                  At <span className="font-normal text-[#8B4513]">Nimiora Scents</span>, every candle is a memory in wax. We blend soothing aromas, warm notes, and delicate accords to transform everyday moments into something magical.
                </p>
                <p>
                  From hand-poured soy wax to thoughtfully crafted scent combinations, each candle is designed to bring peace, comfort, and intention into your home.
                </p>
              </div>

              {/* Decorative Quote */}
              <div className="relative pl-6 border-l-2 border-[#D4A574] py-2">
                <p className="text-lg sm:text-xl italic text-[#8B4513] font-light">
                  "A flicker of light, a whisper of scent — creating moments worth remembering."
                </p>
              </div>
            </div>

            {/* Image Area */}
            <div className={`relative transition-all duration-1000 delay-200 ${isVisible['section-story'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                {/* Placeholder gradient - replace with actual image */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#E8DFD0] via-[#F5F1E8] to-[#D4A574]/30"></div>
                
                {/* Candle illustration overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="text-8xl sm:text-9xl">🕯️</div>
                    <p className="text-[#6B5644] font-light text-sm sm:text-base">Hand-Poured with Intention</p>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute top-10 right-10 w-20 h-20 bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center animate-pulse">
                  <span className="text-2xl">🌿</span>
                </div>
                <div className="absolute bottom-10 left-10 w-16 h-16 bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center animate-pulse delay-500">
                  <span className="text-xl">✨</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2 - FEATURES */}
      <section id="section-features" className="relative py-16 sm:py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className={`text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20 transition-all duration-1000 ${isVisible['section-features'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#4A3F35] mb-4">
              Crafted With <span className="bg-gradient-to-r from-[#8B4513] to-[#D4A574] bg-clip-text text-transparent">Care</span>
            </h2>
            <p className="text-base sm:text-lg text-[#6B5644] font-light">Every detail matters in creating your perfect moment</p>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group relative p-6 sm:p-8 bg-white/60 backdrop-blur-sm rounded-2xl border border-[#E8DFD0] hover:border-[#D4A574] hover:shadow-xl transition-all duration-500 ${isVisible['section-features'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4A574]/0 to-[#C19A6B]/0 group-hover:from-[#D4A574]/5 group-hover:to-[#C19A6B]/5 rounded-2xl transition-all duration-500"></div>
                
                <div className="relative space-y-4">
                  {/* Icon */}
                  <div className="text-5xl sm:text-6xl group-hover:scale-110 transition-transform duration-500">
                    {feature.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-serif text-[#4A3F35] group-hover:text-[#8B4513] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm sm:text-base text-[#6B5644] font-light leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Decorative line */}
                  <div className="w-0 h-0.5 bg-gradient-to-r from-[#D4A574] to-transparent group-hover:w-full transition-all duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 - SCENTS CAROUSEL */}
      <section id="section-scents" className="relative py-16 sm:py-20 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F5F1E8] to-transparent"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Section Header */}
          <div className={`text-center max-w-3xl mx-auto mb-12 sm:mb-16 transition-all duration-1000 ${isVisible['section-scents'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center justify-center space-x-3 mb-4">
              <span className="text-2xl">🌈</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#4A3F35]">
                Signature <span className="bg-gradient-to-r from-[#8B4513] to-[#D4A574] bg-clip-text text-transparent">Scents</span>
              </h2>
              <span className="text-2xl">🌈</span>
            </div>
            <p className="text-base sm:text-lg text-[#6B5644] font-light">Discover your perfect mood companion</p>
          </div>

          {/* Carousel */}
          <div className="relative">
            {/* Main Display */}
            <div className={`relative transition-all duration-1000 ${isVisible['section-scents'] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-[#E8DFD0] max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2">
                  
                  {/* Scent Visual */}
                  <div className={`relative h-64 sm:h-80 md:h-96 bg-gradient-to-br ${scents[activeScent].color} flex items-center justify-center transition-all duration-700`}>
                    <div className="text-center space-y-4 p-8">
                      <div className="text-7xl sm:text-8xl lg:text-9xl animate-pulse">🕯️</div>
                      <div className="bg-white/40 backdrop-blur-sm rounded-full px-6 py-2 inline-block">
                        <p className="text-sm font-light text-[#4A3F35]">{scents[activeScent].mood}</p>
                      </div>
                    </div>
                    
                    {/* Floating sparkles */}
                    <div className="absolute top-10 right-10 text-2xl animate-pulse">✨</div>
                    <div className="absolute bottom-10 left-10 text-xl animate-pulse delay-300">✨</div>
                  </div>

                  {/* Scent Details */}
                  <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center space-y-4 sm:space-y-6">
                    <div>
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#4A3F35] mb-2">
                        {scents[activeScent].name}
                      </h3>
                      <p className="text-sm sm:text-base text-[#D4A574] font-light tracking-wide uppercase">
                        {scents[activeScent].mood}
                      </p>
                    </div>

                    <div className="space-y-3">
                      <p className="text-xs sm:text-sm text-[#8B6F47] font-light tracking-widest uppercase">Scent Notes</p>
                      <p className="text-base sm:text-lg text-[#6B5644] font-light">
                        {scents[activeScent].notes}
                      </p>
                    </div>

                    <p className="text-sm sm:text-base italic text-[#8B4513] font-light">
                      {scents[activeScent].description}
                    </p>

                    <button className="group w-full sm:w-auto self-start px-6 sm:px-8 py-3 border-2 border-[#D4A574] hover:border-[#8B4513] transition-all duration-300">
                      <span className="flex items-center justify-center space-x-2 text-[#8B4513] font-light tracking-wider text-sm">
                        <span>Learn More</span>
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center items-center space-x-3 mt-8">
              {scents.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveScent(index)}
                  className={`transition-all duration-300 ${
                    activeScent === index
                      ? 'w-12 h-3 bg-gradient-to-r from-[#8B4513] to-[#D4A574] rounded-full'
                      : 'w-3 h-3 bg-[#E8DFD0] hover:bg-[#D4A574] rounded-full'
                  }`}
                  aria-label={`View ${scents[index].name}`}
                />
              ))}
            </div>

            {/* Arrow Navigation */}
            <button
              onClick={() => setActiveScent((prev) => (prev === 0 ? scents.length - 1 : prev - 1))}
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-16 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full items-center justify-center shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 border border-[#E8DFD0]"
            >
              <svg className="w-6 h-6 text-[#8B4513]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={() => setActiveScent((prev) => (prev === scents.length - 1 ? 0 : prev + 1))}
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-16 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full items-center justify-center shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 border border-[#E8DFD0]"
            >
              <svg className="w-6 h-6 text-[#8B4513]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}