import { Image as IImage } from "sanity";

export interface IProduct {
  title: string;
  _id: string;
  subtitle: string;
  images: IImage[];
  price: number;
  totalPrice: number;
  description: string;
  productcare: string[];
  quantity: number;
  slug: {
    current: string;
  };
  category: {
    title: string;
    _id: string;
  };
}
