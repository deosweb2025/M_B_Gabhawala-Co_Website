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
    <section className="relative min-h-[100dvh] lg:h-[100dvh] lg:max-h-[100dvh] flex items-center overflow-hidden bg-slate-50">
      {/* ======================================================== */}
      {/* DESKTOP BACKGROUND IMAGE SLIDER (CRYSTAL CLEAR PHOTO)    */}
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
              className={`w-full h-full object-cover object-top origin-top transform transition-transform duration-[6000ms] ease-out ${index === currentSlide ? "scale-105" : "scale-100"
                }`}
            />
            {/* Zero shade / Pure crystal clear photo */}
          </div>
        ))}
      </div>

      {/* ======================================================== */}
      {/* MOBILE VIEW: EXECUTIVE VISUAL STAGE (100% VISIBLE PHOTO) */}
      {/* (Widescreen 16:10 photo frame on top + Command Dock)     */}
      {/* ======================================================== */}
      <div className="block sm:hidden relative z-10 w-full min-h-[100dvh] flex flex-col justify-start pt-18 pb-6 px-4 bg-slate-50 gap-3 overflow-hidden">
        {/* ======================================================== */}
        {/* LIVING MOBILE LUXURY BACKGROUND TEXTURE & AMBIENT AURA    */}
        {/* ======================================================== */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          {/* Layer 1: Slow-Drifting Micro-Architectural Blueprint Grid */}
          <div className="absolute inset-0 hero-mobile-grid opacity-30" />

          {/* Layer 2: Slow-Breathing Upper Sapphire-Sky Light Orb */}
          <div className="absolute -top-12 -right-12 w-[340px] h-[340px] bg-gradient-to-bl from-blue-600/10 via-[#6797D6]/10 to-transparent rounded-full blur-[90px] hero-mobile-aura-1" />

          {/* Layer 3: Slow-Breathing Lower Indigo-Cyan Light Orb */}
          <div className="absolute -bottom-16 -left-16 w-[320px] h-[320px] bg-gradient-to-tr from-[#355094]/10 via-[#6797D6]/10 to-transparent rounded-full blur-[85px] hero-mobile-aura-2" />

          {/* Layer 4: Soft Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-slate-100/60" />
        </div>

        {/* Top: Dedicated 16:10 Visual Photographic Stage */}
        <div className="relative z-10 aspect-[16/10] w-full rounded-2xl overflow-hidden border border-slate-200 shadow-[0_12px_28px_-6px_rgba(53,80,148,0.12)] bg-slate-100 shrink-0">
          {/* Top Specular Edge Highlight */}
          <div className="absolute -top-px left-8 right-8 h-[1.5px] bg-gradient-to-r from-transparent via-[#6797D6] to-transparent z-30 pointer-events-none" />

          {/* Photographic Slider Images */}
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
                className={`w-full h-full object-cover object-top origin-top transform transition-transform duration-[6000ms] ease-out ${
                  index === currentSlide ? "scale-105" : "scale-100"
                }`}
              />
              {/* Zero shade / Pure crystal clear photo */}
            </div>
          ))}

          {/* Top Floating Status Pill */}
          <div className="absolute top-2.5 left-2.5 z-20 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/95 border border-slate-200 backdrop-blur-md text-[11px] font-semibold text-[#355094] shadow-md">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]" />
            <span>CA Firm • Estd. ~1975</span>
          </div>

          {/* Bottom Caption Strip */}
          <div className="absolute bottom-2.5 inset-x-3 z-20">
            <p className="text-[11px] text-white font-medium truncate drop-shadow-md">
              {slides[currentSlide].caption}
            </p>
          </div>
        </div>

        {/* Middle: Executive Command Dock Card */}
        <div className="relative z-10 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-lg space-y-2.5 shrink-0">
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200 text-[10px] font-semibold tracking-wider text-[#355094] uppercase shadow-sm">
            <span className="w-1 h-1 rounded-full bg-[#355094]" />
            <span>Direct & Indirect Tax Counsel</span>
          </div>

          {/* Firm Name Heading */}
          <h1 className="text-2xl font-black text-slate-900 tracking-tight leading-tight">
            M B Gabhawala & Co.
          </h1>

          {/* Core Practice Subtitle */}
          <p className="text-xs font-bold text-[#355094]">
            Tax Advisory, GST Litigation & NRI Compliance
          </p>

          {/* Value Proposition */}
          <p className="text-[11px] text-slate-600 leading-relaxed font-normal">
            Delivering boardroom-grade tax counsel, appellate advocacy before GSTAT/ITAT, and contract structuring across India.
          </p>

          {/* Authority Quick Chips */}
          <div className="flex items-center gap-1.5 pt-1 border-t border-slate-100">
            <div className="flex-1 py-1 px-1 rounded-lg bg-slate-50 border border-slate-200 text-center text-[10px] font-medium text-slate-700 truncate">
              ⚖️ GSTAT / ITAT
            </div>
            <div className="flex-1 py-1 px-1 rounded-lg bg-slate-50 border border-slate-200 text-center text-[10px] font-medium text-slate-700 truncate">
              🏛️ 50+ Yrs Legacy
            </div>
            <div className="flex-1 py-1 px-1 rounded-lg bg-slate-50 border border-slate-200 text-center text-[10px] font-medium text-slate-700 truncate">
              📍 7 Branches
            </div>
          </div>

          {/* Ergonomic Dual Thumb Actions */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            <Link
              to="/contact"
              className="relative group overflow-hidden flex items-center justify-center gap-1.5 py-3 px-2.5 rounded-xl bg-gradient-to-r from-[#172554] via-[#1e3a8a] to-[#2563eb] hover:from-[#0f172a] hover:to-[#172554] text-white font-bold text-xs tracking-wide shadow-md active:scale-[0.98] transition-all cursor-pointer"
            >
              <span className="relative z-10 font-bold">Consult Partners</span>
              <ArrowRight className="w-3.5 h-3.5 relative z-10" />
            </Link>

            <Link
              to="/services"
              className="relative group overflow-hidden flex items-center justify-center gap-1.5 py-3 px-2.5 rounded-xl bg-white hover:bg-blue-50/50 text-[#1e3a8a] hover:text-[#0f2756] font-bold text-xs tracking-wide border border-[#1e3a8a]/35 shadow-sm active:scale-[0.98] transition-all cursor-pointer"
            >
              <span className="relative z-10">Explore Services</span>
            </Link>
          </div>
        </div>

        {/* Lower Section: 3-Metric Institutional Stat Ribbon & Chambers Quick Access Bar */}
        <div className="relative z-10 space-y-2 shrink-0">
          {/* Institutional Fast-Metrics Ribbon */}
          <div className="grid grid-cols-3 gap-2 p-2.5 rounded-xl bg-white border border-slate-200 shadow-sm">
            <div className="text-center px-1">
              <span className="text-xs font-black text-[#1e3a8a] block">
                ~1975
              </span>
              <span className="text-[9px] uppercase tracking-wider text-slate-500 font-semibold block mt-0.5">
                50+ Yrs Legacy
              </span>
            </div>

            <div className="text-center px-1 border-x border-slate-200">
              <span className="text-xs font-black text-slate-900 block">
                7 Cities
              </span>
              <span className="text-[9px] uppercase tracking-wider text-slate-500 font-semibold block mt-0.5">
                Pan-India
              </span>
            </div>

            <div className="text-center px-1">
              <span className="text-xs font-black text-[#355094] block">
                GSTAT
              </span>
              <span className="text-[9px] uppercase tracking-wider text-slate-500 font-semibold block mt-0.5">
                Tribunal Defense
              </span>
            </div>
          </div>

          {/* Varanasi Headquarters Location Quick Bar */}
          <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-white border border-slate-200 text-[10px] text-slate-600 shadow-sm">
            <div className="flex items-center gap-1.5 truncate">
              <MapPin className="w-3 h-3 text-[#355094] shrink-0" />
              <span className="truncate">Shobha Shree, Guru Bagh, Luxa, Varanasi</span>
            </div>
            <Link to="/contact" className="text-[#355094] font-semibold shrink-0 ml-2 hover:underline">
              Directions ↗
            </Link>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* DESKTOP HERO VIEW (PREVIOUS LAYOUT RESTORED - NO CARDS)  */}
      {/* ======================================================== */}
      <Container className="hidden sm:block relative z-10 pt-16 sm:pt-20">
        <div className="max-w-3xl space-y-4 sm:space-y-6">
          {/* Subtle Single Category Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900/60 border border-white/20 backdrop-blur-md text-sky-300 text-xs font-semibold tracking-wider uppercase shadow-sm">
            Chartered Accountants • ~Since 1975 • Varanasi Headquarters
          </div>

          {/* Proportional, Refined Heading with Crisp Tone */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
            M B Gabhawala & Co.
            <span className="block text-sky-400 font-semibold text-lg sm:text-2xl mt-1 tracking-normal drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
              Direct & Indirect Tax Counsel • GST & Appellate Litigation
            </span>
          </h1>

          {/* Clean 2-Line Subheading */}
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal max-w-xl drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)]">
            Delivering boardroom-grade tax counsel, appellate litigation, NRI advisory, and corporate structuring for enterprises across India.
          </p>

          {/* Clean, Balanced Action Buttons (Restored Glossy Executive Styling) */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <Link
              to="/contact"
              className="relative group overflow-hidden inline-flex items-center justify-center gap-2 px-6 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-[#172554] via-[#1e3a8a] to-[#2563eb] hover:from-[#0f172a] hover:via-[#172554] hover:to-[#1d4ed8] text-white font-bold text-xs sm:text-sm tracking-wide transition-all duration-300 border border-sky-300/40 border-t-white/80 border-b-blue-950/70 shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.7),inset_0_-2px_4px_rgba(0,0,0,0.25),0_10px_25px_-5px_rgba(30,58,138,0.45),0_0_20px_rgba(37,99,235,0.25)] hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_15px_30px_-5px_rgba(30,58,138,0.6),0_0_25px_rgba(37,99,235,0.4)] hover:-translate-y-0.5 hover:scale-[1.02] cursor-pointer"
            >
              {/* Glossy Top Glass Curved Reflection */}
              <div className="absolute top-0 left-0 right-0 h-[48%] bg-gradient-to-b from-white/30 via-white/10 to-transparent rounded-t-xl pointer-events-none" />

              <span className="relative z-10 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">Consult Partners</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]" />
            </Link>

            <Link
              to="/services"
              className="relative group overflow-hidden inline-flex items-center justify-center gap-2 px-6 py-2.5 sm:py-3 rounded-xl bg-white hover:bg-slate-50 text-[#1e3a8a] hover:text-[#0f2756] border border-white/90 hover:border-white font-bold text-xs sm:text-sm tracking-wide transition-all duration-300 shadow-[0_8px_20px_-4px_rgba(0,0,0,0.25)] hover:shadow-[0_12px_25px_-4px_rgba(0,0,0,0.35)] hover:-translate-y-0.5 cursor-pointer"
            >
              <span className="relative z-10">Explore Services</span>
            </Link>
          </div>
        </div>
      </Container>

      {/* SCULPTED CURVED HORIZON BORDER WITH ANIMATED SPECULAR BEAM */}
      <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none">
        <div className="relative w-full overflow-hidden leading-none">
          <svg
            className="relative block w-full h-8 sm:h-12 md:h-14 text-white"
            viewBox="0 0 1440 64"
            fill="none"
            preserveAspectRatio="none"
          >
            <defs>
              {/* Card-Style Luminous Beam Gradient */}
              <linearGradient id="hero-curve-beam-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1e3a8a" stopOpacity="0" />
                <stop offset="25%" stopColor="#2563eb" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
                <stop offset="75%" stopColor="#38bdf8" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0" />
              </linearGradient>

              {/* Specular Glow Filter for Laser Flare */}
              <filter id="hero-beam-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="2.5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Pure Clean White Curve that seamlessly transitions into the next section */}
            <path
              d="M0 64C480 16 960 16 1440 64V64H0V64Z"
              fill="currentColor"
            />

            {/* Subtle Base Architectural Border Line */}
            <path
              d="M0 64C480 16 960 16 1440 64"
              stroke="#e2e8f0"
              strokeWidth="1.5"
              fill="none"
            />

            {/* Animated Card Border Specular Light Beam running along the curve */}
            <path
              d="M0 64C480 16 960 16 1440 64"
              stroke="url(#hero-curve-beam-gradient)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="280 1450"
              className="animate-hero-curve-beam"
              filter="url(#hero-beam-glow)"
              fill="none"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
