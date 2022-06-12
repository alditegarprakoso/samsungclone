import React from "react";
import promoJuni from "../assets/img/promo-juni.png";
import samsungFold from "../assets/img/samsungfold.png";
import qn from "../assets/img/QN.png";
import ac from "../assets/img/ac.png";
import kulkas from "../assets/img/kulkas.png";

function Promo() {
  return (
    <>
      <div className="container my-5">
        <h1 className="text-4xl font-bold text-center mt-10 mb-3">
          Promo Terbaru
        </h1>
        <p className="text-center font-semibold mb-8">
          Dapatkan info terbaru disini
        </p>
        <div className="scrollbar-none text-center grid grid-flow-col gap-3 overflow-y-hidden mb-10 lg:overflow-y-visible">
          <span className="text-sm mx-5 w-full lg:text-base font-bold underline underline-offset-8">
            Semangat Juni
          </span>
          <span className="text-sm mx-5 w-full lg:text-base font-bold">
            Our Recommendations
          </span>
          <span className="text-sm mx-5 w-full lg:text-base font-bold">
            Mobile
          </span>
          <span className="text-sm mx-5 w-full lg:text-base font-bold">
            TV & AV
          </span>
          <span className="text-sm mx-5 w-full lg:text-base font-bold">
            Home Appliance
          </span>
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="group text-center cursor-pointer relative">
            <div className="absolute md:left-[26%] lg:top-5 lg:left-[20%] z-10 justify-center">
              <p className="font-bold text-2xl mb-3">
                Semangat Baru dengan Promo <br /> terbaik
              </p>
              <span className="group-hover:hidden ease-out duration-300">
                Dapatkan potongan Harga Hingga 38%
              </span>
              <button className="mx-auto hidden text-white btn-sm px-5 bg-black font-semibold rounded-full group-hover:block ease-out duration-300 hover:scale-[1.1]">
                Beli Sekarang
              </button>
            </div>
            <img
              src={promoJuni}
              alt="Promo Juni"
              className="hover:scale-[1.1] ease-out duration-300 mt-20 md:mt-0 lg:mt-0"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 lg:mt-0">
            <div className="card bg-zinc-200 text-center cursor-pointer group">
              <div className="card-body items-center justify-center px-3">
                <img
                  src={samsungFold}
                  alt="Samsung Fold"
                  className="object-cover w-[60%] mb-5"
                />
                <h2 className="font-semibold mb-5">
                  Dapatkan cashback hingga Rp3 juta
                </h2>
                <p className="text-xs group-hover:hidden ease-out duration-300">
                  Galaxy Z Fold3 5G
                </p>
                <button className="mx-auto hidden text-white btn-sm px-5 bg-black font-semibold rounded-full group-hover:block ease-out duration-300 hover:scale-[1.1]">
                  Beli Sekarang
                </button>
              </div>
            </div>
            <div className="card bg-zinc-200 text-center cursor-pointer group">
              <div className="card-body items-center justify-center px-3">
                <img src={qn} alt="QN" className="object-cover w-[60%] mb-5" />
                <h2 className="font-semibold mb-5">
                  Dapatkan Samsung Galaxy S22 Ultra dan modem internet gratis
                </h2>
                <p className="text-xs group-hover:hidden ease-out duration-300">
                  Dengan pembelian Samsung Neo QLED 8K 85" QN900B
                </p>
                <button className="mx-auto hidden text-white btn-sm px-5 bg-black font-semibold rounded-full group-hover:block ease-out duration-300 hover:scale-[1.1]">
                  Beli Sekarang
                </button>
              </div>
            </div>
            <div className="card bg-zinc-200 text-center cursor-pointer group">
              <div className="card-body items-center justify-center px-3">
                <img src={ac} alt="AC" className="object-cover w-[60%] mb-5" />
                <h2 className="font-semibold mb-5">
                  Gratis Pipa AC senilai Rp500k dan perbaikan *khusus
                  Jabodetabek
                </h2>
                <p className="text-xs group-hover:hidden ease-out duration-300">
                  AR13 AC 1.5PK with WindFree
                </p>
                <button className="mx-auto hidden text-white btn-sm px-5 bg-black font-semibold rounded-full group-hover:block ease-out duration-300 hover:scale-[1.1]">
                  Beli Sekarang
                </button>
              </div>
            </div>
            <div className="card bg-zinc-200 text-center cursor-pointer group">
              <div className="card-body items-center justify-center px-3">
                <img
                  src={kulkas}
                  alt="Kulkas"
                  className="object-cover w-[60%] mb-5"
                />
                <h2 className="font-semibold mb-5">
                  Dapatkan panel gratis dan microwave Samsung Bespoke
                </h2>
                <p className="text-xs group-hover:hidden ease-out duration-300">
                  Dengan pembelian kulkas Samsung BOSPOKE tipe apa saja
                </p>
                <button className="mx-auto hidden text-white btn-sm px-5 bg-black font-semibold rounded-full group-hover:block ease-out duration-300 hover:scale-[1.1]">
                  Beli Sekarang
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Promo;
