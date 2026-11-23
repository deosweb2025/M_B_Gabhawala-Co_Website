import React from "react";
import { useInView } from "../../hooks/useInView";

interface AnimatedDividerProps {
  className?: string;
  lineWidth?: string;
}

export const AnimatedDivider: React.FC<AnimatedDividerProps> = ({
  className = "mt-6",
  lineWidth = "w-14 sm:w-20",
}) => {
  const [ref, isInView] = useInView<HTMLDivElement>({
    threshold: 0.15,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`flex items-center justify-center gap-2 overflow-hidden ${className}`}
    >
      {/* Left Expanding Gradient Line - unfolds from center dot to the left */}
      <div
        className={`h-px bg-gradient-to-r from-transparent via-[#3b82f6] to-[#1e3a8a] transition-all duration-700 ease-out origin-right ${lineWidth} ${
          isInView ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
        }`}
      />

      {/* Center Glowing Specular Beacon Dot */}
      <div className="relative flex items-center justify-center shrink-0">
        {/* Outer Radiant Beacon Ping on appearance */}
        <span
          className={`absolute w-3.5 h-3.5 rounded-full bg-[#3b82f6]/50 transition-all duration-1000 ease-out ${
            isInView ? "scale-150 opacity-0 animate-ping" : "scale-0 opacity-0"
          }`}
        />
        {/* Core Glowing Dot */}
        <span
          className={`w-1.5 h-1.5 rounded-full bg-[#1e3a8a] shadow-[0_0_10px_rgba(30,58,138,0.8)] transition-all duration-500 delay-100 ease-out ${
            isInView
              ? "scale-100 opacity-100 shadow-[0_0_12px_rgba(30,58,138,1)]"
              : "scale-0 opacity-0"
          }`}
        />
      </div>

      {/* Right Expanding Gradient Line - unfolds from center dot to the right */}
      <div
        className={`h-px bg-gradient-to-l from-transparent via-[#3b82f6] to-[#1e3a8a] transition-all duration-700 ease-out origin-left ${lineWidth} ${
          isInView ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
        }`}
      />
    </div>
  );
};

export default AnimatedDivider;
