import React from "react";
import { IoOptionsSharp } from "react-icons/io5";
import SearchInput from "../SearchInput";
const SearchBar = () => {
  return (
    <div className="flex gap-3 items-center">
      <div className="cursor-pointer">
        <IoOptionsSharp size={24} className="text-gray-500" />
      </div>
      <SearchInput placeholder="Start typing to search for user" />
    </div>
  );
};

export default SearchBar;
