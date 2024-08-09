import Link from "next/link";
import React from "react";
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
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 7H19m-12 6v6m8-6v6m-4-6v6m-8-6h16"
      />
    </svg>
  );
};
function Tema() {
  return (
    <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {/* Example items */}
      {[
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
      ].map((item, index) => (
        <div className="flex flex-col px-2" key={index}>
          <div className="relative z-30 h-[250px] w-full md:h-[380px] md:w-[310px] xl:h-[200px] xl:w-full">
            <Image
              src={item.src}
              alt={item.alt}
              className="rounded-lg" // Apply rounded corners here
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
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-black p-4 text-white shadow-md" // Adjust container size and center
              >
                <LogoCartSVG />
              </Link>
              <Link
                href={item.href}
                aria-label="View Theme"
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-black p-4 text-white shadow-md" // Adjust container size and center
              >
                <LogoEyeSVG />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Tema;
