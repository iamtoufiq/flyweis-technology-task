import React from "react";
import Header from "./Header";
import DashboardBody from "./DashboardBody";

const AdminDashboard = () => {
  return (
    <div className="w-full h-screen overflow-y-scroll flex flex-col gap-2 pb-5 example p-4 pt-6 max-w-5xl m-auto">
      <Header />
      <DashboardBody />
    </div>
  );
};

export default AdminDashboard;
