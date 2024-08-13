"use client";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Button from "./Button";
import Text from "./Text";
import Image from "./Image"; // Ensure to create this component
import Video from "./Video"; // Ensure to create this component
import Divider from "./Divider"; // Ensure to create this component
import Spacer from "./Spacer"; // Ensure to create this component
import GoogleMap from "./GoogleMap"; // Ensure to create this component
import Icon from "./Icon"; // Ensure to create this component
import Forms from "./Forms"; // Ensure to create this component

interface ComponentProps {
  content?: string;
  text?: string;
  src?: string; // For Image and Video
  location?: string; // For Google Map
  icon?: string; // For Icon
  columns?: number;
  rows?: number;
  gap?: string;
}

interface EditorProps {
  components: Array<{
    id: string;
    type: string;
    props: ComponentProps;
  }>;
  onDragEnd: (result: any) => void;
  onComponentClick: (id: string) => void;
}

const Editor = ({ components, onDragEnd, onComponentClick }: EditorProps) => (
  <DragDropContext onDragEnd={onDragEnd}>
    <Droppable droppableId="droppable" direction="vertical">
      {(provided) => (
        <div ref={provided.innerRef} {...provided.droppableProps}>
          {components.map((item, index) => (
            <Draggable key={item.id} draggableId={item.id} index={index}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  onClick={() => onComponentClick(item.id)} // Add click handler
                  className={`mb-2 p-2 ${
                    item.type === "Grid"
                      ? `grid grid-cols-${item.props.columns || 3} grid-rows-${item.props.rows || 2} gap-${item.props.gap || 2} border border-dashed border-gray-500`
                      : ""
                  }`}
                >
                  {item.type === "Button" && <Button {...item.props} />}
                  {item.type === "Text Editor" && <Text {...item.props} />}
                  {item.type === "Image" && <Image {...item.props} />}
                  {item.type === "Video" && <Video {...item.props} />}
                  {item.type === "Divider" && <Divider {...item.props} />}
                  {item.type === "Spacer" && <Spacer {...item.props} />}
                  {item.type === "Google Map" && <GoogleMap {...item.props} />}
                  {item.type === "Icon" && <Icon {...item.props} />}
                  {item.type === "Forms" && <Forms {...item.props} />}
                  {item.type === "Container" && (
                    <div className="border border-gray-500 p-4">
                      {/* Content inside container */}
                    </div>
                  )}
                  {item.type === "Grid" && (
                    <div
                      className={`grid grid-cols-${item.props.columns || 3} grid-rows-${item.props.rows || 2} gap-${item.props.gap || 2} border border-dashed border-gray-500`}
                    >
                      {/* Content inside grid */}
                    </div>
                  )}
                </div>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  </DragDropContext>
);

export default Editor;
