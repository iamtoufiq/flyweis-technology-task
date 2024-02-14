import React from "react";
import { RiMenu4Fill } from "react-icons/ri";
const Header = () => {
  return (
    <div className="w-full bg-[#00AB7F] text-white flex justify-between items-center px-3 py-3 md:py-4  md:px-4 ">
      <div className="transform -translate-x-180 rotate-x-180 cursor-pointer">
        <RiMenu4Fill size={22} />
      </div>
      <p className="text-base tracking-wider">Welcome</p>
    </div>
  );
};

export default Header;
