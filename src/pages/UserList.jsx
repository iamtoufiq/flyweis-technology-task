import React from "react";
import Header from "../components/userList/Header";
import SearchBar from "../components/userList/SearchBar";
import Table from "../components/userList/Table";
import { useGlobalHook } from "../context/ContextProvider";
import Loader from "../components/Loader";

const UserList = () => {
  const { users, loading } = useGlobalHook();
  if (loading) {
    return <Loader />;
  }
  return (
    <div className=" mx:1 md:mx-3 bg-white shadow-md pt-4 py-6 px-4 flex flex-col gap-3">
      <Header totalUser={users?.length} />
      <SearchBar />
      <Table allUsers={users} loading={loading} />
    </div>
  );
};

export default UserList;
