import React, { useState } from "react";
import { siteData } from "../data/siteData";
import { PageHeader } from "../components/common/PageHeader";
import { Container } from "../components/common/Container";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  CheckCircle,
  Building2,
} from "lucide-react";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    practiceArea: "GST Advisory",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  return (
    <>
      <PageHeader
        variant="contact"
        badge="Connect With Our Partners"
        title="Varanasi Headquarters &"
        highlight="Pan-India Branches"
        description="Schedule a confidential consultation with our Senior Partners across Varanasi, Kolkata, Gurugram, Mumbai, Katihar, Sonebhadra, and Assam."
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Contact & Location" },
        ]}
      />

      <section className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
        {/* Ambient atmospheric glow */}
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#355094]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-2/3 -right-48 w-96 h-96 bg-[#6797D6]/5 rounded-full blur-3xl pointer-events-none" />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Headquarters & Regional Chambers (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#1e3a8a] block mb-1 font-mono">
                  Direct Partner Access
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                  M B Gabhawala & Co.
                </h2>
                <div className="flex items-center gap-2 mt-1.5">
                  <span className="text-xs text-[#1e3a8a] font-bold uppercase tracking-widest font-mono">
                    Chartered Accountants
                  </span>
                  <span className="text-slate-400">•</span>
                  <span className="text-xs text-slate-500 font-semibold">
                    ~Since 1975 (Five Decades)
                  </span>
                </div>
              </div>

              {/* Varanasi Headquarters Lead Card */}
              <div className="p-5 rounded-2xl bg-white border-2 border-blue-100 flex items-start gap-4 shadow-sm hover:border-[#1e3a8a] transition-all">
                <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-slate-200 shrink-0 bg-slate-100 shadow-sm">
                  <img
                    src="/gallery/CA APRAMEYA M GABHAWALA.jpeg"
                    alt="CA Aprameya Mahendra Gabhawala"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded-full bg-blue-50 text-[10px] font-mono font-bold text-[#1e3a8a] uppercase">
                      Headquarters (Varanasi)
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mt-1">
                    CA Aprameya Mahendra Gabhawala
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    FCA • Senior Partner
                  </p>
                  <p className="text-[11px] text-slate-600 mt-1.5 font-medium leading-relaxed">
                    {siteData.location.headquarter.fullAddress}
                  </p>
                  <a
                    href="tel:+919839059940"
                    className="inline-flex items-center gap-1.5 text-xs text-[#1e3a8a] font-bold mt-2 hover:underline"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>+91 98390 59940</span>
                  </a>
                </div>
              </div>

              {/* Kolkata Corporate & Appellate Chambers Lead Card */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 flex items-start gap-4 shadow-sm hover:border-[#1e3a8a] transition-all">
                <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-slate-200 shrink-0 bg-slate-100 shadow-sm">
                  <img
                    src="/gallery/CA SHUBHAM SINGH.jpeg"
                    alt="CA Shubham Singh"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded-full bg-slate-100 text-[10px] font-mono font-bold text-slate-700 uppercase">
                      Corporate Chambers (Kolkata)
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mt-1">
                    CA Shubham Singh
                  </h3>
                  <p className="text-xs text-[#1e3a8a] font-semibold uppercase tracking-wider font-mono">
                    FCA, B.Com • Partner
                  </p>
                  <p className="text-[11px] text-slate-600 mt-1.5 font-medium leading-relaxed">
                    {siteData.location.fullAddress}
                  </p>
                  <div className="flex flex-wrap gap-3 mt-2 text-xs font-bold text-[#1e3a8a]">
                    <a href="tel:+919681606280" className="hover:underline flex items-center gap-1">
                      <Phone className="w-3 h-3" />
                      <span>+91 96816 06280</span>
                    </a>
                    <a href="tel:+917007026952" className="hover:underline flex items-center gap-1">
                      <span>+91 70070 26952</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Detailed Contact Cards */}
              <div className="space-y-4">
                {/* Email */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-[#1e3a8a] shadow-sm transition-all duration-300 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0 mt-0.5 text-[#1e3a8a]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#1e3a8a] uppercase tracking-wider mb-1 font-mono">
                      Institutional Correspondence
                    </h3>
                    <a
                      href={`mailto:${siteData.contact.primaryEmail}`}
                      className="text-[#1e3a8a] hover:text-[#172554] transition-colors text-xs sm:text-sm font-semibold block"
                    >
                      {siteData.contact.primaryEmail}
                    </a>
                    <a
                      href="mailto:gst@sbgco.in"
                      className="text-slate-600 hover:text-[#1e3a8a] transition-colors text-xs font-medium block mt-0.5"
                    >
                      gst@sbgco.in (GST Practice)
                    </a>
                  </div>
                </div>

                {/* Pan-India Branch Locations Quick Tag */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-2 text-slate-900 text-xs font-bold uppercase tracking-wider mb-3 font-mono">
                    <Building2 className="w-4 h-4 text-[#1e3a8a]" />
                    <span>7 Pan-India Practice Locations</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2.5 rounded-xl bg-blue-50/70 border border-blue-200 font-semibold text-[#1e3a8a]">
                      ★ Varanasi, UP (HQ)
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 font-medium text-slate-700">
                      • Kolkata, WB
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 font-medium text-slate-700">
                      • Gurugram, Haryana
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 font-medium text-slate-700">
                      • Mumbai, Maharashtra
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 font-medium text-slate-700">
                      • Katihar, Bihar
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 font-medium text-slate-700">
                      • Sonebhadra, UP
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 font-medium text-slate-700 col-span-2">
                      • Bongaigaon, Assam
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Confidential Consultation Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="relative rounded-3xl p-8 sm:p-10 bg-white border border-slate-200 shadow-lg">

                <div className="mb-8">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#355094] block mb-1 font-mono">
                    Direct Partner Engagement
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                    Request a Consultation
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 font-normal leading-relaxed">
                    Connect directly with Partner CA Shubham Singh and our corporate tax team. All inquiries are held in strict professional confidentiality.
                  </p>
                </div>

                {submitted ? (
                  <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-4 animate-in fade-in duration-300 shadow-sm">
                    <div className="w-16 h-16 rounded-full bg-[#355094] text-white flex items-center justify-center mx-auto shadow-md">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900">
                      Inquiry Received
                    </h4>
                    <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                      Thank you for contacting M B Gabhawala & Co. Partner CA Shubham Singh will review your inquiry and connect with you shortly.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-xl bg-[#355094] hover:bg-[#1e3a8a] text-white text-xs font-bold transition-colors shadow-sm cursor-pointer"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 font-mono">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#355094] focus:bg-white focus:ring-1 focus:ring-[#355094]/30 transition-all font-medium"
                          placeholder="e.g. Ramesh Kumar"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 font-mono">
                          Enterprise / Organization
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) =>
                            setFormData({ ...formData, company: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#355094] focus:bg-white focus:ring-1 focus:ring-[#355094]/30 transition-all font-medium"
                          placeholder="Company name"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 font-mono">
                          Corporate Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#355094] focus:bg-white focus:ring-1 focus:ring-[#355094]/30 transition-all font-medium"
                          placeholder="name@company.com"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 font-mono">
                          Phone / Mobile *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#355094] focus:bg-white focus:ring-1 focus:ring-[#355094]/30 transition-all font-semibold"
                          placeholder="+91 96816 06280"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 font-mono">
                        Nature of Practice / Matter
                      </label>
                      <select
                        value={formData.practiceArea}
                        onChange={(e) =>
                          setFormData({ ...formData, practiceArea: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-[#1e3a8a] focus:bg-white focus:ring-1 focus:ring-[#1e3a8a]/30 transition-all font-medium"
                      >
                        <option value="Direct Taxation">Direct Taxation & Corporate Tax Planning</option>
                        <option value="GST Advisory">Indirect Tax & GST Advisory</option>
                        <option value="NRI Tax Services">NRI Services & Tax Compliance (We Consult)</option>
                        <option value="FCRA Registration">FCRA Registration, Prior Permission & Renewal (MHA)</option>
                        <option value="Litigation & SCN Defense">Litigation & Show Cause Notice (SCN) Defense</option>
                        <option value="GSTAT & Appellate Representation">GSTAT & Appellate Representation</option>
                        <option value="Statutory Audit & Due Diligence">Audit, Assurance & Due Diligence</option>
                        <option value="ERP Tax Integration">ERP & Systems Tax Harmonization</option>
                        <option value="Corporate Retainership">Corporate Retainership</option>
                        <option value="Other">Other Advisory Matter</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 font-mono">
                        Summary of Inquiry / Subject
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#355094] focus:bg-white focus:ring-1 focus:ring-[#355094]/30 transition-all font-normal"
                        placeholder="Please provide a brief outline of the matter or specific statutory issue..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-[#1e3a8a] to-[#355094] hover:from-[#172554] hover:to-[#1e3a8a] text-white font-bold text-sm tracking-wide transition-all duration-300 shadow-md shadow-[#355094]/25 hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
                    >
                      <Send className="w-4 h-4 text-white" />
                      <span>Submit Confidential Inquiry</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Nationwide 7 Branch Directory Section with Full Postal Addresses & Direct Lines */}
      <section className="py-20 bg-white border-b border-slate-200 relative overflow-hidden">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1e3a8a] block mb-2 font-mono">
              Pan-India Footprint (~Since 1975)
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Our 7 Practice Chambers Across India
            </h2>
            <p className="text-sm text-slate-600 mt-3 leading-relaxed">
              Serving corporate conglomerates, financial institutions, and NRIs across eastern, northern, and western corridors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteData.location.branches.map((branch, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200 hover:border-[#1e3a8a] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <span className="text-lg font-bold text-slate-900 group-hover:text-[#1e3a8a] transition-colors">
                      {branch.city}
                    </span>
                    <span
                      className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${
                        branch.role === "Headquarters"
                          ? "bg-[#1e3a8a] text-white shadow-sm"
                          : "bg-blue-50 border border-blue-200 text-[#1e3a8a]"
                      }`}
                    >
                      {branch.role}
                    </span>
                  </div>

                  <p className="text-xs text-slate-500 font-semibold mb-3">
                    {branch.state}, India
                  </p>

                  <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 text-xs text-slate-700 leading-relaxed font-medium mb-4 flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#1e3a8a] shrink-0 mt-0.5" />
                    <span>{branch.address}</span>
                  </div>

                  <div className="space-y-1 text-xs">
                    <span className="text-slate-400 font-medium block text-[11px] font-mono uppercase">
                      Partner In-Charge:
                    </span>
                    <p className="font-bold text-slate-900">
                      {branch.partner}
                    </p>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-200/80 flex items-center justify-between">
                  {branch.phone ? (
                    <a
                      href={`tel:${branch.phone.replace(/\s+/g, "")}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1e3a8a] hover:underline"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>{branch.phone}</span>
                    </a>
                  ) : (
                    <span className="text-xs text-slate-500">Contact Central Desk</span>
                  )}
                  <span className="text-[10px] font-mono font-bold text-slate-400">
                    M B G & CO.
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Interactive Google Map Section - Chinar Park, Behind Arsalan, Kolkata */}
      <section className="py-16 sm:py-20 bg-white relative overflow-hidden">
        <Container>
          <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-xl relative">
            <div className="p-4 sm:p-5 bg-white text-slate-900 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <MapPin className="w-4 h-4 text-[#355094] shrink-0" />
                <span className="font-bold text-slate-900">M B Gabhawala & Co. — Kolkata Chambers</span>
                <span className="text-slate-300 hidden sm:inline">•</span>
                <span className="hidden sm:inline text-slate-600">AS/361/11-12, Loknath Park, Behind Arsalan, Chinar Park, Kolkata - 700157</span>
              </div>
              <a
                href="https://maps.google.com/?q=Loknath+Park+Behind+Arsalan+Chinar+Park+Kolkata+700157"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#355094] hover:text-[#1e3a8a] transition-colors font-semibold self-start sm:self-auto cursor-pointer"
              >
                Open in Google Maps ↗
              </a>
            </div>

            <iframe
              src={siteData.location.mapEmbedUrl}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="M B Gabhawala & Co. Kolkata Office Map"
            />
          </div>
        </Container>
      </section>
    </>
  );
};

export default Contact;
