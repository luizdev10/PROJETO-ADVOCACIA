import { useState } from "react";
import { Plus } from "lucide-react";

export default function Perguntas() {
    const [openQuestions, setOpenQuestions] = useState(null);

    const toggleQuestion = (index) => {
        setOpenQuestions(openQuestions === index ? null : index);
    };
    
    const faqs = [
  {
    pergunta: "Como funciona a primeira consulta com o escritório?",
    resposta: "Analisamos o seu caso de forma individual e detalhada. O atendimento pode ser realizado presencialmente em nosso escritório ou online via WhatsApp, onde orientamos sobre a viabilidade do seu direito e os documentos necessários."
  },
  {
    pergunta: "Moro em outra cidade ou estado, consigo ser atendido?",
    resposta: "Sim. Com a digitalização dos processos judiciais em todo o Brasil, conseguimos atender e representar clientes de qualquer região com total segurança e acompanhamento online."
  },
  {
    pergunta: "Como sei se estou protegido contra o golpe do falso advogado?",
    resposta: "Todos os nossos canais de atendimento e chaves de pagamento são oficiais. Nunca solicitamos depósitos ou taxas de urgência via PIX para liberação de valores de processos sem comunicação prévia e transparente."
  },
  {
    pergunta: "Quais documentos preciso enviar para iniciar uma análise?",
    resposta: "Geralmente precisamos do seu documento de identificação (RG/CPF ou CNH), comprovante de residência e os documentos específicos do caso (carteira de trabalho, extratos do INSS, contratos ou boletins de ocorrência)."
  },

  {
    pergunta: "Fui demitido sem justa causa, quais verbas tenho direito a receber?",
    resposta: "Você tem direito ao saldo de salário, aviso prévio (trabalhado ou indenizado), 13º salário proporcional, férias vencidas e proporcionais com 1/3, saque do FGTS com multa rescisória de 40% e guias do seguro-desemprego."
  },
  {
    pergunta: "Trabalhei sem carteira assinada, ainda posso cobrar meus direitos?",
    resposta: "Sim. A falta de registro em carteira é uma irregularidade da empresa. É possível ingressar com uma Reclamatória Trabalhista para reconhecer o vínculo de emprego retroativo e receber todas as verbas do período."
  },
  {
    pergunta: "O que é rescisão indireta e quando posso pedir?",
    resposta: "É a 'justa causa aplicada pelo empregado ao patrão'. Ocorre quando a empresa comete faltas graves, como atrasos frequentes de salário, não recolhimento de FGTS, assédio moral ou condições perigosas de trabalho."
  },

  {
    pergunta: "Tive meu benefício ou aposentadoria negada pelo INSS, o que fazer?",
    resposta: "A negativa administrativa do INSS não é definitiva. É possível ingressar com uma ação judicial para reavaliar a decisão, apresentar novas perícias ou documentos e buscar a concessão com pagamento das parcelas atrasadas."
  },
  {
    pergunta: "Quem tem direito ao BPC/LOAS e qual o valor?",
    resposta: "O BPC é um benefício de um salário mínimo mensal voltado para idosos a partir de 65 anos ou pessoas com deficiência de qualquer idade que comprovem baixa renda familiar e incapacidade de prover o próprio sustento."
  },


  {
    pergunta: "Meu nome foi negativado indevidamente no SPC/Serasa, o que fazer?",
    resposta: "Inscrições indevidas geram direito ao pedido de liminar para remoção imediata do seu nome dos órgãos de proteção ao crédito, além da possibilidade de indenização por danos morais."
  },
  {
    pergunta: "Quanto tempo demora um processo de divórcio ou inventário?",
    resposta: "Se houver acordo entre as partes (consensual) e cumpridos os requisitos, o procedimento pode ser finalizado rapidamente via cartório. Caso haja divergência ou filhos menores, será feito pela via judicial."
  },


  {
    pergunta: "O que fazer em caso de prisão em flagrante ou intimação para delegacia?",
    resposta: "Acompanhamento jurídico imediato é essencial para garantir os direitos constitucionais do intimado ou detido, acompanhar depoimentos e avaliar pedidos de liberdade provisória ou relaxamento de prisão."
  }
];
  return (
    <section id="perguntas" className="py-24 md:py-32 bg-marinho text-marfim">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <span className="text-ouro mb-6 text-[15px] uppercase">Dúvidas Frequentes</span>
            <h2 className="font-titulo text-4xl md:text-5xl font-medium leading-tight mb-6">
              Perguntas que recebemos com frequência
            </h2>
            <p className="text-marfim/60 font-light leading-relaxed">
              Respostas objetivas para as principais questões dos nossos clientes. Cada caso, porém, merece análise individual.
            </p>
          </div>
        </div>

        <div className="lg:col-span-8 border-t border-white/10">
          {faqs.map((item, index) => {
            const isOpen = openQuestions === index;
            return (
              <div key={index} className="border-b border-white/10">
                <button
                  onClick={() => toggleQuestion(index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-start justify-between gap-6 py-6 text-left group"
                >
                  <span className={`font-titulo text-xl md:text-[22px] leading-snug transition-colors duration-300 ${isOpen ? "text-ouro-claro" : "text-marfim group-hover:text-ouro-claro"}`}>
                    {item.pergunta}
                  </span>
                  <Plus
                    strokeWidth={1.25}
                    className={`mt-1 w-5 h-5 shrink-0 text-ouro-claro transition-transform duration-300 ${isOpen ? "rotate-45" : "rotate-0"}`}
                  />
                </button>
                <div className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <p className="pb-7 pr-10 text-marfim/65 font-light leading-relaxed">{item.resposta}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}
