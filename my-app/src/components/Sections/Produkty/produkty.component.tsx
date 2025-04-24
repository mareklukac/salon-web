import React, { useEffect, useState } from "react";
import Divider from "../../Layouts/Divider/divider.layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronDown,
  faCircleChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import "./produkty.component.css";
import placeholder from "../../../assets/placeholder.png";

const produkty = [
  {
    id: 1,
    text: `SOME TEXT`,
    image: placeholder,
  },
  {
    id: 2,
    text: `SOME TEXT`,
    image: placeholder,
  },
  {
    id: 3,
    text: `SOME TEXT`,
    image: placeholder,
  },
  {
    id: 4,
    text: `SOME TEXT`,
    image: placeholder,
  },
  {
    id: 5,
    text: `SOME TEXT`,
    image: placeholder,
  },
  {
    id: 6,
    text: `SOME TEXT`,
    image: placeholder,
  },
  {
    id: 7,
    text: `SOME TEXT`,
    image: placeholder,
  },
  {
    id: 8,
    text: `SOME TEXT`,
    image: placeholder,
  },
  {
    id: 9,
    text: `SOME TEXT`,
    image: placeholder,
  },
  {
    id: 10,
    text: `SOME TEXT`,
    image: placeholder,
  },
  {
    id: 11,
    text: `SOME TEXT`,
    image: placeholder,
  },
];

const Produkty: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [maxVisible, setMaxVisible] = useState(0);
  const itemHeight = 450;

  useEffect(() => {
    const handleResize = () => {
      const availableHeight = window.innerHeight;
      const itemsThatFit = Math.floor(availableHeight / itemHeight);
      setMaxVisible(itemsThatFit);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleProducts = isExpanded ? produkty : produkty.slice(0, maxVisible);

  return (
    <div className="produkty-container">
      <h2>PRODUKTY</h2>
      <Divider />

      <div className="produkty-inner-container">
        {visibleProducts.map((produkt, index) => (
          <div
            key={produkt.id}
            className={`produkt ${index % 2 === 0 ? "reverse" : ""}`}
          >
            <div className="produkt-text">{produkt.text}</div>
            <img src={produkt.image} alt="produkt" className="produkt-image" />
          </div>
        ))}
      </div>

      {produkty.length > maxVisible && (
        <button
          className="toggle-button"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <FontAwesomeIcon
            icon={isExpanded ? faCircleChevronUp : faCircleChevronDown}
            size="3x"
          />
        </button>
      )}
    </div>
  );
};

export default Produkty;
