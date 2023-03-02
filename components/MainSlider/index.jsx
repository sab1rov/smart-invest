import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper";
import { LanguageContext } from "../../context/LanguageContext";
import useLanguage from "../../hooks/useLanguage";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const MainSlider = () => {
  const [data, setData] = useState([]);
  const { language } = useContext(LanguageContext);
  const translate = useLanguage();

  const getData = async () => {
    const res = await axios.get(
      "https://smart-api-v2.main-gate.appx.uz/slider"
    );
    setData(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="main-banner">
      <div className="main-banner__wrap">
        <Swiper
          modules={[Navigation, Pagination, EffectFade, Autoplay]}
          slidesPerView={"auto"}
          autoplay={{
            speed: 300,
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          effect={"fade"}
          loop={true}
          pagination={{ clickable: true }}
        >
          {data.map((item) => (
            <SwiperSlide key={item?.id}>
              <div className="banner">
                <div className="banner__img">
                  <Image
                    src={item?.image_url}
                    alt="image"
                    width={700}
                    height={700}
                  />
                </div>
                <div className="banner__content">
                  <h1 className="banner__title">
                    {language == "uz"
                      ? item?.title_uz
                      : language == "ru"
                      ? item?.title_ru
                      : item.title}
                  </h1>
                  <p className="banner__desc">
                    {language == "uz"
                      ? item?.desc_uz
                      : language == "ru"
                      ? item?.desc_ru
                      : item.desc}
                  </p>
                  <button className="banner__btn">
                    {translate("find-out")}
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default MainSlider;
