import logo from "../assets/img/adv_logo.svg";

export default function Rodape() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-tinta text-marfim pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">

          {/* Brand */}
          <div className="md:col-span-4 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="" className="h-9 w-9" />
              <span className="flex flex-col leading-none">
                <span className="font-titulo text-2xl font-semibold">Dantas & Silva</span>
                <span className="text-[10px] uppercase tracking-[0.35em] text-ouro-claro mt-1">Advocacia</span>
              </span>
            </div>
            <p className="text-marfim/55 font-light text-sm mb-8 leading-relaxed max-w-xs">
              Atendimento jurídico especializado, pautado na ética, na transparência e no sigilo profissional.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" aria-label="Instagram" className="w-9 h-9 flex items-center justify-center border border-white/15 text-marfim/60 hover:border-ouro-claro hover:text-ouro-claro transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" aria-label="Facebook" className="w-9 h-9 flex items-center justify-center border border-white/15 text-marfim/60 hover:border-ouro-claro hover:text-ouro-claro transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="w-9 h-9 flex items-center justify-center border border-white/15 text-marfim/60 hover:border-ouro-claro hover:text-ouro-claro transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>

          {/* Links Úteis */}
          <div className="md:col-span-2 md:col-start-6 flex flex-col">
            <h4 className="text-[11px] uppercase tracking-[0.25em] text-ouro-claro mb-6">Navegação</h4>
            <ul className="flex flex-col gap-3 font-light text-sm">
              <li><a href="#inicio" className="text-marfim/60 hover:text-ouro-claro transition-colors">Início</a></li>
              <li><a href="#atuacao" className="text-marfim/60 hover:text-ouro-claro transition-colors">Áreas de Atuação</a></li>
              <li><a href="#sobre" className="text-marfim/60 hover:text-ouro-claro transition-colors">O Escritório</a></li>
              <li><a href="#perguntas" className="text-marfim/60 hover:text-ouro-claro transition-colors">Dúvidas Frequentes</a></li>
              <li><a href="#contato" className="text-marfim/60 hover:text-ouro-claro transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="md:col-span-2 flex flex-col">
            <h4 className="text-[11px] uppercase tracking-[0.25em] text-ouro-claro mb-6">Legal</h4>
            <ul className="flex flex-col gap-3 font-light text-sm">
              <li><a href="#politicas" className="text-marfim/60 hover:text-ouro-claro transition-colors">Política de Privacidade</a></li>
              <li><a href="#termos" className="text-marfim/60 hover:text-ouro-claro transition-colors">Termos de Uso</a></li>
            </ul>
          </div>

          {/* OAB Info */}
          <div className="md:col-span-3 flex flex-col">
            <h4 className="text-[11px] uppercase tracking-[0.25em] text-ouro-claro mb-6">Responsáveis Técnicos</h4>
            <div className="flex flex-col gap-5">
              <div className="border-l border-ouro/50 pl-4">
                <p className="font-titulo text-lg">Dr. Fulano de Tal</p>
                <p className="text-xs tracking-wider text-marfim/50">OAB/SP 123.456</p>
              </div>
              <div className="border-l border-ouro/50 pl-4">
                <p className="font-titulo text-lg">Dra. Ciclana Silva</p>
                <p className="text-xs tracking-wider text-marfim/50">OAB/SP 654.321</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-light text-marfim/40">
          <p>&copy; {currentYear} Dantas & Silva Advocacia. Todos os direitos reservados.</p>
          <p>Conteúdo de caráter informativo, em conformidade com o Código de Ética da OAB.</p>
        </div>
      </div>
    </footer>
  );
}
