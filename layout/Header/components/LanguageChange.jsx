import React, { useContext, useEffect, useRef, useState } from "react";
import LanguageIcon from "../../../components/icons/LanguageIcon";
import { useOnClickOutside } from "../../../hooks/useOnClickOutside";
import { LanguageContext } from "../../../context/LanguageContext";

const LanguageChange = () => {
  const { setLanguage, language } = useContext(LanguageContext);
  const [langValue, setLangValue] = useState("en");
  const itemsRef = useRef();
  const customSelect = useRef();

  const openModal = () => {
    itemsRef.current.classList.toggle("open");
  };

  const closeModal = () => {
    itemsRef.current.classList.remove("open");
  };

  const setLang = (e) => {
    const value = e.target.innerHTML;
    localStorage.setItem("lang", value);
    setLangValue(value);
    setLanguage(value);
    closeModal();
  };

  useOnClickOutside(customSelect, closeModal);

  useEffect(() => {
    const lang = localStorage.getItem("lang");
    if (!!lang) {
      setLangValue(lang);
    }
  }, []);

  return (
    <div className="custom-select" ref={customSelect}>
      <div className="custom-select__main" onClick={() => openModal()}>
        <LanguageIcon />
        {langValue}
      </div>
      <ul className="custom-select__items-wrap" ref={itemsRef}>
        <li className="custom-select__item" onClick={(e) => setLang(e)}>
          uz
        </li>
        <li className="custom-select__item" onClick={(e) => setLang(e)}>
          ru
        </li>
        <li className="custom-select__item" onClick={(e) => setLang(e)}>
          en
        </li>
      </ul>
    </div>
  );
};

export default LanguageChange;
