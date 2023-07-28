"use client";
import { IProduct } from "./Interface";
import { useState } from "react";
import { useAppDispatch } from "@/redux/store";
import Image from "next/image";
import { BsTrash } from "react-icons/bs";
import { cartActions } from "@/redux/features/cartSlice";

interface Props {
  cartItem: IProduct;
}

const CartItem = ({ cartItem }: Props) => {
  const [quantity, setQuantity] = useState(cartItem.quantity);
  const dispatch = useAppDispatch();

  const increament = () => {
    setQuantity(quantity + 1);
    dispatch(cartActions.addtoCart({ product: cartItem, quantity: 1 }));
  };
  const decreament = () => {
    setQuantity(quantity - 1);
    dispatch(cartActions.removeFromCart(cartItem._id));
  };
  const rmProduct = () => {
    dispatch(cartActions.removeProduct(cartItem._id));
  };
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center w-full px-5 py-7 gap-5 border-b border-gray-300 ">
      <div className="">
        <Image
          // @ts-ignore
          src={cartItem.images}
          alt={cartItem.title}
          width={250}
          height={250}
          className="rounded-md"
        />
      </div>
      <div className="flex flex-col justify-between items-start w-full">
        <div className="flex justify-between items-center w-80 sm:w-full flex-initial">
          <h4 className="text-xl">{cartItem.title}</h4>
          <button onClick={rmProduct}>
            <BsTrash size={25} className="cursor-pointer" />
          </button>
        </div>
        <h5 className="font-semibold my-2 text-gray-400">
          {cartItem.subtitle}
        </h5>
        <p className="flex flex-col gap-5 my-1 font-semibold text-base">
          Delivery Estimation
          <span className="text-yellow-500">5 Working Days</span>
        </p>
        <div className="flex justify-between items-center w-80 sm:w-full flex-initial">
          <div className="text-xl font-bold">
            ${cartItem.price * cartItem.quantity}
          </div>
          <div className="flex justify-center items-center gap-5 text-2xl font-bold mt-8">
            <p>Quantity:</p>
            <button
              onClick={decreament}
              className="flex justify-center items-center w-10 h-10 border border-gray-700 rounded-full"
            >
              -
            </button>
            {quantity}
            <button
              onClick={increament}
              className="flex justify-center items-center w-10 h-10 border border-gray-700 rounded-full"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
