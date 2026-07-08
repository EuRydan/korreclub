"use client";

import PosterButton from "@/components/ui/PosterButton";

export default function Hero() {
  const handleCta = () => {
    const section = document.getElementById("acesso");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="w-full min-h-[85vh] flex flex-col border-b border-[#C7C7C7]">
      <div className="mx-auto w-[90%] md:w-[85%] max-w-[1440px] flex-1 flex flex-col pt-[80px] pb-[160px]">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-[96px] flex-1">
          
          {/* Sidebar (Cols 1-3) */}
          <div className="md:col-span-3 border-l-4 md:border-l-0 md:border-r border-[#1351AA] md:border-[#C7C7C7] pl-4 md:pl-0 pr-0 md:pr-12 flex flex-col justify-between">
            <div>
              <div className="w-4 h-4 bg-[#141414] mb-6" />
              <span className="block font-[family-name:var(--font-inter)] text-[#7A7A7A] text-[12px] uppercase tracking-[0.2em] font-bold">
                Manifesto
              </span>
            </div>
            
            <div className="hidden md:block mt-auto pb-4">
              <span className="block font-[family-name:var(--font-inter)] text-[#141414] text-xs font-medium">
                DROP 001 // v1.0.0
              </span>
            </div>
          </div>

          {/* Main Content (Cols 4-12) */}
          <div className="md:col-span-9 flex flex-col justify-center pt-12 md:pt-32">
            <h1 className="font-[family-name:var(--font-display)] text-[#141414] text-6xl md:text-[9rem] font-black uppercase tracking-[-0.04em] leading-[0.85] mb-20">
              PRIMEIRA <br />
              <span className="text-[#1351AA]">MARCHA</span>
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 mt-8">
              {/* Paragraph */}
              <div className="max-w-[440px]">
                <p className="font-[family-name:var(--font-inter)] text-[#444343] text-lg leading-relaxed">
                  O sistema mudou. 70 medalhas exclusivas forjadas para aqueles que desafiam o asfalto. Corra onde estiver, valide via Strava, e garanta seu lugar no mural. Não há atalhos.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col items-start justify-start gap-6">
                <PosterButton onClick={handleCta}>
                  Explorar o Sistema
                </PosterButton>
                <a href="#como-funciona" className="font-[family-name:var(--font-inter)] text-[#141414] font-bold uppercase tracking-wider text-sm underline decoration-2 underline-offset-4 hover:text-[#1351AA] transition-colors">
                  Ler a documentação
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
