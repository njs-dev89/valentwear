const CART = "shopify_local_store__cart";
const CHECKOUT_ID = "shopify_local_store__checkout_id";

export const LocalStorageKeys = {
  CART,
  CHECKOUT_ID,
};

export function isCart(potentialCart) {
  return (
    potentialCart != null &&
    potentialCart.id != null &&
    potentialCart.webUrl != null &&
    potentialCart.lineItems != null &&
    potentialCart.type != null &&
    potentialCart.type.name === "Checkout" &&
    potentialCart.type.kind === "OBJECT"
  );
}

function set(key, value) {
  const isBrowser = typeof window !== "undefined";
  if (isBrowser) {
    window.localStorage.setItem(key, value);
  }
}

function get(key) {
  const isBrowser = typeof window !== "undefined";
  if (!isBrowser) {
    return null;
  }

  try {
    const item = window.localStorage.getItem(key);
    return item;
  } catch {
    return null;
  }
}

function getInitialCart() {
  const existingCartString = get(LocalStorageKeys.CART);
  if (existingCartString == null) {
    return null;
  }

  try {
    const existingCart = JSON.parse(existingCartString);
    if (!isCart(existingCart)) {
      return null;
    }

    return existingCart;
  } catch {
    return null;
  }
}

export const LocalStorage = {
  get,
  set,
  getInitialCart,
};
