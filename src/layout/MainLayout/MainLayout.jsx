import React from "react";
import { Outlet } from "react-router-dom";
import ResellFooter from "../../components/Shared/Footer/ResellFooter";
import ResellNavbar from "../../components/Shared/Navbar/ResellNavbar";

const MainLayout = () => {
  return (
    <>
      <ResellNavbar />
      <div className="max-w-6xl mx-auto">
        <Outlet />
      </div>
      <ResellFooter />
    </>
  );
};

export default MainLayout;
