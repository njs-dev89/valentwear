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
    <div
      styles={{
        height: "100%",
        overflow: "auto",
        paddingBottom: 5,
        bg: "text",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        px: 2,
        color: "background",
        ...(isEmpty && { justifyContent: "center" }),
      }}
    >
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
          <div sx={{ marginLeft: "auto", minWidth: "10rem", paddingLeft: 5 }}>
            <div gap={1} columns={2} sx={{ my: 3 }}>
              <p>Subtotal:</p>
              <p sx={{ marginLeft: "auto" }}>{subTotal}</p>
              <p>Shipping:</p>
              <p sx={{ marginLeft: "auto" }}> - </p>
              <p>Tax: </p>
              <p sx={{ marginLeft: "auto" }}> - </p>
            </div>

            <br />
            <div gap={1} columns={2}>
              <div variant="bold">Estimated Total:</div>
              <div variant="bold" sx={{ marginLeft: "auto" }}>
                {total}
              </div>
            </div>
          </div>
          {checkoutUrl && (
            <a variant="nav" href={checkoutUrl}>
              Proceed to Checkout
            </a>
          )}
        </>
      )}
    </div>
  );
};

export default CartView;
