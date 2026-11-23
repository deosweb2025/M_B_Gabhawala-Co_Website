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
      className="py-20 sm:py-28 relative overflow-hidden border-t border-b border-slate-200"
      style={{
        backgroundImage: "url('/gallery/partner-consultation-chambers.jpg')",
        backgroundAttachment: "fixed",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">

          {/* Left Column (7 cols): High-Authority Command Hub - Slides Up */}
          <div
            className={`lg:col-span-7 space-y-6 text-left transition-all duration-800 ease-out ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
          >

            {/* Illuminated Category Capsule */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 border border-white/90 text-[#1e3a8a] text-xs font-bold tracking-wide uppercase shadow-md backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#1e3a8a] animate-pulse" />
                <ShieldCheck className="w-3.5 h-3.5 text-[#1e3a8a]" />
                <span>Protect Enterprise Value • Eliminate Tax Exposure</span>
              </div>
            </div>

            {/* Master Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-[1.15] drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
              Partner With India's Foremost{" "}
              <span className="block text-sky-400 mt-1 font-bold drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                Indirect Tax Authority
              </span>
            </h2>

            {/* Strategic Narrative */}
            <p className="text-base sm:text-lg text-slate-100 leading-relaxed font-medium max-w-xl drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
              Whether preparing for GSTAT appellate litigation, structuring high-value EPC contracts, or conducting pre-audit health checkups, our partners provide seasoned strategic counsel.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/contact"
                className="relative group overflow-hidden inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-[#172554] via-[#1e3a8a] to-[#2563eb] hover:from-[#0f172a] hover:to-[#172554] text-white font-bold text-sm sm:text-base tracking-wide transition-all duration-300 shadow-md shadow-[#1e3a8a]/25 hover:shadow-lg hover:-translate-y-0.5 hover:scale-[1.02] cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-sky-200 relative z-10" />
                <span className="relative z-10">
                  Schedule Partner Consultation
                </span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href={`tel:${siteData.contact.primaryPhone}`}
                className="relative group overflow-hidden inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-white hover:bg-blue-50/50 text-[#1e3a8a] font-semibold text-sm sm:text-base transition-all duration-300 border border-[#1e3a8a]/35 shadow-sm hover:border-[#1e3a8a] hover:-translate-y-0.5 cursor-pointer"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                <Phone className="w-4 h-4 text-[#1e3a8a] group-hover:rotate-12 transition-transform" />
                <span>Call: +91 9681 606 280</span>
              </a>
            </div>

            {/* Quick Chambers Reference */}
            <div className="pt-4 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-xs text-slate-800 border-t border-slate-200 bg-white/95 backdrop-blur-sm px-4 py-2.5 rounded-xl shadow-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#1e3a8a] shrink-0" />
                <span className="font-medium">Chinar Park, Behind Arsalan, Kolkata - 700157</span>
              </div>
              <div className="hidden sm:block text-slate-400">•</div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#1e3a8a] shrink-0" />
                <a href={`mailto:${siteData.contact.primaryEmail}`} className="hover:text-[#1e3a8a] transition-colors font-medium">
                  {siteData.contact.primaryEmail}
                </a>
              </div>
            </div>

          </div>

          {/* Right Column (5 cols): 3 Elegant Glass Trust Strips - Waterfall Cascade */}
          <div className="lg:col-span-5 space-y-4">

            {/* Strip 1: 48-Hour Rapid SLA */}
            <div
              className={`group relative p-5 rounded-2xl bg-white border border-slate-200 hover:border-[#1e3a8a]/50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-sm hover:shadow-md hover:-translate-y-1 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
                }`}
              style={{ transitionDelay: "150ms" }}
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-blue-50/80 border border-blue-200/80 flex items-center justify-center text-[#1e3a8a] shrink-0 group-hover:scale-105 transition-transform">
                  <Clock className="w-5 h-5 text-[#1e3a8a]" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h4 className="text-sm font-bold text-slate-900 tracking-tight">48-Hour Rapid Advisory SLA</h4>
                    <span className="px-2 py-0.5 rounded-full bg-blue-50 text-[10px] font-semibold text-[#1e3a8a] border border-blue-200">
                      Emergency
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Immediate statutory diagnostic for urgent GST Show Cause Notices (SCN) and summons.
                  </p>
                </div>
              </div>
            </div>

            {/* Strip 2: Direct Partner Litigation & Advocacy */}
            <div
              className={`group relative p-5 rounded-2xl bg-white border border-slate-200 hover:border-[#1e3a8a]/50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-sm hover:shadow-md hover:-translate-y-1 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
                }`}
              style={{ transitionDelay: "300ms" }}
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-blue-50/80 border border-blue-200/80 flex items-center justify-center text-[#1e3a8a] shrink-0 group-hover:scale-105 transition-transform">
                  <Scale className="w-5 h-5 text-[#1e3a8a]" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h4 className="text-sm font-bold text-slate-900 tracking-tight">Direct Partner Representation</h4>
                    <span className="px-2 py-0.5 rounded-full bg-blue-50 text-[10px] font-semibold text-[#1e3a8a] border border-blue-200">
                      GSTAT / HC
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Led by CA Shubham Singh for appellate benches, tribunal disputes, and DGGI matters.
                  </p>
                </div>
              </div>
            </div>

            {/* Strip 3: 100% Confidential Statutory Retainer */}
            <div
              className={`group relative p-5 rounded-2xl bg-white border border-slate-200 hover:border-[#1e3a8a]/50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-sm hover:shadow-md hover:-translate-y-1 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
                }`}
              style={{ transitionDelay: "450ms" }}
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-blue-50/80 border border-blue-200/80 flex items-center justify-center text-[#1e3a8a] shrink-0 group-hover:scale-105 transition-transform">
                  <Lock className="w-5 h-5 text-[#1e3a8a]" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h4 className="text-sm font-bold text-slate-900 tracking-tight">Privileged Counsel & Audits</h4>
                    <span className="px-2 py-0.5 rounded-full bg-blue-50 text-[10px] font-semibold text-[#1e3a8a] border border-blue-200">
                      100% Retainer
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
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
