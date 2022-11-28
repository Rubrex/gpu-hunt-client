import { Navbar } from "flowbite-react";
import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/images/icons/logo.png";
import { AuthContext } from "../../../contexts/AuthProvider";
import { ProductContext } from "../../../contexts/ProductProvider";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

const GpuHuntNavbar = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const { role } = useContext(ProductContext);
  const logoutHandler = () => {
    logOut();
  };

  return (
    <Navbar fluid={true} rounded={true} className="max-w-6xl mx-auto ">
      <Link className="flex items-center" to="/">
        <img src={logo} className="mr-3 h-6 sm:h-9" alt="GPU Hunts" />
        <span className="self-center whitespace-nowrap text-2xl font-bold text-gray-700 dark:text-white">
          GPUHunts
        </span>
      </Link>
      <div className="flex md:order-2">
        <div className="flex ">
          {/* Login ,Register, Logout */}
          {user?.email ? (
            <>
              {role && (
                <div className="flex items-center gap-5">
                  {(role === "user" && (
                    <span className="hidden md:inline font-bold pl-3 pr-8 -mr-8 py-1  bg-gray-100 rounded-md">
                      User Account
                    </span>
                  )) ||
                    (role === "seller" && (
                      <span className="hidden md:inline font-bold pl-3 pr-8 -mr-8 py-1  bg-gray-100 rounded-md">
                        Seller Account
                      </span>
                    )) ||
                    (role === "admin" && (
                      <span className="hidden md:inline font-bold pl-3 pr-8 -mr-8 py-1  bg-gray-100 rounded-md">
                        Admin Account
                      </span>
                    ))}
                  {/* Toggle dropdown */}
                  <div className="relative mr-5 md:mr-0">
                    <img
                      src={user.photoURL}
                      className="w-10 h-10 object-cover rounded-full ring-gray-400 ring-offset-2 ring-2 hover:ring-primary cursor-pointer transition-all "
                      alt=""
                      onClick={() => setToggleDropdown(!toggleDropdown)}
                      data-dropdown-toggle="dropdown"
                    />
                    {/* <!-- Dropdown menu --> */}
                    <div
                      id="dropdown"
                      className={`${
                        toggleDropdown ? "block" : "hidden"
                      } absolute top-12 right-0 z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow-md dark:bg-gray-700`}
                    >
                      <ul
                        className="py-1 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdownDefault"
                      >
                        <li>
                          {user?.email && (
                            <NavLink
                              className="hover:text-primary block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              to="/dashboard"
                            >
                              Dashboard
                            </NavLink>
                          )}
                        </li>
                        <li>
                          <Link to="/" onClick={logoutHandler}>
                            <PrimaryButton>Logout</PrimaryButton>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </>
          ) : (
            <>
              <Link to="/login">
                <PrimaryButton>Login</PrimaryButton>
              </Link>
              <Link to="/register">
                <PrimaryButton>Register</PrimaryButton>
              </Link>
            </>
          )}
        </div>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <NavLink className="hover:text-primary" to="/">
          Home
        </NavLink>
        <NavLink className="hover:text-primary" to="/products">
          Products
        </NavLink>

        <NavLink className="hover:text-primary" to="/blogs">
          Blogs
        </NavLink>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default GpuHuntNavbar;
