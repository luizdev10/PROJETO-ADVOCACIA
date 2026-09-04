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
        <section className="bg-gray-300 py-15 font-[Roboto]">
            <div className="text-center px-5">
                <h1 className="text-gray-700 text-3xl pb-2">Como Ajudamos Você</h1>
                <p className="text-xl pb-15 text-gray-800 font-light">Atendimento especializado e compromisso com a defesa dos seus interesses.</p>
            </div>
            <div className="flex justify-center">
                <div className="">
                    {area.map((item) => (
                        <div
                            key={item.id}
                            className="bg-gray-500 border-2 border-gray-600 p-4 mb-2 w-80 rounded-lg hover:border-gray-400 transition-all">
                            <h2 className="text-2xl pb-2 flex items-center gap-2"><span>{item.icon}</span>{item.title}</h2>
                            <p className="pb-3 text-md">{item.subtitle}</p>
                            <ul>
                                {item.description.map((t, index) => (
                                    <li key={index} 
                                    className="flex items-center gap-2 text-sm">
                                        <div className="w-1 h-1 bg-amber-900 rounded-full flex justify-center items-center"></div>
                                        {t.topico}
                                    </li>
                                ))

                                }
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}