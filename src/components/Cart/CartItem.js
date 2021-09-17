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
    <div className="flex gap-4 mx-auto px-8 py-4">
      <div>
        <Image
          height={130}
          width={130}
          unoptimized
          alt={item.variant.image.altText}
          src={item.variant.image.src}
        />
      </div>
      <div className="w-full">
        <div className="flex flex-row justify-between">
          <h3 className="text-sm sm:text-base font-medium">{item.title}</h3>
          <p className="text-sm sm:text-base font-medium">
            {getPrice(
              item.variant.priceV2.amount,
              item.variant.priceV2.currencyCode || "USD"
            )}
          </p>
        </div>
        <ul>
          {item.variant.selectedOptions.map((option) => (
            <li key={option.value} className="text-xs mt-2 mb-4">
              {option.name}:{option.value}
            </li>
          ))}
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
              <button
                className="ml-4 text-red-700 text-xs font-medium"
                onClick={handleRemove}
              >
                Remove
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

/**
 *         

 */

export default CartItem;
