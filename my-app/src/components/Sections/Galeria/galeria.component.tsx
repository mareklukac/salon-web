import React, { useState, useEffect, useRef } from "react";
import "./galeria.component.css";
import Divider from "../../Layouts/Divider/divider.layout";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const importAll = (r: any) => r.keys().map(r);

const images: string[] = importAll(
  require.context("../../../assets/galeria", false, /\.(png|jpe?g|jfif)$/)
);

const Galeria: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(2);
  const [modalIndex, setModalIndex] = useState<number | null>(null);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const minSwipeDistance = 50;

  const prevSlide = () => {
    if (modalIndex !== null) {
      setModalIndex((modalIndex - 1 + images.length) % images.length);
    }
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    if (modalIndex !== null) {
      setModalIndex((modalIndex + 1) % images.length);
    }
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handleImageClick = (index: number) => {
    if (index === currentIndex) {
      setModalIndex(index);
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
    setModalIndex(null);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (modalIndex !== null) {
        if (e.key === "ArrowLeft") prevSlide();
        if (e.key === "ArrowRight") nextSlide();
        if (e.key === "Escape") closeModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const handleClicks = (e: any) => {
    const target = e.target as HTMLElement;
    if (
      target.tagName !== "IMG" &&
      target.tagName !== "svg" &&
      target.tagName !== "path"
    ) {
      closeModal();
    } else {
      e.stopPropagation();
    }
  };

  return (
    <div className="galeria-container">
      <h2>GALÉRIA</h2>
      <Divider />
      <div
        className="slider-container"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <button className="arrow left" onClick={prevSlide}>
          <FontAwesomeIcon
            icon={faCircleChevronLeft}
            className="responsive-icon"
          />
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
                key={index + "-" + currentIndex}
                src={images[index]}
                alt="slide"
                className={className}
                onClick={() => handleImageClick(index)}
              />
            );
          })}
        </div>
        <button className="arrow right" onClick={nextSlide}>
          <FontAwesomeIcon
            icon={faCircleChevronRight}
            className="responsive-icon"
          />
        </button>

        {modalIndex !== null && (
          <div className="modal" onClick={closeModal}>
            <div className="modal-content" onClick={handleClicks}>
              <button className="close-button" onClick={closeModal}>
                ×
              </button>
              <button className="modal-arrow left" onClick={prevSlide}>
                <FontAwesomeIcon icon={faCircleChevronLeft} />
              </button>
              <img
                src={images[modalIndex]}
                alt="Enlarged"
                onClick={(e) => e.stopPropagation()}
              />
              <button className="modal-arrow right" onClick={nextSlide}>
                <FontAwesomeIcon icon={faCircleChevronRight} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Galeria;
