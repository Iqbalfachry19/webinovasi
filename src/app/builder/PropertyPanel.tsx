import React, { ChangeEvent, useState, useEffect } from "react";
import useStore from "./store/store";

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
  const {
    imageSrc,
    imageAlt,
    imageHeight,
    imageWidth,
    buttonText,
    content,
    textAlign,
    headingText,
    iconColor,
    iconSize,
    iconType,
    setImageAlt,
    setImageHeight,
    setImageSrc,
    setImageWidth,
    setButtonText,
    setContent,
    setTextAlign,
    setHeadingText,
    setIconColor,
    setIconSize,
    setIconType,
  } = useStore();

  const handleTextAlignChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setTextAlign(event.target.value as "left" | "center" | "right");
  };
  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setButtonText(event.target.value);
  };
  const handleContentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setContent(event.target.value);
  };
  const handleHeadingTextChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setHeadingText(event.target.value);
  };
  const handleImageSrcChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImageSrc(event.target.value);
  };
  const handleImageAltChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImageAlt(event.target.value);
  };
  const handleImageWidthtChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setImageWidth(Number(event.target.value));
  };
  const handleImageHeightChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setImageHeight(Number(event.target.value));
  };
  const handleIconTypeChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setIconType(event.target.value as "star" | "home" | "user");
  };
  const handleIconSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIconSize(Number(event.target.value));
  };
  const handleIconColorChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setIconColor(event.target.value);
  };

  const [color, setColor] = useState(component.props.color || "#000000");

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

      default:
        break;
    }
  }, [component]);

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
              value={buttonText}
              onChange={handleTextChange}
            />
          </label>
        </div>
      )}

      {component.type === "Text Editor" && (
        <div className="mb-4">
          <label className="mb-1 block text-sm font-medium">
            Content:
            <textarea
              className="mt-1 block w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={content}
              onChange={handleContentChange}
            />
          </label>
          <label className="mb-1 block text-sm font-medium">
            Text Align:
            <select
              className="mt-1 block w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={textAlign}
              onChange={handleTextAlignChange}
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
              value={iconType}
              onChange={handleIconTypeChange}
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
              value={iconSize}
              onChange={handleIconSizeChange}
            />
          </label>
          <label className="mb-1 block text-sm font-medium">
            Color:
            <input
              className="mt-1 block w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="color"
              value={iconColor}
              onChange={handleIconColorChange}
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
              value={imageSrc}
              onChange={handleImageSrcChange}
            />
          </label>
          <label className="mb-1 block text-sm font-medium">
            Alternative Text:
            <input
              className="mt-1 block w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              value={imageAlt}
              onChange={handleImageAltChange}
            />
          </label>
          <label className="mb-1 block text-sm font-medium">
            Width (px):
            <input
              className="mt-1 block w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="number"
              value={imageWidth}
              onChange={handleImageWidthtChange}
            />
          </label>
          <label className="mb-1 block text-sm font-medium">
            Height (px):
            <input
              className="mt-1 block w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="number"
              value={imageHeight}
              onChange={handleImageHeightChange}
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
              value={headingText}
              onChange={handleHeadingTextChange}
            />
          </label>
          {/* Assuming heading level is handled elsewhere */}
        </div>
      )}
    </div>
  );
};

export default PropertyPanel;
