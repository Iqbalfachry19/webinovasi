import Head from "next/head";
import Image from "next/image";

function Hero() {
  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/Group-of-business-people-working-in-office.svg"
          as="image"
        />
      </Head>
      <div className="relative mx-auto flex min-h-screen max-w-[1150px] flex-col items-center bg-center">
        <div className="relative flex h-[600px] w-full flex-col items-center overflow-hidden rounded-2xl bg-black/20 bg-opacity-80 p-8 text-center text-white bg-blend-overlay">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/Group-of-business-people-working-in-office.svg"
              alt="Business People"
              fill
              style={{ objectFit: "cover" }}
              className="bg-blend-overlay"
            />
            <div className="absolute inset-0 bg-black/50 bg-opacity-50"></div>
          </div>

          {/* Content Section */}
          <div className="relative z-10 flex h-full w-full flex-col items-center justify-center">
            {/* Heading Section */}
            <div className="mb-8">
              <h1 className="mb-4 text-3xl font-bold">PERTAMA DI PEKANBARU</h1>
              <h2 className="text-6xl font-semibold">
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
                className="inline-block rounded bg-[#5B59C2] px-6 py-3 text-white hover:bg-[#6766c3]"
                href="http://wa.me/+6282287169964"
              >
                Coba Sekarang
              </a>
              <a
                className="group flex items-center rounded-full bg-white px-6 py-3 text-black duration-150 hover:bg-[#5B59C2] hover:text-white"
                href="#alasan"
              >
                Pelajari Lebih Lanjut
                <svg
                  aria-hidden="true"
                  className="ml-2 h-5 w-5 fill-current text-black duration-150 group-hover:text-white"
                  viewBox="0 0 448 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
