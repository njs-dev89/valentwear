import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FiMenu, FiSearch, FiShoppingCart } from "react-icons/fi";

function Navbar({ setCartOpen, setLinkDrawerOpen }) {
  const router = useRouter();
  return (
    <nav
      className={`${
        router.pathname === "/" ? "bg-transparent" : "bg-black"
      } text-white text-base z-50`}
    >
      <div className="max-w-screen-xl lg:mx-auto py-5 relative xl:px-0 px-8">
        <div className="absolute left-1/2 transform -translate-x-1/2 text-lg font-medium tracking-widest">
          <Link href="/">
            <a>VALENT</a>
          </Link>
        </div>
        <div className="flex flex-row justify-between mt-12 md:mt-0">
          <div className="flex items-center">
            <FiMenu
              className="sm:mr-6 mr-2 sm:text-xl text-base cursor-pointer"
              onClick={() => setLinkDrawerOpen(true)}
            />
            <span className="sm:text-base text-sm">Categories</span>
            <Link href="/collections">
              <a className="ml-2 sm:text-base text-sm">Collections</a>
            </Link>
          </div>
          <div className="flex items-center">
            <span className="flex items-center sm:mr-6 mr-2">
              <FiSearch className="mr-1 sm:text-xl text-base" />
              <span className="sm:text-xl text-sm sm:inline hidden">
                Search
              </span>
            </span>
            <FiShoppingCart
              className="sm:text-xl text-base cursor-pointer"
              onClick={() => setCartOpen(true)}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
