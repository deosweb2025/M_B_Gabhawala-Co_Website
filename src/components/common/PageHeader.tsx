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
  // Shared Breadcrumbs Component
  const renderBreadcrumbs = () => (
    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-400 mb-3.5">
      {breadcrumbs.map((crumb, idx) => (
        <React.Fragment key={idx}>
          {crumb.path ? (
            <Link to={crumb.path} className="hover:text-sky-300 transition-colors flex items-center gap-1 font-medium">
              {crumb.label}
            </Link>
          ) : (
            <span className="text-sky-400 font-semibold">{crumb.label}</span>
          )}
          {idx < breadcrumbs.length - 1 && (
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
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
      <div className="relative pt-28 pb-14 sm:pt-36 sm:pb-16 overflow-hidden bg-slate-950">
        {/* Background Photo: Clearly visible with rich contrast */}
        <div className="absolute inset-0 z-0">
          <img
            src="/gallery/tax-library.jpg"
            alt="Tax Law Research Library"
            className="w-full h-full object-cover object-center filter brightness-[0.72] contrast-[1.1] saturate-[1.15]"
          />
          {/* Directional Vignette: Left-side dark gradient for clean text readability, right-side open to clearly view the photo */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/92 via-slate-950/60 to-slate-950/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
        </div>

        {/* Heritage Grid Texture */}
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none z-[1]"
          style={{
            backgroundImage: `linear-gradient(to right, #3b82f6 1px, transparent 1px), linear-gradient(to bottom, #3b82f6 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />

        {/* Ambient Sapphire Glow */}
        <div className="absolute top-1/4 right-1/4 w-[450px] h-[250px] bg-gradient-to-br from-blue-600/20 via-indigo-500/10 to-transparent blur-[100px] pointer-events-none rounded-full z-[1]" />

        <Container className="relative z-10">
          <div className="max-w-2xl space-y-3.5">
            {renderBreadcrumbs()}

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-400/30 text-sky-300 text-xs font-semibold tracking-wider uppercase backdrop-blur-md shadow-sm">
              <Clock className="w-3.5 h-3.5 text-blue-400" />
              <span>{badge || "Firm Legacy & Credentials • Established ~1975"}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-white tracking-tight leading-snug">
              {title}{" "}
              {highlight && (
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-blue-400 to-blue-500 mt-1">
                  {highlight}
                </span>
              )}
            </h1>

            {description && (
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                {description}
              </p>
            )}

            {/* Compact Heritage Tags */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/60 border border-white/15 text-slate-200 text-xs font-medium backdrop-blur-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                <span>50+ Years Practice Legacy</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/60 border border-white/15 text-slate-200 text-xs font-medium backdrop-blur-sm">
                <Scale className="w-3.5 h-3.5 text-blue-400" />
                <span>GSTAT & High Court Counsel</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/60 border border-white/15 text-slate-200 text-xs font-medium backdrop-blur-sm">
                <Building2 className="w-3.5 h-3.5 text-blue-400" />
                <span>Kolkata HQ & Branches</span>
              </div>
            </div>
          </div>
        </Container>

        {/* Distinct Border Style: Glowing Sapphire Horizon Line */}
        <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none">
          <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-blue-400/80 to-transparent shadow-[0_0_15px_rgba(59,130,246,0.6)]" />
        </div>
      </div>
    );
  }

  // ----------------------------------------------------
  // VARIANT 2: SERVICES PAGE HEADER (Consulting Suite Theme)
  // ----------------------------------------------------
  if (variant === "services") {
    return (
      <div className="relative pt-28 pb-14 sm:pt-36 sm:pb-16 overflow-hidden bg-slate-950">
        {/* Background Photo: Clearly visible executive consulting suite */}
        <div className="absolute inset-0 z-0">
          <img
            src="/gallery/corporate-consulting-suite.jpg"
            alt="Corporate Tax Consulting Suite"
            className="w-full h-full object-cover object-center filter brightness-[0.72] contrast-[1.1] saturate-[1.15]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/92 via-slate-950/60 to-slate-950/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
        </div>

        {/* Subtle Matrix Texture */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none z-[1]"
          style={{
            backgroundImage: `radial-gradient(#38bdf8 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />

        {/* Ambient Cyan/Sky Light Refraction */}
        <div className="absolute top-1/4 right-1/4 w-[450px] h-[250px] bg-gradient-to-br from-sky-500/20 via-blue-600/10 to-transparent blur-[100px] pointer-events-none rounded-full z-[1]" />

        <Container className="relative z-10">
          <div className="max-w-2xl space-y-3.5">
            {renderBreadcrumbs()}

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-400/30 text-sky-300 text-xs font-semibold tracking-wider uppercase backdrop-blur-md">
              <Compass className="w-3.5 h-3.5 text-blue-400" />
              <span>{badge || "Practice Areas & Legal Counsel"}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-white tracking-tight leading-snug">
              {title}{" "}
              {highlight && (
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-blue-400 to-blue-500 mt-1">
                  {highlight}
                </span>
              )}
            </h1>

            {description && (
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                {description}
              </p>
            )}

            {/* Compact Service Tags */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/60 border border-white/15 text-slate-200 text-xs font-medium backdrop-blur-sm">
                <Scale className="w-3.5 h-3.5 text-blue-400" />
                <span>GSTAT Tribunal Defense</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/60 border border-white/15 text-slate-200 text-xs font-medium backdrop-blur-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                <span>Audits & SCN Defense</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/60 border border-white/15 text-slate-200 text-xs font-medium backdrop-blur-sm">
                <Briefcase className="w-3.5 h-3.5 text-blue-400" />
                <span>Corporate Retainers</span>
              </div>
            </div>
          </div>
        </Container>

        {/* Distinct Border Style: Double Specular Cyan Line */}
        <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none">
          <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-sky-400/90 to-transparent shadow-[0_0_18px_rgba(56,189,248,0.7)]" />
        </div>
      </div>
    );
  }

  // ----------------------------------------------------
  // VARIANT 3: PUBLICATIONS PAGE HEADER (Seminar Hall Theme)
  // ----------------------------------------------------
  if (variant === "publications") {
    return (
      <div className="relative pt-28 pb-14 sm:pt-36 sm:pb-16 overflow-hidden bg-slate-950">
        {/* Background Photo: Clearly visible seminar and keynote hall */}
        <div className="absolute inset-0 z-0">
          <img
            src="/gallery/seminar.jpg"
            alt="Tax Keynote and Annual Seminar Hall"
            className="w-full h-full object-cover object-center filter brightness-[0.72] contrast-[1.1] saturate-[1.15]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/92 via-slate-950/60 to-slate-950/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
        </div>

        {/* Ambient Indigo Bloom */}
        <div className="absolute top-1/4 right-1/4 w-[450px] h-[250px] bg-gradient-to-br from-indigo-500/20 via-blue-600/10 to-transparent blur-[100px] pointer-events-none rounded-full z-[1]" />

        <Container className="relative z-10">
          <div className="max-w-2xl space-y-3.5">
            {renderBreadcrumbs()}

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-400/30 text-sky-300 text-xs font-semibold tracking-wider uppercase backdrop-blur-md">
              <BookOpen className="w-3.5 h-3.5 text-blue-400" />
              <span>{badge || "Thought Leadership & Statutory Repository"}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-white tracking-tight leading-snug">
              {title}{" "}
              {highlight && (
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-blue-400 to-blue-500 mt-1">
                  {highlight}
                </span>
              )}
            </h1>

            {description && (
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                {description}
              </p>
            )}

            {/* Compact Publications Tags */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/60 border border-white/15 text-slate-200 text-xs font-medium backdrop-blur-sm">
                <FileText className="w-3.5 h-3.5 text-blue-400" />
                <span>GCo Connect Bulletins</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/60 border border-white/15 text-slate-200 text-xs font-medium backdrop-blur-sm">
                <Zap className="w-3.5 h-3.5 text-blue-400" />
                <span>GST Council NewsFlashes</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/60 border border-white/15 text-slate-200 text-xs font-medium backdrop-blur-sm">
                <Scale className="w-3.5 h-3.5 text-blue-400" />
                <span>Judicial Case Law Precedents</span>
              </div>
            </div>
          </div>
        </Container>

        {/* Distinct Border Style: Burnished Indigo-Sapphire Seam */}
        <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none">
          <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-indigo-400/80 to-transparent shadow-[0_0_15px_rgba(99,102,241,0.5)]" />
        </div>
      </div>
    );
  }

  // ----------------------------------------------------
  // VARIANT 4: GALLERY PAGE HEADER (Skyline Theme)
  // ----------------------------------------------------
  if (variant === "gallery") {
    return (
      <div className="relative pt-28 pb-14 sm:pt-36 sm:pb-16 overflow-hidden bg-slate-950">
        {/* Background Photo: Clearly visible modern commercial skyline */}
        <div className="absolute inset-0 z-0">
          <img
            src="/gallery/commercial-skyline.jpg"
            alt="Corporate Skyline & Commercial Centers"
            className="w-full h-full object-cover object-center filter brightness-[0.72] contrast-[1.1] saturate-[1.15]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/92 via-slate-950/60 to-slate-950/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
        </div>

        {/* Ambient Top Light Beam */}
        <div className="absolute top-1/4 right-1/4 w-[450px] h-[250px] bg-gradient-to-br from-blue-500/20 via-sky-400/10 to-transparent blur-[100px] pointer-events-none rounded-full z-[1]" />

        <Container className="relative z-10">
          <div className="max-w-2xl space-y-3.5">
            {renderBreadcrumbs()}

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-400/30 text-sky-300 text-xs font-semibold tracking-wider uppercase backdrop-blur-md shadow-sm">
              <Layers className="w-3.5 h-3.5 text-blue-400" />
              <span>{badge || "Industry Practice Showcase"}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-white tracking-tight leading-snug">
              {title}{" "}
              {highlight && (
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-blue-400 to-blue-500 mt-1">
                  {highlight}
                </span>
              )}
            </h1>

            {description && (
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                {description}
              </p>
            )}

            {/* Compact Industry Tags */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/60 border border-white/15 text-slate-200 text-xs font-medium backdrop-blur-sm">
                <Building2 className="w-3.5 h-3.5 text-blue-400" />
                <span>10 Key Industry Sectors</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/60 border border-white/15 text-slate-200 text-xs font-medium backdrop-blur-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                <span>End-to-End Enterprise Compliance</span>
              </div>
            </div>
          </div>
        </Container>

        {/* Distinct Border Style: High-Intensity Electric Cyan Horizon Border */}
        <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none">
          <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-sky-400 to-transparent shadow-[0_0_20px_rgba(56,189,248,0.8)]" />
        </div>
      </div>
    );
  }

  // ----------------------------------------------------
  // VARIANT 5: CONTACT PAGE HEADER (Chambers Reception Theme)
  // ----------------------------------------------------
  if (variant === "contact") {
    return (
      <div className="relative pt-28 pb-14 sm:pt-36 sm:pb-16 overflow-hidden bg-slate-950">
        {/* Background Photo: Clearly visible corporate reception chambers */}
        <div className="absolute inset-0 z-0">
          <img
            src="/gallery/reception.jpg"
            alt="Corporate Headquarters Reception"
            className="w-full h-full object-cover object-center filter brightness-[0.72] contrast-[1.1] saturate-[1.15]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/92 via-slate-950/60 to-slate-950/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
        </div>

        {/* Ambient Emerald/Blue Beacon Glow */}
        <div className="absolute top-1/4 right-1/4 w-[450px] h-[250px] bg-gradient-to-br from-blue-500/20 via-emerald-500/10 to-transparent blur-[100px] pointer-events-none rounded-full z-[1]" />

        <Container className="relative z-10">
          <div className="max-w-2xl space-y-3.5">
            {renderBreadcrumbs()}

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-400/30 text-sky-300 text-xs font-semibold tracking-wider uppercase backdrop-blur-md">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              <span>{badge || "Headquarters & Pan-India Branches"}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-white tracking-tight leading-snug">
              {title}{" "}
              {highlight && (
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-blue-400 to-blue-500 mt-1">
                  {highlight}
                </span>
              )}
            </h1>

            {description && (
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                {description}
              </p>
            )}

            {/* Compact Consultation Tags */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/60 border border-white/15 text-slate-200 text-xs font-medium backdrop-blur-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Direct Partner Advisory Access</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/60 border border-white/15 text-slate-200 text-xs font-medium backdrop-blur-sm">
                <Clock className="w-3.5 h-3.5 text-blue-400" />
                <span>Mon – Sat: 10:00 AM – 7:30 PM</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/60 border border-white/15 text-slate-200 text-xs font-medium backdrop-blur-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                <span>Strict Legal Confidentiality</span>
              </div>
            </div>
          </div>
        </Container>

        {/* Distinct Border Style: Dual Emerald-Sapphire Gradient Seam */}
        <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none">
          <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-emerald-400/50 via-blue-400/80 to-transparent shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
        </div>
      </div>
    );
  }

  // ----------------------------------------------------
  // DEFAULT FALLBACK HEADER
  // ----------------------------------------------------
  return (
    <div className="relative pt-28 pb-14 sm:pt-36 sm:pb-16 overflow-hidden bg-slate-950">
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-1.jpg"
          alt="Corporate Office"
          className="w-full h-full object-cover object-center filter brightness-[0.72] contrast-[1.1] saturate-[1.15]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/92 via-slate-950/60 to-slate-950/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-2xl space-y-3.5">
          {renderBreadcrumbs()}

          {badge && (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-400/30 text-sky-300 text-xs font-semibold tracking-wider uppercase">
              {badge}
            </div>
          )}

          <h1 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-white tracking-tight leading-snug">
            {title}{" "}
            {highlight && <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-blue-500">{highlight}</span>}
          </h1>

          {description && (
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {description}
            </p>
          )}

          {rightContent && <div className="mt-4">{rightContent}</div>}
        </div>
      </Container>

      {/* Default Glowing Border */}
      <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none">
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-blue-400/70 to-transparent shadow-[0_0_12px_rgba(59,130,246,0.5)]" />
      </div>
    </div>
  );
};

export default PageHeader;
