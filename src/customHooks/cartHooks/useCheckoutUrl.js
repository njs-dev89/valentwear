import { useContext } from "react";
import { Context } from "../../context/cartContext";

export function useCheckoutUrl() {
  const { cart } = useContext(Context);
  if (cart == null) {
    return null;
  }
  return cart.webUrl;
}
