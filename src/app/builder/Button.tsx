import React, { useState, useRef, useEffect, useCallback } from "react";
import useStore from "./store/store";

const Button: React.FC = () => {
  const { buttonText, setButtonText } = useStore();
  const [isEditing, setIsEditing] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const caretPositionRef = useRef<{ start: number; end: number } | null>(null);
  const blurTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Function to save the cursor position
  const saveCaretPosition = useCallback(() => {
    if (buttonRef.current) {
      const selection = window.getSelection();
      if (selection && selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        const preSelectionRange = range.cloneRange();
        preSelectionRange.selectNodeContents(buttonRef.current);
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
    if (buttonRef.current && caretPositionRef.current) {
      let charIndex = 0;
      const range = document.createRange();
      range.setStart(buttonRef.current, 0);
      range.collapse(true);

      const nodeStack = [buttonRef.current];
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

  // Handle the double-click to enable editing
  const handleEditClick = () => {
    setIsEditing(true);
  };

  // Handle the change in button text
  const handleInput = () => {
    if (buttonRef.current) {
      saveCaretPosition(); // Save the caret position before updating content
      setButtonText(buttonRef.current.textContent || "");
      // Use requestAnimationFrame to ensure content and cursor position updates are synchronized
      requestAnimationFrame(() => restoreCaretPosition());
    }
  };

  // Disable editing when input loses focus
  const handleBlur = () => {
    setIsEditing(false);
    if (buttonRef.current) {
      setButtonText(buttonRef.current.textContent || "");
    }
  };

  // Handle button click
  const handleButtonClick = () => {
    // Add your button click logic here if needed
  };

  // Sync the store's buttonText with the component's state when it changes
  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.textContent = buttonText;
    }
  }, [buttonText]);

  // Restore caret position when editing starts
  useEffect(() => {
    if (isEditing) {
      restoreCaretPosition();
    }
  }, [isEditing, restoreCaretPosition]);

  // Add event listeners for clicks outside the button
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        if (isEditing) {
          handleBlur();
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (blurTimeoutRef.current) {
        clearTimeout(blurTimeoutRef.current);
      }
    };
  }, [isEditing, handleBlur]);

  return (
    <button
      ref={buttonRef}
      onClick={handleButtonClick}
      onDoubleClick={handleEditClick}
      onBlur={handleBlur}
      onInput={handleInput}
      contentEditable={isEditing}
      suppressContentEditableWarning={true}
      className={`rounded ${isEditing ? "bg-gray-200" : "bg-blue-500"} px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300`}
      style={{ cursor: isEditing ? "text" : "pointer" }}
    >
      {buttonText}
    </button>
  );
};

export default Button;
