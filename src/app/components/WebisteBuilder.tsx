import React from "react";
import Image from "next/image";

function WebsiteBuilder() {
  return (
    <div className="mx-auto flex max-w-[1150px] py-8">
      <Image
        src="/gambar-2.webp"
        alt="Business People"
        width={500}
        height={150}
        style={{ objectFit: "cover" }}
        className="bg-blend-overlay"
      />

      <div className="px-10 py-20">
        <h1 className="mb-12 w-[470px] text-start text-6xl font-bold">
          Bangun Website Sesuai Seleramu
        </h1>
        <p className="mb-8 w-60 text-start text-xl">
          Dengan Inovasiweb, kamu bisa membangun websitemu sendiri tanpa perlu
          khawatir lagi hasilnya tidak sesuai.
        </p>
        <button className="block flex py-3 text-xl font-semibold text-black transition duration-300 hover:text-[#6766c3]">
          <p>Bangun Websitemu Sekarang</p>
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
    </div>
  );
}

export default WebsiteBuilder;
