import { FaSearch } from "react-icons/fa";
import { BsCalendar3 } from "react-icons/bs";
import { MdOutlineFileDownload } from "react-icons/md";
import { LuArrowUpDown } from "react-icons/lu";
import plus from "../../assets/plus.png";
import reload from "../../assets/reload.png";

import RequestDetails from "./RequestDetails";
import { useContext, useState } from "react";
import { ModalContext } from "../ModalContext/ModalProvider";
import Modal from "../../Modal/Modal";

import greenLogo from "../../assets/logoInGreen.png";
import couponPersentage from "../../assets/12 Coupons.png";
import middleLine from "../../assets/middleLine.png";

const CouponRequest = () => {
  const { openModal, isModalOpen } = useContext(ModalContext);
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  const handleNext = () => {
    setIsButtonVisible(false);
  };
  return (
    <>
      {isModalOpen && <Modal onClose={handleNext} />}
      <div className="px-10 font-medium text-[#28643b] breadcrumbs">
        <ul>
          <li>Coupons</li>

          <li>Coupon Request</li>
        </ul>
      </div>

      <div className="px-4 py-4 lg:px-10 lg:py-10">
        <div className="bg-white w-full p-5 rounded-xl">
          <div className="md:flex items-center justify-between">
            <div className="md:flex items-center gap-2 mb-4 lg:mb-0">
              <h1 className="font-medium tracking-wider text-lg">
                Coupon Request
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
            <RequestDetails />
          </div>
        </div>
      </div>
      {/* <div>
        {isButtonVisible && (
          <button onClick={openModal} className="bg-red-500">
            button
          </button>
        )}
      </div> */}
      {isButtonVisible ? (
        <div className="flex justify-center py-10">
          <div className="bg-white w-auto px-12 rounded-lg relative flex space-x-4 ">
            <div className=" relative">
              <img className="mt-2 " src={greenLogo} alt="" />
              <img
                className="absolute bottom-2 "
                src={couponPersentage}
                alt=""
              />
            </div>
            <div>
              <img src={middleLine} alt="" />
            </div>
            <div className="mt-4 flex items-center ">
              <div>
                <h1 className="text-lg font-bold tracking-wider">20% Off</h1>
                <p>On Any Appointment</p>
                <p className="mt-3 text-xs text-gray-400 tracking-wider">
                  Valid From 01 February 2022
                </p>
                <p className=" text-sm text-gray-400 tracking-wider">
                  Valid Till 01 February 2022
                </p>
              </div>
              <div className="pl-7">
                <button
                  onClick={openModal}
                  className="bg-[#3a643b] text-white text-sm rounded-xl px-10 py-3">
                  Accept
                </button>
              </div>
            </div>
          </div>
          <div className="bg-[#f5f5f6] rounded-full h-14 w-14 absolute transform -translate-x-80 -bottom-[170px]"></div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default CouponRequest;
