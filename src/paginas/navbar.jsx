import { useState } from "react";
import { X, Menu } from 'lucide-react'
import logo from "../assets/img/logo.png"

export default function NavBar() {
    const [MenuOpen, setMenuOpen] = useState(false)
    const [Ativo, setAtivo] = useState("Inicio")

    const clique = (e, nome) => {
        e.preventDefault();
        setAtivo(nome);
        setMenuOpen(true);

        const element = document.getElementById(nome);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const link = [
        {
            id: 1,
            nome: "Inicio",
            url: "#inicio"
        },
        {
            id: 2,
            nome: "Sobre",
            url: "#sobre"
        },
        {
            id: 3,
            nome: "Atuação",
            url: "#atuacao"
        },
        {
            id: 4,
            nome: "Contato",
            url: "#contato"
        }
    ]

    return (
        <>
            <nav className="bg-amber-400 top-0 left-0 z-50 fixed w-full ">
                <div className="flex justify-between mx-auto px-5 m-w-7xl h-20">
                    <img src={logo}
                        alt="Logo do site" />
                    <ul className="hidden gap-10 items-center md:flex">
                        {link.map((item) => (
                            <li key={item.id}>
                                <a href={`${item.url}`}
                                    onClick={(e) => clique(e, item.url)}
                                    className={`pb-1 transition-all text-lg font-medium ${Ativo === item.nome
                                        ? "border-b-4 border-amber-900"
                                        : ""}`}>
                                    {item.nome}</a>
                            </li>
                        ))}
                    </ul>

                    <button
                        onClick={() => setMenuOpen(!MenuOpen)}
                        className=" text-3xl md:hidden">
                        {MenuOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {MenuOpen && (
                    <ul className="flex justify-center items-center gap-4 py-4 text-gray-100 font-[Medula_One] md:hidden">
                        {link.map((item) => (
                            <li key={item.id}>
                                <a
                                    href={`${item.url}`}
                                    onClick={(e) => clique(e, item.url)}
                                    className={`pb-1 transition-all text-3xl ${Ativo === item.nome
                                        ? "border-b-4 border-amber-200"
                                        : ""
                                        }`}
                                >
                                    {item.nome}
                                </a>
                            </li>
                        ))}
                    </ul>
                )}
            </nav>
        </>
    );
}   