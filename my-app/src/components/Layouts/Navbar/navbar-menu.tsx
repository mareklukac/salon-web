import React, { useEffect, useRef } from "react";
import "./navbar-menu.css";

const NavMenu: React.FC = () => {
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (navRef.current) {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
          navRef.current?.classList.add("scrolled");
        } else if (window.scrollY < 50) {
          navRef.current?.classList.remove("scrolled");
        }
      });
    }
  }, []);

  return (
    <nav className="nav" ref={navRef}>
      <div className="logo-button">
        <a href="#home-section">Logo</a>
      </div>
      <div className="nav-buttons">
        <ul className="nav-ul">
          <li className="nav-li">
            <a href="#omne-section">O mne</a>
          </li>
          <li className="nav-li">
            <a href="#procedury-section">Procedury</a>
          </li>
          <li className="nav-li">
            <a href="#produkty-section">Produkty</a>
          </li>
          <li className="nav-li">
            <a href="#cenik-section">Ceník</a>
          </li>
          <li className="nav-li">
            <a href="#galeria-section">Galéria</a>
          </li>
          <li className="nav-li">
            <a href="#kontakt-section">Kontakt</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavMenu;
