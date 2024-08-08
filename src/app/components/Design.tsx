// components/Design.js
import React from "react";
import Image from "next/image";
import PartnerCarousel from "./PartnerCarousel";

const Design = () => {
  return (
    <section className="relative flex w-full bg-[#ECF0FB]">
      <div className="z-10 ml-32 flex flex-col items-center justify-center text-start">
        <h2 className="text-xl xl:text-4xl">
          &quot;Kalau ngga bisa desain gimana?&quot;
        </h2>
        <p className="text-xl font-bold text-[#5C59C2] xl:text-5xl">
          Tenang, Kita Sediain Berbagai Tema Kok?
        </p>
        <button className="group mt-2 flex self-start rounded-full bg-[#1e1e1e] px-4 py-2 pt-2 text-base text-white duration-150 hover:bg-[#5B59C2] hover:text-white sm:px-6 sm:py-3 sm:text-lg md:px-8 md:py-4 md:text-xl">
          Konsul Aja Dulu
          <svg
            aria-hidden="true"
            className="ml-2 h-4 w-4 fill-current text-white duration-150 group-hover:text-white sm:h-5 sm:w-5 md:h-6 md:w-6"
            viewBox="0 0 448 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
          </svg>
        </button>
      </div>
      <div className="relative z-30 h-[600px] w-full rounded-xl md:ml-24 md:h-[380px] md:w-[310px] xl:h-[600px] xl:w-full xl:bg-contain">
        <Image
          src="/Frame-32442.webp"
          alt="Business People"
          style={{ objectFit: "contain" }}
          fill
        />
      </div>
      <div className="absolute bottom-[-80px] left-1/2 z-20 w-[1100px] -translate-x-1/2 transform rounded-lg bg-white shadow-lg">
        <PartnerCarousel />
      </div>
    </section>
  );
};

export default Design;
