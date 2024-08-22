import React, { useState } from "react";

interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

const Accordion: React.FC<{ items: AccordionItem[] }> = ({
  items = [
    { title: "Accordion 1", content: <div>Content 1</div> },
    { title: "Accordion 2", content: <div>Content 2</div> },
  ],
}) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="mx-auto w-full max-w-lg">
      {items.map((item, index) => (
        <div key={index} className="border-b border-gray-200">
          <button
            onClick={() => handleToggle(index)}
            className="w-full bg-gray-100 px-4 py-2 text-left text-gray-700 hover:bg-gray-200 focus:outline-none"
          >
            <h3 className="text-lg font-semibold">{item.title}</h3>
          </button>
          {expandedIndex === index && (
            <div className="bg-white p-4">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
