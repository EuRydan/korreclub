"use client";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 h-[80px] w-full bg-[#E3E2DE]/95 backdrop-blur-md border-b border-[#C7C7C7]">
      <div className="mx-auto w-[90%] md:w-[85%] max-w-[1440px] h-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-full items-center">
          
          {/* Logo (Cols 1-3) */}
          <div className="col-span-1 md:col-span-3">
            <a href="#" className="font-[family-name:var(--font-display)] font-bold text-xl uppercase tracking-tighter text-[#141414]">
              Korre Club
            </a>
          </div>

          {/* Empty / Status (Cols 4-9) */}
          <div className="hidden md:flex md:col-span-6 items-center">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#1351AA] block" />
              <span className="font-[family-name:var(--font-inter)] text-[#7A7A7A] text-[10px] uppercase tracking-[0.2em] font-bold">
                Drop 001 Ativo
              </span>
            </div>
          </div>

          {/* Links (Cols 10-12) */}
          <div className="hidden md:flex md:col-span-3 justify-end items-center gap-6">
            <div className="relative group py-2">
              <button className="flex items-center gap-1 font-[family-name:var(--font-inter)] text-sm font-semibold text-[#141414] hover:text-[#1351AA] transition-colors">
                Desafios
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Menu Suspenso Navbar */}
              <div className="absolute top-full right-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="bg-[#E3E2DE] border border-[#C7C7C7] shadow-lg w-48 flex flex-col text-left py-1 rounded-sm">
                  <a href="#desafios" className="px-4 py-3 text-sm font-[family-name:var(--font-inter)] text-[#141414] hover:bg-[#C7C7C7]/50 hover:text-[#1351AA] transition-colors">
                    Atuais
                  </a>
                  <a href="#desafios" className="px-4 py-3 text-sm font-[family-name:var(--font-inter)] text-[#141414] hover:bg-[#C7C7C7]/50 hover:text-[#1351AA] transition-colors">
                    Em Breve
                  </a>
                </div>
              </div>
            </div>
            <a href="#faq" className="font-[family-name:var(--font-inter)] text-sm font-semibold text-[#141414] hover:text-[#1351AA] transition-colors">
              Dúvidas
            </a>
            <a href="#acesso" className="font-[family-name:var(--font-inter)] text-sm font-semibold text-[#1351AA] hover:text-[#141414] transition-colors">
              Acesso
            </a>
          </div>

        </div>
      </div>
    </header>
  );
}
