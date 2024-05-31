import leftArrow from "../../assets/leftArrow.png";
import RightArrow from "../../assets/rightArrow.png";
const RequestDetails = () => {
  const coupons = [
    {
      name: "AMR20XOFF",
      status: "Active",
      validFrom: "19 Oct, 2024",
      validTill: "19 Oct, 2024",
      maxRedemption: 12,
      request: "Accept",
    },
    {
      name: "AMR20XOFF",
      status: "Active",
      validFrom: "19 Oct, 2024",
      validTill: "19 Oct, 2024",
      maxRedemption: 20,
      request: "Accept",
    },
    {
      name: "AMR20XOFF",
      status: "Inactive",
      validFrom: "18 Oct, 2024",
      validTill: "18 Oct, 2024",
      maxRedemption: 50,
      request: "Accept",
    },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="py-2 px-4 text-center">
              <input type="checkbox" />
            </th>
            <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">
              Coupon Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">
              Valid From
            </th>
            <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">
              Valid Till
            </th>
            <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">
              Max Redemption Of Coupon
            </th>
            <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">
              Request
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {coupons.map((coupon, index) => (
            <tr
              key={index}
              className="hover:bg-gray-50 transition-colors duration-200">
              <td className="py-4 px-4 text-center">
                <input type="checkbox" />
              </td>
              <td className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                {coupon.name}
              </td>
              <td
                className={`px-6 py-3 text-left text-xs font-bold uppercase tracking-wider ${
                  coupon.status === "Active" ? "text-green-500" : "text-red-500"
                }`}>
                {coupon.status}
              </td>
              <td className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                {coupon.validFrom}
              </td>
              <td className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                {coupon.validTill}
              </td>
              <td className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                {coupon.maxRedemption}
              </td>
              <td
                className={`px-6 py-3 text-left text-sm font-bold uppercase tracking-wider ${
                  coupon?.status === "Active"
                    ? "text-[#3a643b]"
                    : "text-gray-400"
                }   cursor-pointer`}>
                {coupon.request}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex  pt-14 font-medium  items-center justify-between">
        <div>Rows per page: 8</div>
        <div className="flex items-center gap-7">
          1-8 of 80
          <div className="flex items-center gap-5">
            <img src={leftArrow} alt="" />
            <img src={RightArrow} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestDetails;
