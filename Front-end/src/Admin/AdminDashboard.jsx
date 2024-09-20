// pages/AdminDashboard.js
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const AdminDashboard = () => (
  <div className="min-h-[100vh] flex">
    <Sidebar />
    <div className="flex-grow p-6"> 
      <Outlet /> 
    </div>
  </div>
);

export default AdminDashboard;
