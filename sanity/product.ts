import { defineField } from "sanity";

export const products = {
  name: "products",
  title: "Products",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Product Title",
      type: "string",
    }),
    defineField({
      name: "subtitle",
      title: "Product Sub Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title", // This means the slug will be generated from the title field
        maxLength: 96, // You can specify a maximum length for the slug
      },
    }),
    defineField({
      name: "price",
      title: "Product Price",
      type: "number",
    }),
    defineField({
      name: "description",
      title: "Product Description",
      type: "string",
    }),
    defineField({
      name: "productcare",
      title: "Product Care",
      type: "array",
      of: [
        {
          name: "car",
          title: "Care",
          type: "string",
        },
      ],
    }),
    defineField({
      name: "images",
      title: "Project Images",
      type: "array",
      of: [
        {
          name: "ima",
          title: "images",
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    }),
    defineField({
      name: "category",
      title: "Product Category",
      type: "reference",
      to: [
        {
          type: "category",
        },
      ],
    }),
  ],
};
