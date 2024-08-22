import React, { useState } from "react";

interface AlertProps {
  type: "success" | "error" | "warning" | "info";
  message: string;
}

const Alert: React.FC<AlertProps> = ({ type = "info", message = "hello" }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  // Determine alert styling based on type
  const alertStyles = {
    success: "bg-green-100 border-green-500 text-green-800",
    error: "bg-red-100 border-red-500 text-red-800",
    warning: "bg-yellow-100 border-yellow-500 text-yellow-800",
    info: "bg-blue-100 border-blue-500 text-blue-800",
  };

  return (
    <div
      className={`mb-4 flex items-center justify-between rounded-lg border-l-4 p-4 ${alertStyles[type]}`}
    >
      <span>{message}</span>
      <button
        onClick={handleClose}
        className="ml-4 text-lg font-semibold focus:outline-none"
        aria-label="Close"
      >
        &times;
      </button>
    </div>
  );
};

export default Alert;
