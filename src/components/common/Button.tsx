import React from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  to?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  to,
  href,
  onClick,
  className = "",
  icon,
  iconPosition = "right",
  type = "button",
  disabled = false,
}) => {
  const baseClasses =
    "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-950 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none cursor-pointer tracking-wide";

  const sizeClasses = {
    sm: "px-3.5 py-1.5 text-xs sm:text-sm gap-1.5",
    md: "px-5 py-2.5 text-sm sm:text-base gap-2",
    lg: "px-7 py-3.5 text-base sm:text-lg gap-2.5 font-semibold",
  };

  const variantClasses = {
    primary:
      "relative group overflow-hidden bg-gradient-to-r from-[#172554] via-[#1e3a8a] to-[#2563eb] hover:from-[#0f172a] hover:to-[#172554] text-white font-semibold rounded-xl border border-sky-300/40 border-t-white/80 shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.7),0_10px_25px_-5px_rgba(30,58,138,0.45),0_0_20px_rgba(37,99,235,0.25)] hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_15px_30px_-5px_rgba(30,58,138,0.6),0_0_25px_rgba(37,99,235,0.4)] hover:-translate-y-0.5",
    secondary:
      "bg-white hover:bg-slate-50 text-[#1e3a8a] hover:text-[#0f2756] border border-[#1e3a8a]/30 hover:border-[#1e3a8a] shadow-sm hover:-translate-y-0.5",
    outline:
      "border border-[#1e3a8a]/50 hover:border-[#1e3a8a] text-[#1e3a8a] hover:text-[#0f2756] hover:bg-blue-50/50 hover:-translate-y-0.5",
    ghost:
      "text-slate-700 hover:text-[#1e3a8a] hover:bg-slate-100",
  };

  const fullClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={fullClasses}>
        {icon && iconPosition === "left" && <span>{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === "right" && <span>{icon}</span>}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={fullClasses}
      >
        {icon && iconPosition === "left" && <span>{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === "right" && <span>{icon}</span>}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={fullClasses}>
      {icon && iconPosition === "left" && <span>{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span>{icon}</span>}
    </button>
  );
};
