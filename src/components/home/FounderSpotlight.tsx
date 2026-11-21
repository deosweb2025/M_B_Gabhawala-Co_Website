import React from "react";
import { siteData } from "../../data/siteData";
import { Container } from "../common/Container";
import { Award, BookOpen, CheckCircle2, Quote } from "lucide-react";

export const FounderSpotlight: React.FC = () => {
  const { founder } = siteData;

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-slate-950 via-slate-900/80 to-slate-950 relative border-b border-white/10 overflow-hidden">
      {/* Ambient glossy glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/10 blur-[100px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Credibility & Book Reference (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glossy-card rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              {/* Top Specular Sheen */}
              <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />

              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-b from-blue-400 via-blue-600 to-blue-800 flex items-center justify-center text-white font-bold text-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.6),0_10px_20px_rgba(37,99,235,0.4)] border-t border-white/40">
                  SG
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {founder.name}
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-blue-300">
                    {founder.designation}
                  </p>
                  <p className="text-xs text-slate-300 mt-0.5">
                    {founder.qualifications}
                  </p>
                </div>
              </div>

              {/* Founder Quote Card */}
              <div className="relative bg-gradient-to-br from-white/[0.08] to-slate-900/80 rounded-2xl p-5 border border-white/10 border-t-white/30 mb-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">
                <Quote className="w-8 h-8 text-blue-400/25 absolute top-3 right-3" />
                <p className="text-sm italic text-slate-200 leading-relaxed relative z-10">
                  "{founder.quote}"
                </p>
              </div>

              {/* Author Recognition Badge */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-500/15 via-blue-600/10 to-indigo-600/15 border border-blue-400/30 border-t-white/30 flex items-start gap-3.5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.25)]">
                <BookOpen className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-blue-200">
                    Authoritative Landmark Reference
                  </h4>
                  <p className="text-xs text-slate-200 mt-1">
                    Author of the celebrated multi-volume <span className="font-semibold text-white">"Treatise on Service Tax"</span>, cited across adjudications and appellate benches.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between text-xs text-slate-300 border-t border-white/10 pt-4">
                <span>Merit Rank: All-India 3rd (CA Final)</span>
                <span className="text-blue-300 font-semibold">Ex-President BCAS</span>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Institutional Roles (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs sm:text-sm font-semibold tracking-wider uppercase">
              <Award className="w-3.5 h-3.5" />
              <span>Leadership & Thought Leadership</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
              Shaping Indian Indirect Tax{" "}
              <span className="gold-gradient-text">Jurisprudence</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              {founder.bio}
            </p>

            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Key Professional Appointments & Contributions
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {founder.keyHighlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-900/60 border border-slate-800/80"
                  >
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-300 leading-snug">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
