import React from "react";
import { Link } from "react-router-dom";
import { siteData } from "../../data/siteData";
import { Container } from "../common/Container";
import {
  Compass,
  Scale,
  CheckCircle2,
  ShieldCheck,
  Cpu,
  Briefcase,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

export const PracticeAreasOverview: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Compass: <Compass className="w-7 h-7 text-[#1e3a8a]" />,
    Scale: <Scale className="w-7 h-7 text-[#1e3a8a]" />,
    CheckCircle: <CheckCircle2 className="w-7 h-7 text-[#1e3a8a]" />,
    FileCheck: <ShieldCheck className="w-7 h-7 text-[#1e3a8a]" />,
    Cpu: <Cpu className="w-7 h-7 text-[#1e3a8a]" />,
    Briefcase: <Briefcase className="w-7 h-7 text-[#1e3a8a]" />,
  };

  return (
    <section
      className="py-20 sm:py-28 relative border-b border-slate-200 overflow-hidden"
      style={{
        backgroundImage: "url('/gallery/tax-library.jpg')",
        backgroundAttachment: "fixed",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Container className="relative z-10">
        {/* Luxury Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-white/90 text-[#1e3a8a] text-xs font-bold tracking-wider uppercase mb-4 shadow-md backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1e3a8a] animate-pulse" />
            <span>Core Competencies • Indirect Tax Specialization</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-white tracking-tight leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
            Specialized Indirect Tax{" "}
            <span className="block sm:inline text-sky-400 mt-1 sm:mt-0 font-bold drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              Practice Areas
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-100 leading-relaxed max-w-2xl font-medium drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
            Dedicated exclusively to the intricate terrain of Indian indirect tax legislation, dispute resolution, contract architecture, and statutory compliance.
          </p>

          {/* Specular Center Gradient Divider Line */}
          <div className="mt-6 flex items-center justify-center gap-2">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-sky-400/60" />
            <div className="w-1.5 h-1.5 rounded-full bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-sky-400/60" />
          </div>
        </div>

        {/* 6 Luxury Practice Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8">
          {siteData.services.map((service, index) => (
            <div
              key={service.id}
              className="glossy-card rounded-2xl p-7 sm:p-8 flex flex-col justify-between group relative overflow-hidden hover:-translate-y-2 hover:scale-[1.01] transition-all duration-500 cursor-default"
            >
              {/* Animated Top Specular Light Sheen */}
              <div className="absolute top-0 left-0 right-0 h-[2px] overflow-hidden pointer-events-none">
                <div
                  className="w-full h-full bg-gradient-to-r from-transparent via-[#6797D6] to-transparent animate-border-sheen"
                  style={{ animationDelay: `${index * 0.5}s` }}
                />
              </div>

              {/* Static Top Glass Rim */}
              <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent pointer-events-none" />

              {/* Card Ambient Glow Refraction in Top Corner */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-blue-50/70 via-transparent to-transparent blur-xl rounded-tr-2xl pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Header Row: 3D Floating Icon Box */}
              <div className="flex items-center justify-between mb-5 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-blue-50/80 border border-blue-200/80 flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300">
                  {iconMap[service.icon] || (
                    <Scale className="w-7 h-7 text-[#1e3a8a]" />
                  )}
                </div>
              </div>

              <div className="relative z-10">

                {/* Practice Title */}
                <h3 className="text-xl sm:text-[22px] font-extrabold text-slate-900 mb-2.5 tracking-tight leading-snug group-hover:text-[#1e3a8a] transition-all duration-300">
                  {service.title}
                </h3>

                {/* Narrative Summary */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-5">
                  {service.shortDesc}
                </p>

                {/* Key Practice Areas Checklist with Checks */}
                <div className="space-y-2 mb-6 pt-3 border-t border-slate-100">
                  {service.keyAreas.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#1e3a8a] shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Luxury Footer Bar */}
              <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 relative z-10">
                <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider font-mono">
                  Statutory Scope
                </span>
                <Link
                  to={`/services?category=${service.id}`}
                  className="text-[#1e3a8a] font-semibold group-hover:text-[#2563eb] transition-colors flex items-center gap-1 text-xs"
                >
                  <span>Explore Practice</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Master Action CTA */}
        <div className="mt-14 sm:mt-18 text-center">
          <Link
            to="/services"
            className="relative group overflow-hidden inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#172554] via-[#1e3a8a] to-[#2563eb] hover:from-[#0f172a] hover:to-[#172554] text-white font-semibold text-sm tracking-wide transition-all duration-300 shadow-md shadow-[#1e3a8a]/20 hover:shadow-lg hover:-translate-y-0.5 hover:scale-[1.02] cursor-pointer"
          >
            <span className="relative z-10">
              Explore All Indirect Tax Practice Areas
            </span>
            <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default PracticeAreasOverview;
