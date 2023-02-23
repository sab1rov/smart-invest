import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import { LanguageContext } from "../../context/LanguageContext";
import useLanguage from "../../hooks/useLanguage";

const HomeNews = () => {
  const [data, setData] = useState([]);
  const translate = useLanguage();
  const { language } = useContext(LanguageContext);

  const getData = async () => {
    const res = await axios.get("https://smart-api-v2.main-gate.appx.uz/news");
    setData(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="home-news">
      <div className="container">
        <div className="home-news__wrap">
          <div className="home-news__title">
            <h1 className="home-news__title-text">
              {translate("company-news")}
            </h1>
          </div>
          <div className="home-news__content">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={30}
              slidesPerView={4}
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
              {data.map((item) => (
                <SwiperSlide key={item?.id}>
                  <Link href="#" className="swiper__img-wrap">
                    <div className="swiper__img">
                      <Image
                        src={item?.image_url}
                        alt={"image"}
                        width={500}
                        height={500}
                      />
                    </div>
                  </Link>
                  <Link className="swiper__title" href="#">
                    <p className="swiper__title-block">
                      {language == "uz"
                        ? item?.title_uz
                        : language == "ru"
                        ? item?.title_ru
                        : item.title}
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

export default HomeNews;
