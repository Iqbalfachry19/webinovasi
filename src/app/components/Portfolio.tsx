import React from "react";

function Portfolio() {
  return (
    <section className="p-6">
      <h2 className="mb-6 text-2xl font-bold">Our Portfolio</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Example items */}
        <div className="rounded-lg bg-gray-200 p-4 shadow-md">Item 1</div>
        <div className="rounded-lg bg-gray-200 p-4 shadow-md">Item 2</div>
        <div className="rounded-lg bg-gray-200 p-4 shadow-md">Item 3</div>
        <div className="rounded-lg bg-gray-200 p-4 shadow-md">Item 4</div>
        <div className="rounded-lg bg-gray-200 p-4 shadow-md">Item 5</div>
        <div className="rounded-lg bg-gray-200 p-4 shadow-md">Item 6</div>
      </div>
    </section>
  );
}

export default Portfolio;
