import React, { useState, useEffect } from "react";
import "./../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
const Carousel = ({ images }) => {
  console.log("Images:", images);

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setCurrentSlide(0);

    const intervalId = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(intervalId);
  }, [images]);

  const prevSlide = () => {       
     console.log("Previous slide");

    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
 console.log("Next slide");
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="carousel">
      <div className="carousel-container">
        {images.map((image) => (
          <img
            key={image} 
            src={image}
            alt={`Slide for ${image}`}
            style={{
              display: image === images[currentSlide] ? "block" : "none",
            }}
          />
        ))}
      </div>
      {images.length > 1 && (
        <>
          <button className="carousel-btn-right" onClick={nextSlide}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
          <button className="carousel-btn-left" onClick={prevSlide}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <div className="slide-number">
            {currentSlide + 1} / {images.length}
          </div>
        </>
      )}
    </div>
  );
};

export default Carousel;
