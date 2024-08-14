import React from "react";

interface GridProps {
  columns?: number;
  rows?: number;
  gap?: string;
  children?: React.ReactNode; // To allow nested content inside the grid
}

const Grid: React.FC<GridProps> = ({
  columns = 3,
  rows = 2,
  gap = "2",
  children,
}) => {
  const generateGridClasses = () => {
    return `grid grid-cols-${columns} grid-rows-${rows} gap-${gap}`;
  };

  return (
    <div
      className={`${generateGridClasses()} border border-dashed border-gray-500`}
    >
      {children}
    </div>
  );
};

export default Grid;
