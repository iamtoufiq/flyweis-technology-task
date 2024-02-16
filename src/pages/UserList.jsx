import { useEffect, useState } from "react";
import { useGlobalHook } from "../context/ContextProvider";
import Header from "../components/userList/Header";
import SearchBar from "../components/userList/SearchBar";
import Table from "../components/userList/Table";
import Loader from "../components/Loader";

const UserList = () => {
  const { users, loading } = useGlobalHook();
  const [searchTerm, setSearchTerm] = useState("");
  const [dataToPass, setDataToPass] = useState([]);
  useEffect(() => {
    const filteredData = users?.filter((user) => {
      if (searchTerm === "" || searchTerm.trim() === "") {
        return true;
      }
      return user?.name?.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setDataToPass(filteredData);
  }, [searchTerm, users]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  if (loading) {
    return <Loader />;
  }
  console.log("users", users[6]?.name);
  return (
    <div className="mx-1 md:mx-3 bg-white shadow-md pt-4 py-6 px-4 flex flex-col gap-3">
      <Header
        totalUser={
          dataToPass?.length < 10
            ? `0${dataToPass?.length}`
            : dataToPass?.length
        }
      />
      <SearchBar
        handleChange={handleChange}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <Table allUsers={dataToPass} loading={loading} />
    </div>
  );
};

export default UserList;
