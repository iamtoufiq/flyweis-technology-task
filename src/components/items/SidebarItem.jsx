import React from "react";
import { MdDashboard } from "react-icons/md";

const SidebarItem = ({ data, isSelected, onItemClick }) => {
  const IconComponent = data?.icon || MdDashboard;
  const isPermissions = data?.title === "Permissions";

  const handleClick = () => {
    onItemClick(data?.title);
  };

  const iconProps = {
    size: 18,
    className: isPermissions ? "skew-180" : "",
    style: isPermissions ? { transform: "scaleX(-1)" } : {},
  };

  return (
    <div
      onClick={handleClick}
      className={`flex items-center gap-2 py-1 cursor-pointer w-full hover:bg-[#047DCE] transition duration-200 px-3 ${
        isSelected && "bg-[#047DCE]"
      }  ${data.title === "Logout" ? "pt-4 pb-3" : ""}`}
    >
      {Array.from({ length: 2 }).map((_, index) => (
        <IconComponent
          key={index}
          {...iconProps}
          className={index === 1 ? "hidden md:block" : "block md:hidden"}
        />
      ))}

      <p className="font-normal hidden text-lg md:block">{data?.title}</p>
    </div>
  );
};

export default SidebarItem;
