import React from "react";
import { MdCategory, MdShoppingCart } from "react-icons/md";
import { IoFolder } from "react-icons/io5";
import { BsHandbagFill } from "react-icons/bs";
import { FaUserLarge } from "react-icons/fa6";
import { useGlobalHook } from "../context/ContextProvider";
import Box from "./Box";
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
        path="/products"
      />
      <Box
        title="All Category"
        icon={MdCategory}
        number={categories?.length}
        bgColor="#023B5B"
        path="/category"
      />
      <Box
        title="All Sub-Category"
        icon={IoFolder}
        number={subCategories?.length}
        bgColor="#72909E"
        path="/subcategory"
      />
      <Box
        title="All User"
        icon={FaUserLarge}
        number={users?.length}
        bgColor="#2F6967"
        path="/userlist"
      />
      <Box
        title="All Sub-Category"
        icon={BsHandbagFill}
        number={subCategories?.length}
        bgColor="#72909E"
        path="/subcategory"
      />
      <Box
        title="Not Delivered"
        icon={BsHandbagFill}
        number={unconfirmedOrders?.length}
        bgColor="#FF9B3F"
        path="/notfound"
      />
    </div>
  );
};

export default DashboardBody;
