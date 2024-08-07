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
      <div className="absolute bottom-[400px] left-[900px] z-20 h-32 w-[700px] -translate-x-1/2 transform rounded-lg bg-white shadow-lg"></div>

      <div className="absolute bottom-[250px] left-[900px] z-20 h-32 w-[700px] -translate-x-1/2 transform rounded-lg bg-white shadow-lg"></div>
      <div className="absolute bottom-[100px] left-[900px] z-20 h-32 w-[700px] -translate-x-1/2 transform rounded-lg bg-white shadow-lg"></div>
    </section>
  );
}

export default Alasan;
