import "./App.css";
import "../src/assets/js/script.js";

import Navigasi from "./components/Navigasi";
import CarouselComponent from "./components/Carousel";
import Promo from "./components/Promo";
import Mobile from "./components/Mobile";
import TvAv from "./components/TvAv";
import HomeAppliances from "./components/HomeAppliances";
import Explore from "./components/Explore";
import Footer from "./components/Footer";
import Products from "./components/Products";

function App() {
  return (
    <>
      <Navigasi />
      <CarouselComponent />
      <Products />
      <Promo />
      <Mobile />
      <TvAv />
      <HomeAppliances />
      <Explore />
      <Footer />
    </>
  );
}

export default App;
