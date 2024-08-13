"use client";

import { useConfig } from "../../context/ConfigContext"; // Import useConfig
import Editor from "./Editor";
import PropertyPanel from "./PropertyPanel";
import { useState } from "react";
import { ChevronLeftIcon } from "@heroicons/react/24/outline"; // Import ChevronLeft from Heroicons

const EditorWrapper = () => {
  const { editorEnabled, toggleEditor } = useConfig(); // Access editorEnabled
  const [components, setComponents] = useState([
    { id: "1", type: "Container", props: {} }, // Added container
    { id: "2", type: "Grid", props: { columns: 2, gap: "4" } }, // Added grid
    { id: "3", type: "Heading", props: { text: "Click me!" } },
    {
      id: "4",
      type: "Image",
      props: {
        src: "https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci80ODM0ODkwMWE2YjFkNWI5NjM2M2E1N2Y1MDJjMGQyMj9zaXplPTQ5NiZkZWZhdWx0PXJldHJvIn0.kojxaoPVHM36x3algwq_TSKzdiJMeMWozcp4QFVBc0I",
        width: 104,
        height: 200,
      },
    }, // Updated props to match expected use
    {
      id: "5",
      type: "Text Editor",
      props: { content: "Hello This Text Editor" },
    },
    {
      id: "6",
      type: "Video",
      props: { url: "https://www.youtube.com/watch?v=XHOmBV4js_E" },
    }, // Updated props to match expected use
    { id: "7", type: "Button", props: { text: "Click me!" } },
    { id: "8", type: "Divider", props: { text: "Click me!" } },
    { id: "9", type: "Spacer", props: {} }, // Added Spacer component
    {
      id: "10",
      type: "Google Map",
      props: {
        src: "https://www.google.com/maps/embed/v1/place?q=Eiffel+Tower,+Paris&key=AIzaSyD-1SnzEXAQRIdSU54SWNBBITPe7TcB9v0",
      },
    }, // Added Google Map component
    {
      id: "11",
      type: "Icon",
      props: { icon: "star", size: 24, color: "#260005" },
    }, // Added Icon component
    { id: "12", type: "Forms", props: {} }, // Added Forms component
  ]);

  const [selectedComponent, setSelectedComponent] = useState<any>(null);

  const onDragEnd = (result: any) => {
    // Handle drag-and-drop results
  };

  const handleComponentChange = (id: string, newProps: any) => {
    setComponents((prevComponents) =>
      prevComponents.map((component) =>
        component.id === id ? { ...component, props: newProps } : component,
      ),
    );
  };

  const handleComponentClick = (id: string) => {
    const component = components.find((c) => c.id === id);
    if (component) {
      setSelectedComponent(component);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={toggleEditor}
        className="absolute right-3/4 top-1/2 flex -translate-y-1/2 transform items-center rounded bg-gray-800 p-2 text-white"
      >
        <ChevronLeftIcon className="mr-2 h-5 w-5" />
      </button>
      {editorEnabled && (
        <div className="flex">
          <div className="w-1/4 bg-gray-800 p-4 text-white">
            <h2 className="mb-4 text-lg font-semibold">Elements</h2>

            <h3 className="text-md mt-4 font-semibold">Layout</h3>
            <ul className="grid grid-cols-2 gap-2">
              {components
                .filter(
                  (component) =>
                    component.type === "Container" || component.type === "Grid",
                )
                .map((component) => (
                  <li
                    key={component.id}
                    className={`mb-2 cursor-pointer rounded p-2 ${selectedComponent?.id === component.id ? "bg-gray-700" : "bg-gray-600"}`}
                    onClick={() => handleComponentClick(component.id)}
                  >
                    {component.type}
                  </li>
                ))}
            </ul>
            <h3 className="text-md font-semibold">Basic</h3>
            <ul className="grid grid-cols-2 gap-2">
              {components
                .filter(
                  (component) =>
                    component.type === "Button" ||
                    component.type === "Text Editor" ||
                    component.type === "Heading" ||
                    component.type === "Image" ||
                    component.type === "Video" ||
                    component.type === "Divider" ||
                    component.type === "Spacer" ||
                    component.type === "Google Map" ||
                    component.type === "Icon" ||
                    component.type === "Forms",
                )
                .map((component) => (
                  <li
                    key={component.id}
                    className={`mb-2 cursor-pointer rounded p-2 ${selectedComponent?.id === component.id ? "bg-gray-700" : "bg-gray-600"}`}
                    onClick={() => handleComponentClick(component.id)}
                  >
                    {component.type}
                  </li>
                ))}
            </ul>
          </div>
          <div className="flex-1 p-4">
            {selectedComponent && (
              <PropertyPanel
                component={selectedComponent}
                onChange={(newProps) =>
                  handleComponentChange(selectedComponent.id, newProps)
                }
              />
            )}
            <Editor
              components={components}
              onDragEnd={onDragEnd}
              onComponentClick={handleComponentClick} // Pass click handler
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default EditorWrapper;
