import React from "react";
import CartItem from "./CartItem";
import { useCart, useCheckoutUrl } from "../../customHooks/cartHooks";

const CartView = () => {
  const checkoutUrl = useCheckoutUrl();
  const cart = useCart();
  const subTotal = cart?.subtotalPrice;
  const total = " - ";

  const items = cart?.lineItems ?? [];
  const isEmpty = items.length === 0;

  return (
    <div className="mb-48">
      {isEmpty ? (
        <>Your cart is empty</>
      ) : (
        <>
          {items.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              // todo update types
              currencyCode={item.variant?.priceV2?.currencyCode || "USD"}
            />
          ))}
          <div className="px-8 absolute block w-full bottom-0 pb-4 pt-4 bg-gray-100">
            <div className="flex justify-between">
              <p className="text-lg font-medium">Subtotal:</p>
              <p className="text-lg font-semibold">${subTotal}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-lg font-medium">Shipping:</p>
              <p className="text-lg font-semibold">Free </p>
            </div>
            <p className="mt-8 text-sm font-medium mb-2">
              Discounts and taxes calculated at checkout
            </p>
            {checkoutUrl && (
              <a
                href={checkoutUrl}
                className="block w-full flex justify-center bg-black text-white py-4 uppercase"
              >
                Checkout
              </a>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default CartView;
