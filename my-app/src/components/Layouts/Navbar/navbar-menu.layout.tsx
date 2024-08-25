import React, { useEffect, useRef } from "react";
import "./navbar-menu.layout.css";
import logo from "../../../assets/logo_png.png";

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
        <a href="#home-section">
          <img alt="logo" src={logo}></img>
        </a>
      </div>
      <div className="nav-buttons">
        <ul className="nav-ul">
          <li className="nav-li">
            <a href="#omne-section">O MNE</a>
          </li>
          <li className="nav-li">
            <a href="#procedury-section">PROCEDURY</a>
          </li>
          <li className="nav-li">
            <a href="#produkty-section">PRODUKTY</a>
          </li>
          <li className="nav-li">
            <a href="#cennik-section">CENNÍK</a>
          </li>
          <li className="nav-li">
            <a href="#galeria-section">GALÉRIA</a>
          </li>
          <li className="nav-li">
            <a href="#kontakt-section">KONTAKT</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavMenu;
