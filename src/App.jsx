import React from "react";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Promo from "./components/Promo";
import Products from "./components/Products";
import Installments from "./components/Installments";
import Social from "./components/Social";
import News from "./components/News";
import Contact from "./components/Contact.";

function App() {
  return (
    <div className="bg-gray-300">
      <Header />
      <Slider />
      <Promo />
      <Products />
      <Installments />
      <Social />
      <News />
      <Contact />
    </div>
  );
}

export default App;
