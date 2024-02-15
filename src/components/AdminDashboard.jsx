import React from "react";
import Header from "./Header";
import DashboardBody from "./DashboardBody";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserList from "../pages/UserList";
const AdminDashboard = () => {
  return (
    <div className="w-full h-screen overflow-y-scroll flex flex-col gap-2 pb-5 example p-4 pt-6 max-w-5xl m-auto">
      <Header />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardBody />} />
          <Route path="/userlist" element={<UserList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AdminDashboard;
