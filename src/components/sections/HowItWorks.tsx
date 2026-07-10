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
          <div className="relative group inline-block z-20">
            <button className="flex items-center gap-1 font-[family-name:var(--font-inter)] text-[10px] uppercase tracking-[0.3em] font-bold text-[#1351AA]">
              Desafios
              <svg className="w-3 h-3 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Menu Suspenso */}
            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="bg-white border border-[#C7C7C7] shadow-lg w-40 flex flex-col text-left py-1">
                <a href="#desafios" className="px-4 py-2 text-xs font-[family-name:var(--font-inter)] text-[#141414] hover:bg-[#E3E2DE] hover:text-[#1351AA] transition-colors">
                  Atuais
                </a>
                <a href="#desafios" className="px-4 py-2 text-xs font-[family-name:var(--font-inter)] text-[#141414] hover:bg-[#E3E2DE] hover:text-[#1351AA] transition-colors">
                  Em Breve
                </a>
              </div>
            </div>
          </div>
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
                    className={`md:pr-16 lg:pr-24 ${isEven
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
                    className={`hidden md:block ${isEven ? "order-3" : "order-1 md:pr-16 lg:pr-24 md:text-right"
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

        {/* Community CTA — outside timeline container */}
        <motion.div
          className="flex justify-center mt-20 md:mt-32"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="text-center max-w-xl px-4">
            <h3 className="font-[family-name:var(--font-display)] text-[#141414] text-2xl md:text-4xl lg:text-5xl font-black uppercase tracking-[-0.03em] leading-[0.9] mb-6">
              Você nunca
              <br />
              <span className="text-[#1351AA]">está sozinho!</span>
            </h3>
            <p className="font-[family-name:var(--font-inter)] text-[#7A7A7A] text-sm md:text-base leading-relaxed mb-10">
              Junte-se ao nosso grupo no WhatsApp formado por pessoas motivadas que se
              apoiam e inspiram mutuamente a cada passo do caminho. Mantenha-se conectado
              e compartilhe sua jornada em nossa comunidade privada e acompanhe os
              próximos desafios virtuais da Korre Club em todas as redes sociais!
            </p>

            <div className="flex items-center justify-center gap-5">
              {/* WhatsApp */}
              <a
                href="https://chat.whatsapp.com/HDp30QBAAinAht59KsGMev?s=cl&p=a&ilr=4"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-14 h-14 rounded-full bg-[#141414] flex items-center justify-center hover:bg-[#25D366] transition-colors duration-300"
                aria-label="Grupo do WhatsApp"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/korre.club/"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-14 h-14 rounded-full bg-[#141414] flex items-center justify-center hover:bg-gradient-to-br hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] transition-all duration-300"
                aria-label="Instagram Korre Club"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

