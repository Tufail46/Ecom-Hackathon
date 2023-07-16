"use client";
import { useState } from "react";
import Image from "next/image";
import { Image as IImage } from "sanity";
import { urlForImage } from "../../../sanity/lib/image";

interface Products {
  title: string;
  images: IImage[];
}
interface ImageProps {
  products: Products;
}

const ImageTemp = ({ products }: ImageProps) => {
  const [image, setImage] = useState<number>(0);

  return (
    <>
      <div className="flex flex-col items-center gap-y-5">
        {products.images.map((image, index) => (
          <Image
            key={index}
            src={urlForImage(image).url()}
            alt={products.title}
            width={100}
            height={100}
            onMouseEnter={() => setImage(index)}
          />
        ))}
      </div>
      <div className="w-full h-full">
        <Image
          src={urlForImage(products.images[image]).url()}
          alt={products.title}
          width={1000}
          height={1000}
        />
      </div>
    </>
  );
};

export default ImageTemp;
