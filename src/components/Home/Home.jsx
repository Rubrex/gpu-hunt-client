import React from "react";
import Advertised from "./Advertised/Advertised";
import Categories from "./Categories/Categories";
import HomeBanner from "./HomeBanner/HomeBanner";

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <Categories />
      <Advertised />
    </div>
  );
};

export default Home;
