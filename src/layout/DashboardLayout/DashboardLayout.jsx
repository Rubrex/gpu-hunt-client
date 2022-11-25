import React, { useContext } from "react";
import { NavLink, Outlet, useNavigation } from "react-router-dom";
import GpuHuntFooter from "../../components/Shared/GpuHuntFooter/GpuHuntFooter";
import GpuHuntNavbar from "../../components/Shared/GpuHuntNavbar/GpuHuntNavbar";
import { AuthContext } from "../../contexts/AuthProvider";

const DashboardLayout = () => {
  const { role } = useContext(AuthContext);

  return (
    <>
      <GpuHuntNavbar />
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
              {/* Seller Role Routes */}
              {role === "seller" && (
                <>
                  <li className="bg-gray-100 w-full text-center p-2">
                    <NavLink to="/dashboard/addproduct">Add Product</NavLink>
                  </li>
                  <li className="bg-gray-100 w-full text-center p-2">
                    <NavLink to="/dashboard/myproducts">My Products</NavLink>
                  </li>
                  <li className="bg-gray-100 w-full text-center p-2">
                    <NavLink to="/dashboard/mybuyers">My Buyers</NavLink>
                  </li>
                </>
              )}
              {/* Admin Role Routes */}
              {role === "admin" && (
                <>
                  <li className="bg-gray-100 w-full text-center p-2">
                    <NavLink to="/dashboard/allsellers">All Sellers</NavLink>
                  </li>
                  <li className="bg-gray-100 w-full text-center p-2">
                    <NavLink to="/dashboard/allbuyers">All Buyers</NavLink>
                  </li>
                  <li className="bg-gray-100 w-full text-center p-2">
                    <NavLink to="/dashboard/reporteditems">
                      Reported Items
                    </NavLink>
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
      <GpuHuntFooter />
    </>
  );
};

export default DashboardLayout;
