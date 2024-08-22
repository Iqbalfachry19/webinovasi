import React, { useState } from "react";

const MenuAnchor: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Menu Anchor Button */}
      <button
        onClick={toggleMenu}
        className="rounded-lg bg-blue-500 px-4 py-2 text-white focus:outline-none"
      >
        {isOpen ? "Close Menu" : "Open Menu"}
      </button>

      {/* Menu */}
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-48 rounded-lg border border-gray-200 bg-white shadow-lg">
          <ul className="py-2">
            <li className="cursor-pointer px-4 py-2 hover:bg-gray-100">
              Item 1
            </li>
            <li className="cursor-pointer px-4 py-2 hover:bg-gray-100">
              Item 2
            </li>
            <li className="cursor-pointer px-4 py-2 hover:bg-gray-100">
              Item 3
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MenuAnchor;
