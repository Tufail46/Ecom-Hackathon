"use client";
import { FiShoppingCart } from "react-icons/fi";
import { useState } from "react";
import { IProduct } from "./Interface";
import { useAppDispatch } from "@/redux/store";
import { cartActions } from "@/redux/features/cartSlice";
import { urlForImage } from "../../../sanity/lib/image";
import { Toaster, toast } from "react-hot-toast";

type IProps = {
  product: IProduct;
  quantity: number;
  userId: string;
};

const AddtoCart = (props: IProps) => {
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();

  const subtract = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleRequestData = async () => {
    const res = await fetch(`/api/cart/${props.userId}`);
    if (!res.ok) {
      throw new Error("Failed to Fetch Data From API");
    }
    const data = await res.json();
    return data;
  };

  const handleAddToCart = async () => {
    const res = await fetch(`/api/cart`, {
      method: "POST",
      body: JSON.stringify({
        product_id: props.product._id,
        quantity: quantity,
        image: urlForImage(props.product.images[0]).url(),
        product_name: props.product.title,
        subcat: props.product.subtitle,
        price: props.product.price,
        totalprice: props.product.totalPrice,
      }),
    });
    if (!res.ok) {
      throw new Error("Failed to add Data");
    }
  };

  const handleCart = async () => {
    setIsLoading(true);
    try {
      const cartData = await handleRequestData();
      const existingItem = cartData.cartItems.find(
        (item: any) => item._id === props.product._id
      );

      if (existingItem) {
        const newQuantity = existingItem.quantity + quantity;
        const newPrice = props.product.price * newQuantity;
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/cart`,
          {
            method: "PUT",
            body: JSON.stringify({
              product_id: props.product._id,
              quantity: newQuantity,
              price: newPrice,
            }),
          }
        );
        if (!res.ok) {
          throw new Error("Failed to update data");
        } else {
          await handleAddToCart();
        }
      }
    } catch (error) {
      console.log((error as { message: string }).message);
    }
    setIsLoading(false);
  };

  const addtoCart = () => {
    toast.promise(handleCart(), {
      loading: "Adding to Cart",
      success: "Product added to Cart",
      error: "Failed to add product to cart",
    });
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
        disabled={isLoading}
      >
        <FiShoppingCart size={"1.5em"} />{" "}
        {isLoading ? "Adding to cart" : "Add to Cart"}
      </button>
      <Toaster />
    </div>
  );
};

export default AddtoCart;
