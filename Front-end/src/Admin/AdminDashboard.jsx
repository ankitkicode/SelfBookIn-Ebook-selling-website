// pages/AdminDashboard.js
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const AdminDashboard = () => (
  <div className="min-h-screen flex">
    <Sidebar />
    <div className="flex-grow p-6 overflow-y-auto">
      <Outlet />
    </div>
  </div>
);

export default AdminDashboard;
