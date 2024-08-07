import Link from "next/link";
import React from "react";

function Portfolio() {
  return (
    <section className="p-6">
      <h2 className="mb-6 text-2xl font-bold">
        Our <span className="text-[#5C59C2]">Portfolio</span>
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Example items */}
        <Link
          href="https://webinovasi.com/infrastructureservice/"
          className="rounded-lg bg-gray-200 p-4 shadow-md"
        >
          Item 1
        </Link>
        <Link
          href="https://webinovasi.com/logo-agency/"
          className="rounded-lg bg-gray-200 p-4 shadow-md"
        >
          Item 2
        </Link>
        <Link
          href="https://webinovasi.com/rent-car-theme/"
          className="rounded-lg bg-gray-200 p-4 shadow-md"
        >
          Item 3
        </Link>
        <Link
          href="https://webinovasi.com/beauty-clinic/"
          className="rounded-lg bg-gray-200 p-4 shadow-md"
        >
          Item 4
        </Link>
        <Link
          href="https://webinovasi.com/food-pizza/"
          className="rounded-lg bg-gray-200 p-4 shadow-md"
        >
          Item 5
        </Link>
        <Link
          href="https://webinovasi.com/furniture-product/"
          className="rounded-lg bg-gray-200 p-4 shadow-md"
        >
          Item 6
        </Link>
      </div>
    </section>
  );
}

export default Portfolio;
