import React from "react";
import useLanguage from "../../hooks/useLanguage";
import NewsItem from "./components/NewsItem";

const NewsBody = () => {
  const translate = useLanguage()
  return (
    <section className="news">
      <div className="container">
        <div className="news__wrap">
          <div className="news__title">
            <h1>{translate("company-news")}</h1>
          </div>
          <div className="cards">
            <NewsItem />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsBody;
