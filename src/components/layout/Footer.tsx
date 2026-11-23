import React from "react";
import { Link } from "react-router-dom";
import { siteData } from "../../data/siteData";
import { Container } from "../common/Container";
import { MapPin, Phone, Mail, Clock, ShieldCheck, ArrowRight, ExternalLink } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="relative overflow-hidden text-slate-200 animate-footer-bg-shift">
      {/* ======================================================== */}
      {/* ULTRA-LUXURY ANIMATED FOOTER HORIZON UPPER BORDER        */}
      {/* ======================================================== */}
      <div className="relative w-full overflow-hidden pointer-events-none z-30">
        {/* Layer 1: Ambient Horizon Neon Glow Aura */}
        <div className="absolute top-0 left-0 right-0 h-8 -translate-y-1/2 bg-gradient-to-r from-transparent via-[#2563eb]/50 via-[#38bdf8]/35 to-transparent blur-md animate-footer-aura pointer-events-none" />

        {/* Layer 2: Kinetic Multi-Stop Flowing Gradient Line (3.5px) */}
        <div className="h-[3.5px] w-full bg-gradient-to-r from-[#0f2756] via-[#1e3a8a] via-[#2563eb] via-[#38bdf8] via-[#60a5fa] via-[#2563eb] via-[#1e3a8a] to-[#0f2756] animate-footer-gradient shadow-[0_0_18px_rgba(37,99,235,0.7)] relative z-10" />

        {/* Layer 3: Laser Comet Specular Light Flare Sweep */}
        <div className="absolute top-0 left-0 right-0 h-[3.5px] overflow-hidden pointer-events-none z-20">
          <div className="w-64 sm:w-96 h-full bg-gradient-to-r from-transparent via-[#38bdf8] via-white to-transparent shadow-[0_0_20px_#38bdf8,0_0_30px_#ffffff] animate-footer-comet" />
        </div>

        {/* Layer 4: Delicate Horizon Under-Glow Shimmer */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-sky-400/40 to-transparent relative z-10" />
      </div>

      {/* ======================================================== */}
      {/* LIVING ANIMATED LUXURY BACKGROUND SUITE                   */}
      {/* ======================================================== */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Layer 1: Drifting Micro-Architectural Tax Matrix Grid */}
        <div
          className="absolute inset-0 footer-grid-pattern opacity-25"
          style={{
            maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)",
          }}
        />

        {/* Layer 2: Moving Volumetric Liquid Aurora Orbs */}
        {/* Sapphire Blue Luminous Cloud (Upper Left to Center Drift) */}
        <div className="absolute -top-16 left-[8%] w-[580px] h-[320px] bg-gradient-to-br from-blue-600/30 via-[#2563eb]/20 to-sky-500/15 rounded-full blur-[110px] animate-footer-orb-1" />

        {/* Electric Sky Cyan Aurora Cloud (Lower Right to Center Drift) */}
        <div className="absolute -bottom-20 right-[5%] w-[520px] h-[300px] bg-gradient-to-tl from-sky-400/25 via-[#0284c7]/25 to-indigo-900/10 rounded-full blur-[100px] animate-footer-orb-2" />

        {/* Deep Royal Indigo Core Bloom (Central Pulse) */}
        <div className="absolute top-[25%] left-1/2 -translate-x-1/2 w-[460px] h-[340px] bg-gradient-to-tr from-indigo-700/25 via-blue-900/35 to-transparent rounded-full blur-[125px] animate-footer-orb-3" />

        {/* Layer 3: Sweeping Diagonal Ambient Light Beam */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="w-[320px] h-full bg-gradient-to-r from-transparent via-sky-400/15 via-white/5 to-transparent animate-footer-light-sweep" />
        </div>

        {/* Layer 4: Undulating Kinetic Data Stream Waves (SVG) */}
        <div className="absolute bottom-0 left-0 right-0 h-44 overflow-hidden opacity-30">
          {/* Wave 1: Flowing Primary Cyan Wave */}
          <div className="w-[200%] h-full flex animate-footer-wave-slow">
            <svg
              className="w-1/2 h-full text-sky-400"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              fill="none"
            >
              <path
                d="M0,0 C150,90 350,-40 500,50 C650,140 900,10 1200,60 L1200,120 L0,120 Z"
                fill="url(#footer-wave-grad-1)"
                opacity="0.5"
              />
              <path
                d="M0,0 C150,90 350,-40 500,50 C650,140 900,10 1200,60"
                stroke="rgba(56, 189, 248, 0.35)"
                strokeWidth="1.5"
                strokeDasharray="8 6"
              />
            </svg>
            <svg
              className="w-1/2 h-full text-sky-400"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              fill="none"
            >
              <path
                d="M0,0 C150,90 350,-40 500,50 C650,140 900,10 1200,60 L1200,120 L0,120 Z"
                fill="url(#footer-wave-grad-1)"
                opacity="0.5"
              />
              <path
                d="M0,0 C150,90 350,-40 500,50 C650,140 900,10 1200,60"
                stroke="rgba(56, 189, 248, 0.35)"
                strokeWidth="1.5"
                strokeDasharray="8 6"
              />
            </svg>
          </div>

          {/* Wave 2: Counter-Flowing Deep Blue Ribbon */}
          <div className="absolute inset-0 w-[200%] h-full flex animate-footer-wave-fast opacity-40">
            <svg
              className="w-1/2 h-full text-blue-500"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              fill="none"
            >
              <path
                d="M0,40 C200,10 400,100 600,30 C800,-40 1000,80 1200,20 L1200,120 L0,120 Z"
                fill="url(#footer-wave-grad-2)"
                opacity="0.4"
              />
            </svg>
            <svg
              className="w-1/2 h-full text-blue-500"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              fill="none"
            >
              <path
                d="M0,40 C200,10 400,100 600,30 C800,-40 1000,80 1200,20 L1200,120 L0,120 Z"
                fill="url(#footer-wave-grad-2)"
                opacity="0.4"
              />
            </svg>
          </div>

          <svg className="absolute w-0 h-0">
            <defs>
              <linearGradient id="footer-wave-grad-1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#0c192e" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="footer-wave-grad-2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#2563eb" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#0c192e" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Layer 5: Twinkling Nationwide Data Network Constellation Nodes */}
        <div className="absolute top-12 left-[18%] w-1.5 h-1.5 rounded-full bg-sky-300 shadow-[0_0_8px_#38bdf8] animate-star-twinkle-1" />
        <div className="absolute top-24 right-[28%] w-2 h-2 rounded-full bg-blue-300 shadow-[0_0_10px_#60a5fa] animate-star-twinkle-2" />
        <div className="absolute bottom-28 left-[35%] w-1.5 h-1.5 rounded-full bg-sky-200 shadow-[0_0_8px_#7dd3fc] animate-star-twinkle-3" />
        <div className="absolute top-40 right-[14%] w-1 h-1 rounded-full bg-white shadow-[0_0_6px_#ffffff] animate-star-twinkle-1" />
        <div className="absolute bottom-16 right-[42%] w-1.5 h-1.5 rounded-full bg-sky-400 shadow-[0_0_9px_#38bdf8] animate-star-twinkle-2" />
        <div className="absolute top-20 left-[58%] w-1 h-1 rounded-full bg-blue-400 shadow-[0_0_7px_#60a5fa] animate-star-twinkle-3" />

        {/* Layer 6: Soft Radial Vignette to maintain ultra-crisp typography readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060b18]/70 via-transparent to-[#070d1e]/50 pointer-events-none" />
      </div>

      <Container className="pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1: Brand & Credentials (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white p-1 flex items-center justify-center border border-slate-200 shadow-md shrink-0">
                <img
                  src="/logo.svg"
                  alt="CA India Logo - M B Gabhawala & Co."
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-bold text-xl text-white tracking-tight block">
                  {siteData.company.name}
                </span>
                <span className="text-xs text-blue-400 font-medium tracking-wider uppercase">
                  Chartered Accountants • ~Since {siteData.company.establishedYear}
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed pr-2">
              Premier Chartered Accountancy practice specializing in Indirect Taxation, GST litigation, and strategic corporate advisory. Headquartered in Kolkata with pan-India branch operations.
            </p>

            <div className="flex items-center gap-2 pt-2 text-xs text-blue-400/90 font-medium">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              <span>Pillars: {siteData.company.motto}</span>
            </div>

            {/* Branch Network Indicator */}
            <div className="pt-3 border-t border-slate-900 text-xs text-slate-400">
              <span className="text-blue-400/90 font-semibold block mb-1">Our Branches:</span>
              <p className="text-[11px] text-slate-400 leading-normal">
                Kolkata • Varanasi • Gurugram • Katihar • Sonebhadra • Mumbai
              </p>
            </div>
          </div>

          {/* Column 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {siteData.navigation.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="hover:text-blue-400 transition-colors flex items-center gap-1.5"
                  >
                    <ArrowRight className="w-3 h-3 text-blue-500/70" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Practice Areas (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Practice Areas
            </h3>
            <ul className="space-y-2.5 text-sm">
              {siteData.services.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services/${service.id}`}
                    className="hover:text-blue-400 transition-colors flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500/60"></span>
                    <span className="truncate">{service.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Kolkata Office (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Kolkata Head Office
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5 text-slate-300">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-1" />
                <span className="text-xs sm:text-sm leading-relaxed">
                  {siteData.location.fullAddress}
                </span>
              </div>

              <div className="flex items-center gap-2.5 text-slate-300">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <div className="flex flex-col text-xs sm:text-sm">
                  <a href="tel:+919681606280" className="hover:text-blue-400 transition-colors">
                    +91 9681 606 280
                  </a>
                  <a href="tel:+917007026952" className="hover:text-blue-400 transition-colors">
                    +91 7007 026 952
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5 text-slate-300">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a
                  href={`mailto:${siteData.contact.primaryEmail}`}
                  className="hover:text-blue-400 transition-colors text-xs sm:text-sm font-medium"
                >
                  {siteData.contact.primaryEmail}
                </a>
              </div>

              <div className="flex items-center gap-2.5 text-slate-400 text-xs pt-1">
                <Clock className="w-4 h-4 text-blue-400/80 shrink-0" />
                <span>{siteData.location.workingDays} ({siteData.location.workingHours})</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: MANDATORY ATTRIBUTION & NO "ALL RIGHTS RESERVED" */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col items-center justify-center text-center text-xs text-slate-400 gap-2 pb-4">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span>© {new Date().getFullYear()} {siteData.company.name}</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Chartered Accountants</span>
          </div>

          {/* EXACT MANDATORY ATTRIBUTION REQUIRED BY SPEC */}
          <div className="flex flex-wrap items-center justify-center text-xs text-slate-400">
            <span>Designed & Developed by</span>
            <a
              href="https://www.teamdeoskolkata.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold hover:text-red-700 transition-colors duration-300 ml-1 inline-flex items-center gap-0.5 text-blue-400"
            >
              <span>Digital Exposure Online Service</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};
