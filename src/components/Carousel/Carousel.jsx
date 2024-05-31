import { useState } from "react";

import './Carousel.css';

const photos = ["/m1.png",'m2.png', 'm3.png'];

const Carousel = () => {
  const [currentPhoto, setCurrentPhoto] = useState(0);

  const nextPhoto = () => {
    setCurrentPhoto((currentPhoto + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentPhoto((currentPhoto - 1 + photos.length) % photos.length);
  };

  return (
    <div className="carousel">
      <button className="triangle-button prev" onClick={prevPhoto}></button>
      <img src={photos[currentPhoto]} alt={`Photo ${currentPhoto}`} className="photo" />
      <button className="triangle-button next" onClick={nextPhoto}></button>
    </div>
  );


};

export default Carousel;