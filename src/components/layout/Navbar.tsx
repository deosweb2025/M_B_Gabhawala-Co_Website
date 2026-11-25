import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { siteData } from "../../data/siteData";
import {
  Phone,
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
  FileSpreadsheet,
  Globe,
  Landmark,
  ShieldCheck,
  FileText,
} from "lucide-react";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const renderNavIcon = (id: string) => {
    switch (id) {
      case "audit-reviews":
      case "audit-assurance":
        return <ShieldCheck className="w-4 h-4 text-current" />;
      case "accounting":
        return <FileSpreadsheet className="w-4 h-4 text-current" />;
      case "mergers-acquisitions":
      case "retainership":
        return <Briefcase className="w-4 h-4 text-current" />;
      case "direct-tax":
        return <FileText className="w-4 h-4 text-current" />;
      case "indirect-tax":
      case "advisory":
        return <Compass className="w-4 h-4 text-current" />;
      case "companies-act":
      case "fcra-registration":
        return <Landmark className="w-4 h-4 text-current" />;
      case "project-reports-funding":
      case "due-diligence":
        return <FileCheck className="w-4 h-4 text-current" />;
      case "other-laws":
      case "litigation":
        return <Scale className="w-4 h-4 text-current" />;
      case "nri-tax-services":
        return <Globe className="w-4 h-4 text-current" />;
      case "compliance":
        return <CheckCircle className="w-4 h-4 text-current" />;
      case "erp-integration":
        return <Cpu className="w-4 h-4 text-current" />;
      default:
        return <Scale className="w-4 h-4 text-current" />;
    }
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
                        <div className="absolute top-full left-0 mt-2 w-80 sm:w-[410px] bg-white rounded-2xl shadow-2xl border border-slate-200/90 p-3.5 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                          <div className="px-3 py-2 border-b border-slate-100 mb-2.5 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-[#1e3a8a] animate-pulse" />
                              <span className="text-[11px] font-bold uppercase tracking-wider text-[#1e3a8a]">
                                Practice Areas & Services
                              </span>
                            </div>
                            <span className="text-[10px] text-slate-500 font-semibold">
                              Varanasi HQ • Pan-India
                            </span>
                          </div>

                          {/* Scrollable menu displaying 5 options initially, scrolling for the rest */}
                          <div className="space-y-1.5 max-h-[330px] overflow-y-auto pr-1.5 menu-scrollbar">
                            {item.subItems.map((subItem) => {
                              const isHighlighted = (subItem as any).highlight;
                              const badgeText = (subItem as any).badge;

                              return (
                                <Link
                                  key={subItem.id}
                                  to={subItem.path}
                                  onClick={() => setServicesDropdownOpen(false)}
                                  className={`flex items-start gap-3 p-2.5 rounded-xl transition-all group/sub relative ${
                                    isHighlighted
                                      ? "bg-gradient-to-r from-blue-50/80 via-blue-50/30 to-transparent hover:from-blue-100/80 hover:to-blue-50/50 border border-blue-100/90 hover:border-blue-200 shadow-[0_1px_2px_rgba(30,58,138,0.04)]"
                                      : "hover:bg-slate-50 border border-transparent"
                                  }`}
                                >
                                  <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 text-[#1e3a8a] flex items-center justify-center shrink-0 mt-0.5 group-hover/sub:bg-[#1e3a8a] group-hover/sub:text-white transition-all shadow-sm">
                                    {renderNavIcon(subItem.id)}
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between gap-1 mb-0.5">
                                      <span className="text-xs sm:text-[13px] font-bold text-slate-900 group-hover/sub:text-[#1e3a8a] transition-colors truncate">
                                        {subItem.name}
                                      </span>
                                      {badgeText && (
                                        <span className="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold uppercase tracking-wider bg-blue-100 text-[#1e3a8a] border border-blue-200 shrink-0">
                                          {badgeText}
                                        </span>
                                      )}
                                    </div>
                                    <span className="text-[11px] text-slate-500 line-clamp-1 group-hover/sub:text-slate-700 transition-colors">
                                      {subItem.desc}
                                    </span>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>

                          <div className="mt-2.5 pt-2.5 border-t border-slate-100 px-2 flex items-center justify-between">
                            <span className="text-[11px] font-medium text-slate-500">
                              12 Institutional Practice Areas
                            </span>
                            <Link
                              to="/services"
                              onClick={() => setServicesDropdownOpen(false)}
                              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1e3a8a] hover:text-[#2563eb] transition-colors group"
                            >
                              <span>Explore All Practice Areas</span>
                              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
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
                      <div className="pl-4 pr-2 py-2 space-y-1 bg-slate-50 rounded-xl my-1 border-l-2 border-[#1e3a8a] max-h-72 overflow-y-auto menu-scrollbar">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.id}
                            to={subItem.path}
                            onClick={() => {
                              setMobileMenuOpen(false);
                              setMobileServicesOpen(false);
                            }}
                            className="flex items-center justify-between py-2 px-3 text-sm font-medium text-slate-700 hover:text-[#1e3a8a] hover:bg-white rounded-lg transition-colors"
                          >
                            <span className="truncate">{subItem.name}</span>
                            {(subItem as any).badge && (
                              <span className="ml-2 px-1.5 py-0.5 rounded text-[8px] font-mono font-bold uppercase tracking-wider bg-blue-100 text-[#1e3a8a] border border-blue-200 shrink-0">
                                {(subItem as any).badge}
                              </span>
                            )}
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
