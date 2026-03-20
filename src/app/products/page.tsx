import Link from "next/link";
import {productsInterface} from "../../types/products"
import { getProducts } from "~/lib/products";

type Props = {
  searchParams: Promise<{
    search?: string;
  }>;
};

export default async function Products({
  searchParams,
}: Props) {
  const {search} = await searchParams
  const products = await getProducts({name: search})

  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <h1 className="mb-4 text-4xl font-bold">Products</h1>
      <form>
      <input
      type="text"
          name="search"
          placeholder="Search Product"></input>
      <button type="submit">buscar</button>
      </form>
<div className="grid grid-cols-1 md:grid-cols-3 text-center">
  {products.map((product: productsInterface, index) => (
    <Link href={`/products/${product.slug}`}>
     <div key={product.slug} className="border p-4">
     <h3>{product.name}</h3>
     <h3>{product.slug}</h3>
     <img src={product.image} className="h-32 w-32 mx-auto"></img>
     <p>{`$${product.price}`}</p>
     </div>
    </Link>
  ))}
</div>
    </main>
  );
}
