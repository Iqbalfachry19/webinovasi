import React, { useState, useRef, useEffect, useCallback } from "react";
import useStore from "./store/store";

// Define props interface
interface HeadingProps {
  text?: string; // Optional prop for heading text
  level?: 1 | 2 | 3 | 4 | 5 | 6; // Optional prop for heading level
  className?: string; // Optional prop for custom styles
}

const Heading: React.FC<HeadingProps> = ({
  text = "Default Heading",
  level = 1,
  className = "",
}) => {
  const { headingText, setHeadingText } = useStore();
  const [isEditing, setIsEditing] = useState(false);
  const [localText, setLocalText] = useState(text);
  const headingRef = useRef<HTMLElement>(null);
  const caretPositionRef = useRef<{ start: number; end: number } | null>(null);

  // Function to save the cursor position
  const saveCaretPosition = useCallback(() => {
    if (headingRef.current) {
      const selection = window.getSelection();
      if (selection && selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        const preSelectionRange = range.cloneRange();
        preSelectionRange.selectNodeContents(headingRef.current);
        preSelectionRange.setEnd(range.startContainer, range.startOffset);
        const start = preSelectionRange.toString().length;

        caretPositionRef.current = {
          start: start,
          end: start + range.toString().length,
        };
      }
    }
  }, []);

  // Function to restore the cursor position
  const restoreCaretPosition = useCallback(() => {
    if (headingRef.current && caretPositionRef.current) {
      let charIndex = 0;
      const range = document.createRange();
      range.setStart(headingRef.current, 0);
      range.collapse(true);

      const nodeStack = [headingRef.current];
      let node: any;
      let foundStart = false;
      let stop = false;

      while (!stop && (node = nodeStack.pop())) {
        if (node.nodeType === Node.TEXT_NODE) {
          const textNode = node as Text;
          const nextCharIndex = charIndex + textNode.length;
          if (
            !foundStart &&
            caretPositionRef.current.start >= charIndex &&
            caretPositionRef.current.start <= nextCharIndex
          ) {
            range.setStart(
              textNode,
              caretPositionRef.current.start - charIndex,
            );
            foundStart = true;
          }
          if (
            foundStart &&
            caretPositionRef.current.end >= charIndex &&
            caretPositionRef.current.end <= nextCharIndex
          ) {
            range.setEnd(textNode, caretPositionRef.current.end - charIndex);
            stop = true;
          }
          charIndex = nextCharIndex;
        } else {
          const childNodes = (node as any).childNodes;
          for (let i = 0; i < childNodes.length; i++) {
            nodeStack.push(childNodes[i]);
          }
        }
      }

      const selection = window.getSelection();
      if (selection) {
        selection.removeAllRanges();
        selection.addRange(range);
      }
    }
  }, []);

  // Handle double-click to enable editing
  const handleEditClick = () => {
    setIsEditing(true);
  };

  // Handle text changes
  const handleInput = () => {
    if (headingRef.current) {
      saveCaretPosition(); // Save the caret position before updating content
      setLocalText(headingRef.current.textContent || "");
      // Use requestAnimationFrame to ensure content and cursor position updates are synchronized
      requestAnimationFrame(() => restoreCaretPosition());
    }
  };

  // Handle blur
  const handleBlur = () => {
    if (headingRef.current) {
      setHeadingText(headingRef.current.textContent || "");
      setLocalText(headingRef.current.textContent || "");
    }
    setIsEditing(false);
  };

  // Restore text from store
  useEffect(() => {
    setLocalText(headingText);
  }, [headingText]);

  // Handle editing state change
  useEffect(() => {
    if (isEditing) {
      restoreCaretPosition();
    }
  }, [isEditing, restoreCaretPosition]);

  // Ensure HeadingTag is of type HTML element
  const HeadingTag = `h${level}` as any;

  return (
    <HeadingTag
      ref={headingRef}
      contentEditable={isEditing}
      suppressContentEditableWarning={true}
      onClick={isEditing ? undefined : handleEditClick}
      onInput={isEditing ? handleInput : undefined}
      onBlur={isEditing ? handleBlur : undefined}
      className={`font-bold text-gray-900 ${className}`}
      style={{ cursor: isEditing ? "text" : "pointer" }}
    >
      {localText}
    </HeadingTag>
  );
};

export default Heading;
