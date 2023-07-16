import Image from "next/image";
import { urlForImage } from "../../../../sanity/lib/image";
import Link from "next/link";
import { IProduct } from "@/components/Shared/Interface";
import GetProducts from "@/components/Shared/SanityProducts";

const getProducts = async () => {
  const res = await GetProducts();
  return res;
};

const Products = async () => {
  const data: IProduct[] = await getProducts();
  return (
    <div className="max-w-[1240px] w-full mx-auto">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 justify-center">
        {data.map((item) => (
          <div key={item._id} className="m-8">
            <Link href={`products/${item.slug.current}`}>
              <Image
                width={300}
                height={300}
                src={urlForImage(item.images[0]).url()}
                alt={"products"}
              />
              <h2 className="text-xl font-bold my-2">{item.title}</h2>
              <p className="text-sm text-gray-400 font-bold my-2">
                {item.subtitle}
              </p>
              <p className="text-2xl font-bold my-2">${item.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
