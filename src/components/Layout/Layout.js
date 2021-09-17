import React, { useState } from "react";
import CartView from "../Cart/CartView";
import CartDrawer from "./CartDrawer";
import LinksDrawer from "./LinksDrawer";
import Navbar from "./Navbar";

function Layout({ children }) {
  const [cartOpen, setCartOpen] = useState(false);
  const [linkDrawerOpen, setLinkDrawerOpen] = useState(false);
  return (
    <div>
      <Navbar setCartOpen={setCartOpen} setLinkDrawerOpen={setLinkDrawerOpen} />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)}>
        <CartView />
      </CartDrawer>
      <LinksDrawer
        open={linkDrawerOpen}
        onClose={() => setLinkDrawerOpen(false)}
      >
        Link Drawer Content
      </LinksDrawer>
      <div className="max-w-screen-xl mx-auto mt-20 xl:px-0 px-8">
        {children}
      </div>
    </div>
  );
}

export default Layout;
