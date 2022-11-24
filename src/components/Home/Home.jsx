import React from "react";
import Loading from "../Shared/Loading/Loading";
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
