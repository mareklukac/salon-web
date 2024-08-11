import React from "react";
import "./App.css";
import Omne from "./components/Sections/Omne/omne-component";
import Kontakt from "./components/Sections/Kontakt/kontakt-component";
import Home from "./components/Sections/Home/home-component";
import Procedury from "./components/Sections/Procedury/procedury.component";
import Produkty from "./components/Sections/Produkty/produkty-component";
import Cenik from "./components/Sections/Cenik/cenik-component";
import Galeria from "./components/Sections/Galeria/galeria-component";
import NavMenu from "./components/Layouts/Navbar/navbar-menu";

function App() {
  return (
    <>
      <NavMenu />
      <main>
        <section id="home-section" className="page-section">
          <Home />
        </section>
        <section id="omne-section" className="page-section">
          <Omne />
        </section>
        <section id="procedury-section" className="page-section">
          <Procedury />
        </section>
        <section id="produkty-section" className="page-section">
          <Produkty />
        </section>
        <section id="cenik-section" className="page-section">
          <Cenik />
        </section>
        <section id="galeria-section" className="page-section">
          <Galeria />
        </section>
        <section id="kontakt-section" className="page-section">
          <Kontakt />
        </section>
      </main>
    </>
  );
}

export default App;
