import Products from "../../../../components/ui/Products";
const ManageProductPage = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/eyeglass`, {
    cache: "no-store",
  });
  const data = await res.json();

  // console.log(data);

  return (
    <div>
      <div className="my-12">
        <h1 className="text-center text-6xl">
          <span className="text-blue-950">All Products </span>
        </h1>
      </div>
      <Products products={data?.data} />
    </div>
  );
};

export default ManageProductPage;
