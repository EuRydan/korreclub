"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DROP } from "@/lib/drop";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full bg-[#E3E2DE] py-24 md:py-40">
      <div className="mx-auto w-[90%] md:w-[85%] max-w-[1000px]">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-16 md:mb-24">
          <span className="font-[family-name:var(--font-inter)] text-[10px] uppercase tracking-[0.3em] font-bold text-[#1351AA]">
            Suporte
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-[#141414] text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-[-0.03em] leading-[0.85]">
            PERGUNTAS
            <br />
            <span className="text-[#1351AA]">FREQUENTES</span>
          </h2>
        </div>

        {/* Accordion */}
        <div className="flex flex-col border-t border-[#C7C7C7]">
          {DROP.faq.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="border-b border-[#C7C7C7]">
                <button
                  onClick={() => toggleOpen(index)}
                  className="w-full py-6 md:py-8 flex items-center justify-between gap-6 text-left group"
                >
                  <span className="font-[family-name:var(--font-display)] text-[#141414] text-lg md:text-2xl font-bold tracking-tight group-hover:text-[#1351AA] transition-colors">
                    {item.question}
                  </span>
                  
                  <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${isOpen ? 'border-[#1351AA] bg-[#1351AA]' : 'border-[#141414] group-hover:border-[#1351AA]'}`}>
                    <svg
                      className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-45 text-white' : 'text-[#141414] group-hover:text-[#1351AA]'}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 md:pb-10 pt-2 pr-12">
                        <p className="font-[family-name:var(--font-inter)] text-[#7A7A7A] text-sm md:text-base leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
