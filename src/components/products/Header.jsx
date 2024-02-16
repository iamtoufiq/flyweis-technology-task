import React from "react";
import { IoMdDownload } from "react-icons/io";
import CustomButton from "../Button";
const Header = ({ totalUser }) => {
  return (
    <div className="flex flex-wrap justify-between  ">
      <div id="_left" className="text-[20px] font-bold">
        All Products (Total: {totalUser})
      </div>
      <div id="_right" className="flex gap-3 items-center">
        <CustomButton label="DownLoad Invoice" Icon={IoMdDownload} />
        <CustomButton label="Create New" />
      </div>
    </div>
  );
};

export default Header;
