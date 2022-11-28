import React from "react";
import useTitleChange from "../../hooks/useTitle";
import Advertised from "./Advertised/Advertised";
import Categories from "./Categories/Categories";
import ExtraSection from "./ExtraSection/ExtraSection";
import HomeBanner from "./HomeBanner/HomeBanner";

const Home = () => {
  useTitleChange("Home");
  return (
    <div>
      <HomeBanner />
      <Categories />
      <Advertised />
      <ExtraSection />
    </div>
  );
};

export default Home;
