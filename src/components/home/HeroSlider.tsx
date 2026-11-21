import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { siteData } from "../../data/siteData";
import { Container } from "../common/Container";
import { ArrowRight, MapPin } from "lucide-react";

export const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = siteData.hero.slides;
  const slideInterval = 3000; // 3-second automatic transition

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, slideInterval);

    return () => clearInterval(timer);
  }, [slides.length, slideInterval]);

  return (
    <section className="relative min-h-[100dvh] lg:h-[100dvh] lg:max-h-[100dvh] flex items-center overflow-hidden bg-slate-950">
      {/* ======================================================== */}
      {/* DESKTOP BACKGROUND IMAGE SLIDER (FULL-BLEED CINEMATIC)   */}
      {/* ======================================================== */}
      <div className="hidden sm:block absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
          >
            <img
              src={slide.image}
              alt={slide.caption}
              className={`w-full h-full object-cover object-center transform transition-transform duration-[6000ms] ease-out ${index === currentSlide ? "scale-105" : "scale-100"
                }`}
            />
            {/* Desktop Vignette - Left-weighted for side text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/65 to-slate-950/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-slate-950/20" />
          </div>
        ))}
      </div>

      {/* ======================================================== */}
      {/* MOBILE VIEW: EXECUTIVE VISUAL STAGE (100% VISIBLE PHOTO) */}
      {/* (Widescreen 16:10 photo frame on top + Command Dock)     */}
      {/* ======================================================== */}
      <div className="block sm:hidden relative z-10 w-full min-h-[100dvh] flex flex-col justify-start pt-18 pb-6 px-4 bg-slate-950 gap-3 overflow-hidden">
        {/* ======================================================== */}
        {/* LIVING MOBILE LUXURY BACKGROUND TEXTURE & AMBIENT AURA    */}
        {/* ======================================================== */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          {/* Layer 1: Slow-Drifting Micro-Architectural Blueprint Grid */}
          <div className="absolute inset-0 hero-mobile-grid opacity-70" />

          {/* Layer 2: Slow-Breathing Upper Sapphire-Sky Light Orb */}
          <div className="absolute -top-12 -right-12 w-[340px] h-[340px] bg-gradient-to-bl from-blue-600/25 via-sky-500/18 to-transparent rounded-full blur-[90px] hero-mobile-aura-1" />

          {/* Layer 3: Slow-Breathing Lower Indigo-Cyan Light Orb */}
          <div className="absolute -bottom-16 -left-16 w-[320px] h-[320px] bg-gradient-to-tr from-indigo-600/22 via-blue-500/15 to-transparent rounded-full blur-[85px] hero-mobile-aura-2" />

          {/* Layer 4: Soft Vignette Overlay to enhance contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950/80" />
        </div>

        {/* Top: Dedicated 16:10 Visual Photographic Stage (Zero Cropping - Full People & Boardroom Visible) */}
        <div className="relative z-10 aspect-[16/10] w-full rounded-2xl overflow-hidden border border-white/20 shadow-[0_15px_35px_-10px_rgba(0,0,0,0.85),0_0_30px_rgba(56,189,248,0.2)] bg-slate-900 shrink-0">
          {/* Top Specular Edge Highlight */}
          <div className="absolute -top-px left-8 right-8 h-[1.5px] bg-gradient-to-r from-transparent via-sky-400 to-transparent z-30 pointer-events-none" />

          {/* Photographic Slider Images (Full 16:10 Showcase - No 70% Side Cropping) */}
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              <img
                src={slide.image}
                alt={slide.caption}
                className={`w-full h-full object-cover object-center transform transition-transform duration-[6000ms] ease-out ${
                  index === currentSlide ? "scale-105" : "scale-100"
                }`}
              />
              {/* Soft frame edge vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-slate-950/30" />
            </div>
          ))}

          {/* Top Floating Status Pill */}
          <div className="absolute top-2.5 left-2.5 z-20 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-950/85 border border-white/20 backdrop-blur-md text-[11px] font-semibold text-sky-300 shadow-md">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
            <span>CA Firm • Estd. ~1975</span>
          </div>

          {/* Bottom Caption Strip */}
          <div className="absolute bottom-2.5 inset-x-3 z-20">
            <p className="text-[11px] text-slate-200 font-medium truncate drop-shadow-md">
              {slides[currentSlide].caption}
            </p>
          </div>
        </div>

        {/* Middle: Executive Command Dock Card */}
        <div className="relative z-10 p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-slate-900/90 via-slate-950/95 to-slate-950 border border-white/15 border-t-white/30 shadow-xl backdrop-blur-md space-y-2.5 shrink-0">
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-[10px] font-semibold tracking-wider text-sky-300 uppercase shadow-sm">
            <span className="w-1 h-1 rounded-full bg-sky-400" />
            <span>Indirect Tax Specialization</span>
          </div>

          {/* Firm Name Heading */}
          <h1 className="text-2xl font-black text-white tracking-tight leading-tight">
            M B Gabhawala & Co.
          </h1>

          {/* Core Practice Subtitle */}
          <p className="text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-blue-400 to-indigo-300">
            Indirect Tax Advisory & GST Litigation
          </p>

          {/* Value Proposition */}
          <p className="text-[11px] text-slate-300 leading-relaxed font-normal">
            Delivering boardroom-grade tax counsel, appellate advocacy before GSTAT, and contract structuring across India.
          </p>

          {/* Authority Quick Chips */}
          <div className="flex items-center gap-1.5 pt-1 border-t border-white/10">
            <div className="flex-1 py-1 px-1 rounded-lg bg-white/5 border border-white/10 text-center text-[10px] font-medium text-slate-300 truncate">
              ⚖️ GSTAT Defense
            </div>
            <div className="flex-1 py-1 px-1 rounded-lg bg-white/5 border border-white/10 text-center text-[10px] font-medium text-slate-300 truncate">
              🏛️ 50+ Yrs Legacy
            </div>
            <div className="flex-1 py-1 px-1 rounded-lg bg-white/5 border border-white/10 text-center text-[10px] font-medium text-slate-300 truncate">
              📍 Kolkata HQ
            </div>
          </div>

          {/* Ergonomic Dual Thumb Actions */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            <Link
              to="/contact"
              className="relative group overflow-hidden flex items-center justify-center gap-1.5 py-3 px-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 text-white font-bold text-xs tracking-wide border border-blue-400/50 shadow-[inset_0_1px_1px_rgba(255,255,255,0.7),0_4px_16px_rgba(37,99,235,0.45)] active:scale-[0.98] transition-all cursor-pointer"
            >
              <div className="absolute top-0 left-0 right-0 h-[48%] bg-gradient-to-b from-white/35 via-white/10 to-transparent rounded-t-xl pointer-events-none" />
              <span className="relative z-10 font-bold drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">Consult Partners</span>
              <ArrowRight className="w-3.5 h-3.5 relative z-10" />
            </Link>

            <Link
              to="/services"
              className="relative group overflow-hidden flex items-center justify-center gap-1.5 py-3 px-2.5 rounded-xl bg-gradient-to-b from-white/15 via-white/[0.06] to-slate-900/60 text-white font-semibold text-xs tracking-wide border border-white/20 border-t-white/50 backdrop-blur-md shadow-[0_4px_16px_rgba(0,0,0,0.4)] active:scale-[0.98] transition-all cursor-pointer"
            >
              <div className="absolute top-0 left-0 right-0 h-[48%] bg-gradient-to-b from-white/20 via-white/5 to-transparent rounded-t-xl pointer-events-none" />
              <span className="relative z-10">Explore Services</span>
            </Link>
          </div>
        </div>

        {/* Lower Section: 3-Metric Institutional Stat Ribbon & Chambers Quick Access Bar */}
        <div className="relative z-10 space-y-2 shrink-0">
          {/* Institutional Fast-Metrics Ribbon */}
          <div className="grid grid-cols-3 gap-2 p-2.5 rounded-xl bg-gradient-to-r from-slate-900/80 via-slate-950/90 to-slate-900/80 border border-white/10 backdrop-blur-md shadow-md">
            <div className="text-center px-1">
              <span className="text-xs font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-blue-400 block">
                ~1975
              </span>
              <span className="text-[9px] uppercase tracking-wider text-slate-400 font-semibold block mt-0.5">
                50+ Yrs Legacy
              </span>
            </div>

            <div className="text-center px-1 border-x border-white/10">
              <span className="text-xs font-black text-white block">
                6 Cities
              </span>
              <span className="text-[9px] uppercase tracking-wider text-slate-400 font-semibold block mt-0.5">
                Pan-India
              </span>
            </div>

            <div className="text-center px-1">
              <span className="text-xs font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300 block">
                GSTAT
              </span>
              <span className="text-[9px] uppercase tracking-wider text-slate-400 font-semibold block mt-0.5">
                Tribunal Defense
              </span>
            </div>
          </div>

          {/* Kolkata Chambers Location Quick Bar */}
          <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-slate-900/60 border border-white/10 text-[10px] text-slate-300">
            <div className="flex items-center gap-1.5 truncate">
              <MapPin className="w-3 h-3 text-sky-400 shrink-0" />
              <span className="truncate">Behind Arsalan, Chinar Park, Kolkata</span>
            </div>
            <Link to="/contact" className="text-sky-400 font-semibold shrink-0 ml-2 hover:underline">
              Directions ↗
            </Link>
          </div>
        </div>
      </div>

      {/* DESKTOP HERO VIEW (UNCHANGED UNBOXED EXECUTIVE LAYOUT) */}
      <Container className="hidden sm:block relative z-10 pt-16 sm:pt-20">
        <div className="max-w-2xl space-y-4 sm:space-y-5">
          {/* Subtle Single Category Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-500/15 border border-blue-500/30 text-blue-400 text-xs font-semibold tracking-wider uppercase">
            Chartered Accountants • ~Since 1975 • Kolkata
          </div>

          {/* Proportional, Refined Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white tracking-tight leading-snug">
            M B Gabhawala & Co.
            <span className="block text-blue-400 font-semibold text-lg sm:text-2xl mt-1 tracking-normal">
              Indirect Tax Advisory & GST Litigation
            </span>
          </h1>

          {/* Clean 2-Line Subheading */}
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal max-w-xl">
            Delivering boardroom-grade tax counsel, appellate litigation, and corporate structuring for enterprises across India.
          </p>

          {/* Clean, Balanced Action Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <Link
              to="/contact"
              className="relative group overflow-hidden inline-flex items-center justify-center gap-2 px-6 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 hover:from-blue-500 hover:via-sky-400 hover:to-indigo-500 text-white font-semibold text-xs sm:text-sm tracking-wide transition-all duration-300 border border-blue-400/50 border-t-white/80 border-b-blue-900/60 shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.7),inset_0_-2px_4px_rgba(0,0,0,0.3),0_10px_25px_-5px_rgba(37,99,235,0.5),0_0_20px_rgba(56,189,248,0.35)] hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_15px_30px_-5px_rgba(37,99,235,0.65),0_0_25px_rgba(56,189,248,0.5)] hover:-translate-y-0.5 hover:scale-[1.02] cursor-pointer"
            >
              {/* Glossy Top Glass Curved Reflection */}
              <div className="absolute top-0 left-0 right-0 h-[48%] bg-gradient-to-b from-white/35 via-white/15 to-transparent rounded-t-xl pointer-events-none" />

              <span className="relative z-10 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">Consult Partners</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]" />
            </Link>

            <Link
              to="/services"
              className="relative group overflow-hidden inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:py-3 rounded-xl bg-gradient-to-b from-white/15 via-white/[0.06] to-slate-900/50 hover:bg-gradient-to-b hover:from-white/25 hover:via-white/10 hover:to-slate-800/60 text-white border border-white/20 border-t-white/60 border-b-white/10 font-semibold text-xs sm:text-sm tracking-wide transition-all duration-300 backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_8px_20px_-6px_rgba(0,0,0,0.5)] hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.6),0_12px_25px_-6px_rgba(0,0,0,0.6)] hover:border-white/40 hover:border-t-white/80 hover:-translate-y-0.5 cursor-pointer"
            >
              {/* Glossy Top Subtle Reflection */}
              <div className="absolute top-0 left-0 right-0 h-[48%] bg-gradient-to-b from-white/20 via-white/5 to-transparent rounded-t-xl pointer-events-none" />

              <span className="relative z-10">Explore Services</span>
            </Link>
          </div>
        </div>
      </Container>

      {/* ATTRACTIVE MODERN SCULPTED CURVED HORIZON BORDER DESIGN */}
      <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none">
        {/* Ambient upward light reflection */}
        <div className="h-16 bg-gradient-to-t from-blue-600/20 via-blue-500/5 to-transparent" />

        {/* Modern Sculpted Curved Horizon Border SVG */}
        <div className="relative w-full overflow-hidden leading-none">
          <svg
            className="relative block w-full h-8 sm:h-12 md:h-14 text-slate-950"
            viewBox="0 0 1440 64"
            fill="none"
            preserveAspectRatio="none"
          >
            {/* Base Fill that blends into the next section */}
            <path
              d="M0 64C480 16 960 16 1440 64V64H0V64Z"
              fill="currentColor"
            />
            {/* Radiant Glowing Horizon Border Stroke */}
            <path
              d="M0 64C480 16 960 16 1440 64"
              stroke="url(#hero-horizon-gradient)"
              strokeWidth="2.5"
            />
            <defs>
              <linearGradient id="hero-horizon-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                <stop offset="20%" stopColor="#3b82f6" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#60a5fa" stopOpacity="1" />
                <stop offset="80%" stopColor="#3b82f6" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>

          {/* Central High-Intensity Neon Flare */}
          <div className="absolute top-2 sm:top-3 left-1/2 -translate-x-1/2 w-48 sm:w-72 h-[3px] bg-gradient-to-r from-transparent via-sky-300 to-transparent shadow-[0_0_20px_rgba(56,189,248,1)]" />
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
