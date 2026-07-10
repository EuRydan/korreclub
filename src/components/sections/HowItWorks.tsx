"use client";

import { motion } from "framer-motion";
import { DROP } from "@/lib/drop";

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="w-full bg-[#E3E2DE] py-24 md:py-40">
      <div className="mx-auto w-[90%] md:w-[85%] max-w-[1440px]">
        {/* Header */}
        <div className="flex flex-col gap-3 mb-20 md:mb-32 border-b border-[#C7C7C7] pb-10">
          <span className="font-[family-name:var(--font-inter)] text-[10px] uppercase tracking-[0.3em] font-bold text-[#1351AA]">
            Sistema
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-[#141414] text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-[-0.03em] leading-[0.85]">
            COMO
            <br />
            FUNCIONA
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[19px] md:left-[23px] top-0 bottom-0 w-[2px] bg-[#C7C7C7]" />

          <div className="flex flex-col gap-0">
            {DROP.steps.map((step, i) => (
              <motion.div
                key={step.number}
                className="relative flex gap-6 md:gap-10 pb-16 md:pb-24 last:pb-0"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
              >
                {/* Timeline dot */}
                <div className="relative z-10 flex-shrink-0 flex flex-col items-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#141414] flex items-center justify-center border-4 border-[#E3E2DE] shadow-[0_0_0_2px_#C7C7C7]">
                    <span className="font-[family-name:var(--font-display)] text-[#E3E2DE] text-xs md:text-sm font-bold">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3 pt-1 md:pt-2 max-w-2xl">
                  <h3 className="font-[family-name:var(--font-display)] text-[#141414] text-xl md:text-2xl lg:text-3xl font-bold uppercase tracking-[-0.02em] leading-tight">
                    {step.title}
                  </h3>

                  {step.description && (
                    <p className="font-[family-name:var(--font-inter)] text-[#7A7A7A] text-sm md:text-base leading-relaxed">
                      {step.description}
                    </p>
                  )}

                  {/* Button for step 3 */}
                  {"hasButton" in step && step.hasButton && (
                    <a
                      href={"buttonHref" in step ? step.buttonHref : "#"}
                      className="inline-flex items-center gap-3 mt-3 px-6 py-3 bg-[#1351AA] text-white text-xs md:text-sm font-bold uppercase tracking-[0.15em] hover:bg-[#0f4490] transition-colors duration-300 w-fit group"
                    >
                      <span>{"buttonLabel" in step ? step.buttonLabel : "ACESSAR"}</span>
                      <svg
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="square" d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Final dot */}
            <div className="relative z-10 flex-shrink-0">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#1351AA] flex items-center justify-center border-4 border-[#E3E2DE] shadow-[0_0_0_2px_#C7C7C7]">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
