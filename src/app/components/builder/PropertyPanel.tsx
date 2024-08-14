import React, { ChangeEvent, useState, useEffect } from "react";

interface ButtonProps {
  text?: string;
}

interface TextEditorProps {
  content?: string;
  textAlign?: string;
}

interface IconProps {
  icon?: string;
  size?: number;
  color?: string;
}

interface MediaProps {
  src?: string;
  width?: number;
  height?: number;
  alt?: string;
}

interface HeadingProps {
  text?: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

interface DividerProps {
  thickness?: number;
}

interface SpacerProps {
  margin?: number;
}

interface GoogleMapProps {
  latitude?: number;
  longitude?: number;
  zoom?: number;
  mapType?: string;
}

interface FormProps {
  action?: string;
  method?: string;
  fields?: string[];
}

interface ComponentProps {
  id: string;
  type: string;
  props: ButtonProps &
    TextEditorProps &
    IconProps &
    MediaProps &
    DividerProps &
    SpacerProps &
    GoogleMapProps &
    FormProps &
    HeadingProps;
}

interface PropertyPanelProps {
  component: ComponentProps;
  onChange: (newProps: Partial<ComponentProps["props"]>) => void;
  onClose: () => void;
}

const PropertyPanel: React.FC<PropertyPanelProps> = ({
  component,
  onChange,
  onClose,
}) => {
  const [text, setText] = useState(component.props.text || "");
  const [content, setContent] = useState(component.props.content || "");
  const [textAlign, setTextAlign] = useState(component.props.textAlign || "");
  const [icon, setIcon] = useState(component.props.icon || "star");
  const [size, setSize] = useState(component.props.size || 24);
  const [color, setColor] = useState(component.props.color || "#000000");
  const [src, setSrc] = useState(component.props.src || "");
  const [width, setWidth] = useState(component.props.width || 640);
  const [height, setHeight] = useState(component.props.height || 360);
  const [alt, setAlt] = useState(component.props.alt || "");
  const [thickness, setThickness] = useState(component.props.thickness || 1);
  const [margin, setMargin] = useState(component.props.margin || 10);
  const [latitude, setLatitude] = useState(component.props.latitude || 0);
  const [longitude, setLongitude] = useState(component.props.longitude || 0);
  const [zoom, setZoom] = useState(component.props.zoom || 10);
  const [mapType, setMapType] = useState(component.props.mapType || "roadmap");
  const [action, setAction] = useState(component.props.action || "");
  const [method, setMethod] = useState(component.props.method || "get");
  const [fields, setFields] = useState(component.props.fields?.join(",") || "");

  useEffect(() => {
    switch (component.type) {
      case "Button":
        setText(component.props.text || "");
        break;
      case "Text Editor":
        setContent(component.props.content || "");
        setTextAlign(component.props.textAlign || "");
        break;
      case "Icon":
        setIcon(component.props.icon || "star");
        setSize(component.props.size || 24);
        setColor(component.props.color || "#000000");
        break;
      case "Image":
        setSrc(component.props.src || "");
        setWidth(component.props.width || 640);
        setHeight(component.props.height || 360);
        setAlt(component.props.alt || "");
        break;
      case "Divider":
        setThickness(component.props.thickness || 1);
        break;
      case "Spacer":
        setMargin(component.props.margin || 10);
        break;
      case "Google Map":
        setLatitude(component.props.latitude || 0);
        setLongitude(component.props.longitude || 0);
        setZoom(component.props.zoom || 10);
        setMapType(component.props.mapType || "roadmap");
        break;
      case "Form":
        setAction(component.props.action || "");
        setMethod(component.props.method || "get");
        setFields(component.props.fields?.join(",") || "");
        break;
      case "Heading":
        setText(component.props.text || "");
        // Assuming heading level is handled elsewhere
        break;
      default:
        break;
    }
  }, [component]);

  const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newText = event.target.value;
    setText(newText);
    onChange({ text: newText });
  };

  const handleChange =
    (key: keyof ComponentProps["props"], isNumber = false) =>
    (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { type, value } = event.target;
      const newValue = isNumber
        ? value === "" // Handle empty value for numbers
          ? undefined
          : Number(value)
        : value;

      // Special handling for fields that can be empty
      if (key === "text" || key === "content") {
        onChange({ [key]: newValue || undefined });
      } else {
        onChange({ [key]: newValue });
      }
    };

  return (
    <div className="w-80 rounded-lg bg-gray-800 p-4 text-white shadow-lg">
      <h2 className="mb-4 text-lg font-semibold">Component Properties</h2>
      <button
        onClick={onClose}
        className="absolute right-2 top-2 rounded-full bg-red-600 px-3 py-1 text-sm"
      >
        x
      </button>
      {component.type === "Button" && (
        <div className="mb-4">
          <label className="mb-1 block text-sm font-medium">
            Button Text:
            <input
              className="mt-1 block w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              value={text}
              onChange={handleTextChange}
            />
          </label>
        </div>
      )}

      {component.type === "Text Editor" && (
        <div className="mb-4">
          <label className="mb-1 block text-sm font-medium">
            Content:
            <input
              className="mt-1 block w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
                onChange({ content: e.target.value });
              }}
            />
          </label>
          <label className="mb-1 block text-sm font-medium">
            Text Align:
            <select
              className="mt-1 block w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={textAlign}
              onChange={(e) => {
                setTextAlign(e.target.value);
                onChange({ textAlign: e.target.value });
              }}
            >
              <option value="left">Left</option>
              <option value="center">Center</option>
              <option value="right">Right</option>
            </select>
          </label>
        </div>
      )}

      {component.type === "Icon" && (
        <div className="mb-4">
          <label className="mb-1 block text-sm font-medium">
            Icon Name:
            <select
              className="mt-1 block w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={icon}
              onChange={(e) => {
                setIcon(e.target.value);
                onChange({ icon: e.target.value });
              }}
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
              value={size}
              onChange={(e) => {
                setSize(Number(e.target.value));
                onChange({ size: Number(e.target.value) });
              }}
            />
          </label>
          <label className="mb-1 block text-sm font-medium">
            Color:
            <input
              className="mt-1 block w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="color"
              value={color}
              onChange={(e) => {
                setColor(e.target.value);
                onChange({ color: e.target.value });
              }}
            />
          </label>
        </div>
      )}

      {component.type === "Image" && (
        <div className="mb-4">
          <label className="mb-1 block text-sm font-medium">
            Image Source URL:
            <input
              className="mt-1 block w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              value={src}
              onChange={(e) => {
                setSrc(e.target.value);
                onChange({ src: e.target.value });
              }}
            />
          </label>
          <label className="mb-1 block text-sm font-medium">
            Alternative Text:
            <input
              className="mt-1 block w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              value={alt}
              onChange={(e) => {
                setAlt(e.target.value);
                onChange({ alt: e.target.value });
              }}
            />
          </label>
          <label className="mb-1 block text-sm font-medium">
            Width (px):
            <input
              className="mt-1 block w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="number"
              value={width}
              onChange={(e) => {
                setWidth(Number(e.target.value));
                onChange({ width: Number(e.target.value) });
              }}
            />
          </label>
          <label className="mb-1 block text-sm font-medium">
            Height (px):
            <input
              className="mt-1 block w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="number"
              value={height}
              onChange={(e) => {
                setHeight(Number(e.target.value));
                onChange({ height: Number(e.target.value) });
              }}
            />
          </label>
        </div>
      )}

      {component.type === "Divider" && (
        <div className="mb-4">
          <label className="mb-1 block text-sm font-medium">
            Thickness (px):
            <input
              className="mt-1 block w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="number"
              value={thickness}
              onChange={(e) => {
                setThickness(Number(e.target.value));
                onChange({ thickness: Number(e.target.value) });
              }}
            />
          </label>
        </div>
      )}

      {component.type === "Spacer" && (
        <div className="mb-4">
          <label className="mb-1 block text-sm font-medium">
            Margin (px):
            <input
              className="mt-1 block w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="number"
              value={margin}
              onChange={(e) => {
                setMargin(Number(e.target.value));
                onChange({ margin: Number(e.target.value) });
              }}
            />
          </label>
        </div>
      )}

      {component.type === "Google Map" && (
        <div className="mb-4">
          <label className="mb-1 block text-sm font-medium">
            Latitude:
            <input
              className="mt-1 block w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="number"
              value={latitude}
              onChange={(e) => {
                setLatitude(Number(e.target.value));
                onChange({ latitude: Number(e.target.value) });
              }}
            />
          </label>
          <label className="mb-1 block text-sm font-medium">
            Longitude:
            <input
              className="mt-1 block w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="number"
              value={longitude}
              onChange={(e) => {
                setLongitude(Number(e.target.value));
                onChange({ longitude: Number(e.target.value) });
              }}
            />
          </label>
          <label className="mb-1 block text-sm font-medium">
            Zoom Level:
            <input
              className="mt-1 block w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="number"
              value={zoom}
              onChange={(e) => {
                setZoom(Number(e.target.value));
                onChange({ zoom: Number(e.target.value) });
              }}
            />
          </label>
          <label className="mb-1 block text-sm font-medium">
            Map Type:
            <select
              className="mt-1 block w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={mapType}
              onChange={(e) => {
                setMapType(e.target.value);
                onChange({ mapType: e.target.value });
              }}
            >
              <option value="roadmap">Roadmap</option>
              <option value="satellite">Satellite</option>
              <option value="hybrid">Hybrid</option>
              <option value="terrain">Terrain</option>
            </select>
          </label>
        </div>
      )}

      {component.type === "Form" && (
        <div className="mb-4">
          <label className="mb-1 block text-sm font-medium">
            Form Action:
            <input
              className="mt-1 block w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              value={action}
              onChange={(e) => {
                setAction(e.target.value);
                onChange({ action: e.target.value });
              }}
            />
          </label>
          <label className="mb-1 block text-sm font-medium">
            Method:
            <select
              className="mt-1 block w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={method}
              onChange={(e) => {
                setMethod(e.target.value);
                onChange({ method: e.target.value });
              }}
            >
              <option value="get">GET</option>
              <option value="post">POST</option>
            </select>
          </label>
          <label className="mb-1 block text-sm font-medium">
            Fields (comma-separated):
            <input
              className="mt-1 block w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              value={fields}
              onChange={(e) => {
                setFields(e.target.value);
                onChange({ fields: e.target.value.split(",") });
              }}
            />
          </label>
        </div>
      )}

      {component.type === "Heading" && (
        <div className="mb-4">
          <label className="mb-1 block text-sm font-medium">
            Heading Text:
            <input
              className="mt-1 block w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              value={text}
              onChange={(e) => {
                setText(e.target.value);
                onChange({ text: e.target.value });
              }}
            />
          </label>
          {/* Assuming heading level is handled elsewhere */}
        </div>
      )}
    </div>
  );
};

export default PropertyPanel;
