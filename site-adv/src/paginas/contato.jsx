import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";

export default function Contato() {

  const enviowhats = () => {
    const saudacao = "Olá, fulano, tudo bem?";
    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    const texto = `${saudacao}\n\nNome: ${nome}\nTelefone: ${telefone}\nE-mail: ${email}\nMensagem: ${mensagem}`;
    window.open(`https://wa.me/+558888597138?text=${encodeURIComponent(texto)}`, "_blank");
  }

  const informacoes = [
    { id: 1, titulo: "Telefone / WhatsApp", icone: <Phone size={18} strokeWidth={1.25} />, linhas: ["(11) 99999-9999"] },
    { id: 2, titulo: "E-mail", icone: <Mail size={18} strokeWidth={1.25} />, linhas: ["contato@exemplo.com.br"] },
    { id: 3, titulo: "Endereço", icone: <MapPin size={18} strokeWidth={1.25} />, linhas: ["Rua Exemplo, 123 – Bairro Exemplo", "Juazeiro do Norte – CE"] },
    { id: 4, titulo: "Horário de Atendimento", icone: <Clock size={18} strokeWidth={1.25} />, linhas: ["Segunda a sexta", "09h00 às 18h00"] }
  ]

  const campo = "w-full bg-transparent border-0 border-b border-linha px-0 py-3 text-tinta placeholder:text-suave/50 focus:outline-none focus:border-ouro transition-colors";
  const etiqueta = "text-[11px] font-medium uppercase tracking-[0.2em] text-suave";

  return (
    <section id="contato" className="py-24 md:py-32 bg-papel">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-16 md:mb-20">
          <span className="text-ouro mb-6 text-[15px] uppercase">Contato</span>
          <h2 className="font-titulo text-4xl md:text-5xl font-medium text-tinta leading-tight mb-6">Fale conosco</h2>
          <p className="text-suave font-light leading-relaxed">
            Estamos à disposição para analisar o seu caso. Entre em contato para agendar uma consulta.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">

          <div className="lg:col-span-4">
            <div className="bg-tinta text-marfim p-8 md:p-10 h-full flex flex-col gap-8">
              {informacoes.map((item) => (
                <div key={item.id} className="flex items-start gap-4">
                  <span className="text-ouro-claro mt-0.5">{item.icone}</span>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-marfim/50 mb-2">{item.titulo}</p>
                    {item.linhas.map((l) => (
                      <p key={l} className="font-light text-marfim/90">{l}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8">
            <form className="bg-white border border-linha p-8 md:p-12 flex flex-col gap-8">
              <h3 className="font-titulo text-2xl md:text-3xl font-medium text-tinta">Envie sua mensagem</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-1">
                  <label htmlFor="nome" className={etiqueta}>Nome completo</label>
                  <input type="text" id="nome" className={campo} placeholder="Seu nome" />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="telefone" className={etiqueta}>Telefone / WhatsApp</label>
                  <input type="tel" id="telefone" className={campo} placeholder="(00) 00000-0000" />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="email" className={etiqueta}>E-mail</label>
                <input type="email" id="email" className={campo} placeholder="seu.email@exemplo.com" />
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="mensagem" className={etiqueta}>Como podemos ajudar?</label>
                <textarea id="mensagem" rows="4" className={`${campo} resize-none`} placeholder="Descreva brevemente o seu caso..."></textarea>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-2">
                <p className="text-xs text-suave/80 font-light max-w-sm">
                  Suas informações são tratadas com sigilo, conforme nossa <a href="#politicas" className="underline underline-offset-2 hover:text-ouro">Política de Privacidade</a>.
                </p>
                <button
                  onClick={enviowhats}
                  type="button"
                  className="group inline-flex items-center justify-center gap-3 bg-tinta text-marfim px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.2em] hover:bg-ouro hover:text-tinta transition-colors duration-300"
                >
                  Enviar mensagem
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
