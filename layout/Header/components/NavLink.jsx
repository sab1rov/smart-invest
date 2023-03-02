import React, { useContext, useRef } from "react";
import Link from "next/link";
import { LanguageContext } from "../../../context/LanguageContext";
import ArrowlineIcon from "../../../components/icons/ArrowlineIcon";

const NavLink = ({ item }) => {
  const { name, name_ru, name_uz, catalogs } = item;
  const showDiv = useRef(null);
  const { language } = useContext(LanguageContext);

  const closeModal = () => {};
  return (
    <li className="nav__link-item">
      <p className="nav__link-title">
        {language == "uz" ? name_uz : language == "ru" ? name_ru : name}
      </p>

      {catalogs.length > 0 && (
        <div className="nav-sub" ref={showDiv}>
          <ul className="nav-sub__wrap">
            {catalogs?.map((item) => (
              <li key={item?.id} className="nav-sub__item" onClick={closeModal}>
                <Link
                  href={`catalog/${item?.api_name}`}
                  className="nav-sub__link nav__link"
                >
                  <ArrowlineIcon />
                  {language == "uz"
                    ? item?.name_uz
                    : language == "ru"
                    ? item?.name_ru
                    : item?.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};

export default NavLink;
