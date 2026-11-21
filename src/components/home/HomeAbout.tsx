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
      className="py-20 sm:py-28 bg-gradient-to-b from-slate-950 via-slate-900/90 to-slate-950 relative border-b border-white/10 overflow-hidden"
    >
      {/* BESPOKE SECTION BACKGROUND: DIAGONAL ARCHITECTURAL WEAVE & DUAL SAPPHIRE/AMBER AURA */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Left: Deep Royal Sapphire Living Bloom */}
        <div className="absolute top-1/4 -left-24 w-[600px] h-[380px] bg-gradient-to-tr from-blue-600/18 via-sky-500/10 to-transparent blur-[130px] rounded-full animate-aurora-a" />
        {/* Right: Warm Library Candlelight Amber Tone behind Chamber Photo */}
        <div className="absolute top-1/3 -right-24 w-[500px] h-[360px] bg-gradient-to-bl from-amber-500/[0.08] via-amber-600/[0.04] to-transparent blur-[120px] rounded-full animate-aurora-b" />

        {/* 45-Degree Architectural Pinstripe Weave Texture */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, rgba(56, 189, 248, 0.4) 0px, rgba(56, 189, 248, 0.4) 1px, transparent 1px, transparent 24px)`,
          }}
        />

        {/* Sweeping Radiant Light Beam */}
        <div className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-sky-400/[0.04] to-transparent blur-xl animate-sweep-sheen" />
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-sky-300 text-xs font-semibold tracking-wider uppercase backdrop-blur-md shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
              <Clock className="w-3.5 h-3.5 text-blue-400" />
              <span>Institutional Profile • Established ~1975</span>
            </div>

            {/* H2 Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-white tracking-tight leading-tight">
              Five Decades of Institutional{" "}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-blue-400 to-blue-500 mt-1">
                Tax & Jurisprudence Excellence
              </span>
            </h2>

            {/* Narrative Paragraphs */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Founded in 1975 (~50 years of practice legacy), <strong className="text-white font-semibold">M B Gabhawala & Co.</strong> (Chartered Accountants) stands at the forefront of Indian indirect tax counsel, dispute representation, and transactional structuring. We advise leading corporate conglomerates, EPC developers, manufacturing titans, and multinational enterprises.
            </p>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              From our flagship Kolkata chambers behind Arsalan, Chinar Park (Rajarhat), lead partner <strong className="text-white font-semibold">CA Shubham Singh</strong> coordinates high-stakes appellate advocacy before GSTAT and High Courts, alongside a strategic pan-India branch footprint spanning Mumbai, Gurugram, Varanasi, Sonebhadra, and Katihar.
            </p>

            {/* 4 Core Pillars Micro-Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 flex items-start gap-3 backdrop-blur-sm">
                <ShieldCheck className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-white block">50+ Years Practice Legacy</span>
                  <span className="text-[11px] text-slate-400 block">Serving India continuously ~Since 1975</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 flex items-start gap-3 backdrop-blur-sm">
                <Scale className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-white block">Appellate Advocacy Focus</span>
                  <span className="text-[11px] text-slate-400 block">Supreme Court, High Court & GSTAT</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 flex items-start gap-3 backdrop-blur-sm">
                <Building2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-white block">Pan-India Footprint</span>
                  <span className="text-[11px] text-slate-400 block">6 Strategic Branch Locations</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 flex items-start gap-3 backdrop-blur-sm">
                <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-white block">100% Tax Specialization</span>
                  <span className="text-[11px] text-slate-400 block">Focused GST, Customs & Structuring</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                to="/about"
                className="relative group overflow-hidden inline-flex items-center gap-2.5 px-7 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 hover:from-blue-500 hover:via-sky-400 hover:to-indigo-500 text-white font-semibold text-sm tracking-wide transition-all duration-300 border border-blue-400/50 border-t-white/80 shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.7),0_10px_25px_-5px_rgba(37,99,235,0.5),0_0_20px_rgba(56,189,248,0.35)] hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_15px_30px_-5px_rgba(37,99,235,0.65),0_0_25px_rgba(56,189,248,0.5)] hover:-translate-y-0.5 hover:scale-[1.02] cursor-pointer"
              >
                <div className="absolute top-0 left-0 right-0 h-[48%] bg-gradient-to-b from-white/35 via-white/15 to-transparent rounded-t-xl pointer-events-none" />
                <span className="relative z-10 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                  Explore Firm History & Legacy
                </span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]" />
              </Link>

              <Link
                to="/contact"
                className="relative group overflow-hidden inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-b from-white/15 via-white/[0.06] to-slate-900/50 hover:bg-gradient-to-b hover:from-white/25 hover:via-white/10 hover:to-slate-800/60 text-white border border-white/20 border-t-white/60 border-b-white/10 font-semibold text-sm tracking-wide transition-all duration-300 backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_8px_20px_-6px_rgba(0,0,0,0.5)] hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.6),0_12px_25px_-6px_rgba(0,0,0,0.6)] hover:border-white/40 hover:border-t-white/80 hover:-translate-y-0.5 cursor-pointer"
              >
                <div className="absolute top-0 left-0 right-0 h-[48%] bg-gradient-to-b from-white/20 via-white/5 to-transparent rounded-t-xl pointer-events-none" />
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
            <div className="absolute -inset-3 bg-gradient-to-r from-blue-600/25 via-sky-500/20 to-indigo-600/25 rounded-[36px] blur-2xl opacity-75 pointer-events-none" />

            {/* Main Luxury Beveled Glass Card */}
            <div className="relative rounded-[30px] overflow-hidden bg-gradient-to-b from-white/[0.18] via-slate-900/90 to-slate-950 p-2 sm:p-2.5 border border-white/20 border-t-white/70 shadow-[0_25px_60px_-12px_rgba(0,0,0,0.85),0_0_35px_rgba(59,130,246,0.2)] backdrop-blur-2xl group transition-all duration-300 hover:border-white/35">
              
              {/* Animated Top Specular Light Sheen */}
              <div className="absolute top-0 left-0 right-0 h-[2px] overflow-hidden pointer-events-none z-20">
                <div className="w-full h-full bg-gradient-to-r from-transparent via-sky-300 to-transparent animate-border-sheen" />
              </div>

              {/* Cinematic Image Frame with Bezel */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/12] bg-slate-950">
                <img
                  src="/gallery/tax-library.jpg"
                  alt="M B Gabhawala & Co. Law Library and Advisory Chambers"
                  className="w-full h-full object-cover object-center filter brightness-[0.92] group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Refined Vignette Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/25 to-transparent" />

                {/* Floating Top Left Pill: Live Chambers Status */}
                <div className="absolute top-3.5 left-3.5 z-10">
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/85 border border-white/25 border-t-white/50 text-sky-200 text-xs font-semibold backdrop-blur-xl shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                    <span>Kolkata Head Chambers</span>
                  </span>
                </div>

                {/* Floating Top Right Pill: Legacy Tag */}
                <div className="absolute top-3.5 right-3.5 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-600/40 border border-blue-400/40 border-t-white/50 text-white text-xs font-bold backdrop-blur-xl shadow-lg">
                    <span>~ Estd. 1975</span>
                  </span>
                </div>
              </div>

              {/* Floating Overlapping Executive Console */}
              <div className="relative -mt-10 sm:-mt-12 mx-2 sm:mx-3 mb-2 p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-slate-900/95 via-slate-950/98 to-slate-950 border border-white/20 border-t-white/70 shadow-[0_15px_35px_rgba(0,0,0,0.85),inset_0_1px_1.5px_rgba(255,255,255,0.4)] backdrop-blur-2xl z-10 space-y-3">
                
                {/* Row 1: Direct Partner Lead & ICAI Registration Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 via-sky-500 to-indigo-600 flex items-center justify-center text-white font-bold text-xs shadow-md shadow-blue-500/35 border-t border-white/40">
                      SG
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white tracking-tight leading-none mb-1">
                        CA Shubham Singh
                      </h4>
                      <span className="text-[11px] text-sky-300 font-medium">Lead Partner • Indirect Tax</span>
                    </div>
                  </div>
                  
                  <span className="px-2.5 py-1 rounded-lg bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-[10px] font-bold tracking-wider uppercase">
                    ICAI Registered
                  </span>
                </div>

                {/* Row 2: Chambers Location Line */}
                <div className="pt-2.5 border-t border-white/10 flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-300 leading-relaxed font-medium">
                    {siteData.location.fullAddress}
                  </p>
                </div>

                {/* Row 3: Dual Practice Chips */}
                <div className="grid grid-cols-2 gap-2 pt-1 text-[11px]">
                  <div className="px-2.5 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-slate-300 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                    <span className="truncate">GSTAT & HC Practice</span>
                  </div>
                  <div className="px-2.5 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-slate-300 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
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
