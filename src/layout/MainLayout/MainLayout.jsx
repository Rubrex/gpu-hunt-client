import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import GpuHuntFooter from "../../components/Shared/GpuHuntFooter/GpuHuntFooter";
import GpuHuntNavbar from "../../components/Shared/GpuHuntNavbar/GpuHuntNavbar";
import Loading from "../../components/Shared/Loading/Loading";

const MainLayout = () => {
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return <Loading />;
  }

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
