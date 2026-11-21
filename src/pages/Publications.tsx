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
      <section className="py-20 sm:py-24 bg-slate-950 border-b border-slate-900/80 relative overflow-hidden">
        {/* Ambient atmospheric glow */}
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-2/3 -right-48 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

        <Container className="relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-14">
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2.5">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${activeTab === tab
                    ? "bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 text-white shadow-lg shadow-blue-600/35 border border-blue-400/50"
                    : "bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800/80 border border-white/10 backdrop-blur-md"
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-sky-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search publications or statutes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-900/90 border border-white/15 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400/30 transition-all font-medium"
              />
            </div>
          </div>

          {/* Publications Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredPubs.map((pub) => (
              <div
                key={pub.id}
                className="relative rounded-2xl p-7 bg-gradient-to-b from-white/[0.08] via-slate-900/80 to-slate-950/95 border border-white/10 border-t-white/20 backdrop-blur-xl shadow-[0_20px_45px_-15px_rgba(0,0,0,0.7)] hover:border-blue-400/50 hover:shadow-[0_25px_50px_-15px_rgba(37,99,235,0.3)] transition-all duration-300 group flex flex-col justify-between hover:-translate-y-1"
              >
                <div className="absolute -top-px left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-sky-400/50 to-transparent pointer-events-none" />
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-sky-300 bg-blue-500/15 px-3 py-1 rounded-full border border-blue-400/30 font-mono shadow-sm">
                      {pub.category}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-slate-300 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-sky-400" />
                      <span>{pub.date}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-sky-300 transition-colors leading-snug">
                    {pub.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                    {pub.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-medium">
                    Tag: <span className="text-slate-300">{pub.tag}</span>
                  </span>
                  <a
                    href={`mailto:${siteData.contact.primaryEmail}?subject=Request%20for%20Publication%20Copy:%20${encodeURIComponent(pub.title)}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-400 hover:text-sky-300 group-hover:translate-x-0.5 transition-transform cursor-pointer"
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
      <section className="py-20 sm:py-24 bg-gradient-to-b from-slate-950 via-slate-900/60 to-slate-950 border-b border-slate-900/80 relative overflow-hidden">
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
                className="p-6 rounded-2xl bg-gradient-to-b from-white/[0.07] to-slate-900/80 border border-white/10 flex items-start gap-4 hover:border-blue-400/40 hover:bg-slate-900/90 transition-all duration-300 group shadow-lg"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-400/25 flex items-center justify-center shrink-0 text-sky-400 group-hover:scale-105 transition-transform">
                  <BookmarkCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-1.5 group-hover:text-sky-300 transition-colors">
                    {statute.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
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
