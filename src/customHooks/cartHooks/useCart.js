import { useContext } from "react";
import { Context } from "../../context/cartContext";

export function useCart() {
  const { cart } = useContext(Context);
  return cart;
}
