import Photo from "../assets/img/photoini.png"
import { MessageCircleMore, Scale, ShieldCheck, UserCheck } from "lucide-react";

export default function Inicio() {
  const quality = [
    {
      id: 1,
      description: "Atendimento Agilizado",
      icon: <MessageCircleMore className="w-5 h-5 text-amber-500" />
    },
    {
      id: 2,
      description: "Transparência Total",
      icon: <ShieldCheck className="w-5 h-5 text-amber-500" />
    },
    {
      id: 3,
      description: "Atendimento Humanizado",
      icon: <UserCheck className="w-5 h-5 text-amber-500" />
    }
  ]

  return (
    <section id="inicio" className="relative min-h-screen bg-gray-900 flex items-center pt-20 overflow-hidden">
   
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-amber-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-gray-700/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center justify-between w-full">
        
      
        <div className="lg:w-1/2 flex flex-col justify-center text-left max-w-2xl py-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/80 border border-gray-700 w-fit mb-6 shadow-lg backdrop-blur-sm">
            <Scale className="w-4 h-4 text-[#C5A059]" />
            <span className="text-gray-300 text-sm font-medium tracking-wide uppercase">Escritório de Advocacia</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-titulo leading-tight mb-6">
            <span className="text-white">Soluções Jurídicas</span> <br />
            <span className="bg-gradient-to-r from-[#C5A059] to-amber-300 bg-clip-text text-transparent">Ágeis e Seguras</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 font-light mb-10 leading-relaxed max-w-xl">
            Atuação especializada em causas Previdenciárias, Trabalhistas, Cíveis e Criminais. Defendemos seus direitos com excelência.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center mb-16">
            <a href="#" className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-[#C5A059] to-amber-600 rounded-full px-8 py-4 font-semibold text-white shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
              <MessageCircleMore className="relative z-10 w-5 h-5" />
              <span className="relative z-10">Agendar Consulta Jurídica</span>
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-white font-medium">
            {quality.map(item => (
              <div key={item.id} className="flex items-center gap-3 bg-gray-800/50 border border-gray-700/50 backdrop-blur-md px-4 py-3 rounded-xl shadow-sm hover:border-[#C5A059]/50 transition-colors duration-300">
                {item.icon}
                <span className="text-gray-300 font-light text-sm">{item.description}</span>
              </div>
            ))}
          </div>
        </div>

    
        <div className="lg:w-1/2 mt-16 lg:mt-0 relative hidden md:flex justify-end">
          <div className="relative w-full max-w-lg aspect-[4/5] right-0">
      
            <div className="absolute inset-0 bg-gradient-to-tr from-[#C5A059]/20 to-transparent blur-3xl rounded-full translate-x-4 translate-y-4"></div>
            
       
            <img 
              src={Photo} 
              alt="Advocacia" 
              className="relative z-10 object-cover w-full h-full rounded-2xl shadow-2xl border border-gray-700/50 object-center"
            />
            
    
            <div className="absolute -bottom-8 -left-8 z-20 bg-gray-800/90 backdrop-blur-xl border border-gray-700/50 p-6 rounded-2xl shadow-2xl shadow-black/60 hover:-translate-y-2 transition-transform duration-300 hidden lg:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#C5A059]/10 rounded-full flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-[#C5A059]" />
                </div>
                <div>
                  <p className="text-white font-bold text-xl">100%</p>
                  <p className="text-gray-400 text-sm font-light">Sigilo e Segurança</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}