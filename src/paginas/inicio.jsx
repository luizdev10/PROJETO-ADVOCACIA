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

      <section className=" h-screen overflow-hidden pt-20 flex flex-col justify-center">
        <img className="absolute inset-0 w-full h-full object-cove" src={Photo} alt="" />
        <div class="absolute inset-0 bg-black/40"></div>
        <div className="p-10 relative z-10 text-white">
          <h1 className="text-4xl">Soluções Jurídicas Ágeis.</h1>
          <p className="text-xl pt-7">Escritório de advocacia atuante em causas Previdenciárias, trabalhistas, causas cíveis e criminais.</p>
        </div>
        <div className="z-10 flex justify-center items-center">
          <div className=" flex gap-2 bg-amber-950 rounded-full px-6 py-2 font-semibold text-white cursor-pointer ">
            <MessageCircleMore />
            <a href="">Agendar Consulta Jurídica</a>
          </div>
        </div>

        <div className="mt-12 z-10 flex flex-wrap justify-center items-center gap-3 text-white font-medium">
          {quality.map(item => (
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-amber-200 rounded-full flex justify-center items-center">
              </div>
              <span className="text-amber-100">{item.description}</span>
            </div>
          ))}
        </div>
      </section>

    </>
  );
}
{/*<div className="w-2 h-2 bg-amber-200 rounded-full flex justify-center items-center"></div>
          <span className="text-amber-100">Atendimento agilizado</span>*/}