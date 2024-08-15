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
  const setCursorToCurrentPosition = () => {
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
  // Update content on input and keep cursor at the end
  const handleInput = () => {
    if (editorRef.current) {
      setContent(editorRef.current.textContent || "");
      setCursorToCurrentPosition(); // Ensure cursor is at the end after input
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

  return (
    <p
      ref={editorRef}
      style={{ textAlign }}
      className={`focus:outline-none ${isEditing ? "bg-gray-200" : ""}`}
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
