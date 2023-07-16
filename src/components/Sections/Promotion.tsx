import Image from "next/image";
import React from "react";

export default function Promotion() {
  return (
    <div className="max-w-[1240px] w-full mx-auto my-20 lg:mt-6">
      <div className="m-8 lg:m-1">
        <p className="text-center uppercase tracking-wide text-[#2118FF]">
          Promotions
        </p>
        <h2 className="scroll-m-20 pb-2 text-3xl font-bold text-center my-4 tracking-wide first:mt-0">
          Our Promotions Event
        </h2>
        <div className="grid lg:grid-cols-4 gap-6">
          <div className="md:col-span-2">
            <div className="bg-[#D6D6D8] mb-8 flex justify-around items-center">
              <div className="">
                <p className="text-3xl font-bold ml-4 lg:ml-0">GET UP TO 60%</p>
                <p className="text-xl ml-4 lg:ml-0">For the summer season</p>
              </div>
              <div>
                <Image src={"/event1.webp"} alt="/" width={230} height={230} />
              </div>
            </div>
            <div className="bg-[#212121] h-44 text-center pt-8">
              <p className="text-3xl font-bold text-white">GET 30% Off</p>
              <p className="text-lg text-white mt-2">USE PROMO CODE</p>
              <button className="bg-[#474747] text-white uppercase tracking-widest rounded-xl h-10 py-2 px-8">
                dineweekend sale
              </button>
            </div>
          </div>
          <div className="bg-[#EFE1C7] flex flex-col items-center">
            <p className="self-start mt-6 ml-5">Flex Sweatshirt</p>
            <div className="self-start flex ml-5">
              <p className="line-through text-lg">$100.00</p>
              <p className="text-2xl font-bold ml-3">$75.00</p>
            </div>
            <Image src={"/event2.webp"} alt={"/"} width={230} height={230} />
          </div>
          <div className="bg-[#D7D7D9] flex flex-col items-center">
            <p className="self-start mt-6 ml-5">Flex Push Button Bomber</p>
            <div className="self-start flex ml-5">
              <p className="line-through text-lg">$225.00</p>
              <p className="text-2xl font-bold ml-3">$190.00</p>
            </div>
            <Image src={"/event3.webp"} alt={"/"} width={230} height={230} />
          </div>
        </div>
      </div>
    </div>
  );
}
