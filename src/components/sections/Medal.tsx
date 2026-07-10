"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { DROP } from "@/lib/drop";
import SystemGrid from "@/components/ui/SystemGrid";

export default function Medal() {
  return (
    <SystemGrid label="A MEDALHA" id="medalha">
      <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-start w-full border-b border-[#C7C7C7] pb-16 md:pb-24">
        {/* Specs List */}
        <div className="w-full md:w-1/2">
          <h2 className="font-[family-name:var(--font-display)] text-[#141414] text-5xl md:text-6xl font-bold uppercase tracking-[-0.03em] leading-[0.9] mb-16 md:mb-24">
            ZAMAC <br />
            PREMIUM
          </h2>
          
          <ul className="flex flex-col border-t border-[#C7C7C7]">
            {DROP.medalSpecs.map((spec, i) => (
              <li
                key={i}
                className="py-8 md:py-10 border-b border-[#C7C7C7] flex items-start gap-6"
              >
                <span className="font-[family-name:var(--font-inter)] text-[#1351AA] text-[10px] uppercase tracking-[0.2em] font-bold mt-1">
                  0{i + 1}
                </span>
                <span className="font-[family-name:var(--font-inter)] text-[#444343] text-lg">
                  {spec}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Medal Image */}
        <motion.div
          className="w-full md:w-1/2 flex items-center justify-center p-8 min-h-[400px]"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src="/medal.png"
            alt="Medalha Korreria Drop 001 — Zamac premium dourada com detalhes em azul"
            width={500}
            height={500}
            className="w-full max-w-[500px] h-auto object-contain drop-shadow-2xl"
            priority
          />
        </motion.div>

      </div>
    </SystemGrid>
  );
}

