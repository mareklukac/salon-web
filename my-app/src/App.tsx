import "./App.css";
import Omne from "./components/Sections/Omne/omne.component";
import Kontakt from "./components/Sections/Kontakt/kontakt.component";
import Home from "./components/Sections/Home/home.component";
import Procedury from "./components/Sections/Procedury/procedury.section";
import Produkty from "./components/Sections/Produkty/produkty.component";
import Cennik from "./components/Sections/Cennik/cennik.component";
import Galeria from "./components/Sections/Galeria/galeria.component";
import NavMenu from "./components/Layouts/Navbar/navbar-menu.layout";
import { useEffect } from "react";

const useScrollRouting = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const route = (entry.target as HTMLElement).dataset.route;
            const newUrl = `/${route}`;
            if (window.location.pathname !== newUrl) {
              window.history.pushState(null, "", newUrl);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);
};

function App() {
  useScrollRouting();
  return (
    <>
      <NavMenu />
      <main>
        <section id="home" className="page-section" data-route="home">
          <Home />
        </section>
        <section id="omne" className="page-section" data-route="omne">
          <Omne />
        </section>
        <section id="procedury" className="page-section" data-route="procedury">
          <Procedury />
        </section>
        <section id="produkty" className="page-section" data-route="produkty">
          <Produkty />
        </section>
        <section id="cennik" className="page-section" data-route="cennik">
          <Cennik />
        </section>
        <section id="galeria" className="page-section" data-route="galeria">
          <Galeria />
        </section>
        <section id="kontakt" className="page-section" data-route="kontakt">
          <Kontakt />
        </section>
      </main>
    </>
  );
}

export default App;
