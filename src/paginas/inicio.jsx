import Photo from "../assets/img/photoini.png"
import { MessageCircleMore } from "lucide-react";

export default function Inicio() {

  const quality = [
    {
      id: 1,
      description: "Atendimento agilizado"
    },
    {
      id: 2,
      description: "Transparência total"
    },
    {
      id: 3,
      description: "Atendimento humanizado"
    }
  ]
  return (
    <>

      <section className=" bg-gray-800 h-screen overflow-hidden pt-20 flex flex-col justify-center">
     
        <div className="p-10 relative z-10 text-white">
          <h1 className="text-5xl font-[Roboto] text-amber-500 text-center">Soluções Jurídicas Ágeis</h1>
          <p className="text-xl pt-7 font-light text-center">Escritório de advocacia atuante em causas Previdenciárias, trabalhistas, causas cíveis e criminais.</p>
        </div>
        <div className="z-10 flex justify-center items-center">
          <div className="flex gap-2 bg-amber-700 rounded-full px-6 py-2 font-semibold text-white absolute cursor-pointer transition-all border-b-2 border-amber-950 hover:bg-amber-600 hover:border-b-4 hover:border-amber-800">
            <MessageCircleMore />
            <a href="" className="font-light">Agendar Consulta Jurídica</a>
          </div>
        </div>

        <div className="mt-12 z-10 flex flex-wrap justify-center items-center gap-3 text-white font-medium">
          {quality.map(item => (
            <div key={item.id}
            className="flex items-center gap-2">
              <div className="w-2 h-2 bg-amber-200 rounded-full flex justify-center items-center">
              </div>
              <span className="text-white font-light">{item.description}</span>
            </div>
          ))}
        </div>
      </section>

    </>
  );
}
{/*<div className="w-2 h-2 bg-amber-200 rounded-full flex justify-center items-center"></div>
          <span className="text-amber-100">Atendimento agilizado</span>*/}