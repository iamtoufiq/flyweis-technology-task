import React, { useState } from "react";
import Header from "../components/userList/Header";
import SearchBar from "../components/userList/SearchBar";
import Table from "../components/userList/Table";
import { useGlobalHook } from "../context/ContextProvider";
import Loader from "../components/Loader";

const UserList = () => {
  const { search, searchResults, users, loading } = useGlobalHook();
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    search(term);
  };
  console.log("searchResults", searchResults);

  if (loading) {
    return <Loader />;
  }
  return (
    <div className=" mx:1 md:mx-3 bg-white shadow-md pt-4 py-6 px-4 flex flex-col gap-3">
      <Header totalUser={users?.length} />
      <SearchBar />
      <Table
        allUsers={searchTerm?.length === 0 ? users : searchResults}
        loading={loading}
        searchTerm={searchTerm}
        handleChange={handleChange}
      />
    </div>
  );
};

export default UserList;
