import GetProducts from "@/components/shared/SanityProducts";
import { IProduct } from "@/components/shared/Interface";
import ImageTemp from "@/components/utilites/ImageTemp";
import AddtoCart from "@/components/shared/AddtoCart";

const getProducts = async ({ params }: { params: { slug: string } }) => {
  const data: IProduct[] = await GetProducts();
  return data.filter((product) => product.slug.current === params.slug);
};

const page = async ({ params }: { params: { slug: string } }) => {
  const data: IProduct[] = await getProducts({ params });
  const finalData = data[0];
  return (
    <div className="bg-[#FCFCFC] m-6">
      <div className="max-w-[1240px] w-full mx-auto py-16">
        <div className="m-8 lg:m-1">
          <div className="grid grid-cols-[5rem,1fr] bs:grid-cols-[10rem,1fr] lg:grid-cols-[10rem,1fr,1fr] gap-1 ">
            <ImageTemp products={finalData} />
            <div className="flex flex-col justify-start items-start col-span-2 lg:col-span-1 lg:ml-5">
              <h3 className="text-2xl mt-4 tracking-wider font-bold">
                {finalData.title}
              </h3>
              <p className="text-gray-400 text-xl font-semibold">
                {finalData.subtitle}
              </p>
              <p className="mt-16 mb-3 text-xl font-semibold">Select Size</p>
              <div className="flex justify-between items-center text-xl font-semibold text-white gap-x-5  uppercase my-3 ">
                <span className="w-10 h-10 flex items-center justify-center cursor-pointer rounded-full hover:bg-slate-200 hover:text-black bg-slate-400">
                  xs
                </span>
                <span className="w-10 h-10 flex items-center justify-center cursor-pointer rounded-full hover:bg-slate-200 hover:text-black bg-slate-400">
                  s
                </span>
                <span className="w-10 h-10 flex items-center justify-center cursor-pointer rounded-full hover:bg-slate-200 hover:text-black bg-slate-400">
                  m
                </span>
                <span className="w-10 h-10 flex items-center justify-center cursor-pointer rounded-full hover:bg-slate-200 hover:text-black bg-slate-400">
                  l
                </span>
                <span className="w-10 h-10 flex items-center justify-center cursor-pointer rounded-full hover:bg-slate-200 hover:text-black bg-slate-400">
                  xl
                </span>
              </div>
              <h3 className="font-normal mt-10 mb-6 text-2xl">
                Price: <span className="font-bold">${finalData.price}.00</span>
              </h3>
              {/* <AddtoCartProduct
            product={product}
            qty={1}
            userId={userId as string}
          /> */}
              <AddtoCart product={finalData} quantity={1} />
            </div>
          </div>
          <div className="bg-white my-16">
            <div className="relative p-3 lg:p-10">
              <div className="text-[#F2F3F7] text-6xl lg:text-8xl font-bold">
                Overview
              </div>
              <div className="">
                <p className="absolute font-bold -translate-y-10 lg:-translate-y-14 text-xl">
                  Product Information
                </p>
              </div>
              <div className="border border-b-0 border-black m-4"></div>
            </div>
            <div className="grid grid-cols-[1fr,3fr] w-full px-2 lg:px-8 my-4">
              <div>
                <p className="font-bold">Product Deatails</p>
              </div>
              <div>
                <p className="text-justify">{finalData.description}</p>
              </div>
            </div>
            <div className="grid grid-cols-[1fr,3fr] w-full px-2 lg:px-8 my-4">
              <div className="">
                <p className="font-bold">Product Care</p>
              </div>
              <div className="">
                {finalData.productcare.map((care, index) => (
                  <p key={index}>{care}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

export async function generateStaticParams() {
  const posts: IProduct[] = await GetProducts();

  return posts.map((post) => ({
    slug: post.slug.current,
  }));
}
