import React from "react";

const SearchInput = ({ placeholder, className }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={`w-full outline-none border border-gray-300 rounded-sm py-[6px] px-4 ${className}`}
    />
  );
};

export default SearchInput;
