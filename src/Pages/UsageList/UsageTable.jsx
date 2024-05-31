const UsageTable = () => {
  const usages = [
    {
      doctorName: "Lorem ipsum",
      redemptionOfCoupon: 15,
      videoChat: 1,
      chat: 5,
      offline: 0,
      numberOfCouponUsed: "3/6",
    },
    {
      doctorName: "Lorem ipsum",
      redemptionOfCoupon: 20,
      videoChat: 5,
      chat: 1,
      offline: 0,
      numberOfCouponUsed: "3/6",
    },
    {
      doctorName: "Lorem ipsum",
      redemptionOfCoupon: 5,
      videoChat: 3,
      chat: 3,
      offline: 0,
      numberOfCouponUsed: "4/6",
    },
    {
      doctorName: "Lorem ipsum",
      redemptionOfCoupon: 6,
      videoChat: 6,
      chat: 0,
      offline: 0,
      numberOfCouponUsed: "6/6",
    },
    {
      doctorName: "Lorem ipsum",
      redemptionOfCoupon: 10,
      videoChat: 1,
      chat: 5,
      offline: 0,
      numberOfCouponUsed: "2/6",
    },
  ];
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-bold tracking-wider">
              Doctor Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-bold tracking-wider">
              Redemption of Coupon
            </th>
            <th className="px-6 py-3 text-left text-xs font-bold tracking-wider">
              Video Chat
            </th>
            <th className="px-6 py-3 text-left text-xs font-bold tracking-wider">
              Chat
            </th>
            <th className="px-6 py-3 text-left text-xs font-bold tracking-wider">
              Offline
            </th>
            <th className="px-6 py-3 text-left text-xs font-bold tracking-wider">
              No. of Coupon Used
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {usages.map((usage, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {usage.doctorName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {usage.redemptionOfCoupon}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {usage.videoChat}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {usage.chat}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {usage.offline}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {usage.numberOfCouponUsed}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsageTable;
