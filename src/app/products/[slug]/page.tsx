import Link from "next/link";
import {productsInterface} from "../../../types/products"
import { getProductBySlug } from "~/lib/products";

type Props = {
    params: Promise<{slug: string}>
}

export default async function ProductsPage({params}: Props) {
  const { slug } = await params
  const product: productsInterface = await getProductBySlug(slug)

  return (
    <main className="flex min-h-screen flex-col items-center p-8">
     <h1 className="mb-4 text-4xl font-bold">{`Product ${product.name}`}</h1>
     <img src={product.image} className=""></img>
     <p>{`$${product.price}`}</p>
     <p>{product.slug}</p>
     <p>{product.description}</p>
     <p>{product.category}</p>
     <p>{product.brand}</p>
     <p>{product.stock}</p>
     <p>{product.requiresPrescription}</p>
    </main>
  );
}
