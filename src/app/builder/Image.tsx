// Image.tsx
import React from "react";
import useStore from "./store/store"; // Adjust the import path if necessary

const Image: React.FC = () => {
  const { imageSrc, imageAlt, imageWidth, imageHeight } = useStore((state) => ({
    imageSrc: state.imageSrc,
    imageAlt: state.imageAlt,
    imageWidth: state.imageWidth,
    imageHeight: state.imageHeight,
  }));

  return (
    <div style={{ textAlign: "center" }}>
      <img
        src={imageSrc}
        alt={imageAlt}
        width={imageWidth}
        height={imageHeight}
        style={{ border: "1px solid #ddd", borderRadius: "4px" }}
      />
    </div>
  );
};

export default Image;
