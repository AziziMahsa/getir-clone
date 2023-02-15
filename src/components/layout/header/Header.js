import React from "react";
import Navbar from "./Navbar";

function Header() {
  return (
    <div className="w-full bg-violet-800 top-0 left-0 h-fit  items-center ">
      <Navbar />
      <div className="py-4 md:hidden flex items-center justify-center bg-violet-600">
        <span className="text-yellow-400 text-semibold text-3xl">getir</span>
      </div>
    </div>
  );
}

export default Header;
