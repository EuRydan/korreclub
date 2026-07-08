"use client";

import { DROP } from "@/lib/drop";
import SystemGrid from "@/components/ui/SystemGrid";

export default function FoundersWall() {
  return (
    <SystemGrid label="COMUNIDADE" id="comunidade">
      <div className="mb-32">
        <h2 className="font-[family-name:var(--font-display)] text-[#141414] text-5xl md:text-7xl font-bold uppercase tracking-[-0.03em] leading-[0.9]">
          FUNDADORES
        </h2>
        <p className="font-[family-name:var(--font-inter)] text-[#444343] text-lg mt-8 max-w-lg leading-relaxed">
          Os 30 primeiros corredores do Korre Club. Seu nome, eternizado no sistema.
        </p>
      </div>

      <div 
        className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6"
        style={{ marginBottom: '160px' }}
      >
        {DROP.founders.map((founder) => (
          <div
            key={founder.slot}
            className={`p-6 md:p-8 flex flex-col justify-between min-h-[160px] border border-[#C7C7C7] transition-colors duration-300 ease-linear ${
              founder.sold
                ? "bg-[#1351AA] text-[#E3E2DE]"
                : "bg-transparent text-[#7A7A7A] hover:bg-white/40"
            }`}
          >
            <span className="font-[family-name:var(--font-inter)] text-[10px] font-bold uppercase tracking-[0.2em] opacity-60">
              #{String(founder.slot).padStart(2, "0")}
            </span>
            <span className={`font-[family-name:var(--font-inter)] text-sm font-bold truncate mt-4 ${
              founder.sold ? "text-[#E3E2DE]" : "text-[#444343]"
            }`}>
              {founder.sold ? founder.name : "DISPONÍVEL"}
            </span>
          </div>
        ))}
      </div>
    </SystemGrid>
  );
}
