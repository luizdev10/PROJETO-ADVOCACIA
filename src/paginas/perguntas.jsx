import { useState } from "react";
import { ChevronDown } from "lucide-react";

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
    <section id="perguntas" className="py-16 bg-gray-900 text-white px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-titulo text-[#C5A059] text-center mb-3">
          Dúvidas Frequentes
        </h2>
        <p className="text-gray-400 text-center mb-10">
          Respostas rápidas para as principais perguntas dos nossos clientes.
        </p>
        <div className="space-y-2">
          {faqs.map((item, index) => {
            const isOpen = openQuestions === index;
            return (
              <div key={index} className="flex flex-col">
                <button
                  onClick={() => toggleQuestion(index)}
                  className={`w-full flex flex-row items-center justify-between bg-white text-gray-900 p-4 rounded-lg transition-all ${
                    isOpen
                      ? "border-amber-500 shadow-md rounded-b-none"
                      : "border-gray-700"
                  }`}
                >
                  <span className="font-medium text-left">{item.pergunta}</span>
                  <ChevronDown
                    className={`${
                      isOpen ? "rotate-180" : "rotate-0"
                    } transition-all`}
                  />
                </button>
                {isOpen && (
                  <div className="bg-white text-gray-900 p-4 rounded-b-lg border-1 border-gray-200">
                    <p>{item.resposta}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
    )
}