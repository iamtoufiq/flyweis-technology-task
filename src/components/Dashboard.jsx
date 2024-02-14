import React from "react";
import Sidebar from "./Sidebar";
import AdminDashboard from "./AdminDashboard";

const Dashboard = () => {
  return (
    <div className="flex w-full gap-2 md:gap-3 ">
      <Sidebar />
      <AdminDashboard />
    </div>
  );
};

export default Dashboard;
