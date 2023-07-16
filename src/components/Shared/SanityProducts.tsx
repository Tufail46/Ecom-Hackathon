import { client } from "../../../sanity/lib/client";
const GetProducts = async () => {
  const res = await client.fetch(
    `*[_type=="products"] | order(_createdAt asc) {
            price,
            _id,
            title,
            images,
            subtitle,
            productcare,
            description,
            slug {
              current
            },
            category -> {
                title,
                _id
              }
          }`
  );
  return res;
};

export default GetProducts;
