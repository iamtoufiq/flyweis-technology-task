import React from "react";
import Header from "../components/mainCategory/Header";
import Table from "../components/mainCategory/Table";
import { useGlobalHook } from "../context/ContextProvider";
import Loader from "../components/Loader";

const MainCategory = () => {
  const {
    categories,

    loading,
  } = useGlobalHook();
  if (loading) {
    return <Loader />;
  }
  return (
    <div className=" mx:1 md:mx-3 bg-white shadow-md pt-4 py-6 px-4 flex flex-col gap-3 h-screen">
      {/* <Header /> */}
      <Header title="All Category's" buttonText="Add Category" />
      <Table categories={categories} />
    </div>
  );
};

export default MainCategory;
