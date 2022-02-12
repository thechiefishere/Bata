import React, { useState } from "react";
import "./ImageStack.css";

const ImageStack = ({ gallery, name }) => {
  const [currImageIndex, setCurrImageIndex] = useState(0);

  return (
    <aside className="imagestack">
      <img
        className="imagestack__image"
        src={gallery[currImageIndex]}
        alt={name}
      />
      <div className="imagestack__list">
        {gallery.map((pix, index) => (
          <img
            key={index}
            src={pix}
            alt={name}
            className={`imagestack__list__img ${
              index === currImageIndex && "current"
            }`}
            onClick={() => setCurrImageIndex(index)}
          />
        ))}
      </div>
    </aside>
  );
};

export default ImageStack;
