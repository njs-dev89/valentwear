import React, { useState, useEffect } from "react";
import { LocalStorage, LocalStorageKeys } from "../../utils/localStorage";
import ShopifyBuy from "shopify-buy";

export const Context = React.createContext({
  client: null,
  cart: null,
  domain: "",
  storefrontAccessToken: "",
  setCart: () => {
    throw Error("You forgot to wrap this in a Provider object");
  },
});

export function CommerceProvider({ storefrontAccessToken, domain, children }) {
  if (domain == null || storefrontAccessToken == null) {
    throw new Error(
      "Unable to build shopify-buy client object. Please make sure that your access token and domain are correct."
    );
  }

  const initialCart = LocalStorage.getInitialCart();
  const [cart, setCart] = useState(initialCart);

  const client = ShopifyBuy.buildClient({
    storefrontAccessToken,
    domain: domain,
  });

  useEffect(() => {
    async function getNewCart() {
      const newCart = await client.checkout.create();
      setCart(newCart);
    }

    async function refreshExistingCart(cartId) {
      try {
        const refreshedCart = await client.checkout.fetch(cartId);

        if (refreshedCart == null) {
          return getNewCart();
        }

        const cartHasBeenPurchased = Boolean(refreshedCart.completedAt);

        if (cartHasBeenPurchased) {
          getNewCart();
        } else {
          setCart(refreshedCart);
        }
      } catch (error) {
        console.error(error);
      }
    }

    if (cart == null) {
      getNewCart();
    } else {
      refreshExistingCart(String(cart.id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    LocalStorage.set(LocalStorageKeys.CART, JSON.stringify(cart));
  }, [cart]);

  return (
    <Context.Provider
      value={{
        client,
        cart,
        setCart,
        domain,
        storefrontAccessToken,
      }}
    >
      {children}
    </Context.Provider>
  );
}
