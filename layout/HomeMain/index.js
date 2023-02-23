import React from "react";
import HomeMainImage from "../../components/HomeMainImage";
import HomeNews from "../../components/HomeNews";
import MainSlider from "../../components/MainSlider";
import NewArrival from "../../components/NewArrival";

const HomeMain = () => {
  return (
    <main className="main">
      <MainSlider />
      <NewArrival />
      <HomeMainImage />
      <HomeNews />
    </main>
  );
};

export default HomeMain;
