import Divider from "../../Layouts/Divider/divider.layout";
import "./procedury.section.css";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronDown,
  faCircleChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

import { proceduryData } from "../../data/procedury-data.component";
import { IProceduraData } from "../../../Utils/Interfaces/procedury.interface";

const itemHeight = 400;

const Procedury: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [maxVisible, setMaxVisible] = useState(0);
  const [expandedDescriptions, setExpandedDescriptions] = useState<number[]>(
    [],
  );

  useEffect(() => {
    const handleResize = () => {
      const availableHeight = window.innerHeight;
      const itemsThatFit = Math.floor(availableHeight / itemHeight);
      setMaxVisible(itemsThatFit || 1);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleProcedury = isExpanded
    ? proceduryData
    : proceduryData.slice(0, maxVisible);

  const toggleDescription = (id: number) => {
    setExpandedDescriptions((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return (
    <div className="procedury-container">
      <h2>PROCEDÚRY</h2>
      <Divider />
      <div className="procedury-inner-container">
        {visibleProcedury.map((procedura: IProceduraData, index: number) => (
          <article
            key={procedura.id}
            className={`procedura ${index % 2 === 0 ? "reverse" : ""}`}
          >
            <div className="procedura-content">
              <motion.div
                className="procedura-text-block"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <h3>{procedura.title}</h3>
                {expandedDescriptions.includes(procedura.id) ? (
                  procedura.description
                ) : (
                  <>
                    <p>
                      {procedura.summary.length > 100
                        ? procedura.summary.substring(0, 100) + "..."
                        : procedura.summary}
                    </p>
                    {procedura.summary.length > 100 && (
                      <button
                        className="show-more-btn"
                        onClick={() => toggleDescription(procedura.id)}
                      >
                        Ukázať viac
                      </button>
                    )}
                  </>
                )}

                {expandedDescriptions.includes(procedura.id) && (
                  <button
                    className="show-more-btn"
                    onClick={() => toggleDescription(procedura.id)}
                  >
                    Ukázať menej
                  </button>
                )}
              </motion.div>
              <motion.img
                src={procedura.image}
                alt={procedura.title}
                className="procedura-image"
                initial={{
                  x: [0, 100, 0],
                  opacity: 0,
                }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.4 }}
              />
            </div>
          </article>
        ))}
      </div>

      {proceduryData.length > maxVisible && (
        <button
          className="toggle-button"
          onClick={() => {
            setIsExpanded(!isExpanded);
            if (isExpanded)
              document
                .getElementById("procedury")
                ?.scrollIntoView({ behavior: "smooth" });
          }}
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
