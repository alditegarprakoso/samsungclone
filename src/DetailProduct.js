import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetailProducts } from "./actions/productAction";

import Navigasi from "./components/Navigasi";
import Footer from "./components/Footer";

import GalaxyZFlip35G from "./assets/img/Galaxy Z Flip3 5G.png";
import GalaxyZFold35G from "./assets/img/Galaxy Z Fold3 5G.png";
import GalaxyS22plus from "./assets/img/GalaxyS22plus.jpg";
import GalaxyS22 from "./assets/img/S22.jpg";
import GalaxyS21plus from "./assets/img/S21plus.jpg";
import GalaxyS21 from "./assets/img/S21.jpg";
import note10 from "./assets/img/note10.jpg";
import galaxyA535G from "./assets/img/Galaxy A53 5G.webp";
import GalaxyA425G from "./assets/img/Galaxy A42 5G.jpg";

function DetailProduct() {
  document.title = "Detail Product";
  const { id } = useParams();

  let navigate = useNavigate();

  const {
    getDetailProductResult,
    getDetailProductLoading,
    getDetailProductError,
  } = useSelector((state) => state.ProductsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetailProducts(id));
  }, [dispatch]);

  return (
    <>
      <Navigasi />
      <section className="container">
        {getDetailProductResult ? (
          getDetailProductResult.products.map((product) => (
            <div key={product.id} className="mt-10">
              <div className="flex justify-between mb-10">
                <div>
                  <p className="font-bold text-lg text-blue-400 mb-3">
                    New Arrival
                  </p>
                  <p className="font-bold text-xl">Samsung {product.name}</p>
                </div>
                <div>
                  <p className="font-bold text-lg text-right mb-3">
                    Mulai dari
                  </p>
                  <p className="font-bold text-xl text-blue-400">
                    Rp. 10.000.000
                  </p>
                </div>
              </div>
              <div className="w-full my-5">
                {product.name === "Galaxy Z Flip3 5G" && (
                  <img
                    src={GalaxyZFlip35G}
                    alt="Phone"
                    className="rounded-xl w-full h-[70vh] object-contain"
                  />
                )}
                {product.name === "Galaxy Z Fold3 5G" && (
                  <img
                    src={GalaxyZFold35G}
                    alt="Phone"
                    className="rounded-xl w-full h-[70vh] object-contain"
                  />
                )}
                {product.name === "Galaxy S22+" && (
                  <img
                    src={GalaxyS22plus}
                    alt="Phone"
                    className="rounded-xl w-full h-[70vh] object-contain"
                  />
                )}
                {product.name === "Galaxy S22" && (
                  <img
                    src={GalaxyS22}
                    alt="Phone"
                    className="rounded-xl w-full h-[70vh] object-contain"
                  />
                )}
                {product.name === "Galaxy S21+" && (
                  <img
                    src={GalaxyS21plus}
                    alt="Phone"
                    className="rounded-xl w-full h-[70vh] object-contain"
                  />
                )}
                {product.name === "Galaxy S21" && (
                  <img
                    src={GalaxyS21}
                    alt="Phone"
                    className="rounded-xl w-full h-[70vh] object-contain"
                  />
                )}
                {product.name === "Galaxy Note 10+" && (
                  <img
                    src={note10}
                    alt="Phone"
                    className="rounded-xl w-full h-[70vh] object-contain"
                  />
                )}
                {product.name === "Galaxy Note 10" && (
                  <img
                    src={note10}
                    alt="Phone"
                    className="rounded-xl w-full h-[70vh] object-contain"
                  />
                )}
                {product.name === "Galaxy A53 5G" && (
                  <img
                    src={galaxyA535G}
                    alt="Phone"
                    className="rounded-xl w-full h-[70vh] object-contain"
                  />
                )}
                {product.name === "Galaxy A42 5G" && (
                  <img
                    src={GalaxyA425G}
                    alt="Phone"
                    className="rounded-xl w-full h-[70vh] object-contain"
                  />
                )}
              </div>
              <div className="w-full my-5">
                <h1 className="text-center my-10 text-2xl font-bold">
                  Samsung {product.name}
                </h1>
                <div className="collapse collapse-arrow border-t-2 border-base-300">
                  <input type="checkbox" className="peer" />
                  <div className="collapse-title text-xl font-medium">
                    Fitur Utama
                  </div>
                  <div className="collapse-content">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="mb-5 w-[80%]">
                        <h1 className="text-base font-medium">
                          Pilih favoritmu dari 3 model yang tersedia
                        </h1>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Ducimus excepturi iusto nisi quo cupiditate vero
                          odio. Quasi magni quis porro!
                        </p>
                      </div>
                      <div className="mb-5 w-[80%]">
                        <h1 className="text-base font-medium">
                          Didampingi dengan Sistem terbaru
                        </h1>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Ducimus excepturi iusto nisi quo cupiditate vero
                          odio. Quasi magni quis porro!
                        </p>
                      </div>
                      <div className="mb-5 w-[80%]">
                        <h1 className="text-base font-medium">
                          Tuangkan ide kreatif Anda di Clip Studio Paint
                        </h1>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Ducimus excepturi iusto nisi quo cupiditate vero
                          odio. Quasi magni quis porro!
                        </p>
                      </div>
                      <div className="mb-5 w-[80%]">
                        <h1 className="text-base font-medium">
                          Dengan fitur Auto Framing saat merekam video
                        </h1>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Ducimus excepturi iusto nisi quo cupiditate vero
                          odio. Quasi magni quis porro!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="collapse collapse-arrow border-t-2 border-b-2 border-base-300">
                  <input type="checkbox" className="peer" />
                  <div className="collapse-title text-xl font-medium">
                    Spesifikasi
                  </div>
                  <div className="collapse-content">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="mb-5 w-[80%]">
                        <h1 className="text-base font-medium">
                          Pilih favoritmu dari 3 model yang tersedia
                        </h1>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Ducimus excepturi iusto nisi quo cupiditate vero
                          odio. Quasi magni quis porro!
                        </p>
                      </div>
                      <div className="mb-5 w-[80%]">
                        <h1 className="text-base font-medium">
                          Didampingi dengan Sistem terbaru
                        </h1>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Ducimus excepturi iusto nisi quo cupiditate vero
                          odio. Quasi magni quis porro!
                        </p>
                      </div>
                      <div className="mb-5 w-[80%]">
                        <h1 className="text-base font-medium">
                          Tuangkan ide kreatif Anda di Clip Studio Paint
                        </h1>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Ducimus excepturi iusto nisi quo cupiditate vero
                          odio. Quasi magni quis porro!
                        </p>
                      </div>
                      <div className="mb-5 w-[80%]">
                        <h1 className="text-base font-medium">
                          Dengan fitur Auto Framing saat merekam video
                        </h1>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Ducimus excepturi iusto nisi quo cupiditate vero
                          odio. Quasi magni quis porro!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <h1 className="text-2xl my-10 text-center font-bold">
                  Ayo Miliki Sekarang Samsung {product.name}
                </h1>
                <div className="flex justify-center">
                  <button className="btn btn-primary">Beli Sekarang</button>
                </div>
              </div>
            </div>
          ))
        ) : getDetailProductLoading ? (
          <p>Loading...</p>
        ) : (
          <p>{getDetailProductError ? getDetailProductError : "Data Kosong"}</p>
        )}
      </section>
      <Footer />
    </>
  );
}

export default DetailProduct;
