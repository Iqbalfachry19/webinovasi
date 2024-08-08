import Link from "next/link";
import React from "react";
import Image from "next/image";
import Tema from "./Tema";

export const LogoEyeSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48" // Adjust size as needed
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-eye mx-auto" // Center the SVG
  >
    <circle cx="12" cy="12" r="3"></circle>
    <path d="M1.05 12c1.73-4.92 6-8 10.95-8s9.22 3.08 10.95 8c-1.73 4.92-6 8-10.95 8s-9.22-3.08-10.95-8z"></path>
  </svg>
);

function Portfolio() {
  return (
    <section className="mx-auto mt-24 max-w-[1120px] text-center">
      <h2 className="mb-6 text-4xl font-bold">
        OUR <span className="text-[#5C59C2]">PORTFOLIO</span>
      </h2>
      <Tema />
    </section>
  );
}

export default Portfolio;
