import React from "react";
import logo from "../assets/logo.svg";
import bell from "../assets/bell.svg";
import cart from "../assets/cart.svg";
import fav from "../assets/fvrt.svg";
import user from "../assets/contact.svg";
import srch from "../assets/srch.svg";

const categories = [
  "OFFERS",
  "EARRINGS",
  "DEVOTIONAL",
  "BANGLE",
  "BRACELET",
  "PLATINUM",
  "SOLITAIRE",
  "PENDANT",
  "RINGS",
  "NOSE PIN",
  "COUPLE BAND",
  "NECKLACE",
  "NAVARATNA",
];

const Header = () => {
  return (
    <header className="bg-nav">
      {/* TOP BAR */}
      <div className="flex items-center justify-between px-4 md:px-10 py-4 gap-4">
        {/* Logo */}
        <img
          src={logo}
          alt="Logo"
          className="h-8 md:h-15 shrink-0 cursor-pointer"
        />

        <div className="flex items-center flex-1 justify-end gap-6 md:gap-10   ">
            {/* Desktop Search */}
        <div className="relative flex-1 max-w-[520px] hidden sm:block">
          <input
            type="text"
            placeholder="Search Here"
            className="w-full pl-10 pr-4 py-2 bg-white text-black rounded-md outline-none border border-black"
          />
          <img
            src={srch}
            alt="search"
            className="absolute left-3 top-1/2 -translate-y-1/2 h-5"
          />
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4 md:gap-6 shrink-0">
          <img src={bell} alt="bell" className="h-5 md:h-6 cursor-pointer" />
          <img src={fav} alt="fav" className="h-5 md:h-6 cursor-pointer" />
          <img src={cart} alt="cart" className="h-5 md:h-6 cursor-pointer" />
          <img src={user} alt="user" className="h-5 md:h-6 cursor-pointer" />
        </div>
      </div>
        </div>

      {/* Mobile Search */}
      <div className="px-4 pb-3 sm:hidden">
        <div className="relative">
          <input
            type="text"
            placeholder="Search Here"
            className="w-full pl-10 pr-4 py-2 bg-white text-black rounded-md outline-none border border-black"
          />
          <img
            src={srch}
            alt="search"
            className="absolute left-3 top-1/2 -translate-y-1/2 h-5"
          />
        </div>
      </div>

      {/* CATEGORY BAR */}
      <nav className="px-4 md:px-10 border-b border-black overflow-x-auto no-scrollbar">
  <ul className="flex justify-evenly gap-6 text-sm text-black font-medium whitespace-nowrap">
    {categories.map((item) => (
      <li
        key={item}
        className="pb-3 cursor-pointer border-b-5 border-transparent hover:border-black transition-all"
      >
        {item}
      </li>
    ))}
  </ul>
</nav>




    </header>

    
  );
  
};

export default Header;
