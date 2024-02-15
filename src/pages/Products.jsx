import React from "react";
import Header from "../components/products/Header";
import Hero from "../components/products/Hero";
import Table from "../components/products/Table";
import { useGlobalHook } from "../context/ContextProvider";
import Loader from "../components/Loader";
import SearchBar from "../components/products/SearchBar";

const Products = () => {
  const { loading, products } = useGlobalHook();
  if (loading) {
    return <Loader />;
  }
  return (
    <div className=" mx:1 md:mx-3 bg-white shadow-md pt-4 py-6 px-4 flex flex-col gap-5 ">
      <Header totalUser={products?.length} />
      <SearchBar />
      <Hero />
      <Table />
    </div>
  );
};

export default Products;
