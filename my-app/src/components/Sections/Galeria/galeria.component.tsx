import React, { useState } from "react";
import "./galeria.component.css";
import Divider from "../../Layouts/Divider/divider.layout";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const images = [
  "/galeria/placeholder_1.png",
  "/galeria/logo.jpg",
  "/galeria/placeholder_2.png",
  "/galeria/omne_photo.jpg",
  "/galeria/placeholder_3.png",
  "/galeria/omne_photo2.jpg",
  "/galeria/placeholder_4.png",
  "/galeria/titul_BW.png",
  "/galeria/placeholder_5.png",
  "/galeria/titul.jpg",
];

const Galeria: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(2);
  const [modalImage, setModalImage] = useState<string | null>(null);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handleImageClick = (index: number) => {
    if (index === currentIndex) {
      setModalImage(images[index]);
    } else {
      const total = images.length;
      const forwardSteps = (index - currentIndex + total) % total;
      const backwardSteps = (currentIndex - index + total) % total;

      if (forwardSteps <= backwardSteps) {
        setCurrentIndex((prev) => (prev + forwardSteps) % total);
      } else {
        setCurrentIndex((prev) => (prev - backwardSteps + total) % total);
      }
    }
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div className="galeria-container">
      <h2>GALÉRIA</h2>
      <Divider />
      <div className="slider-container">
        <button className="arrow left" onClick={prevSlide}>
          <FontAwesomeIcon icon={faCircleChevronLeft} className="responsive-icon" />
        </button>
        <div className="slider">
          {[-2, -1, 0, 1, 2].map((offset) => {
            const index =
              (currentIndex + offset + images.length) % images.length;
            let className = "slide";
            if (offset === 0) className += " center";
            else if (Math.abs(offset) === 1) className += " side";
            else if (Math.abs(offset) === 2) className += " outer";
            else className += " hidden";
            return (
              <img
                key={index}
                src={images[index]}
                alt="slide"
                className={className}
                onClick={() => handleImageClick(index)}
              />
            );
          })}
        </div>
        <button className="arrow right" onClick={nextSlide}>
          <FontAwesomeIcon icon={faCircleChevronRight} className="responsive-icon" />
        </button>

        {modalImage && (
          <div className="modal" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-button" onClick={closeModal}>
                ×
              </button>
              <img src={modalImage} alt="Enlarged" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Galeria;
