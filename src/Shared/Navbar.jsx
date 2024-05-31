import logo from "../assets/logo.png";
import amrutam from "../assets/logoSpell.png";
import profile from "../assets/profile.png";
import { FaBars, FaSearch } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import search from "../assets/search.png";
import mail from "../assets/mail.png";
import bell from "../assets/bell.png";
import settings from "../assets/settings.png";
const Navbar = () => {
  return (
    <div>
      <div className="flex bg-white py-5 items-center justify-between px-5 ">
        <div className="flex items-center gap-2">
          <img className="h-14" src={logo} alt="" />
          <img className="h-14" src={amrutam} alt="" />
          <FaBars />
          <div className="relative px-4">
            <img
              src={search}
              alt=""
              className="absolute left-7 top-1/2 transform -translate-y-1/2 "
            />

            <input
              className="bg-[#f5f7f5] color-[#b8cbbd] py-2 px-4 rounded-xl focus:outline-none pl-10 "
              type="text"
              placeholder="search here"
            />
          </div>
        </div>
        <div>
          <div className="flex items-center gap-7">
            <div className="flex items-center gap-4">
              <div className="relative">
                <img src={mail} alt="" />
                <div className="h-3 w-3 bg-red-600 rounded-full absolute top-0 -right-1"></div>
              </div>

              <div className="relative">
                <img src={bell} alt="" />
                <div className="h-3 w-3 bg-red-600 rounded-full absolute top-0 -right-1"></div>
              </div>
            </div>

            <div>
              <h1 className="text-[#28643b] font-bold text-xl">Liam Michale</h1>
              <p className="flex justify-end font-bold text-[#93b19d]">admin</p>
            </div>
            <div>
              <img className="rounded-xl w-10 h-10" src={profile} alt="" />
            </div>
            <img src={settings} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
