"use client";

import { useState } from "react";
import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Button from "./Button";
import Heading from "./Heading";
import TextEditor from "./TextEditor";
import Image from "./Image";
import Video from "./Video";
import Divider from "./Divider";
import Spacer from "./Spacer";
import GoogleMap from "./GoogleMap";
import Icon from "./Icon";
import Form from "./Form";
import Grid from "./Grid";
import Container from "./Container";
import ImageBox from "./ImageBox";

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

interface EditorProps {
  components:
    | Array<{
        id: string;
        type: string;
        props: ComponentProps;
      }>
    | any;
  onDragEnd: (result: any) => void;
  onComponentClick: (id: string) => void;
  onAddComponent: (newComponent: any) => void;
}

const Editor: React.FC<EditorProps> = ({
  components,
  onDragEnd,
  onComponentClick,
  onAddComponent,
}) => {
  const [layoutType, setLayoutType] = useState<"grid" | "flexbox">("grid");
  const [selectedComponent, setSelectedComponent] = useState<string | null>(
    null,
  );
  const [buttonNotClicked, setButtonNotClicked] = useState<boolean>(true);

  const generateLayoutClasses = (
    layout: "grid" | "flexbox",
    columns?: number,
    rows?: number,
    gap?: string,
  ) => {
    if (layout === "grid") {
      return `grid grid-cols-${columns || 3} grid-rows-${rows || 2} gap-${gap || "2"}`;
    } else if (layout === "flexbox") {
      return `flex ${gap ? `gap-${gap}` : ""} ${
        columns ? `flex-col` : "flex-row"
      }`;
    }
    return "";
  };

  const handleLayoutSelection = (selectedLayout: "grid" | "flexbox") => {
    setLayoutType(selectedLayout);
    setButtonNotClicked(false);
    handleAddComponent(selectedLayout);
  };

  const handleComponentClick = (id: string) => {
    setSelectedComponent(id);
    onComponentClick(id);
  };

  const handleAddComponent = (layout: "grid" | "flexbox") => {
    const maxId = components.reduce(
      (max: any, component: any) => Math.max(max, parseInt(component.id, 10)),
      -1,
    );

    const newComponent = {
      id: `${maxId + 1}`,
      type: layout === "grid" ? "Grid" : "Container",
      props: {
        columns: layout === "grid" ? 3 : undefined,
        rows: layout === "grid" ? 2 : undefined,
        gap: "2",
        layoutType: layout,
      },
    };

    onAddComponent(newComponent);
  };

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (active.id !== over?.id) {
      const oldIndex = components.findIndex(
        (component: any) => component.id === active.id,
      );
      const newIndex = components.findIndex(
        (component: any) => component.id === over?.id,
      );

      const reorderedComponents = arrayMove(components, oldIndex, newIndex);
      onDragEnd(reorderedComponents);
    }
  };

  return (
    <>
      <DndContext onDragEnd={handleDragEnd}>
        <SortableContext
          items={components.map((item: any) => item.id)}
          strategy={verticalListSortingStrategy}
        >
          <DroppableArea
            components={components}
            onComponentClick={handleComponentClick}
            layoutType={layoutType}
            generateLayoutClasses={generateLayoutClasses}
            setButtonNotClicked={setButtonNotClicked}
            buttonNotClicked={buttonNotClicked}
            handleLayoutSelection={handleLayoutSelection}
          />
        </SortableContext>
      </DndContext>
    </>
  );
};

export default Editor;

interface DroppableAreaProps {
  components: any[];
  onComponentClick: (id: string) => void;
  layoutType: "grid" | "flexbox";
  generateLayoutClasses: (
    layout: "grid" | "flexbox",
    columns?: number,
    rows?: number,
    gap?: string,
  ) => string;
  setButtonNotClicked: (value: boolean) => void;
  buttonNotClicked: boolean;
  handleLayoutSelection: (selectedLayout: "grid" | "flexbox") => void;
}

const DroppableArea: React.FC<DroppableAreaProps> = ({
  components,
  onComponentClick,
  layoutType,
  generateLayoutClasses,
  setButtonNotClicked,
  buttonNotClicked,
  handleLayoutSelection,
}) => {
  const { setNodeRef } = useDroppable({
    id: "droppable",
  });

  return (
    <div ref={setNodeRef} className="min-h-screen p-4">
      {components.length === 0 ? (
        buttonNotClicked ? (
          <div className="flex min-h-screen flex-col items-center justify-center text-gray-500">
            <p className="mb-4 text-lg">Drag widgets here</p>
            <button
              onClick={() => setButtonNotClicked(false)}
              className="rounded-full bg-blue-500 px-4 py-2 text-white"
            >
              +
            </button>
          </div>
        ) : (
          <div className="flex min-h-screen flex-col items-center justify-center text-gray-500">
            <p className="mb-4 text-lg">Drag widgets here</p>
            <div className="flex">
              <button
                onClick={() => handleLayoutSelection("grid")}
                className={`mr-2 rounded ${
                  layoutType === "grid"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300"
                } px-4 py-2`}
              >
                Grid
              </button>
              <button
                onClick={() => handleLayoutSelection("flexbox")}
                className={`rounded ${
                  layoutType === "flexbox"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300"
                } px-4 py-2`}
              >
                Flexbox
              </button>
            </div>
          </div>
        )
      ) : (
        components.map((item: any, index: any) => (
          <SortableItem
            key={item.id}
            item={item}
            index={index}
            onComponentClick={onComponentClick}
            layoutType={layoutType}
            generateLayoutClasses={generateLayoutClasses}
          />
        ))
      )}
    </div>
  );
};

interface SortableItemProps {
  item: any;
  index: number;
  onComponentClick: (id: string) => void;
  layoutType: "grid" | "flexbox";
  generateLayoutClasses: (
    layout: "grid" | "flexbox",
    columns?: number,
    rows?: number,
    gap?: string,
  ) => string;
}

const SortableItem: React.FC<SortableItemProps> = ({
  item,
  onComponentClick,
  layoutType,
  generateLayoutClasses,
}) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: item.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      onMouseDown={() => onComponentClick(item.id)}
      className={`mb-2 p-2 ${
        item.type === "Grid" || item.type === "Container"
          ? `${generateLayoutClasses(
              layoutType || "grid",
              item.props.columns,
              item.props.rows,
              item.props.gap,
            )} border border-dashed border-gray-500`
          : ""
      }`}
    >
      {item.type === "Button" && <Button {...item.props} />}
      {item.type === "Text Editor" && <TextEditor {...item.props} />}
      {item.type === "Heading" && <Heading {...item.props} />}
      {item.type === "Image" && <Image {...item.props} />}
      {item.type === "Video" && <Video {...item.props} />}
      {item.type === "Divider" && <Divider {...item.props} />}
      {item.type === "Spacer" && <Spacer {...item.props} />}
      {item.type === "Google Map" && <GoogleMap {...item.props} />}
      {item.type === "Icon" && <Icon {...item.props} />}
      {item.type === "Form" && <Form {...item.props} />}
      {item.type === "Grid" && (
        <Grid
          {...item.props}
          key={item.id}
          generateLayoutClasses={generateLayoutClasses}
        />
      )}
      {item.type === "Container" && (
        <Container
          {...item.props}
          key={item.id}
          generateLayoutClasses={generateLayoutClasses}
        />
      )}
      {item.type === "ImageBox" && <ImageBox {...item.props} />}
    </div>
  );
};
