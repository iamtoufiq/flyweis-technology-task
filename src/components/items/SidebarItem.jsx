import React from "react";
import { NavLink } from "react-router-dom";
import { MdDashboard } from "react-icons/md";

const SidebarItem = ({ data, onItemClick, path }) => {
  const IconComponent = data?.icon || MdDashboard;

  if (!path) {
    return (
      <div className="flex items-center gap-2 py-1 cursor-not-allowed w-full hover:bg-[#047DCE] transition duration-200 px-3">
        <IconComponent size={25} className="block md:hidden" />
        <IconComponent size={20} className="hidden md:block" />
        <p className="font-normal hidden text-lg md:block">{data?.title}</p>
      </div>
    );
  }

  return (
    <NavLink
      to={path}
      onClick={() => onItemClick(data?.title)}
      className={({ isActive }) =>
        `flex items-center gap-2 py-1 cursor-pointer w-full hover:bg-[#047DCE] transition duration-200 px-3 ${
          isActive ? "bg-[#047DCE]" : ""
        } ${data.title === "Logout" ? "pt-4 pb-3" : ""}`
      }
    >
      {data?.title === "Permissions" ? (
        <IconComponent
          size={25}
          className="block md:hidden"
          style={{ transform: "scaleX(-1)" }}
        />
      ) : (
        <IconComponent size={25} className="block md:hidden skew-180" />
      )}
      {data?.title === "Permissions" ? (
        <IconComponent
          size={20}
          className="hidden md:block"
          style={{ transform: "scaleX(-1)" }}
        />
      ) : (
        <IconComponent size={20} className="hidden md:block" />
      )}
      <p className="font-normal hidden text-lg md:block">{data?.title}</p>
    </NavLink>
  );
};

export default SidebarItem;
