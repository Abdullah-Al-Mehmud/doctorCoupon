import { FaSearch } from "react-icons/fa";
import { BsCalendar3 } from "react-icons/bs";
import { MdOutlineFileDownload } from "react-icons/md";
import { LuArrowUpDown } from "react-icons/lu";
import plus from "../../assets/plus.png";
import reload from "../../assets/reload.png";
import CouponDetails from "./CouponDetails";
import leftArrow from "../../assets/leftArrow.png";
import RightArrow from "../../assets/rightArrow.png";

const CouponList = () => {
  return (
    <>
      <div className="px-10 font-medium text-[#28643b] breadcrumbs">
        <ul>
          <li>Coupons</li>

          <li>Coupon List</li>
        </ul>
      </div>
      <div className="px-4 py-4 lg:px-10 lg:py-10">
        <div className="bg-white w-full p-5 rounded-xl">
          <div className="md:flex items-center justify-between">
            <div className="md:flex items-center gap-2 mb-4 lg:mb-0">
              <h1 className="font-medium tracking-wider text-lg">
                Coupon List
              </h1>
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
            <CouponDetails />
          </div>
        </div>
      </div>
      <div className="flex px-14 font-medium text-gray-400 items-center justify-between">
        <div>Rows per page: 8</div>
        <div className="flex items-center gap-7">
          1-8 of 80
          <div className="flex items-center gap-5">
            <img src={leftArrow} alt="" />
            <img src={RightArrow} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CouponList;
