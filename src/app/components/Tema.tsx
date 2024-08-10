"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { LogoEyeSVG } from "./Portfolio";

export const LogoCartSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-6 w-6 text-white"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
};

function Tema() {
  const [selectedTheme, setSelectedTheme] = useState("");

  // Load selected theme from localStorage on component mount
  useEffect(() => {
    const storedTheme = localStorage.getItem("selectedTheme");
    if (storedTheme) {
      setSelectedTheme(storedTheme);
    }
  }, []);

  const handleThemeSelection = (label: any) => {
    setSelectedTheme(label);
    localStorage.setItem("selectedTheme", label); // Save selected theme to localStorage
  };

  const themes = [
    {
      src: "/infrastructure-service.webp",
      alt: "Infrastructure Service",
      href: "https://webinovasi.com/infrastructureservice/",
      label: "Infrastructure Service",
    },
    {
      src: "/Logo-Agency.webp",
      alt: "Logo Agency",
      href: "https://webinovasi.com/logo-agency/",
      label: "Logo Agency",
    },
    {
      src: "/Rent-Car.webp",
      alt: "Rent Car",
      href: "https://webinovasi.com/rent-car-theme/",
      label: "Rent Car",
    },
    {
      src: "/Beauty-Clinic.webp",
      alt: "Beauty Clinic",
      href: "https://webinovasi.com/beauty-clinic/",
      label: "Beauty Clinic",
    },
    {
      src: "/Pizza-Food.webp",
      alt: "Food Pizza",
      href: "https://webinovasi.com/food-pizza/",
      label: "Food Pizza",
    },
    {
      src: "/Furniture.webp",
      alt: "Furniture Product",
      href: "https://webinovasi.com/furniture-product/",
      label: "Furniture Product",
    },
  ];

  return (
    <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {themes.map((item, index) => (
        <div className="flex flex-col px-2" key={index}>
          <div className="relative z-30 h-[250px] w-full md:h-[380px] md:w-[310px] xl:h-[200px] xl:w-full">
            <Image
              src={item.src}
              alt={item.alt}
              className="rounded-lg"
              style={{ objectFit: "contain" }}
              fill
            />
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col text-start">
              <p className="font-semibold text-[#5B59C2]">{item.label}</p>
              <p>Landing Page</p>
            </div>
            <div className="flex space-x-2">
              <Link
                href="/payment"
                aria-label="View Theme"
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-black p-4 text-white shadow-md"
                onClick={() => handleThemeSelection(item.label)} // Store selected theme on click
              >
                <LogoCartSVG />
              </Link>
              <Link
                href={item.href}
                aria-label="View Theme"
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-black p-4 text-white shadow-md"
              >
                <LogoEyeSVG />
              </Link>
            </div>
          </div>
          {/* Highlight the selected theme */}
        </div>
      ))}
    </div>
  );
}

export default Tema;
