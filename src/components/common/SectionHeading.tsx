import React from "react";
import { AnimatedDivider } from "./AnimatedDivider";

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
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50/90 border border-blue-200/90 text-[#1e3a8a] text-xs sm:text-sm font-bold tracking-wider uppercase mb-3 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#1e3a8a] animate-pulse"></span>
          {eyebrow}
        </div>
      )}

      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
        {title}{" "}
        {highlight && (
          <span className="text-[#1e3a8a] block sm:inline mt-1 sm:mt-0">
            {highlight}
          </span>
        )}
      </h2>

      {description && (
        <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
          {description}
        </p>
      )}

      <AnimatedDivider className="mt-5" />
    </div>
  );
};
