import { RiMenu4Fill } from "react-icons/ri";
const Header = () => {
  return (
    <div className="w-full bg-[#00AB7F] text-white flex justify-between items-center px-4 py-4 md:py-5  md:px-5 ">
      <div className="transform -translate-x-180 rotate-x-180 cursor-pointer">
        <RiMenu4Fill size={22} />
      </div>
      <p className="text-base tracking-wider">Welcome</p>
    </div>
  );
};

export default Header;
