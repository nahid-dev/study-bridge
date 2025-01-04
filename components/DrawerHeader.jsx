import { X } from "lucide-react";
import React from "react";

const DrawerHeader = ({ setIsOpen, title }) => {
  return (
    <header className="flex items-center justify-between">
      <h4 className="text-lg font-medium">{title}</h4>
      <span className="p-1 hover:cursor-pointer hover:rotate-90 transition-all duration-300 hover:bg-gray-100 rounded-full">
        <X onClick={() => setIsOpen(false)} className="size-6" />
      </span>
    </header>
  );
};

export default DrawerHeader;
