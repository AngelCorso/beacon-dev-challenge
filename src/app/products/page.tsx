import Link from "next/link";
// import productsInterface from "../../types/products"
// import { getProducts } from "~/lib/products";

export default async function Products() {
  // const products = await getProducts()

  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <h1 className="mb-4 text-4xl font-bold">Products</h1>
<div className="grid grid-cols-3 text-center">
  {/* {products.map((product: productsInterface) => ( */}
     <div className="mx-4">
     {/* <h3>{product.name}</h3> */}
     <h2>Producto</h2>
     {/* <img src={product.image} className=""></img> */}
     <img src="https://fastly.picsum.photos/id/323/200/300.jpg?hmac=A2QFYssQ9fNCK_5aWqeo370SEmDX33jJZRSSpkdjFLg" className="h-32 w-32"></img>
     {/* <p>{product.price}</p> */}
     <p>$200</p>
     </div>

     <div className="mx-4">
     {/* <h3>{product.name}</h3> */}
     <h2>Producto</h2>
     {/* <img src={product.image} className=""></img> */}
     <img src="https://fastly.picsum.photos/id/323/200/300.jpg?hmac=A2QFYssQ9fNCK_5aWqeo370SEmDX33jJZRSSpkdjFLg" className="h-32 w-32"></img>
     {/* <p>{product.price}</p> */}
     <p>$200</p>
     </div>

     <div className="mx-4">
     {/* <h3>{product.name}</h3> */}
     <h2>Producto</h2>
     {/* <img src={product.image} className=""></img> */}
     <img src="https://fastly.picsum.photos/id/323/200/300.jpg?hmac=A2QFYssQ9fNCK_5aWqeo370SEmDX33jJZRSSpkdjFLg" className="h-32 w-32"></img>
     {/* <p>{product.price}</p> */}
     <p>$200</p>
     </div>

     <div className="mx-4">
     {/* <h3>{product.name}</h3> */}
     <h2>Producto</h2>
     {/* <img src={product.image} className=""></img> */}
     <img src="https://fastly.picsum.photos/id/323/200/300.jpg?hmac=A2QFYssQ9fNCK_5aWqeo370SEmDX33jJZRSSpkdjFLg" className="h-32 w-32"></img>
     {/* <p>{product.price}</p> */}
     <p>$200</p>
     </div>
  {/* ))} */}
</div>
    </main>
  );
}
