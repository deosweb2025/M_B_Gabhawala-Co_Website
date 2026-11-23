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
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
        {/* Ambient atmospheric glow */}
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#355094]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-2/3 -right-48 w-96 h-96 bg-[#6797D6]/5 rounded-full blur-3xl pointer-events-none" />

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
                      ? "bg-gradient-to-r from-[#1e3a8a] to-[#355094] text-white shadow-md shadow-[#355094]/25"
                      : "bg-white text-slate-700 hover:text-slate-900 hover:bg-slate-50 border border-slate-300 shadow-sm"
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
                  className="relative rounded-3xl p-8 sm:p-12 bg-white border border-slate-200 shadow-md scroll-mt-28 group transition-all duration-300 hover:border-[#6797D6]"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Header & Description (7 cols) */}
                    <div className="lg:col-span-7 space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#355094] shadow-sm shrink-0">
                          {iconMap[service.icon]}
                        </div>
                        <div>
                          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#355094]">
                            Practice Division 0{idx + 1}
                          </span>
                          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
                            {service.title}
                          </h2>
                        </div>
                      </div>

                      <p className="text-base text-slate-600 leading-relaxed font-normal">
                        {service.fullDesc}
                      </p>

                      <div className="pt-2">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3.5 font-mono">
                          Core Focus Areas & Scope:
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {service.keyAreas.map((area, i) => (
                            <div
                              key={i}
                              className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-200 font-medium hover:border-[#6797D6] transition-colors"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-[#355094] shrink-0 mt-1.5" />
                              <span>{area}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Deliverables Card (5 cols) */}
                    <div className="lg:col-span-5 bg-gradient-to-br from-[#17274c] via-[#1e3a8a] to-[#355094] text-white rounded-2xl p-7 shadow-xl space-y-5 border border-[#355094] relative overflow-hidden">
                      <div className="flex items-center gap-2 text-[#6797D6] text-xs font-bold uppercase tracking-wider border-b border-white/20 pb-3 font-mono">
                        <FileText className="w-4 h-4" />
                        <span>Key Client Deliverables</span>
                      </div>

                      <ul className="space-y-3.5">
                        {service.deliverables.map((del, dIdx) => (
                          <li
                            key={dIdx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-100 leading-relaxed"
                          >
                            <ShieldCheck className="w-4 h-4 text-[#6797D6] shrink-0 mt-0.5" />
                            <span>{del}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="pt-4 border-t border-white/20">
                        <Link
                          to="/contact"
                          className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-[#1e3a8a] font-bold text-xs tracking-wider uppercase transition-all duration-300 shadow-md hover:-translate-y-0.5 cursor-pointer"
                        >
                          <span>Inquire for {service.title.split(" ")[0]}</span>
                          <ArrowRight className="w-3.5 h-3.5 relative z-10" />
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
                className="px-6 py-2.5 rounded-xl bg-white text-slate-700 border border-slate-300 hover:bg-slate-50 hover:text-slate-900 transition-all shadow-sm cursor-pointer font-semibold text-xs tracking-wide"
              >
                ← View All Practice Areas
              </button>
            </div>
          )}
        </Container>
      </section>

      {/* Strategic Engagement Methodology */}
      <section className="py-20 sm:py-24 bg-white border-b border-slate-200 relative overflow-hidden">
        <Container>
          <SectionHeading
            eyebrow="Our Execution Methodology"
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
                Examining contracts, invoices, and accounting entries to map supply chains, HSN classifications, and evaluate ITC claims.
              </p>
            </div>

            <div className="relative rounded-2xl p-6 bg-slate-50 border border-slate-200 shadow-sm hover:border-[#6797D6] transition-all duration-300 group hover:-translate-y-1">
              <span className="text-3xl font-extrabold text-[#1e3a8a] block mb-3 font-mono">
                02
              </span>
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#355094] transition-colors">
                Jurisprudential Analysis
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Benchmarking client tax positions against landmark High Court, Supreme Court, and Advance Ruling precedents.
              </p>
            </div>

            <div className="relative rounded-2xl p-6 bg-slate-50 border border-slate-200 shadow-sm hover:border-[#6797D6] transition-all duration-300 group hover:-translate-y-1">
              <span className="text-3xl font-extrabold text-[#1e3a8a] block mb-3 font-mono">
                03
              </span>
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#355094] transition-colors">
                Contract Harmonization
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Redrafting commercial clauses, indemnities, and ERP tax engines to preemptively eliminate exposure before invoices are issued.
              </p>
            </div>

            <div className="relative rounded-2xl p-6 bg-slate-50 border border-slate-200 shadow-sm hover:border-[#6797D6] transition-all duration-300 group hover:-translate-y-1">
              <span className="text-3xl font-extrabold text-[#1e3a8a] block mb-3 font-mono">
                04
              </span>
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#355094] transition-colors">
                Appellate Defense
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Formulating unassailable legal arguments, replying to pre-SCNs, and representing clients before First Appellate Authorities and GSTAT.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-20 sm:py-24 bg-slate-50 relative overflow-hidden">
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
                    className="border border-slate-200 rounded-2xl bg-white shadow-sm overflow-hidden transition-all duration-300 hover:border-[#6797D6]"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors focus:outline-none cursor-pointer"
                    >
                      <span className="text-base font-bold text-slate-900">
                        {faq.question}
                      </span>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-[#355094] shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                      )}
                    </button>

                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-6 pt-2 text-sm text-slate-600 leading-relaxed border-t border-slate-100 font-normal">
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
