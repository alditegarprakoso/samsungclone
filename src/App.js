import "./App.css";
import "../src/assets/js/script.js";

import { Routes, Route } from "react-router-dom";
import DetailProduct from "./DetailProduct";
import Home from "./Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail-product/:id" element={<DetailProduct />} />
      </Routes>
    </>
  );
}

export default App;
