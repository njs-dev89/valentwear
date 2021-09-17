import { useAddItemsToCart } from "./useAddItemsToCart";

export function useAddItemToCart() {
  const addItemsToCart = useAddItemsToCart();

  async function addItemToCart(variantId, quantity = 1, customAttributes) {
    const item = [{ variantId, quantity, customAttributes }];
    console.log(typeof item);
    return await addItemsToCart(item);
  }

  return addItemToCart;
}
