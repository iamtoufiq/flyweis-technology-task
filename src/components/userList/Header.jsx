import CustomButton from "../Button";

const Header = ({ totalUser }) => {
  return (
    <div className="flex flex-wrap justify-between  ">
      <div id="_left" className="text-[20px] font-bold">
        All User's (Total: {totalUser})
      </div>
      <div id="_right" className="flex gap-3 items-center">
        <CustomButton label="Send Notification" />
        <CustomButton label="Create New" />
      </div>
    </div>
  );
};

export default Header;
