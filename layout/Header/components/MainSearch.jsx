import React from "react";
import SearchIcon from "../../../components/icons/SearchIcon";

const MainSearch = () => {
  return (
    <div className="search">
      <div className="search__main">
        <SearchIcon />
      </div>
      <div className="search__input">
        <input type="text" />
      </div>
    </div>
  );
};

export default MainSearch;
