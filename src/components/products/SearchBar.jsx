import { IoOptionsSharp } from "react-icons/io5";

const SearchBar = ({ handleChange, searchTerm }) => {
  return (
    <div className="flex gap-3 items-center">
      <div className="cursor-pointer">
        <IoOptionsSharp size={24} className="text-gray-500" />
      </div>

      <input
        type="text"
        placeholder={"Start typing to search for user"}
        className={`w-full outline-none border border-gray-300 rounded-sm py-[6px] px-4 `}
        // value={searchTerm}
        // onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
