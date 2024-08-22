import React from "react";
import { StarIcon, HomeIcon, UserIcon } from "@heroicons/react/24/outline";

interface IconBoxProps {
  Icon: React.ElementType; // Updated to work with Heroicons
  title?: string;
  description?: string;
  iconSize?: number; // This will be handled with width and height styles
}

const IconBox: React.FC<IconBoxProps> = ({
  Icon,
  title = "This is the heading​",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.​",
  iconSize = 50,
}) => {
  return (
    <div className="flex w-60 flex-col text-center">
      <StarIcon
        style={{ width: iconSize, height: iconSize }}
        className="mx-auto mb-2 text-black"
      />
      <h3 className="font-bold text-black">{title}</h3>
      <p className="text-black">{description}</p>
    </div>
  );
};

export default IconBox;
