import React from "react";
import Logo from "../../components/Atoms/Logo";
import TelegramIcon from "../../components/icons/TelegramIcon";
import useLanguage from "../../hooks/useLanguage";

const Footer = () => {
  const translate = useLanguage();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrap">
          <div className="footer__top">
            <div className="footer__logo">
              <Logo />
            </div>
            <div className="footer__nav">
              <h3 className="footer__nav-title">{translate("contacts")}</h3>
              <ul className="footer__link">
                <li className="footer__link-item link-item">
                  <p className="link-item__ttile">{translate("number")}</p>
                  <a href="tel:+998 (99) 967 77 05" className="link-item__link">
                    +998 (99) 967 77 05
                  </a>
                </li>
                <li className="footer__link-item link-item">
                  <p className="link-item__ttile">{translate("mail")}</p>
                  <a
                    href="mailto:info@smartinvest.uz"
                    className="link-item__link"
                  >
                    info@smartinvest.uz
                  </a>
                </li>
                <li className="footer__link-item link-item">
                  <p className="link-item__ttile">{translate("channel")}</p>
                  <a href="#">
                    <TelegramIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__bottom">
            <p className="footer__bottom-text">{translate("all-rights")}</p>
            <p className="footer__bottom-text">{translate("address")}</p>
            <p className="footer__bottom-text">
            {translate("made")}{" "}
              <a href="https://appx.uz/">
                Appx <span>Tech Group</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
