import React from "react";

interface SpacerProps {
  size?: number; // Optional: size of the spacer in pixels
}

const Spacer: React.FC<SpacerProps> = ({ size = 16 }) => {
  return <div style={{ height: size, width: "100%" }} />;
};

export default Spacer;
