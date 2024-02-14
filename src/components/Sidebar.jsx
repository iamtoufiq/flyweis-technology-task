import React, { useState } from "react";
import SidebarItem from "./items/SidebarItem";
import { sidebarData } from "../data/sidebarData";

const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <aside className="flex flex-col flex-shrink-0 bg-[#00AB7F] h-screen overflow-y-scroll example text-[#FFFFFF] max-w-full md:max-w-[20%] xl:max-w-fit pt-4 ">
      <h2 className="hidden md:block uppercase  py-6 text-xl  px-3 font-[500] lg:px-4">
        Admin panel
      </h2>
      <h2
        className="block md:hidden uppercase py-2 text-[38px] font-[500] px-3 pb-3 border-white"
        style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" }}
      >
        A
      </h2>

      <div className="flex flex-col items-start w-[100%] gap-3 md:gap-1">
        {sidebarData.length > 0 &&
          sidebarData.map((data) => {
            return (
              <SidebarItem
                key={data.title}
                data={data}
                isSelected={selectedItem === data.title}
                onItemClick={() => setSelectedItem(data.title)}
              />
            );
          })}
      </div>
    </aside>
  );
};

export default Sidebar;
