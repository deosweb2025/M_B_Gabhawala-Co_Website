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
    Compass: <Compass className="w-7 h-7 text-sky-300 drop-shadow-[0_2px_8px_rgba(56,189,248,0.5)]" />,
    Scale: <Scale className="w-7 h-7 text-sky-300 drop-shadow-[0_2px_8px_rgba(56,189,248,0.5)]" />,
    CheckCircle: <CheckCircle2 className="w-7 h-7 text-sky-300 drop-shadow-[0_2px_8px_rgba(56,189,248,0.5)]" />,
    FileCheck: <ShieldCheck className="w-7 h-7 text-sky-300 drop-shadow-[0_2px_8px_rgba(56,189,248,0.5)]" />,
    Cpu: <Cpu className="w-7 h-7 text-sky-300 drop-shadow-[0_2px_8px_rgba(56,189,248,0.5)]" />,
    Briefcase: <Briefcase className="w-7 h-7 text-sky-300 drop-shadow-[0_2px_8px_rgba(56,189,248,0.5)]" />,
  };

  return (
    <section
      className="py-20 sm:py-28 relative border-b border-white/10 overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(180deg, rgba(2, 6, 23, 0.72) 0%, rgba(2, 6, 23, 0.32) 20%, rgba(2, 6, 23, 0.45) 75%, rgba(2, 6, 23, 0.92) 100%),
          url('/gallery/tax-library.jpg')
        `,
        backgroundAttachment: "fixed",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* Blueprint Coordinate Overlay & Central Gyro Glow */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Dynamic 56px Blueprint Crosshair Grid */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `
              radial-gradient(circle at 1px 1px, rgba(56, 189, 248, 0.45) 1px, transparent 0),
              linear-gradient(to right, rgba(56, 189, 248, 0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(56, 189, 248, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: "56px 56px",
          }}
        />
        {/* Central Orbital Gyro Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-gradient-to-r from-blue-600/15 via-sky-500/10 to-indigo-600/15 rounded-full blur-[130px]" />
      </div>

      <Container className="relative z-10">
        {/* Luxury Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-sky-300 text-xs font-semibold tracking-wider uppercase backdrop-blur-md mb-4 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
            <span>Core Competencies • Indirect Tax Specialization</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-white tracking-tight leading-tight">
            Specialized Indirect Tax{" "}
            <span className="block sm:inline text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-blue-400 to-blue-500 mt-1 sm:mt-0">
              Practice Areas
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl font-normal">
            Dedicated exclusively to the intricate terrain of Indian indirect tax legislation, dispute resolution, contract architecture, and statutory compliance.
          </p>

          {/* Specular Center Gradient Divider Line */}
          <div className="mt-6 flex items-center justify-center gap-2">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-blue-400/60" />
            <div className="w-1.5 h-1.5 rounded-full bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-blue-400/60" />
          </div>
        </div>

        {/* 6 Luxury Practice Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8">
          {siteData.services.map((service, index) => (
            <div
              key={service.id}
              className="glossy-card rounded-2xl p-7 sm:p-8 flex flex-col justify-between group relative overflow-hidden hover:-translate-y-2 hover:scale-[1.01] transition-all duration-500 cursor-default"
              style={{
                boxShadow:
                  "inset 0 1px 2px 0 rgba(255, 255, 255, 0.35), 0 20px 45px -15px rgba(0, 0, 0, 0.65), 0 0 25px rgba(59, 130, 246, 0.15)",
              }}
            >
              {/* Animated Top Specular Light Sheen */}
              <div className="absolute top-0 left-0 right-0 h-[2px] overflow-hidden pointer-events-none">
                <div
                  className="w-full h-full bg-gradient-to-r from-transparent via-sky-300 to-transparent animate-border-sheen"
                  style={{ animationDelay: `${index * 0.5}s` }}
                />
              </div>

              {/* Static Top Glass Rim */}
              <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent pointer-events-none" />

              {/* Card Ambient Glow Refraction in Top Corner */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-blue-500/15 via-transparent to-transparent blur-xl rounded-tr-2xl pointer-events-none opacity-50 group-hover:opacity-85 transition-opacity duration-500" />

              {/* Header Row: 3D Floating Icon Box */}
              <div className="flex items-center justify-between mb-5 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-b from-white/20 via-blue-600/20 to-blue-900/40 border border-white/30 border-t-white/70 flex items-center justify-center shadow-[inset_0_1px_2px_rgba(255,255,255,0.6),0_10px_25px_-5px_rgba(37,99,235,0.4)] group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300">
                  {iconMap[service.icon] || (
                    <Scale className="w-7 h-7 text-sky-300 drop-shadow-[0_2px_8px_rgba(56,189,248,0.5)]" />
                  )}
                </div>
              </div>

              <div className="relative z-10">

                {/* Practice Title */}
                <h3 className="text-xl sm:text-[22px] font-extrabold text-white mb-2.5 tracking-tight leading-snug group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-sky-200 group-hover:to-blue-400 transition-all duration-300">
                  {service.title}
                </h3>

                {/* Narrative Summary */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-5">
                  {service.shortDesc}
                </p>

                {/* Key Practice Areas Checklist with Glowing Checks */}
                <div className="space-y-2 mb-6 pt-3 border-t border-white/10">
                  {service.keyAreas.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Luxury Footer Bar */}
              <div className="pt-3.5 border-t border-white/10 flex items-center justify-between text-xs text-slate-300 relative z-10">
                <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider font-mono">
                  Statutory Scope
                </span>
                <Link
                  to={`/services?category=${service.id}`}
                  className="text-sky-300 font-semibold group-hover:text-white transition-colors flex items-center gap-1 text-xs"
                >
                  <span>Explore Practice</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Glossy Master Action CTA */}
        <div className="mt-14 sm:mt-18 text-center">
          <Link
            to="/services"
            className="relative group overflow-hidden inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 hover:from-blue-500 hover:via-sky-400 hover:to-indigo-500 text-white font-semibold text-sm tracking-wide transition-all duration-300 border border-blue-400/50 border-t-white/80 shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.7),0_10px_25px_-5px_rgba(37,99,235,0.5),0_0_20px_rgba(56,189,248,0.35)] hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_15px_30px_-5px_rgba(37,99,235,0.65),0_0_25px_rgba(56,189,248,0.5)] hover:-translate-y-0.5 hover:scale-[1.02] cursor-pointer"
          >
            {/* Top Gloss Reflection */}
            <div className="absolute top-0 left-0 right-0 h-[48%] bg-gradient-to-b from-white/35 via-white/15 to-transparent rounded-t-xl pointer-events-none" />

            <span className="relative z-10 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
              View All 6 Practice Frameworks & Deliverables
            </span>
            <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]" />
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default PracticeAreasOverview;
