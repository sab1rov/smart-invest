import React from "react";
import CatalogMain from "../../layout/CatalogMain";
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";

const Catalog = () => {
  return (
    <div className="wrapper">
      <Header />
      <CatalogMain />
      <Footer />
    </div>
  );
};

export default Catalog;
