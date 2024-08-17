import React from "react";
import { StarIcon, HomeIcon, UserIcon } from "@heroicons/react/24/outline";
import useStore from "./store/store";

interface IconProps {
  size?: number;
  color?: string;
}

const Icon: React.FC<IconProps> = ({ size, color }) => {
  const { iconType, iconSize, iconColor } = useStore((state) => ({
    iconType: state.iconType,
    iconSize: state.iconSize,
    iconColor: state.iconColor,
  }));

  // Define icon mapping with inline style for color
  const iconMap = {
    star: (
      <StarIcon
        style={{ color: iconColor, width: iconSize, height: iconSize }} // Use inline style for color
      />
    ),
    home: (
      <HomeIcon
        style={{ color: iconColor, width: iconSize, height: iconSize }} // Use inline style for colorx
      />
    ),
    user: (
      <UserIcon
        style={{ color: iconColor, width: iconSize, height: iconSize }} // Use inline style for color
      />
    ),
  };

  return (
    <div className="flex items-center justify-center">
      {iconMap[iconType] || <div>Icon not found</div>}
    </div>
  );
};

export default Icon;
