import React from "react";

export default function NewsLetter() {
  return (
    <div className="mx-w-[1240px] w-full my-56 mx-auto">
      <div className="m-8 lg:m-1">
        <div className="relative z-10 text-center">
          <div>
            <p className="text-7xl md:text-9xl lg:text-[150px] tracking-tighter font-extrabold text-[#F2F3F7]">
              Newsletter
            </p>
          </div>
          <div className=" absolute -top-1 md:top-1 inset-0">
            <h2 className="scroll-m-20 pb-2 text-3xl font-bold md:my-2 tracking-wide first:mt-0">
              Subscribe Our Newsletter
            </h2>
            <p className="text-mg mb-1 md:mb-4">
              Get the latest information and promo offers directly
            </p>
            <div className="flex justify-center items-center">
              <div>
                <input
                  type="text"
                  placeholder="Input your Email Address"
                  className=" h-10 border border-black"
                />
              </div>
              <div className="my-4 md:my-0 mx-4">
                <button className="bg-black text-white py-2 px-8">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
