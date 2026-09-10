import { ShieldCheck, Lock, Zap } from "lucide-react"
export default function Sobre() {

    const motivos = [
        {
            id: 1,
            titulo: "Transparência Absoluta",
            descricao: "Avaliação honesta das chances do seu caso, sem falsas promessas de resultado.",
            icone: <ShieldCheck className="w-8 h-8 text-[#C5A059]" />
        },
        {
            id: 2,
            titulo: "Sigilo e Privacidade",
            descricao: "Total confidencialidade no tratamento de documentos e informações pessoais.",
            icone: <Lock className="w-8 h-8 text-[#C5A059]" />
        },
        {
            id: 3,
            titulo: "Agilidade no Atendimento",
            descricao: "Canais diretos via WhatsApp e reuniões presenciais ou online com respostas rápidas para tirar suas dúvidas.",
            icone: <Zap className="w-8 h-8 text-[#C5A059]" />
        }
    ]
    return (
        <>
            <section id="sobre" className="bg-gray-100 py-4 flex flex-col items-center">
                <div className="text-center px-5 flex items-center flex-col pt-20">
                    <h1 className="text-gray-900 text-5xl pb-4 font-semibold">Sobre Nós</h1>
                    <div className="bg-amber-400 h-0.5 w-40 rounded "></div>
                    <p className="text-2xl pb-5 font-bold text-amber-700">Nossa História & Propósito</p>
                    <p className="w-90 text-lg font-light">Na <span className="font-bold text-amber-700">Dantas & Silva Advocacia</span>, entender o seu caso é o primeiro passo para defender seus direitos. Com uma equipe especializada e focada na constante busca por excelência, combinamos experiência prática e atuação estratégica para entregar segurança jurídica a pessoas e empresas. </p>
                    <p className="w-90 text-lg font-light">Seja na resolução preventiva de conflitos ou na atuação contenciosa e criminal, oferecemos um <span className="font-bold text-amber-700">atendimento próximo, ético e focado em resultados reais.</span></p>
                </div>
                {motivos.map((item) => (
                    <div key={item.id} className="flex flex-col justify-center items-center w-85 pt-4 px-6 text-center bg-gray-200 rounded-lg mt-5">  
                    <div className="mb-4 h-15 w-15 bg-amber-400/40 rounded-full flex items-center justify-center ">
                        {item.icone}
                    </div>
                    <div className="pb-5">
                        <h3 className="text-2xl pb-2 font-semibold text-gray-900">{item.titulo}</h3>
                        <p className="text-lg font-light text-gray-900">{item.descricao}</p>
                    </div>
                </div>
                ))}
            </section>

        </>
    )
}