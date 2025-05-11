import React, { useEffect, useRef, useState } from "react";
import "./navbar-menu.layout.css";
import logo from "../../../assets/logo_png.png";

const NavMenu: React.FC = () => {
  const navRef = useRef<HTMLElement | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

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

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className="nav" ref={navRef}>
      <div className="logo-button">
        <a href="#home-section">
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
          {[
            { label: "O MNE", href: "#omne-section" },
            { label: "PROCEDURY", href: "#procedury-section" },
            { label: "PRODUKTY", href: "#produkty-section" },
            { label: "CENNÍK", href: "#cennik-section" },
            { label: "GALÉRIA", href: "#galeria-section" },
            { label: "KONTAKT", href: "#kontakt-section" },
          ].map(({ label, href }) => (
            <li className="nav-li" key={label}>
              <a href={href} onClick={handleLinkClick}>
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
