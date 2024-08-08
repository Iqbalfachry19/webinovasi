import React from "react";

function Alasan() {
  return (
    <section className="relative mt-20 flex h-[700px] w-[800px] items-center bg-[#ECF0FB]">
      <div className="ml-28 mt-20 w-[500px] pr-32">
        <p className="text-end text-7xl font-bold">
          ALASAN <span className="text-[#5C59C2]">BISNISMU</span> HARUS PUNYA
          WEBSITE
        </p>
      </div>
      <div className="absolute bottom-[400px] left-[900px] z-20 h-32 w-[700px] -translate-x-1/2 transform rounded-lg bg-white shadow-lg">
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

      <div className="absolute bottom-[250px] left-[900px] z-20 h-32 w-[700px] -translate-x-1/2 transform rounded-lg bg-white shadow-lg">
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
      <div className="absolute bottom-[100px] left-[900px] z-20 h-32 w-[700px] -translate-x-1/2 transform rounded-lg bg-white shadow-lg">
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
