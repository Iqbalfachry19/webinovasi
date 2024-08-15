import React, { useEffect, useState, useRef } from "react";
import useStore from "./store/store";

const TextEditor: React.FC = () => {
  const { content, textAlign, setContent } = useStore();
  const [isEditing, setIsEditing] = useState(false);
  const editorRef = useRef<HTMLParagraphElement>(null);

  // Function to set the cursor position to the end
  const setCursorToEnd = () => {
    if (editorRef.current) {
      const range = document.createRange();
      const selection = window.getSelection();
      range.selectNodeContents(editorRef.current);
      range.collapse(false); // Move cursor to the end
      if (selection) {
        selection.removeAllRanges();
        selection.addRange(range);
      }
    }
  };

  const handleInput = () => {
    if (editorRef.current) {
      setContent(editorRef.current.textContent || "");
      setCursorToEnd(); // Ensure cursor is at the end after input
    }
  };

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
    if (editorRef.current) {
      setContent(editorRef.current.textContent || "");
    }
  };

  useEffect(() => {
    if (editorRef.current && isEditing) {
      setCursorToEnd();
    }
  }, [isEditing]);

  // Determine whether to apply the background color
  const hasContent = content.trim().length > 0;
  const backgroundColorClass = !hasContent ? "bg-gray-200 h-6" : "";

  return (
    <p
      ref={editorRef}
      style={{ textAlign }}
      className={`focus:outline-none ${backgroundColorClass}`}
      contentEditable={isEditing}
      suppressContentEditableWarning={true}
      onDoubleClick={handleDoubleClick}
      onBlur={handleBlur}
      onFocus={setCursorToEnd} // Set cursor to end on focus
      onInput={handleInput} // Update content and cursor position on input
    >
      {content}
    </p>
  );
};

export default TextEditor;
