"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center mb-16"
    >
      <span className="block font-[family-name:var(--font-display)] text-[#1B3FD3] text-xs uppercase tracking-[0.2em] mb-3">
        {eyebrow}
      </span>
      <h2 className="font-[family-name:var(--font-display)] text-[#FAFAFA] text-2xl md:text-4xl uppercase tracking-wide mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-md mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
