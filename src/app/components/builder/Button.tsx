import React from "react";

interface ButtonProps {
  text: string; // Define the type for the text prop
  onClick?: () => void; // Define the type for the onClick prop, making it optional
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => (
  <button
    onClick={onClick}
    className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
  >
    {text}
  </button>
);

export default Button;
