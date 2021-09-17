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
    <div className="relative h-full">
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
          <div className="px-4">
            <div>
              <p>Subtotal:</p>
              <p>{subTotal}</p>
              <p>Shipping:</p>
              <p> - </p>
              <p>Tax: </p>
              <p> - </p>
            </div>

            <br />
            <div>
              <div>Estimated Total:</div>
              <div>{total}</div>
            </div>
          </div>
          {checkoutUrl && (
            <a
              href={checkoutUrl}
              className="block w-full flex justify-center bg-black text-white py-4"
            >
              Proceed to Checkout
            </a>
          )}
        </>
      )}
    </div>
  );
};

export default CartView;
