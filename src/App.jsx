import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/header/Header";
import Banner from "./components/home/Banner";
import Footer from "./components/footer/Footer";
import Products from "./components/home/Products";

function Home() {
  return (
    <div className="font-bodyFont">
      <Header />
      <Banner />
      <Products />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="font-bodyFont bg-gray-100">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
