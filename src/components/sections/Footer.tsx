export default function Footer() {
  return (
    <footer className="w-full border-t border-[#141414] bg-[#141414] text-[#E3E2DE]">
      <div className="mx-auto w-[90%] md:w-[85%] max-w-[1440px] py-[160px]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-[96px] items-start">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-4 flex flex-col gap-4">
            <span className="font-[family-name:var(--font-display)] text-3xl font-black uppercase tracking-tighter">
              KORRE CLUB
            </span>
            <p className="font-[family-name:var(--font-inter)] text-white/50 text-sm max-w-xs leading-relaxed">
              Sistema de desafios e recompensas físicas.
              <br /> Drop 001 · Primeira Marcha.
            </p>
          </div>

          {/* Links */}
          <div className="col-span-1 md:col-span-4 flex flex-col gap-3">
            <span className="font-[family-name:var(--font-inter)] text-xs font-bold uppercase tracking-[0.2em] text-white/30 mb-2">
              Índice
            </span>
            <a href="#como-funciona" className="text-sm font-medium hover:text-[#1351AA] transition-colors">Sistema</a>
            <a href="#medalha" className="text-sm font-medium hover:text-[#1351AA] transition-colors">A Medalha</a>
            <a href="#acesso" className="text-sm font-medium hover:text-[#1351AA] transition-colors">Acesso / Preços</a>
            <a href="#faq" className="text-sm font-medium hover:text-[#1351AA] transition-colors">Por Que Diferente?</a>
          </div>

          {/* Legal / Social */}
          <div className="col-span-1 md:col-span-4 flex flex-col gap-3">
            <span className="font-[family-name:var(--font-inter)] text-xs font-bold uppercase tracking-[0.2em] text-white/30 mb-2">
              Legal & Social
            </span>
            <a href="#" className="text-sm font-medium hover:text-[#1351AA] transition-colors">Regulamento</a>
            <a href="#" className="text-sm font-medium hover:text-[#1351AA] transition-colors">Termos de Responsabilidade</a>
            <a href="https://instagram.com/korre.club" className="text-sm font-medium hover:text-[#1351AA] transition-colors mt-2">
              Instagram
            </a>
          </div>

        </div>

        <div className="w-full border-t border-white/10 mt-16 pt-8 flex justify-between items-center">
          <span className="font-[family-name:var(--font-inter)] text-xs font-bold uppercase tracking-wider text-white/30">
            © 2025 KORRE CLUB
          </span>
          <span className="font-[family-name:var(--font-inter)] text-xs font-bold uppercase tracking-wider text-white/30">
            V 1.0.0
          </span>
        </div>
      </div>
    </footer>
  );
}
