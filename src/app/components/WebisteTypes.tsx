import React from "react";
import Image from "next/image";

function WebsiteTypes() {
  return (
    <div className="mx-auto max-w-[1150px] py-8">
      <h1 className="mb-12 text-center text-4xl font-bold">
        Buat Websitemu Sekarang
      </h1>
      <div className="flex flex-col space-y-8">
        {/* Website LandingPage Section */}
        <div className="relative flex flex-col items-center rounded-lg bg-black/20 p-8 text-center">
          <Image
            src="/Startup-business-spaceship-goals-launch-concept-1.png"
            alt="Background"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="absolute inset-0 z-[-1] rounded-lg"
          />
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
        <div className="relative flex flex-col items-center rounded-lg bg-black/20 p-8 text-center">
          <Image
            src="/Startup-business-spaceship-goals-launch-concept-1.png"
            alt="Background"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="absolute inset-0 z-[-1] rounded-lg"
          />
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
        <div className="relative flex flex-col items-center rounded-lg bg-black/20 p-8 text-center">
          <Image
            src="/Startup-business-spaceship-goals-launch-concept-1.png"
            alt="Background"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="absolute inset-0 z-[-1] rounded-lg"
          />
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
