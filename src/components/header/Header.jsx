import React, { useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import SearchIcon from "@mui/icons-material/Search";
import { logo } from "../../assets/index";
import { allItems } from "../../constants";
import HeaderBottom from "./HeaderBottom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const [showAll, setShowAll] = useState(false);
  const products = useSelector((state) => state.sliceReducer.products);

  return (
    <div className="w-full sticky top-0 z-50">
      <div className="w-full bg-black text-white px-4 py-3 flex items-center gap-4">
        <Link to="/">
          <div className="headerHover">
            <img className="w-24 mt-2 " src={logo} alt="logo" />
          </div>
        </Link>
        <div className="headerHover hidden mdl:inline-flex">
          <LocationOnIcon />
          <p className="text-sm text-lightText font-light flex flex-col">
            Deliver to {""}
            <span className="text-sm font-semibold -mt-1 text-whiteText">
              Atlanta
            </span>
          </p>
        </div>
        <div className="h-10 rounded-md hidden lgl:flex flex-grow relative">
          <span
            onClick={() => setShowAll(!showAll)}
            className="w-14 h-full bg-gray-200 hover:bg-gray-300 border-2 cursor-point duration-300 text-sm text-black font-titleFont flex items-center justify-center rounded-tl-md rounded-bl-md ">
            All{" "}
            <span>
              <ArrowDropDownIcon />
            </span>
          </span>
          {showAll && (
            <div>
              <ul className="absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white border-[1px] border-black text-black p-2 flex-col gap-1 z-50">
                {allItems.map((item) => (
                  <li
                    className="text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent hover:border-b-black cursor-pointer duration-200"
                    key={item._id}>
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <input
            className="h-full text-base text-black flex-grow outline-none border-none px-2"
            type="text"
          />
          <span className="w-12 h-full flex items-center justify-center bg-amazon_yellow hover:bg-[#f3a847] duration-300 text-black cursor-pointer rounded-tr-md rounded-br-md">
            <SearchIcon />
          </span>
        </div>
        <Link to="/signin">
          <div className="flex flex-col items-start justify-center headerHover">
            <p className="text-sm mdl:text-xs text-white mdl:text-lightText font-light">
              Hello, sign in
            </p>
            <p className="text-sm font-semibold -mt-1 text-whiteText hidden mdl:inline-flex">
              Accounts & Lists{""}
              <span>
                <ArrowDropDownIcon />
              </span>
            </p>
          </div>
        </Link>
        <div className="hidden lgl:flex flex-col items-start justify-center headerHover">
          <p className="text-xs text-lightText font-light">Returns</p>
          <p className="text-sm font-semibold -mt-1 text-whiteText ">
            & Orders
          </p>
        </div>
        <Link to="/basket">
          <div className="flex items-start jusify-center headerHover relative">
            <ShoppingBasketIcon />
            <p className="text-xs font-semibold mt-3 text-whiteText">
              Basket{" "}
              <span className="absolute text-xs -top-1 left-6 font-semibold p-1 h-4 bg-[#f3a847] text-black rounded-full flex justify-center items-center">
                {products.length > 0 ? products.length : 0}
              </span>
            </p>
          </div>
        </Link>
      </div>
      <HeaderBottom />
    </div>
  );
}

export default Header;
