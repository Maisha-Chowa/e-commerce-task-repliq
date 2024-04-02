import ManageDonationTable from "@/components/ui/ManageDonationTable";
import { getAllDonations } from "@/utils/getAllDonations";

const ManageOrderPage = async () => {
  // const { data } = await getAllDonations();
  console.log(data);
  return (
    <p> this is order list</p>
    // <div className="bg-gray-200 lg:p-6 md:p-6 p-4 rounded-xl lg:min-h-screen">
    //   <ManageDonationTable donations={data} />
    // </div>
  );
};

export default ManageOrderPage;
