import { ArrowLeft } from "lucide-react";

export default function Politicas() {
  const voltar = (e) => {
    e.preventDefault();
    window.location.hash = "#inicio";
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100">
        
        <button onClick={voltar} className="flex items-center gap-2 text-[#C5A059] hover:text-amber-700 font-medium mb-8 transition-colors">
          <ArrowLeft size={20} /> Voltar para o Início
        </button>

        <h1 className="text-4xl font-bold text-gray-900 mb-6">Políticas de Privacidade</h1>
        <p className="text-gray-500 mb-10 text-sm">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>

        <div className="space-y-8 text-gray-700 font-light leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introdução</h2>
            <p>
              A privacidade e a segurança dos seus dados são nossa prioridade. Esta Política de Privacidade descreve como o escritório <strong>Dantas & Silva Advocacia</strong> coleta, usa e protege as informações pessoais que você nos fornece através de nosso site, em conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD - Lei nº 13.709/2018).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Coleta de Informações</h2>
            <p>
              Coletamos informações pessoais que você nos fornece voluntariamente ao preencher formulários de contato em nosso site, tais como:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Nome completo</li>
              <li>Endereço de e-mail</li>
              <li>Número de telefone/WhatsApp</li>
              <li>Informações sobre o seu caso jurídico enviadas na mensagem</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Uso das Informações</h2>
            <p>As informações coletadas são utilizadas exclusivamente para:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Responder às suas solicitações e dúvidas.</li>
              <li>Agendar consultas jurídicas.</li>
              <li>Realizar análise prévia de viabilidade jurídica do seu caso.</li>
              <li>Envio de comunicações estritamente relacionadas ao atendimento jurídico.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Compartilhamento de Dados</h2>
            <p>
              O escritório garante rigoroso sigilo profissional. <strong>Não vendemos, alugamos ou compartilhamos</strong> suas informações pessoais com terceiros sob nenhuma circunstância, exceto quando exigido por lei ou ordem judicial.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Segurança dos Dados</h2>
            <p>
              Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados pessoais contra acesso não autorizado, alteração, divulgação ou destruição. Todas as comunicações contendo detalhes sensíveis do seu caso estão protegidas pelo sigilo advogado-cliente.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Seus Direitos</h2>
            <p>De acordo com a LGPD, você tem o direito de:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Confirmar a existência de tratamento de seus dados.</li>
              <li>Acessar, corrigir ou atualizar seus dados.</li>
              <li>Solicitar a exclusão de seus dados de nossa base.</li>
              <li>Revogar consentimentos concedidos anteriormente.</li>
            </ul>
            <p className="mt-4">
              Para exercer seus direitos, entre em contato através do e-mail: <strong>contato@advocaciadantas.com.br</strong>.
            </p>
          </section>
        </div>

      </div>
    </div>
  );
}
