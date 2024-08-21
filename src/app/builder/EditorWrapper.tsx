"use client";
import { useConfig } from "./context/ConfigContext";
import Editor from "./Editor";
import PropertyPanel from "./PropertyPanel";
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import {
  DndContext,
  closestCenter,
  MouseSensor,
  useSensor,
  useSensors,
  useDroppable,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

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
  console.log(components);
  const [selectedComponent, setSelectedComponent] =
    useState<ComponentProps | null>(null);
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const sensors = useSensors(useSensor(MouseSensor));

  const onDragEnd = (event: any) => {
    const { active, over } = event;

    if (!over) return;

    const oldIndex = components.findIndex((comp) => comp.id === active.id);
    const newIndex = components.findIndex((comp) => comp.id === over.id);

    if (oldIndex !== newIndex) {
      setComponents((prevComponents) =>
        arrayMove(prevComponents, oldIndex, newIndex),
      );
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
    console.log(type);
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
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={onDragEnd} // Pass onDragEnd to DndContext
    >
      <div className="relative flex select-none">
        <button
          onClick={handleSidebarToggle}
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
              <SortableContext
                items={components.map((comp) => comp.id)}
                strategy={verticalListSortingStrategy}
              >
                <div className="w-1/4 select-none bg-gray-800 p-4 text-white">
                  <h2 className="mb-4 text-lg font-semibold">Elements</h2>
                  {/* Sidebar content */}
                  <h3 className="text-md mt-4 font-semibold">Layout</h3>
                  <ul className="grid grid-cols-2 gap-2">
                    {["Container", "Grid"].map((type, index) => (
                      <SidebarItem
                        key={type}
                        id={type}
                        index={index}
                        onComponentClick={handleComponentClick}
                      />
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
                      <SidebarItem
                        key={type}
                        id={type}
                        index={index + 2}
                        onComponentClick={handleComponentClick}
                      />
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
                      <SidebarItem
                        key={type}
                        id={type}
                        index={index + 2}
                        onComponentClick={handleComponentClick}
                      />
                    ))}
                  </ul>
                </div>
              </SortableContext>
            )}
            <div className="ml-1/4 flex flex-1 flex-col p-4">
              <Editor
                components={components}
                onComponentClick={onComponentClick}
                onAddComponent={onAddComponent}
                onDragEnd={onDragEnd} // Pass the onDragEnd prop to Editor
              />
            </div>

            {selectedComponent && (
              <PropertyPanel
                component={selectedComponent}
                onChange={(newProps) =>
                  handleComponentChange(selectedComponent.id, newProps)
                }
                onClose={handleClosePropertyPanel}
              />
            )}
          </div>
        )}
      </div>
    </DndContext>
  );
};

export default EditorWrapper;

function SidebarItem({ id, onComponentClick }: any) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  const handleClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    id: string,
  ) => {
    e.preventDefault(); // Prevent default action
    e.stopPropagation(); // Stop propagation to avoid interference with drag
    onComponentClick(id);
  };
  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="cursor-pointer select-none rounded bg-gray-700 p-2 text-white"
      onMouseDown={(e) => handleClick(e, id)}
    >
      {id}
    </div>
  );
}
