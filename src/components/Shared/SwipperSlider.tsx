"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import Link from "next/link";
import { urlForImage } from "../../../sanity/lib/image";
import { IProduct } from "./Interface";

interface Swip {
  data: IProduct[];
}

const SwipperSlider = async ({ data }: Swip) => {
  return (
    <>
      {/* create a new component for this swiper and only pass the data as props. the swiper component should be client component */}
      <Swiper
        spaceBetween={50}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {data.map((item) => (
          <SwiperSlide key={item._id}>
            <div className="m-8">
              <Link href={`products/${item.slug.current}`}>
                <Image
                  width={300}
                  height={300}
                  src={urlForImage(item.images[0]).url()}
                  alt={"products"}
                />
                <h2 className="text-xl font-bold my-2">{item.title}</h2>
                <p className="text-2xl font-bold my-2">${item.price}</p>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SwipperSlider;
