// components/Sidebar.js
import { Link } from "react-router-dom";

const Sidebar = () => (
  <div className="w-[250px] min-h-screen bg-gray-50 border-r text-black font-mono ">
    <h2 className="text-2xl font-bold mx-3 my-4">Admin Panel</h2>
    <nav className="flex flex-col gap-4">
      <Link to="/admin/add-ebook" className=" py-3 px-3 font-semibold border-y hover:bg-black hover:text-white transition duration-100">
        Add eBooks
      </Link>
      <Link to="/admin/view-ebooks" className=" py-3 px-3 font-semibold border-y hover:bg-black hover:text-white transition duration-100">
        View eBooks
      </Link>
      <Link to="/admin/view-ebooks" className=" py-3 px-3 font-semibold border-y hover:bg-black hover:text-white transition duration-100">
        View Orders
      </Link>
    </nav>
  </div>
);

export default Sidebar;
