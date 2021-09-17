import { useContext } from "react";
import { Context } from "../../context/cartContext";

export function useCartItems() {
  const { cart } = useContext(Context);
  if (!cart || !Array.isArray(cart.lineItems)) {
    return [];
  }

  return cart.lineItems;
}
