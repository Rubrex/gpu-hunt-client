import React from "react";
import { Outlet } from "react-router-dom";
import ResellFooter from "../../components/Shared/Footer/ResellFooter";
import ResellNavbar from "../../components/Shared/Navbar/ResellNavbar";

const DashboardLayout = () => {
  return (
    <>
      <ResellNavbar />
      <div className="max-w-6xl mx-auto px-2 lg:px-0">
        <Outlet />
      </div>
      <ResellFooter />
    </>
  );
};

export default DashboardLayout;
