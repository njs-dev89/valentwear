import { useContext } from "react";
import { Context } from "../../context/cartContext";

export function useSetCart() {
  const { setCart } = useContext(Context);
  return setCart;
}
