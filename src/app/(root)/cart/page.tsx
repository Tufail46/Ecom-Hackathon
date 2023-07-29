"use client";
import CartItem from "@/components/shared/CartItem";
import { selectIsLoading } from "@/redux/features/cartSlice";
import { useAppSelector } from "@/redux/store";
import { BiShoppingBag } from "react-icons/bi";
import { Toaster } from "react-hot-toast";
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";

const CartDataLoadingFromApi = () => {
  return (
    <div className="max-w-[1240px] w-full mx-auto py-16">
      <div className="m-8 lg:m-1">
        <div className="flex justify-center items-center w-full h-40">
          <h1>Loading Data</h1>
        </div>
      </div>
    </div>
  );
};

const LoadedCartData = () => {
  const cartItems = useAppSelector((state) => state.cart.items);
  const totalItems = useAppSelector((state) => state.cart.totalQuantity);
  const totalPrice = useAppSelector((state) => state.cart.totalAmount);
  if (cartItems.length > 0) {
    return (
      <div className="max-w-[1240px] w-full mx-auto py-16">
        <div className="m-8 lg:m-1">
          <h3 className="text-xl font-bold">Shopping Cart</h3>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-x-5 px-5">
            <div className="basis-3/4">
              {cartItems.map((elm) => (
                <CartItem key={elm._id} cartItem={elm} />
              ))}
            </div>
            <div className="basis-1/4 bg-gray-200 rounded-md w-full h-full  mt-5 sm:mt-0 p self-start">
              <div className="flex flex-col items-center justify-between gap-5">
                <h4 className="text-lg font-bold">Order Summary</h4>
                <div className="flex justify-between items-center w-full px-3">
                  <div>
                    <p>Quantity</p>
                  </div>
                  <div>
                    <p>{totalItems}</p>
                  </div>
                </div>
                <div className="flex justify-between items-center w-full px-3">
                  <div>
                    <p>Total Amount</p>
                  </div>
                  <div>
                    <p>${totalPrice}</p>
                  </div>
                </div>
                <div>{/* <StripeCheckOutButton products={cartItems} /> */}</div>
              </div>
            </div>
          </div>
          <Toaster />
        </div>
      </div>
    );
  } else {
    return (
      <div className="max-w-[1240px] w-full mx-auto py-16">
        <div className="m-8 lg:m-1">
          <div className="flex flex-col w-full gap-10 h-full justify-center items-center">
            <BiShoppingBag size={200} />
            <h1>Your shopping bag is empty</h1>
            <Link href={"/products"}>
              <button className="bg-black text-white h-14 py-2 px-8 flex gap-3 items-center">
                <FiShoppingCart size={"1.5em"} /> Start Shopping
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
};

const Cartpage = () => {
  const isLoading = useAppSelector(selectIsLoading);
  return <>{isLoading ? <CartDataLoadingFromApi /> : <LoadedCartData />}</>;
};

export default Cartpage;
