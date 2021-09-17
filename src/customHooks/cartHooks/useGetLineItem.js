import { useCartItems } from "./useCartItems";

export function useGetLineItem() {
  const cartItems = useCartItems();

  function getLineItem(variantId) {
    if (cartItems.length < 1) {
      return null;
    }

    const item = cartItems.find((cartItem) => {
      return cartItem.variant.id === variantId;
    });

    if (item == null) {
      return null;
    }

    return item;
  }

  return getLineItem;
}
