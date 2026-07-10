"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { DROP } from "@/lib/drop";

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.4", "end 0.8"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  });

  return (
    <section id="como-funciona" className="w-full bg-[#E3E2DE] py-24 md:py-40">
      <div className="mx-auto w-[90%] md:w-[85%] max-w-[1440px]">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-20 md:mb-32 border-b border-[#C7C7C7] pb-10">
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
        <div ref={containerRef} className="relative">
          {/* Background line (gray) */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-[#C7C7C7]" />

          {/* Animated progress line (blue) */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[3px] bg-[#1351AA] origin-top z-[1]"
            style={{ scaleY }}
          />

          <div className="flex flex-col gap-24 md:gap-40">
            {DROP.steps.map((step, i) => {
              const isEven = i % 2 === 0;

              return (
                <motion.div
                  key={step.number}
                  className="relative grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-6 md:gap-0"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                >
                  {/* Left content */}
                  <div
                    className={`md:pr-16 lg:pr-24 ${
                      isEven
                        ? "order-1 md:text-right"
                        : "order-1 md:order-3 md:text-left md:pl-16 lg:pl-24 md:pr-0"
                    }`}
                  >
                    <h3 className="font-[family-name:var(--font-display)] text-[#141414] text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-[-0.02em] leading-tight mb-4">
                      {step.title}
                    </h3>

                    {step.description && (
                      <p className="font-[family-name:var(--font-inter)] text-[#7A7A7A] text-sm md:text-base leading-relaxed max-w-md inline-block">
                        {step.description}
                      </p>
                    )}

                    {"hasButton" in step && step.hasButton && (
                      <div className={`mt-6 ${isEven ? "md:flex md:justify-end" : ""}`}>
                        <a
                          href={"buttonHref" in step ? step.buttonHref : "#"}
                          className="inline-flex items-center gap-3 px-6 py-3 bg-[#1351AA] text-white text-xs md:text-sm font-bold uppercase tracking-[0.15em] hover:bg-[#0f4490] transition-colors duration-300 group"
                        >
                          <span>
                            {"buttonLabel" in step ? step.buttonLabel : "ACESSAR"}
                          </span>
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
                      </div>
                    )}
                  </div>

                  {/* Center dot */}
                  <div className="order-first md:order-2 flex justify-center relative z-10">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#141414] flex items-center justify-center border-4 border-[#E3E2DE] shadow-[0_0_0_2px_#C7C7C7]">
                      <span className="font-[family-name:var(--font-display)] text-[#E3E2DE] text-sm md:text-base font-bold">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Right content (empty spacer for alternating layout) */}
                  <div
                    className={`hidden md:block ${
                      isEven ? "order-3" : "order-1 md:pr-16 lg:pr-24 md:text-right"
                    }`}
                  />
                </motion.div>
              );
            })}

            {/* Final checkmark dot */}
            <div className="relative flex justify-center">
              <div className="relative z-10 w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#1351AA] flex items-center justify-center border-4 border-[#E3E2DE] shadow-[0_0_0_2px_#1351AA]/30">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
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
