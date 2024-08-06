import React from "react";
import Image from "next/image";

function Navbar() {
  return (
    <div className="mx-auto flex max-w-[1150px] items-center justify-between py-4">
      <div className="flex items-center">
        <Image width={300} height={50} src="/Logo-Inovasi-Web.svg" alt="Logo" />
      </div>
      <nav className="flex space-x-4">
        <p className="cursor-pointer">Home</p>
        <p className="cursor-pointer">Tema</p>
        <p className="cursor-pointer">Cara Custom Web</p>
      </nav>
      <button className="rounded bg-[#5B59C2] px-4 py-2 text-white hover:bg-[#5B59C2]">
        Kontak Kami
      </button>
    </div>
  );
}

export default Navbar;
