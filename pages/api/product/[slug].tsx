import { NextApiRequest, NextApiResponse } from "next";
import fetchProducts from "../../../utils/fetchProducts";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const slug = req.query.slug;
  console.log(slug);
  const productsData = await fetchProducts();
  const parsedProducts = JSON.parse(productsData);
  const productData = parsedProducts?.find((product) => product.slug === slug);
  //   console.log(productData);
  res.status(200).json(productData);
}
