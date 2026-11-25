import React, { useState, useRef, useEffect } from "react";
import { Phone, X } from "lucide-react";
import { siteData } from "../../data/siteData";

export const FloatingActions: React.FC = () => {
  const [callMenuOpen, setCallMenuOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setCallMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3.5 pointer-events-auto">
      {/* Dual Number Direct Dial Menu */}
      {callMenuOpen && (
        <div className="bg-white/95 backdrop-blur-2xl border border-slate-200/90 shadow-2xl rounded-2xl p-4 w-72 sm:w-80 animate-in fade-in slide-in-from-bottom-3 duration-200 mb-1 space-y-2.5">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#1e3a8a] font-mono">
                Direct Partner Lines
              </span>
            </div>
            <button
              onClick={() => setCallMenuOpen(false)}
              className="text-slate-400 hover:text-slate-600 p-0.5 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Close call options"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-2">
            {/* Number 1: Varanasi Headquarters */}
            <a
              href="tel:+919839059940"
              onClick={() => setCallMenuOpen(false)}
              className="flex items-center gap-3 p-2.5 rounded-xl bg-blue-50/70 hover:bg-[#1e3a8a] text-slate-800 hover:text-white border border-blue-200/70 transition-all group"
            >
              <div className="w-9 h-9 rounded-xl bg-[#1e3a8a] group-hover:bg-white text-white group-hover:text-[#1e3a8a] flex items-center justify-center shrink-0 transition-colors shadow-sm">
                <Phone className="w-4 h-4" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-[10px] font-mono uppercase tracking-wider font-bold block text-slate-500 group-hover:text-blue-200">
                  Varanasi (Headquarters)
                </span>
                <span className="text-sm font-bold block tracking-tight">
                  +91 98390 59940
                </span>
              </div>
            </a>

            {/* Number 2: Kolkata Chambers */}
            <a
              href="tel:+919681606280"
              onClick={() => setCallMenuOpen(false)}
              className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 hover:bg-[#1e3a8a] text-slate-800 hover:text-white border border-slate-200/80 transition-all group"
            >
              <div className="w-9 h-9 rounded-xl bg-slate-800 group-hover:bg-white text-white group-hover:text-[#1e3a8a] flex items-center justify-center shrink-0 transition-colors shadow-sm">
                <Phone className="w-4 h-4" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-[10px] font-mono uppercase tracking-wider font-bold block text-slate-500 group-hover:text-blue-200">
                  Kolkata (Corporate Chambers)
                </span>
                <span className="text-sm font-bold block tracking-tight">
                  +91 96816 06280
                </span>
              </div>
            </a>
          </div>
        </div>
      )}

      {/* WhatsApp Floating Button with Luxury Pulse and Glass Effects */}
      <a
        href={siteData.contact.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with M B Gabhawala & Co. on WhatsApp"
        className="group relative w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center bg-gradient-to-b from-[#2be671] via-[#25D366] to-[#128C7E] text-white border border-emerald-300/40 border-t-white/90 shadow-[inset_0_1.5px_2px_rgba(255,255,255,0.8),0_10px_25px_rgba(34,197,94,0.5),0_0_20px_rgba(37,211,102,0.35)] transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
      >
        {/* Radar Pulse Wave Effect */}
        <span className="absolute inset-0 rounded-full bg-emerald-400/40 animate-ping pointer-events-none opacity-40 duration-1000" />

        {/* Top-half Glossy Specular Reflection */}
        <div className="absolute top-0 left-0 right-0 h-[48%] bg-gradient-to-b from-white/45 via-white/15 to-transparent rounded-t-full pointer-events-none" />

        {/* Authentic WhatsApp SVG Icon */}
        <svg
          className="w-6 h-6 sm:w-7 sm:h-7 fill-current relative z-10 drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)] group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>

        {/* Sleek Slide-out Tooltip on Desktop Hover */}
        <span className="hidden lg:block absolute right-16 px-3 py-1.5 rounded-xl bg-slate-900/90 text-white text-xs font-semibold whitespace-nowrap border border-white/20 shadow-2xl backdrop-blur-xl opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none">
          WhatsApp Direct
        </span>
      </a>

      {/* Floating Call Button with 2 Direct Numbers */}
      <div className="relative group">
        <button
          type="button"
          onClick={() => setCallMenuOpen(!callMenuOpen)}
          aria-label="Call M B Gabhawala & Co. Direct Lines"
          className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center bg-gradient-to-r from-[#172554] via-[#1e3a8a] to-[#2563eb] hover:from-[#0f172a] hover:to-[#172554] text-white border border-sky-300/40 border-t-white/90 shadow-[inset_0_1.5px_2px_rgba(255,255,255,0.8),0_10px_25px_rgba(30,58,138,0.5),0_0_20px_rgba(37,99,235,0.35)] transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
        >
          {/* Ambient Ring Pulse Wave Effect */}
          <span className="absolute inset-0 rounded-full bg-sky-400/35 animate-ping pointer-events-none opacity-40 duration-1000 delay-300" />

          {/* Top-half Glossy Specular Reflection */}
          <div className="absolute top-0 left-0 right-0 h-[48%] bg-gradient-to-b from-white/45 via-white/15 to-transparent rounded-t-full pointer-events-none" />

          {/* Phone Icon */}
          <Phone className="w-5 h-5 sm:w-6 sm:h-6 fill-white relative z-10 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)] group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300" />

          {/* Dual Line Indicator Badge */}
          <span className="absolute -top-1 -left-1 w-5 h-5 rounded-full bg-emerald-500 text-white font-bold text-[10px] flex items-center justify-center border-2 border-white shadow-md z-20">
            2
          </span>
        </button>

        {/* Sleek Slide-out Tooltip on Desktop Hover */}
        {!callMenuOpen && (
          <span className="hidden lg:block absolute right-16 top-3 px-3 py-1.5 rounded-xl bg-slate-900/90 text-white text-xs font-semibold whitespace-nowrap border border-white/20 shadow-2xl backdrop-blur-xl opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none">
            Call Partners (2 Lines)
          </span>
        )}
      </div>
    </div>
  );
};
