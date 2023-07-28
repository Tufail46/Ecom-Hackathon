"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useAppSelector } from "@/redux/store";

export default function NavBar() {
  const [nav, setNav] = useState(false);
  const totalItems = useAppSelector((state) => state.cart.totalQuantity);

  const handleNav = () => {
    // This variable is to operate the shifting of Navbar from lg to md and sm
    setNav(!nav);
  };
  return (
    <header>
      {/* For large screen */}
      <div className="flex justify-between items-center h-24 lg:h-24 max-w-[1240px] mx-auto px-8 lg:px-0">
        {/* logo Image div */}
        <div>
          <Link href={"/"}>
            <Image src={"/Logo.webp"} alt="logo" width={150} height={150} />
          </Link>
        </div>
        {/* Page Routing div */}
        <div className="hidden lg:flex gap-9">
          <Link href={"/female"}>Female</Link>
          <Link href={"/male"}>Male</Link>
          <Link href={"/kids"}>Kids</Link>
          <Link href={"/products"}>All Products</Link>
        </div>
        {/* Search bar div */}
        <div className="items-center hidden lg:flex border border-gray-300 rounded-md">
          <CiSearch className="mx-2" />
          <input
            type="text"
            placeholder="What you are looking for"
            className="w-96"
          />
        </div>
        {/* cart div */}
        <Link href={"/cart"}>
          <div className="relative hidden lg:block">
            <div className="absolute bg-red-500 rounded-full text-red px-2 py-1 text-xs -top-2 left-5 text-white">
              {totalItems}
            </div>
            <div className="bg-[#F1F1F1] rounded-full p-2">
              <FiShoppingCart />
            </div>
          </div>
        </Link>
        {/* Cross div */}
        <div onClick={handleNav} className="lg:hidden cursor-pointer">
          <AiOutlineMenu size={25} />
        </div>
      </div>
      {/* For Small screen */}
      <div
        className={nav ? "lg:hidden fixed left-0 top-0 w-full h-screen" : ""}
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[100%] h-screen bg-white p-10"
              : "fixed left-[-100%] top-0 p-10"
          }
        >
          <div className="flex w-full items-center justify-between">
            <div>
              <Link href={"/"} onClick={() => setNav(false)}>
                <Image src={"/Logo.webp"} alt="logo" width={150} height={150} />
              </Link>
            </div>
            <div
              onClick={handleNav}
              className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
            >
              <AiOutlineClose />
            </div>
          </div>
          <div className="py-28 flex flex-col items-center text-center">
            <ul>
              <Link href="/cart">
                <div className="relative">
                  <div className="absolute bg-red-500 rounded-full text-red px-2 py-1 text-xs -top-2 left-11 text-white">
                    {totalItems}
                  </div>
                  <div className="bg-[#F1F1F1] p-2 rounded-full text-center mx-6">
                    <FiShoppingCart />
                  </div>
                </div>
              </Link>
              <Link href="/female">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Female
                </li>
              </Link>
              <Link href="/male">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Male
                </li>
              </Link>
              <Link href="/kids">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Kids
                </li>
              </Link>
              <Link href="/products">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  All Products
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
