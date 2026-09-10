import { useState, useEffect } from "react";
import Inicio from "./paginas/inicio.jsx";
import Navbar from "./paginas/navbar.jsx";
import Atuacao from "./paginas/atuacao.jsx";
import Sobre from "./paginas/sobre.jsx";
import Perguntas from "./paginas/perguntas.jsx";
import Contato from "./paginas/contato.jsx";
import Rodape from "./paginas/rodape.jsx";
import Politicas from "./paginas/politicas.jsx";

function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const onHashChange = () => {
      setCurrentHash(window.location.hash);
      window.scrollTo(0, 0); // Reset scroll to top when changing page
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  // Simple routing for Privacy Policy
  if (currentHash === "#politicas" || currentHash === "#termos") {
    return (
      <>
        <Navbar />
        <Politicas />
        <Rodape />
      </>
    );
  }

  // Main Landing Page
  return (
    <>
      <Navbar />
      <Inicio />
      <Atuacao />
      <Sobre />
      <Perguntas />
      <Contato />
      <Rodape />
    </>
  );
}

export default App;
