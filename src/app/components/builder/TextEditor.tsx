import React, { useState, useEffect } from "react";

interface TextEditorProps {
  content?: string;
  textAlign?: "left" | "center" | "right";
}

const TextEditor: React.FC<TextEditorProps> = ({
  content = "",
  textAlign = "left",
}) => {
  const [editableContent, setEditableContent] = useState(content);
  const [isEditing, setIsEditing] = useState(false);

  // Sync state with content prop
  useEffect(() => {
    setEditableContent(content);
  }, [content]);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = (e: React.FocusEvent<HTMLParagraphElement>) => {
    setIsEditing(false);
    setEditableContent(e.currentTarget.textContent || "");
  };

  return (
    <p
      className={`text-${textAlign} focus:outline-none ${
        isEditing ? "bg-gray-200" : ""
      }`}
      contentEditable={isEditing}
      suppressContentEditableWarning={true}
      onDoubleClick={handleDoubleClick}
      onBlur={handleBlur}
    >
      {editableContent}
    </p>
  );
};

export default TextEditor;
