import React from "react";
import Image from "next/image";
import MainImage from "../../assets/Images/home-main-img.jpg";

const HomeMainImage = () => {
  return (
    <section className="main-img">
      <div className="main-img__wrap">
        <Image src={MainImage} alt="main image" className="main-img__image"/>
      </div>
    </section>
  );
};

export default HomeMainImage;
