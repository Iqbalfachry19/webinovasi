"use client";
import { useConfig } from "./context/ConfigContext";
import Editor from "./Editor";
import PropertyPanel from "./PropertyPanel";
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

interface ButtonProps {
  text?: string;
}

interface TextEditorProps {
  content?: string;
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

const EditorWrapper: React.FC = () => {
  const { editorEnabled, toggleEditor } = useConfig();
  const [components, setComponents] = useState<ComponentProps[]>([]);
  const [selectedComponent, setSelectedComponent] =
    useState<ComponentProps | null>(null);
  const [sidebarVisible, setSidebarVisible] = useState(true); // State for sidebar visibility

  const onDragEnd = (result: any) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (
      source.droppableId === "editor" &&
      destination.droppableId === "editor"
    ) {
      const reorderedComponents = [...components];
      const [removed] = reorderedComponents.splice(source.index, 1);
      reorderedComponents.splice(destination.index, 0, removed);
      setComponents(reorderedComponents);
    }

    if (
      source.droppableId === "sidebar" &&
      destination.droppableId === "editor"
    ) {
      const newComponent = {
        id: `${components.length + 1}`,
        type: draggableId,
        props: {},
      };
      const newComponents = [...components];
      newComponents.splice(destination.index, 0, newComponent);
      setComponents(newComponents);
    }
  };

  const handleComponentChange = (
    id: string,
    newProps: Partial<ComponentProps["props"]>,
  ) => {
    setComponents((prevComponents) =>
      prevComponents.map((comp) =>
        comp.id === id
          ? { ...comp, props: { ...comp.props, ...newProps } }
          : comp,
      ),
    );
  };

  const onComponentClick = (id: string) => {
    const clickedComponent = components.find((comp) => comp.id === id) || null;
    setSelectedComponent(clickedComponent);
  };
  const handleClosePropertyPanel = () => {
    setSelectedComponent(null);
  };

  const handleComponentClick = (type: string) => {
    const defaultProps: any = {
      Button: { text: "Button" },
      Heading: { text: "Heading", level: 1 },
      Image: {
        src: "https://webinovasi.com/wp-content/plugins/elementor/assets/images/placeholder.png",
        width: 100,
        height: 100,
        alt: "Image description",
      },
      Video: {
        src: "https://www.youtube.com/watch?v=XHOmBV4js_E",
        width: 640,
        height: 360,
        alt: "Video description",
      },
      Divider: { thickness: 2 },
      Spacer: { margin: 10 },
      "Google Map": { latitude: 0, longitude: 0, zoom: 8, mapType: "roadmap" },
      Icon: { icon: "home", size: 24, color: "#000000" },
      Form: { action: "", method: "POST", fields: [] },
    };

    const existingComponent = components.find((comp) => comp.type === type);

    if (!existingComponent) {
      const newComponent: ComponentProps = {
        id: `${components.length + 1}`,
        type: type,
        props: defaultProps[type] || {},
      };
      setComponents((prevComponents) => [...prevComponents, newComponent]);
      setSelectedComponent(newComponent);
    } else {
      setSelectedComponent(existingComponent);
    }
  };

  const onAddComponent = (newComponent: ComponentProps) => {
    setComponents((prevComponents) => [...prevComponents, newComponent]);
  };

  const handleSidebarToggle = () => {
    setSidebarVisible((prev) => !prev);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="relative flex select-none">
        <button
          onClick={handleSidebarToggle} // Toggle sidebar visibility
          className={`transition-all duration-300 ease-in-out ${
            sidebarVisible
              ? "absolute right-3/4 top-1/2 flex -translate-y-1/2 transform items-center rounded bg-gray-800 p-2 text-white"
              : "absolute left-0 top-1/2 -translate-y-1/2 transform bg-gray-800 p-2 text-white"
          }`}
        >
          {sidebarVisible ? (
            <ChevronLeftIcon className="h-5 w-5" />
          ) : (
            <ChevronRightIcon className="h-5 w-5" />
          )}
        </button>

        {editorEnabled && (
          <div className="flex w-full select-none">
            {sidebarVisible && (
              <Droppable droppableId="sidebar" direction="vertical">
                {(provided) => (
                  <div
                    className="w-1/4 select-none bg-gray-800 p-4 text-white"
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                  >
                    <h2 className="mb-4 text-lg font-semibold">Elements</h2>
                    {/* Sidebar content */}
                    <h3 className="text-md mt-4 font-semibold">Layout</h3>
                    <ul className="grid grid-cols-2 gap-2">
                      {["Container", "Grid"].map((type, index) => (
                        <Draggable draggableId={type} index={index} key={type}>
                          {(provided) => (
                            <li
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className="mb-2 cursor-grab select-none rounded bg-gray-600 p-2"
                              onClick={() => handleComponentClick(type)}
                            >
                              {type}
                            </li>
                          )}
                        </Draggable>
                      ))}
                    </ul>
                    <h3 className="text-md font-semibold">Basic</h3>
                    <ul className="grid grid-cols-2 gap-2">
                      {[
                        "Button",
                        "Text Editor",
                        "Heading",
                        "Image",
                        "Video",
                        "Divider",
                        "Spacer",
                        "Google Map",
                        "Icon",
                        "Form",
                      ].map((type, index) => (
                        <Draggable
                          draggableId={type}
                          index={index + 2}
                          key={type}
                        >
                          {(provided) => (
                            <li
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className="mb-2 cursor-grab select-none rounded bg-gray-600 p-2"
                              onClick={() => handleComponentClick(type)}
                            >
                              {type}
                            </li>
                          )}
                        </Draggable>
                      ))}
                    </ul>
                    <h3 className="text-md font-semibold">General</h3>
                    <ul className="grid grid-cols-2 gap-2">
                      {[
                        "Image Box",
                        "Icon Box",
                        "Image Carousel",
                        "Basic Gallery",
                        "Icon List",
                        "Counter",
                        "Progress Bar",
                        "Testimonial",
                        "Tabs",
                        "Accordion",
                        "Toggle",
                        "Social Icons",
                        "Alert",
                        "SoundCloud",
                        "Menu Anchor",
                        "Read More",
                        "Rating",
                        "Text Path",
                      ].map((type, index) => (
                        <Draggable
                          draggableId={type}
                          index={index + 2}
                          key={type}
                        >
                          {(provided) => (
                            <li
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className="mb-2 cursor-grab select-none rounded bg-gray-600 p-2"
                              onClick={() => handleComponentClick(type)}
                            >
                              {type}
                            </li>
                          )}
                        </Draggable>
                      ))}
                    </ul>
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            )}
            <div className="ml-1/4 flex flex-1 flex-col p-4">
              <Editor
                components={components}
                onComponentClick={onComponentClick}
                onAddComponent={onAddComponent}
                onDragEnd={onDragEnd}
              />
            </div>

            {selectedComponent && (
              <PropertyPanel
                component={selectedComponent}
                onChange={(newProps) =>
                  handleComponentChange(selectedComponent.id, newProps)
                }
                onClose={handleClosePropertyPanel} // Pass the close handler here
              />
            )}
          </div>
        )}
      </div>
    </DragDropContext>
  );
};

export default EditorWrapper;
