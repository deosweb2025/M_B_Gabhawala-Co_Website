import React, { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
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
  ChevronDown,
  ChevronUp,
  ArrowRight,
  ShieldCheck,
  FileText,
} from "lucide-react";

export const Services: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";
  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Sync with URL query parameter changes (e.g. from navbar dropdown clicks)
  useEffect(() => {
    const paramCategory = searchParams.get("category");
    const timer = setTimeout(() => {
      if (paramCategory) {
        setActiveCategory(paramCategory);
        // Smooth scroll to the target section
        const targetElement = document.getElementById(paramCategory);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else {
        setActiveCategory("all");
      }
    }, 0);
    return () => clearTimeout(timer);
  }, [searchParams]);

  const filterTabs = [
    { id: "all", name: "All Practice Areas" },
    { id: "advisory", name: "Advisory" },
    { id: "litigation", name: "Litigation & Appeals" },
    { id: "compliance", name: "Compliance" },
    { id: "due-diligence", name: "Due Diligence & Audit" },
    { id: "erp-integration", name: "ERP Tax Integration" },
    { id: "retainership", name: "Corporate Retainership" },
  ];

  const handleFilterClick = (tabId: string) => {
    setActiveCategory(tabId);
    if (tabId === "all") {
      setSearchParams({});
    } else {
      setSearchParams({ category: tabId });
    }
  };

  const filteredServices =
    activeCategory === "all"
      ? siteData.services
      : siteData.services.filter((s) => s.id === activeCategory);

  const iconMap: Record<string, React.ReactNode> = {
    Compass: <Compass className="w-8 h-8 text-sky-400" />,
    Scale: <Scale className="w-8 h-8 text-sky-400" />,
    CheckCircle: <CheckCircle className="w-8 h-8 text-sky-400" />,
    FileCheck: <FileCheck className="w-8 h-8 text-sky-400" />,
    Cpu: <Cpu className="w-8 h-8 text-sky-400" />,
    Briefcase: <Briefcase className="w-8 h-8 text-sky-400" />,
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <>
      <PageHeader
        variant="services"
        badge="Institutional Practice Areas"
        title="Comprehensive Indirect Tax"
        highlight="Advisory & Advocacy"
        description="End-to-end statutory counsel, contentious dispute representation before GSTAT and High Courts, and contract optimization across India."
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Services" },
        ]}
      />

      {/* Services Detailed Grid with Filter Bar */}
      <section className="py-16 sm:py-24 bg-slate-950 border-b border-slate-900/80 relative overflow-hidden">
        {/* Ambient atmospheric glow */}
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-2/3 -right-48 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

        <Container className="relative z-10">
          {/* Interactive Service Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
            {filterTabs.map((tab) => {
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleFilterClick(tab.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 text-white shadow-lg shadow-blue-600/35 border border-blue-400/50"
                      : "bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800/80 border border-white/10 backdrop-blur-md"
                  }`}
                >
                  {tab.name}
                </button>
              );
            })}
          </div>

          {/* Practice Cards List */}
          <div className="space-y-16">
            {filteredServices.map((service, idx) => {
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-b from-white/[0.08] via-slate-900/80 to-slate-950/95 border border-white/10 border-t-white/25 backdrop-blur-xl shadow-[0_20px_50px_-15px_rgba(0,0,0,0.8)] scroll-mt-28 group transition-all duration-300 hover:border-blue-500/40"
                >
                  {/* Top Specular Edge Highlight */}
                  <div className="absolute -top-px left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-sky-400/60 to-transparent pointer-events-none" />

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Header & Description (7 cols) */}
                    <div className="lg:col-span-7 space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-2xl bg-blue-500/15 border border-blue-400/30 flex items-center justify-center text-sky-400 shadow-[0_0_20px_rgba(56,189,248,0.2)] shrink-0">
                          {iconMap[service.icon]}
                        </div>
                        <div>
                          <span className="text-xs font-mono font-bold uppercase tracking-widest text-sky-400">
                            Practice Division 0{idx + 1}
                          </span>
                          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                            {service.title}
                          </h2>
                        </div>
                      </div>

                      <p className="text-base text-slate-300 leading-relaxed font-normal">
                        {service.fullDesc}
                      </p>

                      <div className="pt-2">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3.5 font-mono">
                          Core Focus Areas & Scope:
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {service.keyAreas.map((area, i) => (
                            <div
                              key={i}
                              className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200 bg-slate-950/70 p-3 rounded-xl border border-white/10 font-medium hover:border-blue-400/30 transition-colors"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0 mt-1.5 shadow-[0_0_8px_#38bdf8]" />
                              <span>{area}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Deliverables Card: Dark Luxury Console (5 cols) */}
                    <div className="lg:col-span-5 bg-gradient-to-br from-slate-900/90 via-slate-950/90 to-blue-950/60 text-white rounded-2xl p-7 border border-white/15 shadow-2xl space-y-5 relative overflow-hidden">
                      <div className="absolute -top-px left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-sky-400/50 to-transparent pointer-events-none" />

                      <div className="flex items-center gap-2 text-sky-400 text-xs font-bold uppercase tracking-wider border-b border-white/10 pb-3 font-mono">
                        <FileText className="w-4 h-4" />
                        <span>Key Client Deliverables</span>
                      </div>

                      <ul className="space-y-3.5">
                        {service.deliverables.map((del, dIdx) => (
                          <li
                            key={dIdx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200 leading-relaxed"
                          >
                            <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                            <span>{del}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="pt-4 border-t border-white/10">
                        <Link
                          to="/contact"
                          className="relative group overflow-hidden w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 hover:from-blue-500 hover:via-sky-400 hover:to-indigo-500 text-white font-bold text-xs tracking-wider uppercase transition-all duration-300 border border-blue-400/50 border-t-white/80 shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.7),0_8px_20px_-4px_rgba(37,99,235,0.5)] hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_12px_25px_-4px_rgba(37,99,235,0.65)] hover:-translate-y-0.5 cursor-pointer"
                        >
                          <div className="absolute top-0 left-0 right-0 h-[48%] bg-gradient-to-b from-white/35 via-white/15 to-transparent rounded-t-xl pointer-events-none" />
                          <span className="relative z-10 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">Inquire for {service.title.split(" ")[0]}</span>
                          <ArrowRight className="w-3.5 h-3.5 relative z-10 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Reset Filter Button if Filtered */}
          {activeCategory !== "all" && (
            <div className="mt-12 text-center">
              <button
                onClick={() => handleFilterClick("all")}
                className="px-6 py-2.5 rounded-xl bg-slate-900 text-slate-200 border border-white/15 hover:border-blue-400/50 hover:text-white transition-all shadow-md cursor-pointer font-semibold text-xs tracking-wide"
              >
                ← View All Practice Areas
              </button>
            </div>
          )}
        </Container>
      </section>

      {/* Strategic Engagement Methodology */}
      <section className="py-20 sm:py-24 bg-gradient-to-b from-slate-950 via-slate-900/60 to-slate-950 border-b border-slate-900/80 relative overflow-hidden">
        <Container>
          <SectionHeading
            eyebrow="Our Execution Methodology"
            title="A Rigorous 4-Stage"
            highlight="Advisory Blueprint"
            description="How M B Gabhawala & Co. structures client engagements to guarantee statutory robustness and operational fluidity."
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="relative rounded-2xl p-6 bg-gradient-to-b from-white/[0.08] via-slate-900/80 to-slate-950/95 border border-white/10 border-t-white/20 backdrop-blur-xl shadow-xl hover:border-blue-400/50 transition-all duration-300 group hover:-translate-y-1">
              <div className="absolute -top-px left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-sky-400/50 to-transparent pointer-events-none" />
              <span className="text-3xl font-extrabold text-sky-400 block mb-3 font-mono drop-shadow-[0_2px_8px_rgba(56,189,248,0.3)]">
                01
              </span>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                Diagnostic Review
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                Examining contracts, invoices, and accounting entries to map supply chains, HSN classifications, and evaluate ITC claims.
              </p>
            </div>

            <div className="relative rounded-2xl p-6 bg-gradient-to-b from-white/[0.08] via-slate-900/80 to-slate-950/95 border border-white/10 border-t-white/20 backdrop-blur-xl shadow-xl hover:border-blue-400/50 transition-all duration-300 group hover:-translate-y-1">
              <div className="absolute -top-px left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-sky-400/50 to-transparent pointer-events-none" />
              <span className="text-3xl font-extrabold text-sky-400 block mb-3 font-mono drop-shadow-[0_2px_8px_rgba(56,189,248,0.3)]">
                02
              </span>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                Jurisprudential Analysis
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                Benchmarking client tax positions against landmark High Court, Supreme Court, and Advance Ruling precedents.
              </p>
            </div>

            <div className="relative rounded-2xl p-6 bg-gradient-to-b from-white/[0.08] via-slate-900/80 to-slate-950/95 border border-white/10 border-t-white/20 backdrop-blur-xl shadow-xl hover:border-blue-400/50 transition-all duration-300 group hover:-translate-y-1">
              <div className="absolute -top-px left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-sky-400/50 to-transparent pointer-events-none" />
              <span className="text-3xl font-extrabold text-sky-400 block mb-3 font-mono drop-shadow-[0_2px_8px_rgba(56,189,248,0.3)]">
                03
              </span>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                Contract Harmonization
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                Redrafting commercial clauses, indemnities, and ERP tax engines to preemptively eliminate exposure before invoices are issued.
              </p>
            </div>

            <div className="relative rounded-2xl p-6 bg-gradient-to-b from-white/[0.08] via-slate-900/80 to-slate-950/95 border border-white/10 border-t-white/20 backdrop-blur-xl shadow-xl hover:border-blue-400/50 transition-all duration-300 group hover:-translate-y-1">
              <div className="absolute -top-px left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-sky-400/50 to-transparent pointer-events-none" />
              <span className="text-3xl font-extrabold text-sky-400 block mb-3 font-mono drop-shadow-[0_2px_8px_rgba(56,189,248,0.3)]">
                04
              </span>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                Appellate Defense
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                Formulating unassailable legal arguments, replying to pre-SCNs, and representing clients before First Appellate Authorities and GSTAT.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-20 sm:py-24 bg-slate-950 relative overflow-hidden">
        <Container>
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              eyebrow="Tax Advisory FAQ"
              title="Frequently Asked"
              highlight="Questions"
              description="Common inquiries regarding our engagement framework, retainership, and litigation practice."
            />

            <div className="space-y-4">
              {siteData.faqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={index}
                    className="border border-white/10 rounded-2xl bg-gradient-to-b from-white/[0.06] via-slate-900/80 to-slate-950/95 backdrop-blur-xl overflow-hidden shadow-lg transition-all duration-300 hover:border-white/20"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-white/[0.03] transition-colors focus:outline-none cursor-pointer"
                    >
                      <span className="text-base font-bold text-white">
                        {faq.question}
                      </span>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-sky-400 shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                      )}
                    </button>

                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-6 pt-2 text-sm text-slate-300 leading-relaxed border-t border-white/10 font-normal">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Services;
