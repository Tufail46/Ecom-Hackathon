import Image from "next/image";
import { urlForImage } from "../../../../sanity/lib/image";
import Link from "next/link";
import { IProduct } from "@/components/shared/Interface";
import GetProducts from "@/components/shared/SanityProducts";

const getProducts = async ({ params }: { params: { category: string } }) => {
  const str = params.category;
  const str2 = str.charAt(0).toUpperCase() + str.slice(1);
  if (str2 === "Male" || str2 === "Female" || str2 === "Kids") {
    const res: IProduct[] = await GetProducts();
    return res.filter((product) => product.category.title === (str2 as string));
  }
};

const page = async ({ params }: { params: { category: string } }) => {
  const data = await getProducts({ params });
  let finalData: IProduct[] = [];

  if (data) {
    finalData = data;
  }

  return (
    <div className="max-w-[1240px] w-full mx-auto">
      {finalData.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 justify-center">
          {finalData.map((item) => (
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
      ) : (
        <div className="flex w-full h-40 justify-center items-center">
          <h1 className="text-5xl font-extrabold">
            No Data for {params.category}
          </h1>
        </div>
      )}
    </div>
  );
};

export default page;

export async function generateStaticParams() {
  const posts: IProduct[] = await GetProducts();

  return posts.map((post) => ({
    category: post.category.title,
  }));
}
