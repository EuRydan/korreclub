"use client";

import { motion } from "framer-motion";
import { DROP } from "@/lib/drop";
import SystemGrid from "@/components/ui/SystemGrid";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "linear" } },
};

export default function HowItWorks() {
  // Taking the first 3 steps to fit the 3-column layout per spec
  // If there are 4 steps, the grid will wrap, but we want 3 columns.
  const steps = DROP.steps.slice(0, 3);

  return (
    <SystemGrid label="SISTEMA" id="como-funciona">
      <div className="mb-[120px]">
        <h2 className="font-[family-name:var(--font-display)] text-[#141414] text-5xl md:text-7xl font-bold uppercase tracking-[-0.03em] leading-[0.9]">
          CORRA.<br />
          VALIDA.<br />
          RECEBA.
        </h2>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-0 border-l border-t border-[#C7C7C7]"
      >
        {steps.map((step, idx) => (
          <motion.div
            key={step.number}
            variants={item}
            className="group h-full flex flex-col p-8 md:p-12 border-r border-b border-[#C7C7C7] hover:bg-white/40 transition-colors duration-300 ease-linear"
          >
            <span className="block font-[family-name:var(--font-inter)] text-[#7A7A7A] text-[12px] font-bold tracking-[0.2em] mb-16">
              0{idx + 1}
            </span>
            <h3 className="font-[family-name:var(--font-display)] text-[#141414] text-2xl font-bold uppercase tracking-tight mb-8 group-hover:text-[#1351AA] transition-colors duration-300 ease-linear">
              {step.title}
            </h3>
            <p className="font-[family-name:var(--font-inter)] text-[#444343] text-sm leading-relaxed mt-auto">
              {step.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </SystemGrid>
  );
}
