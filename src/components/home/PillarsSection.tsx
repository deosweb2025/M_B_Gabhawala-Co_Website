import React from "react";
import { Container } from "../common/Container";
import { AnimatedDivider } from "../common/AnimatedDivider";
import { useInView } from "../../hooks/useInView";
import { ShieldCheck, BookOpen, Zap, CheckCircle2, ArrowUpRight } from "lucide-react";

interface PillarItem {
  number: string;
  roman: string;
  title: string;
  tagline: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  accentGradient: string;
  glowShadow: string;
  tenets: string[];
}

const pillarsData: PillarItem[] = [
  {
    number: "01",
    roman: "I",
    title: "Integrity",
    tagline: "Unflinching Ethical Foundation",
    description:
      "Every opinion and advisory stance is grounded in the highest standards of professional ethics, independent rigor, and statutory adherence, earning the lifelong trust of regulatory authorities and clients alike.",
    icon: ShieldCheck,
    accentGradient: "from-blue-600/25 via-sky-500/10 to-transparent",
    glowShadow: "rgba(59, 130, 246, 0.35)",
    tenets: [
      "Zero-Conflict Advisory Stance",
      "Strict Statutory Compliance",
      "Decades of Regulatory Trust",
    ],
  },
  {
    number: "02",
    roman: "II",
    title: "Knowledge",
    tagline: "Thought Leadership & Depth",
    description:
      "Our practice is steered by seasoned Chartered Accountants who actively decode intricate statutes, landmark tribunal judgments, and constitutional principles to provide actionable clarity.",
    icon: BookOpen,
    accentGradient: "from-indigo-600/25 via-blue-500/10 to-transparent",
    glowShadow: "rgba(99, 102, 241, 0.35)",
    tenets: [
      "Senior Partner-Led Tax Research",
      "GSTAT & High Court Precedents",
      "Statutory & Circular Decoding",
    ],
  },
  {
    number: "03",
    roman: "III",
    title: "Speed",
    tagline: "Agile, Business-Centric Execution",
    description:
      "In the dynamic landscape of GST notifications and strict statutory deadlines, we deliver rapid turnarounds, preemptive alerts, and seamless compliance that keep businesses ahead of risk.",
    icon: Zap,
    accentGradient: "from-cyan-600/25 via-blue-500/10 to-transparent",
    glowShadow: "rgba(6, 182, 212, 0.35)",
    tenets: [
      "Rapid Turnaround for SCN Deadlines",
      "Preemptive GST Notification Alerts",
      "Real-Time Executive Counsel",
    ],
  },
];

export const PillarsSection: React.FC = () => {
  const [sectionRef, isInView] = useInView({ threshold: 0.1 });

  return (
    <section
      ref={sectionRef}
      className="py-20 sm:py-28 bg-slate-50 relative border-b border-slate-200 overflow-hidden"
    >
      {/* BESPOKE SECTION BACKGROUND: TRI-BEAM VOLUMETRIC CATHEDRAL COLUMNS & MONUMENTAL VAULT */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Top Horizon Glow Ray */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#6797D6]/30 to-transparent" />

        {/* Pillar 1 Volumetric Light Beam (Integrity - Sapphire Blue) */}
        <div className="absolute -top-10 left-[16%] w-72 h-[520px] bg-gradient-to-b from-[#355094]/10 via-[#6797D6]/5 to-transparent blur-[80px] rounded-full animate-aurora-a" />

        {/* Pillar 2 Volumetric Light Beam (Knowledge - Celestial Sky Cyan) */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-80 h-[560px] bg-gradient-to-b from-[#6797D6]/12 via-[#355094]/5 to-transparent blur-[85px] rounded-full animate-aurora-b" />

        {/* Pillar 3 Volumetric Light Beam (Speed - Electric Indigo) */}
        <div className="absolute -top-10 right-[16%] w-72 h-[520px] bg-gradient-to-b from-[#355094]/10 via-[#6797D6]/5 to-transparent blur-[80px] rounded-full animate-aurora-a" />

        {/* Hexagonal Isometric Lattice Stipple Texture */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, #355094 1.5px, transparent 1.5px)`,
            backgroundSize: "48px 48px",
          }}
        />

        {/* Subtle Floor Ambient */}
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-slate-100/60 via-transparent to-transparent" />
      </div>

      <Container className="relative z-10">
        {/* Luxury Section Header - Fades down with smooth easing */}
        <div
          className={`flex flex-col items-center text-center max-w-3xl mx-auto mb-14 sm:mb-18 transition-all duration-700 ease-out ${isInView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
            }`}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#355094] text-xs font-semibold tracking-wider uppercase mb-4 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#355094] animate-pulse" />
            <span>Our Guiding Principles</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-tight">
            The Three Pillars of{" "}
            <span className="block sm:inline text-[#1e3a8a] mt-1 sm:mt-0">
              M B Gabhawala & Co.
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl font-normal">
            Every legal opinion, tribunal representation, and compliance milestone is driven by the foundational principles established ~Since 1975.
          </p>

          {/* Specular Center Gradient Divider Line with Appearance Animation */}
          <AnimatedDivider className="mt-6" />
        </div>

        {/* 3 Luxury Pillar Cards - 3D Perspective Fan Entrance */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 lg:gap-8">
          {pillarsData.map((pillar, index) => {
            const Icon = pillar.icon;

            // Unique 3D perspective animation parameters for each card
            const entranceTransform =
              index === 0
                ? isInView
                  ? "opacity-100 translate-y-0 rotate-0 scale-100"
                  : "opacity-0 translate-y-20 -rotate-2 scale-95"
                : index === 1
                  ? isInView
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-24 scale-90"
                  : isInView
                    ? "opacity-100 translate-y-0 rotate-0 scale-100"
                    : "opacity-0 translate-y-20 rotate-2 scale-95";

            const transitionDelay = `${index * 160 + 100}ms`;

            return (
              <div
                key={pillar.title}
                className={`glossy-card rounded-2xl p-7 sm:p-8 relative flex flex-col justify-between group overflow-hidden hover:-translate-y-2 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${entranceTransform}`}
                style={{
                  transitionDelay,
                }}
              >
                {/* Animated Top Specular Light Sheen */}
                <div className="absolute top-0 left-0 right-0 h-[2px] overflow-hidden pointer-events-none">
                  <div
                    className="w-full h-full bg-gradient-to-r from-transparent via-[#6797D6] to-transparent animate-border-sheen"
                    style={{ animationDelay: `${index * 0.9}s` }}
                  />
                </div>

                {/* Static Top Border Highlight */}
                <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent pointer-events-none" />

                {/* Card Ambient Glow Refraction */}
                <div
                  className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-50/60 via-transparent to-transparent rounded-tr-2xl pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-500"
                />

                {/* Large Watermarked Roman Numeral */}
                <span className="text-6xl sm:text-7xl font-extrabold text-slate-100 group-hover:text-blue-50 transition-colors pointer-events-none absolute top-4 right-6 select-none font-serif">
                  {pillar.roman}
                </span>

                <div className="relative z-10">
                  {/* Floating Luxury Icon Box */}
                  <div className="w-16 h-16 rounded-2xl bg-blue-50/80 border border-blue-200/80 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300">
                    <Icon className="w-8 h-8 text-[#1e3a8a]" />
                  </div>

                  {/* Monospace Indicator Badge */}
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white border border-slate-200 text-[#1e3a8a] text-[11px] font-semibold tracking-wider uppercase mb-3 font-mono shadow-sm">
                    <span className="text-[#172554] font-bold">{pillar.number}</span>
                    <span className="text-slate-400">•</span>
                    <span>{pillar.tagline}</span>
                  </div>

                  {/* Pillar Title */}
                  <h3 className="text-2xl sm:text-[26px] font-extrabold text-slate-900 mb-3 tracking-tight group-hover:text-[#1e3a8a] transition-all duration-300">
                    {pillar.title}
                  </h3>

                  {/* Narrative Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6">
                    {pillar.description}
                  </p>

                  {/* Core Tenets Checklist */}
                  <div className="space-y-2 pt-2 pb-4 border-t border-slate-100">
                    {pillar.tenets.map((tenet, tIdx) => (
                      <div key={tIdx} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1e3a8a] shrink-0" />
                        <span>{tenet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Luxury Footer Bar */}
                <div className="mt-4 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 relative z-10">
                  <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider font-mono">
                    ~Since 1975 Standard
                  </span>
                  <span className="text-[#1e3a8a] font-semibold group-hover:text-[#2563eb] transition-colors flex items-center gap-0.5 text-xs">
                    <span>Verified</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default PillarsSection;
