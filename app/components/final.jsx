"use client"

import React, { useState, useEffect } from 'react';

export default function NimioraFinalSections() {
  const [isVisible, setIsVisible] = useState({});
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

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

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 3000);
    }
  };

  const whyChooseReasons = [
    {
      icon: '🌱',
      title: '100% Natural Soy Wax',
      description: 'Eco-friendly, clean-burning, and sustainable. Better for you and the planet.'
    },
    {
      icon: '🎨',
      title: 'Artisan Crafted',
      description: 'Hand-poured in small batches with meticulous attention to every detail.'
    },
    {
      icon: '💝',
      title: 'Thoughtful Gifting',
      description: 'Beautifully packaged, perfect for birthdays, anniversaries, or self-care.'
    },
    {
      icon: '⏱️',
      title: '50+ Hour Burn Time',
      description: 'Long-lasting fragrance that fills your space for weeks, not days.'
    },
    {
      icon: '🧪',
      title: 'Phthalate-Free Scents',
      description: 'Premium fragrance oils without harmful chemicals or toxins.'
    },
    {
      icon: '♻️',
      title: 'Reusable Containers',
      description: 'Gorgeous vessels you can repurpose as planters, storage, or decor.'
    }
  ];

  const collections = [
    {
      name: 'Bestsellers',
      icon: '⭐',
      gradient: 'from-[#D4A574] to-[#C19A6B]',
      description: 'Customer favorites'
    },
    {
      name: 'New Arrivals',
      icon: '✨',
      gradient: 'from-[#E8C4C4] to-[#D4A5A5]',
      description: 'Fresh scents'
    },
    {
      name: 'Gift Sets',
      icon: '🎁',
      gradient: 'from-[#D4C4E0] to-[#C4B4D0]',
      description: 'Perfect for giving'
    },
    {
      name: 'Limited Edition',
      icon: '🌟',
      gradient: 'from-[#8B4513] to-[#A0522D]',
      description: 'Exclusive collection'
    }
  ];

  const instagramPosts = [
    { id: 1, emoji: '🕯️', color: 'from-[#E8DFD0] to-[#F5F1E8]' },
    { id: 2, emoji: '🌸', color: 'from-[#E8C4C4] to-[#F5E0E0]' },
    { id: 3, emoji: '🍂', color: 'from-[#D4A574] to-[#E8C4A0]' },
    { id: 4, emoji: '💐', color: 'from-[#D4C4E0] to-[#E8E0F0]' },
    { id: 5, emoji: '🌿', color: 'from-[#C4D4C4] to-[#E0F0E0]' },
    { id: 6, emoji: '✨', color: 'from-[#F5F1E8] to-[#FFFFFF]' }
  ];

  return (
    <div className="w-full bg-gradient-to-b from-[#F5F1E8] via-white to-[#F9F6F0]">
      
      {/* SECTION 1 - WHY CHOOSE US */}
      <section id="section-why" className="relative py-16 sm:py-20 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#D4A574]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#E8C4C4]/10 to-transparent rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Section Header */}
          <div className={`text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20 transition-all duration-1000 ${isVisible['section-why'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#D4A574] to-transparent"></div>
              <span className="text-2xl">💎</span>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#D4A574] to-transparent"></div>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif text-[#4A3F35] mb-4">
              Why Choose <span className="bg-gradient-to-r from-[#8B4513] to-[#D4A574] bg-clip-text text-transparent">Nimiora</span>
            </h2>
            <p className="text-base sm:text-lg text-[#6B5644] font-light leading-relaxed">
              We believe candles are more than decor — they're an experience, a feeling, a memory in the making.
            </p>
          </div>

          {/* Reasons Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {whyChooseReasons.map((reason, index) => (
              <div
                key={index}
                className={`group relative transition-all duration-700 ${isVisible['section-why'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative h-full p-6 sm:p-8 bg-white/70 backdrop-blur-sm rounded-2xl border-2 border-[#E8DFD0] hover:border-[#D4A574] hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D4A574]/0 via-[#C19A6B]/0 to-[#E8C4C4]/0 group-hover:from-[#D4A574]/10 group-hover:via-[#C19A6B]/5 group-hover:to-[#E8C4C4]/10 transition-all duration-500"></div>
                  
                  <div className="relative space-y-4">
                    {/* Icon */}
                    <div className="text-5xl sm:text-6xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      {reason.icon}
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-serif text-[#4A3F35] group-hover:text-[#8B4513] transition-colors duration-300">
                      {reason.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-sm sm:text-base text-[#6B5644] font-light leading-relaxed">
                      {reason.description}
                    </p>

                    {/* Decorative accent */}
                    <div className="flex items-center space-x-2 pt-2">
                      <div className="w-0 h-0.5 bg-gradient-to-r from-[#D4A574] to-transparent group-hover:w-full transition-all duration-700"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Badge */}
          <div className={`mt-12 sm:mt-16 text-center transition-all duration-1000 delay-700 ${isVisible['section-why'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center space-x-6 px-8 py-4 bg-gradient-to-r from-[#F5F1E8] via-white to-[#F5F1E8] rounded-full border border-[#E8DFD0] shadow-lg">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">⭐</span>
                <div className="text-left">
                  <p className="text-sm font-light text-[#8B6F47]">5-Star Rated</p>
                  <p className="text-xs text-[#6B5644]">1,500+ Reviews</p>
                </div>
              </div>
              <div className="w-px h-8 bg-[#E8DFD0]"></div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl">🌍</span>
                <div className="text-left">
                  <p className="text-sm font-light text-[#8B6F47]">Eco-Conscious</p>
                  <p className="text-xs text-[#6B5644]">Carbon Neutral</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 - QUICK SHOP LINKS */}
      <section id="section-shop" className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#F9F6F0] via-[#F5F1E8] to-[#E8DFD0]">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible['section-shop'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#4A3F35] mb-3">
              Shop by <span className="bg-gradient-to-r from-[#8B4513] to-[#D4A574] bg-clip-text text-transparent">Collection</span>
            </h2>
            <p className="text-base sm:text-lg text-[#6B5644] font-light">Find your perfect candle in seconds</p>
          </div>

          {/* Collections Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {collections.map((collection, index) => (
              <div
                key={index}
                className={`group relative transition-all duration-700 ${isVisible['section-shop'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <button className="w-full h-full relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${collection.gradient} opacity-90 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  {/* Overlay pattern */}
                  <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
                    backgroundSize: '20px 20px'
                  }}></div>

                  {/* Glow effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-white transition-opacity duration-500"></div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center justify-center p-8 sm:p-10 lg:p-12 space-y-4 h-full min-h-[250px]">
                    <div className="text-5xl sm:text-6xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                      {collection.icon}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-serif text-white text-center">
                      {collection.name}
                    </h3>
                    <p className="text-sm text-white/80 font-light">{collection.description}</p>
                    
                    {/* Arrow indicator */}
                    <div className="flex items-center space-x-2 text-white opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                      <span className="text-sm font-light tracking-wider uppercase">Explore</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </button>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className={`text-center mt-10 sm:mt-12 transition-all duration-1000 delay-500 ${isVisible['section-shop'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <button className="group relative px-10 sm:px-12 py-4 overflow-hidden rounded-full shadow-lg hover:shadow-2xl transition-all duration-500">
              <span className="absolute inset-0 bg-gradient-to-r from-[#8B4513] via-[#A0522D] to-[#D4A574]"></span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#D4A574] to-[#8B4513] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <span className="relative flex items-center justify-center space-x-3 text-white font-light tracking-widest text-sm sm:text-base uppercase">
                <span>View All Products</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 3 - INSTAGRAM FEED */}
      <section id="section-instagram" className="relative py-16 sm:py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible['section-instagram'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center justify-center space-x-2 mb-3">
              <span className="text-2xl">📸</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#4A3F35]">
                Follow Our <span className="bg-gradient-to-r from-[#8B4513] to-[#D4A574] bg-clip-text text-transparent">Journey</span>
              </h2>
              <span className="text-2xl">✨</span>
            </div>
            <p className="text-base sm:text-lg text-[#6B5644] font-light mb-4">
              Join our community of candle lovers
            </p>
            <a 
              href="#" 
              className="inline-flex items-center space-x-2 text-[#8B4513] hover:text-[#D4A574] transition-colors duration-300 group"
            >
              <span className="font-light tracking-wider">@nimiorascents</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>

          {/* Instagram Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {instagramPosts.map((post, index) => (
              <div
                key={post.id}
                className={`group relative aspect-square overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-700 ${isVisible['section-instagram'] ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${post.color}`}></div>
                
                {/* Pattern overlay */}
                <div className="absolute inset-0 opacity-5" style={{
                  backgroundImage: `radial-gradient(circle, #8B4513 1px, transparent 1px)`,
                  backgroundSize: '20px 20px'
                }}></div>

                {/* Content */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <span className="text-5xl sm:text-6xl group-hover:scale-110 transition-transform duration-500">
                    {post.emoji}
                  </span>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#8B4513]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center p-4">
                  <div className="flex items-center space-x-3 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-light">View Post</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 - NEWSLETTER */}
      <section id="section-newsletter" className="relative py-16 sm:py-20 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#E8DFD0] via-[#F5F1E8] to-[#E8C4C4]"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-[#D4A574]/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-[#E8C4C4]/20 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className={`text-center transition-all duration-1000 ${isVisible['section-newsletter'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            
            {/* Decorative element */}
            <div className="flex justify-center mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#D4A574] to-transparent"></div>
                <span className="text-3xl">💌</span>
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#D4A574] to-transparent"></div>
              </div>
            </div>

            {/* Header */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif text-[#4A3F35] mb-4">
              Stay in the <span className="bg-gradient-to-r from-[#8B4513] to-[#D4A574] bg-clip-text text-transparent">Glow</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-[#6B5644] font-light mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
              Subscribe to receive exclusive offers, new scent launches, and a sprinkle of candle care tips straight to your inbox.
            </p>

            {/* Newsletter Form */}
            <div className="relative max-w-2xl mx-auto">
              {!subscribed ? (
                <form onSubmit={handleSubscribe} className="relative">
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-0">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      required
                      className="flex-1 px-6 py-4 sm:py-5 bg-white/90 backdrop-blur-sm border-2 border-[#E8DFD0] focus:border-[#D4A574] focus:outline-none rounded-full sm:rounded-l-full sm:rounded-r-none text-[#4A3F35] placeholder-[#8B6F47]/50 transition-all duration-300 shadow-lg"
                    />
                    <button
                      type="submit"
                      className="group relative px-8 sm:px-10 py-4 sm:py-5 overflow-hidden rounded-full sm:rounded-l-none sm:rounded-r-full shadow-lg hover:shadow-2xl transition-all duration-500"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-[#8B4513] via-[#A0522D] to-[#D4A574]"></span>
                      <span className="absolute inset-0 bg-gradient-to-r from-[#D4A574] to-[#8B4513] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                      <span className="relative flex items-center justify-center space-x-2 text-white font-light tracking-wider uppercase text-sm sm:text-base">
                        <span>Subscribe</span>
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                    </button>
                  </div>
                </form>
              ) : (
                <div className="bg-white/90 backdrop-blur-sm border-2 border-[#D4A574] rounded-full px-8 py-6 shadow-lg animate-pulse">
                  <div className="flex items-center justify-center space-x-3">
                    <span className="text-3xl">✨</span>
                    <p className="text-lg sm:text-xl text-[#8B4513] font-light">
                      Thank you for subscribing! Check your inbox soon.
                    </p>
                    <span className="text-3xl">💖</span>
                  </div>
                </div>
              )}
            </div>

            {/* Privacy note */}
            <p className="text-xs sm:text-sm text-[#8B6F47] font-light mt-6">
              We respect your privacy. Unsubscribe anytime. No spam, just candle love. ✨
            </p>

            {/* Perks */}
            <div className="grid sm:grid-cols-3 gap-6 mt-10 sm:mt-12">
              {[
                { icon: '🎁', text: 'Exclusive Offers' },
                { icon: '🔔', text: 'New Releases First' },
                { icon: '💡', text: 'Candle Care Tips' }
              ].map((perk, index) => (
                <div key={index} className="flex flex-col items-center space-y-2">
                  <span className="text-3xl sm:text-4xl">{perk.icon}</span>
                  <p className="text-sm sm:text-base text-[#6B5644] font-light">{perk.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 - FOOTER */}
      <footer className="relative bg-gradient-to-br from-[#4A3F35] via-[#6B5644] to-[#8B6F47] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
            
            {/* Brand Column */}
            <div className="space-y-4 sm:col-span-2 lg:col-span-1">
              <h3 className="text-2xl sm:text-3xl font-serif text-[#E8DFD0]">Nimiora</h3>
              <p className="text-sm text-white/80 font-light leading-relaxed">
                Handcrafted soy candles that turn moments into memories. Sustainably made with love.
              </p>
              <div className="flex items-center space-x-4 pt-2">
                {/* Social Media Icons */}
                <a href="#" className="group">
                  <div className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                </a>
                <a href="#" className="group">
                  <div className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </div>
                </a>
                <a href="#" className="group">
                  <div className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                    </svg>
                  </div>
                </a>
                <a href="#" className="group">
                  <div className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </div>
                </a>
              </div>
            </div>

            {/* Shop Column */}
            <div className="space-y-4">
              <h4 className="text-lg font-serif text-[#E8DFD0]">Shop</h4>
              <ul className="space-y-2 text-sm text-white/80 font-light">
                <li><a href="#" className="hover:text-[#D4A574] transition-colors duration-300">All Candles</a></li>
                <li><a href="#" className="hover:text-[#D4A574] transition-colors duration-300">Bestsellers</a></li>
                <li><a href="#" className="hover:text-[#D4A574] transition-colors duration-300">New Arrivals</a></li>
                <li><a href="#" className="hover:text-[#D4A574] transition-colors duration-300">Gift Sets</a></li>
                <li><a href="#" className="hover:text-[#D4A574] transition-colors duration-300">Limited Edition</a></li>
                <li><a href="#" className="hover:text-[#D4A574] transition-colors duration-300">Accessories</a></li>
              </ul>
            </div>

            {/* About Column */}
            <div className="space-y-4">
              <h4 className="text-lg font-serif text-[#E8DFD0]">About</h4>
              <ul className="space-y-2 text-sm text-white/80 font-light">
                <li><a href="#" className="hover:text-[#D4A574] transition-colors duration-300">Our Story</a></li>
                <li><a href="#" className="hover:text-[#D4A574] transition-colors duration-300">Sustainability</a></li>
                <li><a href="#" className="hover:text-[#D4A574] transition-colors duration-300">Candle Care</a></li>
                <li><a href="#" className="hover:text-[#D4A574] transition-colors duration-300">Reviews</a></li>
                <li><a href="#" className="hover:text-[#D4A574] transition-colors duration-300">Blog</a></li>
                <li><a href="#" className="hover:text-[#D4A574] transition-colors duration-300">Contact Us</a></li>
              </ul>
            </div>

            {/* Help Column */}
            <div className="space-y-4">
              <h4 className="text-lg font-serif text-[#E8DFD0]">Help</h4>
              <ul className="space-y-2 text-sm text-white/80 font-light">
                <li><a href="#" className="hover:text-[#D4A574] transition-colors duration-300">Shipping & Returns</a></li>
                <li><a href="#" className="hover:text-[#D4A574] transition-colors duration-300">Track Order</a></li>
                <li><a href="#" className="hover:text-[#D4A574] transition-colors duration-300">FAQs</a></li>
                <li><a href="#" className="hover:text-[#D4A574] transition-colors duration-300">Size Guide</a></li>
                <li><a href="#" className="hover:text-[#D4A574] transition-colors duration-300">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-[#D4A574] transition-colors duration-300">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 pt-8"></div>

          {/* Bottom Footer */}
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-sm text-white/60 font-light text-center sm:text-left">
              © 2024 Nimiora Scents. All rights reserved. Handcrafted with 💛
            </p>
            
            {/* Payment Icons */}
            <div className="flex items-center space-x-3">
              <span className="text-xs text-white/60 font-light">We accept:</span>
              <div className="flex items-center space-x-2">
                {['💳', '💵', '🏦', '📱'].map((icon, index) => (
                  <div key={index} className="w-8 h-8 rounded bg-white/10 flex items-center justify-center text-sm">
                    {icon}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Decorative Element */}
          <div className="flex justify-center mt-8">
            <div className="flex items-center space-x-2 text-white/40">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
              <span className="text-xl">🕯️</span>
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}