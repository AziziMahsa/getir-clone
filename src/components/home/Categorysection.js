import React from "react";
import Categories from "./Categories";

function Categorysection() {
  return (
    <div className="flex flex-col gap-4  md:p-10 bg-white p-2 ">
      <span className=" text-sm text-gray-800 font-semibold ">Kategoriler</span>
      <div className=" flex flex-wrap  ">
        <Categories />
      </div>
    </div>
  );
}

export default Categorysection;
