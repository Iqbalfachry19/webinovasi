import React from "react";
import Image from "next/image";

function WebsiteTypes() {
  return (
    <div className="mx-auto max-w-[1150px] py-8">
      <h1 className="mb-12 text-center text-4xl font-bold">
        BUAT WEBSITEMU SEKARANG
      </h1>
      <div className="flex flex-col justify-center space-y-8 px-2 md:flex-row md:items-center md:justify-center md:space-x-2 md:space-y-0 xl:flex-row xl:space-x-8 xl:space-y-0">
        {/* Website LandingPage Section */}
        <div className="relative flex h-[200px] w-full flex-col items-center overflow-hidden rounded-lg bg-black/20 p-8 text-center md:w-[300px] xl:h-[300px] xl:w-[340px]">
          <div className="pointer-events-none absolute inset-0">
            <Image
              src="/Startup-business-spaceship-goals-launch-concept-1.png"
              alt="Background"
              fill
              style={{ objectFit: "cover" }}
              quality={100}
              className="absolute z-[-1]"
            />
          </div>
          <div className="absolute bottom-0 flex h-20 w-full flex-col items-center bg-black/70 p-4">
            <div className="flex w-full items-center justify-between">
              <h2 className="w-22 text-start text-xl font-bold text-white">
                Website LandingPage
              </h2>

              <button className="h-10 w-40 cursor-pointer items-center justify-center rounded bg-[#5B59C2] px-6 text-white transition duration-300 hover:bg-[#6766c3]">
                Beli Disini
              </button>
            </div>
          </div>
        </div>

        {/* Dibikinin Website Section */}
        <div className="relative flex h-[200px] flex-col items-center overflow-hidden rounded-lg bg-black/20 p-8 text-center md:w-[300px] xl:h-[300px] xl:w-[340px]">
          <div className="pointer-events-none absolute inset-0">
            <Image
              src="/Startup-business-spaceship-goals-launch-concept-2.png"
              alt="Background"
              fill
              style={{ objectFit: "cover" }}
              quality={100}
              className="absolute z-[-1]"
            />
          </div>
          <div className="absolute bottom-0 flex h-20 w-full flex-col items-center bg-black/70 p-4">
            <div className="flex w-full items-center justify-between">
              <h2 className="w-22 text-start text-xl font-bold text-white">
                Dibikinin Website
              </h2>

              <button className="h-10 w-40 cursor-pointer items-center justify-center rounded bg-[#5B59C2] px-6 text-white transition duration-300 hover:bg-[#6766c3]">
                Beli Disini
              </button>
            </div>
          </div>
        </div>

        {/* Website E-Commerce Section */}
        <div className="relative flex h-[200px] flex-col items-center overflow-hidden rounded-lg bg-black/20 p-8 text-center md:w-[300px] xl:h-[300px] xl:w-[340px]">
          <div className="pointer-events-none absolute inset-0">
            <Image
              src="/Startup-business-spaceship-goals-launch-concept.png"
              alt="Background"
              fill
              style={{ objectFit: "cover" }}
              quality={100}
              className="absolute z-[-1]"
            />
          </div>
          <div className="absolute bottom-0 flex h-20 w-full flex-col items-center bg-black/70 p-4">
            <div className="flex w-full items-center justify-between">
              <h2 className="w-22 text-start text-xl font-bold text-white">
                Website E-Commerce
              </h2>

              <button className="h-10 w-40 cursor-pointer items-center justify-center rounded bg-[#5B59C2] px-6 text-white transition duration-300 hover:bg-[#6766c3]">
                Beli Disini
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WebsiteTypes;
