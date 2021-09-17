import React, { ChangeEvent, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaMinus, FaPlus } from "react-icons/fa";
import {
  useRemoveItemFromCart,
  useUpdateItemQuantity,
} from "../../customHooks/cartHooks";
import { getPrice } from "../../utils/helpers";

const CartItem = ({ item, currencyCode }) => {
  const updateItem = useUpdateItemQuantity();
  const removeItem = useRemoveItemFromCart();
  const [quantity, setQuantity] = useState(item.quantity);
  const [removing, setRemoving] = useState(false);
  const updateQuantity = async (quantity) => {
    await updateItem(item.variant.id, quantity);
  };
  const handleQuantity = (e) => {
    const val = Number(e.target.value);

    if (Number.isInteger(val) && val >= 0) {
      setQuantity(val);
    }
  };
  const handleBlur = () => {
    const val = Number(quantity);

    if (val !== item.quantity) {
      updateQuantity(val);
    }
  };
  const increaseQuantity = (n = 1) => {
    const val = Number(quantity) + n;

    if (Number.isInteger(val) && val >= 0) {
      setQuantity(val);
      updateQuantity(val);
    }
  };
  const handleRemove = async () => {
    setRemoving(true);

    try {
      // If this action succeeds then there's no need to do `setRemoving(true)`
      // because the component will be removed from the view
      await removeItem(item.variant.id);
    } catch (error) {
      console.error(error);
      setRemoving(false);
    }
  };

  useEffect(() => {
    // Reset the quantity state if the item quantity changes
    if (item.quantity !== Number(quantity)) {
      setQuantity(item.quantity);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item.quantity]);

  return (
    <div>
      <div
        sx={{
          padding: 1,
          border: "1px solid gray",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          height={130}
          width={130}
          unoptimized
          alt={item.variant.image.altText}
          src={item.variant.image.src}
        />
      </div>
      <div>
        <div
          as={Link}
          href={`/product/${item.variant.product.handle}/`}
          sx={{ fontSize: 3, m: 0, fontWeight: 700 }}
        >
          <>
            {item.title}
            <p>
              {getPrice(
                item.variant.priceV2.amount,
                item.variant.priceV2.currencyCode || "USD"
              )}
            </p>
          </>
        </div>
        <ul sx={{ mt: 2, mb: 0, padding: 0, listStyle: "none" }}>
          <li>
            <div className="flex">
              <button onClick={() => increaseQuantity(-1)}>
                <FaMinus />
              </button>

              <label>
                <input
                  className="appearance-none outline-none border-2 border-black focus:outline-none text-center font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
                  type="number"
                  max={99}
                  min={0}
                  value={quantity}
                  onChange={handleQuantity}
                  onBlur={handleBlur}
                />
              </label>
              <button onClick={() => increaseQuantity(1)}>
                <FaPlus />
              </button>
            </div>
          </li>
          {item.variant.selectedOptions.map((option) => (
            <li key={option.value}>
              {option.name}:{option.value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

/**
 *         

 */

export default CartItem;
