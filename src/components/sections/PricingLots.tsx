"use client";

import { DROP } from "@/lib/drop";
import SystemGrid from "@/components/ui/SystemGrid";
import PosterButton from "@/components/ui/PosterButton";

export default function PricingLots() {
  const activeLot = DROP.lots.find((l) => l.active) || DROP.lots[0];

  return (
    <SystemGrid label="ACESSO" id="acesso" className="min-h-[50vh] flex items-stretch">
      <div className="flex flex-col h-full justify-between pb-[120px] md:pb-[160px]">
        {/* Headlines */}
        <div className="mb-[120px]">
          <h2 className="font-[family-name:var(--font-display)] text-[#141414] text-6xl md:text-[8rem] font-black uppercase tracking-[-0.04em] leading-[0.85] mb-12">
            INICIAR <br /> EXPLORAÇÃO
          </h2>
          <p className="font-[family-name:var(--font-inter)] text-[#444343] text-lg md:text-xl leading-relaxed max-w-lg">
            Lote atual: {activeLot.name}. Preço especial garantido até esgotar.
            <br />
            Kits {String(activeLot.rangeStart).padStart(3, "0")} a {String(activeLot.rangeEnd).padStart(3, "0")}.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-l border-t border-[#C7C7C7] mb-24">
          {DROP.lots.map((lot) => (
            <div
              key={lot.id}
              className={`p-8 md:p-12 flex flex-col border-r border-b border-[#C7C7C7] transition-colors duration-300 ease-linear ${
                lot.active ? "bg-[#1351AA] text-[#E3E2DE]" : "bg-transparent text-[#141414]"
              }`}
            >
              <div className="flex justify-between items-start mb-16 md:mb-24">
                <span className={`font-[family-name:var(--font-inter)] text-[10px] uppercase tracking-[0.2em] font-bold ${lot.active ? "text-white/60" : "text-[#7A7A7A]"}`}>
                  {lot.label}
                </span>
                {lot.active && (
                  <span className="w-2 h-2 bg-[#E3E2DE] block animate-pulse" />
                )}
              </div>
              
              <h3 className={`font-[family-name:var(--font-display)] text-2xl font-bold uppercase tracking-tight mb-4 ${lot.active ? "text-[#E3E2DE]" : "text-[#141414]"}`}>
                {lot.name}
              </h3>
              
              <div className="mt-auto pt-12">
                <span className={`font-[family-name:var(--font-display)] text-4xl font-bold ${lot.active ? "text-[#E3E2DE]" : "text-[#141414]"}`}>
                  R$ {lot.price.toFixed(2).replace(".", ",")}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Big Black CTA Bottom Right */}
        <div className="flex justify-end">
          <PosterButton variant="secondary" className="!px-10 !py-5 md:!text-lg">
            GARANTIR MEU KIT
          </PosterButton>
        </div>
      </div>
    </SystemGrid>
  );
}
