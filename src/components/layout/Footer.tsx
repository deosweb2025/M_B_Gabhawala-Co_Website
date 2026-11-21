import React from "react";
import { Link } from "react-router-dom";
import { siteData } from "../../data/siteData";
import { Container } from "../common/Container";
import { MapPin, Phone, Mail, Clock, ShieldCheck, ArrowRight, ExternalLink } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/10 text-slate-300 relative overflow-hidden">
      {/* Dynamic Ambient Background Illumination Blooms */}
      <div className="absolute -top-24 left-1/4 w-[600px] h-[320px] bg-blue-600/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[550px] h-[280px] bg-sky-500/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Layer 1: Luxury Architectural Grid Lines Texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(to right, #38bdf8 1px, transparent 1px), linear-gradient(to bottom, #38bdf8 1px, transparent 1px)`,
          backgroundSize: "36px 36px",
          maskImage: "radial-gradient(ellipse at 50% 25%, black 45%, transparent 95%)",
          WebkitMaskImage: "radial-gradient(ellipse at 50% 25%, black 45%, transparent 95%)",
        }}
      />

      {/* Layer 2: Precision Stippled Dot Matrix Texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage: `radial-gradient(rgba(56, 189, 248, 0.9) 1px, transparent 1px)`,
          backgroundSize: "36px 36px",
          maskImage: "radial-gradient(ellipse at 50% 40%, black 50%, transparent 90%)",
          WebkitMaskImage: "radial-gradient(ellipse at 50% 40%, black 50%, transparent 90%)",
        }}
      />

      {/* Layer 3: Tactile Diagonal Micro-Weave Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `repeating-linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0, rgba(255, 255, 255, 0.4) 1px, transparent 0, transparent 10px)`,
        }}
      />

      {/* Top Decorative Specular Accent Line with Glow */}
      <div className="relative h-[2px] w-full bg-gradient-to-r from-transparent via-sky-400 to-transparent shadow-[0_0_20px_rgba(56,189,248,0.7)] z-10" />

      {/* Animated Top Specular Light Sheen */}
      <div className="absolute top-0 left-0 right-0 h-[2px] overflow-hidden pointer-events-none z-20">
        <div className="w-full h-full bg-gradient-to-r from-transparent via-white/90 to-transparent animate-border-sheen" />
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
                    to="/services"
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
