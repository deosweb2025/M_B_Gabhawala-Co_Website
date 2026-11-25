import React, { useState } from "react";
import { Link } from "react-router-dom";
import { siteData } from "../data/siteData";
import { PageHeader } from "../components/common/PageHeader";
import { Container } from "../components/common/Container";
import {
  Phone,
  MapPin,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

export const Partners: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<string>("All");

  const filterOptions = [
    "All",
    "Varanasi",
    "Kolkata",
    "Gurugram",
    "Mumbai",
    "Katihar",
    "Sonebhadra",
    "Bongaigaon",
  ];

  const filteredPartners =
    selectedCity === "All"
      ? siteData.partners
      : siteData.partners.filter(
        (p) =>
          p.city?.toLowerCase() === selectedCity.toLowerCase() ||
          p.role.toLowerCase().includes(selectedCity.toLowerCase())
      );

  return (
    <>
      <PageHeader
        variant="about"
        badge="Firm Leadership • 7 Nationwide Chambers"
        title="Distinguished Partners &"
        highlight="Practice Directors"
        description="Meet the seasoned Chartered Accountants (FCA & ACA) steering M B Gabhawala & Co. across Varanasi Headquarters, Kolkata Corporate Chambers, Gurugram, Mumbai, Katihar, Sonebhadra, and Assam."
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "About", path: "/about" },
          { label: "Partners & Leadership" },
        ]}
      />

      {/* Main Partners Directory Section */}
      <section className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
        {/* Ambient atmospheric glows */}
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#1e3a8a]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-2/3 -right-48 w-96 h-96 bg-[#38bdf8]/5 rounded-full blur-3xl pointer-events-none" />

        <Container className="relative z-10">
          {/* Branch Location Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12 sm:mb-16">
            {filterOptions.map((city) => (
              <button
                key={city}
                onClick={() => setSelectedCity(city)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${selectedCity === city
                  ? "bg-[#1e3a8a] text-white shadow-md shadow-[#1e3a8a]/25"
                  : "bg-white text-slate-700 hover:text-slate-900 border border-slate-300 shadow-sm"
                  }`}
              >
                {city === "All" ? "All 7 Partners" : city}
              </button>
            ))}
          </div>

          {/* Detailed Partner Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
            {filteredPartners.map((partner, index) => (
              <div
                key={index}
                className="rounded-3xl bg-white border border-slate-200/90 shadow-md hover:border-[#1e3a8a] transition-all duration-300 flex flex-col justify-between hover:shadow-2xl group relative overflow-hidden"
              >
                <div>
                  {/* Top Executive Portrait Showcase Banner */}
                  <div className="relative w-full h-80 sm:h-96 overflow-hidden bg-slate-900">
                    {partner.image ? (
                      <img
                        src={partner.image}
                        alt={partner.name}
                        className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-tr from-[#1e3a8a] via-[#172554] to-[#0f172a] flex items-center justify-center text-white font-bold text-5xl tracking-widest shadow-inner">
                        {partner.name
                          .replace("CA", "")
                          .trim()
                          .split(" ")
                          .slice(0, 2)
                          .map((n) => n[0])
                          .join("")}
                      </div>
                    )}

                    {/* Gradient Vignette Overlays for Depth and Contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />
                    <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/50 to-transparent pointer-events-none" />

                    {/* Floating Glass Badges on Image */}
                    <div className="absolute top-4 sm:top-5 inset-x-4 sm:inset-x-6 flex items-center justify-between z-10">
                      <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md text-white border border-white/20 text-xs font-mono font-bold uppercase tracking-wider shadow-lg">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span>{partner.city || "Partner"}</span>
                      </span>
                      <span className="text-xs font-mono font-bold text-white bg-[#1e3a8a]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-blue-300/30 shadow-lg">
                        {partner.qualification}
                      </span>
                    </div>

                    {/* Partner Name & Title Anchored at Bottom of Portrait */}
                    <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7 z-10">
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight drop-shadow-md group-hover:text-blue-100 transition-colors">
                        {partner.name}
                      </h3>
                      <p className="text-xs sm:text-sm font-bold text-blue-300 uppercase tracking-wider mt-1.5 font-mono drop-shadow">
                        {partner.role}
                      </p>
                    </div>
                  </div>

                  {/* Card Body Information */}
                  <div className="p-6 sm:p-8 space-y-6">
                    {/* Direct Telephone Link & City Routing */}
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      {partner.phone ? (
                        <a
                          href={`tel:${partner.phone.replace(/\s+/g, "")}`}
                          className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-bold text-[#1e3a8a] hover:text-white hover:bg-[#1e3a8a] px-4 py-2.5 rounded-xl bg-blue-50/80 border border-blue-200/90 transition-all duration-200 shadow-sm group/btn"
                        >
                          <Phone className="w-4 h-4 text-[#1e3a8a] group-hover/btn:text-white transition-colors" />
                          <span>Direct Dial: {partner.phone}</span>
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 text-xs text-slate-500 font-medium px-3.5 py-1.5 rounded-xl bg-slate-50 border border-slate-200">
                          Central Chambers Routing
                        </span>
                      )}
                      <span className="text-xs font-mono text-slate-500 font-semibold tracking-wide uppercase">
                        {partner.city} Chambers
                      </span>
                    </div>

                    {/* Chambers Address Card */}
                    {partner.address && (
                      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 flex items-start gap-3 text-xs sm:text-[13px] text-slate-700 leading-relaxed font-medium">
                        <div className="p-2 rounded-xl bg-blue-50 border border-blue-200/60 shrink-0 text-[#1e3a8a]">
                          <MapPin className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="text-[10px] uppercase font-mono font-bold text-slate-400 block tracking-wider mb-0.5">
                            Chambers Jurisdiction & Location
                          </span>
                          <span className="text-slate-800 font-medium">{partner.address}</span>
                        </div>
                      </div>
                    )}

                    {/* Biography */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {partner.bio}
                    </p>

                    {/* Core Specialization Pills */}
                    <div className="space-y-2.5">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block font-mono">
                        Practice Disciplines & Statutory Mastery:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {partner.specialization.map((spec, i) => (
                          <span
                            key={i}
                            className="text-xs px-3 py-1.5 rounded-xl bg-blue-50/70 border border-blue-200/70 text-[#1e3a8a] font-medium hover:bg-blue-100/70 transition-colors"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Highlights / Achievements */}
                    {partner.achievements && partner.achievements.length > 0 && (
                      <div className="space-y-2.5 pt-4 border-t border-slate-100">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block font-mono">
                          Key Credentials & Practice Roles:
                        </span>
                        <ul className="space-y-2">
                          {partner.achievements.map((ach, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-600 leading-relaxed"
                            >
                              <CheckCircle2 className="w-4 h-4 text-[#1e3a8a] shrink-0 mt-0.5" />
                              <span>{ach}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400 font-medium">
                    M B GABHAWALA & CO.
                  </span>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl bg-[#1e3a8a] hover:bg-[#172554] text-white shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                  >
                    <span>Consult Partner</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Institutional Consultation Banner */}
      <section className="py-16 sm:py-20 bg-white relative overflow-hidden">
        <Container>
          <div className="max-w-4xl mx-auto rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-[#17274c] via-[#1e3a8a] to-[#355094] text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="space-y-2 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 text-[#6797D6] text-xs font-bold uppercase tracking-wider font-mono">
                <ShieldCheck className="w-4 h-4" />
                <span>Direct Partner Engagement</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Engage Senior Counsel For Your Organization
              </h3>
              <p className="text-sm text-slate-200 max-w-xl leading-relaxed">
                Connect directly with our partners across Varanasi, Kolkata, Gurugram, Mumbai, Katihar, Sonebhadra, and Assam. All consultations are held in strict statutory confidentiality.
              </p>
            </div>

            <Link
              to="/contact"
              className="px-8 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-[#1e3a8a] font-bold text-sm tracking-wide shrink-0 transition-all duration-300 shadow-md hover:-translate-y-0.5 cursor-pointer"
            >
              Request Consultation
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Partners;
