import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../actions/productAction";

import GalaxyZFlip35G from "../assets/img/Galaxy Z Flip3 5G.png";
import GalaxyZFold35G from "../assets/img/Galaxy Z Fold3 5G.png";
import GalaxyS22plus from "../assets/img/GalaxyS22plus.jpg";
import GalaxyS22 from "../assets/img/S22.jpg";
import GalaxyS21plus from "../assets/img/S21plus.jpg";
import GalaxyS21 from "../assets/img/S21.jpg";
import note10 from "../assets/img/note10.jpg";
import galaxyA535G from "../assets/img/Galaxy A53 5G.webp";
import GalaxyA425G from "../assets/img/Galaxy A42 5G.jpg";
import { useNavigate } from "react-router-dom";

function Products() {
  let navigate = useNavigate();

  const handleDetail = (id) => {
    navigate(`/detail-product/${id}`);
  };

  const {
    getListProductsResult,
    getListProductsLoading,
    getListProductsError,
  } = useSelector((state) => state.ProductsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <div className="mb-[80px] container">
        <h1 className="text-4xl font-bold text-center my-8">Produk Kami</h1>
        {getListProductsResult ? (
          getListProductsResult.brands.map((brand) => {
            return (
              <div key={brand.id}>
                <div className="grid grid-flow-col gap-10 overflow-y-hidden p-5">
                  {brand.products.map((product) => (
                    <div
                      onClick={() => handleDetail(product.id)}
                      key={product.id}
                      className="card w-64 bg-slate-50 shadow-md hover:scale-[1.05] transition ease-out duration-300 cursor-pointer"
                    >
                      <div className="card-body items-center justify-center text-center">
                        <figure className="px-10 pt-10">
                          {product.name === "Galaxy Z Flip3 5G" && (
                            <img
                              src={GalaxyZFlip35G}
                              alt="Phone"
                              className="rounded-xl w-full"
                            />
                          )}
                          {product.name === "Galaxy Z Fold3 5G" && (
                            <img
                              src={GalaxyZFold35G}
                              alt="Phone"
                              className="rounded-xl w-full"
                            />
                          )}
                          {product.name === "Galaxy S22+" && (
                            <img
                              src={GalaxyS22plus}
                              alt="Phone"
                              className="rounded-xl w-full"
                            />
                          )}
                          {product.name === "Galaxy S22" && (
                            <img
                              src={GalaxyS22}
                              alt="Phone"
                              className="rounded-xl w-full"
                            />
                          )}
                          {product.name === "Galaxy S21+" && (
                            <img
                              src={GalaxyS21plus}
                              alt="Phone"
                              className="rounded-xl w-full"
                            />
                          )}
                          {product.name === "Galaxy S21" && (
                            <img
                              src={GalaxyS21}
                              alt="Phone"
                              className="rounded-xl w-full"
                            />
                          )}
                          {product.name === "Galaxy Note 10+" && (
                            <img
                              src={note10}
                              alt="Phone"
                              className="rounded-xl w-full"
                            />
                          )}
                          {product.name === "Galaxy Note 10" && (
                            <img
                              src={note10}
                              alt="Phone"
                              className="rounded-xl w-full"
                            />
                          )}
                          {product.name === "Galaxy A53 5G" && (
                            <img
                              src={galaxyA535G}
                              alt="Phone"
                              className="rounded-xl w-full"
                            />
                          )}
                          {product.name === "Galaxy A42 5G" && (
                            <img
                              src={GalaxyA425G}
                              alt="Phone"
                              className="rounded-xl w-full"
                            />
                          )}
                        </figure>
                        <h2 className="card-title">{product.name}</h2>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })
        ) : getListProductsLoading ? (
          <p>Loading...</p>
        ) : (
          <p>{getListProductsError ? getListProductsError : "Data Kosong"}</p>
        )}
      </div>
    </>
  );
}

export default Products;
