import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";
import Logout from "./Logout";

const LayoutClient = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUserToken();
  }, []);

  const getUserToken = () => {
    const getUser = localStorage.getItem("user") || null;
    const user = JSON.parse(getUser!);
    setUser(user);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md">
        <section className="container max-w-screen-xl m-auto flex items-center justify-between py-4 px-6 lg:px-8">
          {/* Logo */}
          <Link to="/">
            <img src="../../img/logo.png" alt="Logo" className="w-36" />
          </Link>

          {/* Navigation Links */}
          <nav className="hidden lg:flex gap-8 font-medium text-lg text-gray-700">
            <Link to="/" className="hover:text-orange-600 transition">
              Home
            </Link>
            <Link to="/shop" className="hover:text-orange-600 transition">
              Shop
            </Link>
            <Link to="/contact" className="hover:text-orange-600 transition">
              Contact
            </Link>
            {!user ? (
              <Link to="/login" className="hover:text-orange-600 transition">
                Login
              </Link>
            ) : (
              <span className="text-gray-700">Hello, {user.username}</span>
            )}

            <Logout />
          </nav>

          {/* User Actions */}
          <div className="flex items-center gap-4 text-gray-700">
            <Link
              to="/register"
              className="material-symbols-outlined text-xl hover:text-orange-600 transition"
            >
              person
            </Link>
            <span className="material-symbols-outlined text-xl hover:text-orange-600 transition">
              favorite
            </span>
            <span className="material-symbols-outlined text-xl hover:text-orange-600 transition">
              shopping_cart
            </span>
          </div>
        </section>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LayoutClient;
