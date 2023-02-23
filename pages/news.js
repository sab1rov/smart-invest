import React from "react";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import NewsMain from "../layout/NewsMain";

const News = () => {
  return (
    <div className="wrapper">
      <Header />
      <NewsMain />
      <Footer />
    </div>
  );
};

export default News;
