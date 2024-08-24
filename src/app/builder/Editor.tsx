"use client";

import { useState } from "react";
import {
  closestCenter,
  DndContext,
  DragOverlay,
  MouseSensor,
  TouchSensor,
  useDraggable,
  useDroppable,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
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
import IconBox from "./IconBox";
import ImageCarousel from "./ImageCarousel";
import BasicGallery from "./BasicGallery";
import IconList from "./IconList";
import Counter from "./Counter";
import ProgressBar from "./ProgressBar";
import Testimonial from "./Testimonial";
import Tabs from "./Tabs";
import Accordion from "./Accordion";
import Toggle from "./Toggle";
import SocialIcons from "./SocialIcons";
import Alert from "./Alert";
import SoundCloud from "./SoundCloud";
import MenuAnchor from "./MenuAnchor";
import ReadMore from "./ReadMore";
import Rating from "./Rating";
import TextPath from "./TextPath";

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
  activeId: string | null;
  setActiveId: (id: any) => void;
  components:
    | Array<{
        id: string;
        type: string;
        props: ComponentProps;
      }>
    | any;
  setComponents: (components: any) => void;
  onDragEnd: (result: any) => void;
  onComponentClick: (id: string) => void;
  onAddComponent: (newComponent: any) => void;
}

const Editor: React.FC<EditorProps> = ({
  activeId,
  setActiveId,
  components,
  setComponents,
  onDragEnd,
  onComponentClick,
  onAddComponent,
}) => {
  const [layoutType, setLayoutType] = useState<"grid" | "flexbox">("grid");
  const [selectedComponent, setSelectedComponent] = useState<string | null>(
    null,
  );

  // const [activeId, setActiveId] = useState(null);

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

    if (!over) return;

    const oldIndex = components.findIndex((comp: any) => comp.id === active.id);
    const newIndex = components.findIndex((comp: any) => comp.id === over.id);

    if (oldIndex !== newIndex) {
      setComponents((prevComponents: any) =>
        arrayMove(prevComponents, oldIndex, newIndex),
      );
    }
    setActiveId(null);
  };
  function handleDragStart(event: any) {
    const { active } = event;

    setActiveId(active.id);
  }

  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: { distance: 5 },
    }),
    useSensor(TouchSensor),
  );
  const handleDragOver = (event: any) => {
    const { active, over } = event;

    if (!over) return;

    // Check if the over element is in the droppable area
    const droppableId = "droppable"; // This should match the ID in useDroppable
    const overId = over.id;
    console.log(overId);
    // You can compare overId with droppableId or any other logic you need
    if (overId === droppableId) {
      // Handle specific logic when dragging over the droppable area
      const getComponentIndex = (id: string) => {
        if (layouts.includes(id)) {
          return layouts.findIndex((item) => item === id);
        } else if (basics.includes(id)) {
          return basics.findIndex((item) => item === id);
        } else if (generals.includes(id)) {
          return generals.findIndex((item) => item === id);
        }
        return -1;
      };

      const getComponentCategory = (id: string) => {
        if (layouts.includes(id)) return "layouts";
        if (basics.includes(id)) return "basics";
        if (generals.includes(id)) return "generals";
        return null;
      };

      const oldIndex = getComponentIndex(active.id);
      const newIndex = getComponentIndex(over.id);

      if (oldIndex === -1 || newIndex === -1) return;

      const oldCategory = getComponentCategory(active.id);
      const newCategory = getComponentCategory(over.id);

      if (oldCategory && newCategory && oldCategory === newCategory) {
        if (oldCategory === "layouts") {
          setLayouts((prevLayouts) =>
            arrayMove(prevLayouts, oldIndex, newIndex),
          );
        } else if (oldCategory === "basics") {
          setBasics((prevBasics) => arrayMove(prevBasics, oldIndex, newIndex));
        } else if (oldCategory === "generals") {
          setGenerals((prevGenerals) =>
            arrayMove(prevGenerals, oldIndex, newIndex),
          );
        }
      }
      setActiveId(null);
    }
  };
  return (
    <>
      {/* <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDragOver={handleDragOver}
      > */}
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
      <DragOverlay>
        {activeId ? (
          <div className="h-12 rounded border border-gray-400 bg-gray-100 p-2"></div>
        ) : null}
      </DragOverlay>
      {/* </DndContext> */}
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
      onClick={() => onComponentClick(item.id)}
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
      {item.type === "Image Box" && <ImageBox {...item.props} />}
      {item.type === "Icon Box" && <IconBox {...item.props} />}
      {item.type === "Image Carousel" && <ImageCarousel {...item.props} />}
      {item.type === "Basic Gallery" && <BasicGallery {...item.props} />}
      {item.type === "Icon List" && <IconList {...item.props} />}
      {item.type === "Counter" && <Counter {...item.props} />}
      {item.type === "Progress Bar" && <ProgressBar {...item.props} />}
      {item.type === "Testimonial" && <Testimonial {...item.props} />}
      {item.type === "Tabs" && <Tabs {...item.props} />}
      {item.type === "Accordion" && <Accordion {...item.props} />}
      {item.type === "Toggle" && <Toggle {...item.props} />}
      {item.type === "Social Icons" && <SocialIcons {...item.props} />}
      {item.type === "Alert" && <Alert {...item.props} />}
      {item.type === "SoundCloud" && <SoundCloud {...item.props} />}
      {item.type === "Menu Anchor" && <MenuAnchor {...item.props} />}
      {item.type === "Read More" && <ReadMore {...item.props} />}
      {item.type === "Rating" && <Rating {...item.props} />}
      {item.type === "Text Path" && <TextPath {...item.props} />}
    </div>
  );
};
