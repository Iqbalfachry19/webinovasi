import Link from "next/link";
import React from "react";
import Image from "next/image";

// SVG Component or Inline SVG
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
    <path d="M12 8c-2.2 0-4.2 1.2-5.2 3s-1 4.2 0 6 3 3 5.2 3 4.2-1.2 5.2-3 1-4.2 0-6-3-3-5.2-3z"></path>
    <path d="M12 12a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"></path>
    <path d="M1 12c2.5-4 7-7 11-7s8.5 3 11 7-2.5 7-11 7S-0.5 16 1 12z"></path>
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
        <div className="">
          <div className="relative z-30 h-[600px] w-full rounded-xl md:ml-2 md:h-[380px] md:w-[310px] xl:h-[200px] xl:w-full xl:bg-contain">
            <Image
              src="/infrastructure-service.webp"
              alt="Business People"
              style={{ objectFit: "contain" }}
              fill
            />
          </div>
          <div className="flex">
            <div>
              <p>Infrastructure Service</p>
              <p>Landing Page</p>
            </div>
            <Link
              href="https://webinovasi.com/infrastructureservice/"
              className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-gray-200 p-4 shadow-md" // Adjust container size and center
            >
              <LogoEyeSVG />
            </Link>
          </div>
        </div>
        <div>
          <div className="relative z-30 h-[600px] w-full rounded-xl md:ml-2 md:h-[380px] md:w-[310px] xl:h-[200px] xl:w-full xl:bg-contain">
            <Image
              src="/infrastructure-service.webp"
              alt="Business People"
              style={{ objectFit: "contain" }}
              fill
            />
          </div>
          <div className="flex">
            <div>
              <p>Infrastructure Service</p>
              <p>Landing Page</p>
            </div>
            <Link
              href="https://webinovasi.com/logo-agency/"
              className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-gray-200 p-4 shadow-md" // Adjust container size and center
            >
              <LogoEyeSVG />
            </Link>
          </div>
        </div>
        <div>
          <div className="relative z-30 h-[600px] w-full rounded-xl md:ml-2 md:h-[380px] md:w-[310px] xl:h-[200px] xl:w-full xl:bg-contain">
            <Image
              src="/infrastructure-service.webp"
              alt="Business People"
              style={{ objectFit: "contain" }}
              fill
            />
          </div>
          <div className="flex">
            <div>
              <p>Infrastructure Service</p>
              <p>Landing Page</p>
            </div>
            <Link
              href="https://webinovasi.com/rent-car-theme/"
              className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-gray-200 p-4 shadow-md" // Adjust container size and center
            >
              <LogoEyeSVG />
            </Link>
          </div>
        </div>
        <div>
          <div className="relative z-30 h-[600px] w-full rounded-xl md:ml-2 md:h-[380px] md:w-[310px] xl:h-[200px] xl:w-full xl:bg-contain">
            <Image
              src="/infrastructure-service.webp"
              alt="Business People"
              style={{ objectFit: "contain" }}
              fill
            />
          </div>
          <div className="flex">
            <div>
              <p>Infrastructure Service</p>
              <p>Landing Page</p>
            </div>
            <Link
              href="https://webinovasi.com/beauty-clinic/"
              className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-gray-200 p-4 shadow-md" // Adjust container size and center
            >
              <LogoEyeSVG />
            </Link>
          </div>
        </div>
        <div>
          <div className="relative z-30 h-[600px] w-full rounded-xl md:ml-2 md:h-[380px] md:w-[310px] xl:h-[200px] xl:w-full xl:bg-contain">
            <Image
              src="/infrastructure-service.webp"
              alt="Business People"
              style={{ objectFit: "contain" }}
              fill
            />
          </div>
          <div className="flex">
            <div>
              <p>Infrastructure Service</p>
              <p>Landing Page</p>
            </div>
            <Link
              href="https://webinovasi.com/food-pizza/"
              className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-gray-200 p-4 shadow-md" // Adjust container size and center
            >
              <LogoEyeSVG />
            </Link>
          </div>
        </div>
        <div>
          <div className="relative z-30 h-[600px] w-full rounded-xl md:ml-2 md:h-[380px] md:w-[310px] xl:h-[200px] xl:w-full xl:bg-contain">
            <Image
              src="/infrastructure-service.webp"
              alt="Business People"
              style={{ objectFit: "contain" }}
              fill
            />
          </div>
          <div className="flex">
            <div>
              <p>Infrastructure Service</p>
              <p>Landing Page</p>
            </div>
            <Link
              href="https://webinovasi.com/furniture-product/"
              className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-gray-200 p-4 shadow-md" // Adjust container size and center
            >
              <LogoEyeSVG />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
