import React, { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { LanguageContext } from "../../context/LanguageContext";
import useLanguage from "../../hooks/useLanguage";

const CatalogItemFilter = () => {
  const [colorData, setColorData] = useState([]);
  const [printData, setPrintData] = useState([]);
  const [fabricData, seFabricrData] = useState([]);

  const { language } = useContext(LanguageContext);
  const translate = useLanguage();
  const router = useRouter();
  console.log(router);
  let query = router.asPath.split("?")[1] ? router.asPath.split("?")[1] : "";

  const catalog = useRef();

  const showCatalog = (e) => {
    e.preventDefault();
    catalog.current.classList.toggle("show");
  };

  const getColorData = async () => {
    const res = await axios.get("https://smart-api-v2.main-gate.appx.uz/color");
    setColorData(res.data);
  };

  const getPrintData = async () => {
    const res = await axios.get("https://smart-api-v2.main-gate.appx.uz/print");
    setPrintData(res.data);
  };

  const getFabricData = async () => {
    const res = await axios.get(
      "https://smart-api-v2.main-gate.appx.uz/fabric"
    );
    seFabricrData(res.data);
  };

  const includeQueryBoolen = (name, key) => {
    if (router.query[name]) {
      let arrQuery = router.query[name].split(",");
      return arrQuery.includes(key);
    } else {
      return false;
    }
  };

  function handleChangePrint(key, name) {
    if (!!router.query[name]) {
      let arrQuery = router.query[name].split(",");
      if (arrQuery.includes(key)) {
        arrQuery = arrQuery.filter((item) => item !== key);
      } else {
        arrQuery.push(key);
      }

      const queryString = arrQuery.join(",");
      router.query[name] = queryString;
      router.push(router);
    } else {
      router.query[name] = key;
      router.push(router);
    }
  }

  const getAllProducts = async () => {
    const res = await axios.get(
      `https://smart-api-v2.main-gate.appx.uz/product?${query}`
    );
  };

  useEffect(() => {
    getColorData();
    getFabricData();
    getPrintData();
  }, []);

  useEffect(() => {
    getAllProducts();
  }, [query]);

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
                                className="checkbox"
                                onChange={() =>
                                  handleChangePrint(item?.print, "print")
                                }
                                checked={includeQueryBoolen(
                                  "print",
                                  item.print
                                )}
                              />
                              <span className="checkbox-check"></span>
                              {language == "uz"
                                ? item?.print_uz
                                : language == "ru"
                                ? item?.print_ru
                                : item?.print}
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
                                className="checkbox"
                                onChange={() =>
                                  handleChangePrint(item?.color, "color")
                                }
                                checked={includeQueryBoolen(
                                  "color",
                                  item?.color
                                )}
                              />
                              <span
                                className="checkbox-check color"
                                style={{ background: `${item.color}` }}
                              ></span>
                              {language == "uz"
                                ? item?.color_uz
                                : language == "ru"
                                ? item?.color_ru
                                : item?.color}
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
                        {fabricData?.map((item) => (
                          <li key={item.id} className="filter-list__item">
                            <label className="checkbox-label">
                              <input
                                type="checkbox"
                                className="checkbox"
                                onChange={() =>
                                  handleChangePrint(item?.fabric, "fabric")
                                }
                                checked={includeQueryBoolen(
                                  "fabric",
                                  item?.fabric
                                )}
                              />
                              <span className="checkbox-check"></span>
                              {language == "uz"
                                ? item?.fabric_uz
                                : language == "ru"
                                ? item?.fabric_ru
                                : item?.fabric}
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
