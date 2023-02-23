import React, { useRef } from "react";
import Nav from "./components/Nav";
import Popup from "./components/Popup";
import LanguageChange from "./components/LanguageChange";
import MainSearch from "./components/MainSearch";
import Logo from "../../components/Atoms/Logo";
import MenuIcon from "../../components/icons/MenuIcon";
import CloseIcon from "../../components/icons/CloseIcon";

const Header = () => {
  const menuRef = useRef();
  const menuBg = useRef();
  const closeRef = useRef();
  const popupRef = useRef();

  const showMenu = () => {
    closeRef.current.classList.add("active");
    menuRef.current.classList.add("disable");
    popupRef.current.classList.add("active");
    document.body.classList.add("show-modal");
  };

  const closeMenu = () => {
    closeRef.current.classList.remove("active");
    menuRef.current.classList.remove("disable");
    popupRef.current.classList.remove("active");
    document.body.classList.remove("show-modal");
  };

  return (
    <header className="header">
      <div className="header__inner">
        <div className="container">
          <div className="header__wrap">
            <Logo />
            <div className="header__menu">
              <Nav />
            </div>
            <ul className="header__icons">
              <li className="icons-item">
                <MainSearch />
              </li>
              <li className="icons-item">
                <LanguageChange />
              </li>
              <li
                className="icons-item icons-item_menu"
                onClick={() => showMenu()}
                ref={menuRef}
              >
                <MenuIcon />
              </li>
              <li
                className="icons-item icons-item_close"
                onClick={() => closeMenu()}
                ref={closeRef}
              >
                <CloseIcon />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="popup" ref={popupRef}>
        <div
          className="popup__bg"
          ref={menuBg}
          onClick={closeMenu}
        ></div>
        <Popup closeMenu={closeMenu}/>
      </div>
    </header>
  );
};

export default Header;
