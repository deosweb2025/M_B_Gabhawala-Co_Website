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

      <section className="py-20 sm:py-24 bg-slate-950 border-b border-slate-900/80 relative overflow-hidden">
        {/* Ambient atmospheric glow */}
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-2/3 -right-48 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Kolkata Office & Nationwide Branches (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-sky-400 block mb-1 font-mono">
                  Kolkata Head Chambers
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  M B Gabhawala & Co.
                </h2>
                <div className="flex items-center gap-2 mt-1.5">
                  <span className="text-xs text-sky-400 font-bold uppercase tracking-widest font-mono">
                    Chartered Accountants
                  </span>
                  <span className="text-slate-600">•</span>
                  <span className="text-xs text-slate-300 font-semibold">
                    ~Since 1975
                  </span>
                </div>
              </div>

              {/* Lead Partner Card */}
              <div className="p-5 rounded-2xl bg-gradient-to-b from-white/[0.08] to-slate-900/80 border border-white/10 border-t-white/20 backdrop-blur-xl flex items-center gap-4 shadow-xl hover:border-blue-400/40 transition-all">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-600 to-sky-500 text-white flex items-center justify-center font-bold text-base shadow-[0_0_15px_rgba(56,189,248,0.4)] shrink-0 border border-blue-300/50">
                  SS
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">
                    CA Shubham Singh
                  </h3>
                  <p className="text-xs text-sky-400 font-semibold uppercase tracking-wider font-mono">
                    Partner • Kolkata Practice
                  </p>
                </div>
              </div>

              {/* Detailed Contact Cards */}
              <div className="space-y-4">
                {/* Kolkata Address Card */}
                <div className="p-5 rounded-2xl bg-gradient-to-b from-white/[0.07] to-slate-900/80 border border-white/10 hover:border-blue-400/40 backdrop-blur-md shadow-xl transition-all duration-300 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-400/25 flex items-center justify-center shrink-0 mt-0.5 text-sky-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-sky-400 uppercase tracking-wider mb-1 font-mono">
                      Kolkata Office Address
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed">
                      {siteData.location.fullAddress}
                    </p>
                    <p className="text-[11px] text-sky-400/90 font-medium mt-1.5">
                      {siteData.location.directionsNote}
                    </p>
                  </div>
                </div>

                {/* Telephone Lines */}
                <div className="p-5 rounded-2xl bg-gradient-to-b from-white/[0.07] to-slate-900/80 border border-white/10 hover:border-blue-400/40 backdrop-blur-md shadow-xl transition-all duration-300 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-400/25 flex items-center justify-center shrink-0 mt-0.5 text-sky-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xs font-bold text-sky-400 uppercase tracking-wider mb-1 font-mono">
                      Direct Telephone Lines
                    </h3>
                    <div className="flex flex-col gap-1 text-xs sm:text-sm text-white font-semibold">
                      <a href="tel:+919681606280" className="hover:text-sky-400 transition-colors">
                        +91 9681 606 280
                      </a>
                      <a href="tel:+917007026952" className="hover:text-sky-400 transition-colors">
                        +91 7007 026 952
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="p-5 rounded-2xl bg-gradient-to-b from-white/[0.07] to-slate-900/80 border border-white/10 hover:border-blue-400/40 backdrop-blur-md shadow-xl transition-all duration-300 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-400/25 flex items-center justify-center shrink-0 mt-0.5 text-sky-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-sky-400 uppercase tracking-wider mb-1 font-mono">
                      Direct Email
                    </h3>
                    <a
                      href={`mailto:${siteData.contact.primaryEmail}`}
                      className="text-sky-300 hover:text-white transition-colors text-xs sm:text-sm font-semibold"
                    >
                      {siteData.contact.primaryEmail}
                    </a>
                  </div>
                </div>

                {/* Pan-India Branch Locations */}
                <div className="p-5 rounded-2xl bg-gradient-to-b from-white/[0.07] to-slate-900/80 border border-white/10 shadow-xl">
                  <div className="flex items-center gap-2 text-white text-xs font-bold uppercase tracking-wider mb-3 font-mono">
                    <Building2 className="w-4 h-4 text-sky-400" />
                    <span>Nationwide Branches (~Since 1975)</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2.5 rounded-xl bg-slate-950/80 border border-white/10 font-medium text-slate-300">
                      • Varanasi, UP
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-950/80 border border-white/10 font-medium text-slate-300">
                      • Gurugram, Haryana
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-950/80 border border-white/10 font-medium text-slate-300">
                      • Katihar, Bihar
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-950/80 border border-white/10 font-medium text-slate-300">
                      • Sonebhadra, UP
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-950/80 border border-white/10 font-medium text-slate-300 col-span-2">
                      • Mumbai, Maharashtra
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Confidential Consultation Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="relative rounded-3xl p-8 sm:p-10 bg-gradient-to-b from-white/[0.08] via-slate-900/80 to-slate-950/95 border border-white/10 border-t-white/25 backdrop-blur-xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)]">
                {/* Top Specular Edge Highlight */}
                <div className="absolute -top-px left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-sky-400/60 to-transparent pointer-events-none" />

                <div className="mb-8">
                  <span className="text-xs font-bold uppercase tracking-wider text-sky-400 block mb-1 font-mono">
                    Direct Partner Engagement
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Request a Consultation
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-2 font-normal leading-relaxed">
                    Connect directly with Partner CA Shubham Singh and our corporate tax team. All inquiries are held in strict professional confidentiality.
                  </p>
                </div>

                {submitted ? (
                  <div className="p-8 rounded-2xl bg-slate-900/90 border border-white/15 text-center space-y-4 animate-in fade-in duration-300 shadow-xl">
                    <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto shadow-lg shadow-blue-600/40">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-bold text-white">
                      Inquiry Received
                    </h4>
                    <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                      Thank you for contacting M B Gabhawala & Co. Partner CA Shubham Singh will review your inquiry and connect with you shortly.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-xl bg-slate-800 text-white text-xs font-bold hover:bg-slate-700 transition-colors shadow-md border border-white/10 cursor-pointer"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5 font-mono">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400/40 transition-all font-medium"
                          placeholder="e.g. Ramesh Kumar"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5 font-mono">
                          Enterprise / Organization
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) =>
                            setFormData({ ...formData, company: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400/40 transition-all font-medium"
                          placeholder="Company name"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5 font-mono">
                          Corporate Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400/40 transition-all font-medium"
                          placeholder="name@company.com"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5 font-mono">
                          Phone / Mobile *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400/40 transition-all font-semibold"
                          placeholder="+91 96816 06280"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5 font-mono">
                        Nature of Practice / Matter
                      </label>
                      <select
                        value={formData.practiceArea}
                        onChange={(e) =>
                          setFormData({ ...formData, practiceArea: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/90 border border-white/15 text-white text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400/40 transition-all font-medium"
                      >
                        <option value="GST Advisory" className="bg-slate-950 text-white">Indirect Tax & GST Advisory</option>
                        <option value="Litigation & SCN Defense" className="bg-slate-950 text-white">Litigation & Show Cause Notice (SCN) Defense</option>
                        <option value="GSTAT & Appellate Representation" className="bg-slate-950 text-white">GSTAT & Appellate Representation</option>
                        <option value="Due Diligence & Health Check" className="bg-slate-950 text-white">Tax Health Checkup & Due Diligence</option>
                        <option value="ERP Tax Integration" className="bg-slate-950 text-white">ERP & Systems Tax Harmonization</option>
                        <option value="Corporate Retainership" className="bg-slate-950 text-white">Corporate Retainership</option>
                        <option value="Other" className="bg-slate-950 text-white">Other Advisory Matter</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5 font-mono">
                        Summary of Inquiry / Subject
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400/40 transition-all font-normal"
                        placeholder="Please provide a brief outline of the matter or specific statutory issue..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="relative group overflow-hidden w-full inline-flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 hover:from-blue-500 hover:via-sky-400 hover:to-indigo-500 text-white font-bold text-sm tracking-wide transition-all duration-300 border border-blue-400/50 border-t-white/80 shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.7),0_10px_25px_-5px_rgba(37,99,235,0.5),0_0_20px_rgba(56,189,248,0.35)] hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_15px_30px_-5px_rgba(37,99,235,0.65),0_0_25px_rgba(56,189,248,0.5)] hover:-translate-y-0.5 cursor-pointer"
                    >
                      <div className="absolute top-0 left-0 right-0 h-[48%] bg-gradient-to-b from-white/35 via-white/15 to-transparent rounded-t-xl pointer-events-none" />
                      <Send className="w-4 h-4 text-sky-200 relative z-10 group-hover:translate-x-0.5 transition-transform" />
                      <span className="relative z-10 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">Submit Confidential Inquiry</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Interactive Google Map Section - Chinar Park, Behind Arsalan, Kolkata */}
      <section className="py-16 sm:py-20 bg-slate-950 relative overflow-hidden">
        <Container>
          <div className="rounded-3xl overflow-hidden border border-white/15 shadow-2xl relative">
            <div className="p-4 sm:p-5 bg-slate-900/95 text-white border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
                <span className="font-bold text-white">M B Gabhawala & Co. — Kolkata Chambers</span>
                <span className="text-slate-600 hidden sm:inline">•</span>
                <span className="hidden sm:inline text-slate-400">AS/361/11-12, Loknath Park, Behind Arsalan, Chinar Park, Kolkata - 700157</span>
              </div>
              <a
                href="https://maps.google.com/?q=Loknath+Park+Behind+Arsalan+Chinar+Park+Kolkata+700157"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-sky-400 hover:text-white transition-colors font-semibold self-start sm:self-auto cursor-pointer"
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
