import React from "react";
import webhomepage from "../assets/img/webhomepage.jpg";
import bgmobileqled from "../assets/img/bgmobileqled.jpg";

function TvAv() {
  return (
    <>
      <div className="relative mt-20 text-white">
        <picture>
          <source media="(max-width: 799px)" srcSet={bgmobileqled} />
          <img src={webhomepage} alt="BG Galaxy 22" />
        </picture>
        <div className="z-10 top-10 w-full absolute">
          <h1 className="text-4xl font-bold text-center mb-5">TV & AV</h1>
          <div className="text-center py-3 lg:justify-center grid grid-flow-col gap-3 overflow-y-hidden lg:overflow-y-visible">
            <span className="w-[125%] lg:w-full mx-5 text-sm lg:text-base font-bold underline underline-offset-8">
              NEO QLED
            </span>
            <span className="w-[125%] lg:w-full mx-5 text-sm lg:text-base font-bold">
              QLED
            </span>
            <span className="w-[125%] lg:w-full mx-5 text-sm lg:text-base font-bold">
              The Frame
            </span>
            <span className="w-[125%] lg:w-full mx-5 text-sm lg:text-base font-bold">
              Crystal UHD
            </span>
          </div>
        </div>
        <div className="text-center z-10 bottom-8 lg:left-[28%] absolute">
          <h1 className="text-4xl font-bold text-center mb-5">
            Greatness never ends, but evolves
          </h1>
          <button className="text-black mr-5 btn-sm font-semibold px-5 bg-white rounded-full">
            See All
          </button>
          <a href="#home" className="underline text-sm font-semibold">
            Learn More
          </a>
        </div>
      </div>
    </>
  );
}

export default TvAv;
