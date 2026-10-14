import { ShieldCheck, Lock, Clock } from "lucide-react"
export default function Sobre() {

    const motivos = [
        {
            id: 1,
            titulo: "Transparência",
            descricao: "Avaliação honesta das chances do seu caso, sem falsas promessas de resultado.",
            icone: <ShieldCheck className="w-6 h-6" strokeWidth={1.25} />
        },
        {
            id: 2,
            titulo: "Sigilo e Privacidade",
            descricao: "Total confidencialidade no tratamento de documentos e informações pessoais.",
            icone: <Lock className="w-6 h-6" strokeWidth={1.25} />
        },
        {
            id: 3,
            titulo: "Atendimento Próximo",
            descricao: "Canais diretos via WhatsApp e reuniões presenciais ou online, com retorno ágil às suas dúvidas.",
            icone: <Clock className="w-6 h-6" strokeWidth={1.25} />
        }
    ]
    return (
        <section id="sobre" className="bg-marfim py-24 md:py-32">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">

                    <div className="lg:col-span-5">
                        <span className="rotulo mb-6">O Escritório</span>
                        <h2 className="font-titulo text-4xl md:text-5xl font-medium text-tinta leading-tight mb-8">
                            Nossa história <br className="hidden md:block" />& propósito
                        </h2>
                        <blockquote className="border-l border-ouro pl-6 font-titulo italic text-2xl text-marinho-claro leading-snug">
                            “Entender o seu caso é o primeiro passo para defender seus direitos.”
                        </blockquote>
                    </div>

                    <div className="lg:col-span-6 lg:col-start-7 flex flex-col gap-6 text-texto font-light leading-relaxed text-[17px]">
                        <p>
                            Na <span className="font-medium text-tinta">Dantas & Silva Advocacia</span>, cada cliente é atendido de forma individual. Com uma equipe especializada e em constante aperfeiçoamento, combinamos experiência prática e atuação estratégica para oferecer segurança jurídica a pessoas e empresas.
                        </p>
                        <p>
                            Seja na resolução preventiva de conflitos ou na atuação contenciosa e criminal, oferecemos um atendimento <span className="font-medium text-tinta">próximo, ético e comprometido com a defesa efetiva dos seus interesses</span>.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-px bg-linha border border-linha mt-20">
                    {motivos.map((item) => (
                        <div key={item.id} className="bg-marfim p-8 md:p-10">
                            <div className="text-ouro mb-6">{item.icone}</div>
                            <h3 className="font-titulo text-2xl font-medium text-tinta mb-3">{item.titulo}</h3>
                            <p className="text-suave font-light leading-relaxed text-[15px]">{item.descricao}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
