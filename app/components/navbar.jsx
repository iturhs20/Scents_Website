"use client";

import React, { useState, useEffect } from "react";

export default function NimioraNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to sections
  const scrollToSection = (id) => {
    setIsMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#F5F1E8]/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* LOGO */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection("home")}
              className="group flex items-center space-x-2"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#D4A574] to-[#C19A6B] blur-md opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
                <span className="relative text-2xl font-serif font-bold bg-gradient-to-r from-[#8B4513] via-[#A0522D] to-[#D4A574] bg-clip-text text-transparent">
                  Nimiora
                </span>
              </div>
              <span className="text-xs font-light text-[#8B6F47] tracking-[0.3em] uppercase">
                Scents
              </span>
            </button>
          </div>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden md:flex items-center space-x-1">

            {/* Home */}
            <button onClick={() => scrollToSection("home")} className="nav-btn group">
              <span className="relative z-10">Home</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r 
                  from-[#D4A574] to-[#C19A6B] group-hover:w-full transition-all duration-300"></span>
            </button>

            {/* Our Story */}
            <button onClick={() => scrollToSection("section-story")} className="nav-btn group">
              <span className="relative z-10">Our Story</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r 
                  from-[#D4A574] to-[#C19A6B] group-hover:w-full transition-all duration-300"></span>
            </button>

            {/* Order */}
            <button onClick={() => scrollToSection("section-shop")} className="nav-btn group">
              <span className="relative z-10">Order</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r 
                  from-[#D4A574] to-[#C19A6B] group-hover:w-full transition-all duration-300"></span>
            </button>

            {/* New Arrivals */}
            <button onClick={() => scrollToSection("section-scents")} className="nav-btn group">
              <span className="relative z-10">New Arrivals</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r 
                  from-[#D4A574] to-[#C19A6B] group-hover:w-full transition-all duration-300"></span>
            </button>

            {/* Contact */}
            <button onClick={() => scrollToSection("section-newsletter")} className="nav-btn group">
              <span className="relative z-10">Contact</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r 
                  from-[#D4A574] to-[#C19A6B] group-hover:w-full transition-all duration-300"></span>
            </button>

          </div>

          {/* DESKTOP CTA BUTTON */}
          <div className="hidden md:block">
            <button className="relative px-6 py-2.5 overflow-hidden group">
              <span className="absolute inset-0 bg-gradient-to-r from-[#D4A574] via-[#C19A6B] to-[#B8956A] opacity-90"></span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#C19A6B] to-[#D4A574] opacity-0 
                  group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative text-white font-light tracking-wider text-sm">Shop Now</span>
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[#8B4513] hover:text-[#D4A574] transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 bg-[#F5F1E8]/95 backdrop-blur-md space-y-1">

            <button onClick={() => scrollToSection("home")} className="mobile-nav-btn">Home</button>

            <button onClick={() => scrollToSection("section-story")} className="mobile-nav-btn">
              Our Story
            </button>

            <button onClick={() => scrollToSection("section-shop")} className="mobile-nav-btn">
              Order
            </button>

            <button onClick={() => scrollToSection("section-scents")} className="mobile-nav-btn">
              New Arrivals
            </button>

            <button onClick={() => scrollToSection("section-newsletter")} className="mobile-nav-btn">
              Contact
            </button>

          </div>
        </div>
      </div>
    </nav>
  );
}
