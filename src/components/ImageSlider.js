import React, { useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const ImageSlider = ({ gallery }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const handleLeftClick = () => {
    if (imageIndex === 0) {
      setImageIndex(gallery.length - 1);
      return;
    }
    setImageIndex((prev) => prev - 1);
  };

  const handleRightClick = () => {
    if (imageIndex === gallery.length - 1) {
      setImageIndex(0);
      return;
    }
    setImageIndex((prev) => prev + 1);
  };

  return (
    <article className="slider">
      <img className="slider__img" src={gallery[imageIndex]} alt="product" />
      <div className="slider__clicks">
        <FaChevronLeft
          className="slider__direction"
          onClick={handleLeftClick}
        />
        <FaChevronRight
          className="slider__direction"
          onClick={handleRightClick}
        />
      </div>
    </article>
  );
};

export default ImageSlider;
