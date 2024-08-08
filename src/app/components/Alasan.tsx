import React from "react";

function Alasan() {
  return (
    <section className="relative mt-20 flex h-[1300px] flex-col items-center bg-[#ECF0FB] xl:h-[700px] xl:w-[800px] xl:flex-row">
      <div className="mt-20 w-full xl:ml-28 xl:w-[500px] xl:pr-32">
        <p className="text-center text-2xl font-bold xl:text-end xl:text-7xl">
          ALASAN <span className="text-[#5C59C2]">BISNISMU</span> HARUS PUNYA
          WEBSITE
        </p>
      </div>
      <div className="z-20 mx-10 mt-10 transform rounded-lg bg-white shadow-lg xl:absolute xl:bottom-[400px] xl:left-[900px] xl:mx-0 xl:mt-0 xl:h-32 xl:w-[700px] xl:-translate-x-1/2">
        <div className="flex p-5">
          <p className="mr-2 text-6xl">01</p>
          <div>
            <p className="text-2xl font-bold text-[#5C59C2]">
              Meningkatkan Kredibilitas
            </p>
            <p>
              Website yang profesional dan informatif meningkatkan rasa percaya
              customer. Ini menunjukkan bahwa bisnis kamu serius dan
              berkomitmen.
            </p>
          </div>
        </div>
      </div>

      <div className="z-20 mx-10 mt-10 transform rounded-lg bg-white shadow-lg xl:absolute xl:bottom-[250px] xl:left-[900px] xl:mx-0 xl:mt-0 xl:h-32 xl:w-[700px] xl:-translate-x-1/2">
        <div className="flex p-5">
          <p className="mr-2 text-6xl">02</p>
          <div>
            <p className="text-2xl font-bold text-[#5C59C2]">
              Target pasar lebih luas
            </p>
            <p>
              Kalau selama ini jangkauan bisnis kamu cuma sebatas daerah
              Pekanbaru, melalui website, kamu jadi bisa menjangkau pasar
              internasional.
            </p>
          </div>
        </div>
      </div>
      <div className="z-20 mx-10 mt-10 transform rounded-lg bg-white shadow-lg xl:absolute xl:bottom-[100px] xl:left-[900px] xl:mx-0 xl:mt-0 xl:h-32 xl:w-[700px] xl:-translate-x-1/2">
        <div className="flex p-5">
          <p className="mr-2 text-6xl">03</p>
          <div>
            <p className="text-2xl font-bold text-[#5C59C2]">
              Menampilkan Detail Produk /Jasa Bisnismu
            </p>
            <p>
              Website memungkinkan pelanggan melihat informasi lengkap tentang
              produk atau jasa kamu, termasuk deskripsi, harga, dan cara
              pembelian.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Alasan;
