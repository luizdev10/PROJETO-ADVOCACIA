import { Briefcase, FileText, Scale, Shield } from "lucide-react"
export default function Atuacao() {

  const area = [
    {
      id: 1,
      title: "Direito Trabalhista",
      subtitle: "Proteção e garantia dos seus direitos no ambiente de trabalho.",
      icon: <Briefcase />,
      description: [
        { topico: "Reclamatórias trabalhistas e rescisão indireta" },
        { topico: "Cálculo e cobrança de horas extras e verbas rescisórias" },
        { topico: "Acidentes de trabalho e doenças ocupacionais" },
        { topico: "Rescisão de contrato e assédio no trabalho" }
      ]
    },
    {
      id: 2,
      title: "Direito Previdenciário",
      subtitle: "Segurança para a sua aposentadoria e benefícios junto ao INSS.",
      icon: <FileText />,
      description: [
        { topico: "Pedidos e revisões de Aposentadorias" },
        { topico: "Benefício de Prestação Continuada (BPC / LOAS)" },
        { topico: "Auxílio-doença, auxílio-acidente e pensão por morte" },
        { topico: "Planejamento previdenciário e recursos administrativos" }
      ]
    },
    {
      id: 3,
      title: "Direito Cível",
      subtitle: "Soluções jurídicas para conflitos do dia a dia e relações interpessoais.",
      icon: <Scale />,
      description: [
        { topico: "Contratos, indenizações e danos morais ou materiais" },
        { topico: "Direito de Família (divórcio, pensão alimentícia e guarda)" },
        { topico: "Inventários, partilha de bens e sucessões" },
        { topico: "Direito do Consumidor (cobranças indevidas e negativados)" }
      ]
    },
    {
      id: 4,
      title: "Direito Criminal",
      subtitle: "Defesa técnica, estratégica e humanizada em matéria penal.",
      icon: <Shield />,
      description: [
        { topico: "Acompanhamento em delegacias e depoimentos" },
        { topico: "Defesa em processos e procedimentos criminais" },
        { topico: "Pedidos de liberdade provisória e relaxamento de prisão" },
        { topico: "Acompanhamento em audiências de custódia" }
      ]
    }
  ];
  return (
    <section id="atuacao" className="bg-papel py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-8 mb-16 md:mb-20 items-end">
          <div className="lg:col-span-6">
            <span className="text-ouro mb-6 text-[15px] uppercase">Áreas de Atuação</span>
            <h2 className="font-titulo text-4xl md:text-5xl font-medium text-tinta leading-tight">
              Como podemos ajudar você
            </h2>
          </div>
          <p className="lg:col-span-5 lg:col-start-8 text-suave font-light leading-relaxed">
            Atendimento especializado e compromisso com a defesa dos seus interesses, em quatro frentes de atuação.
          </p>
        </div>

        <div className="grid md:grid-cols-2 border-t border-l border-linha">
          {area.map((item, i) => (
            <article
              key={item.id}
              className="group relative border-r border-b border-linha p-8 md:p-12 bg-papel hover:bg-white transition-colors duration-500"
            >
              <span className="absolute top-0 left-0 h-px w-0 bg-ouro transition-all duration-500 group-hover:w-full" aria-hidden="true"></span>
              <div className="flex items-start justify-between mb-8">
                <span className="text-ouro [&>svg]:w-7 [&>svg]:h-7 [&>svg]:stroke-[1.25]">{item.icon}</span>
                <span className="font-titulo text-lg text-suave/60">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="font-titulo text-3xl font-medium text-tinta mb-3">{item.title}</h3>
              <p className="text-suave font-light mb-8 leading-relaxed">{item.subtitle}</p>
              <ul className="space-y-3 border-t border-linha pt-6">
                {item.description.map((t, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-texto">
                    <span className="mt-2 h-px w-3 shrink-0 bg-ouro" aria-hidden="true"></span>
                    {t.topico}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
