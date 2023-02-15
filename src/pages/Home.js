import React from "react";
import Card from "../components/home/Card";
import Categorysection from "../components/home/Categorysection";
import Dropdown from "../components/home/Dropdown";
import Appcover from "../components/home/getirapps/Appcover";
import Apps from "../components/home/getirapps/Apps";
import Location from "../components/home/Location/Location";
import Modal from "../components/home/Location/Modal";

function Home() {
  return (
    <>
      <div className="bg-white">
        <Location />
        <Categorysection />
        <Apps />
        <div className="flex flex-col gap-4 p-4 bg-gray-50 md:flex-row md:py-20 ">
          <Card />
        </div>
        <div className="flex  flex-col gap-3 p-5 md:p-10  md:flex-row  items-center bg-white md:w-full ">
          <div className="flex flex-col w-full md:gap-3 md:w-1/5">
            <span className="text-xl text-violet-800 font-light">
              Getiri indirin!
            </span>
            <Appcover isGray />
          </div>
          <Dropdown />
          <div className="w-24 invisible md:visible ">
            <img
              className=" invisible md:visible h-24 w-24 "
              alt="QR"
              src="/images/etbis (1).png"
            />
          </div>
        </div>
        <hr className="h-px mx-2 bg-violet-100 border-0 invisible md:visible  " />
        <Modal />
      </div>
    </>
  );
}
export default Home;
