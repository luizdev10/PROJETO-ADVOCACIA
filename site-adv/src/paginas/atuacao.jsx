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
    <section id="atuacao" className="bg-gray-100 py-4">
      <div className="text-center px-5">
        <h1 className="text-gray-900 text-3xl pb-4">Como Ajudamos Você</h1>
        <p className="text-xl pb-5 text-gray-900 font-light">Atendimento especializado e compromisso com a defesa dos seus interesses.</p>
      </div>
      <div className="flex justify-center">
        <div className="">
          {area.map((item) => (
            <div
              key={item.id}
              className="group bg-gray-200 border-2 text-gray-900 border-gray-300 p-4 mb-4 w-90 rounded-lg hover:border-orange-400 transition-all hover:shadow-2xl">
              <h2 className="text-2xl pb-2 font-semibold flex items-center gap-2 cursor-pointer group-hover:text-orange-600 transition-colors"><span className="h-10 w-10 bg-gray-300 flex justify-center items-center rounded-full group-hover:bg-orange-200 transition-all">{item.icon}</span>{item.title}</h2>
              <p className="pb-3 text-md font-ligth">{item.subtitle}</p>
              <ul>
                {item.description.map((t, index) => (
                  <li key={index}
                    className="flex items-center gap-2 text-sm">
                    <div className="w-1 h-1 bg-orange-300 rounded-full flex justify-center items-center"></div>
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