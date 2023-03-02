import React from "react";
import ProductItemBody from "../../components/ProductItemBody";
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";

const ProductItem = () => {
  return (
    <div className="wrapper">
      <Header />
      <ProductItemBody />
      <Footer />
    </div>
  );
};

export default ProductItem;
