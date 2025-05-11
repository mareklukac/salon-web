import Divider from "../../Layouts/Divider/divider.layout";
import "./procedury.section.css";
import placeholder from "../../../assets/placeholder.png";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronDown,
  faCircleChevronUp,
} from "@fortawesome/free-solid-svg-icons";

const procedury = [
  {
    id: 1,
    text: "Ošetrenia pleti",
    image: placeholder,
  },
  {
    id: 2,
    text: "Prístrojové ošetrenia pleti",
    image: placeholder,
  },
  {
    id: 3,
    text: "Úprava mihalníc a obočia",
    image: placeholder,
  },
  {
    id: 4,
    text: "Permanentný make-up",
    image: placeholder,
  },
  {
    id: 5,
    text: "Plasma Pen",
    image: placeholder,
  },
];

const Procedury: React.FC = () => {
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

  const visibleProcedurs = isExpanded
    ? procedury
    : procedury.slice(0, maxVisible);

  return (
    <div className="procedury-container">
      <h2>PROCEDURY</h2>
      <Divider />

      <div className="procedury-inner-container">
        {visibleProcedurs.map((procedura, index) => (
          <div
            key={procedura.id}
            className={`procedura ${index % 2 === 0 ? "reverse" : ""}`}
          >
            <div className="procedura-text">{procedura.text}</div>
            <img
              src={procedura.image}
              alt="procedura"
              className="procedura-image"
            />
          </div>
        ))}
      </div>

      {procedury.length > maxVisible && (
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

export default Procedury;
