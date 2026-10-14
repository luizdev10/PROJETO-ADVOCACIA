import { useState, useEffect } from "react";
import { X, Menu } from 'lucide-react'
import logo from "../assets/img/adv_logo.svg"

export default function NavBar() {
    const [MenuOpen, setMenuOpen] = useState(false)
    const [Ativo, setAtivo] = useState("#inicio")
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const clique = (e, url) => {
        e.preventDefault();
        setAtivo(url);
        setMenuOpen(false);

        // Update the hash to trigger App.jsx routing if needed
        window.location.hash = url;

        // Give React a tiny fraction of a second to render the main page if coming from Privacy
        setTimeout(() => {
            const element = document.querySelector(url);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }, 50);
    };

    const link = [
        { id: 1, nome: "Início", url: "#inicio" },
        { id: 2, nome: "Atuação", url: "#atuacao" },
        { id: 3, nome: "O Escritório", url: "#sobre" },
        { id: 4, nome: "Dúvidas", url: "#perguntas" },
        { id: 5, nome: "Contato", url: "#contato" }
    ]

    return (
        <nav className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 ${scrolled || MenuOpen ? "bg-tinta/95 backdrop-blur-sm border-b border-white/10 py-3" : "bg-transparent border-b border-transparent py-6"}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

                {/* Logo */}
                <a href="#inicio" onClick={(e) => clique(e, "#inicio")} className="flex items-center gap-3 cursor-pointer">
                    <img src={logo} alt="" className="h-9 w-9 object-contain" />
                    <span className="flex flex-col leading-none">
                        <span className="font-titulo text-xl md:text-2xl font-semibold text-marfim tracking-wide">Dantas & Silva</span>
                        <span className="text-[10px] uppercase tracking-[0.35em] text-ouro-claro mt-1">Advocacia</span>
                    </span>
                </a>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-9">
                    {link.map((item) => (
                        <li key={item.id}>
                            <a
                                href={item.url}
                                onClick={(e) => clique(e, item.url)}
                                className={`relative text-[12px] uppercase tracking-[0.2em] transition-colors duration-300 ${
                                    Ativo === item.url ? "text-ouro-claro" : "text-marfim/70 hover:text-marfim"
                                }`}
                            >
                                {item.nome}
                                {/* Active Indicator */}
                                <span className={`absolute -bottom-2 left-0 w-full h-px bg-ouro-claro transition-transform duration-300 ${
                                    Ativo === item.url ? "scale-x-100" : "scale-x-0"
                                } origin-left`}></span>
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setMenuOpen(!MenuOpen)}
                    aria-label={MenuOpen ? "Fechar menu" : "Abrir menu"}
                    className="md:hidden text-marfim/80 hover:text-ouro-claro transition-colors"
                >
                    {MenuOpen ? <X size={26} strokeWidth={1.5} /> : <Menu size={26} strokeWidth={1.5} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden absolute w-full bg-tinta/95 backdrop-blur-sm border-b border-white/10 transition-all duration-300 overflow-hidden ${
                MenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
            }`}>
                <ul className="flex flex-col items-center py-8 gap-6">
                    {link.map((item) => (
                        <li key={item.id} className="w-full text-center">
                            <a
                                href={item.url}
                                onClick={(e) => clique(e, item.url)}
                                className={`block w-full text-sm uppercase tracking-[0.25em] transition-colors ${
                                    Ativo === item.url ? "text-ouro-claro" : "text-marfim/70 hover:text-marfim"
                                }`}
                            >
                                {item.nome}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
