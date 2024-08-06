import React from "react";

function WebsiteTypes() {
  return (
    <div className="mx-auto max-w-[1150px] px-8 py-8">
      <h1 className="mb-12 text-center text-4xl font-bold">
        BUAT WEBSITEMU SEKARANG
      </h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Website LandingPage Section */}
        <div className="flex flex-col items-center rounded-lg bg-black/50 p-8 text-center">
          <h2 className="mb-4 text-2xl font-bold text-white">
            Website LandingPage
          </h2>
          <a
            className="inline-block rounded bg-[#5B59C2] px-6 py-3 text-white transition duration-300 hover:bg-[#6766c3]"
            href="http://wa.me/+6282287169964"
          >
            Beli Disini
          </a>
        </div>

        {/* Dibikinin Website Section */}
        <div className="flex flex-col items-center rounded-lg bg-black/50 p-8 text-center">
          <h2 className="mb-4 text-2xl font-bold text-white">
            Dibikinin Website
          </h2>
          <a
            className="inline-block rounded bg-[#5B59C2] px-6 py-3 text-white transition duration-300 hover:bg-[#6766c3]"
            href="http://wa.me/+6282287169964"
          >
            Beli Disini
          </a>
        </div>

        {/* Website E-Commerce Section */}
        <div className="flex flex-col items-center rounded-lg bg-black/50 p-8 text-center">
          <h2 className="mb-4 text-2xl font-bold text-white">
            Website E-Commerce
          </h2>
          <a
            className="inline-block rounded bg-[#5B59C2] px-6 py-3 text-white transition duration-300 hover:bg-[#6766c3]"
            href="http://wa.me/+6282287169964"
          >
            Beli Disini
          </a>
        </div>
      </div>
    </div>
  );
}

export default WebsiteTypes;
