"use client";
import React, { useState } from "react";
import Image from "next/image";

function Navbar() {
  // State to toggle the mobile menu
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mx-auto flex max-w-[1150px] items-center justify-between py-4">
      <div className="flex items-center">
        <Image width={300} height={50} src="/Logo-Inovasi-Web.svg" alt="Logo" />
      </div>

      {/* Burger Menu Button for Mobile */}
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Navigation Links */}
      <nav
        className={`flex-1 space-x-4 lg:flex ${isOpen ? "block" : "hidden"}`}
      >
        <p className="cursor-pointer">Home</p>
        <p className="cursor-pointer">Tema</p>
        <p className="cursor-pointer">Cara Custom Web</p>
      </nav>

      {/* Button Section */}
      <div className="hidden lg:flex">
        <button className="rounded bg-[#5B59C2] px-4 py-2 text-white hover:bg-[#6766c3]">
          Kontak Kami
        </button>
      </div>

      {/* Mobile Menu Button Section */}
      <div
        className={`fixed left-0 top-0 h-full w-full bg-black/70 lg:hidden ${isOpen ? "block" : "hidden"}`}
      >
        <div className="flex h-full flex-col items-center justify-center bg-white">
          <p className="cursor-pointer py-4">Home</p>
          <p className="cursor-pointer py-4">Tema</p>
          <p className="cursor-pointer py-4">Cara Custom Web</p>
          <button className="mt-4 rounded bg-[#5B59C2] px-4 py-2 text-white hover:bg-[#6766c3]">
            Kontak Kami
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
