import React, { useEffect } from "react";
import { X } from "lucide-react";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title: string;
  category?: string;
  description?: string;
}

export const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onClose,
  imageUrl,
  title,
  category,
  description,
}) => {
  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="image-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-8 animate-in fade-in duration-300"
    >
      {/* High-End Frosted Ambient Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/85 backdrop-blur-xl transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Volumetric Ethereal Blue Glow Behind Modal */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[850px] h-[350px] sm:h-[450px] bg-gradient-to-r from-blue-600/20 via-[#38bdf8]/15 to-indigo-600/20 rounded-full blur-[140px] pointer-events-none z-0" />

      {/* Modal Box Screen Container - Ultra-Luxury Executive Frame */}
      <div className="relative z-10 w-full max-w-5xl max-h-[92vh] rounded-2xl overflow-hidden shadow-[0_30px_90px_-20px_rgba(0,0,0,0.9),0_0_50px_rgba(37,99,235,0.2),inset_0_1px_1px_rgba(255,255,255,0.25)] ring-1 ring-sky-500/20 border border-white/20 bg-gradient-to-b from-[#0e1d38] via-[#091326] to-[#040814] flex flex-col animate-in zoom-in-95 duration-300">
        {/* Animated Top Specular Light Horizon Beam */}
        <div className="absolute top-0 left-0 right-0 h-[2.5px] overflow-hidden pointer-events-none z-30">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-[#38bdf8] via-white to-transparent animate-card-beam" />
        </div>
        <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-sky-300/60 to-transparent pointer-events-none z-30" />

        {/* Top Floating Glass Close Button */}
        <button
          onClick={onClose}
          aria-label="Close image preview"
          className="absolute top-4 right-4 z-30 group p-2.5 rounded-full bg-slate-900/80 hover:bg-gradient-to-r hover:from-[#172554] hover:to-[#2563eb] text-slate-300 hover:text-white border border-white/20 hover:border-sky-300/60 backdrop-blur-md shadow-[0_8px_20px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.3)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer focus:outline-none"
        >
          <X className="w-5 h-5 transition-transform duration-300 group-hover:rotate-90" />
        </button>

        {/* Top-Left High-Definition Status Pill */}
        <div className="absolute top-4 left-4 z-30 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-white/15 backdrop-blur-md shadow-md text-[11px] font-semibold text-slate-300 pointer-events-none">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
          <span>High-Resolution View</span>
        </div>

        {/* High Resolution Photographic Stage with Subtle Cinematic Vignette */}
        <div className="relative flex-1 bg-gradient-to-b from-black/85 via-black/60 to-black/90 overflow-hidden flex items-center justify-center min-h-[300px] sm:min-h-[480px] p-2 sm:p-5">
          {/* Subtle Radial Vignette Background */}
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(0,0,0,0.7)_100%)] z-10" />

          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full max-h-[68vh] object-contain select-none drop-shadow-[0_15px_30px_rgba(0,0,0,0.85)] relative z-0 transition-transform duration-500"
          />
        </div>

        {/* Modal Info Footer Command Dock */}
        <div className="relative p-5 sm:p-6 bg-gradient-to-r from-[#091427]/98 via-[#0b1b36] to-[#060e1d]/98 border-t border-white/15 backdrop-blur-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 z-20">
          {/* Top Subtle Under-Glow Shimmer Line */}
          <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-sky-400/30 to-transparent pointer-events-none" />

          <div className="space-y-1.5">
            {category && (
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/15 border border-sky-400/30 text-sky-300 text-[11px] font-bold tracking-wider uppercase mb-1 shadow-[0_0_14px_rgba(56,189,248,0.2)]">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                <span>{category}</span>
              </div>
            )}
            <h3 id="image-modal-title" className="text-xl sm:text-2xl font-black text-white tracking-tight leading-snug drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
              {title}
            </h3>
            {description && (
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal max-w-2xl drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]">
                {description}
              </p>
            )}
          </div>

          {/* Luxury Executive "Close Viewer" Button with Gloss Reflection */}
          <button
            onClick={onClose}
            className="relative group overflow-hidden inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-slate-900 to-slate-800 hover:from-[#172554] hover:to-[#2563eb] text-slate-200 hover:text-white font-bold text-xs tracking-wide border border-white/20 hover:border-sky-300/60 shadow-[0_6px_18px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.25)] hover:shadow-[0_8px_24px_rgba(30,58,138,0.5),inset_0_1px_2px_rgba(255,255,255,0.4)] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer self-end sm:self-center shrink-0"
          >
            {/* Gloss Curved Reflection */}
            <div className="absolute top-0 left-0 right-0 h-[45%] bg-gradient-to-b from-white/25 via-white/10 to-transparent rounded-t-xl pointer-events-none" />
            <span className="relative z-10">Close Viewer</span>
            <X className="w-3.5 h-3.5 relative z-10 group-hover:rotate-90 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
};
