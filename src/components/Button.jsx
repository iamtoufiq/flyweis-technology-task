import React from "react";

const CustomButton = ({
  onClick,
  label,
  bgColor = "#047DCE",
  paddingY = "py-2",
  paddingX = "px-3",
  cursorStyle = "cursor-pointer",
}) => {
  return (
    <button
      onClick={onClick ? onClick : undefined}
      className={`bg-[${bgColor}]  ${paddingY} ${paddingX} ${cursorStyle}`}
    >
      {label}
    </button>
  );
};

export default CustomButton;
