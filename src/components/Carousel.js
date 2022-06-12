import React from "react";
import carousel1 from "../assets/img/carousel 1.mp4";
import carousel2 from "../assets/img/carousel 2.jpg";
import carousel3 from "../assets/img/carousel 3.jpg";
import carousel4 from "../assets/img/carousel 4.jpg";

import slidemobile1 from "../assets/img/slidemobile1.mp4";
import slidemobile2 from "../assets/img/slidemobile2.jpg";
import slidemobile3 from "../assets/img/slidemobile3.jpg";
import slidemobile4 from "../assets/img/slidemobile4.jpg";

function CarouselComponent() {
  return (
    <>
      <div className="carousel w-full h-[90vh]">
        <div id="slide1" className="carousel-item relative w-full items-center">
          <div className="absolute z-10 top-12 left-20 text-center md:top-20 md:left-[27%] lg:top-16 lg:left-[50%] lg:text-left">
            <h1 className="text-3xl md:text-5xl mb-5 font-semibold">
              Galaxy S22 Ultra
            </h1>
            <p className="text-base mb-1">Get up to Rp2 Mio Off*</p>
            <span className="text-sm">Period: 1-30 June 2022</span>
            <div className="mt-5">
              <button className="text-white lg:mr-5 mb-3 btn-sm font-semibold px-5 bg-black rounded-full">
                Buy Now
              </button>
              <p
                href="#home"
                className="underline text-sm font-semibold lg:inline-block"
              >
                Learn More
              </p>
            </div>
          </div>
          <video
            autoPlay
            muted
            loop
            className="hidden md:block h-full object-cover w-full"
          >
            <source src={carousel1} type="video/mp4" />
          </video>
          <video
            autoPlay
            muted
            loop
            className="block md:hidden h-full object-cover w-full"
          >
            <source src={slidemobile1} type="video/mp4" />
          </video>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full items-center">
          <div className="absolute z-10 top-10 text-center md:w-[50%] md:top-[30%] lg:w-auto lg:top-[40%] lg:left-[8%] text-white">
            <h1 className="text-4xl lg:text-5xl mb-5 font-semibold">
              Let's Do Neo QLED 8K
            </h1>
            <p className="text-base mb-1 px-3 lg:p-0">
              Get Cashback up to 15 Mio and free gift worth up to 18.5 Mio
            </p>
            <span className="text-sm">Period: 8 June - 31 July 2022</span>
            <div className="mt-5">
              <button className="text-black btn-sm px-5 bg-white font-semibold rounded-full">
                Buy Now
              </button>
            </div>
          </div>
          <picture className="h-full w-full">
            <source media="(max-width: 799px)" srcSet={slidemobile2} />
            <img
              src={carousel2}
              className="h-full object-cover w-full"
              alt="carousel-item"
            />
          </picture>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full items-center">
          <div className="absolute text-center z-10 top-10 md:top-[30%] md:left-[13%] lg:text-left lg:top-24 lg:right-[16%] text-white lg:w-[35%]">
            <h1 className="text-4xl p-2 lg:p-0 lg:text-5xl mb-5 font-semibold">
              Part Time Assistant, Full Time Fridge
            </h1>
            <p className="text-base mb-2 px-2 lg:px-0">
              Get Cashback 1.1 Mio and 0% installment up to 24 months
            </p>
            <span className="text-sm">Period: 1-30 June 2022</span>
            <div className="mt-5">
              <button className="text-black btn-sm px-5 bg-white font-semibold rounded-full">
                Buy Now
              </button>
            </div>
          </div>
          <picture className="h-full w-full">
            <source media="(max-width: 799px)" srcSet={slidemobile3} />
            <img
              src={carousel3}
              className="h-full object-cover w-full"
              alt="carousel-item"
            />
          </picture>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full items-center">
          <div className="absolute text-center lg:text-left md:top-[20%] md:left-[-5%] z-10 top-12 lg:top-[30%] lg:left-[8%] text-white">
            <h1 className="text-4xl lg:text-5xl mb-5 font-semibold">
              Q-Series Soundbar
            </h1>
            <p className="text-base mb-5 px-24 lg:px-0">
              Get up to 3Mio off and free gift worth up to 15.9 Mio
            </p>
            <span className="text-sm">Period: 28 May - 12 Jun 2022</span>
            <div className="mt-5">
              <button className="text-white btn-sm px-5 bg-black font-semibold rounded-full">
                Pre-order now
              </button>
            </div>
          </div>
          <picture className="h-full w-full">
            <source media="(max-width: 799px)" srcSet={slidemobile4} />
            <img
              src={carousel4}
              className="h-full object-cover w-full"
              alt="carousel-item"
            />
          </picture>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default CarouselComponent;
