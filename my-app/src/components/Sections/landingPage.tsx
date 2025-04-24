import NavMenu from "../Layouts/Navbar/navbar-menu.layout";
import Cennik from "./Cennik/cennik.component";
import Galeria from "./Galeria/galeria.component";
import Home from "./Home/home.component";
import Kontakt from "./Kontakt/kontakt.component";
import Omne from "./Omne/omne.component";
import ProcedurySection from "./Procedury/procedury.section";
import Produkty from "./Produkty/produkty.component";

export default function LandingPage() {
  return (
    <>
      <NavMenu />
      <main>
        <section id="home-section" className="page-section"><Home /></section>
        <section id="omne-section" className="page-section"><Omne /></section>
        <section id="procedury-section" className="page-section"><ProcedurySection /></section>
        <section id="produkty-section" className="page-section"><Produkty /></section>
        <section id="cennik-section" className="page-section"><Cennik /></section>
        <section id="galeria-section" className="page-section"><Galeria /></section>
        <section id="kontakt-section" className="page-section"><Kontakt /></section>
      </main>
    </>
  );
}