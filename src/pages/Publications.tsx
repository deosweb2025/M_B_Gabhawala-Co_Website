import React, { useState } from "react";
import { siteData } from "../data/siteData";
import { PageHeader } from "../components/common/PageHeader";
import { Container } from "../components/common/Container";
import { SectionHeading } from "../components/common/SectionHeading";
import { Download, Calendar, Search, BookmarkCheck } from "lucide-react";

export const Publications: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("All");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const tabs = ["All", "GCo Connect", "GST NewsFlash", "Research", "Statute Guide"];

  const filteredPubs = siteData.publications.filter((pub) => {
    const matchesTab = activeTab === "All" || pub.category === activeTab;
    const matchesSearch =
      pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.tag.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const statutes = [
    { name: "Central Goods & Services Tax (CGST) Act, 2017", description: "Comprehensive statutory provisions, charging sections, and valuation rules." },
    { name: "Integrated Goods & Services Tax (IGST) Act, 2017", description: "Provisions governing inter-state supplies, imports, exports, and zero-rated transactions." },
    { name: "Union Territory Goods & Services Tax (UTGST) Act, 2017", description: "Tax governance in Union Territories without legislature." },
    { name: "CGST Rules & Return Filing Formats (GSTR-1 to 9C)", description: "Procedural framework for invoicing, input tax credits, and annual reconciliations." },
  ];

  return (
    <>
      <PageHeader
        variant="publications"
        badge="Thought Leadership & Resources"
        title="Knowledge Center &"
        highlight="Tax Publications"
        description="Access GCo Connect monthly bulletins, urgent GST NewsFlashes, and academic research papers."
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Publications" },
        ]}
      />

      {/* Publications Section */}
      <section className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
        {/* Ambient atmospheric glow */}
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#355094]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-2/3 -right-48 w-96 h-96 bg-[#6797D6]/5 rounded-full blur-3xl pointer-events-none" />

        <Container className="relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-14">
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2.5">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${activeTab === tab
                    ? "bg-gradient-to-r from-[#1e3a8a] to-[#355094] text-white shadow-md shadow-[#355094]/25"
                    : "bg-white text-slate-700 hover:text-slate-900 hover:bg-slate-50 border border-slate-300 shadow-sm"
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-[#355094] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search publications or statutes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#355094] focus:ring-1 focus:ring-[#355094]/30 transition-all font-medium shadow-sm"
              />
            </div>
          </div>

          {/* Publications Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredPubs.map((pub) => (
              <div
                key={pub.id}
                className="relative rounded-2xl p-7 bg-white border border-slate-200 shadow-sm hover:border-[#6797D6] transition-all duration-300 group flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#355094] bg-blue-50 px-3 py-1 rounded-full border border-blue-200 font-mono shadow-sm">
                      {pub.category}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-[#355094]" />
                      <span>{pub.date}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#355094] transition-colors leading-snug">
                    {pub.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    {pub.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium">
                    Tag: <span className="text-slate-700">{pub.tag}</span>
                  </span>
                  <a
                    href={`mailto:${siteData.contact.primaryEmail}?subject=Request%20for%20Publication%20Copy:%20${encodeURIComponent(pub.title)}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#355094] hover:text-[#1e3a8a] group-hover:translate-x-0.5 transition-transform cursor-pointer"
                  >
                    <span>Request Copy</span>
                    <Download className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Statutory Act & Rules Reference Repository */}
      <section className="py-20 sm:py-24 bg-white border-b border-slate-200 relative overflow-hidden">
        <Container>
          <SectionHeading
            eyebrow="Statutory Reference Library"
            title="Core Indian Indirect Tax"
            highlight="Statutes & Rules"
            description="Our practice operates with deep adherence to central legislations and subordinate notifications."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {statutes.map((statute, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4 hover:border-[#6797D6] hover:bg-blue-50/20 transition-all duration-300 group shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0 text-[#355094] group-hover:scale-105 transition-transform">
                  <BookmarkCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900 mb-1.5 group-hover:text-[#355094] transition-colors">
                    {statute.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {statute.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default Publications;
