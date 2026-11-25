import React, { useState } from "react";
import { Link } from "react-router-dom";
import { siteData } from "../../data/siteData";
import { Container } from "../common/Container";
import { AnimatedDivider } from "../common/AnimatedDivider";
import { Phone, MapPin, ArrowRight, Award } from "lucide-react";

export const PartnersShowcase: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate partners array for infinite seamless looping
  const partnersLoop = [
    ...siteData.partners,
    ...siteData.partners,
    ...siteData.partners,
  ];

  return (
    <section className="py-20 sm:py-28 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[360px] bg-gradient-to-b from-[#1e3a8a]/5 via-transparent to-transparent blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 right-10 w-[350px] h-[350px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <Container className="relative z-10 mb-12 sm:mb-16">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#1e3a8a] text-xs font-bold tracking-wider uppercase mb-4 shadow-sm">
            <Award className="w-3.5 h-3.5 text-[#1e3a8a]" />
            <span>Senior Leadership • 7 Pan-India Chambers</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-tight">
            Our Distinguished Partners &{" "}
            <span className="block sm:inline text-[#1e3a8a] mt-1 sm:mt-0 drop-shadow-sm">
              Practice Directors
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl font-normal">
            Steered by recognized Fellow & Associate Chartered Accountants (FCA & ACA) delivering courtroom-tested advocacy, corporate tax planning, and statutory audit counsel across India.
          </p>

          <AnimatedDivider className="mt-6" />
        </div>
      </Container>

      {/* Infinite Smooth Right-to-Left Scrolling Partners Ribbon */}
      <div
        className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className={`flex gap-6 py-4 animate-marquee-scroll ${isPaused ? "[animation-play-state:paused]" : ""
            }`}
          style={{ width: "max-content" }}
        >
          {partnersLoop.map((partner, idx) => (
            <div
              key={idx}
              className="w-[320px] sm:w-[350px] shrink-0 p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-[#1e3a8a] shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between relative overflow-hidden hover:-translate-y-2 cursor-pointer"
            >
              {/* Top Accent Specular Line */}
              <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#38bdf8] to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-20" />

              <div>
                {/* Top Badge: City & Qualification */}
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#1e3a8a] text-[11px] font-bold uppercase tracking-wider font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1e3a8a] animate-pulse" />
                    <span>{partner.city || "Partner"}</span>
                  </span>
                  <span className="text-[10px] font-mono font-bold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-md border border-slate-200">
                    {partner.qualification.split(" ")[0]}
                  </span>
                </div>

                {/* Partner Portrait & Core Identity */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-slate-200 shadow-md group-hover:border-[#1e3a8a] transition-all duration-300 bg-slate-100 shrink-0 ring-2 ring-slate-100 group-hover:ring-[#1e3a8a]/30">
                    {partner.image ? (
                      <img
                        src={partner.image}
                        alt={partner.name}
                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-tr from-[#1e3a8a] to-[#355094] flex items-center justify-center text-white font-bold text-lg shadow-inner">
                        {partner.name
                          .replace("CA", "")
                          .trim()
                          .split(" ")
                          .slice(0, 2)
                          .map((n) => n[0])
                          .join("")}
                      </div>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#1e3a8a] transition-colors leading-snug">
                      {partner.name}
                    </h3>
                    <p className="text-xs font-bold text-[#1e3a8a] uppercase tracking-wider mt-0.5 font-mono line-clamp-1">
                      {partner.role}
                    </p>
                    <p className="text-xs text-slate-500 font-medium mt-0.5">
                      {partner.qualification}
                    </p>

                    {/* Direct Telephone Link */}
                    {partner.phone && (
                      <a
                        href={`tel:${partner.phone.replace(/\s+/g, "")}`}
                        className="inline-flex items-center gap-1 text-xs text-slate-700 hover:text-[#1e3a8a] font-semibold mt-1.5"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Phone className="w-3.5 h-3.5 text-[#1e3a8a]" />
                        <span>{partner.phone}</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Office Location Address Snippet */}
                {partner.address && (
                  <div className="mb-4 p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2 text-[11px] text-slate-600 leading-relaxed font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#1e3a8a] shrink-0 mt-0.5" />
                    <span className="line-clamp-2">{partner.address}</span>
                  </div>
                )}

                {/* Bio Excerpt */}
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 mb-4">
                  {partner.bio}
                </p>

                {/* Specializations Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {partner.specialization.slice(0, 2).map((spec, i) => (
                    <span
                      key={i}
                      className="text-[10px] px-2.5 py-0.5 rounded-lg bg-blue-50 border border-blue-200 text-[#1e3a8a] font-medium"
                    >
                      {spec}
                    </span>
                  ))}
                  {partner.specialization.length > 2 && (
                    <span className="text-[10px] px-2 py-0.5 rounded-lg bg-slate-100 text-slate-600 font-medium font-mono">
                      +{partner.specialization.length - 2} more
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-mono text-[11px]">Chartered Accountant</span>
                <Link
                  to="/about#leadership"
                  className="inline-flex items-center gap-1 font-bold text-[#1e3a8a] group-hover:translate-x-1 transition-transform"
                >
                  <span>Full Profile</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA to View All Partners */}
      <div className="mt-10 sm:mt-12 text-center">
        <Link
          to="/about#leadership"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#172554] via-[#1e3a8a] to-[#2563eb] hover:from-[#0f172a] hover:to-[#172554] text-white font-bold text-sm tracking-wide shadow-md shadow-[#1e3a8a]/20 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
        >
          <span>Explore All 7 Partners & Leadership</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};

export default PartnersShowcase;
