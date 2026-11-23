import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { siteData } from "../data/siteData";
import { PageHeader } from "../components/common/PageHeader";
import { Container } from "../components/common/Container";
import { SectionHeading } from "../components/common/SectionHeading";
import {
  Compass,
  Scale,
  CheckCircle,
  FileCheck,
  Cpu,
  Briefcase,
  ShieldCheck,
  FileText,
  ArrowRight,
  MessageCircle,
  CheckCircle2,
  Clock,
} from "lucide-react";

export const ServiceDetail: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();

  const service = siteData.services.find((s) => s.id === serviceId);

  // If service ID is not found, redirect back to /services hub
  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const serviceIndex = siteData.services.findIndex((s) => s.id === service.id);

  const iconMap: Record<string, React.ReactNode> = {
    Compass: <Compass className="w-9 h-9 text-[#1e3a8a]" />,
    Scale: <Scale className="w-9 h-9 text-[#1e3a8a]" />,
    CheckCircle: <CheckCircle className="w-9 h-9 text-[#1e3a8a]" />,
    FileCheck: <FileCheck className="w-9 h-9 text-[#1e3a8a]" />,
    Cpu: <Cpu className="w-9 h-9 text-[#1e3a8a]" />,
    Briefcase: <Briefcase className="w-9 h-9 text-[#1e3a8a]" />,
  };

  // Specific contextual metrics per division
  const divisionStats: Record<string, { label: string; val: string }[]> = {
    advisory: [
      { label: "Legal Certainty", val: "100%" },
      { label: "Jurisprudence Depth", val: "50+ Yrs" },
      { label: "Statutory Codes", val: "HSN / SAC" },
    ],
    litigation: [
      { label: "Appellate Forums", val: "GSTAT & HC" },
      { label: "Precedent Research", val: "Supreme Court" },
      { label: "Representation Success", val: "98%+" },
    ],
    compliance: [
      { label: "Reconciliation Accuracy", val: "100.0%" },
      { label: "Filing Punctuality", val: "Zero-Penalty" },
      { label: "Refund Tracking", val: "Direct Portal" },
    ],
    "due-diligence": [
      { label: "Leakage Audit", val: "360° Scope" },
      { label: "ITC Recovery", val: "Optimized" },
      { label: "Audit Readiness", val: "Comprehensive" },
    ],
    "erp-integration": [
      { label: "ERP Platforms", val: "SAP / Oracle" },
      { label: "Schema Precision", val: "Zero-Mismatch" },
      { label: "API Automation", val: "E-Way & E-Inv" },
    ],
    retainership: [
      { label: "Partner Availability", val: "Priority Line" },
      { label: "Turnaround Time", val: "Within 24h" },
      { label: "Monthly Briefings", val: "Executive" },
    ],
  };

  const currentStats = divisionStats[service.id] || [
    { label: "Practice Legacy", val: "Since 1975" },
    { label: "Offices in India", val: "6 Branches" },
    { label: "Client Retainers", val: "5,000+" },
  ];

  // Specific contextual badges per division for PageHeader
  const divisionHeaderTags: Record<string, { icon: React.ReactNode; label: string }[]> = {
    advisory: [
      { icon: <Compass className="w-3.5 h-3.5 text-[#1e3a8a]" />, label: "Tax Classification & HSN" },
      { icon: <ShieldCheck className="w-3.5 h-3.5 text-[#1e3a8a]" />, label: "Commercial Contracts" },
      { icon: <FileCheck className="w-3.5 h-3.5 text-[#1e3a8a]" />, label: "Written Legal Opinions" },
    ],
    litigation: [
      { icon: <Scale className="w-3.5 h-3.5 text-[#1e3a8a]" />, label: "GSTAT Tribunal Defense" },
      { icon: <ShieldCheck className="w-3.5 h-3.5 text-[#1e3a8a]" />, label: "Audits & SCN Defense" },
      { icon: <FileText className="w-3.5 h-3.5 text-[#1e3a8a]" />, label: "High Court Appeals" },
    ],
    compliance: [
      { icon: <CheckCircle className="w-3.5 h-3.5 text-[#1e3a8a]" />, label: "GSTR-1 & 3B Punctuality" },
      { icon: <FileCheck className="w-3.5 h-3.5 text-[#1e3a8a]" />, label: "Annual 9 / 9C Audit" },
      { icon: <ShieldCheck className="w-3.5 h-3.5 text-[#1e3a8a]" />, label: "Zero Penalty Standard" },
    ],
    "due-diligence": [
      { icon: <FileCheck className="w-3.5 h-3.5 text-[#1e3a8a]" />, label: "Diagnostic Health Review" },
      { icon: <ShieldCheck className="w-3.5 h-3.5 text-[#1e3a8a]" />, label: "ITC Leakage Recovery" },
      { icon: <Briefcase className="w-3.5 h-3.5 text-[#1e3a8a]" />, label: "M&A Due Diligence" },
    ],
    "erp-integration": [
      { icon: <Cpu className="w-3.5 h-3.5 text-[#1e3a8a]" />, label: "SAP S/4HANA & Oracle" },
      { icon: <ShieldCheck className="w-3.5 h-3.5 text-[#1e3a8a]" />, label: "Schema Architecture" },
      { icon: <FileText className="w-3.5 h-3.5 text-[#1e3a8a]" />, label: "E-Invoicing API Flow" },
    ],
    retainership: [
      { icon: <Briefcase className="w-3.5 h-3.5 text-[#1e3a8a]" />, label: "Partner Priority Desk" },
      { icon: <Clock className="w-3.5 h-3.5 text-[#1e3a8a]" />, label: "24-Hour Notice Defense" },
      { icon: <ShieldCheck className="w-3.5 h-3.5 text-[#1e3a8a]" />, label: "Boardroom Retainers" },
    ],
  };

  // Other practice areas to explore
  const otherServices = siteData.services.filter((s) => s.id !== service.id);

  return (
    <>
      <PageHeader
        variant="services"
        badge={`Practice Division 0${serviceIndex + 1} • Specialization`}
        title={service.title}
        highlight="Practice Specialization"
        description={service.shortDesc}
        bgImage={service.image}
        bgAlt={service.title}
        tags={divisionHeaderTags[service.id]}
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Services", path: "/services" },
          { label: service.title },
        ]}
      />

      {/* Practice Division Hero & Core Authority */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200 relative overflow-hidden">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#1e3a8a]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-2/3 -right-48 w-96 h-96 bg-[#38bdf8]/5 rounded-full blur-3xl pointer-events-none" />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left 7 cols: In-Depth Practice Authority */}
            <div className="lg:col-span-7 space-y-7">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white via-blue-50 to-blue-100/70 border border-blue-200 flex items-center justify-center text-[#1e3a8a] shadow-[0_10px_20px_-3px_rgba(30,58,138,0.18)] shrink-0">
                  {iconMap[service.icon]}
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-[#1e3a8a] text-[11px] font-bold tracking-wider uppercase font-mono mb-1">
                    <span>Practice Division 0{serviceIndex + 1}</span>
                    <span>•</span>
                    <span>Senior Partner-Led</span>
                  </div>
                  <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                    {service.title}
                  </h1>
                </div>
              </div>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                {service.fullDesc}
              </p>

              {/* Division Strategic Impact Cards */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                {currentStats.map((st, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 text-center"
                  >
                    <span className="block text-xl sm:text-2xl font-black text-[#1e3a8a] font-mono">
                      {st.val}
                    </span>
                    <span className="block text-[11px] font-medium text-slate-500 uppercase tracking-wider mt-1">
                      {st.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Key Highlights Quote */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-50/70 via-slate-50 to-transparent border-l-4 border-[#1e3a8a] text-slate-700 text-sm leading-relaxed">
                <span className="font-semibold text-slate-900 block mb-1">
                  Institutional Standard ~Since 1975:
                </span>
                Every counsel provided under this division is grounded in constitutional jurisprudence, appellate rulings, and rigorous statutory interpretation to protect client capital and executive peace of mind.
              </div>
            </div>

            {/* Right 5 cols: Key Client Deliverables Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#17274c] via-[#1e3a8a] to-[#2563eb] text-white rounded-3xl p-8 sm:p-9 shadow-2xl border border-blue-300/30 relative overflow-hidden">
              {/* Animated Top Specular Beam */}
              <div className="absolute top-0 left-0 right-0 h-[3.5px] overflow-hidden pointer-events-none z-30">
                <div className="animate-card-beam" />
              </div>

              <div className="flex items-center gap-2 text-[#93c5fd] text-xs font-bold uppercase tracking-wider border-b border-white/20 pb-3.5 font-mono">
                <FileText className="w-4 h-4" />
                <span>Statutory Client Deliverables</span>
              </div>

              <p className="text-xs text-blue-100/90 leading-relaxed">
                Tangible work products, written legal documents, and official dossiers delivered to client leadership:
              </p>

              <ul className="space-y-4 my-6">
                {service.deliverables.map((del, dIdx) => (
                  <li
                    key={dIdx}
                    className="flex items-start gap-3 text-xs sm:text-sm text-slate-100 leading-relaxed bg-white/10 p-3 rounded-xl border border-white/15 backdrop-blur-sm"
                  >
                    <div className="w-5 h-5 rounded-full bg-blue-500/30 border border-blue-300/40 flex items-center justify-center shrink-0 mt-0.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="font-medium">{del}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2 space-y-3">
                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-[#1e3a8a] font-bold text-xs tracking-wider uppercase transition-all duration-300 shadow-lg hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>Retain Counsel for {service.title.split(" ")[0]}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <div className="flex items-center justify-between text-[11px] text-blue-200/80 px-1 pt-1 font-mono">
                  <span>Kolkata HQ & Pan-India</span>
                  <span>Confidential Advisory</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Core Focus Areas & Technical Scope */}
      <section className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
        <Container>
          <SectionHeading
            eyebrow="Technical Scope"
            title="Core Focus Areas &"
            highlight="Statutory Coverage"
            description={`Comprehensive legal frameworks, departmental representation, and statutory provisions covered under our ${service.title} division.`}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.keyAreas.map((area, i) => (
              <div
                key={i}
                className="relative rounded-2xl p-6 bg-white border border-slate-200/90 border-t-[3px] border-t-[#1e3a8a] shadow-sm hover:shadow-md hover:border-[#1e3a8a] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-[#1e3a8a] bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200/70">
                      Scope 0{i + 1}
                    </span>
                    <CheckCircle2 className="w-4 h-4 text-[#1e3a8a]" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#1e3a8a] transition-colors leading-snug">
                    {area}
                  </h3>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span>Statutory Coverage</span>
                  <span className="text-[#1e3a8a] font-bold">Standardized</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Rigorous 4-Stage Practice Blueprint */}
      <section className="py-20 sm:py-24 bg-white border-b border-slate-200 relative overflow-hidden">
        <Container>
          <SectionHeading
            eyebrow="Our Execution Protocol"
            title="A Rigorous 4-Stage"
            highlight="Advisory Blueprint"
            description="How M B Gabhawala & Co. structures client engagements to guarantee statutory robustness and operational fluidity."
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="relative rounded-2xl p-6 bg-slate-50 border border-slate-200 shadow-sm hover:border-[#6797D6] transition-all duration-300 group hover:-translate-y-1">
              <span className="text-3xl font-extrabold text-[#1e3a8a] block mb-3 font-mono">
                01
              </span>
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#355094] transition-colors">
                Diagnostic Review
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Examining contracts, invoices, and accounting entries to map supply chains, HSN classifications, and evaluate legal exposure.
              </p>
            </div>

            <div className="relative rounded-2xl p-6 bg-slate-50 border border-slate-200 shadow-sm hover:border-[#6797D6] transition-all duration-300 group hover:-translate-y-1">
              <span className="text-3xl font-extrabold text-[#1e3a8a] block mb-3 font-mono">
                02
              </span>
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#355094] transition-colors">
                Jurisprudence Research
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Cross-referencing statutory wording with binding Supreme Court, High Court, and Tribunal precedents to anchor legal veracity.
              </p>
            </div>

            <div className="relative rounded-2xl p-6 bg-slate-50 border border-slate-200 shadow-sm hover:border-[#6797D6] transition-all duration-300 group hover:-translate-y-1">
              <span className="text-3xl font-extrabold text-[#1e3a8a] block mb-3 font-mono">
                03
              </span>
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#355094] transition-colors">
                Opinion & Strategy
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Drafting unvarnished legal opinions, contract clauses, or appellate paper books optimized for departmental scrutiny.
              </p>
            </div>

            <div className="relative rounded-2xl p-6 bg-slate-50 border border-slate-200 shadow-sm hover:border-[#6797D6] transition-all duration-300 group hover:-translate-y-1">
              <span className="text-3xl font-extrabold text-[#1e3a8a] block mb-3 font-mono">
                04
              </span>
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#355094] transition-colors">
                Defense & Advocacy
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Personal appearances before appellate authorities, coordinating portal reconciliations, and continuous transactional counsel.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Direct Division Consultation CTA */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
        <Container>
          <div className="bg-gradient-to-r from-[#172554] via-[#1e3a8a] to-[#2563eb] rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
            <div className="relative z-10 max-w-3xl">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-sky-200 text-xs font-semibold uppercase tracking-wider mb-4">
                <Clock className="w-3.5 h-3.5" />
                <span>Immediate Partner Counsel Available</span>
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
                Consult Our Partners on {service.title}
              </h2>
              <p className="mt-3 text-sm sm:text-base text-blue-100 max-w-2xl leading-relaxed">
                Whether you face an urgent departmental notice, seek strategic tax classification before executing a commercial agreement, or require systemic audit verification, our senior partners are ready to counsel.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="px-6 py-3.5 rounded-xl bg-white text-[#1e3a8a] font-bold text-xs uppercase tracking-wider hover:bg-blue-50 transition-all shadow-md hover:-translate-y-0.5 inline-flex items-center gap-2"
                >
                  <span>Book Formal Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={siteData.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:-translate-y-0.5 inline-flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Partner Desk</span>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Explore Other Practice Divisions */}
      <section className="py-16 sm:py-20 bg-white relative overflow-hidden">
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-mono font-bold text-[#1e3a8a] uppercase tracking-wider block mb-1">
                Institutional Directory
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Explore Other Practice Divisions
              </h3>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1e3a8a] hover:text-[#2563eb] transition-colors"
            >
              <span>View All Practice Areas</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherServices.map((other, idx) => (
              <Link
                key={other.id}
                to={`/services/${other.id}`}
                className="group relative rounded-2xl p-6 bg-slate-50 border border-slate-200/90 hover:border-[#1e3a8a] hover:bg-white transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#1e3a8a] group-hover:bg-[#1e3a8a] group-hover:text-white transition-colors">
                      {iconMap[other.icon]}
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 group-hover:text-[#1e3a8a] transition-colors">
                      Division 0{idx + 1}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900 group-hover:text-[#1e3a8a] transition-colors mb-2">
                    {other.title}
                  </h4>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {other.shortDesc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs font-bold text-[#1e3a8a]">
                  <span>Open Dedicated Page</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default ServiceDetail;
