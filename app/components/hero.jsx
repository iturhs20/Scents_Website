"use client"

import React, { useState, useEffect } from 'react';

export default function NimioraHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div id="home" className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#F9F6F0] via-[#F5F1E8] to-[#E8DFD0]">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-[#D4A574]/20 to-[#C19A6B]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-[#E8C4C4]/20 to-[#D4A5A5]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-br from-[#D4C4E0]/15 to-[#E8E0F0]/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle, #8B4513 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center space-y-6 sm:space-y-8 lg:space-y-10">
            
            {/* Decorative Top Element */}
            <div className={`flex justify-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-12 sm:w-16 lg:w-20 h-px bg-gradient-to-r from-transparent via-[#D4A574] to-transparent"></div>
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#D4A574]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2L12.09 7.26L17.45 8.11L13.73 11.74L14.64 17.27L10 14.77L5.36 17.27L6.27 11.74L2.55 8.11L7.91 7.26L10 2Z"/>
                </svg>
                <div className="w-12 sm:w-16 lg:w-20 h-px bg-gradient-to-r from-transparent via-[#D4A574] to-transparent"></div>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-light text-[#4A3F35] leading-tight">
                Crafted to
              </span>
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-serif font-normal bg-gradient-to-r from-[#8B4513] via-[#D4A574] to-[#A0522D] bg-clip-text text-transparent mt-2 sm:mt-3 lg:mt-4">
                Cherish Moments
              </span>
            </h1>

            {/* Sparkle Decoration */}
            <div className={`flex justify-center space-x-2 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
              <span className="text-2xl sm:text-3xl lg:text-4xl text-[#D4A574] animate-pulse">✨</span>
              <span className="text-xl sm:text-2xl lg:text-3xl text-[#C19A6B] animate-pulse delay-100">✨</span>
              <span className="text-2xl sm:text-3xl lg:text-4xl text-[#D4A574] animate-pulse delay-200">✨</span>
            </div>

            {/* Subheading */}
            <p className={`text-base sm:text-lg md:text-xl lg:text-2xl text-[#6B5644] font-light max-w-3xl mx-auto leading-relaxed px-4 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Hand-poured candles made to fill your space with warmth, comfort, and meaning.
            </p>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-4 sm:pt-6 lg:pt-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              
              {/* Shop Now Button */}
              <button className="group relative w-full sm:w-auto px-8 sm:px-10 lg:px-12 py-3 sm:py-4 overflow-hidden">
                <span className="absolute inset-0 bg-gradient-to-r from-[#8B4513] via-[#A0522D] to-[#D4A574]"></span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#D4A574] to-[#8B4513] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                <span className="absolute inset-0 translate-y-full group-hover:translate-y-0 bg-gradient-to-t from-[#6B5644]/20 to-transparent transition-transform duration-500"></span>
                <span className="relative flex items-center justify-center space-x-2 text-white font-light tracking-widest text-sm sm:text-base uppercase">
                  <span>Shop Now</span>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </button>

              {/* Explore Scents Button */}
              <button className="group relative w-full sm:w-auto px-8 sm:px-10 lg:px-12 py-3 sm:py-4 border-2 border-[#D4A574] overflow-hidden hover:border-[#8B4513] transition-colors duration-300">
                <span className="absolute inset-0 bg-gradient-to-r from-[#D4A574]/0 to-[#D4A574]/0 group-hover:from-[#D4A574]/10 group-hover:to-[#C19A6B]/10 transition-all duration-500"></span>
                <span className="relative flex items-center justify-center space-x-2 text-[#8B4513] font-light tracking-widest text-sm sm:text-base uppercase">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-90 transition-transform duration-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2L12.09 7.26L17.45 8.11L13.73 11.74L14.64 17.27L10 14.77L5.36 17.27L6.27 11.74L2.55 8.11L7.91 7.26L10 2Z"/>
                  </svg>
                  <span>Explore Scents</span>
                </span>
              </button>
            </div>

            {/* Scroll Indicator */}
            <div className={`pt-8 sm:pt-12 lg:pt-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <div className="flex flex-col items-center space-y-3">
                <p className="text-xs sm:text-sm text-[#8B6F47] font-light tracking-widest uppercase">Discover More</p>
                <div className="w-6 h-10 sm:w-7 sm:h-12 border-2 border-[#D4A574] rounded-full flex items-start justify-center p-2">
                  <div className="w-1 h-2 bg-[#D4A574] rounded-full animate-bounce"></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        <svg className="relative block w-full h-16 sm:h-20 lg:h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                className="fill-white/30"></path>
        </svg>
      </div>
    </div>
  );
}