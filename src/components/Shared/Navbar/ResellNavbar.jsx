import { Button, Navbar } from "flowbite-react";
import React from "react";
import { Link, NavLink } from "react-router-dom";

const ResellNavbar = () => {
  return (
    <Navbar fluid={true} rounded={true} className="max-w-6xl mx-auto">
      <Link className="flex items-center" to="/">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          BuySell
        </span>
      </Link>
      <div className="flex md:order-2">
        <Button>Login</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <NavLink to="/">Home</NavLink>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default ResellNavbar;
