// import { useContext } from "react";
import Navbar from "../Shared/Navbar";

import Sidebar from "../Shared/Sidebar";
// import { ModalContext } from "../Pages/ModalContext/ModalProvider";

const Root = () => {
  // const { isModalOpen } = useContext(ModalContext);
  return (
    // <div className={`${isModalOpen ? "bg-[#acacac]" : "bg-[#f5f5f6]"}`}>
    <div className="bg-[#f5f5f6]">
      <Navbar></Navbar>

      <Sidebar />
    </div>
  );
};

export default Root;
