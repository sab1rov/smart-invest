import React, { useContext, useEffect, useRef } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import useLanguage from "../../hooks/useLanguage";
import { colorData, printData, textileData } from "../../data/index";
import axios from "axios";

const CatalogItemFilter = () => {
  const { language } = useContext(LanguageContext);
  const translate = useLanguage();
  const urls = [
    "https://smart-api-v2.main-gate.appx.uz/print",
    "https://smart-api-v2.main-gate.appx.uz/color",
    "https://smart-api-v2.main-gate.appx.uz/fabric",
  ];
  const requests = urls.map((url) => axios.get(url));

  const catalog = useRef();

  const showCatalog = (e) => {
    e.preventDefault();
    catalog.current.classList.toggle("show");
  };

  const getData = async () => {
    const res = await axios.all(requests);
    // console.log(res.data);

    axios.all(requests).then((responses) => {
      responses.forEach((resp) => {
        let msg = {
          server: resp.headers.server,
          status: resp.status,
          fields: Object.keys(resp.data).toString(),
        };
        // console.info(resp.config.url);
        console.log(resp.data);
      });
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <main className="main">
      <div className="catalog-filter">
        <div className="container">
          <div className="catalog-filter__wrap">
            <div className="catalog-filter__sidebar">
              <div className="filter">
                <form className="filter__form">
                  <button
                    className="filter__btn"
                    onClick={(e) => showCatalog(e)}
                  >
                    {translate("catalog-filter")}
                  </button>
                  <div className="filter__inner" ref={catalog}>
                    <div className="filter-item">
                      <p className="filter-item__title">
                        {translate("print-type")}
                      </p>
                      <ul className="filter-list">
                        {printData?.map((item) => (
                          <li key={item.id} className="filter-list__item">
                            <label className="checkbox-label">
                              <input
                                type="checkbox"
                                name="filter-new"
                                className="checkbox"
                              />
                              <span className="checkbox-check"></span>
                              {language == "uz"
                                ? item?.name_uz
                                : language == "ru"
                                ? item?.name_ru
                                : item?.name}
                            </label>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="filter-item">
                      <p className="filter-item__title">{translate("color")}</p>
                      <ul className="filter-list">
                        {colorData.map((item) => (
                          <li key={item.id} className="filter-list__item">
                            <label className="checkbox-label">
                              <input
                                type="checkbox"
                                name="filter-new"
                                className="checkbox"
                              />
                              <span
                                className="checkbox-check color"
                                style={{ background: `${item.name}` }}
                              ></span>
                              {language == "uz"
                                ? item?.name_uz
                                : language == "ru"
                                ? item?.name_ru
                                : item?.name}
                            </label>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="filter-item">
                      <p className="filter-item__title">
                        {translate("textile")}
                      </p>
                      <ul className="filter-list">
                        {textileData?.map((item) => (
                          <li key={item.id} className="filter-list__item">
                            <label className="checkbox-label">
                              <input
                                type="checkbox"
                                name="filter-new"
                                className="checkbox"
                              />
                              <span className="checkbox-check"></span>
                              {language == "uz"
                                ? item?.name_uz
                                : language == "ru"
                                ? item?.name_ru
                                : item?.name}
                            </label>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="catalog-filter__content"></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CatalogItemFilter;


// hi 