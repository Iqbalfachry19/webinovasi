import React from "react";

const TextPath: React.FC<{ text: string }> = ({ text = "Text Path" }) => {
  return (
    <svg width="100%" height="200" viewBox="0 0 100 100">
      <defs>
        <path id="textPath" d="M10,50 A40,40 0 1,1 90,50 A40,40 0 1,1 10,50" />
      </defs>
      <text fill="none" stroke="black" strokeWidth="0.5">
        <textPath href="#textPath" startOffset="50%">
          {text}
        </textPath>
      </text>
    </svg>
  );
};

export default TextPath;
