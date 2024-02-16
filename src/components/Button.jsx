const CustomButton = ({
  onClick,
  label,
  bgColor = "#047DCE",
  paddingY = "py-2",
  paddingX = "px-3",
  cursorStyle = "cursor-pointer",
  className,
  Icon,
}) => {
  return (
    <button
      onClick={onClick ? onClick : undefined}
      className={`flex gap-1 items-center text-white bg-[${bgColor}]  ${paddingY} ${paddingX} ${cursorStyle}${className}`}
    >
      {label} {!!Icon && <Icon size={19} className="text-white" />}
    </button>
  );
};

export default CustomButton;
