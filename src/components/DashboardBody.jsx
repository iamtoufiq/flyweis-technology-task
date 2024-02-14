import React, { useMemo } from "react";
import Box from "./Box";
import { MdCategory } from "react-icons/md";
import { MdShoppingCart } from "react-icons/md";
import { IoFolder } from "react-icons/io5";
import { BsHandbagFill } from "react-icons/bs";
import { FaUserLarge } from "react-icons/fa6";
import useMultipleApi from "../hook/useMultipleApi";
import Loader from "./Loader";
const DashboardBody = () => {
  const endpoints = useMemo(
    () => [
      "api/v1/product/admin/products",
      "api/v1/catg",
      "api/v1/catg/subcategory/get",
      "api/v1/user/all",
      "api/v1/order/all/user/orders",
    ],
    []
  );

  const { data, loading, error } = useMultipleApi(endpoints);

  console.log("data", data);
  console.log("loading", loading);
  console.log("error", error);
  const productCount = data && data[0]?.value?.products?.length;
  const categoryCount = data && data[1]?.value?.categories?.length;
  const subcategoryCount = data && data[2]?.value?.length;
  const allUsersCount = data && data[3]?.value?.users?.length;
  const pendingOrderCount = data && data[4]?.value?.unconfirmedOrders?.length;
  if (loading) {
    return <Loader />;
  }
  if (error) {
    return (
      <div className="text-red-600 text-2xl">Error: something went wrong</div>
    );
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mx:1 md:mx-3">
      <Box
        title="All product"
        icon={MdShoppingCart}
        number={productCount}
        bgColor="#3C335D"
      />
      <Box
        title="All Category"
        icon={MdCategory}
        number={categoryCount}
        bgColor="#023B5B"
      />
      <Box
        title="All Sub-Category"
        icon={IoFolder}
        number={subcategoryCount}
        bgColor="#72909E"
      />
      <Box
        title="All User"
        icon={FaUserLarge}
        number={allUsersCount}
        bgColor="#2F6967"
      />
      <Box
        title="All Sub-Category"
        icon={BsHandbagFill}
        number={subcategoryCount}
        bgColor="#72909E"
      />
      <Box
        title="Not Delivered"
        icon={BsHandbagFill}
        number={pendingOrderCount}
        bgColor="#FF9B3F"
      />
    </div>
  );
};

export default DashboardBody;
