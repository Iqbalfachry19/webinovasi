import React from "react";

// Define props interface
interface HeadingProps {
  text?: string; // Optional prop for heading text
  level?: 1 | 2 | 3 | 4 | 5 | 6; // Optional prop for heading level
  className?: string; // Optional prop for custom styles
}

const Heading: React.FC<HeadingProps> = ({
  text = "Default Heading",
  level = 1,
  className = "",
}) => {
  // Render heading based on the level prop
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <HeadingTag className={`font-bold text-gray-900 ${className}`}>
      {text}
    </HeadingTag>
  );
};

export default Heading;
