import React from "react";
import explore from "../assets/img/explore.jpg";

function Explore() {
  return (
    <>
      <div className="container">
        <h1 className="text-4xl font-bold text-center mb-14 hover:cursor-pointer hover:underline hover:underline-offset-8 transition ease-in-out duration-300">
          Explore #DoWhatYouCant
        </h1>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="group text-center cursor-pointer relative group">
            <img
              src={explore}
              alt="Explore"
              className="group-hover:scale-[1.03] ease-out duration-300 rounded-lg"
            />
          </div>
          <div>
            <div className="flex items-center font-bold border-t-2 p-3 border-black mt-6">
              <span className="mr-8">01</span>
              <div>
                <p className="font-bold text-2xl mb-3">
                  Curate Your Vibe With Bold Galaxy S22 Phone Accessories
                </p>
                <span className="underline underline-offset-4 font-semibold text-sm">
                  Learn More
                </span>
                <hr className="mt-5" />
              </div>
            </div>
            <div className="flex items-center font-bold my-6 p-3">
              <span className="mr-8">02</span>
              <div>
                <p className="font-bold text-2xl mb-3">
                  5 Ways to Make This Year's Holiday Better Than Ever
                </p>
              </div>
            </div>
            <div className="flex items-center font-bold my-6 p-3">
              <span className="mr-8">03</span>
              <div>
                <p className="font-bold text-2xl mb-3">
                  Together for tomorrow Samsung @ CES 2022
                </p>
              </div>
            </div>
            <div className="flex items-center font-bold my-6 p-3">
              <span className="mr-8">04</span>
              <div>
                <p className="font-bold text-2xl mb-3">
                  How Bespoke Suits Every Lifestyle
                </p>
              </div>
            </div>
            <div className="flex items-center font-bold my-6 p-3">
              <span className="mr-8">05</span>
              <div>
                <p className="font-bold text-2xl mb-3">
                  How to Adapt to the New Hybrid Work World and Stay Sane
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-4xl font-bold text-center mt-14 mb-10">
            Cari produk Samsung lainnya?
          </h1>
          <div className="form-control w-full lg:w-[30%] mx-auto">
            <div className="input-group flex justify-around items-center bg-gray-50 border border-gray-900 rounded-full px-5 py-1 mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search Keyword"
                className="bg-gray-50 w-full py-2 text-black"
              />
            </div>
          </div>
          <div className="lg:flex justify-center grid grid-cols-2 gap-2 mb-5">
            <div>
              <p className="py-2 px-5 bg-gray-50 text-sm rounded-full border">
                Galaxy S22+
              </p>
            </div>
            <div>
              <p className="py-2 px-5 bg-gray-50 text-sm rounded-full border">
                Galaxy Tab S8 G
              </p>
            </div>
            <div>
              <p className="py-2 px-5 bg-gray-50 text-sm rounded-full border">
                Neo QLED
              </p>
            </div>
            <div>
              <p className="py-2 px-5 bg-gray-50 text-sm rounded-full border">
                Galaxy A73 5G
              </p>
            </div>
          </div>
        </div>
        <div className="text-xs mt-20 ml-8">
          <p className="mb-3">*Image simulated for illustrative purpose.</p>
          <p className="mb-3">
            **Color and model availability may vary depending on country or
            carrier.
          </p>
          <p className="mb-3">
            ***Galaxy A53 5G is rated as IP67. Based on test conditions for
            submersion in up to 1 meter of fresh water for up to 30 minutes.
            Safe against low water pressure only.
          </p>
          <p className="mb-3">*Features Galaxy S22+</p>
          <p className="mb-3">
            *Image of Galaxy Z Fold3 5G, Galaxy Z Flip3 5G and S Pen Fold
            Edition simulated for illustration purposes.
          </p>
          <p className="mb-3">
            *Image of two Galaxy Z Fold3 5G phones and S Pen Fold Edition
            simulated for illustration purposes.
          </p>
          <p className="mb-3">
            *The S pen Fold Edition sold separately and is only compatible with
            Galaxy Z Fold3 5G.
          </p>
        </div>
      </div>
    </>
  );
}

export default Explore;
