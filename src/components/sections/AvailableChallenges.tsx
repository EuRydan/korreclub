"use client";

import { motion } from "framer-motion";

export default function AvailableChallenges() {
  return (
    <section id="desafios" className="w-full bg-[#141414] py-24 md:py-40">
      <div className="mx-auto w-[90%] md:w-[85%] max-w-[1440px]">
        {/* Header */}
        <div className="flex flex-col gap-3 mb-16 md:mb-24 border-b border-white/20 pb-10">
          <span className="font-[family-name:var(--font-inter)] text-[10px] uppercase tracking-[0.3em] font-bold text-[#1351AA]">
            Explore
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-[#E3E2DE] text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-[-0.03em] leading-[0.85]">
            DESAFIOS VIRTUAIS
            <br />
            <span className="text-white/40">DISPONÍVEIS</span>
          </h2>
        </div>

        {/* Empty State / Placeholder */}
        <motion.div
          className="w-full min-h-[40vh] border border-white/10 flex flex-col items-center justify-center p-8 text-center bg-white/[0.02]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-16 h-16 rounded-full bg-[#1351AA]/10 flex items-center justify-center mb-6">
            <svg className="w-8 h-8 text-[#1351AA]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="font-[family-name:var(--font-display)] text-[#E3E2DE] text-2xl md:text-3xl font-bold uppercase tracking-tight mb-3">
            Em Breve
          </h3>
          <p className="font-[family-name:var(--font-inter)] text-white/50 text-sm md:text-base max-w-md leading-relaxed">
            Nossos próximos desafios virtuais estão sendo preparados. Acompanhe nossas redes
            sociais para não perder os próximos drops exclusivos.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
