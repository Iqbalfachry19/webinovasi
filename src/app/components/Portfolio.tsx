import Link from "next/link";
import React from "react";
import Image from "next/image";

const LogoEyeSVG = () => (
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
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-black p-4 text-white shadow-md" // Adjust container size and center
              >
                <LogoEyeSVG />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
