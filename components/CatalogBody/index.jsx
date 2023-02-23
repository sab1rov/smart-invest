import React from "react";
import useLanguage from "../../hooks/useLanguage";
import CatalogCard from "./components/CatalogCard";

const CatalogBody = () => {
  const translate = useLanguage();
  return (
    <section className="catalog">
      <div className="container">
        <div className="catalog__wrap">
          <div className="head-title">
            <div className="head-title__wrap">
              <h2 className="head-title__main">{translate("catalog")}</h2>
              <p className="head-title__desc">
                {translate("large-assortment")}
              </p>
            </div>
          </div>
          <div className="catalog__main">
            <CatalogCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CatalogBody;
