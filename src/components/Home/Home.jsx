import React from "react";
import useTitleChange from "../../hooks/useTitle";
import Advertised from "./Advertised/Advertised";
import Categories from "./Categories/Categories";
import HomeBanner from "./HomeBanner/HomeBanner";

const Home = () => {
  useTitleChange("Home");
  return (
    <div>
      <HomeBanner />
      <Categories />
      <Advertised />
    </div>
  );
};

export default Home;
