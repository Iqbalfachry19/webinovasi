import Image from "next/image";

function Hero() {
  return (
    <>
      <section className="relative mx-auto flex max-w-[1150px] flex-col items-center bg-center px-4 sm:px-6 lg:px-8">
        <div className="relative flex w-full flex-col items-center overflow-hidden rounded-2xl bg-black/20 bg-opacity-80 p-4 text-center text-white bg-blend-overlay sm:p-8 lg:p-12">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/Group-of-business-people-working-in-office.webp"
              alt="Business People"
              fill
              style={{ objectFit: "cover" }}
              className="bg-blend-overlay"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          {/* Content Section */}
          <div className="relative z-10 flex w-full flex-col items-center justify-center pb-8 pt-12 md:pb-12 md:pt-16">
            {/* Heading Section */}
            <div className="mb-6 md:mb-8">
              <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl">
                PERTAMA DI PEKANBARU
              </h1>
              <h2 className="text-4xl font-semibold sm:text-5xl md:text-6xl lg:text-6xl">
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
            <div className="flex flex-col gap-4 md:flex-row md:gap-6">
              <a
                className="inline-block rounded bg-[#5B59C2] px-4 py-2 text-base text-white hover:bg-[#6766c3] sm:px-6 sm:py-3 sm:text-lg md:px-8 md:py-4 md:text-xl"
                href="http://wa.me/+6282287169964"
              >
                Coba Sekarang
              </a>
              <a
                className="group flex items-center rounded-full bg-white px-4 py-2 text-base text-black duration-150 hover:bg-[#5B59C2] hover:text-white sm:px-6 sm:py-3 sm:text-lg md:px-8 md:py-4 md:text-xl"
                href="#alasan"
              >
                Pelajari Lebih Lanjut
                <svg
                  aria-hidden="true"
                  className="ml-2 h-4 w-4 fill-current text-black duration-150 group-hover:text-white sm:h-5 sm:w-5 md:h-6 md:w-6"
                  viewBox="0 0 448 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
