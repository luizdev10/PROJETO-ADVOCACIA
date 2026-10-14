import Photo from "../assets/img/photoini.png"
import { ArrowRight } from "lucide-react";

export default function Inicio() {
  const quality = [
    { id: 1, titulo: "Atendimento", description: "Presencial e online" },
    { id: 2, titulo: "Transparência", description: "Em cada etapa do caso" },
    { id: 3, titulo: "Sigilo", description: "Profissional absoluto" }
  ]

  const irPara = (e, url) => {
    e.preventDefault();
    document.querySelector(url)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="inicio" className="relative min-h-screen bg-tinta flex items-center pt-28 pb-16 overflow-hidden">

    
      <div className="absolute inset-0 pointer-events-none hidden lg:block" aria-hidden="true">
        <div className="max-w-7xl mx-auto h-full px-6 grid grid-cols-4">
          <div className="border-l border-white/[0.04]"></div>
          <div className="border-l border-white/[0.04]"></div>
          <div className="border-l border-white/[0.04]"></div>
          <div className="border-l border-r border-white/[0.04]"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-12 gap-16 items-center w-full">

        <div className="lg:col-span-7 flex flex-col">
          <span className="mb-8 text-ouro text-[20px]">Escritório de Advocacia</span>

          <h1 className="font-titulo text-5xl md:text-6xl lg:text-7xl font-medium text-marfim leading-[1.05] mb-8">
            Defesa jurídica conduzida com <em className="text-ouro-claro">rigor</em> e <em className="text-ouro-claro">discrição</em>.
          </h1>

          <p className="text-base md:text-lg text-marfim/60 font-light mb-12 leading-relaxed max-w-xl">
            Atuação especializada em Direito Previdenciário, Trabalhista, Cível e Criminal. Cada caso recebe análise individual e acompanhamento próximo, do primeiro atendimento à decisão final.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href="#contato"
              onClick={(e) => irPara(e, "#contato")}
              className="group inline-flex items-center justify-center gap-3 bg-ouro text-tinta px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.2em] hover:bg-ouro-claro transition-colors duration-300"
            >
              Agendar consulta
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
            </a>
            <a
              href="#atuacao"
              onClick={(e) => irPara(e, "#atuacao")}
              className="inline-flex items-center justify-center px-8 py-4 border border-marfim/25 text-marfim/80 text-[12px] font-medium uppercase tracking-[0.2em] hover:border-ouro-claro hover:text-ouro-claro transition-colors duration-300"
            >
              Áreas de atuação
            </a>
          </div>

          <div className="grid grid-cols-3 border-t border-white/10 pt-8 max-w-xl">
            {quality.map((item, i) => (
              <div key={item.id} className={`${i > 0 ? "pl-5 border-l border-white/10" : ""} pr-5`}>
                <p className="font-titulo text-xl md:text-2xl text-marfim mb-1">{item.titulo}</p>
                <p className="text-xs text-marfim/50 font-light">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 relative hidden md:block">
          <div className="relative w-full max-w-md mx-auto lg:ml-auto aspect-[4/5]">
          
            <div className="absolute inset-0 border border-ouro/40 translate-x-5 translate-y-5" aria-hidden="true"></div>

            <img
              src={Photo}
              alt="Escritório Dantas & Silva Advocacia"
              className="relative z-10 object-cover w-full h-full object-center grayscale-[35%]"
            />

            <div className="absolute -bottom-6 -left-6 z-20 bg-marfim px-6 py-5 hidden lg:block">
              <p className="text-[10px] uppercase tracking-[0.3em] text-ouro mb-1">Desde a primeira consulta</p>
              <p className="font-titulo text-xl text-tinta">Compromisso com a ética</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
