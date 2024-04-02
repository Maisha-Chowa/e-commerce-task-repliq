import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";

const Products = ({ products }) => {
  console.log(products);
  return (
    <div className="col-span-9 grid grid-cols-1 lg:grid-cols-3 gap-5 w-[80%] mx-auto">
      {products?.map((product) => (
        <div
          key={product._id}
          className="rounded-2xl px-8 flex flex-col items-start justify-between overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl hover:scale-[102%] transition-all"
        >
          <Image
            className="drop-shadow-2xl h-[30%] w-[100%]"
            src={product?.image}
            width={400}
            height={300}
            alt=""
          />
          <h1 className="text-2xl font-semibold">{product?.name}</h1>

          <p>
            <span className="font-semibold">Price:</span> {product?.price}
          </p>
          <p>
            <span className="font-semibold">Quantity:</span> {product?.quantity}
          </p>
          <p>
            {" "}
            <span className="font-semibold">FrameMaterial:</span>{" "}
            {product?.frameMaterial}
          </p>
          <Link
            href={`/products/${product._id}`}
            className="mt-2 w-full text-right"
          >
            <button className="text-white bg-blue-950 p-2 rounded text-lg">
              Show all Details
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Products;
