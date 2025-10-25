import React from "react";
import './images.css';

export default function WordImages({ images }) {
  return (
    <div className="WordImages md-6">
      <h3>Related Images</h3>
      <div className="image-grid ">
        {images.map((image, index) => (
          <img key={index} src={image.src.medium} alt={image.alt} />
        ))}
      </div>
    </div>
  );
}