import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";

const CouponDetails = () => {
  const coupons = [
    {
      name: "AlinMhew",
      validFrom: "1st Feb 2023",
      validTill: "22nd Mar 2023",
      status: "Active",
      visibility: "Show it to All Doctors",
      discountType: "Percentage",
      inventory: "200",
      maxRedemption: "15",
      appointmentType: "All",
    },
    {
      name: "Jackock",
      validFrom: "1st Feb 2023",
      validTill: "22nd Mar 2023",
      status: "Inactive",
      visibility: "Show it to All Doctors",
      discountType: "Flat",
      inventory: "200",
      maxRedemption: "20",
      appointmentType: "All",
    },
    {
      name: "Shayaan",
      validFrom: "1st Feb 2023",
      validTill: "22nd Mar 2023",
      status: "Inactive",
      visibility: "Show it to doctors with certain concern",
      discountType: "Percentage",
      inventory: "200",
      maxRedemption: "10",
      appointmentType: "Chat",
    },
    {
      name: "Alinthew",
      validFrom: "1st Feb 2023",
      validTill: "22nd Mar 2023",
      status: "Active",
      visibility: "Select Particular Docs",
      discountType: "Flat",
      inventory: "200",
      maxRedemption: "5",
      appointmentType: "Video Call",
    },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">
              <input type="checkbox" className="checkbox" />
            </th>
            <th className="px-6 py-3 text-left text-xs font-bold   uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-bold tracking-wider">
              Valid From
            </th>
            <th className="px-6 py-3 text-left text-xs font-bold tracking-wider">
              Valid Till
            </th>
            <th className="px-6 py-3 text-left text-xs font-bold tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-bold tracking-wider">
              Visibility
            </th>
            <th className="px-6 py-3 text-left text-xs font-bold tracking-wider">
              Discount Type
            </th>
            <th className="px-6 py-3 text-left text-xs font-bold tracking-wider">
              Inventory
            </th>
            <th className="px-6 py-3 text-left text-xs font-bold tracking-wider">
              Max Redemption
            </th>
            <th className="px-6 py-3 text-left text-xs font-bold tracking-wider">
              Appointment Type
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">
              Usage
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {coupons.map((coupon, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">
                <input type="checkbox" className="checkbox" />
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {coupon.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {coupon.validFrom}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {coupon.validTill}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                <span
                  className={`px-2 inline-flex text-xs leading-5 font-bold  ${
                    coupon.status === "Active"
                      ? " text-green-500"
                      : " text-red-500"
                  }`}>
                  {coupon.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {coupon.visibility}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {coupon.discountType}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {coupon.inventory}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {coupon.maxRedemption}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {coupon.appointmentType}
              </td>
              <NavLink to="/usageList">
                <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900">
                  <IoIosArrowForward />
                </td>
              </NavLink>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CouponDetails;
