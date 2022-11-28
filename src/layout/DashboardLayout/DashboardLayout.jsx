import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import GpuHuntFooter from "../../components/Shared/GpuHuntFooter/GpuHuntFooter";
import GpuHuntNavbar from "../../components/Shared/GpuHuntNavbar/GpuHuntNavbar";
import { AuthContext } from "../../contexts/AuthProvider";
import { ProductContext } from "../../contexts/ProductProvider";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const { role } = useContext(ProductContext);

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
                    <NavLink
                      to="/dashboard/myorders"
                      className="w-full font-medium flex"
                    >
                      My Orders
                    </NavLink>
                  </li>
                  {/* <li className="bg-gray-100 w-full text-center p-2">
                    <NavLink to="/dashboard/mywishlists">My Wishlists</NavLink>
                  </li> */}
                </>
              )}
              {/* Seller Role Routes */}
              {role === "seller" && (
                <>
                  <li className="bg-gray-100 w-full text-center p-2">
                    <NavLink
                      to="/dashboard/addproduct"
                      className="w-full font-medium flex"
                    >
                      Add Product
                    </NavLink>
                  </li>
                  <li className="bg-gray-100 w-full text-center p-2">
                    <NavLink
                      to="/dashboard/myproducts"
                      className="w-full font-medium flex"
                    >
                      My Products
                    </NavLink>
                  </li>
                  {/* <li className="bg-gray-100 w-full text-center p-2">
                    <NavLink
                      to="/dashboard/mybuyers"
                      className="w-full font-medium flex"
                    >
                      My Buyers
                    </NavLink>
                  </li> */}
                </>
              )}
              {/* Admin Role Routes */}
              {role === "admin" && (
                <>
                  <li className="bg-gray-100 w-full text-center p-2">
                    <NavLink
                      to="/dashboard/allsellers"
                      className="w-full font-medium flex"
                    >
                      All Sellers
                    </NavLink>
                  </li>
                  <li className="bg-gray-100 w-full text-center p-2">
                    <NavLink
                      to="/dashboard/allbuyers"
                      className="w-full font-medium flex"
                    >
                      All Buyers
                    </NavLink>
                  </li>
                  <li className="bg-gray-100 w-full text-center p-2">
                    <NavLink
                      to="/dashboard/reporteditems"
                      className="w-full font-medium flex"
                    >
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
