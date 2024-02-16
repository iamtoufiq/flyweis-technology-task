import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import DashboardBody from "./DashboardBody";
import UserList from "../pages/UserList";
import MainCategory from "../pages/MainCategory";
import SubCategory from "../pages/SubCategory";
import Products from "../pages/Products";
import Error from "../pages/Error";
const AdminDashboard = () => {
  return (
    <div className="w-full h-screen overflow-y-scroll flex flex-col gap-2 pb-5 example p-4 pt-6 max-w-7xl m-auto">
      <Header />

      <Routes>
        <Route path="/" element={<DashboardBody />} />
        <Route path="/userlist" element={<UserList />} />
        <Route path="/category" element={<MainCategory />} />
        <Route path="/subcategory" element={<SubCategory />} />
        <Route path="/products" element={<Products />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default AdminDashboard;
