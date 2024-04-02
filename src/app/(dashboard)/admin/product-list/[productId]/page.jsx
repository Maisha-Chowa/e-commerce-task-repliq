import React from "react";

const ProductDetails = async ({ params }) => {
  const id = params?.productId;
  console.log(id);
  const res = await fetch(`${process.env.BACKEND_URL}/eyeglass/${id}`);
  const data = await res.json();
  console.log(data.data);
  const productsData = data?.data;
  return (
    <div className="flex max-w-7xl mx-auto items-center border-b border-gray-300">
      <div className="w-[40%] p-10">
        <img src={productsData?.image} className="w-full" alt="book" />
      </div>

      <div className="w-[50%] space-y-3">
        <div className="flex flex-row">
          <h1 className="text-3xl font-semibold"> {productsData?.name}</h1>
          <button className="bg-blue-950 p-4 rounded-xl text-white font-bold m-4">
            Sell
          </button>
        </div>

        <h1 className="text-xl font-semibold">Price: {productsData?.price}</h1>
        <p className="text-xl">
          <span className="font-semibold"> Quantity:</span>{" "}
          {productsData?.quantity}
        </p>
        <p className="text-xl">
          {" "}
          <span className="font-semibold"> Frame Material::</span>{" "}
          {productsData?.frameMaterial}
        </p>
        <p className="text-xl">
          {" "}
          <span className="font-semibold">Short Frame Shape: </span>
          {productsData?.frameShape}
        </p>
        <p className="text-xl">
          <span className="font-semibold"> Long Lens Type: </span>
          {productsData?.lensType}
        </p>
        <p className="text-xl">
          <span className="font-semibold"> Brand: </span>
          {productsData?.brand}
        </p>
        <p className="text-xl">
          <span className="font-semibold"> Gender: </span>
          {productsData?.gender}
        </p>
        <p className="text-xl">
          <span className="font-semibold"> Color: </span>
          {productsData?.color}
        </p>
        <div className="flex flex-row ">
          <button
            // onClick={handleupdate}
            className="bg-blue-950 p-4 rounded-xl text-white font-bold mx-4 "
          >
            Update EyeGlass
          </button>
          <>
            <button
            //   onClick={handleDelete}
              className="bg-blue-950 p-4 rounded-xl text-white font-bold"
            >
              Delete EyeGlass
            </button>
          </>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
