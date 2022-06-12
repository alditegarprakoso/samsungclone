import React, { useState } from "react";
import samsungLogo from "../assets/img/samsung-logo.png";
import search from "../assets/img/search.svg";
import user from "../assets/img/user.png";
import cart from "../assets/img/cart.png";
import { Link } from "react-router-dom";

function Navigasi() {
  const [hamActive, setHamActive] = useState("");
  const [navActive, setNavActive] = useState("hidden");

  function toggleActive() {
    if (hamActive === "hamburger-active") {
      setHamActive("");
      setNavActive("hidden");
    } else {
      setHamActive("hamburger-active");
      setNavActive("");
    }
  }

  return (
    <>
      <header className="bg-transparent top-0 left-0 w-full flex items-center">
        <div className="container">
          <div className="flex items-center justify-between relative">
            <div className="px-4 flex items-center w-full my-3">
              <button
                id="hamburger"
                name="hamburger"
                type="button"
                className={`block absolute right-4 lg:hidden ${hamActive}`}
                onClick={() => toggleActive()}
              >
                <span className="w-[30px] h-[2px] my-2 block bg-black transition duration-300 ease-in-out origin-top-left"></span>
                <span className="w-[30px] h-[2px] my-2 block bg-black transition duration-300 ease-in-out"></span>
                <span className="w-[30px] h-[2px] my-2 block bg-black transition duration-300 ease-in-out origin-bottom-left"></span>
              </button>
              <Link to="/" className="block mr-12">
                <img
                  src={samsungLogo}
                  alt="Samsung Logo"
                  className="w-[130px]"
                />
              </Link>
              <div
                id="nav-menu"
                className={`${navActive} absolute p-5 bg-white shadow-lg rounded-lg max-w-[100%] w-full right-0 top-full lg:flex lg:justify-between lg:static lg:max-w-full lg:shadow-none lg:rounded-none z-50`}
              >
                <ul className="block lg:flex lg:items-center font-bold">
                  <li className="group">
                    <a
                      href="#home"
                      className="text-xs text-black px-3 py-1 hover:text-white hover:bg-black hover:rounded-full"
                    >
                      Mobile
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#home"
                      className="text-xs text-black px-3 py-1 hover:text-white hover:bg-black hover:rounded-full"
                    >
                      TV & AV
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#home"
                      className="text-xs text-black px-3 py-1 hover:text-white hover:bg-black hover:rounded-full"
                    >
                      Home Appliances
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#home"
                      className="text-xs text-black px-3 py-1 hover:text-white hover:bg-black hover:rounded-full"
                    >
                      Smart Home
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#home"
                      className="text-xs text-black px-3 py-1 hover:text-white hover:bg-black hover:rounded-full"
                    >
                      IT
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#home"
                      className="text-xs text-black px-3 py-1 hover:text-white hover:bg-black hover:rounded-full"
                    >
                      Promotion
                    </a>
                  </li>
                </ul>
                <ul className="block lg:flex lg:items-center font-bold">
                  <li className="group">
                    <a
                      href="#home"
                      className="text-xs text-black px-3 py-1 hover:text-white hover:bg-black hover:rounded-full"
                    >
                      Explore
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#home"
                      className="text-xs text-black px-3 py-1 hover:text-white hover:bg-black hover:rounded-full"
                    >
                      Dukungan
                    </a>
                  </li>
                  <li className="group mr-6">
                    <a
                      href="#home"
                      className="text-xs text-black px-3 py-1 hover:text-white hover:bg-black hover:rounded-full"
                    >
                      For Business
                    </a>
                  </li>
                  <li className="group">
                    <a href="#home">
                      <img
                        src={search}
                        alt="Seacrh"
                        className="mx-2 w-[22px]"
                      />
                    </a>
                  </li>
                  <li className="group">
                    <a href="#home">
                      <img src={cart} alt="Cart" className="mx-2 w-[22px]" />
                    </a>
                  </li>
                  <li className="group">
                    <a href="#home">
                      <img src={user} alt="User" className="mx-2 w-[22px]" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navigasi;
