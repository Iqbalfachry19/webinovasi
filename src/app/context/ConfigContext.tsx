"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import EditorWrapper from "../components/builder/EditorWrapper";

interface ConfigContextType {
  editorEnabled: boolean;
  toggleEditor: () => void;
}

const ConfigContext = createContext<ConfigContextType | undefined>(undefined);

export const ConfigProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [editorEnabled, setEditorEnabled] = useState<boolean>(
    process.env.NEXT_PUBLIC_EDITOR_ENABLED === "true",
  );

  const toggleEditor = () => {
    setEditorEnabled((prev) => !prev);
  };

  return (
    <ConfigContext.Provider value={{ editorEnabled, toggleEditor }}>
      <EditorWrapper />
      {children}
    </ConfigContext.Provider>
  );
};

export const useConfig = () => {
  const context = useContext(ConfigContext);
  if (!context) {
    throw new Error("useConfig must be used within a ConfigProvider");
  }
  return context;
};
