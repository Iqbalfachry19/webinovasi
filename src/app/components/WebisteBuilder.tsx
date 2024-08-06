import React from "react";
import Image from "next/image";

function WebsiteBuilder() {
  return (
    <div className="mx-auto max-w-[1150px] py-8">
      <h1 className="mb-12 text-center text-4xl font-bold">
        Bangun Website Sesuai Seleramu
      </h1>
      <p className="mb-8 text-center text-xl">
        Dengan Inovasiweb, kamu bisa membangun websitemu sendiri tanpa perlu
        khawatir lagi hasilnya tidak sesuai.
      </p>
      <button className="mx-auto block rounded bg-[#5B59C2] px-6 py-3 text-white transition duration-300 hover:bg-[#6766c3]">
        Bangun Websitemu Sekarang
      </button>
    </div>
  );
}

export default WebsiteBuilder;
