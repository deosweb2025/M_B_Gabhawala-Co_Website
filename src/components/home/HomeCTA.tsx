import React from "react";
import { Link } from "react-router-dom";
import { siteData } from "../../data/siteData";
import { Container } from "../common/Container";
import { useInView } from "../../hooks/useInView";
import {
  Phone,
  Mail,
  ArrowRight,
  ShieldCheck,
  MapPin,
  Clock,
  Scale,
  Sparkles,
  Lock,
} from "lucide-react";

export const HomeCTA: React.FC = () => {
  const [sectionRef, isInView] = useInView({ threshold: 0.1 });

  return (
    <section
      ref={sectionRef}
      className="py-20 sm:py-28 bg-slate-950 relative overflow-hidden border-t border-b border-white/10"
    >
      {/* Bespoke Background: High-Security Vault Radial Beacon & Laser Sheen */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Pulsing Sapphire Vault Core */}
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-gradient-to-tr from-blue-600/22 via-sky-400/12 to-indigo-600/15 rounded-full blur-[120px]" />
        {/* Geometric Hexagonal Micro-Stipple Matrix */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(56, 189, 248, 0.8) 1.2px, transparent 1.2px)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* Top/Bottom Laser Edge Accent */}
        <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-sky-400/50 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
      </div>

      {/* Top Accent Light Line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column (7 cols): High-Authority Command Hub - Slides Up */}
          <div
            className={`lg:col-span-7 space-y-6 text-left transition-all duration-800 ease-out ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            
            {/* Illuminated Category Capsule */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500/15 via-sky-500/10 to-indigo-500/15 border border-blue-400/30 border-t-white/40 text-blue-200 text-xs font-semibold tracking-wide uppercase shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.3)] backdrop-blur-xl">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
              <span>Protect Enterprise Value • Eliminate Tax Exposure</span>
            </div>

            {/* Master Headline (No Card Boundary) */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-[1.15]">
              Partner With India's Foremost{" "}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-sky-300 to-indigo-100 drop-shadow-[0_2px_16px_rgba(56,189,248,0.4)] mt-1">
                Indirect Tax Authority
              </span>
            </h2>

            {/* Strategic Narrative */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-xl">
              Whether preparing for GSTAT appellate litigation, structuring high-value EPC contracts, or conducting pre-audit health checkups, our partners provide seasoned strategic counsel.
            </p>

            {/* Dual Glossy Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/contact"
                className="relative group overflow-hidden inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 hover:from-blue-500 hover:via-sky-400 hover:to-indigo-500 text-white font-bold text-sm sm:text-base tracking-wide transition-all duration-300 border border-blue-400/50 border-t-white/90 shadow-[inset_0_1.5px_2px_rgba(255,255,255,0.8),0_12px_28px_-5px_rgba(37,99,235,0.65),0_0_25px_rgba(56,189,248,0.4)] hover:shadow-[inset_0_2px_3px_rgba(255,255,255,0.95),0_18px_36px_-5px_rgba(37,99,235,0.8),0_0_40px_rgba(56,189,248,0.6)] hover:-translate-y-0.5 hover:scale-[1.02] cursor-pointer"
              >
                <div className="absolute top-0 left-0 right-0 h-[48%] bg-gradient-to-b from-white/40 via-white/15 to-transparent rounded-t-xl pointer-events-none" />
                <Sparkles className="w-4 h-4 text-sky-200 relative z-10 animate-pulse" />
                <span className="relative z-10 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                  Schedule Partner Consultation
                </span>
                <ArrowRight className="w-4 h-4 relative z-10 text-blue-100 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href={`tel:${siteData.contact.primaryPhone}`}
                className="relative group overflow-hidden inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-gradient-to-b from-white/[0.12] via-slate-900/80 to-slate-950/90 hover:from-white/[0.2] hover:via-slate-800/90 hover:to-slate-900 text-white font-semibold text-sm sm:text-base transition-all duration-300 border border-white/20 border-t-white/60 shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.45),0_10px_25px_-5px_rgba(0,0,0,0.5)] hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.7),0_12px_30px_-5px_rgba(59,130,246,0.3)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                <Phone className="w-4 h-4 text-blue-300 group-hover:rotate-12 transition-transform" />
                <span>Call: +91 9681 606 280</span>
              </a>
            </div>

            {/* Quick Chambers Reference */}
            <div className="pt-4 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-xs text-slate-400 border-t border-white/10">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span>Chinar Park, Behind Arsalan, Kolkata - 700157</span>
              </div>
              <div className="hidden sm:block text-slate-600">•</div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <a href={`mailto:${siteData.contact.primaryEmail}`} className="hover:text-sky-300 transition-colors">
                  {siteData.contact.primaryEmail}
                </a>
              </div>
            </div>

          </div>

          {/* Right Column (5 cols): 3 Elegant Glass Trust Strips - Waterfall Cascade */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Strip 1: 48-Hour Rapid SLA */}
            <div
              className={`group relative p-5 rounded-2xl bg-gradient-to-r from-white/[0.08] via-slate-900/60 to-slate-950/80 hover:from-white/[0.14] hover:via-slate-900/80 hover:to-blue-950/40 border border-white/15 border-t-white/45 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.25),0_10px_25px_-5px_rgba(0,0,0,0.5)] hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.4),0_15px_30px_-5px_rgba(37,99,235,0.25)] hover:-translate-y-1 backdrop-blur-xl ${
                isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
              }`}
              style={{ transitionDelay: "150ms" }}
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-sky-300 shrink-0 shadow-inner group-hover:scale-105 transition-transform">
                  <Clock className="w-5 h-5 text-sky-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h4 className="text-sm font-bold text-white tracking-tight">48-Hour Rapid Advisory SLA</h4>
                    <span className="px-2 py-0.5 rounded-full bg-sky-500/15 text-[10px] font-semibold text-sky-300 border border-sky-400/30">
                      Emergency
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    Immediate statutory diagnostic for urgent GST Show Cause Notices (SCN) and summons.
                  </p>
                </div>
              </div>
            </div>

            {/* Strip 2: Direct Partner Litigation & Advocacy */}
            <div
              className={`group relative p-5 rounded-2xl bg-gradient-to-r from-white/[0.08] via-slate-900/60 to-slate-950/80 hover:from-white/[0.14] hover:via-slate-900/80 hover:to-blue-950/40 border border-white/15 border-t-white/45 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.25),0_10px_25px_-5px_rgba(0,0,0,0.5)] hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.4),0_15px_30px_-5px_rgba(37,99,235,0.25)] hover:-translate-y-1 backdrop-blur-xl ${
                isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-blue-500/20 border border-blue-400/40 flex items-center justify-center text-blue-300 shrink-0 shadow-inner group-hover:scale-105 transition-transform">
                  <Scale className="w-5 h-5 text-blue-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h4 className="text-sm font-bold text-white tracking-tight">Direct Partner Representation</h4>
                    <span className="px-2 py-0.5 rounded-full bg-blue-500/15 text-[10px] font-semibold text-blue-300 border border-blue-400/30">
                      GSTAT / HC
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    Led by CA Shubham Singh for appellate benches, tribunal disputes, and DGGI matters.
                  </p>
                </div>
              </div>
            </div>

            {/* Strip 3: 100% Confidential Statutory Retainer */}
            <div
              className={`group relative p-5 rounded-2xl bg-gradient-to-r from-white/[0.08] via-slate-900/60 to-slate-950/80 hover:from-white/[0.14] hover:via-slate-900/80 hover:to-blue-950/40 border border-white/15 border-t-white/45 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.25),0_10px_25px_-5px_rgba(0,0,0,0.5)] hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.4),0_15px_30px_-5px_rgba(37,99,235,0.25)] hover:-translate-y-1 backdrop-blur-xl ${
                isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
              }`}
              style={{ transitionDelay: "450ms" }}
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-indigo-500/20 border border-indigo-400/40 flex items-center justify-center text-indigo-300 shrink-0 shadow-inner group-hover:scale-105 transition-transform">
                  <Lock className="w-5 h-5 text-indigo-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h4 className="text-sm font-bold text-white tracking-tight">Privileged Counsel & Audits</h4>
                    <span className="px-2 py-0.5 rounded-full bg-indigo-500/15 text-[10px] font-semibold text-indigo-300 border border-indigo-400/30">
                      100% Retainer
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    Pre-audit health checkups, input tax credit optimization, and complete data privacy.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
};
