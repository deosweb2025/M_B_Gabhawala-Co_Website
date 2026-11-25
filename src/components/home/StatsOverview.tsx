import React, { useState, useEffect, useRef } from "react";
import { Container } from "../common/Container";

interface StatItem {
  target: number;
  suffix: string;
  label: string;
  subtext: string;
}

const statsData: StatItem[] = [
  {
    target: 50,
    suffix: "+",
    label: "Years of Practice Legacy",
    subtext: "Serving India ~Since 1975 (Five Decades)",
  },
  {
    target: 7,
    suffix: "",
    label: "Pan-India Branch Network",
    subtext: "Varanasi HQ, Kolkata, Gurugram, Mumbai, Assam & more",
  },
  {
    target: 7,
    suffix: "",
    label: "Distinguished Partners",
    subtext: "Fellow & Associate Chartered Accountants",
  },
  {
    target: 5000,
    suffix: "+",
    label: "Institutional Consultations",
    subtext: "Corporates, NRIs, PSUs & Enterprises",
  },
];

interface StatCounterCardProps {
  stat: StatItem;
  delayIndex: number;
  trigger: boolean;
}

const StatCounterCard: React.FC<StatCounterCardProps> = ({
  stat,
  delayIndex,
  trigger,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    let startTime: number | null = null;
    let frameId: number;
    const duration = 2000;

    const easeOutExpo = (t: number): number => {
      return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    };

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentVal = Math.round(easeOutExpo(progress) * stat.target);
      setCount(currentVal);

      if (progress < 1) {
        frameId = requestAnimationFrame(updateCount);
      } else {
        setCount(stat.target);
      }
    };

    const timer = setTimeout(() => {
      frameId = requestAnimationFrame(updateCount);
    }, delayIndex * 150);

    return () => {
      clearTimeout(timer);
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [trigger, stat.target, delayIndex]);

  return (
    <div
      className={`p-6 sm:p-7 rounded-2xl glossy-card text-center flex flex-col items-center justify-center relative overflow-hidden group hover:scale-[1.02] hover:-translate-y-1 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-default animate-glow-pulse ${
        trigger
          ? "opacity-100 scale-100 translate-y-0"
          : "opacity-0 scale-90 translate-y-8"
      }`}
      style={{
        animationDelay: `${delayIndex * 0.8}s`,
        transitionDelay: `${delayIndex * 120}ms`,
      }}
    >
      {/* Animated Top Border Specular Light Sheen */}
      <div className="absolute top-0 left-0 right-0 h-[2px] overflow-hidden pointer-events-none">
        <div
          className="w-full h-full bg-gradient-to-r from-transparent via-[#6797D6] to-transparent animate-border-sheen"
          style={{ animationDelay: `${delayIndex * 0.9}s` }}
        />
      </div>

      {/* Static Top Specular Highlight Edge */}
      <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#355094]/30 to-transparent pointer-events-none" />

      {/* Diagonal Subtle Reflection */}
      <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-slate-100 via-transparent to-transparent rounded-tr-2xl pointer-events-none" />

      {/* Subtle Ambient Hover Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#355094]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Counter Number */}
      <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1e3a8a] tracking-tight mb-2 drop-shadow-sm">
        <span>{count.toLocaleString()}</span>
        <span className="text-[#355094] ml-0.5">{stat.suffix}</span>
      </span>

      {/* Primary Label */}
      <span className="text-sm sm:text-base font-semibold text-slate-900 tracking-wide mb-1 group-hover:text-[#355094] transition-colors">
        {stat.label}
      </span>

      {/* Subtext */}
      <span className="text-xs text-slate-500 leading-relaxed max-w-[210px]">
        {stat.subtext}
      </span>
    </div>
  );
};

export const StatsOverview: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200 relative overflow-hidden"
    >
      {/* Glossy Ambient Center Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/5 via-transparent to-transparent pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {statsData.map((stat, idx) => (
            <StatCounterCard
              key={idx}
              stat={stat}
              delayIndex={idx}
              trigger={isVisible}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default StatsOverview;
