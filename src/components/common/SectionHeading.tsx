import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  highlight,
  description,
  align = "center",
  className = "",
}) => {
  const alignmentClass =
    align === "center"
      ? "text-center mx-auto items-center"
      : align === "right"
        ? "text-right ml-auto items-end"
        : "text-left mr-auto items-start";

  return (
    <div className={`flex flex-col max-w-3xl mb-12 sm:mb-16 ${alignmentClass} ${className}`}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
          {eyebrow}
        </div>
      )}

      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
        {title}{" "}
        {highlight && (
          <span className="gold-gradient-text block sm:inline mt-1 sm:mt-0">
            {highlight}
          </span>
        )}
      </h2>

      {description && (
        <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl">
          {description}
        </p>
      )}

      <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-amber-700 rounded-full mt-5"></div>
    </div>
  );
};
