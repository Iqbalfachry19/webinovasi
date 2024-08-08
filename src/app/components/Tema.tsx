import Link from "next/link";
import React from "react";
import Image from "next/image";
import { LogoEyeSVG } from "./Portfolio";

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
        <div className="flex flex-col" key={index}>
          <div className="relative z-30 h-[600px] w-full md:h-[380px] md:w-[310px] xl:h-[200px] xl:w-full">
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
            <Link
              href={item.href}
              aria-label="View Theme"
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-black p-4 text-white shadow-md" // Adjust container size and center
            >
              <LogoEyeSVG />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Tema;
