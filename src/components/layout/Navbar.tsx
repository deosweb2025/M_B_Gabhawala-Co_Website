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
} from "lucide-react";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const serviceIcons: Record<string, React.ReactNode> = {
    advisory: <Compass className="w-4 h-4 text-blue-400" />,
    litigation: <Scale className="w-4 h-4 text-blue-400" />,
    compliance: <CheckCircle className="w-4 h-4 text-blue-400" />,
    "due-diligence": <FileCheck className="w-4 h-4 text-blue-400" />,
    "erp-integration": <Cpu className="w-4 h-4 text-blue-400" />,
    retainership: <Briefcase className="w-4 h-4 text-blue-400" />,
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
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-gradient-to-b from-slate-900/92 via-slate-900/80 to-slate-950/90 backdrop-blur-2xl border-b border-white/15 shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_15px_35px_-5px_rgba(0,0,0,0.6)] py-3"
          : "bg-gradient-to-b from-slate-900/82 via-slate-900/65 to-slate-950/75 backdrop-blur-xl border-b border-white/12 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_10px_25px_-5px_rgba(0,0,0,0.4)] py-3.5 sm:py-4"
      }`}
    >
      {/* Specular top light line */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white p-1 flex items-center justify-center shadow-lg shadow-blue-500/15 ring-1 ring-white/30 border border-slate-200 group-hover:ring-blue-400/60 group-hover:scale-105 transition-all duration-300 shrink-0">
              <img
                src="/logo.svg"
                alt="CA India Logo - M B Gabhawala & Co."
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg sm:text-xl text-white tracking-tight group-hover:text-blue-300 transition-colors">
                M B GABHAWALA & CO.
              </span>
              <span className="text-[10px] sm:text-xs text-blue-400 tracking-widest uppercase font-semibold flex items-center gap-1.5">
                <span>Chartered Accountants</span>
                <span className="w-1 h-1 rounded-full bg-blue-400/60" />
                <span>~Since 1975</span>
              </span>
            </div>
          </Link>

          {/* Luxury Glossy Floating Pill Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-gradient-to-b from-white/[0.12] to-white/[0.04] p-1.5 rounded-full border border-white/20 border-t-white/40 backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_10px_20px_-5px_rgba(0,0,0,0.4)]">
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
                            ? "btn-glossy-primary text-white shadow-md shadow-blue-600/35 border-t border-white/40"
                            : "text-slate-300 hover:text-white hover:bg-white/[0.1]"
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
                            ? "btn-glossy-primary text-white shadow-md shadow-blue-600/35 border-t border-white/40"
                            : "text-slate-400 hover:text-white hover:bg-white/[0.1]"
                        }`}
                      >
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            servicesDropdownOpen ? "rotate-180 text-blue-200" : ""
                          }`}
                        />
                      </button>
                    </div>

                    {/* Luxury Floating Services Dropdown Menu */}
                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-80 sm:w-96 bg-slate-900/95 backdrop-blur-2xl rounded-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),inset_0_1px_1px_rgba(255,255,255,0.25)] border border-white/18 border-t-white/40 p-3.5 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                        <div className="px-3 py-2 border-b border-white/10 mb-2 flex items-center justify-between">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-blue-400">
                            Practice Areas & Services
                          </span>
                          <span className="text-[10px] text-slate-400 font-medium">
                            Kolkata & Pan-India
                          </span>
                        </div>

                        <div className="space-y-1">
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.id}
                              to={subItem.path}
                              onClick={() => setServicesDropdownOpen(false)}
                              className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/[0.1] transition-all group/sub"
                            >
                              <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-400/30 text-blue-300 flex items-center justify-center shrink-0 mt-0.5 group-hover/sub:bg-blue-600 group-hover/sub:text-white transition-all shadow-sm">
                                {serviceIcons[subItem.id] || <Compass className="w-4 h-4 text-blue-400" />}
                              </div>
                              <div className="flex-1">
                                <span className="text-sm font-semibold text-white group-hover/sub:text-blue-300 transition-colors block">
                                  {subItem.name}
                                </span>
                                <span className="text-xs text-slate-400 line-clamp-1">
                                  {subItem.desc}
                                </span>
                              </div>
                            </Link>
                          ))}
                        </div>

                        <div className="mt-2 pt-2 border-t border-white/10 px-2">
                          <Link
                            to="/services"
                            onClick={() => setServicesDropdownOpen(false)}
                            className="flex items-center justify-between text-xs font-semibold text-blue-400 hover:text-blue-300 py-1 transition-colors"
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
                      ? "btn-glossy-primary text-white shadow-md shadow-blue-600/35 border-t border-white/40"
                      : "text-slate-300 hover:text-white hover:bg-white/[0.1]"
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
              className="relative group overflow-hidden inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 hover:from-blue-500 hover:via-sky-400 hover:to-indigo-500 text-white text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 border border-blue-400/50 border-t-white/80 shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.7),0_10px_25px_-5px_rgba(37,99,235,0.5),0_0_20px_rgba(56,189,248,0.35)] hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_15px_30px_-5px_rgba(37,99,235,0.65)] hover:-translate-y-0.5 cursor-pointer"
            >
              <div className="absolute top-0 left-0 right-0 h-[48%] bg-gradient-to-b from-white/35 via-white/15 to-transparent rounded-t-full pointer-events-none" />
              <span className="relative z-10 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">Consult Partners</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-blue-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform relative z-10" />
            </Link>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-xl text-slate-300 hover:text-white bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu - Dark Luxury Glass */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/98 backdrop-blur-2xl border-b border-white/10 px-4 pt-4 pb-6 mt-3 space-y-3 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-1">
            {siteData.navigation.map((item) => {
              const isActive = location.pathname === item.path;

              if (item.subItems && item.subItems.length > 0) {
                return (
                  <div key={item.name} className="flex flex-col">
                    <div
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                        isActive
                          ? "bg-blue-600/20 text-blue-300 border-l-4 border-blue-500"
                          : "text-slate-300 hover:bg-white/[0.06] hover:text-white"
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
                        className="p-1 text-slate-400 hover:text-blue-400"
                      >
                        <ChevronDown
                          className={`w-5 h-5 transition-transform duration-200 ${
                            mobileServicesOpen ? "rotate-180 text-blue-400" : ""
                          }`}
                        />
                      </button>
                    </div>

                    {/* Sub-Items Accordion in Mobile */}
                    {mobileServicesOpen && (
                      <div className="pl-6 pr-2 py-2 space-y-1 bg-slate-900/60 rounded-xl my-1 border-l-2 border-blue-500/40">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.id}
                            to={subItem.path}
                            onClick={() => {
                              setMobileMenuOpen(false);
                              setMobileServicesOpen(false);
                            }}
                            className="block py-2 px-3 text-sm font-medium text-slate-300 hover:text-blue-300 hover:bg-white/[0.05] rounded-lg transition-colors"
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
                      ? "bg-blue-600/20 text-blue-300 border-l-4 border-blue-500"
                      : "text-slate-300 hover:bg-white/[0.06] hover:text-white"
                  }`}
                >
                  <span>{item.name}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-blue-400"></span>}
                </Link>
              );
            })}
          </nav>

          <div className="pt-4 border-t border-white/10 space-y-3">
            <a
              href={`tel:${siteData.contact.primaryPhone}`}
              className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-slate-200 text-sm font-medium"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <Phone className="w-4 h-4 text-blue-400" />
              <span>Call Us: {siteData.contact.primaryPhoneDisplay}</span>
            </a>

            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="relative group overflow-hidden w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 hover:from-blue-500 hover:via-sky-400 hover:to-indigo-500 text-white font-bold text-sm border border-blue-400/50 border-t-white/80 shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.7),0_10px_25px_-5px_rgba(37,99,235,0.4)]"
            >
              <div className="absolute top-0 left-0 right-0 h-[48%] bg-gradient-to-b from-white/35 via-white/15 to-transparent rounded-t-xl pointer-events-none" />
              <span className="relative z-10 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">Schedule Partner Consultation</span>
              <ArrowUpRight className="w-4 h-4 text-blue-100 relative z-10" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
