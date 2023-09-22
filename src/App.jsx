import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Banner from "./components/home/Banner";
import Footer from "./components/footer/Footer";
import Products from "./components/home/Products";
import SignIn from "./pages/SignIn";
import Basket from "./pages/Basket";

function Home() {
  return (
    <div className="font-bodyFont">
      <Banner />
      <Products />
    </div>
  );
}

function App() {
  return (
    <div className="font-bodyFont bg-gray-100">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
