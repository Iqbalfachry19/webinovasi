import React, { useState } from "react";

interface Tab {
  label: string;
  content: React.ReactNode;
}

const Tabs: React.FC<{ tabs: Tab[] }> = ({
  tabs = [
    { label: "Tab 1", content: <div>Content 1</div> },
    { label: "Tab 2", content: <div>Content 2</div> },
  ],
}) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="mx-auto w-full max-w-lg">
      {/* Tab Labels */}
      <div className="flex border-b border-gray-200">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`flex-1 py-2 text-center ${
              activeTab === index
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-white p-4">{tabs[activeTab].content}</div>
    </div>
  );
};

export default Tabs;
