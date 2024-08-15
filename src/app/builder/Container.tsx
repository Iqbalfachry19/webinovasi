import React from "react";

interface ContainerProps {
  padding?: string; // Optional: customize padding
  border?: string; // Optional: customize border style
  children?: React.ReactNode; // Allow nested content inside the container
}

const Container: React.FC<ContainerProps> = ({
  padding = "p-4",
  border = "border border-gray-500",
  children,
}) => {
  return <div className={`${padding} ${border}`}>{children}</div>;
};

export default Container;
