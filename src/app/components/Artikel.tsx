import React from "react";

function Artikel() {
  return (
    <section className="mx-auto mt-10 flex h-auto max-w-[1120px] flex-col items-center px-4 sm:mt-16 md:mt-20 lg:mt-24 xl:h-[700px]">
      <p className="w-full text-center text-2xl font-bold sm:text-3xl md:text-4xl">
        PULUHAN OWNER TELAH MEMPERCAYAKAN BRAND MEREKA KEPADA KAMI
      </p>
      <p className="mt-4 text-lg sm:text-xl">BAGAIMANA DENGAN KAMU ?</p>
      <button className="mt-6 flex items-center justify-center rounded-md bg-transparent px-6 py-3 text-lg font-semibold text-black transition duration-300 hover:text-[#6766c3] sm:text-xl">
        <p>Bangun Websitemu Sekarang</p>
        <svg
          aria-hidden="true"
          className="ml-2 h-4 w-4 fill-current text-black duration-150 sm:h-5 sm:w-5"
          viewBox="0 0 448 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
        </svg>
      </button>
      <p className="mt-12 text-2xl font-bold sm:text-3xl md:text-4xl">
        ARTIKEL <span className="text-[#5C59C2]">TERBARU</span>
      </p>
      <div className="mt-6 w-full max-w-[1000px] rounded-md bg-white p-4 shadow-md sm:p-6">
        <h2 className="text-xl font-bold sm:text-2xl">Hello World!</h2>
        <p className="mt-2 text-sm text-gray-600 sm:text-base">
          Aryo Kuncoro &bull; 22/05/2024 &bull; Uncategorized &bull; No Comments
        </p>
        <p className="mt-4 text-sm sm:text-base">
          Welcome to WordPress. This is your first post. Edit or delete it, then
          start writing!
        </p>
      </div>
    </section>
  );
}

export default Artikel;
