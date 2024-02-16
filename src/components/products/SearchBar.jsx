import React from "react";
import { IoOptionsSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
const SearchBar = ({ handleChange, searchTerm, setSearchTerm }) => {
  return (
    <div className="flex gap-3 items-center ">
      <div className="cursor-pointer">
        <IoOptionsSharp size={24} className="text-gray-500" />
      </div>
      <div className="relative flex items-center border w-full h-fit">
        <input
          type="text"
          placeholder="Start typing to search for user"
          className="w-full outline-none border border-gray-300 rounded-sm py-[6px] px-4"
          value={searchTerm}
          onChange={handleChange}
        />
        {!!searchTerm && (
          <span
            className="absolute right-0 pr-3 cursor-pointer"
            onClick={() => setSearchTerm("")}
          >
            <RxCross2 size={24} />
          </span>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
