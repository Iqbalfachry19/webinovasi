import React, { useState } from "react";

interface ToggleItem {
  title: string;
  content: React.ReactNode;
}

const ToggleGroup: React.FC<{ items: ToggleItem[] }> = ({
  items = [
    { title: "Toggle 1", content: <div>Content 1</div> },
    { title: "Toggle 2", content: <div>Content 2</div> },
  ],
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mx-auto w-full max-w-md">
      {items.map((item, index) => (
        <div key={index}>
          {/* Toggle Button */}
          <button
            onClick={() => handleToggle(index)}
            className="w-full rounded-t-lg bg-blue-500 px-4 py-2 text-left text-white focus:outline-none"
          >
            {openIndex === index ? "Hide Content" : "Show Content"}
          </button>

          {/* Toggle Content */}
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              openIndex === index ? "max-h-40" : "max-h-0"
            }`}
          >
            <div className="rounded-b-lg bg-gray-100 p-4">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ToggleGroup;
