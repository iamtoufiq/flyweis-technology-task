import React from "react";
import Box from "./Box";
import { MdCategory } from "react-icons/md";
import { MdShoppingCart } from "react-icons/md";
import { IoFolder } from "react-icons/io5";
import { BsHandbagFill } from "react-icons/bs";
import { FaUserLarge } from "react-icons/fa6";
const DashboardBody = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      <Box title="All product" icon={MdShoppingCart} bgColor="#3C335D" />
      <Box title="All Category" icon={MdCategory} bgColor="#023B5B" />
      <Box title="All Sub-Category" icon={IoFolder} bgColor="#72909E" />
      <Box title="All User" icon={FaUserLarge} bgColor="#2F6967" />
      <Box title="All Sub-Category" icon={BsHandbagFill} bgColor="#72909E" />
      <Box title="Not Delivered" icon={BsHandbagFill} bgColor="#FF9B3F" />
    </div>
  );
};

export default DashboardBody;
