import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import banner from "../../assets/banner.png";
export type TDonation = {
  _id: string;
  title: string;
  image: string;
  category: string;
  description: string;
  amount: string;
  collectedAmount: string;
  endDate: string;
  donators: string[];
};

const Donation = ({ donations }: { donations: TDonation[] }) => {
  console.log(donations);
  return (
    <div className="col-span-9 grid grid-cols-1 lg:grid-cols-3 gap-5 w-[80%] mx-auto">
      {donations?.map((donation: TDonation) => (
        <div
          key={donation._id}
          className="rounded-2xl px-8 flex flex-col items-start justify-between overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl hover:scale-[102%] transition-all"
        >
          <Image
            className="drop-shadow-2xl h-[30%] w-[100%]"
            src={banner}
            alt=""
          />
          <h1 className="text-2xl font-semibold">{donation?.title}</h1>
          <p>{donation?.description}</p>
          <p>
            <span className="font-semibold">Price:</span> {donation?.amount}
          </p>
          <p>
            {" "}
            <span className="font-semibold">Category:</span>{" "}
            {donation?.category}
          </p>
          <Link
            href={`/donations/${donation._id}`}
            className="mt-2 w-full text-right"
          >
            <button className="text-white bg-blue-950 p-2 rounded text-lg">
              Donate Now
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Donation;
