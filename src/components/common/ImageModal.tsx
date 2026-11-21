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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-in fade-in duration-300"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/90 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Box Screen Container */}
      <div className="relative z-10 w-full max-w-5xl max-h-[90vh] bg-slate-900 border border-slate-700/80 rounded-xl overflow-hidden shadow-2xl flex flex-col">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close image preview"
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-950/80 hover:bg-blue-500 hover:text-slate-950 text-white transition-colors duration-200 shadow-lg border border-slate-700/60 focus:outline-none"
        >
          <X className="w-5 h-5" />
        </button>

        {/* High Resolution Image View */}
        <div className="relative flex-1 bg-black/50 overflow-hidden flex items-center justify-center min-h-[300px] sm:min-h-[480px]">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full max-h-[70vh] object-contain select-none"
          />
        </div>

        {/* Modal Info Footer */}
        <div className="p-5 sm:p-6 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            {category && (
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-2.5 py-0.5 rounded border border-blue-500/20 mb-2 inline-block">
                {category}
              </span>
            )}
            <h3 id="image-modal-title" className="text-lg sm:text-xl font-bold text-white">
              {title}
            </h3>
            {description && (
              <p className="text-sm text-slate-400 mt-1 max-w-2xl">
                {description}
              </p>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-md transition-colors border border-slate-700 self-end sm:self-center"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};
