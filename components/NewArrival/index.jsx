import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper";
import useLanguage from "../../hooks/useLanguage";
import { LanguageContext } from "../../context/LanguageContext";

import "swiper/css";
import "swiper/css/pagination";

const NewArrival = () => {
  const { language } = useContext(LanguageContext);
  const translate = useLanguage();
  const [data, setData] = useState([]);
  let page = 1;
  let limit = 10;

  const getData = async () => {
    const res = await axios.get(
      `https://smart-api-v2.main-gate.appx.uz/product?page=${page}&limit=${limit}`
    );
    setData(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data, '#########')

  return (
    <section className="new-arrival">
      <div className="container" style={{ overflow: "hidden" }}>
        <div className="new-arrival__wrap">
          <div className="head-title">
            <div className="head-title__wrap">
              <h2 className="head-title__main">{translate("new-arrivals")}</h2>
              <p className="head-title__desc">{translate("new-products")}</p>
            </div>
          </div>

          <div className="new-arrival__slider">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, Autoplay]}
              spaceBetween={30}
              slidesPerView={3}
              autoplay={{
                speed: 300,
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{ clickable: true }}
              className="swiper"
              breakpoints={{
                // when window width is >= 320px
                150: {
                  slidesPerView: 1,
                },
                // when window width is >= 480px
                580: {
                  slidesPerView: 2,
                },
                // when window width is >= 640px
                1024: {
                  slidesPerView: 3,
                },
              }}
            >
              {data?.products.map((item) => (
                <SwiperSlide key={item?.id}>
                  <Link
                    href={`catalog/${item.id}`}
                    className="swiper__img-wrap"
                  >
                    <div className="swiper__img">
                      <Image
                        src={item?.images}
                        alt={"image"}
                        width={500}
                        height={500}
                      />
                    </div>
                  </Link>
                  <Link className="swiper__title" href={`catalog/${item.id}`}>
                    <p className="swiper__title-block">
                      {language == "uz"
                        ? item?.name_uz
                        : language == "ru"
                        ? item?.name_ru
                        : item.name}
                    </p>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrival;
