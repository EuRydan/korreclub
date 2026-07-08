"use client";

import { motion } from "framer-motion";
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

        {/* Abstract Graphic representation instead of glowing medal */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-[#E3E2DE] border border-[#C7C7C7] min-h-[400px]">
          <div className="relative w-[300px] h-[300px] border-2 border-[#141414] rounded-full flex items-center justify-center bg-transparent">
            {/* Geometric accents */}
            <div className="absolute inset-4 border border-[#141414] border-dashed rounded-full" />
            <div className="absolute w-[300px] h-[1px] bg-[#141414]" />
            <div className="absolute w-[1px] h-[300px] bg-[#141414]" />
            
            <div className="bg-[#141414] w-[120px] h-[120px] rounded-full flex flex-col items-center justify-center z-10 text-[#E3E2DE]">
              <span className="font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight">001</span>
              <span className="font-[family-name:var(--font-inter)] text-[10px] uppercase tracking-wider text-white/50">
                / 070
              </span>
            </div>
          </div>
        </div>

      </div>
    </SystemGrid>
  );
}
