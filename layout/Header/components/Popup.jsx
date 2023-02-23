import Link from "next/link";
import React from "react";
import ArrowlineIcon from "../../../components/icons/ArrowlineIcon";
import useLanguage from "../../../hooks/useLanguage";
import Nav from "./Nav";

const Popup = ({ closeMenu }) => {
  const translate = useLanguage();
  return (
    <div className="popup__wrap">
      {/* <Nav /> */}
      <ul className="popup__pages">
        <li className="popup__page-item" onClick={closeMenu}>
          <Link href="/catalog">
            {" "}
            <ArrowlineIcon />
            {translate("catalog")}
          </Link>
        </li>
        <li className="popup__page-item" onClick={closeMenu}>
          <Link href="/news">
            {" "}
            <ArrowlineIcon /> {translate("news")}
          </Link>
        </li>
      </ul>
      <div className="hr-dotted"></div>
      <div className="popup__info">
        <span className="small-text">{translate("number")}</span>
        <a href="tel:+998999677705">+998 (99) 967 77 05</a>
      </div>
      <div className="hr-dotted"></div>
      <div className="popup__address">
        <span className="small-text">{translate("address-main")}</span>
        <p>{translate("address")}</p>
      </div>
      <button className="popup__main-btn">{translate("question")}</button>
    </div>
  );
};

export default Popup;
