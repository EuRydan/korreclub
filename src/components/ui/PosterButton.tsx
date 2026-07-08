"use client";

import { motion } from "framer-motion";

interface PosterButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
  ariaLabel?: string;
}

export default function PosterButton({
  children,
  onClick,
  variant = "primary",
  className = "",
  ariaLabel,
}: PosterButtonProps) {
  const isPrimary = variant === "primary";

  return (
    <motion.button
      whileHover={{ backgroundColor: "#141414", color: "#E3E2DE" }}
      transition={{ duration: 0.3, ease: "linear" }}
      onClick={onClick}
      aria-label={ariaLabel}
      className={`px-8 py-4 text-[14px] font-bold uppercase tracking-wider rounded-none transition-colors duration-300 ease-linear flex items-center justify-center
        ${
          isPrimary
            ? "bg-[#1351AA] text-[#E3E2DE]"
            : "bg-[#141414] text-[#E3E2DE]"
        }
        ${className}
      `}
    >
      {children}
    </motion.button>
  );
}
