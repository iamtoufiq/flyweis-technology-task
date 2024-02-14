import React from "react";
import { MdShoppingCart } from "react-icons/md";
const Box = ({ title, icon: Icon, number, bgColor }) => {
  console.log("bg", bgColor);
  return (
    <div
      className={`flex w-full border justify-between bg-[#3C335D] text-white   px-6 md:px-8 items-center rounded-xl py-5  md:py-7`}
      style={{ backgroundColor: bgColor }}
    >
      <div className="left">
        <h4 className="tracking-wide">{title}</h4>
        <h3 className="text-[22px] font-[700]">61</h3>
      </div>

      <div
        className="border w-10 h-10 rounded-full flex justify-center items-center bg-white"
        style={{ color: bgColor }}
      >
        <Icon size={22} />
      </div>
    </div>
  );
};

export default Box;