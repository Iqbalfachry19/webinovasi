import React from "react";

function Artikel() {
  return (
    <section className="mx-auto mt-20 flex h-[690px] max-w-[1120px] flex-col items-center">
      <p className="w-[1000px] text-center text-4xl font-bold">
        PULUHAN OWNER TELAH MEMPERCAYAKAN BRAND MEREKA KEPADA KAMI
      </p>
      <p className="">BAGAIMANA DENGAN KAMU ?</p>
      <button className="flex items-center justify-center py-3 text-xl font-semibold text-black transition duration-300 hover:text-[#6766c3]">
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
      <p className="mt-40 text-4xl font-bold">
        ARTIKEL <span className="text-[#5C59C2]">TERBARU</span>
      </p>
      <div className="mt-8 w-full max-w-[1000px] bg-white p-6 shadow-md">
        <h2 className="text-2xl font-bold">Hello World!</h2>
        <p className="mt-2 text-gray-600">
          Aryo Kuncoro &bull; 22/05/2024 &bull; Uncategorized &bull; No Comments
        </p>
        <p className="mt-4">
          Welcome to WordPress. This is your first post. Edit or delete it, then
          start writing!
        </p>
      </div>
    </section>
  );
}

export default Artikel;
