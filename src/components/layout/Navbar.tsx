import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { siteData } from "../../data/siteData";
import {
  Phone,
  Mail,
  Menu,
  X,
  ArrowUpRight,
  ChevronDown,
  Compass,
  Scale,
  CheckCircle,
  FileCheck,
  Cpu,
  Briefcase,
  ArrowRight,
  MapPin,
} from "lucide-react";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const serviceIcons: Record<string, React.ReactNode> = {
    advisory: <Compass className="w-4 h-4 text-[#355094]" />,
    litigation: <Scale className="w-4 h-4 text-[#355094]" />,
    compliance: <CheckCircle className="w-4 h-4 text-[#355094]" />,
    "due-diligence": <FileCheck className="w-4 h-4 text-[#355094]" />,
    "erp-integration": <Cpu className="w-4 h-4 text-[#355094]" />,
    retainership: <Briefcase className="w-4 h-4 text-[#355094]" />,
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    const timer = setTimeout(() => {
      setMobileMenuOpen(false);
      setServicesDropdownOpen(false);
    }, 0);
    return () => clearTimeout(timer);
  }, [location.pathname, location.search]);

  // Click outside listener for dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300">
      {/* Signature Corporate Dual-Color Ribbon (Navy Blue & Sky Accent with White Divider) */}
      <div className="w-full text-white text-xs font-medium border-t-2 border-[#172554] bg-[#1e3a8a] hidden sm:block overflow-hidden">
        <div className="flex items-center h-8">
          {/* Left Navy Blue Strip */}
          <div className="bg-[#1e3a8a] h-full flex items-center px-4 sm:px-8 gap-5 flex-1 justify-start">
            <a href={`mailto:${siteData.contact.primaryEmail}`} className="flex items-center gap-1.5 hover:text-sky-200 transition-colors">
              <Mail className="w-3.5 h-3.5 text-sky-200" />
              <span>{siteData.contact.primaryEmail}</span>
            </a>
            <span className="text-white/40">•</span>
            <a href={`tel:${siteData.contact.primaryPhone}`} className="flex items-center gap-1.5 hover:text-sky-200 transition-colors">
              <Phone className="w-3.5 h-3.5 text-sky-200" />
              <span>{siteData.contact.primaryPhoneDisplay}</span>
            </a>
          </div>

          {/* Seamless Pixel-Perfect Diagonal White Divider (Zero Artifacts / Zero Subpixel Bleed) */}
          <div className="h-8 w-6 shrink-0 relative">
            <svg className="w-full h-full block" viewBox="0 0 24 32" preserveAspectRatio="none">
              <polygon points="-1,-1 16,-1 6,33 -1,33" fill="#1e3a8a" />
              <polygon points="16,-1 25,-1 25,33 6,33" fill="#2563eb" />
              <line x1="16" y1="-1" x2="6" y2="33" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="square" />
            </svg>
          </div>

          {/* Right Cerulean Strip */}
          <div className="bg-[#2563eb] h-full flex items-center px-4 sm:px-8 gap-2 text-white text-[11px] justify-end font-semibold">
            <MapPin className="w-3 h-3 text-white/90" />
            <span>Kolkata Chambers • AS/361/11-12 Loknath Park, Chinar Park</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar (Clean Corporate Light Mode) */}
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-md py-2.5"
            : "bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm py-3 sm:py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo & Brand Identity */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white p-1 flex items-center justify-center shadow-md shadow-blue-900/10 border border-slate-200 group-hover:border-[#355094] group-hover:scale-105 transition-all duration-300 shrink-0">
                <img
                  src="/logo.svg"
                  alt="CA India Logo - M B Gabhawala & Co."
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg sm:text-xl text-[#1e3a8a] tracking-tight group-hover:text-[#355094] transition-colors">
                  M B GABHAWALA & CO.
                </span>
                <span className="text-[10px] sm:text-xs text-[#355094] tracking-wider uppercase font-bold flex items-center gap-1.5">
                  <span>Chartered Accountants</span>
                  <span className="w-1 h-1 rounded-full bg-[#6797D6]" />
                  <span>~Since 1975</span>
                </span>
              </div>
            </Link>

            {/* Navigation Pills (Clean Corporate Slate & Royal Blue) */}
            <nav className="hidden lg:flex items-center gap-1 bg-slate-100/90 p-1.5 rounded-full border border-slate-200 shadow-inner">
              {siteData.navigation.map((item) => {
                const isActive = location.pathname === item.path;

                // Check if item has dropdown sub-items (Services)
                if (item.subItems && item.subItems.length > 0) {
                  return (
                    <div
                      key={item.name}
                      ref={dropdownRef}
                      className="relative"
                      onMouseEnter={() => setServicesDropdownOpen(true)}
                      onMouseLeave={() => setServicesDropdownOpen(false)}
                    >
                      <div className="flex items-center">
                        <Link
                          to={item.path}
                          className={`pl-3.5 pr-1 py-1.5 rounded-l-full text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-1 ${
                            isActive
                              ? "bg-[#1e3a8a] text-white shadow-sm"
                              : "text-slate-700 hover:text-[#1e3a8a] hover:bg-white"
                          }`}
                        >
                          <span>{item.name}</span>
                        </Link>

                        {/* Clickable Arrow Button for Sub-Services Dropdown */}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setServicesDropdownOpen(!servicesDropdownOpen);
                          }}
                          aria-label="Toggle services navigation menu"
                          className={`pr-2.5 pl-1 py-1.5 rounded-r-full transition-colors focus:outline-none ${
                            isActive
                              ? "bg-[#1e3a8a] text-white shadow-sm"
                              : "text-slate-500 hover:text-[#1e3a8a] hover:bg-white"
                          }`}
                        >
                          <ChevronDown
                            className={`w-3.5 h-3.5 transition-transform duration-200 ${
                              servicesDropdownOpen ? "rotate-180 text-white" : ""
                            }`}
                          />
                        </button>
                      </div>

                      {/* Floating Services Dropdown Menu */}
                      {servicesDropdownOpen && (
                        <div className="absolute top-full left-0 mt-2 w-80 sm:w-96 bg-white rounded-2xl shadow-xl border border-slate-200 p-3.5 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                          <div className="px-3 py-2 border-b border-slate-100 mb-2 flex items-center justify-between">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-[#1e3a8a]">
                              Practice Areas & Services
                            </span>
                            <span className="text-[10px] text-slate-500 font-medium">
                              Kolkata & Pan-India
                            </span>
                          </div>

                          <div className="space-y-1">
                            {item.subItems.map((subItem) => (
                              <Link
                                key={subItem.id}
                                to={subItem.path}
                                onClick={() => setServicesDropdownOpen(false)}
                                className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-all group/sub"
                              >
                                <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 text-[#1e3a8a] flex items-center justify-center shrink-0 mt-0.5 group-hover/sub:bg-[#1e3a8a] group-hover/sub:text-white transition-all shadow-sm">
                                  {serviceIcons[subItem.id] || <Compass className="w-4 h-4 text-[#1e3a8a]" />}
                                </div>
                                <div className="flex-1">
                                  <span className="text-sm font-semibold text-slate-900 group-hover/sub:text-[#1e3a8a] transition-colors block">
                                    {subItem.name}
                                  </span>
                                  <span className="text-xs text-slate-500 line-clamp-1">
                                    {subItem.desc}
                                  </span>
                                </div>
                              </Link>
                            ))}
                          </div>

                          <div className="mt-2 pt-2 border-t border-slate-100 px-2">
                            <Link
                              to="/services"
                              onClick={() => setServicesDropdownOpen(false)}
                              className="flex items-center justify-between text-xs font-semibold text-[#1e3a8a] hover:text-[#2563eb] py-1 transition-colors"
                            >
                              <span>Explore All Practice Areas</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                      isActive
                        ? "bg-[#1e3a8a] text-white shadow-sm"
                        : "text-slate-700 hover:text-[#1e3a8a] hover:bg-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            {/* Direct Consultation Action */}
            <div className="hidden sm:flex items-center gap-3">
              <Link
                to="/contact"
                className="relative group overflow-hidden inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#172554] via-[#1e3a8a] to-[#2563eb] hover:from-[#0f172a] hover:to-[#172554] text-white text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 shadow-md shadow-[#1e3a8a]/20 hover:shadow-lg hover:shadow-[#1e3a8a]/35 hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Consult Partners</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>

            {/* Mobile Menu Hamburger */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                className="p-2 rounded-xl text-slate-800 hover:bg-slate-100 bg-slate-50 border border-slate-200 focus:outline-none"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu (Clean White & Slate) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-2xl border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-1">
            {siteData.navigation.map((item) => {
              const isActive = location.pathname === item.path;

              if (item.subItems && item.subItems.length > 0) {
                return (
                  <div key={item.name} className="flex flex-col">
                    <div
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                        isActive
                          ? "bg-blue-50 text-[#1e3a8a] border-l-4 border-[#355094]"
                          : "text-slate-800 hover:bg-slate-50"
                      }`}
                    >
                      <Link
                        to={item.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex-1"
                      >
                        {item.name}
                      </Link>
                      <button
                        type="button"
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        aria-label="Toggle mobile services submenu"
                        className="p-1 text-slate-500 hover:text-[#355094]"
                      >
                        <ChevronDown
                          className={`w-5 h-5 transition-transform duration-200 ${
                            mobileServicesOpen ? "rotate-180 text-[#355094]" : ""
                          }`}
                        />
                      </button>
                    </div>

                    {/* Sub-Items Accordion in Mobile */}
                    {mobileServicesOpen && (
                      <div className="pl-6 pr-2 py-2 space-y-1 bg-slate-50 rounded-xl my-1 border-l-2 border-[#355094]">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.id}
                            to={subItem.path}
                            onClick={() => {
                              setMobileMenuOpen(false);
                              setMobileServicesOpen(false);
                            }}
                            className="block py-2 px-3 text-sm font-medium text-slate-700 hover:text-[#1e3a8a] hover:bg-white rounded-lg transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-base font-semibold flex items-center justify-between transition-colors ${
                    isActive
                      ? "bg-blue-50 text-[#1e3a8a] border-l-4 border-[#355094]"
                      : "text-slate-800 hover:bg-slate-50"
                  }`}
                >
                  <span>{item.name}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#355094]"></span>}
                </Link>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-slate-100 space-y-2.5">
            <a
              href={`tel:${siteData.contact.primaryPhone}`}
              className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm font-medium"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <Phone className="w-4 h-4 text-[#355094]" />
              <span>Call Us: {siteData.contact.primaryPhoneDisplay}</span>
            </a>

            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#1e3a8a] to-[#355094] text-white font-bold text-sm shadow-md"
            >
              <span>Schedule Partner Consultation</span>
              <ArrowUpRight className="w-4 h-4 text-white" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
