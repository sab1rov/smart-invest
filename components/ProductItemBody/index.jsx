import React from "react";
import Image from "next/image";
import NoteIcon from "../icons/NoteIcon";
import Img from "../../assets/Images/arrival__img-eight.jpg";
import { featureData, sizeData } from "../../data";
import ViewIcon from "../icons/ViewIcon";

const ProductItemBody = () => {
  return (
    <main className="main">
      <div className="product">
        <div className="container">
          <div className="product__wrap">
            <div className="product__picture picture">
              <div className="picture__preview">
                <Image src={Img} alt="main image" />
              </div>
              <ul className="picture__list"></ul>
            </div>

            <div className="product__content content">
              <h1 className="content__main-title">
                Bedding set calico art. 28155
              </h1>
              <div className="content__info">
                {
                  <>
                    <NoteIcon />
                    <p className="Content__text">
                      Bed linen from calico fabric. Fabric 100% cotton. Density
                      120 g/m2. The product is not painted and does not shed,
                      withstands multiple washes! {<br />} {<br />} It is
                      recommended to wash at a temperature not exceeding 40C.
                      When washing possible shrinkage up to 5%
                    </p>
                  </>
                }
              </div>

              <div className="content__desc desc">
                <div className="desc__left">
                  <p className="small-text">Product dimensions</p>
                  <div className="desc__cat">
                    <h3>Single</h3>
                    <ul className="category">
                      {sizeData.map((item) => (
                        <li className="category__item" key={item.id}>
                          {item.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="desc__cat">
                    <h3>Queen</h3>
                    <ul className="category">
                      {sizeData.map((item) => (
                        <li className="category__item" key={item.id}>
                          {item.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="desc__cat">
                    <h3>King</h3>
                    <ul className="category">
                      {sizeData.map((item) => (
                        <li className="category__item" key={item.id}>
                          {item.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="desc__cat">
                    <h3>Family</h3>
                    <ul className="category">
                      {sizeData.map((item) => (
                        <li className="category__item" key={item.id}>
                          {item.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="desc__right">
                  <div className="desc__icon">
                    {
                      <>
                        <ViewIcon />
                        <p>View product dimensions and specifications</p>
                      </>
                    }
                  </div>
                </div>
              </div>
              
              <div className="content__feature">
                <p className="small-text">Product features</p>
                <ul className="feature">
                  {featureData.map((item) => (
                    <li className="feature__item" key={item?.id}>
                      <div className="feature__img">
                        <Image src={item?.image} alt={item?.name} />
                      </div>
                      <p className="feature__title">{item?.name}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductItemBody;
