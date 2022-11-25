import { Button, Navbar } from "flowbite-react";
import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/images/icons/logo.png";
import { AuthContext } from "../../../contexts/AuthProvider";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

const ResellNavbar = () => {
  const { user, logOut } = useContext(AuthContext);

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
        <div className="flex gap-2">
          {/* Login ,Register, Logout */}
          {user?.email ? (
            <Link to="/" onClick={logoutHandler}>
              <PrimaryButton>Logout</PrimaryButton>
            </Link>
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
        <NavLink to="/">Home</NavLink>
        {user?.email && <NavLink to="/dashboard">Dashboard</NavLink>}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default ResellNavbar;
