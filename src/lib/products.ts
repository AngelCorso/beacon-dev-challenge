import dbConnect from "./db";
import Products from "../models/products";

export async function getProducts() {
await dbConnect()

const products = Products.find({})

return products
}

export async function getProductBySlug(slug: string) {
  await dbConnect();

  const product = await Products.findOne({ slug });

  return product;
}