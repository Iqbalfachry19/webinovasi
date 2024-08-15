import React from "react";

interface GoogleMapProps {
  src: string;
  width?: string;
  height?: string;
}

const GoogleMapComponent: React.FC<GoogleMapProps> = ({
  src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019148555805!2d144.96487331589804!3d-37.81627967975121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xffb2f6db1a96fd82!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1604895303094!5m2!1sen!2sau",
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
