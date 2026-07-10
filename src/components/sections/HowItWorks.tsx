"use client";

import { motion } from "framer-motion";
import { DROP } from "@/lib/drop";

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="w-full bg-[#E3E2DE] py-24 md:py-40">
      <div className="mx-auto w-[90%] md:w-[85%] max-w-[1440px]">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20 md:mb-32 border-b border-[#C7C7C7] pb-10">
          <div className="flex flex-col gap-3">
            <span className="font-[family-name:var(--font-inter)] text-[10px] uppercase tracking-[0.3em] font-bold text-[#1351AA]">
              Sistema
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-[#141414] text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-[-0.03em] leading-[0.85]">
              COMO
              <br />
              FUNCIONA
            </h2>
          </div>
          <p className="font-[family-name:var(--font-inter)] text-[#7A7A7A] text-sm md:text-base max-w-sm leading-relaxed">
            Quatro passos. Sem complicação. Do desafio à medalha na sua porta.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {DROP.steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="group relative border-t border-[#C7C7C7] pt-8 pb-16 md:pb-20 pr-0 md:pr-10 lg:pr-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Step Number */}
              <span className="font-[family-name:var(--font-display)] text-[80px] md:text-[100px] font-black text-[#141414]/[0.04] leading-none absolute top-2 right-2 select-none pointer-events-none">
                {step.number}
              </span>

              <div className="relative z-10 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-[2px] bg-[#1351AA] group-hover:w-12 transition-all duration-300" />
                  <span className="font-[family-name:var(--font-inter)] text-[10px] uppercase tracking-[0.2em] font-bold text-[#1351AA]">
                    Passo {step.number}
                  </span>
                </div>

                <h3 className="font-[family-name:var(--font-display)] text-[#141414] text-xl md:text-2xl font-bold uppercase tracking-[-0.02em] leading-tight">
                  {step.title}
                </h3>

                <p className="font-[family-name:var(--font-inter)] text-[#7A7A7A] text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
