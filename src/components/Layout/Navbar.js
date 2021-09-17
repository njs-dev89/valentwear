import React from "react";
import { FiMenu, FiSearch, FiShoppingCart } from "react-icons/fi";

function Navbar({ setCartOpen, setLinkDrawerOpen }) {
  return (
    <nav className="bg-black text-white text-base">
      <div className="max-w-screen-xl lg:mx-auto py-5 relative xl:px-0 px-8">
        <div className="absolute left-1/2 transform -translate-x-1/2">
          Valent
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex items-center">
            <FiMenu
              className="mr-6 text-xl cursor-pointer"
              onClick={() => setLinkDrawerOpen(true)}
            />
            <span>Categories</span>
            <span>Collections</span>
          </div>
          <div className="flex items-center">
            <span className="flex items-center mr-6">
              <FiSearch className="mr-1 text-xl" />
              Search
            </span>
            <FiShoppingCart
              className="text-xl cursor-pointer"
              onClick={() => setCartOpen(true)}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
