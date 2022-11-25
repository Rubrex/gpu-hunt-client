import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import ResellFooter from "../../components/Shared/Footer/ResellFooter";
import ResellNavbar from "../../components/Shared/Navbar/ResellNavbar";
import { AuthContext } from "../../contexts/AuthProvider";

const DashboardLayout = () => {
  const { user, role } = useContext(AuthContext);
  console.log(role);
  return (
    <>
      <ResellNavbar />
      <div className="max-w-6xl mx-auto px-2 lg:px-0 ">
        {/* Drawer */}
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Side Nav */}
          <aside className="lg:col-span-3 bg-gray-50">
            {/* Routes */}
            <ul className="flex flex-col items-center gap-2 px-5 py-5">
              {/* User Role Routes */}
              {role === "user" && (
                <>
                  <li className="bg-gray-100 w-full text-center p-2">
                    <NavLink to="/dashboard/myorders">My Orders</NavLink>
                  </li>
                  <li className="bg-gray-100 w-full text-center p-2">
                    <NavLink to="/dashboard/mywishlists">My Wishlists</NavLink>
                  </li>
                </>
              )}
            </ul>
          </aside>
          {/* Main Content Area */}
          <main className="lg:col-span-9 bg-gray-100 min-h-screen p-5">
            <Outlet />
          </main>
        </div>

        {/* Drawer ends */}
      </div>
      <ResellFooter />
    </>
  );
};

export default DashboardLayout;
