import React from "react";
import { StarIcon, HomeIcon, UserIcon } from "@heroicons/react/24/outline";

interface IconProps {
  icon?: "star" | "home" | "user"; // Make icon prop optional
  size?: number; // Optional: size of the icon in pixels
  color?: string; // Optional: color of the icon
}

const Icon: React.FC<IconProps> = ({
  icon = "star",
  size = 24,
  color = "black",
}) => {
  // Define icon mapping
  const iconMap = {
    star: <StarIcon className={`w-${size} h-${size} text-${color}`} />,
    home: <HomeIcon className={`w-${size} h-${size} text-${color}`} />,
    user: <UserIcon className={`w-${size} h-${size} text-${color}`} />,
  };

  return (
    <div className={`flex h-${size} w-${size} items-center justify-center`}>
      {iconMap[icon] || <div>Icon not found</div>}
    </div>
  );
};

export default Icon;
