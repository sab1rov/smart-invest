import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { LanguageContext } from "../../../context/LanguageContext";

const NewsItem = () => {
  const [data, setData] = useState([]);
  const { language } = useContext(LanguageContext);

  const getData = async () => {
    const res = await axios.get("https://smart-api-v2.main-gate.appx.uz/news");
    setData(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return data.map((item) => (
    <div className="cards__item" key={item?.id}>
      <div className="cards__text">
        <Link href={`news/${item?.id}`} className="cards__title">
          {language == "uz"
            ? item?.title_uz
            : language == "ru"
            ? item?.title_ru
            : item.title}
        </Link>
        <p className="cards__desc">
          {language == "uz"
            ? item?.content_uz
            : language == "ru"
            ? item?.content_ru
            : item?.content}
        </p>
      </div>
      <div className="cards__img">
        <Link href={`news/${item?.id}`}>
          <Image
            className="cards__img-main"
            src={item?.image_url}
            alt="articles image"
            width={300}
            height={300}
          />
        </Link>
      </div>
    </div>
  ));
};

export default NewsItem;
