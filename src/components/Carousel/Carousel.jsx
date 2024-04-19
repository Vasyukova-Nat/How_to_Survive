import { useState } from "react";
import "./Carousel.css";

const Carousel = ({ photos }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextPhoto = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevPhoto = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <button className="prev" onClick={prevPhoto}>
        Prev
      </button>
      <img src={photos[activeIndex]} alt="carousel" />
      <button className="next" onClick={nextPhoto}>
        Next
      </button>
    </div>
  );
};

export default Carousel;
