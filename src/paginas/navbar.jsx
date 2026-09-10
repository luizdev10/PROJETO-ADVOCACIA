import { useState, useEffect } from "react";
import { X, Menu } from 'lucide-react'
import logo from "../assets/img/logo.png"

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
        { id: 2, nome: "Sobre", url: "#sobre" },
        { id: 3, nome: "Atuação", url: "#atuacao" },
        { id: 4, nome: "Dúvidas", url: "#perguntas" },
        { id: 5, nome: "Contato", url: "#contato" }
    ]

    return (
        <nav className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${scrolled ? "bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-800 py-3" : "bg-transparent py-5"}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                
                {/* Logo */}
                <a href="#inicio" onClick={(e) => clique(e, "#inicio")} className="flex items-center gap-2 cursor-pointer">
                    <img src={logo} alt="Logo Advocacia" className="h-12 w-auto object-contain" />
                </a>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-8">
                    {link.map((item) => (
                        <li key={item.id}>
                            <a 
                                href={item.url}
                                onClick={(e) => clique(e, item.url)}
                                className={`relative text-sm uppercase tracking-wider font-medium transition-colors duration-300 ${
                                    Ativo === item.url ? "text-[#C5A059]" : "text-gray-300 hover:text-[#C5A059]"
                                }`}
                            >
                                {item.nome}
                                {/* Active Indicator */}
                                <span className={`absolute -bottom-2 left-0 w-full h-0.5 bg-[#C5A059] transition-transform duration-300 ${
                                    Ativo === item.url ? "scale-x-100" : "scale-x-0"
                                } origin-left`}></span>
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setMenuOpen(!MenuOpen)}
                    className="md:hidden text-gray-300 hover:text-[#C5A059] transition-colors"
                >
                    {MenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden absolute w-full bg-gray-900/95 backdrop-blur-md border-b border-gray-800 shadow-2xl transition-all duration-300 overflow-hidden ${
                MenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
            }`}>
                <ul className="flex flex-col items-center py-6 gap-6">
                    {link.map((item) => (
                        <li key={item.id} className="w-full text-center">
                            <a
                                href={item.url}
                                onClick={(e) => clique(e, item.url)}
                                className={`block w-full text-lg tracking-wide font-medium transition-colors ${
                                    Ativo === item.url ? "text-[#C5A059]" : "text-gray-300 hover:text-[#C5A059]"
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