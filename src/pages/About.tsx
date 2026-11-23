import React from "react";
import { siteData } from "../data/siteData";
import { PageHeader } from "../components/common/PageHeader";
import { Container } from "../components/common/Container";
import { SectionHeading } from "../components/common/SectionHeading";
import {
  Award,
  BookOpen,
  Clock,
  ShieldCheck,
  Zap,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";

export const About: React.FC = () => {
  return (
    <>
      <PageHeader
        variant="about"
        badge="Firm Legacy & Credentials"
        title="Anchored in Integrity,"
        highlight="Pioneering in Jurisprudence"
        description="Established in 1975 (~50 years of legacy), delivering boardroom indirect tax counsel, dispute representation, and statutory research across India."
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "About" },
        ]}
      />

      {/* Firm Narrative & History */}
      <section className="py-20 sm:py-24 bg-white relative overflow-hidden border-b border-slate-200">
        {/* Ambient background lighting blooms */}
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#355094]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 -right-48 w-96 h-96 bg-[#6797D6]/5 rounded-full blur-3xl pointer-events-none" />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#355094] text-xs font-bold uppercase tracking-wider shadow-sm">
                <Clock className="w-3.5 h-3.5 text-[#355094]" />
                <span>Established ~Since 1975 (50+ Years)</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-900 tracking-tight leading-tight">
                Five Decades of Institutional{" "}
                <span className="text-[#1e3a8a] block sm:inline mt-1 sm:mt-0">
                  Tax & Accounting Excellence
                </span>
              </h2>

              <p className="text-base text-slate-600 leading-relaxed font-normal">
                Founded in 1975, M B Gabhawala & Co. has grown into one of India's prominent Chartered Accountancy institutions, dedicated to providing rigorous, research-backed counsel on Indirect Taxation, corporate audits, and appellate advocacy.
              </p>

              <p className="text-base text-slate-600 leading-relaxed font-normal">
                From our strategic Kolkata office at Chinar Park (Rajarhat), the firm oversees an expansive pan-India branch footprint serving clients in Varanasi, Gurugram, Katihar, Sonebhadra, and Mumbai.
              </p>

              <div className="pt-4 grid grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm hover:border-[#6797D6] transition-all">
                  <span className="text-3xl font-extrabold text-[#1e3a8a] block mb-1 font-mono">
                    ~1975
                  </span>
                  <span className="text-xs text-slate-600 font-semibold tracking-wide uppercase">
                    Legacy Established in India
                  </span>
                </div>
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm hover:border-[#6797D6] transition-all">
                  <span className="text-3xl font-extrabold text-[#1e3a8a] block mb-1 font-mono">
                    6 Cities
                  </span>
                  <span className="text-xs text-slate-600 font-semibold tracking-wide uppercase">
                    Pan-India Branch Network
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl group">
                <img
                  src="/hero-2.jpg"
                  alt="Tax Consultation & Audit at M B Gabhawala & Co."
                  className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 backdrop-blur-xl border border-slate-200 shadow-lg">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#355094] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]" />
                    Kolkata Head Office & Consultation Suite
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700 mt-1 font-medium leading-relaxed">
                    AS/361/11-12, Loknath Park, Behind Arsalan, Chinar Park, Kolkata - 700157
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Nationwide Branch Network Section */}
      <section className="py-18 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#355094] block mb-2 font-mono">
              Pan-India Presence
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
              Our Branch Network Across India
            </h3>
            <p className="text-sm text-slate-600 mt-2.5">
              Strategically positioned across eastern, northern, and western economic corridors.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {siteData.location.branches.map((branch, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-[#6797D6] hover:bg-blue-50/30 text-center shadow-sm transition-all duration-300 group hover:-translate-y-1.5 cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 group-hover:bg-blue-100/60 transition-all">
                  <MapPin className="w-5 h-5 text-[#355094]" />
                </div>
                <h4 className="text-base font-bold text-slate-900 group-hover:text-[#355094] transition-colors">
                  {branch.city}
                </h4>
                <p className="text-xs text-slate-500 mt-0.5 font-medium">
                  {branch.state}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* The 3 Core Pillars */}
      <section className="py-20 sm:py-24 bg-white border-b border-slate-200 relative overflow-hidden">
        <Container>
          <SectionHeading
            eyebrow="Core Philosophy"
            title="The Three Indispensable"
            highlight="Pillars of Practice"
            description="Our culture and client relationships are defined by three immutable standards."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative rounded-2xl p-8 bg-slate-50 border border-slate-200 shadow-sm hover:border-[#6797D6] transition-all duration-300 group flex flex-col justify-between hover:-translate-y-1.5">
              <div>
                <div className="w-13 h-13 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center mb-6 text-[#355094] shadow-sm group-hover:scale-105 transition-transform">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-[#355094] transition-colors">
                  Integrity
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  We never compromise on statutory veracity. Our opinions reflect unvarnished legal analysis, providing clients with enduring positions that withstand departmental scrutiny and judicial examination.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-200 text-xs text-[#355094] font-mono font-bold flex items-center justify-between">
                <span>Standard 01</span>
                <span className="text-slate-500 font-normal">Ethical Rigor</span>
              </div>
            </div>

            <div className="relative rounded-2xl p-8 bg-slate-50 border border-slate-200 shadow-sm hover:border-[#6797D6] transition-all duration-300 group flex flex-col justify-between hover:-translate-y-1.5">
              <div>
                <div className="w-13 h-13 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center mb-6 text-[#355094] shadow-sm group-hover:scale-105 transition-transform">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-[#355094] transition-colors">
                  Knowledge
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  Our practice is steered by recognized legal scholars. We continuously dissect constitutional interpretations, tribunal precedents, and notifications to formulate defensive strategies.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-200 text-xs text-[#355094] font-mono font-bold flex items-center justify-between">
                <span>Standard 02</span>
                <span className="text-slate-500 font-normal">Statutory Mastery</span>
              </div>
            </div>

            <div className="relative rounded-2xl p-8 bg-slate-50 border border-slate-200 shadow-sm hover:border-[#6797D6] transition-all duration-300 group flex flex-col justify-between hover:-translate-y-1.5">
              <div>
                <div className="w-13 h-13 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center mb-6 text-[#355094] shadow-sm group-hover:scale-105 transition-transform">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-[#355094] transition-colors">
                  Speed
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  Business deadlines wait for no one. We deliver rapid turnaround times on urgent billing disputes, contract vetting, and summon representations without diluting technical depth.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-200 text-xs text-[#355094] font-mono font-bold flex items-center justify-between">
                <span>Standard 03</span>
                <span className="text-slate-500 font-normal">Agile Execution</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Senior Leadership & Partners Lineup */}
      <section className="py-20 sm:py-28 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
        <Container>
          <SectionHeading
            eyebrow="Firm Leadership"
            title="Partners & Practice"
            highlight="Directors"
            description="Our leadership brings together seasoned Chartered Accountants and jurists with specialized mastery in indirect tax, audits, and corporate restructuring."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteData.partners.map((partner, index) => (
              <div
                key={index}
                className="relative rounded-2xl p-7 bg-white border border-slate-200 shadow-sm hover:border-[#6797D6] transition-all duration-300 group flex flex-col justify-between hover:-translate-y-1.5"
              >
                <div>
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#1e3a8a] to-[#355094] flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:scale-105 transition-transform">
                      {partner.name
                        .replace("CA", "")
                        .trim()
                        .split(" ")
                        .slice(0, 2)
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#355094] transition-colors">
                        {partner.name}
                      </h3>
                      <p className="text-xs font-bold text-[#355094] uppercase tracking-wider">
                        {partner.role}
                      </p>
                      <p className="text-xs text-slate-500 font-medium mt-0.5">
                        {partner.qualification}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    {partner.bio}
                  </p>

                  <div className="space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block font-mono">
                      Core Specializations:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {partner.specialization.map((spec, i) => (
                        <span
                          key={i}
                          className="text-xs px-2.5 py-1 rounded-lg bg-blue-50 border border-blue-200 text-[#355094] font-medium"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="font-medium">Chartered Accountant</span>
                  <span className="text-[#355094] font-bold">Partner</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Institutional Credentials Banner */}
      <section className="py-16 bg-white relative overflow-hidden">
        <Container>
          <div className="max-w-4xl mx-auto rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-[#17274c] via-[#1e3a8a] to-[#355094] text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="space-y-2 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 text-[#6797D6] text-xs font-bold uppercase tracking-wider font-mono">
                <Award className="w-4 h-4" />
                <span>Direct Access to Partners</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Seek Strategic Advisory For Your Organization
              </h3>
              <p className="text-sm text-slate-200 max-w-xl leading-relaxed">
                Connect with Partner CA Shubham Singh and our corporate tax team for advisory, retainership, or litigation representation.
              </p>
            </div>

            <Link
              to="/contact"
              className="px-8 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-[#1e3a8a] font-bold text-sm tracking-wide shrink-0 transition-all duration-300 shadow-md hover:-translate-y-0.5 cursor-pointer"
            >
              Contact Chambers
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
};

export default About;
