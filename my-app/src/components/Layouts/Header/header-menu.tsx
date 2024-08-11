import React, { useEffect, useRef } from "react";
import "./header-menu.css";

const HeaderMenu: React.FC = () => {
  const headerRef = useRef<HTMLElement | null>(null);
  
  useEffect(() => {
    if (headerRef.current) {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
          headerRef.current?.classList.add("scrolled");
        } else if (window.scrollY < 50) {
          headerRef.current?.classList.remove("scrolled");
        }
      });
    }
  }, []);

  return (
    <header className="header" ref={headerRef}>
      <div className="header-buttons">
        <ul className="header-ul">
          <li className="header-li">
            <a href="#">O mne</a>
          </li>
          <li className="header-li">
            <a href="#">Produkty</a>
          </li>
          <li className="header-li">
            <a href="#">Ceník</a>
          </li>
          <li className="header-li">
            <a href="#">Galéria</a>
          </li>
          <li className="header-li">
            <a href="#">Kontakt</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default HeaderMenu;
