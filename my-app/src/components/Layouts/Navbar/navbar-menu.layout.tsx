import React, { useEffect, useRef, useState } from "react";
import "./navbar-menu.layout.css";
import logo from "../../../assets/logo_png.png";

const SECTIONS = [
  { label: "O MNE", id: "omne" },
  { label: "PROCEDURY", id: "procedury" },
  { label: "PRODUKTY", id: "produkty" },
  { label: "CENNÍK", id: "cennik" },
  { label: "GALÉRIA", id: "galeria" },
  { label: "KONTAKT", id: "kontakt" },
];

const NavMenu: React.FC = () => {
  const navRef = useRef<HTMLElement | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        if (window.scrollY > 50) {
          navRef.current.classList.add("scrolled");
        } else {
          navRef.current.classList.remove("scrolled");
        }
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = (entry.target as HTMLElement).id;
            setActiveSection(id);
            window.history.pushState(null, "", `/${id}`);
          }
        });
      },
      { threshold: 0.6 }
    );
    const sectionEls = document.querySelectorAll("section");
    sectionEls.forEach((section) => observer.observe(section));

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `/${id}`);
    }

    setMenuOpen(false);
  };

  return (
    <nav className="nav" ref={navRef}>
      <div className="logo-button">
        <a href="home">
          <img alt="logo" src={logo}></img>
        </a>
      </div>

      <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>
        <span className={`bar ${menuOpen ? "open" : ""}`}></span>
        <span className={`bar ${menuOpen ? "open" : ""}`}></span>
        <span className={`bar ${menuOpen ? "open" : ""}`}></span>
      </div>

      <div className={`nav-buttons ${menuOpen ? "open" : ""}`}>
        <ul className="nav-ul">
          {SECTIONS.map(({ label, id }) => (
            <li className="nav-li" key={label}>
              <a
                href={`#${id}`}
                onClick={(e) => handleLinkClick(e, id)}
                className={activeSection === id ? "active" : ""}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavMenu;
