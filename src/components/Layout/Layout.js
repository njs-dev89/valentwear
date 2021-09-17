import React, { useContext } from "react";
import { UIContext } from "../../context/uiContext";
import CartView from "../Cart/CartView";
import CartDrawer from "./CartDrawer";
import Footer from "./Footer";
import LinksDrawer from "./LinksDrawer";
import Navbar from "./Navbar";
import { useRouter } from "next/router";
import Image from "next/image";
import LinkDrawerLinks from "./LinkDrawerLinks";

function Layout({ children }) {
  const {
    displayLinkDrawer,
    closeLinkDrawer,
    openLinkDrawer,
    displayCartDrawer,
    closeCartDrawer,
    openCartDrawer,
  } = useContext(UIContext);
  const router = useRouter();
  return (
    <div className="relative">
      <div className="relative">
        <Navbar
          setCartOpen={openCartDrawer}
          setLinkDrawerOpen={openLinkDrawer}
        />
        <CartDrawer open={displayCartDrawer} onClose={closeCartDrawer}>
          <CartView />
        </CartDrawer>
        <LinksDrawer open={displayLinkDrawer} onClose={closeLinkDrawer}>
          <LinkDrawerLinks />
        </LinksDrawer>
        {router.pathname === "/" ? (
          <div className="banner-image">
            <Image
              src="/homebanner.jpg"
              alt=""
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="max-w-screen-xl mx-auto mt-20 xl:px-0 px-8 z-50">
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
