import React, { useEffect, useState } from "react";
import axios from "axios";
import NavLink from "./NavLink";

const Nav = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await axios.get("https://smart-api-v2.main-gate.appx.uz/room");
    setData(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ul className="nav">
      {data.map((item) => (
        <NavLink key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default Nav;
