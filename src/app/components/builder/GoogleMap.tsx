import React from "react";

interface GoogleMapProps {
  src: string;
  width?: string;
  height?: string;
}

const GoogleMapComponent: React.FC<GoogleMapProps> = ({
  src,
  width = "100%",
  height = "400px",
}) => {
  return (
    <div style={{ width, height, position: "relative" }}>
      <iframe
        src={src}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default GoogleMapComponent;
