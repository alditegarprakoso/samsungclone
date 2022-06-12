import React from "react";
import bospoke from "../assets/img/bespoke.jpg";
import bgbospokemobile from "../assets/img/bgbospokemobile.jpg";

function HomeAppliances() {
  return (
    <>
      <div className="relative my-20">
        <picture>
          <source media="(max-width: 799px)" srcSet={bgbospokemobile} />
          <img src={bospoke} alt="BG Galaxy 22" />
        </picture>
        <div className="z-10 top-10 w-full absolute">
          <h1 className="text-4xl font-bold text-center mb-5">
            Home Appliances
          </h1>
          <div className="text-center lg:justify-center scrollbar-none grid grid-flow-col gap-3 overflow-y-hidden lg:overflow-y-visible">
            <span className="mx-5 text-base font-bold underline underline-offset-8">
              BESPOKE
            </span>
            <span className="mx-5 text-base font-bold">EcoBubble</span>
            <span className="mx-5 text-base font-bold">SpaceMax</span>
            <span className="mx-5 text-base font-bold">Wind-Free</span>
            <span className="mx-5 text-base font-bold">AirDresser</span>
          </div>
        </div>
        <div className="text-center z-10 bottom-8 lg:left-[28%] absolute">
          <h1 className="text-4xl font-bold text-center">
            Designed for you, by you
          </h1>
          <p className="my-4">
            Begin your BESPOKE experience by designing a set of fridges that's
            uniquely you.
          </p>
          <button className="text-white mr-5 btn-sm font-semibold px-5 bg-black rounded-full">
            Customize yours
          </button>
          <a href="#home" className="underline text-sm font-semibold">
            Learn More
          </a>
        </div>
      </div>
    </>
  );
}

export default HomeAppliances;
