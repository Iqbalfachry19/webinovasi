import React from "react";

interface ModalProps {
  imageSrc: string;
  altText: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ imageSrc, altText, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative max-h-full max-w-full rounded-lg bg-white p-4">
        <button
          onClick={onClose}
          className="absolute right-2 top-2 text-xl font-bold text-black"
        >
          &times;
        </button>
        <img
          src={imageSrc}
          alt={altText}
          className="max-h-full max-w-full object-contain"
        />
      </div>
    </div>
  );
};

export default Modal;
