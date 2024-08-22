import React from "react";
import { HomeIcon, UserIcon, CogIcon } from "@heroicons/react/24/outline";

interface IconItem {
  icon: React.ElementType;
  label: string;
}

interface IconListProps {
  items: IconItem[];
}

const IconList: React.FC<IconListProps> = ({
  items = [
    { icon: HomeIcon, label: "Home" },
    { icon: UserIcon, label: "User" },
    { icon: CogIcon, label: "Settings" },
  ],
}) => {
  return (
    <div className="flex flex-col space-y-4">
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          <item.icon className="h-6 w-6 text-black" />
          <span className="text-black">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default IconList;
