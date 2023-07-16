import Image from "next/image";
import Link from "next/link";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      <div className="max-w-[1240px] mx-auto w-full mt-8 mb-32">
        <div className="m-8 lg:m-1">
          <div className="grid lg:grid-cols-5 gap-4">
            <div className="lg:col-span-2 items-center">
              <div>
                <Image
                  src={"/Logo.webp"}
                  alt={"logo"}
                  width={150}
                  height={150}
                />
              </div>
              <div className="text-[#666674] my-10">
                <p>
                  Small, artisan label that offers a thoughtfully curated
                  collection of high quality everyday essentials made.
                </p>
              </div>
              <div className="flex gap-5">
                <Link href={""}>
                  <div className="rounded-xl bg-[#F1F1F1] p-4 cursor-pointer">
                    <BsTwitter />
                  </div>
                </Link>
                <Link href={""}>
                  <div className="rounded-xl bg-[#F1F1F1] p-4 cursor-pointer">
                    <BsFacebook />
                  </div>
                </Link>
                <Link href={""}>
                  <div className="rounded-xl bg-[#F1F1F1] p-4 cursor-pointer">
                    <FaLinkedinIn />
                  </div>
                </Link>
              </div>
            </div>
            <div className="text-[#666674]">
              <p className=" text-xl font-bold mb-4">Company</p>
              <ul>
                <Link href={"/"}>
                  <li className="text-md">About</li>
                </Link>
                <Link href={"/"}>
                  <li className="text-md my-2">Terms of Use</li>
                </Link>
                <Link href={"/"}>
                  <li className="text-md my-2">Privacy Policy</li>
                </Link>
                <Link href={"/"}>
                  <li className="text-md my-2">How it Works</li>
                </Link>
                <Link href={"/"}>
                  <li className="text-md my-2">Contact Us</li>
                </Link>
              </ul>
            </div>
            <div className="text-[#666674]">
              <p className=" text-xl font-bold mb-4">Support</p>
              <ul>
                <Link href={"/"}>
                  <li className="text-md">Support Carrer</li>
                </Link>
                <Link href={"/"}>
                  <li className="text-md my-2">24h Service</li>
                </Link>
                <Link href={"/"}>
                  <li className="text-md my-2">Quick Chat</li>
                </Link>
              </ul>
            </div>
            <div className="text-[#666674]">
              <p className=" text-xl font-bold mb-4">Contact</p>
              <ul>
                <Link href={"/"}>
                  <li className="text-md">WhatsApp</li>
                </Link>
                <Link href={"/"}>
                  <li className="text-md my-2">Support 24h</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-black">
        <div className="max-w-[1240px] mx-auto w-full">
          <div className="mx-8 lg:mx-1">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 lg:gap-16">
              <div className="text-[#666674] text-xl my-2 lg:my-4">
                Copyright © 2022 Dine Market
              </div>
              <div className="text-[#666674] text-xl my-2 lg:my-4">
                Design by.{" "}
                <span className="text-black font-bold">PanaCloud</span>
              </div>
              <div className="text-[#666674] text-xl my-2 lg:my-4">
                Code by.{" "}
                <span className="text-black font-bold">Muhammad Tufail</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
