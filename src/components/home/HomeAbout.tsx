import React, { useState, useEffect } from "react";
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
  Phone,
} from "lucide-react";

export const HomeAbout: React.FC = () => {
  const [sectionRef, isInView] = useInView({ threshold: 0.12 });
  const [activePartnerIndex, setActivePartnerIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActivePartnerIndex((prev) => (prev + 1) % siteData.partners.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const currentPartner = siteData.partners[activePartnerIndex];

  return (
    <section
      ref={sectionRef}
      className="py-20 sm:py-28 bg-white relative border-b border-slate-200 overflow-hidden"
    >
      {/* BESPOKE LIVING ANIMATED SECTION BACKGROUND SUITE (100% PURE SMOOTH LIGHT, ZERO TEXTURE) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Layer 1: Moving Volumetric Luminous Aurora Orbs */}
        {/* Sapphire-Sky Aura Cloud (Top Left, behind title) */}
        <div className="absolute top-[8%] -left-16 w-[560px] h-[400px] bg-gradient-to-br from-blue-500/22 via-sky-400/18 to-transparent rounded-full blur-[90px] animate-about-orb-1" />

        {/* Cyan-Navy Ambient Glow Cloud (Right, behind Chambers showcase card) */}
        <div className="absolute top-[18%] -right-16 w-[550px] h-[420px] bg-gradient-to-tl from-sky-400/22 via-[#355094]/15 to-transparent rounded-full blur-[95px] animate-about-orb-2" />

        {/* Deep Central Blue Pulse Cloud */}
        <div className="absolute -bottom-24 left-1/3 w-[480px] h-[340px] bg-gradient-to-tr from-indigo-500/15 via-blue-400/15 to-transparent rounded-full blur-[105px] animate-about-orb-3" />

        {/* Layer 3: Concentric Expanding Jurisprudence Authority Ripple Rings */}
        <div className="absolute top-1/2 right-[12%] -translate-y-1/2 w-[520px] h-[520px] pointer-events-none opacity-40 hidden sm:block">
          <div className="absolute inset-0 rounded-full border border-sky-400/40 animate-about-ripple-1" />
          <div className="absolute inset-[50px] rounded-full border border-blue-500/35 animate-about-ripple-2" />
          <div className="absolute inset-[100px] rounded-full border border-indigo-400/30 animate-about-ripple-3" />
        </div>

        {/* Layer 4: Sweeping Radiant Specular Light Beam */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="w-[320px] h-full bg-gradient-to-r from-transparent via-sky-400/25 via-blue-500/12 to-transparent blur-lg animate-about-sweep" />
        </div>

        {/* Layer 5: Twinkling Subtle Constellation Beacons */}
        <div className="absolute top-16 left-[22%] w-2 h-2 rounded-full bg-sky-400 shadow-[0_0_8px_#38bdf8] animate-star-twinkle-1" />
        <div className="absolute top-28 left-[45%] w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_6px_#3b82f6] animate-star-twinkle-2" />
        <div className="absolute bottom-20 left-[28%] w-2 h-2 rounded-full bg-sky-300 shadow-[0_0_7px_#7dd3fc] animate-star-twinkle-3" />
        <div className="absolute top-24 right-[38%] w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_6px_#60a5fa] animate-star-twinkle-1" />
        <div className="absolute bottom-16 right-[18%] w-2 h-2 rounded-full bg-sky-400 shadow-[0_0_8px_#38bdf8] animate-star-twinkle-2" />
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
              Founded in 1975 (~50 years / five decades of practice legacy), <strong className="text-slate-900 font-semibold">M B Gabhawala & Co.</strong> (Chartered Accountants) stands at the forefront of Indian direct and indirect tax counsel, dispute representation, and transactional structuring. We advise leading corporate conglomerates, EPC developers, manufacturing titans, and multinational enterprises.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Headquartered in Varanasi (UP) with flagship corporate & appellate chambers in Kolkata (Chinar Park), our partners coordinate high-stakes counsel and litigation, alongside a strategic pan-India branch footprint spanning Gurugram, Mumbai, Katihar, Sonebhadra, and Assam.
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
                  <span className="text-[11px] text-slate-500 block">Supreme Court, High Court, GSTAT & ITAT</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-slate-200 hover:border-[#1e3a8a]/40 flex items-start gap-3 shadow-sm transition-all duration-300">
                <Building2 className="w-5 h-5 text-[#1e3a8a] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-slate-900 block">Pan-India Footprint</span>
                  <span className="text-[11px] text-slate-500 block">7 Strategic Branch Locations</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-slate-200 hover:border-[#1e3a8a]/40 flex items-start gap-3 shadow-sm transition-all duration-300">
                <CheckCircle2 className="w-5 h-5 text-[#1e3a8a] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-slate-900 block">Tax & Advisory Specialization</span>
                  <span className="text-[11px] text-slate-500 block">Direct & Indirect Tax, NRI & Audits</span>
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
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-slate-200 text-[#1e3a8a] text-xs font-semibold backdrop-blur-xl shadow-md">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                    <span>Firm Leadership Chambers</span>
                  </span>
                </div>

                {/* Floating Top Right Pill: Legacy Tag */}
                <div className="absolute top-3.5 right-3.5 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1e3a8a] text-white text-xs font-bold shadow-md">
                    <span>~ Estd. 1975</span>
                  </span>
                </div>
              </div>

              {/* Floating Overlapping Executive Console */}
              <div className="relative -mt-10 sm:-mt-12 mx-2 sm:mx-3 mb-2 p-4 sm:p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200 shadow-2xl z-10 space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl overflow-hidden border-2 border-[#1e3a8a] shadow-md shrink-0 bg-slate-100 ring-2 ring-blue-100">
                      <img
                        key={currentPartner.image}
                        src={currentPartner.image}
                        alt={currentPartner.name}
                        className="w-full h-full object-cover object-top transition-all duration-500"
                      />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight leading-tight truncate">
                        {currentPartner.name}
                      </h4>
                      <p className="text-[11px] font-mono font-bold text-[#1e3a8a] uppercase tracking-wider mt-0.5 truncate">
                        {currentPartner.role}
                      </p>
                    </div>
                  </div>

                  {currentPartner.phone && (
                    <a
                      href={`tel:${currentPartner.phone.replace(/\s+/g, "")}`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-50 hover:bg-[#1e3a8a] hover:text-white border border-blue-200 text-[#1e3a8a] font-bold text-xs transition-colors shadow-sm shrink-0"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Direct</span>
                    </a>
                  )}
                </div>

                {/* Address Line (only address is ok) */}
                <div className="pt-2.5 border-t border-slate-100 flex items-start gap-2.5 text-xs text-slate-600 font-medium leading-relaxed">
                  <MapPin className="w-3.5 h-3.5 text-[#1e3a8a] shrink-0 mt-0.5" />
                  <span className="line-clamp-2">{currentPartner.address}</span>
                </div>

                {/* Partner Progress Dots */}
                <div className="flex items-center justify-center gap-1.5 pt-1">
                  {siteData.partners.map((p, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActivePartnerIndex(idx)}
                      aria-label={`View ${p.name}`}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        activePartnerIndex === idx
                          ? "w-6 bg-[#1e3a8a]"
                          : "w-1.5 bg-slate-300 hover:bg-slate-400"
                      }`}
                    />
                  ))}
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
