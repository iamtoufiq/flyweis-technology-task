import React from "react";
import CustomButton from "../Button";

const Header = ({ title, buttonText }) => {
  return (
    <div className="flex flex-wrap justify-between ">
      <h3 className="text-[20px] font-bold">{title} (Total : 06)</h3>
      <CustomButton label={buttonText} />
    </div>
  );
};

export default Header;
