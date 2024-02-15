import React from "react";
import Box from "./Box";
import { MdCategory } from "react-icons/md";
import { MdShoppingCart } from "react-icons/md";
import { IoFolder } from "react-icons/io5";
import { BsHandbagFill } from "react-icons/bs";
import { FaUserLarge } from "react-icons/fa6";
import { useGlobalHook } from "../context/ContextProvider";
// import useMultipleApi from "../hook/useMultipleApi";
import Loader from "./Loader";
const DashboardBody = () => {
  const {
    products,
    categories,
    subCategories,
    users,
    unconfirmedOrders,
    loading,
  } = useGlobalHook();
  if (loading) {
    return <Loader />;
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mx:1 md:mx-3">
      <Box
        title="All product"
        icon={MdShoppingCart}
        number={products?.length}
        bgColor="#3C335D"
      />
      <Box
        title="All Category"
        icon={MdCategory}
        number={categories?.length}
        bgColor="#023B5B"
      />
      <Box
        title="All Sub-Category"
        icon={IoFolder}
        number={subCategories?.length}
        bgColor="#72909E"
      />
      <Box
        title="All User"
        icon={FaUserLarge}
        number={users?.length}
        bgColor="#2F6967"
      />
      <Box
        title="All Sub-Category"
        icon={BsHandbagFill}
        number={subCategories?.length}
        bgColor="#72909E"
      />
      <Box
        title="Not Delivered"
        icon={BsHandbagFill}
        number={unconfirmedOrders?.length}
        bgColor="#FF9B3F"
      />
    </div>
  );
};

export default DashboardBody;
