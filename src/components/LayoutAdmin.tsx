import React from "react";
import { Link, Outlet } from "react-router-dom";

const LayoutAdmin = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-gray-100 flex flex-col">
        <div className="py-6 px-4 text-2xl font-semibold text-center border-b border-gray-700">
          Admin Dashboard
        </div>
        <nav className="flex-1 px-4 py-6 space-y-4">
          <Link
            to="/"
            className="flex items-center p-2 text-base hover:bg-gray-700 rounded-lg"
          >
            <i className="fas fa-home mr-3"></i> Home
          </Link>
          <Link
            to="/admin/category"
            className="flex items-center p-2 text-base hover:bg-gray-700 rounded-lg"
          >
            <i className="fas fa-boxes mr-3"></i> Categories
          </Link>
          <Link
            to="/admin"
            className="flex items-center p-2 text-base hover:bg-gray-700 rounded-lg"
          >
            <i className="fas fa-box mr-3"></i> Products
          </Link>
          <Link
            to="/admin/user"
            className="flex items-center p-2 text-base hover:bg-gray-700 rounded-lg"
          >
            <i className="fas fa-users mr-3"></i> Users
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <header className="bg-white shadow-md p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-lg font-semibold text-gray-700">Admin Panel</h1>
            <button
              className="text-gray-600 focus:outline-none md:hidden"
              aria-label="Toggle navigation"
            >
              <span className="material-icons">menu</span>
            </button>
          </div>
        </header>

        {/* Main Section */}
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="container mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default LayoutAdmin;
