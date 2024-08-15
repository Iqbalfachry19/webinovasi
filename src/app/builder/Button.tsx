// Button.tsx
import React, { useState, useRef, useEffect } from "react";
import useStore from "./store/store";

const Button: React.FC = () => {
  const { buttonText, setButtonText } = useStore();
  const [isEditing, setIsEditing] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Handle the double-click to enable editing
  const handleEditClick = () => {
    setIsEditing(true);
  };

  // Handle the change in button text
  const handleInput = () => {
    if (buttonRef.current) {
      setButtonText(buttonRef.current.textContent || "");
    }
  };

  // Disable editing when input loses focus
  const handleBlur = () => {
    setIsEditing(false);
  };

  // Handle button click
  const handleButtonClick = () => {
    // Add your button click logic here if needed
  };

  // Sync the store's buttonText with the component's state when it changes
  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.textContent = buttonText;
    }
  }, [buttonText]);

  return (
    <button
      ref={buttonRef}
      onClick={handleButtonClick}
      onDoubleClick={handleEditClick}
      onBlur={handleBlur}
      onInput={handleInput}
      contentEditable={isEditing}
      suppressContentEditableWarning={true}
      className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
      style={{ cursor: isEditing ? "text" : "pointer" }}
    >
      {buttonText}
    </button>
  );
};

export default Button;
