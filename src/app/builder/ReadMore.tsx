import React, { useState } from "react";

const ReadMore: React.FC<{ content: string; maxLength?: number }> = ({
  content = "content here please read more or less than or more or makdada  asdasd'ad   asdadad asdasddas asdasda adasda asdasddas 100 characters or less or more or more or more or more",
  maxLength = 100,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="relative">
      <p>
        {isExpanded
          ? content
          : `${content.substring(0, maxLength)}${content.length > maxLength ? "..." : ""}`}
      </p>
      {content.length > maxLength && (
        <button
          onClick={toggleExpand}
          className="mt-2 text-blue-500 hover:underline focus:outline-none"
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      )}
    </div>
  );
};

export default ReadMore;
