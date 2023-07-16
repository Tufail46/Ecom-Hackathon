import { IProduct } from "../Shared/Interface";
import GetProducts from "../Shared/SanityProducts";
import SwipperSlider from "../Shared/SwipperSlider";

const getProducts = async () => {
  const res = await GetProducts();
  return res;
};

const Products = async () => {
  const data: IProduct[] = await getProducts();
  return (
    <div className="max-w-[1240px] w-full mx-auto my-20 p-8">
      <p className="text-center uppercase tracking-wide text-[#2118FF]">
        PRODUCTS
      </p>
      <h2 className="scroll-m-20 pb-2 text-3xl font-bold text-center my-4 tracking-wide first:mt-0">
        Check What We Have
      </h2>
      <div className="">
        <SwipperSlider data={data} />
      </div>
    </div>
  );
};

export default Products;
