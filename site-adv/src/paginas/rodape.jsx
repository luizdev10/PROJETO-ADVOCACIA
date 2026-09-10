import { Scale } from "lucide-react";

export default function Rodape() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-gray-300 pt-16 pb-8 border-t-4 border-[#C5A059]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="md:col-span-1 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-6">
              <Scale className="w-8 h-8 text-[#C5A059]" />
              <span className="text-2xl font-titulo font-bold text-white">Advocacia</span>
            </div>
            <p className="text-gray-400 font-light text-sm mb-6 leading-relaxed">
              Atendimento jurídico especializado, pautado na ética, transparência e busca incessante pelos melhores resultados para nossos clientes.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-[#C5A059] hover:text-white transition-colors border border-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-[#C5A059] hover:text-white transition-colors border border-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-[#C5A059] hover:text-white transition-colors border border-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>

          {/* Links Úteis */}
          <div className="flex flex-col">
            <h4 className="text-white font-bold mb-6 text-lg tracking-wide">Links Rápidos</h4>
            <ul className="flex flex-col gap-3 font-light text-sm">
              <li><a href="#inicio" className="hover:text-[#C5A059] transition-colors">Início</a></li>
              <li><a href="#sobre" className="hover:text-[#C5A059] transition-colors">Sobre Nós</a></li>
              <li><a href="#atuacao" className="hover:text-[#C5A059] transition-colors">Áreas de Atuação</a></li>
              <li><a href="#perguntas" className="hover:text-[#C5A059] transition-colors">Dúvidas Frequentes</a></li>
              <li><a href="#contato" className="hover:text-[#C5A059] transition-colors">Fale Conosco</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="flex flex-col">
            <h4 className="text-white font-bold mb-6 text-lg tracking-wide">Legal</h4>
            <ul className="flex flex-col gap-3 font-light text-sm">
              <li><a href="#politicas" className="hover:text-[#C5A059] transition-colors">Políticas de Privacidade</a></li>
              <li><a href="#termos" className="hover:text-[#C5A059] transition-colors">Termos de Uso</a></li>
            </ul>
          </div>

          {/* OAB Info */}
          <div className="flex flex-col">
            <h4 className="text-white font-bold mb-6 text-lg tracking-wide">Registro OAB</h4>
            <div className="bg-gray-900 p-4 rounded-xl border border-gray-800">
              <p className="text-sm font-light text-gray-400 mb-2">Dr. Fulano de Tal</p>
              <p className="text-[#C5A059] font-bold">OAB/SP 123.456</p>
              <p className="text-sm font-light text-gray-400 mt-4 mb-2">Dra. Ciclana Silva</p>
              <p className="text-[#C5A059] font-bold">OAB/SP 654.321</p>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-light text-gray-500">
          <p>&copy; {currentYear} Dantas & Silva Advocacia. Todos os direitos reservados.</p>
          <p>Desenvolvido com excelência.</p>
        </div>
      </div>
    </footer>
  );
}
