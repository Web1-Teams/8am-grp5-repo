import React from "react";
import "./ImageBox.css";

const ImageBox = ({ src, alt, text }) => {
  return (
    <div className="image-box">
      <img src={process.env.PUBLIC_URL + src} alt={alt} />
      <div className="popup-text">{text}</div>
    </div>
  );
};

export default ImageBox;
