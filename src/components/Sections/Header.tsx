import Image from "next/image";
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";

export default function Header() {
  return (
    <main>
      <div className="max-w-[1240px] w-full flex flex-col lg:flex-row justify-between mx-auto mb-20">
        {/* left side div */}
        <div className="m-8 lg:m-1">
          <p className="my-10 px-5 py-2 bg-[#E1EDFF] w-32 font-bold text-[#2118FF] text-center rounded-md">
            Sale 70%
          </p>
          <h1 className="scroll-m-20 text-5xl font-bold lg:text-6xl tracking-wide">
            An Industrial Take on Streetwear
          </h1>
          <p className="leading-7 [&:not(:first-child)]:mt-8 mb-8 text-md md:pr-6">
            Anyone can beat you but no one can beat your outfit as long as you
            wear Dine outfits.
          </p>
          <Link href={"/products"}>
            <button className="bg-black text-white h-14 py-2 px-8 flex gap-3 items-center">
              <FiShoppingCart size={"1.5em"} /> Start Shopping
            </button>
          </Link>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12 lg:mt-24">
            <Image src={"/Featured1.webp"} alt={"/"} width={100} height={100} />
            <Image src={"/Featured2.webp"} alt={"/"} width={100} height={100} />
            <Image src={"/Featured3.webp"} alt={"/"} width={100} height={100} />
            <Image src={"/Featured4.webp"} alt={"/"} width={100} height={100} />
          </div>
        </div>
        {/* right side div */}
        <div className="relative hidden lg:block">
          <div className="absolute bg-[#FBECE2] w-[550px] h-[550px] rounded-full -z-10 translate-y-6"></div>
          <div className="">
            <Image
              src={"/header.webp"}
              alt="Header"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
