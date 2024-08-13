import React from "react";

interface ImageProps {
  src: string; // URL of the image
  alt?: string; // Alternative text for the image
  width?: number; // Optional: width of the image
  height?: number; // Optional: height of the image
}

const Image: React.FC<ImageProps> = ({
  src,
  alt = "Image",
  width = 640,
  height = 360,
}) => {
  return (
    <div style={{ textAlign: "center" }}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        style={{ border: "1px solid #ddd", borderRadius: "4px" }}
      />
    </div>
  );
};

export default Image;
