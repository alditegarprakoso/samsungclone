import React from "react";
import bggalaxy22 from "../assets/img/galaxy22.jpg";
import bgs22mobile from "../assets/img/bgs22mobile.jpg";

function Mobile() {
  return (
    <>
      <div className="relative mt-20">
        <picture>
          <source media="(max-width: 799px)" srcSet={bgs22mobile} />
          <img src={bggalaxy22} alt="BG Galaxy 22" />
        </picture>
        <div className="z-10 top-5 absolute w-full">
          <h1 className="text-4xl font-bold text-center mb-5">Mobile</h1>
          <div className="text-center lg:justify-center grid grid-flow-col gap-3 overflow-y-hidden lg:overflow-y-visible py-3">
            <span className="w-[125%] lg:w-full text-sm lg:text-base mr-20 font-bold underline underline-offset-8">
              Galaxy S22 | S22+
            </span>
            <span className="w-[125%] lg:w-full text-sm lg:text-base mr-20 font-bold">
              Galaxy A53 5G
            </span>
            <span className="w-[125%] lg:w-full text-sm lg:text-base mr-28 font-bold">
              Galaxy Tab S8|S8+|S8 Ultra
            </span>
            <span className="w-[125%] lg:w-full text-sm lg:text-base mr-20 font-bold">
              Galaxy Z Fold3 5G
            </span>
            <span className="w-[125%] lg:w-full text-sm lg:text-base mr-20 font-bold">
              Galaxy S21 FE 5G
            </span>
          </div>
        </div>
        <div className="text-center bottom-10 left-12 z-10 lg:bottom-8 lg:left-[38%] absolute">
          <h1 className="text-4xl font-bold text-center mb-8">
            Galaxy S22 | S22+
          </h1>
          <button className="text-white mr-5 btn-sm font-semibold px-5 bg-black rounded-full">
            Buy Now
          </button>
          <a href="#home" className="underline text-sm font-semibold">
            Learn More
          </a>
        </div>
      </div>
    </>
  );
}

export default Mobile;
