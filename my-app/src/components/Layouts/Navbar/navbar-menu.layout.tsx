import React, { useEffect, useRef } from "react";
import "./navbar-menu.layout.css";
import logo from "../../../assets/logo_png.png";
import { useLocation, useNavigate } from "react-router-dom";

const NavMenu: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollNavigation = (sectionId: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

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
            <button
              className="nav-link-button"
              onClick={() => handleScrollNavigation("omne-section")}
            >
              O MNE
            </button>
          </li>
          <li className="nav-li">
            <button
              className="nav-link-button"
              onClick={() => handleScrollNavigation("procedury-section")}
            >
              PROCEDURY
            </button>
          </li>
          <li className="nav-li">
            <button
              className="nav-link-button"
              onClick={() => handleScrollNavigation("produkty-section")}
            >
              PRODUKTY
            </button>
          </li>
          <li className="nav-li">
            <button
              className="nav-link-button"
              onClick={() => handleScrollNavigation("cennik-section")}
            >
              CENNÍK
            </button>
          </li>
          <li className="nav-li">
            <button
              className="nav-link-button"
              onClick={() => handleScrollNavigation("galeria-section")}
            >
              GALÉRIA
            </button>
          </li>
          <li className="nav-li">
            <button
              className="nav-link-button"
              onClick={() => handleScrollNavigation("kontakt-section")}
            >
              KONTAKT
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavMenu;
