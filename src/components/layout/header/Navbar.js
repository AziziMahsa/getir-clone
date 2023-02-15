import React from "react";
import Navitem from "./Navitem";
function Navbar() {
  return (
    <div className=" items-center  flex flex-row w-full    md:px-10 md:pt-2    ">
      <div className="flex flex-row">
        <Navitem title="Getir" link="/" hover />
        <Navitem title="getiryemek" link="/getiryemek" />
        <Navitem title="getirbuyuk" link="/getirbuyuk" />
        <Navitem title="getirsu" link="/getirsu" />
      </div>
    </div>
  );
}

export default Navbar;
