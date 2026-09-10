import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contato() {
  return (
    <section id="contato" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Fale Conosco</h2>
          <div className="bg-[#C5A059] h-1 w-24 mx-auto rounded mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            Estamos prontos para analisar o seu caso. Entre em contato conosco para agendar uma consulta.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Informações de Contato */}
          <div className="lg:w-1/3 flex flex-col gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col gap-6 h-full">
              <h3 className="text-2xl font-bold text-gray-900 border-b border-gray-100 pb-4">Informações</h3>
              
              <div className="flex items-start gap-4">
                <div className="bg-[#C5A059]/10 p-3 rounded-full text-[#C5A059]">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Telefone / WhatsApp</p>
                  <p className="text-gray-600 mt-1">(11) 99999-9999</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#C5A059]/10 p-3 rounded-full text-[#C5A059]">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">E-mail</p>
                  <p className="text-gray-600 mt-1">contato@advocaciadantas.com.br</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#C5A059]/10 p-3 rounded-full text-[#C5A059]">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Endereço</p>
                  <p className="text-gray-600 mt-1">Av. Paulista, 1000 - Bela Vista<br/>São Paulo - SP</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#C5A059]/10 p-3 rounded-full text-[#C5A059]">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Horário de Atendimento</p>
                  <p className="text-gray-600 mt-1">Segunda a Sexta<br/>09h00 às 18h00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulário de Contato */}
          <div className="lg:w-2/3">
            <form className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col gap-6">
              <h3 className="text-2xl font-bold text-gray-900 border-b border-gray-100 pb-4">Envie sua Mensagem</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="nome" className="text-sm font-semibold text-gray-700">Nome Completo</label>
                  <input type="text" id="nome" className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all" placeholder="Seu nome" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="telefone" className="text-sm font-semibold text-gray-700">Telefone / WhatsApp</label>
                  <input type="tel" id="telefone" className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all" placeholder="(00) 00000-0000" />
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-semibold text-gray-700">E-mail</label>
                <input type="email" id="email" className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all" placeholder="seu.email@exemplo.com" />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="mensagem" className="text-sm font-semibold text-gray-700">Como podemos ajudar?</label>
                <textarea id="mensagem" rows="4" className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all resize-none" placeholder="Descreva brevemente o seu caso..."></textarea>
              </div>

              <button type="button" className="bg-gray-900 text-white font-semibold py-4 rounded-lg hover:bg-[#C5A059] transition-colors duration-300 mt-2">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
