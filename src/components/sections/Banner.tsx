"use client";

export default function Banner() {
  return (
    <section className="relative w-full h-[70vh] md:h-[85vh] bg-[#141414] overflow-hidden">
      {/* Placeholder — futuramente substituir por imagem */}
      <div className="absolute inset-0 bg-[#141414]" />

      {/* Overlay gradient sutil para quando tiver imagem */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent opacity-60" />

      {/* Conteúdo do banner */}
      <div className="relative z-10 mx-auto w-[90%] md:w-[85%] max-w-[1440px] h-full flex flex-col justify-end pb-16 md:pb-24">
        <div className="flex flex-col gap-4">
          <span className="font-[family-name:var(--font-inter)] text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold text-white/40">
            Drop 001 · Primeira Korreria
          </span>
          <h1 className="font-[family-name:var(--font-display)] text-white text-5xl md:text-8xl lg:text-9xl font-black uppercase tracking-[-0.04em] leading-[0.85]">
            KORRE
            <br />
            <span className="text-[#1351AA]">CLUB</span>
          </h1>
          <p className="font-[family-name:var(--font-inter)] text-white/50 text-sm md:text-base max-w-md mt-2 leading-relaxed">
            Corra. Valide. Colecione. 70 medalhas numeradas em zamac premium
            para quem transforma quilômetros em conquistas.
          </p>
        </div>
      </div>

      {/* Linha decorativa inferior */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#1351AA] to-transparent" />
    </section>
  );
}
