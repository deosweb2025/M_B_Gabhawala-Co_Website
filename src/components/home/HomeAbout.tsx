import React from "react";
import { Link } from "react-router-dom";
import { siteData } from "../../data/siteData";
import { Container } from "../common/Container";
import { useInView } from "../../hooks/useInView";
import {
  Clock,
  ShieldCheck,
  Scale,
  Building2,
  ArrowRight,
  CheckCircle2,
  MapPin,
} from "lucide-react";

export const HomeAbout: React.FC = () => {
  const [sectionRef, isInView] = useInView({ threshold: 0.12 });

  return (
    <section
      ref={sectionRef}
      className="py-20 sm:py-28 bg-white relative border-b border-slate-200 overflow-hidden"
    >
      {/* BESPOKE SECTION BACKGROUND: DIAGONAL ARCHITECTURAL WEAVE & DUAL SAPPHIRE/AMBER AURA */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Left: Deep Royal Sapphire Living Bloom */}
        <div className="absolute top-1/4 -left-24 w-[600px] h-[380px] bg-gradient-to-tr from-[#355094]/10 via-[#6797D6]/8 to-transparent blur-[130px] rounded-full animate-aurora-a" />
        {/* Right: Soft Slate Atmosphere */}
        <div className="absolute top-1/3 -right-24 w-[500px] h-[360px] bg-gradient-to-bl from-slate-200/50 via-transparent to-transparent blur-[120px] rounded-full animate-aurora-b" />

        {/* 45-Degree Architectural Pinstripe Weave Texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, rgba(53, 80, 148, 0.4) 0px, rgba(53, 80, 148, 0.4) 1px, transparent 1px, transparent 24px)`,
          }}
        />

        {/* Sweeping Radiant Light Beam */}
        <div className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-[#6797D6]/10 to-transparent blur-xl animate-sweep-sheen" />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Firm Narrative & Authority (7 cols) - Mobile Order 2 (Below Image), Desktop Order 1 (Left) */}
          <div
            className={`order-2 lg:order-1 lg:col-span-7 space-y-6 transition-all duration-800 ease-out ${
              isInView
                ? "opacity-100 translate-x-0 blur-0"
                : "opacity-0 -translate-x-12 blur-[1px]"
            }`}
          >
            {/* Illuminated Category Capsule */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#355094] text-xs font-semibold tracking-wider uppercase shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#355094] animate-pulse" />
              <Clock className="w-3.5 h-3.5 text-[#355094]" />
              <span>Institutional Profile • Established ~1975</span>
            </div>

            {/* H2 Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-tight">
              Five Decades of Institutional{" "}
              <span className="block text-[#1e3a8a] mt-1">
                Tax & Jurisprudence Excellence
              </span>
            </h2>

            {/* Narrative Paragraphs */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Founded in 1975 (~50 years of practice legacy), <strong className="text-slate-900 font-semibold">M B Gabhawala & Co.</strong> (Chartered Accountants) stands at the forefront of Indian indirect tax counsel, dispute representation, and transactional structuring. We advise leading corporate conglomerates, EPC developers, manufacturing titans, and multinational enterprises.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              From our flagship Kolkata chambers behind Arsalan, Chinar Park (Rajarhat), lead partner <strong className="text-slate-900 font-semibold">CA Shubham Singh</strong> coordinates high-stakes appellate advocacy before GSTAT and High Courts, alongside a strategic pan-India branch footprint spanning Mumbai, Gurugram, Varanasi, Sonebhadra, and Katihar.
            </p>

            {/* 4 Core Pillars Micro-Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="p-3.5 rounded-xl bg-white border border-slate-200 hover:border-[#1e3a8a]/40 flex items-start gap-3 shadow-sm transition-all duration-300">
                <ShieldCheck className="w-5 h-5 text-[#1e3a8a] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-slate-900 block">50+ Years Practice Legacy</span>
                  <span className="text-[11px] text-slate-500 block">Serving India continuously ~Since 1975</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-slate-200 hover:border-[#1e3a8a]/40 flex items-start gap-3 shadow-sm transition-all duration-300">
                <Scale className="w-5 h-5 text-[#1e3a8a] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-slate-900 block">Appellate Advocacy Focus</span>
                  <span className="text-[11px] text-slate-500 block">Supreme Court, High Court & GSTAT</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-slate-200 hover:border-[#1e3a8a]/40 flex items-start gap-3 shadow-sm transition-all duration-300">
                <Building2 className="w-5 h-5 text-[#1e3a8a] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-slate-900 block">Pan-India Footprint</span>
                  <span className="text-[11px] text-slate-500 block">6 Strategic Branch Locations</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-slate-200 hover:border-[#1e3a8a]/40 flex items-start gap-3 shadow-sm transition-all duration-300">
                <CheckCircle2 className="w-5 h-5 text-[#1e3a8a] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-slate-900 block">100% Tax Specialization</span>
                  <span className="text-[11px] text-slate-500 block">Focused GST, Customs & Structuring</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                to="/about"
                className="relative group overflow-hidden inline-flex items-center gap-2.5 px-7 py-3 rounded-xl bg-gradient-to-r from-[#172554] via-[#1e3a8a] to-[#2563eb] hover:from-[#0f172a] hover:to-[#172554] text-white font-semibold text-sm tracking-wide transition-all duration-300 shadow-md shadow-[#1e3a8a]/20 hover:shadow-lg hover:-translate-y-0.5 hover:scale-[1.02] cursor-pointer"
              >
                <span className="relative z-10">
                  Explore Firm History & Legacy
                </span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/contact"
                className="relative group overflow-hidden inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-blue-50/50 text-[#1e3a8a] border border-[#1e3a8a]/35 font-semibold text-sm tracking-wide transition-all duration-300 shadow-sm hover:border-[#1e3a8a] hover:-translate-y-0.5 cursor-pointer"
              >
                <span className="relative z-10">Consult Partner Chambers</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Ultra-Luxury Architectural Photographic Showcase (5 cols) - Mobile Order 1 (On Top), Desktop Order 2 (Right) */}
          <div
            className={`order-1 lg:order-2 lg:col-span-5 relative transition-all duration-900 ease-[cubic-bezier(0.16,1,0.3,1)] delay-150 ${
              isInView
                ? "opacity-100 translate-x-0 scale-100"
                : "opacity-0 translate-x-12 scale-95"
            }`}
          >
            {/* Ambient Sapphire-Cyan Lighting Glow */}
            <div className="absolute -inset-3 bg-gradient-to-r from-[#355094]/15 via-[#6797D6]/15 to-[#355094]/15 rounded-[36px] blur-2xl opacity-75 pointer-events-none" />

            {/* Main Luxury Beveled Card */}
            <div className="relative rounded-[30px] overflow-hidden bg-white p-2 sm:p-2.5 border border-slate-200 shadow-xl group transition-all duration-300 hover:border-[#6797D6]/50">
              
              {/* Animated Top Specular Light Sheen */}
              <div className="absolute top-0 left-0 right-0 h-[2px] overflow-hidden pointer-events-none z-20">
                <div className="w-full h-full bg-gradient-to-r from-transparent via-[#6797D6] to-transparent animate-border-sheen" />
              </div>

              {/* Cinematic Image Frame with Bezel */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/12] bg-slate-100">
                <img
                  src="/gallery/tax-library.jpg"
                  alt="M B Gabhawala & Co. Law Library and Advisory Chambers"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Refined Vignette Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                {/* Floating Top Left Pill: Live Chambers Status */}
                <div className="absolute top-3.5 left-3.5 z-10">
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-slate-200 text-[#355094] text-xs font-semibold backdrop-blur-xl shadow-md">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                    <span>Kolkata Head Chambers</span>
                  </span>
                </div>

                {/* Floating Top Right Pill: Legacy Tag */}
                <div className="absolute top-3.5 right-3.5 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#355094] text-white text-xs font-bold shadow-md">
                    <span>~ Estd. 1975</span>
                  </span>
                </div>
              </div>

              {/* Floating Overlapping Executive Console */}
              <div className="relative -mt-10 sm:-mt-12 mx-2 sm:mx-3 mb-2 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-xl z-10 space-y-3">
                
                {/* Row 1: Direct Partner Lead & ICAI Registration Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#1e3a8a] to-[#355094] flex items-center justify-center text-white font-bold text-xs shadow-md">
                      SG
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 tracking-tight leading-none mb-1">
                        CA Shubham Singh
                      </h4>
                      <span className="text-[11px] text-[#355094] font-medium">Lead Partner • Indirect Tax</span>
                    </div>
                  </div>
                  
                  <span className="px-2.5 py-1 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-bold tracking-wider uppercase">
                    ICAI Registered
                  </span>
                </div>

                {/* Row 2: Chambers Location Line */}
                <div className="pt-2.5 border-t border-slate-100 flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#355094] shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    {siteData.location.fullAddress}
                  </p>
                </div>

                {/* Row 3: Dual Practice Chips */}
                <div className="grid grid-cols-2 gap-2 pt-1 text-[11px]">
                  <div className="px-2.5 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#355094] shrink-0" />
                    <span className="truncate">GSTAT & HC Practice</span>
                  </div>
                  <div className="px-2.5 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6797D6] shrink-0" />
                    <span className="truncate">Pan-India Retainers</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomeAbout;
