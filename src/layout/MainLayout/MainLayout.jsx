import React from "react";
import { Outlet } from "react-router-dom";
import GpuHuntFooter from "../../components/Shared/GpuHuntFooter/GpuHuntFooter";
import GpuHuntNavbar from "../../components/Shared/GpuHuntNavbar/GpuHuntNavbar";

const MainLayout = () => {
  return (
    <>
      <GpuHuntNavbar />
      <div className="max-w-6xl mx-auto px-2 lg:px-0">
        <Outlet />
      </div>
      <GpuHuntFooter />
    </>
  );
};

export default MainLayout;
