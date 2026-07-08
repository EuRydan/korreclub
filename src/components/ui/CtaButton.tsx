"use client";

import { motion } from "framer-motion";

interface CtaButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "outline";
  className?: string;
  ariaLabel?: string;
}

export default function CtaButton({
  children,
  onClick,
  variant = "primary",
  className = "",
  ariaLabel,
}: CtaButtonProps) {
  const baseStyles =
    "font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-wider h-14 px-10 w-full md:w-auto rounded-[4px] cursor-pointer transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B3FD3] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D0D0D] inline-flex items-center justify-center";

  const variants = {
    primary:
      "bg-[#1B3FD3] text-[#FAFAFA] hover:bg-[#1636B8] active:scale-[0.98]",
    outline:
      "bg-transparent border-2 border-[#1B3FD3] text-[#1B3FD3] hover:bg-[#1B3FD3] hover:text-[#FAFAFA] active:scale-[0.98]",
  };

  return (
    <motion.button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      aria-label={ariaLabel}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.button>
  );
}
