import React from "react";

interface AnimatedBackgroundTextureProps {
  className?: string;
}

export const AnimatedBackgroundTexture: React.FC<AnimatedBackgroundTextureProps> = ({
  className = "",
}) => {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden z-0 ${className}`}>
      {/* 1. Animated Living Aurora Light Currents */}
      <div className="absolute top-1/4 -left-20 w-[550px] h-[350px] bg-gradient-to-tr from-blue-600/18 via-sky-500/12 to-transparent blur-[120px] rounded-full animate-aurora-a" />
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[320px] bg-gradient-to-bl from-indigo-600/15 via-blue-500/10 to-transparent blur-[120px] rounded-full animate-aurora-b" />

      {/* 2. Seamless Drifting Stippled Micro-Matrix Texture */}
      <div className="absolute inset-0 animated-luxury-texture opacity-60" />

      {/* 3. Sweeping Radiant Specular Light Sheen */}
      <div className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-sky-400/[0.045] to-transparent blur-xl animate-sweep-sheen" />

      {/* 4. Subtle Shimmering Data/Constellation Nodes */}
      <div className="absolute top-[18%] left-[12%] w-1.5 h-1.5 rounded-full bg-sky-400/80 animate-star-twinkle-1 shadow-[0_0_8px_#38bdf8]" />
      <div className="absolute top-[35%] right-[18%] w-1.5 h-1.5 rounded-full bg-blue-400/70 animate-star-twinkle-2 shadow-[0_0_8px_#60a5fa]" />
      <div className="absolute bottom-[28%] left-[25%] w-1 h-1 rounded-full bg-sky-300/80 animate-star-twinkle-3 shadow-[0_0_6px_#7dd3fc]" />
      <div className="absolute bottom-[22%] right-[32%] w-1.5 h-1.5 rounded-full bg-indigo-400/70 animate-star-twinkle-1 shadow-[0_0_8px_#818cf8]" />
      <div className="absolute top-[65%] left-[8%] w-1 h-1 rounded-full bg-sky-400/70 animate-star-twinkle-2 shadow-[0_0_6px_#38bdf8]" />
    </div>
  );
};

export default AnimatedBackgroundTexture;
