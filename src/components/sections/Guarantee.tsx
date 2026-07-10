"use client";

import { motion } from "framer-motion";

export default function Guarantee() {
  return (
    <section className="w-full bg-[#1351AA] py-16 md:py-24 text-white">
      <div className="mx-auto w-[90%] md:w-[85%] max-w-[1000px]">
        <motion.div
          className="flex flex-col md:flex-row items-center gap-10 md:gap-16 text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
        >
          {/* Shield Icon */}
          <div className="flex-shrink-0">
            <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center border-4 border-white/20">
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex flex-col gap-4">
            <h3 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl font-black uppercase tracking-tight leading-none">
              Garantia de reembolso
              <br />
              <span className="text-white/60">de 30 dias</span>
            </h3>
            <p className="font-[family-name:var(--font-inter)] text-white/80 text-sm md:text-base leading-relaxed max-w-2xl">
              A vida te atrapalhou e você não consegue começar um desafio? Basta entrar
              em contato conosco para obter um reembolso sem perguntas.
              <br />
              <br />
              Estamos comprometidos com o seu sucesso e acreditamos na eficácia dos nossos programas.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
