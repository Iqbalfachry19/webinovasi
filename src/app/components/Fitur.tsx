import React from "react";
import Image from "next/image";

function Fitur() {
  return (
    <section className="flex flex-col items-center bg-[#1e1e1e] py-20 xl:flex-row xl:pl-[100px]">
      <div className="flex h-[400px] flex-col space-y-10 xl:h-[600px]">
        <div className="xl;mr-20 relative h-[400px] w-[400px] rounded-xl md:ml-24 md:h-[380px] md:w-[600px] xl:h-[500px] xl:w-[450px]">
          <Image
            src="/Frame-3227.png"
            alt="Business People"
            style={{ objectFit: "contain" }}
            fill
          />
        </div>
        <div className="relative h-[400px] w-[400px] rounded-xl md:ml-24 md:h-[380px] md:w-[310px] xl:mr-20 xl:h-[500px] xl:w-[450px]">
          <Image
            src="/Frame-3226.png"
            alt="Business People"
            style={{ objectFit: "contain" }}
            fill
          />
        </div>
      </div>
      <div className="flex flex-col">
        <h2 className="h-[240px] w-[300px] text-5xl font-normal text-white xl:h-[400px] xl:w-[490px] xl:text-7xl">
          Kenapa Inovasiweb solusi terbaik untuk bisnismu
        </h2>
        <button className="group mt-10 flex items-center self-start rounded-full bg-white px-4 py-2 pt-2 text-base text-black duration-150 hover:bg-[#5B59C2] hover:text-white sm:px-6 sm:py-3 sm:text-lg md:px-8 md:py-4 md:text-xl">
          Ayo Mulai
          <svg
            aria-hidden="true"
            className="ml-2 h-4 w-4 fill-current text-black duration-150 group-hover:text-white sm:h-5 sm:w-5 md:h-6 md:w-6"
            viewBox="0 0 448 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
          </svg>
        </button>
      </div>
    </section>
  );
}

export default Fitur;
