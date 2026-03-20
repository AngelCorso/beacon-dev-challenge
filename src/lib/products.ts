import dbConnect from "./db";
import Products from "../models/products";

type SearchParams = {
  name?: string;
}

export async function getProducts({name}: SearchParams) {
  await dbConnect()

  const products = Products.find({name: { $regex: name || "", $options: "i" }})

  return products
}

export async function getProductBySlug(slug: string) {
  await dbConnect();

  const product = await Products.findOne({ slug });

  return product;
}