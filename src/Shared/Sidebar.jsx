import { useContext, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

import dashboard from "../assets/dashboard.png";
import doctors from "../assets/doctor.png";
import patients from "../assets/patient.png";
import appointments from "../assets/appointment.png";
import specialty from "../assets/speciality.png";
import coupons from "../assets/coupons.png";
import concerns from "../assets/concerns.png";
import referral from "../assets/referral.png";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";

const Sidebar = () => {
  const [isCouponsDropdownOpen, setIsCouponsDropdownOpen] = useState(false);

  const toggleCouponsDropdown = () => {
    setIsCouponsDropdownOpen(!isCouponsDropdownOpen);
  };

  return (
    <div>
      <div className="flex  h-full mt-5 rounded-tr-3xl  ">
        <div className="w-64 rounded-tr-3xl bg-white hidden lg:block ">
          <h1 className="px-4 pt-4 font-medium">Main</h1>
          <div>
            <ul className="text-lg mb-5 p-4 space-y-8 mt-5">
              <li className="flex items-center justify-between">
                <NavLink
                  className="flex items-center gap-3 font-medium text-[#666776]"
                  to="/dashboard">
                  <img src={dashboard} alt="" />
                  Dashboard
                </NavLink>
                <IoIosArrowForward />
              </li>
              <li className="flex items-center justify-between">
                <NavLink
                  className="flex items-center gap-3 font-medium text-[#666776]"
                  to="/doctors">
                  <img src={doctors} alt="" />
                  Doctors
                </NavLink>
                <IoIosArrowForward />
              </li>
              <li className="flex items-center justify-between">
                <NavLink
                  className="flex items-center gap-3 font-medium text-[#666776]"
                  to="/patients">
                  <img src={patients} alt="" />
                  Patients
                </NavLink>
                <IoIosArrowForward />
              </li>
              <li className="flex items-center justify-between">
                <NavLink
                  className="flex items-center gap-3 font-medium text-[#666776]"
                  to="/appointments">
                  <img src={appointments} alt="" />
                  Appointments
                </NavLink>
                <IoIosArrowForward />
              </li>
              <li className="flex items-center justify-between">
                <NavLink
                  className="flex items-center gap-3 font-medium text-[#666776]"
                  to="/specialty">
                  <img src={specialty} alt="" />
                  Specialty
                </NavLink>
                <IoIosArrowForward />
              </li>
              <li className="flex flex-col">
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={toggleCouponsDropdown}>
                  <div className="flex items-center gap-3 font-medium text-[#666776]">
                    <img src={coupons} alt="" />
                    Coupons
                  </div>
                  {isCouponsDropdownOpen ? (
                    <IoIosArrowDown />
                  ) : (
                    <IoIosArrowForward />
                  )}
                </div>
                {isCouponsDropdownOpen ? (
                  <div>
                    <ul className="ml-6 mt-4 space-y-2">
                      <li className="flex items-center gap-2">
                        <NavLink
                          className={({ isActive, isPending }) =>
                            `${isPending ? "" : ""} ${
                              isActive
                                ? "text-[#28643b] font-bold"
                                : "text-[#93b19d]"
                            }`
                          }
                          to="/couponList">
                          {({ isActive }) => (
                            <div className="flex items-center gap-2">
                              {isActive ? <IoIosArrowForward /> : ""}
                              Coupon List
                            </div>
                          )}
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className={({ isActive, isPending }) =>
                            `${isPending ? "" : ""} ${
                              isActive
                                ? "text-[#28643b] font-bold"
                                : "text-[#93b19d]"
                            }`
                          }
                          to="/couponRequest">
                          {({ isActive }) => (
                            <div className="flex items-center gap-2">
                              {isActive ? <IoIosArrowForward /> : ""}
                              <h1>Coupon Request</h1>
                            </div>
                          )}
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                ) : (
                  ""
                )}
              </li>
              <li className="flex items-center justify-between">
                <NavLink
                  className="flex items-center gap-3 font-medium text-[#666776]"
                  to="/concerns">
                  <img src={concerns} alt="" />
                  Concerns
                </NavLink>
                <IoIosArrowForward />
              </li>
              <li className="flex items-center justify-between">
                <NavLink
                  className="flex items-center gap-3 font-medium text-[#666776]"
                  to="/referral">
                  <img src={referral} alt="" />
                  Referral
                </NavLink>
                <IoIosArrowForward />
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-1 overflow-x-auto ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
