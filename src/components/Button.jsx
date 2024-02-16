const CustomButton = ({
  onClick,
  label,
  bgColor = "bg-[#047DCE]",
  paddingY = "py-2",
  paddingX = "px-3",
  cursorStyle = "cursor-pointer",
  Icon,
}) => {
  return (
    <button
      onClick={onClick ? onClick : undefined}
      className={`flex gap-1 items-center   text-white ${bgColor}  ${paddingY} ${paddingX} ${cursorStyle} `}
    >
      {label} {!!Icon && <Icon size={19} className="text-white" />}
    </button>
  );
};

export default CustomButton;
