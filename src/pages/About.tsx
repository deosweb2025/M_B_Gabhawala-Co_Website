import React, { useState, useEffect } from "react";
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
  Phone,
  MapPin,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";

interface CulturalBranch {
  city: string;
  state: string;
  stateCode: string;
  landmark: string;
  role: string;
  image: string;
}

const culturalBranchesData: CulturalBranch[] = [
  {
    city: "Varanasi",
    state: "Uttar Pradesh",
    stateCode: "UP",
    landmark: "Sacred Kashi Ghats & Ganga Aarti",
    role: "Headquarters",
    image: "/locations/varanasi.jpg",
  },
  {
    city: "Kolkata",
    state: "West Bengal",
    stateCode: "WB",
    landmark: "Howrah Bridge & Hooghly River",
    role: "Corporate Chambers",
    image: "/locations/kolkata.jpg",
  },
  {
    city: "Gurugram",
    state: "Haryana",
    stateCode: "HR",
    landmark: "DLF Cyber City Corporate Skyline",
    role: "Delhi-NCR Office",
    image: "/locations/gurugram.jpg",
  },
  {
    city: "Mumbai",
    state: "Maharashtra",
    stateCode: "MH",
    landmark: "Gateway of India & Mumbai Harbor",
    role: "Financial Chambers",
    image: "/locations/mumbai.jpg",
  },
  {
    city: "Katihar",
    state: "Bihar",
    stateCode: "BR",
    landmark: "Historic Railway Gateway Junction",
    role: "Regional Office",
    image: "/locations/katihar.jpg",
  },
  {
    city: "Sonebhadra",
    state: "Uttar Pradesh",
    stateCode: "UP",
    landmark: "Rihand Dam & Vindhyachal Energy Hub",
    role: "Regional Office",
    image: "/locations/sonebhadra.jpg",
  },
  {
    city: "Bongaigaon",
    state: "Assam",
    stateCode: "AS",
    landmark: "Brahmaputra Valley & Commercial Corridor",
    role: "North-East Branch",
    image: "/locations/assam.jpg",
  },
];

interface StandardItem {
  standard: string;
  sub: string;
  roman: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const standardsData: StandardItem[] = [
  {
    standard: "Standard 01",
    sub: "Ethical Rigor",
    roman: "I",
    title: "Integrity",
    description:
      "We never compromise on statutory veracity. Our opinions reflect unvarnished legal analysis, providing clients with enduring positions that withstand departmental scrutiny and judicial examination.",
    icon: ShieldCheck,
  },
  {
    standard: "Standard 02",
    sub: "Statutory Mastery",
    roman: "II",
    title: "Knowledge",
    description:
      "Our practice is steered by recognized legal scholars. We continuously dissect constitutional interpretations, tribunal precedents, and notifications to formulate defensive strategies.",
    icon: BookOpen,
  },
  {
    standard: "Standard 03",
    sub: "Agile Execution",
    roman: "III",
    title: "Speed",
    description:
      "Business deadlines wait for no one. We deliver rapid turnaround times on urgent billing disputes, contract vetting, and summon representations without diluting technical depth.",
    icon: Zap,
  },
];

const AboutStandard3DCard: React.FC<{
  item: StandardItem;
  index: number;
}> = ({ item, index }) => {
  const cardRef = React.useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = React.useState({ x: 0, y: 0 });
  const [glare, setGlare] = React.useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = React.useState(false);

  const Icon = item.icon;

  const updatePosition = (clientX: number, clientY: number) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = Math.max(-12, Math.min(12, ((y - centerY) / centerY) * -10));
    const rotateY = Math.max(-12, Math.min(12, ((x - centerX) / centerX) * 10));

    setRotate({ x: rotateX, y: rotateY });
    setGlare({
      x: Math.max(0, Math.min(100, (x / rect.width) * 100)),
      y: Math.max(0, Math.min(100, (y / rect.height) * 100)),
      opacity: 0.55,
    });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    updatePosition(e.clientX, e.clientY);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
    setGlare({ x: 50, y: 50, opacity: 0 });
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setIsHovered(true);
    if (e.touches[0]) {
      updatePosition(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches[0]) {
      updatePosition(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  const handleTouchEnd = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
    setGlare({ x: 50, y: 50, opacity: 0 });
  };

  const mobileFloatClass = !isHovered ? `mobile-3d-float-${index % 3}` : "";

  return (
    <div
      className="relative h-full"
      style={{
        perspective: "1200px",
      }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchEnd}
        className={`relative h-full rounded-2xl p-7 sm:p-8 flex flex-col justify-between overflow-hidden bg-white border border-slate-200/90 border-t-[3.5px] border-t-[#1e3a8a] cursor-pointer group transition-transform duration-200 ease-out select-none touch-pan-y ${mobileFloatClass}`}
        style={{
          transformStyle: "preserve-3d",
          transform: isHovered
            ? `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) translateZ(20px) translateY(-8px)`
            : undefined,
          boxShadow: isHovered
            ? "0 30px 60px -15px rgba(15, 23, 42, 0.18), 0 10px 25px -5px rgba(30, 58, 138, 0.15), inset 0 1.5px 2px rgba(255, 255, 255, 1)"
            : "0 10px 25px -8px rgba(15, 23, 42, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.03), inset 0 1px 1.5px rgba(255, 255, 255, 0.9)",
        }}
      >
        {/* Animated Top Specular Light Beam (Mobile & Desktop) */}
        <div className="absolute top-0 left-0 right-0 h-[3.5px] overflow-hidden pointer-events-none z-30">
          <div
            className="animate-card-beam"
            style={{ animationDelay: `${index * 1.2}s` }}
          />
        </div>

        {/* Static Top Glass Rim */}
        <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent pointer-events-none" />

        {/* Dynamic 3D Glare Follower Effect */}
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300 z-30"
          style={{
            opacity: glare.opacity,
            background: `radial-gradient(circle 320px at ${glare.x}% ${glare.y}%, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.1) 40%, transparent 80%)`,
          }}
        />

        {/* Card Ambient Glow Refraction */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-50/70 via-transparent to-transparent rounded-tr-2xl pointer-events-none opacity-60" />

        {/* 3D Watermarked Roman Numeral (Parallax Depth: 15px) */}
        <span
          className="text-6xl sm:text-7xl font-black text-slate-100 group-hover:text-blue-100/70 transition-colors pointer-events-none absolute top-4 right-6 select-none font-serif"
          style={{ transform: "translateZ(15px)", transformStyle: "preserve-3d" }}
        >
          {item.roman}
        </span>

        <div className="relative z-10" style={{ transformStyle: "preserve-3d" }}>
          {/* 3D Floating Elevated Luxury Icon Box (Parallax Depth: 40px) */}
          <div
            className="w-14 h-14 rounded-2xl bg-gradient-to-br from-white via-blue-50 to-blue-100/70 border border-blue-200/90 flex items-center justify-center mb-6 text-[#1e3a8a] shadow-[0_10px_20px_-3px_rgba(30,58,138,0.18),inset_0_1.5px_2px_rgba(255,255,255,0.95)] transition-transform duration-300 group-hover:scale-110"
            style={{ transform: "translateZ(40px)", transformStyle: "preserve-3d" }}
          >
            <Icon className="w-7 h-7 text-[#1e3a8a] drop-shadow-[0_2px_4px_rgba(30,58,138,0.2)]" />
          </div>

          {/* 3D Title (Parallax Depth: 26px) */}
          <h3
            className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-[#1e3a8a] transition-colors"
            style={{ transform: "translateZ(26px)", transformStyle: "preserve-3d" }}
          >
            {item.title}
          </h3>

          {/* 3D Description (Parallax Depth: 18px) */}
          <p
            className="text-sm text-slate-600 leading-relaxed font-normal"
            style={{ transform: "translateZ(18px)", transformStyle: "preserve-3d" }}
          >
            {item.description}
          </p>
        </div>

        {/* 3D Footer Bar (Parallax Depth: 20px) */}
        <div
          className="mt-8 pt-4 border-t border-slate-100 text-xs text-[#1e3a8a] font-mono font-bold flex items-center justify-between relative z-10"
          style={{ transform: "translateZ(20px)", transformStyle: "preserve-3d" }}
        >
          <span>{item.standard}</span>
          <span className="text-slate-500 font-normal">{item.sub}</span>
        </div>
      </div>
    </div>
  );
};

export const About: React.FC = () => {
  const [selectedPartnerCity, setSelectedPartnerCity] = useState<string>("All");
  const [activePartnerConsoleIndex, setActivePartnerConsoleIndex] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActivePartnerConsoleIndex((prev) => (prev + 1) % siteData.partners.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const currentConsolePartner = siteData.partners[activePartnerConsoleIndex];

  const partnerFilterOptions = [
    "All",
    "Varanasi",
    "Kolkata",
    "Gurugram",
    "Mumbai",
    "Katihar",
    "Sonebhadra",
    "Assam",
  ];

  const filteredPartners =
    selectedPartnerCity === "All"
      ? siteData.partners
      : siteData.partners.filter(
        (p) =>
          p.city?.toLowerCase().includes(selectedPartnerCity.toLowerCase()) ||
          p.role.toLowerCase().includes(selectedPartnerCity.toLowerCase()) ||
          p.address?.toLowerCase().includes(selectedPartnerCity.toLowerCase())
      );

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
                <span>Established Since 1975 (50+ Years)</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-900 tracking-tight leading-tight">
                Five Decades of Institutional{" "}
                <span className="text-[#1e3a8a] block sm:inline mt-1 sm:mt-0">
                  Tax & Accounting Excellence
                </span>
              </h2>

              <p className="text-base text-slate-600 leading-relaxed font-normal">
                Founded in 1975, M B Gabhawala & Co. has grown into one of India's prominent Chartered Accountancy institutions, dedicated to providing rigorous, research-backed counsel on Direct & Indirect Taxation, corporate audits, NRI tax compliance, and appellate advocacy.
              </p>

              <p className="text-base text-slate-600 leading-relaxed font-normal">
                Headquartered in Varanasi (UP) with premier corporate & appellate litigation chambers at Chinar Park, Kolkata, the firm oversees an expansive pan-India branch footprint serving clients in Gurugram, Mumbai, Katihar, Sonebhadra, and Assam.
              </p>

              <div className="pt-4 grid grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm hover:border-[#6797D6] transition-all">
                  <span className="text-3xl font-extrabold text-[#1e3a8a] block mb-1 font-mono">
                    1975
                  </span>
                  <span className="text-xs text-slate-600 font-semibold tracking-wide uppercase">
                    Five Decades of Practice
                  </span>
                </div>
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm hover:border-[#6797D6] transition-all">
                  <span className="text-3xl font-extrabold text-[#1e3a8a] block mb-1 font-mono">
                    7 Cities
                  </span>
                  <span className="text-xs text-slate-600 font-semibold tracking-wide uppercase">
                    Pan-India Branch Network
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              {/* Main Luxury Beveled Card */}
              <div className="relative rounded-[30px] overflow-hidden bg-white p-2 sm:p-2.5 border border-slate-200 shadow-xl group transition-all duration-300 hover:border-[#6797D6]/50">
                {/* Cinematic Image Frame with Bezel */}
                <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-slate-900">
                  <img
                    src="/locations/varanasi-headquarters.jpg"
                    alt="M B Gabhawala & Co. Firm Headquarters Senior Partner Chambers - Varanasi, UP"
                    className="w-full h-full object-cover object-top sm:object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Refined Vignette Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />

                  {/* Top Floating Badges */}
                  <div className="absolute top-3.5 inset-x-3.5 flex items-center justify-between z-10">
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md text-white border border-white/20 text-xs font-mono font-bold uppercase tracking-wider shadow-lg">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Firm Headquarters • Varanasi</span>
                    </span>
                    <span className="text-xs font-mono font-bold text-white bg-[#1e3a8a]/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-blue-300/30 shadow-lg">
                      Estd. 1975
                    </span>
                  </div>
                </div>

                {/* Overlaid Partner Leadership & Headquarters Console */}
                <div className="relative -mt-10 sm:-mt-12 mx-2 sm:mx-3 mb-2 p-4 sm:p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200 shadow-2xl z-10 space-y-3">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl overflow-hidden border-2 border-[#1e3a8a] shadow-md shrink-0 bg-slate-100 ring-2 ring-blue-100">
                        <img
                          key={currentConsolePartner.image}
                          src={currentConsolePartner.image}
                          alt={currentConsolePartner.name}
                          className="w-full h-full object-cover object-top transition-all duration-500"
                        />
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight leading-tight truncate">
                          {currentConsolePartner.name}
                        </h4>
                        <p className="text-[11px] font-mono font-bold text-[#1e3a8a] uppercase tracking-wider mt-0.5 truncate">
                          {currentConsolePartner.city === "Varanasi"
                            ? "Varanasi Headquarters"
                            : `${currentConsolePartner.city} Branch`}
                        </p>
                      </div>
                    </div>

                    {currentConsolePartner.phone && (
                      <a
                        href={`tel:${currentConsolePartner.phone.replace(/\s+/g, "")}`}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-50 hover:bg-[#1e3a8a] hover:text-white border border-blue-200 text-[#1e3a8a] font-bold text-xs transition-colors shadow-sm shrink-0"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>Direct</span>
                      </a>
                    )}
                  </div>

                  <div className="pt-2.5 border-t border-slate-100 flex items-start gap-2.5 text-xs text-slate-600 font-medium leading-relaxed">
                    <MapPin className="w-3.5 h-3.5 text-[#1e3a8a] shrink-0 mt-0.5" />
                    <span className="line-clamp-2">
                      {currentConsolePartner.address}
                    </span>
                  </div>

                  {/* Partner Progress Dots */}
                  <div className="flex items-center justify-center gap-1.5 pt-1">
                    {siteData.partners.map((p, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActivePartnerConsoleIndex(idx)}
                        aria-label={`View ${p.name}`}
                        className={`h-1.5 rounded-full transition-all duration-300 ${activePartnerConsoleIndex === idx
                            ? "w-6 bg-[#1e3a8a]"
                            : "w-1.5 bg-slate-300 hover:bg-slate-400"
                          }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Nationwide Branch Network Section */}
      <section className="py-18 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-10">
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
        </Container>

        {/* Infinite Smooth Right-to-Left Scrolling Cards with State Landmark Photos */}
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
          <div className="flex gap-4 py-3 animate-marquee-scroll">
            {[
              ...culturalBranchesData,
              ...culturalBranchesData,
              ...culturalBranchesData,
              ...culturalBranchesData,
            ].map((branch, idx) => {
              return (
                <div
                  key={idx}
                  className="w-60 sm:w-68 shrink-0 p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-[#1e3a8a] text-center shadow-sm transition-all duration-300 group hover:-translate-y-2 cursor-pointer hover:shadow-xl relative overflow-hidden"
                >
                  {/* Animated Top Specular Accent on Hover */}
                  <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#38bdf8] to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-20" />

                  {/* Top State Identification Badge */}
                  <div className="flex items-center justify-between mb-3.5 px-0.5">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#1e3a8a] text-[11px] font-extrabold uppercase tracking-wider font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1e3a8a] animate-pulse" />
                      <span>{branch.state}</span>
                    </span>
                    <span className="text-[10px] font-mono font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200/80">
                      {branch.stateCode}
                    </span>
                  </div>

                  {/* Prominent Cultural Landmark Real Photographic Image */}
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-2xl overflow-hidden mb-3.5 border-2 border-white shadow-[0_8px_20px_-4px_rgba(30,58,138,0.2)] group-hover:scale-105 group-hover:shadow-[0_12px_28px_-4px_rgba(30,58,138,0.35)] transition-all duration-300 bg-slate-100 ring-2 ring-slate-100 group-hover:ring-[#1e3a8a]/40">
                    <img
                      src={branch.image}
                      alt={`${branch.city}, ${branch.state} - ${branch.landmark}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-115"
                      loading="lazy"
                    />
                    {/* Subtle Corner State Seal Tag */}
                    <span className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded bg-black/60 backdrop-blur-sm text-[9px] font-mono font-bold text-white uppercase tracking-wider">
                      {branch.stateCode}
                    </span>
                  </div>

                  {/* City Name */}
                  <h4 className="text-lg font-black text-slate-900 group-hover:text-[#1e3a8a] transition-colors tracking-tight">
                    {branch.city}
                  </h4>

                  {/* State Name */}
                  <p className="text-xs text-[#1e3a8a] font-bold mt-0.5">
                    {branch.state}
                  </p>

                  {/* Cultural Landmark Caption */}
                  <p className="text-[11px] text-slate-500 font-medium mt-1 line-clamp-1 italic">
                    {branch.landmark}
                  </p>

                  {/* Office Role Footer */}
                  <div className="mt-3.5 pt-2.5 border-t border-slate-100 flex items-center justify-center">
                    <span
                      className={`inline-block px-3 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase font-mono ${branch.role === "Headquarters"
                        ? "bg-[#1e3a8a] text-white shadow-sm"
                        : "bg-slate-50 border border-slate-200 text-slate-600 group-hover:text-[#1e3a8a] group-hover:bg-blue-50 transition-colors"
                        }`}
                    >
                      {branch.role}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
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
            {standardsData.map((item, index) => (
              <AboutStandard3DCard key={item.title} item={item} index={index} />
            ))}
          </div>
        </Container>
      </section>

      {/* Senior Leadership & Partners Lineup */}
      <section id="leadership" className="py-20 sm:py-28 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
        <Container>
          <SectionHeading
            eyebrow="Firm Leadership"
            title="Partners & Practice"
            highlight="Directors"
            description="Our leadership brings together seasoned Chartered Accountants and jurists with specialized mastery in direct & indirect tax, audits, NRI compliance, and appellate litigation across India."
          />

          {/* Branch Location Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12 sm:mb-14">
            {partnerFilterOptions.map((city) => (
              <button
                key={city}
                onClick={() => setSelectedPartnerCity(city)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${selectedPartnerCity === city
                    ? "bg-[#1e3a8a] text-white shadow-md shadow-[#1e3a8a]/25"
                    : "bg-white text-slate-700 hover:text-slate-900 border border-slate-300 shadow-sm"
                  }`}
              >
                {city === "All" ? "All 7 Partners" : city}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPartners.map((partner, index) => (
              <div
                key={index}
                className="relative rounded-3xl p-6 sm:p-7 bg-white border border-slate-200 shadow-md hover:border-[#1e3a8a] transition-all duration-300 group flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl overflow-hidden"
              >
                <div>
                  {/* Portrait Frame: 1:1 Aspect Ratio with Full Headroom & Zero Cropping */}
                  <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/90 shadow-inner mb-5 group/img">
                    {partner.image ? (
                      <img
                        src={partner.image}
                        alt={partner.name}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-tr from-[#1e3a8a] to-[#355094] flex items-center justify-center text-white font-bold text-4xl shadow-inner">
                        {partner.name
                          .replace("CA", "")
                          .trim()
                          .split(" ")
                          .slice(0, 2)
                          .map((n) => n[0])
                          .join("")}
                      </div>
                    )}

                    {/* Floating Badges */}
                    <div className="absolute top-3 inset-x-3 flex items-center justify-between z-10 pointer-events-none">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-white border border-white/20 text-[11px] font-mono font-bold uppercase tracking-wider shadow">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span>{partner.city || "Partner"}</span>
                      </span>
                      <span className="text-[10px] font-mono font-bold text-white bg-[#1e3a8a]/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-blue-300/30 shadow">
                        {partner.qualification.includes("FCA") && partner.qualification.includes("DISA")
                          ? "FCA • DISA"
                          : partner.qualification.includes("FCA")
                            ? "FCA"
                            : "ACA"}
                      </span>
                    </div>
                  </div>

                  {/* Partner Identity & Titles */}
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-[#1e3a8a] transition-colors leading-tight">
                    {partner.name}
                  </h3>
                  <p className="text-xs font-bold text-[#1e3a8a] uppercase tracking-wider mt-1 font-mono">
                    {partner.role}
                  </p>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">
                    {partner.qualification}
                  </p>

                  {/* Direct Phone Link */}
                  {partner.phone && (
                    <a
                      href={`tel:${partner.phone.replace(/\s+/g, "")}`}
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#1e3a8a] hover:text-white hover:bg-[#1e3a8a] mt-3.5 px-3.5 py-2 rounded-xl bg-blue-50/80 border border-blue-200/80 transition-all duration-200 shadow-sm w-full group/btn"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#1e3a8a] group-hover/btn:text-white transition-colors" />
                      <span>Direct Dial: {partner.phone}</span>
                    </a>
                  )}

                  {/* Office Address Card */}
                  {partner.address && (
                    <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed font-medium">
                      <MapPin className="w-3.5 h-3.5 text-[#1e3a8a] shrink-0 mt-0.5" />
                      <span>{partner.address}</span>
                    </div>
                  )}

                  {/* Biography */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-4 font-normal">
                    {partner.bio}
                  </p>

                  {/* Specializations Tags */}
                  <div className="mt-5 space-y-1.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block font-mono">
                      Practice Disciplines & Mastery:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {partner.specialization.map((spec, i) => (
                        <span
                          key={i}
                          className="text-xs px-2.5 py-1 rounded-lg bg-blue-50 border border-blue-200 text-[#1e3a8a] font-medium"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Highlights / Achievements */}
                  {partner.achievements && partner.achievements.length > 0 && (
                    <div className="mt-5 pt-4 border-t border-slate-100 space-y-1.5">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block font-mono">
                        Key Credentials & Roles:
                      </span>
                      <ul className="space-y-1.5">
                        {partner.achievements.map((ach, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-xs text-slate-600 leading-relaxed"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#1e3a8a] shrink-0 mt-0.5" />
                            <span>{ach}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Card Action Footer */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="font-mono text-slate-400 text-[11px]">M B GABHAWALA & CO.</span>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1e3a8a] hover:text-[#172554] hover:underline"
                  >
                    <span>Consult Partner</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
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
