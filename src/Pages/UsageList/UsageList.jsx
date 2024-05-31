import { BsCalendar3 } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { LuArrowUpDown } from "react-icons/lu";
import { MdOutlineFileDownload } from "react-icons/md";
import plus from "../../assets/plus.png";
import reload from "../../assets/reload.png";
import UsageTable from "./UsageTable";

const CouponTable = () => {
  return (
    <>
      <div className="px-10 font-medium text-[#28643b] breadcrumbs">
        <ul>
          <li>Coupons</li>

          <li>Coupon List</li>
          <li>Usage List</li>
        </ul>
      </div>
      <div className="px-4 py-4 lg:px-10 lg:py-10">
        <div className="bg-white w-full p-5 rounded-xl">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="flex flex-col lg:flex-row items-center gap-2 mb-4 lg:mb-0">
              <h1 className="font-medium text-lg">Usage List</h1>
              <div className="relative">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  className="bg-[#f5f7f5] text-[#b8cbbd] py-2 px-4 rounded-xl focus:outline-none pl-10"
                  type="text"
                  placeholder="search here"
                />
              </div>
              <div className="flex gap-3 items-center">
                <img src={plus} alt="Add" />
                <img src={reload} alt="Reload" />
                <BsCalendar3 className="text-2xl text-[#3a643b]" />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MdOutlineFileDownload className="text-2xl text-[#3a643b]" />
              <LuArrowUpDown className="text-2xl text-[#3a643b]" />
            </div>
          </div>

          <div className="mt-4 ">
            <UsageTable />
          </div>
        </div>
      </div>
    </>
  );
};

export default CouponTable;
