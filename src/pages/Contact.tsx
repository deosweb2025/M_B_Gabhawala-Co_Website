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
        title="Kolkata Office &"
        highlight="Pan-India Branches"
        description="Schedule a confidential consultation with Partner CA Shubham Singh and our senior indirect tax team at our Chinar Park chambers in Kolkata."
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
            {/* Left Column: Kolkata Office & Nationwide Branches (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#355094] block mb-1 font-mono">
                  Kolkata Head Chambers
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                  M B Gabhawala & Co.
                </h2>
                <div className="flex items-center gap-2 mt-1.5">
                  <span className="text-xs text-[#355094] font-bold uppercase tracking-widest font-mono">
                    Chartered Accountants
                  </span>
                  <span className="text-slate-400">•</span>
                  <span className="text-xs text-slate-500 font-semibold">
                    ~Since 1975
                  </span>
                </div>
              </div>

              {/* Lead Partner Card */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 flex items-center gap-4 shadow-sm hover:border-[#6797D6] transition-all">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#1e3a8a] to-[#355094] text-white flex items-center justify-center font-bold text-base shadow-md shrink-0">
                  SS
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    CA Shubham Singh
                  </h3>
                  <p className="text-xs text-[#355094] font-semibold uppercase tracking-wider font-mono">
                    Partner • Kolkata Practice
                  </p>
                </div>
              </div>

              {/* Detailed Contact Cards */}
              <div className="space-y-4">
                {/* Kolkata Address Card */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-[#6797D6] shadow-sm transition-all duration-300 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0 mt-0.5 text-[#355094]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#355094] uppercase tracking-wider mb-1 font-mono">
                      Kolkata Office Address
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                      {siteData.location.fullAddress}
                    </p>
                    <p className="text-[11px] text-[#355094] font-medium mt-1.5">
                      {siteData.location.directionsNote}
                    </p>
                  </div>
                </div>

                {/* Telephone Lines */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-[#6797D6] shadow-sm transition-all duration-300 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0 mt-0.5 text-[#355094]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xs font-bold text-[#355094] uppercase tracking-wider mb-1 font-mono">
                      Direct Telephone Lines
                    </h3>
                    <div className="flex flex-col gap-1 text-xs sm:text-sm text-slate-900 font-semibold">
                      <a href="tel:+919681606280" className="hover:text-[#355094] transition-colors">
                        +91 9681 606 280
                      </a>
                      <a href="tel:+917007026952" className="hover:text-[#355094] transition-colors">
                        +91 7007 026 952
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-[#6797D6] shadow-sm transition-all duration-300 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0 mt-0.5 text-[#355094]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#355094] uppercase tracking-wider mb-1 font-mono">
                      Direct Email
                    </h3>
                    <a
                      href={`mailto:${siteData.contact.primaryEmail}`}
                      className="text-[#355094] hover:text-[#1e3a8a] transition-colors text-xs sm:text-sm font-semibold"
                    >
                      {siteData.contact.primaryEmail}
                    </a>
                  </div>
                </div>

                {/* Pan-India Branch Locations */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-2 text-slate-900 text-xs font-bold uppercase tracking-wider mb-3 font-mono">
                    <Building2 className="w-4 h-4 text-[#355094]" />
                    <span>Nationwide Branches (~Since 1975)</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 font-medium text-slate-700">
                      • Varanasi, UP
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 font-medium text-slate-700">
                      • Gurugram, Haryana
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 font-medium text-slate-700">
                      • Katihar, Bihar
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 font-medium text-slate-700">
                      • Sonebhadra, UP
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 font-medium text-slate-700 col-span-2">
                      • Mumbai, Maharashtra
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
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-[#355094] focus:bg-white focus:ring-1 focus:ring-[#355094]/30 transition-all font-medium"
                      >
                        <option value="GST Advisory">Indirect Tax & GST Advisory</option>
                        <option value="Litigation & SCN Defense">Litigation & Show Cause Notice (SCN) Defense</option>
                        <option value="GSTAT & Appellate Representation">GSTAT & Appellate Representation</option>
                        <option value="Due Diligence & Health Check">Tax Health Checkup & Due Diligence</option>
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
