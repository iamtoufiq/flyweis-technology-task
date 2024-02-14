import React from "react";
import { MdDashboard } from "react-icons/md";
const SidebarItem = ({ data, isSelected, onItemClick }) => {
  const IconComponent = data?.icon || MdDashboard;
  return (
    <div
      onClick={() => onItemClick(data.title)}
      className={`flex items-center gap-2 py-1 cursor-pointer w-full hover:bg-[#047DCE] transition duration-200 px-3 ${
        isSelected && "bg-[#047DCE]"
      }  ${data.title === "Logout" && "pt-4 pb-3"}`}
    >
      <IconComponent size={18} className="block md:hidden" />
      <IconComponent size={20} className="hidden md:block" />
      <p className="font-normal hidden text-lg md:block">{data.title}</p>
    </div>
  );
};

export default SidebarItem;
