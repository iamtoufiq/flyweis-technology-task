import React, { useEffect, useState } from "react";
import { useGlobalHook } from "../context/ContextProvider";
import Header from "../components/products/Header";
import Hero from "../components/products/Hero";
import Table from "../components/products/Table";
import Loader from "../components/Loader";
import SearchBar from "../components/products/SearchBar";

const Products = () => {
  const { loading, products } = useGlobalHook();
  const [searchTerm, setSearchTerm] = useState("");
  const [dataToPass, setDataToPass] = useState([]);
  useEffect(() => {
    const filteredData = products?.filter((user) => {
      if (searchTerm === "" || searchTerm.trim() === "") {
        return true;
      }
      return user?.name?.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setDataToPass(filteredData);
  }, [searchTerm, products]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  if (loading) {
    return <Loader />;
  }
  return (
    <div className=" mx:1 md:mx-3 bg-white shadow-md pt-4 py-6 px-4 flex flex-col gap-5 ">
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
      <Hero />
      <Table products={dataToPass} />
    </div>
  );
};

export default Products;
