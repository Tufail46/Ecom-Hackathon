import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Unique() {
  return (
    <main className="max-w-[1240px] mx-auto w-full my-8">
      <div className="m-8 lg:m-1">
        <div className="grid grid-cols-2">
          <div className="col-span-2 col-start-1 lg:col-start-2">
            <h2 className="text-4xl font-bold lg:text-5xl tracking-wider mb-8">
              Unique and Authentic Vintage Designer Jewellery
            </h2>
          </div>
        </div>
        <div className="grid lg:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="relative z-10">
              <div className="absolute -z-20">
                <p className="text-6xl lg:text-8xl p-4 font-extrabold text-[#F2F3F7]">
                  Different from Others
                </p>
              </div>
              <div>
                <div className="flex justify-around">
                  <div>
                    <div className="m-4 lg:m-8">
                      <h3 className="text-xl font-bold my-4">
                        Using Good Quality Materials
                      </h3>
                      <p className="text-md mb-6">
                        Lorem ipsum dolor sit amt, consectetur adipiscing elit
                      </p>
                    </div>
                    <div className="m-4 lg:m-8">
                      <h3 className="text-xl font-bold my-4">
                        Modern Fashion Design
                      </h3>
                      <p className="text-md">
                        Lorem ipsum dolor sit amt, consectetur adipiscing elit
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="m-4 lg:m-8">
                      <h3 className="text-xl font-bold my-4">
                        100% Handmade Products
                      </h3>
                      <p className="text-md mb-6">
                        Lorem ipsum dolor sit amt, consectetur adipiscing elit
                      </p>
                    </div>
                    <div className="m-4 lg:m-8">
                      <h3 className="text-xl font-bold my-4">
                        Discount for Bulk Orders
                      </h3>
                      <p className="text-md">
                        Lorem ipsum dolor sit amt, consectetur adipiscing elit
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Image src={"/feature.webp"} alt={"/"} width={500} height={500} />
          </div>
          <div>
            <div className="md:mt-16 text-md text-justify mb-8">
              <p>
                This piece is ethically crafted in our small family-owned
                workshop in Peru with unmatched attention to detail and care.
                The Natural color is the actual natural color of the fiber,
                undyed and 100% traceable.
              </p>
            </div>
            <div>
              <Link href={"/products"}>
                <button className="bg-black text-white h-14 py-2 px-8">
                  See All Products
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
