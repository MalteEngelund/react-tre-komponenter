import { useState } from "react";
import style from './imageSlider.module.scss'

const images = [
  "https://via.placeholder.com/600x300?text=Image+1",
  "https://via.placeholder.com/600x300?text=Image+2",
  "https://via.placeholder.com/600x300?text=Image+3"
];

export const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={style.imageSliderContainer}>
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
      />

      <div style={{ marginTop: "10px" }}>
        <button onClick={prevSlide} style={{ marginRight: "10px" }}>
          Prev
        </button>
        <button onClick={nextSlide}>Next</button>
      </div>

      <p>
        {currentIndex + 1} / {images.length}
      </p>
    </div>
  );
};
