import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./Container";
import {
  ChevronRight,
  Clock,
  ShieldCheck,
  Scale,
  Building2,
  BookOpen,
  Compass,
  MapPin,
  FileText,
  CheckCircle2,
  Layers,
  Zap,
  Briefcase,
} from "lucide-react";

export interface PageHeaderProps {
  badge?: string;
  title: string;
  highlight?: string;
  description?: string;
  breadcrumbs?: { label: string; path?: string }[];
  variant?: "about" | "services" | "publications" | "gallery" | "contact" | "default";
  rightContent?: React.ReactNode;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  badge,
  title,
  highlight,
  description,
  breadcrumbs = [{ label: "Home", path: "/" }],
  variant = "default",
  rightContent,
}) => {
  // Shared Breadcrumbs Component (Crisp White Floating Pill with Navy Text)
  const renderBreadcrumbs = () => (
    <nav aria-label="Breadcrumb" className="inline-flex items-center gap-2 text-xs text-slate-700 mb-3.5 bg-white/95 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/90 shadow-md">
      {breadcrumbs.map((crumb, idx) => (
        <React.Fragment key={idx}>
          {crumb.path ? (
            <Link to={crumb.path} className="hover:text-[#1e3a8a] transition-colors flex items-center gap-1 font-semibold text-slate-700">
              {crumb.label}
            </Link>
          ) : (
            <span className="text-[#1e3a8a] font-bold">{crumb.label}</span>
          )}
          {idx < breadcrumbs.length - 1 && (
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          )}
        </React.Fragment>
      ))}
    </nav>
  );

  // ----------------------------------------------------
  // VARIANT 1: ABOUT PAGE HEADER (Tax Law Library Theme)
  // ----------------------------------------------------
  if (variant === "about") {
    return (
      <div className="relative pt-28 pb-14 sm:pt-36 sm:pb-16 overflow-hidden bg-slate-900 border-b border-slate-200">
        {/* Background Photo: Pure & 100% Clearly Visible - ZERO SHADE */}
        <div className="absolute inset-0 z-0">
          <img
            src="/gallery/tax-library.jpg"
            alt="Tax Law Research Library"
            className="w-full h-full object-cover object-center"
          />
        </div>

        <Container className="relative z-10">
          <div className="max-w-2xl space-y-3.5">
            {renderBreadcrumbs()}

            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/95 border border-white/90 text-[#1e3a8a] text-xs font-bold tracking-wider uppercase shadow-md backdrop-blur-md">
                <Clock className="w-3.5 h-3.5 text-[#1e3a8a]" />
                <span>{badge || "Firm Legacy & Credentials • Established ~1975"}</span>
              </div>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-[38px] font-extrabold text-white tracking-tight leading-snug drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
              {title}{" "}
              {highlight && (
                <span className="block text-sky-400 mt-1 font-bold drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                  {highlight}
                </span>
              )}
            </h1>

            {description && (
              <p className="text-xs sm:text-sm text-slate-100 leading-relaxed font-medium drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
                {description}
              </p>
            )}

            {/* Compact Heritage Tags (Crisp White Badges with Navy Blue Accents) */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/95 border border-white/90 text-slate-800 text-xs font-semibold shadow-md backdrop-blur-md">
                <ShieldCheck className="w-3.5 h-3.5 text-[#1e3a8a]" />
                <span>50+ Years Practice Legacy</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/95 border border-white/90 text-slate-800 text-xs font-semibold shadow-md backdrop-blur-md">
                <Scale className="w-3.5 h-3.5 text-[#1e3a8a]" />
                <span>GSTAT & High Court Counsel</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/95 border border-white/90 text-slate-800 text-xs font-semibold shadow-md backdrop-blur-md">
                <Building2 className="w-3.5 h-3.5 text-[#1e3a8a]" />
                <span>Kolkata HQ & Branches</span>
              </div>
            </div>
          </div>
        </Container>

        {/* Distinct Border Style: Glowing Horizon Line */}
        <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none">
          <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#2563eb]/70 to-transparent" />
        </div>
      </div>
    );
  }

  // ----------------------------------------------------
  // VARIANT 2: SERVICES PAGE HEADER (Consulting Suite Theme)
  // ----------------------------------------------------
  if (variant === "services") {
    return (
      <div className="relative pt-28 pb-14 sm:pt-36 sm:pb-16 overflow-hidden bg-slate-900 border-b border-slate-200">
        {/* Background Photo: Pure & 100% Clearly Visible - ZERO SHADE */}
        <div className="absolute inset-0 z-0">
          <img
            src="/gallery/corporate-consulting-suite.jpg"
            alt="Corporate Tax Consulting Suite"
            className="w-full h-full object-cover object-center"
          />
        </div>

        <Container className="relative z-10">
          <div className="max-w-2xl space-y-3.5">
            {renderBreadcrumbs()}

            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/95 border border-white/90 text-[#1e3a8a] text-xs font-bold tracking-wider uppercase shadow-md backdrop-blur-md">
                <Compass className="w-3.5 h-3.5 text-[#1e3a8a]" />
                <span>{badge || "Practice Areas & Legal Counsel"}</span>
              </div>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-[38px] font-extrabold text-white tracking-tight leading-snug drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
              {title}{" "}
              {highlight && (
                <span className="block text-sky-400 mt-1 font-bold drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                  {highlight}
                </span>
              )}
            </h1>

            {description && (
              <p className="text-xs sm:text-sm text-slate-100 leading-relaxed font-medium drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
                {description}
              </p>
            )}

            {/* Compact Service Tags */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/95 border border-white/90 text-slate-800 text-xs font-semibold shadow-md backdrop-blur-md">
                <Scale className="w-3.5 h-3.5 text-[#1e3a8a]" />
                <span>GSTAT Tribunal Defense</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/95 border border-white/90 text-slate-800 text-xs font-semibold shadow-md backdrop-blur-md">
                <ShieldCheck className="w-3.5 h-3.5 text-[#1e3a8a]" />
                <span>Audits & SCN Defense</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/95 border border-white/90 text-slate-800 text-xs font-semibold shadow-md backdrop-blur-md">
                <Briefcase className="w-3.5 h-3.5 text-[#1e3a8a]" />
                <span>Corporate Retainers</span>
              </div>
            </div>
          </div>
        </Container>

        {/* Distinct Border Style */}
        <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none">
          <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#2563eb]/70 to-transparent" />
        </div>
      </div>
    );
  }

  // ----------------------------------------------------
  // VARIANT 3: PUBLICATIONS PAGE HEADER (Seminar Hall Theme)
  // ----------------------------------------------------
  if (variant === "publications") {
    return (
      <div className="relative pt-28 pb-14 sm:pt-36 sm:pb-16 overflow-hidden bg-slate-900 border-b border-slate-200">
        {/* Background Photo: Pure & 100% Clearly Visible - ZERO SHADE */}
        <div className="absolute inset-0 z-0">
          <img
            src="/gallery/seminar.jpg"
            alt="Tax Keynote and Annual Seminar Hall"
            className="w-full h-full object-cover object-center"
          />
        </div>

        <Container className="relative z-10">
          <div className="max-w-2xl space-y-3.5">
            {renderBreadcrumbs()}

            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/95 border border-white/90 text-[#1e3a8a] text-xs font-bold tracking-wider uppercase shadow-md backdrop-blur-md">
                <BookOpen className="w-3.5 h-3.5 text-[#1e3a8a]" />
                <span>{badge || "Thought Leadership & Statutory Repository"}</span>
              </div>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-[38px] font-extrabold text-white tracking-tight leading-snug drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
              {title}{" "}
              {highlight && (
                <span className="block text-sky-400 mt-1 font-bold drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                  {highlight}
                </span>
              )}
            </h1>

            {description && (
              <p className="text-xs sm:text-sm text-slate-100 leading-relaxed font-medium drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
                {description}
              </p>
            )}

            {/* Compact Publications Tags */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/95 border border-white/90 text-slate-800 text-xs font-semibold shadow-md backdrop-blur-md">
                <FileText className="w-3.5 h-3.5 text-[#1e3a8a]" />
                <span>GCo Connect Bulletins</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/95 border border-white/90 text-slate-800 text-xs font-semibold shadow-md backdrop-blur-md">
                <Zap className="w-3.5 h-3.5 text-[#1e3a8a]" />
                <span>GST Council NewsFlashes</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/95 border border-white/90 text-slate-800 text-xs font-semibold shadow-md backdrop-blur-md">
                <Scale className="w-3.5 h-3.5 text-[#1e3a8a]" />
                <span>Judicial Case Law Precedents</span>
              </div>
            </div>
          </div>
        </Container>

        {/* Distinct Border Style */}
        <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none">
          <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#2563eb]/70 to-transparent" />
        </div>
      </div>
    );
  }

  // ----------------------------------------------------
  // VARIANT 4: GALLERY PAGE HEADER (Skyline Theme)
  // ----------------------------------------------------
  if (variant === "gallery") {
    return (
      <div className="relative pt-28 pb-14 sm:pt-36 sm:pb-16 overflow-hidden bg-slate-900 border-b border-slate-200">
        {/* Background Photo: Pure & 100% Clearly Visible - ZERO SHADE */}
        <div className="absolute inset-0 z-0">
          <img
            src="/gallery/commercial-skyline.jpg"
            alt="Corporate Skyline & Commercial Centers"
            className="w-full h-full object-cover object-center"
          />
        </div>

        <Container className="relative z-10">
          <div className="max-w-2xl space-y-3.5">
            {renderBreadcrumbs()}

            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/95 border border-white/90 text-[#1e3a8a] text-xs font-bold tracking-wider uppercase shadow-md backdrop-blur-md">
                <Layers className="w-3.5 h-3.5 text-[#1e3a8a]" />
                <span>{badge || "Industry Practice Showcase"}</span>
              </div>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-[38px] font-extrabold text-white tracking-tight leading-snug drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
              {title}{" "}
              {highlight && (
                <span className="block text-sky-400 mt-1 font-bold drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                  {highlight}
                </span>
              )}
            </h1>

            {description && (
              <p className="text-xs sm:text-sm text-slate-100 leading-relaxed font-medium drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
                {description}
              </p>
            )}

            {/* Compact Industry Tags */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/95 border border-white/90 text-slate-800 text-xs font-semibold shadow-md backdrop-blur-md">
                <Building2 className="w-3.5 h-3.5 text-[#1e3a8a]" />
                <span>10 Key Industry Sectors</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/95 border border-white/90 text-slate-800 text-xs font-semibold shadow-md backdrop-blur-md">
                <ShieldCheck className="w-3.5 h-3.5 text-[#1e3a8a]" />
                <span>End-to-End Enterprise Compliance</span>
              </div>
            </div>
          </div>
        </Container>

        {/* Distinct Border Style */}
        <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none">
          <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#2563eb]/70 to-transparent" />
        </div>
      </div>
    );
  }

  // ----------------------------------------------------
  // VARIANT 5: CONTACT PAGE HEADER (Chambers Reception Theme)
  // ----------------------------------------------------
  if (variant === "contact") {
    return (
      <div className="relative pt-28 pb-14 sm:pt-36 sm:pb-16 overflow-hidden bg-slate-900 border-b border-slate-200">
        {/* Background Photo: Pure & 100% Clearly Visible - ZERO SHADE */}
        <div className="absolute inset-0 z-0">
          <img
            src="/gallery/reception.jpg"
            alt="Corporate Headquarters Reception"
            className="w-full h-full object-cover object-center"
          />
        </div>

        <Container className="relative z-10">
          <div className="max-w-2xl space-y-3.5">
            {renderBreadcrumbs()}

            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/95 border border-white/90 text-[#1e3a8a] text-xs font-bold tracking-wider uppercase shadow-md backdrop-blur-md">
                <MapPin className="w-3.5 h-3.5 text-[#1e3a8a]" />
                <span>{badge || "Headquarters & Pan-India Branches"}</span>
              </div>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-[38px] font-extrabold text-white tracking-tight leading-snug drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
              {title}{" "}
              {highlight && (
                <span className="block text-sky-400 mt-1 font-bold drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                  {highlight}
                </span>
              )}
            </h1>

            {description && (
              <p className="text-xs sm:text-sm text-slate-100 leading-relaxed font-medium drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
                {description}
              </p>
            )}

            {/* Compact Consultation Tags */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/95 border border-white/90 text-slate-800 text-xs font-semibold shadow-md backdrop-blur-md">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Direct Partner Advisory Access</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/95 border border-white/90 text-slate-800 text-xs font-semibold shadow-md backdrop-blur-md">
                <Clock className="w-3.5 h-3.5 text-[#1e3a8a]" />
                <span>Mon – Sat: 10:00 AM – 7:30 PM</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/95 border border-white/90 text-slate-800 text-xs font-semibold shadow-md backdrop-blur-md">
                <ShieldCheck className="w-3.5 h-3.5 text-[#1e3a8a]" />
                <span>Strict Legal Confidentiality</span>
              </div>
            </div>
          </div>
        </Container>

        {/* Distinct Border Style */}
        <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none">
          <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#2563eb]/70 to-transparent" />
        </div>
      </div>
    );
  }

  // ----------------------------------------------------
  // DEFAULT FALLBACK HEADER
  // ----------------------------------------------------
  return (
    <div className="relative pt-28 pb-14 sm:pt-36 sm:pb-16 overflow-hidden bg-slate-900 border-b border-slate-200">
      {/* Background Photo: Pure & 100% Clearly Visible - ZERO SHADE */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-1.jpg"
          alt="Corporate Office"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <Container className="relative z-10">
        <div className="max-w-2xl space-y-3.5">
          {renderBreadcrumbs()}

          {badge && (
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/95 border border-white/90 text-[#1e3a8a] text-xs font-bold tracking-wider uppercase shadow-md backdrop-blur-md">
                {badge}
              </div>
            </div>
          )}

          <h1 className="text-2xl sm:text-3xl lg:text-[38px] font-extrabold text-white tracking-tight leading-snug drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
            {title}{" "}
            {highlight && <span className="block text-sky-400 mt-1 font-bold drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">{highlight}</span>}
          </h1>

          {description && (
            <p className="text-xs sm:text-sm text-slate-100 leading-relaxed font-medium drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
              {description}
            </p>
          )}

          {rightContent && <div className="mt-4">{rightContent}</div>}
        </div>
      </Container>

      {/* Default Border */}
      <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none">
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#2563eb]/70 to-transparent" />
      </div>
    </div>
  );
};

export default PageHeader;
