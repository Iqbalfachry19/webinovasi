import React, { useCallback, useRef, useState, useEffect } from "react";
import useStore from "./store/store";

const TextEditor: React.FC = () => {
  const { content, textAlign, setContent } = useStore();
  const [isEditing, setIsEditing] = useState(false);
  const editorRef = useRef<HTMLParagraphElement>(null);
  const caretPositionRef = useRef<{ start: number; end: number } | null>(null);

  // Function to save the cursor position
  const saveCaretPosition = useCallback(() => {
    if (editorRef.current) {
      const selection = window.getSelection();
      if (selection && selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        const preSelectionRange = range.cloneRange();
        preSelectionRange.selectNodeContents(editorRef.current);
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
    if (editorRef.current && caretPositionRef.current) {
      let charIndex = 0;
      const range = document.createRange();
      range.setStart(editorRef.current, 0);
      range.collapse(true);

      const nodeStack = [editorRef.current];
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

  const handleInput = useCallback(() => {
    if (editorRef.current) {
      saveCaretPosition(); // Save the caret position before updating content
      setContent(editorRef.current.textContent || "");
      // Use requestAnimationFrame to ensure content and cursor position updates are synchronized
      requestAnimationFrame(() => restoreCaretPosition());
    }
  }, [saveCaretPosition, restoreCaretPosition, setContent]);

  const handleDoubleClick = useCallback(() => {
    setIsEditing(true);
  }, []);

  const handleBlur = useCallback(() => {
    setIsEditing(false);
    if (editorRef.current) {
      setContent(editorRef.current.textContent || "");
    }
  }, [setContent]);

  useEffect(() => {
    if (isEditing) {
      restoreCaretPosition(); // Restore cursor position when editing starts
    }
  }, [isEditing, restoreCaretPosition]);

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
      onInput={handleInput} // Update content and cursor position on input
    >
      {content}
    </p>
  );
};

export default TextEditor;
