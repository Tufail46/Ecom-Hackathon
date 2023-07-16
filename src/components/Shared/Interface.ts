import { Image as IImage } from "sanity";

export interface IProduct {
  title: "string";
  _id: "string";
  subtitle: "string";
  images: IImage[];
  price: "number";
  description: string;
  productcare: string[];
  slug: {
    current: string;
  };
  category: {
    title: "string";
    _id: "string";
  };
}
