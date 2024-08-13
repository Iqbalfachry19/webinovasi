import React, { ChangeEvent } from "react";

interface PropertyPanelProps {
  component: {
    id: string;
    type: string;
    props: {
      content?: string;
      text?: string;
      icon?: string;
      size?: number;
      color?: string;
      src?: string; // Add src property for video
      width?: number; // Add width property for video
      height?: number; // Add height property for video
    };
  };
  onChange: (newProps: any) => void;
}

const PropertyPanel: React.FC<PropertyPanelProps> = ({
  component,
  onChange,
}) => {
  const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange({ text: event.target.value });
  };

  const handleContentChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange({ content: event.target.value });
  };

  const handleSizeChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange({ size: Number(event.target.value) });
  };

  const handleColorChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange({ color: event.target.value });
  };

  const handleIconChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange({ icon: event.target.value });
  };

  const handleSrcChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange({ src: event.target.value });
  };

  const handleWidthChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange({ width: Number(event.target.value) });
  };

  const handleHeightChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange({ height: Number(event.target.value) });
  };

  return (
    <div className="w-80 rounded-lg bg-gray-800 p-4 text-white shadow-lg">
      <h2 className="mb-4 text-lg font-semibold">Component Properties</h2>

      {component.type === "Button" && (
        <div className="mb-4">
          <label className="mb-1 block text-sm font-medium">
            Button Text:
            <input
              className="mt-1 block w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              value={component.props.text || ""}
              onChange={handleTextChange}
            />
          </label>
        </div>
      )}

      {component.type === "Text Editor" && (
        <div className="mb-4">
          <label className="mb-1 block text-sm font-medium">
            Title:
            <input
              className="mt-1 block w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              value={component.props.content || ""}
              onChange={handleContentChange}
            />
          </label>
        </div>
      )}

      {component.type === "Icon" && (
        <div className="mb-4">
          <label className="mb-1 block text-sm font-medium">
            Icon Name:
            <select
              className="mt-1 block w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={component.props.icon || "star"}
              onChange={handleIconChange}
            >
              <option value="star">Star</option>
              <option value="home">Home</option>
              <option value="user">User</option>
              {/* Add more options as needed */}
            </select>
          </label>
          <label className="mb-1 block text-sm font-medium">
            Size (px):
            <input
              className="mt-1 block w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="number"
              value={component.props.size || 24}
              onChange={handleSizeChange}
            />
          </label>
          <label className="mb-1 block text-sm font-medium">
            Color:
            <input
              className="mt-1 block w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="color"
              value={component.props.color || "#000000"}
              onChange={handleColorChange}
            />
          </label>
        </div>
      )}

      {component.type === "Video" && (
        <div className="mb-4">
          <label className="mb-1 block text-sm font-medium">
            Video Source URL:
            <input
              className="mt-1 block w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              value={
                component.props.src ||
                "https://www.youtube.com/watch?v=XHOmBV4js_E"
              }
              onChange={handleSrcChange}
            />
          </label>
          <label className="mb-1 block text-sm font-medium">
            Width (px):
            <input
              className="mt-1 block w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="number"
              value={component.props.width || 640}
              onChange={handleWidthChange}
            />
          </label>
          <label className="mb-1 block text-sm font-medium">
            Height (px):
            <input
              className="mt-1 block w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="number"
              value={component.props.height || 360}
              onChange={handleHeightChange}
            />
          </label>
        </div>
      )}
    </div>
  );
};

export default PropertyPanel;
