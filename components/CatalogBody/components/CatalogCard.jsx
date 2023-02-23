import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { LanguageContext } from "../../../context/LanguageContext";

const CatalogCard = () => {
  const [data, setData] = useState([]);
  const { language } = useContext(LanguageContext);

  const getData = async () => {
    const res = await axios.get("https://smart-api-v2.main-gate.appx.uz/room");
    setData(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return data.map((item) => (
    <div className="catalog__card" key={item?.id}>
      <Image
        src={item?.image_url}
        alt="main image"
        width={300}
        height={300}
        className="catalog__card-img"
      />
      <div className="catalog__text">
        <div className="inner-text">
          <h3 className="inner-text__title">
            {language == "uz"
              ? item?.name_uz
              : language == "ru"
              ? item?.name_ru
              : item?.name}
          </h3>
          <ul className="inner-text__subtitles">
            {item?.catalogs?.map((link) => (
              <li className="inner-text__subtitle-item" key={link?.id}>
                <Link href={`catalog/${link?.api_name}`}>
                  {language == "uz"
                    ? link?.name_uz
                    : language == "ru"
                    ? link?.name_ru
                    : link?.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  ));
};

export default CatalogCard;
