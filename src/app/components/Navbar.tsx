"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  // State to toggle the mobile menu
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 flex items-center justify-between bg-white p-2 py-4 xl:px-40">
      <div className="flex items-center">
        <Image width={300} height={50} src="/Logo-Inovasi-Web.svg" alt="Logo" />
      </div>

      {/* Burger Menu Button for Mobile */}
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-black focus:outline-none"
          aria-label={isOpen ? "Close menu" : "Open menu"}
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
      <nav className="hidden space-x-4 lg:flex">
        <Link
          href="/"
          className="cursor-pointer hover:border-b hover:border-[#5B59C2] hover:text-[#5B59C2]"
        >
          Home
        </Link>
        <Link
          href="/tema"
          className="cursor-pointer hover:border-b hover:border-[#5B59C2] hover:text-[#5B59C2]"
        >
          Tema
        </Link>
        <p className="cursor-pointer hover:border-b hover:border-[#5B59C2] hover:text-[#5B59C2]">
          Cara Custom Web
        </p>
      </nav>

      {/* Button Section */}
      <div className="hidden lg:flex">
        <button className="rounded bg-[#5B59C2] px-4 py-2 text-white hover:bg-[#6766c3]">
          Kontak Kami
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed left-0 top-0 z-50 flex h-full w-full flex-col bg-black/70 text-white lg:hidden ${isOpen ? "flex" : "hidden"}`}
      >
        <div className="flex h-full flex-col items-center justify-center">
          <button
            onClick={() => setIsOpen(false)}
            className="self-end p-4 text-white"
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <Link
            href="/"
            className="cursor-pointer py-4"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/tema"
            className="cursor-pointer py-4"
            onClick={() => setIsOpen(false)}
          >
            Tema
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            href="/"
            className="cursor-pointer py-4"
          >
            Cara Custom Web
          </Link>
          <button className="mt-4 rounded bg-[#5B59C2] px-4 py-2 text-white hover:bg-[#6766c3]">
            Kontak Kami
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
