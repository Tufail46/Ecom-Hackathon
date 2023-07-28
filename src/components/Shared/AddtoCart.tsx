"use client";
import { FiShoppingCart } from "react-icons/fi";
import { useState } from "react";
import { IProduct } from "./Interface";
import { useAppDispatch } from "@/redux/store";
import { cartActions } from "@/redux/features/cartSlice";

type IProps = {
  product: IProduct;
  quantity: number;
  // userId: string;
};

const AddtoCart = (props: IProps) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useAppDispatch();
  const subtract = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const addtoCart = () => {
    dispatch(
      cartActions.addtoCart({ product: props.product, quantity: quantity })
    );
  };

  return (
    <div>
      <div className="flex gap-2 items-center mb-6">
        <p className="text-xl font-bold">Quantity:</p>
        <button
          className="flex justify-center items-center w-10 h-10 border border-gray-700 rounded-full"
          onClick={subtract}
        >
          -
        </button>
        {quantity}
        <button
          className="flex justify-center items-center w-10 h-10 border border-gray-700 rounded-full"
          onClick={() => setQuantity(quantity + 1)}
        >
          +
        </button>
      </div>
      <button
        className="bg-black text-white h-14 py-2 px-8 flex gap-3 items-center"
        onClick={addtoCart}
      >
        <FiShoppingCart size={"1.5em"} /> Add to Cart
      </button>
    </div>
  );
};

export default AddtoCart;
