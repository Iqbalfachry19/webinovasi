import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      {/* Main Container */}
      <div className="flex flex-col items-center bg-white p-8 text-center">
        {/* Heading Section */}
        <div className="mb-8">
          <h1 className="mb-4 text-4xl font-bold">PERTAMA DI PEKANBARU</h1>
          <h2 className="text-2xl font-semibold">
            BIKIN WEBSITE
            <br />
            BISNISMU SENDIRI
            <br />
            TANPA PERLU
            <br />
            KODING
          </h2>
        </div>

        {/* Button Section */}
        <div className="flex gap-4">
          <a
            className="inline-block rounded bg-green-500 px-6 py-3 text-white hover:bg-green-600"
            href="http://wa.me/+6282287169964"
          >
            Coba Sekarang
          </a>
          <a
            className="inline-block flex items-center rounded bg-blue-500 px-6 py-3 text-white hover:bg-blue-600"
            href="#alasan"
          >
            <svg
              aria-hidden="true"
              className="mr-2 h-5 w-5"
              viewBox="0 0 448 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
            </svg>
            Pelajari Lebih Lanjut
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
